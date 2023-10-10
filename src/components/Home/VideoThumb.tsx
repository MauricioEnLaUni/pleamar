/// <reference path="../Video.d.ts" />
import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { CardActionArea, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import MoreVertIcon from '@mui/icons-material/MoreVert';

const displayTime = (length: number) => {
    const time = [1000, 60, 60];
    
    const duration = time.map(e => {
        const current = Math.floor(length / e);
        return current > 0 ? current : "";
    });

    return duration.join(":");
}

const VideoThumb = ({ video }: { video: Video }) => {
    const { measurements, metadata, url } = video;
    const length = displayTime(metadata.length);

    return (
        <Card sx={{ position: "relative" }}>
            <CardActionArea>
                <CardMedia
                    sx={{ height: measurements.height }}
                    image={url}
                    title={`${ metadata.name } Thumbnail`}
                />
                <Typography>{ length }</Typography>
                <CardContent>
                    <Typography>{ metadata.name }</Typography>
                    <Typography>{ metadata.author }</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default VideoThumb;
