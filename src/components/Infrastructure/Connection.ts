/// <reference path="./types.d.ts" />
import { decode } from "@msgpack/msgpack";

import PgAdapter from "./PgAdapter";
import axios from "@/components/Auth/axios";
import getPrivateKey from "@/lib/utils/getPrivateKey";

const fetchChecksum = async () => {
    try {
        return await axios.get("csrf", {
            withCredentials: true
        });
    } catch (error)
    {
        throw error;
    }
}

const validateChecksum = async (req: { data: string, signature: string }) => {
    const key = getPrivateKey();

    const data = Buffer.from(req.data);
    const sign = Buffer.from(req.signature);

    if (!key.verify(data, sign))
    {
        throw new Error("Unauthorized");
    }

    const contents = decode<RequestMultiple>(key.decrypt(data)) as RequestMultiple;
    
    return {
        contents,
    };
}

class AuthAdapter
{
    private readonly adapter = new PgAdapter();
    
    private async operate(req: { data: string, signature: string })
    {
        try {
            const data = await validateChecksum(req);
            const { commands } = data.contents;

            const operation = commands.map(command => {
                const [data, operation] = command;
                return `${operation}(${ data.join(",") })`;
            });

            try {
                return this.adapter.transact(operation);
            } catch (error)
            {
                throw error;
            }
        } catch (error)
        {
            throw error;
        }
    }

    // User Operations
    create_user(req: string) {}
    update_user(req: string) {}
    update_user_admin(req: string) {}

    // Token Operations
    getToken(req: string) {}
    blacklistToken(req: string) {}

}