/// <reference path="./types.d.ts" />
import AccountCircle from "@mui/icons-material/AccountCircle";
import Cancel from "@mui/icons-material/Cancel";
import CheckCircle from "@mui/icons-material/CheckCircle";

const CATALOG = {
    PROFILE: AccountCircle,
    CANCEL: Cancel,
    CHECKCIRCLE: CheckCircle,
} as const;
type IconCatalog = keyof typeof CATALOG;

type IconCatalogProps = {
    icon: IconCatalog;
    twProps?: string;
};

export default ({ icon, twProps }: IconCatalogProps) => {
    const DynamicElement = CATALOG[icon];

    return <DynamicElement className={ twProps ?? "" }/>;
};