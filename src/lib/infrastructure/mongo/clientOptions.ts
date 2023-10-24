import { ServerApiVersion } from "mongodb";

export default {
        serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
};