import { Collection, Db, Document, Filter, MongoClient } from "mongodb";

import clientOptions from "./mongo/clientOptions";
import DBInterface from "./Connection";
import Maybe from "../utils/Maybe";
import MongoRequest from "./mongo/MongoRequest";

import withCatch from "../errors/withCatch";

export default class LogsConnection implements DBInterface
{
    private client = new MongoClient(
        process.env.MONDODB_LOGS as string,
        clientOptions
    );

    private db: Db  | undefined;
    private col: Collection<Document> | undefined;

    private connect()
    {
        this.client.connect();
        const env = process.env.LOGS as string;
        this.db = this.client.db(env);
        this.col = this.db.collection(env);
    }

    private async notHandled(_error: unknown, _req: MongoRequest)
    {
        return await Promise.resolve(Maybe.nothing<any>());
    }

    private async getValue(req: any)
    {
        return Maybe.fromNullable(
            await req
        );
    }

    end()
    {
        this.db = undefined;
        this.col = undefined;
        this.client.close();
    }

    async create(request: MongoRequest)
    {
        return await withCatch(
            this.getValue,
            this.col?.insertOne(request as Document),
            this.notHandled
        );
    }

    async read()
    {
        return await this.find();
    }

    async find(criteria?: Filter<Document>)
    {
        return await withCatch(
            this.getValue,
            this.col?.find(criteria ?? {}).toArray(),
            this.notHandled
        );
    }

    async findOne(criteria?: Filter<Document>)
    {
        return await withCatch(
            this.getValue,
            this.col?.find(criteria ?? {}).toArray(),
            this.notHandled
        );
    }

    async count(criteria: Filter<Document>)
    {
        return await withCatch(
            this.getValue,
            this.col?.countDocuments(criteria ?? {}),
            this.notHandled
        );
    }

    async singleOperation(fn: any, request: MongoRequest | Filter<Document>)
    {
        this.connect();
        const value = await fn(request);
        this.end();
        return value;
    }
}
