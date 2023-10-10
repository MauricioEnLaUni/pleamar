///<reference path="./types.d.ts" />
import { Client } from "pg";
export default class PgAdapter implements DatabaseStrategy
{
    private readonly client;
    constructor({
        user,
        host,
        database,
        password
    }: AdapterProps) {
        this.client = new Client({
            user,
            host,
            database,
            password
        });
    }

    private connect(client: Client = this.client)
    {
        try
        {
            client.connect();
        } catch (error)
        {
            throw error;
        }
    }

    private async close(client: Client = this.client)
    {
        try
        {
            await client.end();
        } catch (error)
        {
            throw error;
        }
    }

    readonly transact = (
        queries: DBQuery[],
        client: Client = this.client
    ) => {
        try
        {
            this.connect(client);
            client.query("BEGIN");
            const results = queries
                .map(request => this.operate(request));
            client.query("COMMIT");
            return results;
        } catch (error)
        {
            client.query("ROLLBACK");
        } finally {
            this.close(client);
        }
    }

    readonly operate = async (query: DBQuery) => {
        try
        {
            const contents = await this.client.query(query.operation, query.data);

            return { contents, msg: undefined };
        } catch (error)
        {
            return {
                contents: undefined,
                msg: "Couldn't be created."
            }
        }
    }
}