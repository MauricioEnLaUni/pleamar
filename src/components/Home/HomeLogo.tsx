"use client"
import { useTranslations } from "next-intl";

import Link from "next/link";
import Image from "next/image";

import Grid from "@mui/material/Unstable_Grid2";

import publicRoutes from "@/lib/publicRoutes";

export default ({ xs }: { xs: number }) => {
    const t = useTranslations();
    
    return (
        <Grid xs={xs}>
            <Link href={ publicRoutes.HOME }>
                <Image src="/img/logo.avif" width="72" height="64" alt={t("header.logo")}/>
            </Link>
        </Grid>
    )
}
