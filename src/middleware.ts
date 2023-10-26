import wrapper from "./lib/middleware/wrapper";
import i18nMiddleware from "./lib/middleware/i18nMiddleware";
import log from "./lib/middleware/log/log";

export default wrapper([log, i18nMiddleware]);

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
