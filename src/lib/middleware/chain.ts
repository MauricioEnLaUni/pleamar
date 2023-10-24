import { NextMiddleware, NextResponse } from "next/server";

import MiddlewareFactory from "./MiddlewareFactory";

const chain = (fn: MiddlewareFactory[], index = 0): NextMiddleware => {
    const current = fn[index];

    if (current)
    {
        const next = chain(fn, index + 1);
        return current(next);
    }

    return () => NextResponse.next();
}

export default chain;
