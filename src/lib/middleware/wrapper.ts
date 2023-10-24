import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

const wrapper = (middleware: NextMiddleware[]) => {
    return async (request: NextRequest, event: NextFetchEvent): Promise<any> => {
        if (Array.isArray(middleware) && middleware.length > 0)
        {
            const [current, ... remaining] = middleware;
            try {
                await current(request, event);
            } catch (error) {
                console.error(error);
            }
            return wrapper(remaining)(request, event);
        }

        return NextResponse.next();
    }
};

export default wrapper;