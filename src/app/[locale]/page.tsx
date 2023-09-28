"use client";

import { useTranslations } from "next-intl";
import VideoComponent from "@/components/VideoComponent";

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
            width: 680,
            height: 120,
        },
        url: "/videos/temp"
    }

    return (
        <main>
            <h1>{ t("title")} </h1>
            <VideoComponent video={video}/>
        </main>
    )
}

export default Index;
