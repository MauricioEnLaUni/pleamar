import Button from "@mui/material/Button";
import { useTranslations } from "next-intl";

export default (content: string, onClick: (params: any) => any) => {
    const t = useTranslations();

    return(
        <Button
            onClick={onClick}
        >
            { t(content) }
        </Button>
    );
};
