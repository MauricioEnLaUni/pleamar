import { faker } from "@faker-js/faker";

import { PrismaClient } from "../../../prisma/generated/clientMetadata/index.js";
import { randomUUID } from "crypto";

export default async () => {
    const prisma = new PrismaClient();

    let i = -1;
    while(++i < 15)
    {
        await prisma.users.create({
            data: {
                id: randomUUID()
            }
        });
    }
    
    i = -1;
    const users = await prisma.users.findMany();

    while(++i < 100)
    {
        const index = Math.floor(Math.random() * 15);

        const video = await prisma.video_entity.create({
            data: {
                type: "MP4",
                uploader: users[index].id,
            }
        });

        const metadata = await prisma.video_metadata.create({
            data: {
                video: video.id,
                length_ms: 369000,
                file_size: 24456,
            }
        });

        await Promise.all([
            prisma.statuses.create({
                data: {
                    video: video.id,
                    current: "PROCESSING"
                }
            }),
            prisma.video_titles.create({
                data: {
                    video: metadata.id,
                    content: faker.lorem.sentence({ min: 1, max: 6 }),
                }
            }),
            prisma.video_description.create({
                data: {
                    video: metadata.id,
                    content: faker.lorem.paragraphs({ min: 1, max: 15 })
                }
            }),
            prisma.views.create({
                data: {
                    owner: video.id,
                    viewer: users[0].id,
                }
            })
        ]);
    }

    const createViews = await prisma.$queryRaw`
        CREATE VIEW video AS
        SELECT v.id as video, v.type as extension, v.uploader as autor, estado, duracion, tamaño, titulo, descripcion, vistas
        FROM video_entity as v
        JOIN (
            SELECT DISTINCT ON(video) video AS id, current AS estado
            FROM statuses
            ORDER BY id, added DESC
        ) AS s
        ON v.id = s.id
        JOIN (
            SELECT DISTINCT ON(video) video AS id, length_ms AS duracion, file_size as tamaño
            FROM video_metadata
            ORDER BY video, added DESC
        ) AS m
        ON v.id = m.id
        JOIN (
            SELECT DISTINCT ON(video) video as id, content AS titulo
            FROM video_titles
            ORDER BY video, added DESC
        ) AS t
        ON v.id = t.id
        JOIN (
            SELECT DISTINCT ON(video) video as id, content AS descripcion
            FROM video_description
            ORDER BY video, added DESC
            LIMIT 1
        ) AS d
        ON v.id = d.id
        JOIN (
            SELECT owner AS id, COUNT(owner) AS vistas
            FROM views
            GROUP BY owner
        ) AS w
        ON v.id = w.id;
    `;

    console.log("Database has been populated");
}
