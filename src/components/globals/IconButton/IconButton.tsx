/// <reference path="./types.d.ts" />
import IconButton from "@mui/material/IconButton";
import IconCatalog from "./IconCatalog";

export default ({ icon, args, action, tw }: IconButtonProps) => (
    <IconButton onClick={() => action(args) } className={tw?.[0] ?? ""}>
        <IconCatalog icon={ icon } twProps={ tw?.[1] }/>
    </IconButton>
);