import wrapper from "./lib/middleware/wrapper";
import i18nMiddleware from "./lib/middleware/i18nMiddleware";

export default wrapper([i18nMiddleware]);

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
