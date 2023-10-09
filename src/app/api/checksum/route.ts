import crypto from "crypto";

import getPrivateKey from "@/lib/utils/getPrivateKey";
import { NextResponse } from "next/server";

export async function GET()
{
    const key = getPrivateKey();
    const checksum = crypto.randomBytes(128);

    return NextResponse.json({ checksum: key.sign(checksum) });
}
