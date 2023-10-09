///<reference path="./types.d.ts" />
import { Client } from "pg";

export default class PgAdapter implements DatabaseStrategy
{
    private readonly client = new Client();

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
        queries: string[],
        client: Client = this.client
    ) => {
        try
        {
            this.connect(client);
            client.query("BEGIN");
            const results = queries
                .map(query => this.operate({ query, client }));
            client.query("COMMIT");
            return results;
        } catch (error)
        {
            client.query("ROLLBACK");
        } finally {
            this.close(client);
        }
    }

    readonly operate = async ({
        query,
        client = this.client
    }: DatabaseRequest) => {
        try
        {
            const contents = await client.query(query);

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