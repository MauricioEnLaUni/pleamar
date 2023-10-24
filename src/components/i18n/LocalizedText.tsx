"use client"
import { useTranslations } from "use-intl";

import Typography from "@mui/material/Typography";

export default ({ excerpt, style }: { excerpt: string, style?: string }) => {
    const t = useTranslations();

    return(
        <Typography className={style ?? ""}>
            { t(excerpt) }
        </Typography>
    );
};
