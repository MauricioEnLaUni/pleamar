"use client";

import { useTranslations } from "next-intl";

import Grid from "@mui/material/Unstable_Grid2";

import SearchIcon from '@mui/icons-material/Search';

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
            <h1>{ t("title")} </h1>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid xs={12} className="flex justify-center">
                    <div className="flex w-6/12">
                        <input type="text" className="text-slate-900 w-full"/>
                    </div>
                    <button className="w-1/12 flex">
                        <SearchIcon />
                    </button>
                </Grid>
                { cats.map((cat, index) => (
                    <>
                    <Grid xs={12}>
                        <h1>Category {index + 1}</h1>
                    </Grid>
                    {cat.map((current: any, index: number) => (
                        <Grid xs={3} key={`home-${index}`}>
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
