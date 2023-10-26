"use client"
import React from "react";

import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Unstable_Grid2";

import SideThumb from "@/components/Search/SideThumb";

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

const videos = Array(8).fill(video, 0);

const SearchPage = () => {
    return (
        <Grid container>
            <Grid xs={4}>
                <h1>Categories</h1>
            </Grid>
            <Grid xs={1}>
                <Divider orientation="vertical" />
            </Grid>
            <Grid xs={7}>
                { videos.map((current, index) => <SideThumb key={`${index}-video-result`} classes="mb-3" video={ current } />) }
            </Grid>
        </Grid>
    )
}

export default SearchPage;
