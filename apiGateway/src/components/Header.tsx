import React from "react";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import HomeLogo from "@/components/Home/HomeLogo";
import LocaleSwitcher from "./i18n/LocaleSwitcher";
import TextInput from "@/components/globals/TextInput";

import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import SessionButtons from "./globals/SessionButtons";

export default async () => {
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
                            <SessionButtons/>
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
};
