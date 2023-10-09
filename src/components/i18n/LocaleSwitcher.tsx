"use client"
import { useTransition } from "react";

import getConfig from "next/config";
import { usePathname, useRouter } from "next/navigation";

import { useLocale, useTranslations } from "next-intl";

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const LocaleSwitcher = () => {
    const t = useTranslations("LocaleSwitcher");
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const { publicRuntimeConfig } = getConfig();

    const changeLocale = (event: SelectChangeEvent) => {
        startTransition(() => {
            const pattern = new RegExp(/^\/.{2}(\/)?/);
            const match = pathname.match(pattern);
            
            const path = `${ event.target.value }${ match ? pathname.slice(match[0].length) : pathname }`;
            router.replace(path);
        });
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
            <InputLabel className="sr-only" id="lang-select-label">{ t("label")}</InputLabel>
            <Select
                labelId="lang-select-label"
                id="lang-select"
                value={ locale }
                label={t("label")}
                onChange={changeLocale}
            >
                {publicRuntimeConfig.langs.map((current: string) => 
                    <MenuItem key={current} value={current}>
                        { current }
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

export default LocaleSwitcher;
