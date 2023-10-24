"use client"
import Image from "next/image";

import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import config from "@/config";
import { useTranslations } from "next-intl";
import LocalizedText from "@/components/i18n/LocalizedText";

const { img } = config;
const testimonials = Array.from(Array(5).keys());

export default () => {
    const t = useTranslations("VisitorHome");

    return (
        <Grid container>
            <Grid className="relative" xs={12}>
                <Typography className="z-1 absolute start-1/4 select-none top-1/3 font-bold text-slate-950 title-shadow text-6xl border-solid border-sky-200 border-b-2 pb-4 pl-20">{ t("callToAction.main") }</Typography>
                <Button className="z-1 absolute start-2/3 select-none top-2/4" variant="contained">{ t("callToAction.mainButton") }</Button>
                <div className="fog-mask -z-1">
                    <Image src={ `${ img }hero_boats.avif` } alt={ t("heroAlt") } sizes="100vw" width={16} height={9} className="w-full h-auto" />
                </div>
            </Grid>
            <Grid container className="mt-8 flex mx-auto">
                <Grid xs={12}>
                    <h2 className="border-solid border-sky-200 border-b-2 text-2xl font-semibold">{ t("features.title") }</h2>
                </Grid>
                <Grid xs={6}>
                    <Stack className="pr-12">
                        <LocalizedText excerpt={"features.list.feat0"} style={"mt-3 max-w-xs text-lg"} />
                        <LocalizedText excerpt={"features.list.feat1"} style={"mt-24 max-w-xs text-lg"} />
                    </Stack>
                </Grid>
                <Grid xs={6} className="pl-12">
                    <LocalizedText excerpt={"features.list.feat2"} style={"mt-16 max-w-xs text-lg"} />
                </Grid>
            </Grid>
            <Grid xs={12} className="mt-8">
                <Stack>
                    <h3 className="text-center text-2xl font-semibold">{ t("callToAction.secondary") }</h3>
                    <Button className="mx-auto w-4/12 font-semibold mt-3" variant="contained">{ t("callToAction.secondaryButton") }</Button>
                </Stack>
            </Grid>
            <Grid>
                <Stack className="mx-auto w-7/12 my-16">
                    <h4>{ t("testimonials.title") }</h4>
                    <Stack direction="row">
                        { testimonials.map(e => (
                            <LocalizedText key={`testimonials.${ e }`} excerpt={`testimonials.${ e }`} />
                        ))}
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
}