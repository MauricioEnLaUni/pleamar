import { Collection, Db, Document, Filter, MongoClient } from "mongodb";

import clientOptions from "./mongo/clientOptions.js";
import DBInterface from "./DBInterface.js";
import MongoRequest from "./mongo/MongoRequest.js";

import withCatch from "../errors/withCatch.js";
import unHandled from "../errors/unHandled.js";

export default class LogsConnection implements DBInterface
{
    private db: Db  | undefined;
    public col: Collection<Document> | undefined;

    private constructor(
        private client: MongoClient
    ) {
        this.db = this.client.db(process.env.DB);
        this.col = this.db.collection(process.env.COL);
    }

    static connect()
    {
        const client = new MongoClient(
            process.env.MONDODB_LOGS as string,
            clientOptions
        );
        return new LogsConnection(client);
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
            (request) => this.col?.insertOne(request),
            request as Document,
            unHandled
        );
    }

    async read()
    {
        return await this.find();
    }

    async find(criteria?: Filter<Document>)
    {
        return await withCatch(
            (criteria) => this.col?.find(criteria).toArray(),
            criteria ?? {},
            unHandled
        );
    }

    async findOne(criteria?: Filter<Document>)
    {
        return await withCatch(
            (criteria) => this.col?.find(criteria).toArray(),
            this.col?.find(criteria ?? {}).toArray(),
            unHandled
        );
    }

    async count(criteria: Filter<Document>)
    {
        return await withCatch(
            (criteria) => this.col?.countDocuments(criteria),
            criteria ?? {},
            unHandled
        );
    }
}
