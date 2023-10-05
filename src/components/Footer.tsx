"use client"
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";

import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const contacts = [
    [<FacebookIcon sx={{ color: "white" }} />, "cfb"],
    [<WhatsAppIcon sx={{ color: "white" }} />, "cwa"],
    [<EmailIcon sx={{ color: "white" }} />, "c@e"],
    [<LocalPhoneIcon sx={{ color: "white" }} />, "cph"],
    [<LocationOnIcon sx={{ color: "white" }} />, "cli"]
];

const Footer = () => {
    const router = useRouter();

    return (
        <footer className="sm:hidden md:flex mx-auto md:w-10/12 lg:w-8/12 mt-8">
            <Grid xs={0} md={12} container>
                <Grid xs={3}>
                    <Stack direction={"row"}>
                        <Image src="/img/logo.avif" alt="Link home" width={168} height={168} />
                    </Stack>
                </Grid>
                <Grid xs={3}>
                    Servicios
                </Grid>
                <Grid xs={3}>
                    {contacts.map(current => (
                        <IconButton onClick={() => router.push(`/ls?l=${ current[1] }`)} >
                            { current[0] }
                        </IconButton>
                    ))}
                </Grid>
                <Grid xs={3}>
                    <Grid container>

                    </Grid>
                </Grid>
                <Grid xs={12}>
                    <Stack direction="row">
                        <p>© All rights reserved</p>
                        <Link href="/en/privacy">Privacy Policy</Link>
                        <Link href="/en/tos">Terms of Service</Link>
                    </Stack>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;