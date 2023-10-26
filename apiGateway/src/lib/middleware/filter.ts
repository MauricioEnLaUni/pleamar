import { NextMiddleware, NextRequest } from "next/server";
import addContext from "./addContext";

export default (request: NextRequest, middleware: NextMiddleware[]) => {

    const current = middleware[0].name;
    const next = middleware[1]?.name;

    if (!next)
    {
        return middleware;
    }

    const filter = addContext(current, next);

    return filter(request, middleware);
}