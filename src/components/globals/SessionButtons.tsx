"use client"
import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { signIn, useSession } from "next-auth/react";

import IconButton from "./IconButton/IconButton";
import { useTranslations } from "next-intl";

export default () => {
    const { data: session } = useSession();
    const t = useTranslations();
    const router = useRouter();
    const wrapRouter = ({ values }: { values: any }) => {
        router.push(values);
    }

    return (
        <Box>
            { session ?
                <IconButton
                    icon="PROFILE"
                    args={`/user/${ 0 }`}
                    action={ wrapRouter }
                    tw={ ["", "text-white"] }
                /> : 
                <Stack direction="row">
                    <Button onClick={ () => signIn() }>
                        { t("header.auth.login") }
                    </Button>
                    <Button onClick={ () => router.push(`/auth/register`) }>
                        { t("header.auth.register") }
                    </Button>
                </Stack>
            }
        </Box>
    );
}
