import DBInterface from "./Connection";
import DBRequest from "./DBRequest";

export default class RedisConnection implements DBInterface
{
    constructor(
        private client: any) {}

    async create(request: DBRequest)
    {
        const key = crypto.randomUUID();
    }

    read(): Promise<any>
    {
        throw new Error("Not implemented");
    }


}