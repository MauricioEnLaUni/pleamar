import React from "react";

import Link from "next/link";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import HomeLogo from "@/components/Home/HomeLogo";
import LocaleSwitcher from "./i18n/LocaleSwitcher";
import TextInput from "@/components/globals/TextInput";

import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
    return (
        <header>
            <Grid container className="flex justify-between">
                <HomeLogo xs={3} />
                <Grid xs={9} justifyContent="space-between">
                    <Stack>
                        <Stack direction="row" justifyContent="flex-end" className="mr-5 items-center" spacing={12}>
                            <LocaleSwitcher />
                            <button>
                                { true ? <LightModeIcon /> : <DarkModeIcon />}
                            </button>
                            <Link href="/en/profile">
                                <IconButton>
                                    <AccountCircleIcon className="text-white" />
                                </IconButton>
                            </Link>
                        </Stack>
                        <Stack direction="row">
                            <TextInput
                                variant="filled"
                                label="Buscar"
                                color="secondary"
                                margin="dense"
                                className="flex w-7/12"
                                InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                    ),
                                }}/>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </header>
    );
}

export default Header;
