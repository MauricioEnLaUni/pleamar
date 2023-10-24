import { NextRequest } from "next/server";

import { encode } from "@msgpack/msgpack";

import Loggable from "./Loggable";
import withCatch from "@/lib/errors/withCatch";
import Maybe from "@/lib/utils/Maybe";

const toLog = (request: NextRequest) => {
    const loggable: Loggable = {
        cookies: request.cookies,
        nextUrl: request.nextUrl,
        url: request.url,
        credentials: request.credentials,
        destination: request.destination,
        mode: request.mode,
        method: request.method,
        headers: request.headers,
        redirect: request.redirect,
        referrer: request.referrer,
        body: request.body,
    };

    const log: Uint8Array = encode(loggable);
    
    return {
        resource: {
            type: "",
            id: 0
        },
        log,
    };
};

const postMicroservices = async ({ service, payload }: { service: string, payload: any }) => {
    return await fetch(service, {
        method: "POST",
        body: payload
    });
};

const not = async (error: unknown, _: any) => {
    return await new Promise(() => Maybe.nothing());
};

export default async (request: NextRequest) => {
    return await withCatch(
        postMicroservices,
        { service: `localhost:8080/logs`, payload: toLog(request) },
        not
    );
}
