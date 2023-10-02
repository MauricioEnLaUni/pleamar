"use client"
import React from "react";

import Link from "next/link";

import Stack from "@mui/material/Stack";

const Footer = () => {
  return (
    <div>
        <p>© All rights reserved</p>
        <Link href="/en/privacy">Privacy Policy</Link>
        <Link href="/en/tos">Terms of Service</Link>
        <nav></nav>
        <Stack>
            <button>ENVIAR</button>
        </Stack>
    </div>
  )
}

export default Footer;