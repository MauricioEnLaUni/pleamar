import { withAuth } from "next-auth/middleware";
import { NextRequest } from "next/server";

import publicRoutes from "@/lib/public.routes";

const authMiddleware = withAuth({
    callbacks: {
        authorized: ({ token }) => token !== null
    },
    pages: {
        signIn: "/sigin",
        error: "/error"
    }
});

export default (request: NextRequest) => {
    const reg = RegExp(
        `^http://localhost:3000\/(en|es)\/user\/?([a-zA-Z0-9_-]+)?$`
    );

    const isPrivate = reg.test(request.nextUrl.pathname);

    if (isPrivate) {
        return (authMiddleware as any)(request);
    }
}
