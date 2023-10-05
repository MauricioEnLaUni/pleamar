"use client"
import Grid from "@mui/material/Unstable_Grid2";

import Link from "next/link";
import Image from "next/image";

import { useLocale } from "next-intl";

const HomeLogo = ({ xs }: { xs: number }) => {
    const locale = useLocale();
    
    return (
        <Grid xs={xs}>
            <Link href={ locale }>
                <Image src="/img/logo.avif" width="72" height="64" alt={`Pleamar logo`}/>
            </Link>
        </Grid>
    )
}

export default HomeLogo;