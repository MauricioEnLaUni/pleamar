"use client"

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = () => {
    const [mode, setMode] = useState(false);

    return (
        <header>
            <Stack direction="row" className="flex justify-around" spacing={4}>
                <Link href="/en">
                    <Image src="/img/logo.avif" width="72" height="64" alt={`Pleamar logo`}/>
                </Link>
                <Box className="flex items-center">
                    <select name="lang" id="lang-select" className="h-1/3">
                        <option value="en">en</option>
                        <option value="es">es</option>
                    </select>
                </Box>
                <button>{ mode ? <LightModeIcon /> : <DarkModeIcon />}</button>
            </Stack>
        </header>
    );
}

export default Header;