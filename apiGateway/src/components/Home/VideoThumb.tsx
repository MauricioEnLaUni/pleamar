import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { CardActionArea, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import FrontPageMetadata from "@/lib/requests/metadata/FrontMetadata";

const displayTime = (length: number) => {
    const time = [1000, 60, 60];
    
    const duration = time.map(e => {
        const current = Math.floor(length / e);
        return current > 0 ? current : "";
    });

    return duration.join(":");
}

const url = "/img/stonks.avif";

export default ({ metadata }: { metadata: FrontPageMetadata }) => {
    const length = displayTime(metadata.duracion);

    return (
        <Card sx={{ position: "relative" }}>
            <CardActionArea>
                <CardMedia
                    sx={{ height: 250 }}
                    image={url}
                    title={`${ metadata.titulo } Thumbnail`}
                />
                <Typography>{ length }</Typography>
                <CardContent>
                    <Typography>{ metadata.titulo }</Typography>
                    <Typography>{ metadata.autor }</Typography>
                    <Typography>{ metadata.vistas }</Typography>
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
