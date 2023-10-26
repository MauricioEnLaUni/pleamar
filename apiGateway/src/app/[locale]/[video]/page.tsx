/// <reference path="../../../components/Video.d.ts" />
import React from "react";

import Image from "next/image";
import type { Metadata } from "next";

import getVideos from "@/lib/getVideos";

type Props = {
    params: {
        videoId: string
    }
}

const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const videoData: Promise<Video> = getVideos(params.videoId);
    const video = await videoData;

    return {
        title: video.metadata.name,
        description: video.metadata.description,
        creator:  video.metadata.author,
    }
}

const VideoPage = async ({ params }: Props) => {
    const videoData: Promise<Video> = getVideos(params.videoId);

    const video = await videoData;

    return(
        <section>
            <Image src={ video.url } alt={video.metadata.name} width={480} height={128} />
        </section>
    );
}

export default VideoPage;
