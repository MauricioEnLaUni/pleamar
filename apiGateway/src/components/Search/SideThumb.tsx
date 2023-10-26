/// <reference path="../Video.d.ts" />
import React from "react";

import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";

const SideThumb = ({ video, classes }: { video: Video, classes: string }) => {
    const { measurements, metadata, url } = video;
    return (
        <article className={ classes }>
            <Link href={ metadata.id } >
                <Grid container>
                    <Grid xs={2} className="mr-2">
                        <Image src={ url } alt={`${metadata.name}`} width={144} height={48} />
                    </Grid>
                    <Grid className="flex align-middle items-center">
                        <Stack>
                            <h1>{ metadata.name }</h1>
                            <h2>{ metadata.author }</h2>
                            <Stack direction="row">
                                <p>Views</p>
                                <p> * </p>
                                <p>Published</p>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Link>
        </article>
    );
}

export default SideThumb;