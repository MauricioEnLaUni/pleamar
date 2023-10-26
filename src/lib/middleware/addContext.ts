import { NextMiddleware, NextRequest } from "next/server";
import isTypeLiteral from "../utils/isTypeLiteral";

import options from "./i18n/options";
import publicRoutes from "../publicRoutes";

/**
 * Catalog of middleware function names. Takes a key and returns a react lazy
 * to the filter that must be applied to the middleware chain.
 * Functions can optionally take the next function name to decide which filter
 * they have to apply.
 * 
 * ISSUE: Updates manually
 * ISSUE: Lazy load functions.
 */
/// Contains all middleware functions
/// Must be updated manually
/// ISSUE: Make the functions into dynamic imports
/// ISSUE: Write the damn functions
const CATALOG = {
    DEFAULT: (_req: NextRequest, middleware: NextMiddleware[], _: string) => middleware,
    log: (req: NextRequest, middleware: NextMiddleware[], next: string) => {
        if (!next) return middleware;
        
        const publicRegex = new RegExp(
            `^(/(${ options.locales.join("|") }))?(${ Object.keys(publicRoutes).join("|") })?/?$`,
            "i"
        );
        const isPublic = publicRegex.test(req.nextUrl.pathname);
        if (isPublic) return middleware;

        return middleware.filter(e => e.name !== "auth");
    },
    i18Middleware: (_req: NextRequest, middleware: NextMiddleware[], _next: string) => middleware,
    auth: (_req: NextRequest, middleware: NextMiddleware[], _next: string) => middleware,
    useCSRF: (_req: NextRequest, middleware: NextMiddleware[], _next: string) => middleware,
} as const;

/// Type for calling the member functions
type Catalog = keyof typeof CATALOG;

/**
 * Returns the desired filter that's to be applied according
 * to the last function and the next.
 * 
 * Received the name of the former function and the next to perform a
 * lookup on the CATALOG object.
*/
export default (current: string, next: string) => {
    const key: Catalog = isTypeLiteral<Catalog>(current, CATALOG);
    const n = isTypeLiteral<Catalog>(next, CATALOG);

    return (request: NextRequest, middleware: NextMiddleware[], next: Catalog = n, ) => CATALOG[key](request, middleware, next);
}