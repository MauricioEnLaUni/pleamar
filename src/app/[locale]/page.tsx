"use client";

import { useTranslations } from "next-intl";

import Grid from "@mui/material/Unstable_Grid2";

import VideoThumb from "@/components/Home/VideoThumb";

const Index = () => {
    const t = useTranslations("Index");
    const video = {
        metadata: {
            author: "Test",
            name: "Test Video",
            id: "alksdmaslfn",
            tags: ["One", "Two", "Three"],
            length: 1000,
            description: "This is a test video, probably will lorem it soon.",
        },
        measurements: {
            width: 256,
            height: 64,
        },
        url: "/img/stonks.avif",
    };
    const cats = Array(3).fill(Array(4).fill(video, 0), 0)

    return (
        <main>
            <Grid container spacing={2} className="" justifyContent="center" alignItems="center">
                { cats.map((cat, index) => (
                    <>
                        <Grid xs={12} key={`cat-title-${index + 1}`}>
                            <h1>Category {index + 1}</h1>
                        </Grid>
                        {cat.map((current: any, index: number) => (
                            <Grid xs={12} md={6} lg={3} key={`home-${index}`}>
                                <VideoThumb video={current}/>
                            </Grid>
                        ))}
                    </>
                ))}
            </Grid>
        </main>
    )
}

export default Index;
