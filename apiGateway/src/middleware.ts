import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";

const locales = ["es", "en"];

const intl = createIntlMiddleware({
    locales,
    defaultLocale: "es",
    localePrefix: "always"
});

const auth = withAuth(
    (req) => intl(req),
    {
        callbacks: {
            authorized: ({ token }) => token != null
        },
        pages: {
            signIn: "/api/auth/signin"
        }
    }
);

export default (req: NextRequest) => {
    const privatePage = RegExp("^\/(es|en)\/private\/?([a-zA-Z0-9_]+\/?)*$");

    const isPrivate = privatePage.test(req.nextUrl.pathname);

    if (isPrivate)
    {
        return (auth as any)(req);
    }

    return intl(req);
};

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"]
};
