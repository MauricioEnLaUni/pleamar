"use client"
import { signOut } from "next-auth/react";

import Button from "@mui/material/Button";

const UserPage = () => {
    return (
        <div>
            <div>This should be illegal</div>
            <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
    )
}

export default UserPage;
