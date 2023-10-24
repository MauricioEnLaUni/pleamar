import { NextMiddleware } from "next/server"

export default (current: string, middleware: NextMiddleware) => {

    return middleware;
}