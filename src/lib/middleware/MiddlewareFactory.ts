import { NextMiddleware } from "next/server";

type MiddlewareFactory = (next: NextMiddleware) => NextMiddleware;

export type { MiddlewareFactory as default };
