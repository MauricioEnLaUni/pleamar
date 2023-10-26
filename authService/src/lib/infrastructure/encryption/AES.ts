import crypto from "node:crypto";

import { decode, encode } from "@msgpack/msgpack";

export default class AES
{
    private method = process.env.CRYPTO_METHOD as string;
    private key = process.env.AES_KEY as string;
    private iv = process.env.AES_IV as string;

    encrypt(data: any)
    {
        const cipher = crypto.createCipheriv(this.method, this.key, this.iv);
        const msg = encode(data);
        
        return Buffer
            .concat([cipher.update(msg), cipher.final()])
            .toString("base64");
    }

    decrypt(data: string)
    {
        const buffer = Buffer.from(data, "base64");
        const decipher = crypto.createDecipheriv(this.method, this.key, this.iv);

        const decrypted = Buffer.concat([decipher.update(buffer), decipher.final()]);

        return decode(decrypted);
    }
}
