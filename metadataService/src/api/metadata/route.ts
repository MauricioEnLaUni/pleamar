import express from "express";

import { PrismaClient } from "../../../prisma/generated/clientMetadata/index.js";

const router = express.Router();

router.post("/", async (req, res) => {
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

    if (video && metadata && result.some(e => e))
    {
        res
            .status(201)
            .json({
                id: video.id,
                title: result[0].content,
            })
            .send("Video created successfully");
    }

    res.status(500)
        .send("Video couldn't be uploaded, please try again later");
});

router.get("/all", async (_, res) => {
    const prisma = new PrismaClient();

    try {
        const videos = await prisma.video.findMany();
        res.status(200)
            .json(videos)
            .send("Ok");
    } catch (error) {
        res.status(500).send("No videos were found.");
    } finally {
        prisma.$disconnect;
    }
});

router.get("/front", async (req, res) => {
    const take = req.body.take;
    const prisma = new PrismaClient();

    try {
        return res.status(200).json(
            await prisma.video.findMany({
                where: {
                    estado: "ACTIVE"
                },
                take,
                orderBy: [
                    {
                        vistas: "desc",
                    },
                ],
                select: {
                    video: true,
                    autor: true,
                    duracion: true,
                    titulo: true,
                    vistas: true,
                }
            })
        ).send("Ok");
    } catch (error) {
        return res.status(500).send();
    }
});

router.get("/autor", async (req, res) => {
    const { autor, take } = req.body;
    const prisma = new PrismaClient();

    try {
        return res.status(200).json(
            await prisma.video.findMany({
                where: {
                    autor,
                    estado: "ACTIVE"
                },
                take,
                orderBy: [
                    {
                        vistas: "desc",
                    },
                ],
                select: {
                    video: true,
                    duracion: true,
                    titulo: true,
                    vistas: true,
                }
            })
        ).send("Ok");
    } catch (error) {
        return res.status(500).send();
    }
});

router.get("/single", async (req, res) => {
    const { id } = req.body;
    const prisma = new PrismaClient();

    try {
        return res.status(200).json(
            await prisma.video.findMany({
                where: {
                    video: id,
                },
                select: {
                    video: true,
                    duracion: true,
                    titulo: true,
                    autor: true,
                    descripcion: true,
                    vistas: true,
                }
            })
        ).send("Ok");
    } catch (error) {
        return res.status(500).send();
    }
});


export { router as metadataRouter };
