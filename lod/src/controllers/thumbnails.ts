import { PrismaClient } from "../../prisma/generated/clientMetadata/index.js";
import asyncWrapper from "../lib/errors/asyncWrapper.js";
import AES from "../lib/infrastructure/encryption/AES.js";
import metaOptions from "../lib/models/metaOptions.js";

export const createMovie = asyncWrapper(async (req, res) => {
    const { data, user } = req.body;
    const prisma = new PrismaClient();

    const video = await prisma.video_entity.create({
        data: {
            type: data.type,
            uploader: user.username
        }
    });

    const metadata = await prisma.video_metadata.create({
        data: {
            video: video.id,
            length_ms: data.length,
            file_size: data.file_size
        }
    });

    const result = await Promise.all([
        prisma.video_titles.create({
            data: {
                video: video.id,
                content: data.title
            }
        }),
        prisma.video_description.create({
            data: {
                video: video.id,
                content: data.desc
            }
        }),
        prisma.statuses.create({
            data: {
                video: video.id,
                current: "PROCESSING"
            }
        })
    ]);
    
    res
        .status(201)
        .json({
            id: video.id,
            title: result[0].content,
        })
        .send("Video created successfully");
});

export const getAll = asyncWrapper(async (_, res) => {
    const prisma = new PrismaClient();

    const videos = await prisma.video.findMany();

    res.status(200)
        .json(videos)
        .send("Ok");
});

export const populatePage = asyncWrapper(async (req, res) => {
    const take = Number(req.body.limit);
    const prisma = new PrismaClient();

    const values: { [key: string]: any } = await prisma.video.findMany(metaOptions({
        take,
        orderBy: [{ vistas: "desc" }],
        select: {
            video: true,
            autor: true,
            duracion: true,
            titulo: true,
            vistas: true,
        }
    }));
    const hack = values.map(e => {
        return {
            ...e,
            video: e.video.toString(),
            duracion: e.duracion.toString(),
            vistas: e.vistas.toString()
        }
    });

    const encrypted = AES.encrypt(hack);
    const data = { key: encrypted.toString() };

    return res.status(200).json(data).send("Ok");
});

export const byAutor = asyncWrapper(async (req, res) => {
    const { autor, take } = req.body;
    const prisma = new PrismaClient();

    return res.status(200).json(
        await prisma.video.findMany(metaOptions({
            where: { autor },
            take,
            orderBy: [{ vistas: "desc" }],
            select: {
                video: true,
                duracion: true,
                titulo: true,
                vistas: true,
            }
        }))
    ).send("Ok");
});

export const watch = asyncWrapper(async (req, res) => {
    const { id } = req.body;
    const prisma = new PrismaClient();

    return res.status(200).json(
        await prisma.video.findMany(metaOptions({
            where: { video: id },
            select: {
                video: true,
                duracion: true,
                titulo: true,
                autor: true,
                descripcion: true,
                vistas: true,
            }
        }))
    ).send("Ok");
});
