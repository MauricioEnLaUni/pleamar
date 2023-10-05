"use client"
import React from "react";

import { useRouter } from "next/router";
import Image from "next/image";

const videos = [{
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
}, {
    metadata: {
        author: "Test",
        name: "Test Video",
        id: "123456",
        tags: ["One", "Two", "Three"],
        length: 1000,
        description: "This is a test video, probably will lorem it soon.",
    },
    measurements: {
        width: 256,
        height: 64,
    },
    url: "/img/stonks.avif",
}];

const VideoPage = () => {
    const router = useRouter();
    const video = videos.filter(e => e.metadata.id === router.query.slug)[0];

    return(
        <section>
            <Image src={ video.url } alt={video.metadata.name} width={480} height={128} />
        </section>
    );
}

export default VideoPage;