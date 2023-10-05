/// <reference path="../Video.d.ts" />
import React from "react";

import Image from "next/image";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const VideoThumb = ({ video }: { video: Video }) => {
    const { measurements, metadata, url } = video;

    return (
        <a href={`${ metadata.id }`}>
            <Stack sx={{ display: "flex"  }} >
                <Image
                    src={url}
                    width={ measurements.width }
                    height={ measurements.height }
                    alt={`${ metadata.name } Thumbnail`}
                />
                <Box>
                    <Typography>{ metadata.name }</Typography>
                    <Typography>{ metadata.author }</Typography>
                    <Typography>{ metadata.length }</Typography>
                </Box>
            </Stack>
        </a>
    )
}

export default VideoThumb;
