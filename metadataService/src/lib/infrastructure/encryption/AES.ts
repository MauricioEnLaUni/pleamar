import crypto from "node:crypto";

import { decode, encode } from "@msgpack/msgpack";

export default class AES
{
    private static method = process.env.CRYPTO_METHOD as string;
    private static key = process.env.AES_KEY as string;

    private static sign(data: Buffer)
    {
        const hmac = crypto
            .createHmac("sha256", AES.key)
            .update(data)
            .digest();
        return Buffer.concat([data, hmac]);
    }

    private static verify(data: Buffer, digest: Buffer)
    {
        const hmac = crypto.createHmac("sha256", AES.key);
        
        return hmac.update(data).digest() === digest;
    }

    static encrypt(data: any)
    {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(AES.method, AES.key, iv);
        const msg = encode(data);
        
        const encrypted = Buffer
            .concat([cipher.update(msg), cipher.final(), iv]);

        return AES.sign(encrypted);
    }

    static decrypt(data: Buffer, iv: Buffer)
    {
        const decipher = crypto.createDecipheriv(AES.method, AES.key, iv);

        return Buffer.concat([decipher.update(data), decipher.final()]);
    }

    static isSecure(data: Buffer)
    {
        const digest = data.subarray(-32);
        if (!AES.verify(data, digest))
        {
            return undefined;
        }

        const iv = data.subarray(-48, -32);
        const decrypted = AES.decrypt(data, iv);

        return decode(decrypted);
    }
}
