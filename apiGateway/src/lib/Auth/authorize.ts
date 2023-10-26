import axios from "axios";
import AES from "./crypto/AES";

import Services from "../Services.routes";
import { RequestInternal } from "next-auth";

export default async (
    credentials: Record<"username" | "password", string> | undefined,
    _: Pick<RequestInternal, "headers" | "body" | "query" | "method">
) => {
    if (!credentials)
    {
        return null;
    }
    const aes = new AES();
    const body = aes.encrypt(credentials);

    try {
        const response = await axios.post(Services.Auth.user, {
            baseUrl: "htpp://localhost:8027",
            body,
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        });
    
        if (response?.status !== 200)
        {
            return null;
        }
    
        return response.data as any;
    } catch (error) {
        return null;
    }
}