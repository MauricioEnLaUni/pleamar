/// <reference path="../../../components/Auth/Auth.d.ts" />
import { NextResponse } from "next/server";

import validateChecksum from "@/lib/utils/validateChecksum";

export async function POST(request: Request)
{
    const data: LoginDto = await request.json();
    if (!validateChecksum({
        checksum: data.afca1223d2040ff875374235b7c13b0d,
        id: data.c439f7f07b4ccf64eedf5ea29803c733
    }))
    {
        return Unauthorized;
    }

    return NextResponse.json({ checksum: key.sign(checksum) });
}
