import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { NextURL } from "next/dist/server/web/next-url";

type Loggable = {
    cookies: RequestCookies,
    nextUrl: NextURL,
    url: string,
    credentials: RequestCredentials,
    destination: RequestDestination,
    mode: RequestMode,
    method: string,
    headers: Headers,
    redirect: RequestRedirect,
    referrer: string,
    body: ReadableStream<Uint8Array> | null,
};

export type { Loggable as default };
