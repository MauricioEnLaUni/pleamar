import Maybe from "../utils/Maybe";

export default async (_error: unknown, _: any) => {
    return await Promise.resolve(Maybe.nothing<any>());
}
