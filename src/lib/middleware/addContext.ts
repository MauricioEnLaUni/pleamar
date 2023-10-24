import isTypeLiteral from "../utils/isTypeLiteral";

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
    DEFAULT: (_: string) => true,
    log: (_: string) => true,
    i18Middleware: (_: string) => true,
    auth: (_: string) => true,
    useCSRF: (_: string) => true,
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

    return (next: Catalog = n) => CATALOG[key](next);
}