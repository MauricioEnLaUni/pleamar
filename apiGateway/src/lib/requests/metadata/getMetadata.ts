import AES from "@/lib/Auth/crypto/AES";
import { fromMeta } from "../axios/fromMeta";

export default async (limit: number) => {
    const encrypted = AES.encrypt({limit});
    const data = { bytes: encrypted.toString() };

    const response = (await fromMeta.post(`/metadata/front`, data));
    return response.data;
}
