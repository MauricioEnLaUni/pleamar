import Maybe from "../utils/Maybe.js";

export default interface DBInterface
{
    create(request: any): Promise<Maybe<any>>;
    read(): Promise<Maybe<any[]>>;

    find(criteria?: any): Promise<Maybe<any[]>>;
    findOne(criteria: any): Promise<Maybe<any>>;
    count(criteria: any): Promise<Maybe<number>>;
};
