import Grid from "@mui/material/Unstable_Grid2";
import VideoThumb from "./VideoThumb";

import getMetadata from "@/lib/requests/metadata/getMetadata";
import FrontPageMetadata from "@/lib/requests/metadata/FrontMetadata";
import AES from "@/lib/Auth/crypto/AES";

export default async () => {
    const videoRequest: Promise<{ key: string }> = getMetadata(20);
    const bytes = (await videoRequest).key;
    const encrypted = new Uint8Array(bytes.split(",").map(Number));

    const videos = AES.isSecure(encrypted) as FrontPageMetadata[];  

    return(
        <Grid container spacing={2} className="" justifyContent="center" alignItems="center">
            { videos.map((video: FrontPageMetadata, index: number) => (
                <Grid xs={12} md={6} lg={3} key={`video-thumbnail-${ index }`}>
                    <VideoThumb metadata={video}/>
                </Grid>
            ))}
        </Grid>
    );
}
