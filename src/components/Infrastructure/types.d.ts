const Services = {
    Auth: (key: RsaPublicKey) => new AuthAdapter(key),
    Metadata: "METADATA",
    Search: "SEARCH",
    Data: "DATA"
} as const;
type ServicesEnum = typeof Services[keyof typeof Services];

type Result<TContent> = {
    contents: TContent | undefined,
    msg: string | undefined
}

type DatabaseOperation = (request: DBQuery) => Promise<Result<any>>;

type DBQuery = {
    operation: string,
    data: string[]
}

type DatabaseRequest = {
    readonly query: string,
    readonly auth: {
        author: string,
        auth_token: string,
        refresh_token: string,
    },
    readonly client: any
}

interface DatabaseStrategy
{
    readonly operate: DatabaseOperation,
}

interface Connection
{
    readonly adapter: DatabaseStrategy,
    unwrap: (result: Result<any>) => any,
    wrap: (request: DatabaseRequest) => DatabaseOperation,
}

const AUTH_SERVICE_OPERATIONS = {
    DEFAULT: "default",
    CREATE_USER: "create_user",
    UPDATE_USER: "user_update",
    READ_USER: "get_user",
} as const;
type AuthServiceOperations = typeof
    AUTH_SERVICE_OPERATIONS[keyof typeof AUTH_SERVICE_OPERATIONS];

type ServiceOperation = AuthServiceOperations;

type RequestMultiple = {
    readonly commands: [string[], ServiceOperations][],
    readonly auth: {
        author: string,
        auth_token: string,
        refresh_token: string,
    },
    readonly checksum: string,
}

type AdapterProps = {
    user: string,
    host: string,
    database: string,
    password: string
}