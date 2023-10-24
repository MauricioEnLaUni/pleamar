
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model video_entity
 * 
 */
export type video_entity = $Result.DefaultSelection<Prisma.$video_entityPayload>
/**
 * Model statuses
 * 
 */
export type statuses = $Result.DefaultSelection<Prisma.$statusesPayload>
/**
 * Model video_metadata
 * 
 */
export type video_metadata = $Result.DefaultSelection<Prisma.$video_metadataPayload>
/**
 * Model video_titles
 * 
 */
export type video_titles = $Result.DefaultSelection<Prisma.$video_titlesPayload>
/**
 * Model video_description
 * 
 */
export type video_description = $Result.DefaultSelection<Prisma.$video_descriptionPayload>
/**
 * Model views
 * 
 */
export type views = $Result.DefaultSelection<Prisma.$viewsPayload>
/**
 * Model subtitles_container
 * 
 */
export type subtitles_container = $Result.DefaultSelection<Prisma.$subtitles_containerPayload>
/**
 * Model subtitle
 * 
 */
export type subtitle = $Result.DefaultSelection<Prisma.$subtitlePayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model cat_names
 * 
 */
export type cat_names = $Result.DefaultSelection<Prisma.$cat_namesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const video_type: {
  MP4: 'MP4',
  OGG: 'OGG',
  FLV: 'FLV'
};

export type video_type = (typeof video_type)[keyof typeof video_type]


export const video_status: {
  ACTIVE: 'ACTIVE',
  BANNED: 'BANNED',
  DISABLED: 'DISABLED',
  PROCESSING: 'PROCESSING'
};

export type video_status = (typeof video_status)[keyof typeof video_status]

}

export type video_type = $Enums.video_type

export const video_type: typeof $Enums.video_type

export type video_status = $Enums.video_status

export const video_status: typeof $Enums.video_status

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Video_entities
 * const video_entities = await prisma.video_entity.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Video_entities
   * const video_entities = await prisma.video_entity.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.video_entity`: Exposes CRUD operations for the **video_entity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Video_entities
    * const video_entities = await prisma.video_entity.findMany()
    * ```
    */
  get video_entity(): Prisma.video_entityDelegate<ExtArgs>;

  /**
   * `prisma.statuses`: Exposes CRUD operations for the **statuses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.statuses.findMany()
    * ```
    */
  get statuses(): Prisma.statusesDelegate<ExtArgs>;

  /**
   * `prisma.video_metadata`: Exposes CRUD operations for the **video_metadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Video_metadata
    * const video_metadata = await prisma.video_metadata.findMany()
    * ```
    */
  get video_metadata(): Prisma.video_metadataDelegate<ExtArgs>;

  /**
   * `prisma.video_titles`: Exposes CRUD operations for the **video_titles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Video_titles
    * const video_titles = await prisma.video_titles.findMany()
    * ```
    */
  get video_titles(): Prisma.video_titlesDelegate<ExtArgs>;

  /**
   * `prisma.video_description`: Exposes CRUD operations for the **video_description** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Video_descriptions
    * const video_descriptions = await prisma.video_description.findMany()
    * ```
    */
  get video_description(): Prisma.video_descriptionDelegate<ExtArgs>;

  /**
   * `prisma.views`: Exposes CRUD operations for the **views** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.views.findMany()
    * ```
    */
  get views(): Prisma.viewsDelegate<ExtArgs>;

  /**
   * `prisma.subtitles_container`: Exposes CRUD operations for the **subtitles_container** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subtitles_containers
    * const subtitles_containers = await prisma.subtitles_container.findMany()
    * ```
    */
  get subtitles_container(): Prisma.subtitles_containerDelegate<ExtArgs>;

  /**
   * `prisma.subtitle`: Exposes CRUD operations for the **subtitle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subtitles
    * const subtitles = await prisma.subtitle.findMany()
    * ```
    */
  get subtitle(): Prisma.subtitleDelegate<ExtArgs>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs>;

  /**
   * `prisma.cat_names`: Exposes CRUD operations for the **cat_names** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cat_names
    * const cat_names = await prisma.cat_names.findMany()
    * ```
    */
  get cat_names(): Prisma.cat_namesDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    video_entity: 'video_entity',
    statuses: 'statuses',
    video_metadata: 'video_metadata',
    video_titles: 'video_titles',
    video_description: 'video_description',
    views: 'views',
    subtitles_container: 'subtitles_container',
    subtitle: 'subtitle',
    categories: 'categories',
    cat_names: 'cat_names',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'video_entity' | 'statuses' | 'video_metadata' | 'video_titles' | 'video_description' | 'views' | 'subtitles_container' | 'subtitle' | 'categories' | 'cat_names' | 'users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      video_entity: {
        payload: Prisma.$video_entityPayload<ExtArgs>
        fields: Prisma.video_entityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.video_entityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_entityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.video_entityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_entityPayload>
          }
          findFirst: {
            args: Prisma.video_entityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_entityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.video_entityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_entityPayload>
          }
          findMany: {
            args: Prisma.video_entityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_entityPayload>[]
          }
          create: {
            args: Prisma.video_entityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_entityPayload>
          }
          createMany: {
            args: Prisma.video_entityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.video_entityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_entityPayload>
          }
          update: {
            args: Prisma.video_entityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_entityPayload>
          }
          deleteMany: {
            args: Prisma.video_entityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.video_entityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.video_entityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_entityPayload>
          }
          aggregate: {
            args: Prisma.Video_entityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVideo_entity>
          }
          groupBy: {
            args: Prisma.video_entityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Video_entityGroupByOutputType>[]
          }
          count: {
            args: Prisma.video_entityCountArgs<ExtArgs>,
            result: $Utils.Optional<Video_entityCountAggregateOutputType> | number
          }
        }
      }
      statuses: {
        payload: Prisma.$statusesPayload<ExtArgs>
        fields: Prisma.statusesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.statusesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.statusesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusesPayload>
          }
          findFirst: {
            args: Prisma.statusesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.statusesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusesPayload>
          }
          findMany: {
            args: Prisma.statusesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusesPayload>[]
          }
          create: {
            args: Prisma.statusesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusesPayload>
          }
          createMany: {
            args: Prisma.statusesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.statusesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusesPayload>
          }
          update: {
            args: Prisma.statusesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusesPayload>
          }
          deleteMany: {
            args: Prisma.statusesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.statusesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.statusesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusesPayload>
          }
          aggregate: {
            args: Prisma.StatusesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStatuses>
          }
          groupBy: {
            args: Prisma.statusesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StatusesGroupByOutputType>[]
          }
          count: {
            args: Prisma.statusesCountArgs<ExtArgs>,
            result: $Utils.Optional<StatusesCountAggregateOutputType> | number
          }
        }
      }
      video_metadata: {
        payload: Prisma.$video_metadataPayload<ExtArgs>
        fields: Prisma.video_metadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.video_metadataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_metadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.video_metadataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_metadataPayload>
          }
          findFirst: {
            args: Prisma.video_metadataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_metadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.video_metadataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_metadataPayload>
          }
          findMany: {
            args: Prisma.video_metadataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_metadataPayload>[]
          }
          create: {
            args: Prisma.video_metadataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_metadataPayload>
          }
          createMany: {
            args: Prisma.video_metadataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.video_metadataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_metadataPayload>
          }
          update: {
            args: Prisma.video_metadataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_metadataPayload>
          }
          deleteMany: {
            args: Prisma.video_metadataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.video_metadataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.video_metadataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_metadataPayload>
          }
          aggregate: {
            args: Prisma.Video_metadataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVideo_metadata>
          }
          groupBy: {
            args: Prisma.video_metadataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Video_metadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.video_metadataCountArgs<ExtArgs>,
            result: $Utils.Optional<Video_metadataCountAggregateOutputType> | number
          }
        }
      }
      video_titles: {
        payload: Prisma.$video_titlesPayload<ExtArgs>
        fields: Prisma.video_titlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.video_titlesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_titlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.video_titlesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_titlesPayload>
          }
          findFirst: {
            args: Prisma.video_titlesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_titlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.video_titlesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_titlesPayload>
          }
          findMany: {
            args: Prisma.video_titlesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_titlesPayload>[]
          }
          create: {
            args: Prisma.video_titlesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_titlesPayload>
          }
          createMany: {
            args: Prisma.video_titlesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.video_titlesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_titlesPayload>
          }
          update: {
            args: Prisma.video_titlesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_titlesPayload>
          }
          deleteMany: {
            args: Prisma.video_titlesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.video_titlesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.video_titlesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_titlesPayload>
          }
          aggregate: {
            args: Prisma.Video_titlesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVideo_titles>
          }
          groupBy: {
            args: Prisma.video_titlesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Video_titlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.video_titlesCountArgs<ExtArgs>,
            result: $Utils.Optional<Video_titlesCountAggregateOutputType> | number
          }
        }
      }
      video_description: {
        payload: Prisma.$video_descriptionPayload<ExtArgs>
        fields: Prisma.video_descriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.video_descriptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_descriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.video_descriptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_descriptionPayload>
          }
          findFirst: {
            args: Prisma.video_descriptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_descriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.video_descriptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_descriptionPayload>
          }
          findMany: {
            args: Prisma.video_descriptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_descriptionPayload>[]
          }
          create: {
            args: Prisma.video_descriptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_descriptionPayload>
          }
          createMany: {
            args: Prisma.video_descriptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.video_descriptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_descriptionPayload>
          }
          update: {
            args: Prisma.video_descriptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_descriptionPayload>
          }
          deleteMany: {
            args: Prisma.video_descriptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.video_descriptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.video_descriptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$video_descriptionPayload>
          }
          aggregate: {
            args: Prisma.Video_descriptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVideo_description>
          }
          groupBy: {
            args: Prisma.video_descriptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Video_descriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.video_descriptionCountArgs<ExtArgs>,
            result: $Utils.Optional<Video_descriptionCountAggregateOutputType> | number
          }
        }
      }
      views: {
        payload: Prisma.$viewsPayload<ExtArgs>
        fields: Prisma.viewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.viewsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.viewsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          findFirst: {
            args: Prisma.viewsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.viewsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          findMany: {
            args: Prisma.viewsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>[]
          }
          create: {
            args: Prisma.viewsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          createMany: {
            args: Prisma.viewsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.viewsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          update: {
            args: Prisma.viewsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          deleteMany: {
            args: Prisma.viewsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.viewsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.viewsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          aggregate: {
            args: Prisma.ViewsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateViews>
          }
          groupBy: {
            args: Prisma.viewsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ViewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.viewsCountArgs<ExtArgs>,
            result: $Utils.Optional<ViewsCountAggregateOutputType> | number
          }
        }
      }
      subtitles_container: {
        payload: Prisma.$subtitles_containerPayload<ExtArgs>
        fields: Prisma.subtitles_containerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subtitles_containerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitles_containerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subtitles_containerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitles_containerPayload>
          }
          findFirst: {
            args: Prisma.subtitles_containerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitles_containerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subtitles_containerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitles_containerPayload>
          }
          findMany: {
            args: Prisma.subtitles_containerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitles_containerPayload>[]
          }
          create: {
            args: Prisma.subtitles_containerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitles_containerPayload>
          }
          createMany: {
            args: Prisma.subtitles_containerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.subtitles_containerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitles_containerPayload>
          }
          update: {
            args: Prisma.subtitles_containerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitles_containerPayload>
          }
          deleteMany: {
            args: Prisma.subtitles_containerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.subtitles_containerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.subtitles_containerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitles_containerPayload>
          }
          aggregate: {
            args: Prisma.Subtitles_containerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubtitles_container>
          }
          groupBy: {
            args: Prisma.subtitles_containerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Subtitles_containerGroupByOutputType>[]
          }
          count: {
            args: Prisma.subtitles_containerCountArgs<ExtArgs>,
            result: $Utils.Optional<Subtitles_containerCountAggregateOutputType> | number
          }
        }
      }
      subtitle: {
        payload: Prisma.$subtitlePayload<ExtArgs>
        fields: Prisma.subtitleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subtitleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subtitleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitlePayload>
          }
          findFirst: {
            args: Prisma.subtitleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subtitleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitlePayload>
          }
          findMany: {
            args: Prisma.subtitleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitlePayload>[]
          }
          create: {
            args: Prisma.subtitleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitlePayload>
          }
          createMany: {
            args: Prisma.subtitleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.subtitleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitlePayload>
          }
          update: {
            args: Prisma.subtitleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitlePayload>
          }
          deleteMany: {
            args: Prisma.subtitleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.subtitleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.subtitleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subtitlePayload>
          }
          aggregate: {
            args: Prisma.SubtitleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubtitle>
          }
          groupBy: {
            args: Prisma.subtitleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubtitleGroupByOutputType>[]
          }
          count: {
            args: Prisma.subtitleCountArgs<ExtArgs>,
            result: $Utils.Optional<SubtitleCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      cat_names: {
        payload: Prisma.$cat_namesPayload<ExtArgs>
        fields: Prisma.cat_namesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cat_namesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cat_namesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cat_namesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cat_namesPayload>
          }
          findFirst: {
            args: Prisma.cat_namesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cat_namesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cat_namesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cat_namesPayload>
          }
          findMany: {
            args: Prisma.cat_namesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cat_namesPayload>[]
          }
          create: {
            args: Prisma.cat_namesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cat_namesPayload>
          }
          createMany: {
            args: Prisma.cat_namesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.cat_namesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cat_namesPayload>
          }
          update: {
            args: Prisma.cat_namesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cat_namesPayload>
          }
          deleteMany: {
            args: Prisma.cat_namesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.cat_namesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.cat_namesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cat_namesPayload>
          }
          aggregate: {
            args: Prisma.Cat_namesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCat_names>
          }
          groupBy: {
            args: Prisma.cat_namesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Cat_namesGroupByOutputType>[]
          }
          count: {
            args: Prisma.cat_namesCountArgs<ExtArgs>,
            result: $Utils.Optional<Cat_namesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Video_entityCountOutputType
   */

  export type Video_entityCountOutputType = {
    views: number
    statuses: number
  }

  export type Video_entityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    views?: boolean | Video_entityCountOutputTypeCountViewsArgs
    statuses?: boolean | Video_entityCountOutputTypeCountStatusesArgs
  }

  // Custom InputTypes

  /**
   * Video_entityCountOutputType without action
   */
  export type Video_entityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video_entityCountOutputType
     */
    select?: Video_entityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Video_entityCountOutputType without action
   */
  export type Video_entityCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viewsWhereInput
  }


  /**
   * Video_entityCountOutputType without action
   */
  export type Video_entityCountOutputTypeCountStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: statusesWhereInput
  }



  /**
   * Count Type Video_metadataCountOutputType
   */

  export type Video_metadataCountOutputType = {
    title: number
    description: number
  }

  export type Video_metadataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    title?: boolean | Video_metadataCountOutputTypeCountTitleArgs
    description?: boolean | Video_metadataCountOutputTypeCountDescriptionArgs
  }

  // Custom InputTypes

  /**
   * Video_metadataCountOutputType without action
   */
  export type Video_metadataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video_metadataCountOutputType
     */
    select?: Video_metadataCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Video_metadataCountOutputType without action
   */
  export type Video_metadataCountOutputTypeCountTitleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: video_titlesWhereInput
  }


  /**
   * Video_metadataCountOutputType without action
   */
  export type Video_metadataCountOutputTypeCountDescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: video_descriptionWhereInput
  }



  /**
   * Count Type Subtitles_containerCountOutputType
   */

  export type Subtitles_containerCountOutputType = {
    subtitles: number
  }

  export type Subtitles_containerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtitles?: boolean | Subtitles_containerCountOutputTypeCountSubtitlesArgs
  }

  // Custom InputTypes

  /**
   * Subtitles_containerCountOutputType without action
   */
  export type Subtitles_containerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtitles_containerCountOutputType
     */
    select?: Subtitles_containerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Subtitles_containerCountOutputType without action
   */
  export type Subtitles_containerCountOutputTypeCountSubtitlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subtitleWhereInput
  }



  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    name: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name?: boolean | CategoriesCountOutputTypeCountNameArgs
  }

  // Custom InputTypes

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountNameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cat_namesWhereInput
  }



  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    video_entity: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video_entity?: boolean | UsersCountOutputTypeCountVideo_entityArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountVideo_entityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: video_entityWhereInput
  }



  /**
   * Models
   */

  /**
   * Model video_entity
   */

  export type AggregateVideo_entity = {
    _count: Video_entityCountAggregateOutputType | null
    _avg: Video_entityAvgAggregateOutputType | null
    _sum: Video_entitySumAggregateOutputType | null
    _min: Video_entityMinAggregateOutputType | null
    _max: Video_entityMaxAggregateOutputType | null
  }

  export type Video_entityAvgAggregateOutputType = {
    id: number | null
  }

  export type Video_entitySumAggregateOutputType = {
    id: bigint | null
  }

  export type Video_entityMinAggregateOutputType = {
    id: bigint | null
    type: $Enums.video_type | null
    uploader: string | null
  }

  export type Video_entityMaxAggregateOutputType = {
    id: bigint | null
    type: $Enums.video_type | null
    uploader: string | null
  }

  export type Video_entityCountAggregateOutputType = {
    id: number
    type: number
    uploader: number
    _all: number
  }


  export type Video_entityAvgAggregateInputType = {
    id?: true
  }

  export type Video_entitySumAggregateInputType = {
    id?: true
  }

  export type Video_entityMinAggregateInputType = {
    id?: true
    type?: true
    uploader?: true
  }

  export type Video_entityMaxAggregateInputType = {
    id?: true
    type?: true
    uploader?: true
  }

  export type Video_entityCountAggregateInputType = {
    id?: true
    type?: true
    uploader?: true
    _all?: true
  }

  export type Video_entityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video_entity to aggregate.
     */
    where?: video_entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_entities to fetch.
     */
    orderBy?: video_entityOrderByWithRelationInput | video_entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: video_entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned video_entities
    **/
    _count?: true | Video_entityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Video_entityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Video_entitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Video_entityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Video_entityMaxAggregateInputType
  }

  export type GetVideo_entityAggregateType<T extends Video_entityAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo_entity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo_entity[P]>
      : GetScalarType<T[P], AggregateVideo_entity[P]>
  }




  export type video_entityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: video_entityWhereInput
    orderBy?: video_entityOrderByWithAggregationInput | video_entityOrderByWithAggregationInput[]
    by: Video_entityScalarFieldEnum[] | Video_entityScalarFieldEnum
    having?: video_entityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Video_entityCountAggregateInputType | true
    _avg?: Video_entityAvgAggregateInputType
    _sum?: Video_entitySumAggregateInputType
    _min?: Video_entityMinAggregateInputType
    _max?: Video_entityMaxAggregateInputType
  }

  export type Video_entityGroupByOutputType = {
    id: bigint
    type: $Enums.video_type
    uploader: string
    _count: Video_entityCountAggregateOutputType | null
    _avg: Video_entityAvgAggregateOutputType | null
    _sum: Video_entitySumAggregateOutputType | null
    _min: Video_entityMinAggregateOutputType | null
    _max: Video_entityMaxAggregateOutputType | null
  }

  type GetVideo_entityGroupByPayload<T extends video_entityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Video_entityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Video_entityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Video_entityGroupByOutputType[P]>
            : GetScalarType<T[P], Video_entityGroupByOutputType[P]>
        }
      >
    >


  export type video_entitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    uploader?: boolean
    video_metadata?: boolean | video_entity$video_metadataArgs<ExtArgs>
    views?: boolean | video_entity$viewsArgs<ExtArgs>
    statuses?: boolean | video_entity$statusesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Video_entityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video_entity"]>

  export type video_entitySelectScalar = {
    id?: boolean
    type?: boolean
    uploader?: boolean
  }

  export type video_entityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video_metadata?: boolean | video_entity$video_metadataArgs<ExtArgs>
    views?: boolean | video_entity$viewsArgs<ExtArgs>
    statuses?: boolean | video_entity$statusesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Video_entityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $video_entityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "video_entity"
    objects: {
      video_metadata: Prisma.$video_metadataPayload<ExtArgs> | null
      views: Prisma.$viewsPayload<ExtArgs>[]
      statuses: Prisma.$statusesPayload<ExtArgs>[]
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      type: $Enums.video_type
      uploader: string
    }, ExtArgs["result"]["video_entity"]>
    composites: {}
  }


  type video_entityGetPayload<S extends boolean | null | undefined | video_entityDefaultArgs> = $Result.GetResult<Prisma.$video_entityPayload, S>

  type video_entityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<video_entityFindManyArgs, 'select' | 'include'> & {
      select?: Video_entityCountAggregateInputType | true
    }

  export interface video_entityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['video_entity'], meta: { name: 'video_entity' } }
    /**
     * Find zero or one Video_entity that matches the filter.
     * @param {video_entityFindUniqueArgs} args - Arguments to find a Video_entity
     * @example
     * // Get one Video_entity
     * const video_entity = await prisma.video_entity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends video_entityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, video_entityFindUniqueArgs<ExtArgs>>
    ): Prisma__video_entityClient<$Result.GetResult<Prisma.$video_entityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Video_entity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {video_entityFindUniqueOrThrowArgs} args - Arguments to find a Video_entity
     * @example
     * // Get one Video_entity
     * const video_entity = await prisma.video_entity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends video_entityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, video_entityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__video_entityClient<$Result.GetResult<Prisma.$video_entityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Video_entity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_entityFindFirstArgs} args - Arguments to find a Video_entity
     * @example
     * // Get one Video_entity
     * const video_entity = await prisma.video_entity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends video_entityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, video_entityFindFirstArgs<ExtArgs>>
    ): Prisma__video_entityClient<$Result.GetResult<Prisma.$video_entityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Video_entity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_entityFindFirstOrThrowArgs} args - Arguments to find a Video_entity
     * @example
     * // Get one Video_entity
     * const video_entity = await prisma.video_entity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends video_entityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, video_entityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__video_entityClient<$Result.GetResult<Prisma.$video_entityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Video_entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_entityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Video_entities
     * const video_entities = await prisma.video_entity.findMany()
     * 
     * // Get first 10 Video_entities
     * const video_entities = await prisma.video_entity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const video_entityWithIdOnly = await prisma.video_entity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends video_entityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, video_entityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$video_entityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Video_entity.
     * @param {video_entityCreateArgs} args - Arguments to create a Video_entity.
     * @example
     * // Create one Video_entity
     * const Video_entity = await prisma.video_entity.create({
     *   data: {
     *     // ... data to create a Video_entity
     *   }
     * })
     * 
    **/
    create<T extends video_entityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, video_entityCreateArgs<ExtArgs>>
    ): Prisma__video_entityClient<$Result.GetResult<Prisma.$video_entityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Video_entities.
     *     @param {video_entityCreateManyArgs} args - Arguments to create many Video_entities.
     *     @example
     *     // Create many Video_entities
     *     const video_entity = await prisma.video_entity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends video_entityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, video_entityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video_entity.
     * @param {video_entityDeleteArgs} args - Arguments to delete one Video_entity.
     * @example
     * // Delete one Video_entity
     * const Video_entity = await prisma.video_entity.delete({
     *   where: {
     *     // ... filter to delete one Video_entity
     *   }
     * })
     * 
    **/
    delete<T extends video_entityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, video_entityDeleteArgs<ExtArgs>>
    ): Prisma__video_entityClient<$Result.GetResult<Prisma.$video_entityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Video_entity.
     * @param {video_entityUpdateArgs} args - Arguments to update one Video_entity.
     * @example
     * // Update one Video_entity
     * const video_entity = await prisma.video_entity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends video_entityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, video_entityUpdateArgs<ExtArgs>>
    ): Prisma__video_entityClient<$Result.GetResult<Prisma.$video_entityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Video_entities.
     * @param {video_entityDeleteManyArgs} args - Arguments to filter Video_entities to delete.
     * @example
     * // Delete a few Video_entities
     * const { count } = await prisma.video_entity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends video_entityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, video_entityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Video_entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_entityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Video_entities
     * const video_entity = await prisma.video_entity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends video_entityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, video_entityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video_entity.
     * @param {video_entityUpsertArgs} args - Arguments to update or create a Video_entity.
     * @example
     * // Update or create a Video_entity
     * const video_entity = await prisma.video_entity.upsert({
     *   create: {
     *     // ... data to create a Video_entity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video_entity we want to update
     *   }
     * })
    **/
    upsert<T extends video_entityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, video_entityUpsertArgs<ExtArgs>>
    ): Prisma__video_entityClient<$Result.GetResult<Prisma.$video_entityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Video_entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_entityCountArgs} args - Arguments to filter Video_entities to count.
     * @example
     * // Count the number of Video_entities
     * const count = await prisma.video_entity.count({
     *   where: {
     *     // ... the filter for the Video_entities we want to count
     *   }
     * })
    **/
    count<T extends video_entityCountArgs>(
      args?: Subset<T, video_entityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Video_entityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video_entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Video_entityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Video_entityAggregateArgs>(args: Subset<T, Video_entityAggregateArgs>): Prisma.PrismaPromise<GetVideo_entityAggregateType<T>>

    /**
     * Group by Video_entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_entityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends video_entityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: video_entityGroupByArgs['orderBy'] }
        : { orderBy?: video_entityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, video_entityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideo_entityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the video_entity model
   */
  readonly fields: video_entityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for video_entity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__video_entityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    video_metadata<T extends video_entity$video_metadataArgs<ExtArgs> = {}>(args?: Subset<T, video_entity$video_metadataArgs<ExtArgs>>): Prisma__video_metadataClient<$Result.GetResult<Prisma.$video_metadataPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    views<T extends video_entity$viewsArgs<ExtArgs> = {}>(args?: Subset<T, video_entity$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'findMany'> | Null>;

    statuses<T extends video_entity$statusesArgs<ExtArgs> = {}>(args?: Subset<T, video_entity$statusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statusesPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the video_entity model
   */ 
  interface video_entityFieldRefs {
    readonly id: FieldRef<"video_entity", 'BigInt'>
    readonly type: FieldRef<"video_entity", 'video_type'>
    readonly uploader: FieldRef<"video_entity", 'String'>
  }
    

  // Custom InputTypes

  /**
   * video_entity findUnique
   */
  export type video_entityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_entity
     */
    select?: video_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_entityInclude<ExtArgs> | null
    /**
     * Filter, which video_entity to fetch.
     */
    where: video_entityWhereUniqueInput
  }


  /**
   * video_entity findUniqueOrThrow
   */
  export type video_entityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_entity
     */
    select?: video_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_entityInclude<ExtArgs> | null
    /**
     * Filter, which video_entity to fetch.
     */
    where: video_entityWhereUniqueInput
  }


  /**
   * video_entity findFirst
   */
  export type video_entityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_entity
     */
    select?: video_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_entityInclude<ExtArgs> | null
    /**
     * Filter, which video_entity to fetch.
     */
    where?: video_entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_entities to fetch.
     */
    orderBy?: video_entityOrderByWithRelationInput | video_entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for video_entities.
     */
    cursor?: video_entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of video_entities.
     */
    distinct?: Video_entityScalarFieldEnum | Video_entityScalarFieldEnum[]
  }


  /**
   * video_entity findFirstOrThrow
   */
  export type video_entityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_entity
     */
    select?: video_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_entityInclude<ExtArgs> | null
    /**
     * Filter, which video_entity to fetch.
     */
    where?: video_entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_entities to fetch.
     */
    orderBy?: video_entityOrderByWithRelationInput | video_entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for video_entities.
     */
    cursor?: video_entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of video_entities.
     */
    distinct?: Video_entityScalarFieldEnum | Video_entityScalarFieldEnum[]
  }


  /**
   * video_entity findMany
   */
  export type video_entityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_entity
     */
    select?: video_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_entityInclude<ExtArgs> | null
    /**
     * Filter, which video_entities to fetch.
     */
    where?: video_entityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_entities to fetch.
     */
    orderBy?: video_entityOrderByWithRelationInput | video_entityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing video_entities.
     */
    cursor?: video_entityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_entities.
     */
    skip?: number
    distinct?: Video_entityScalarFieldEnum | Video_entityScalarFieldEnum[]
  }


  /**
   * video_entity create
   */
  export type video_entityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_entity
     */
    select?: video_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_entityInclude<ExtArgs> | null
    /**
     * The data needed to create a video_entity.
     */
    data: XOR<video_entityCreateInput, video_entityUncheckedCreateInput>
  }


  /**
   * video_entity createMany
   */
  export type video_entityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many video_entities.
     */
    data: video_entityCreateManyInput | video_entityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * video_entity update
   */
  export type video_entityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_entity
     */
    select?: video_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_entityInclude<ExtArgs> | null
    /**
     * The data needed to update a video_entity.
     */
    data: XOR<video_entityUpdateInput, video_entityUncheckedUpdateInput>
    /**
     * Choose, which video_entity to update.
     */
    where: video_entityWhereUniqueInput
  }


  /**
   * video_entity updateMany
   */
  export type video_entityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update video_entities.
     */
    data: XOR<video_entityUpdateManyMutationInput, video_entityUncheckedUpdateManyInput>
    /**
     * Filter which video_entities to update
     */
    where?: video_entityWhereInput
  }


  /**
   * video_entity upsert
   */
  export type video_entityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_entity
     */
    select?: video_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_entityInclude<ExtArgs> | null
    /**
     * The filter to search for the video_entity to update in case it exists.
     */
    where: video_entityWhereUniqueInput
    /**
     * In case the video_entity found by the `where` argument doesn't exist, create a new video_entity with this data.
     */
    create: XOR<video_entityCreateInput, video_entityUncheckedCreateInput>
    /**
     * In case the video_entity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<video_entityUpdateInput, video_entityUncheckedUpdateInput>
  }


  /**
   * video_entity delete
   */
  export type video_entityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_entity
     */
    select?: video_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_entityInclude<ExtArgs> | null
    /**
     * Filter which video_entity to delete.
     */
    where: video_entityWhereUniqueInput
  }


  /**
   * video_entity deleteMany
   */
  export type video_entityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video_entities to delete
     */
    where?: video_entityWhereInput
  }


  /**
   * video_entity.video_metadata
   */
  export type video_entity$video_metadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_metadata
     */
    select?: video_metadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_metadataInclude<ExtArgs> | null
    where?: video_metadataWhereInput
  }


  /**
   * video_entity.views
   */
  export type video_entity$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    where?: viewsWhereInput
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    cursor?: viewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }


  /**
   * video_entity.statuses
   */
  export type video_entity$statusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuses
     */
    select?: statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusesInclude<ExtArgs> | null
    where?: statusesWhereInput
    orderBy?: statusesOrderByWithRelationInput | statusesOrderByWithRelationInput[]
    cursor?: statusesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusesScalarFieldEnum | StatusesScalarFieldEnum[]
  }


  /**
   * video_entity without action
   */
  export type video_entityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_entity
     */
    select?: video_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_entityInclude<ExtArgs> | null
  }



  /**
   * Model statuses
   */

  export type AggregateStatuses = {
    _count: StatusesCountAggregateOutputType | null
    _avg: StatusesAvgAggregateOutputType | null
    _sum: StatusesSumAggregateOutputType | null
    _min: StatusesMinAggregateOutputType | null
    _max: StatusesMaxAggregateOutputType | null
  }

  export type StatusesAvgAggregateOutputType = {
    id: number | null
    video: number | null
  }

  export type StatusesSumAggregateOutputType = {
    id: bigint | null
    video: bigint | null
  }

  export type StatusesMinAggregateOutputType = {
    id: bigint | null
    video: bigint | null
    current: $Enums.video_status | null
  }

  export type StatusesMaxAggregateOutputType = {
    id: bigint | null
    video: bigint | null
    current: $Enums.video_status | null
  }

  export type StatusesCountAggregateOutputType = {
    id: number
    video: number
    current: number
    _all: number
  }


  export type StatusesAvgAggregateInputType = {
    id?: true
    video?: true
  }

  export type StatusesSumAggregateInputType = {
    id?: true
    video?: true
  }

  export type StatusesMinAggregateInputType = {
    id?: true
    video?: true
    current?: true
  }

  export type StatusesMaxAggregateInputType = {
    id?: true
    video?: true
    current?: true
  }

  export type StatusesCountAggregateInputType = {
    id?: true
    video?: true
    current?: true
    _all?: true
  }

  export type StatusesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which statuses to aggregate.
     */
    where?: statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusesOrderByWithRelationInput | statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned statuses
    **/
    _count?: true | StatusesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusesMaxAggregateInputType
  }

  export type GetStatusesAggregateType<T extends StatusesAggregateArgs> = {
        [P in keyof T & keyof AggregateStatuses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatuses[P]>
      : GetScalarType<T[P], AggregateStatuses[P]>
  }




  export type statusesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: statusesWhereInput
    orderBy?: statusesOrderByWithAggregationInput | statusesOrderByWithAggregationInput[]
    by: StatusesScalarFieldEnum[] | StatusesScalarFieldEnum
    having?: statusesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusesCountAggregateInputType | true
    _avg?: StatusesAvgAggregateInputType
    _sum?: StatusesSumAggregateInputType
    _min?: StatusesMinAggregateInputType
    _max?: StatusesMaxAggregateInputType
  }

  export type StatusesGroupByOutputType = {
    id: bigint
    video: bigint
    current: $Enums.video_status
    _count: StatusesCountAggregateOutputType | null
    _avg: StatusesAvgAggregateOutputType | null
    _sum: StatusesSumAggregateOutputType | null
    _min: StatusesMinAggregateOutputType | null
    _max: StatusesMaxAggregateOutputType | null
  }

  type GetStatusesGroupByPayload<T extends statusesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusesGroupByOutputType[P]>
            : GetScalarType<T[P], StatusesGroupByOutputType[P]>
        }
      >
    >


  export type statusesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video?: boolean
    current?: boolean
    video_entity?: boolean | video_entityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statuses"]>

  export type statusesSelectScalar = {
    id?: boolean
    video?: boolean
    current?: boolean
  }

  export type statusesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video_entity?: boolean | video_entityDefaultArgs<ExtArgs>
  }


  export type $statusesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "statuses"
    objects: {
      video_entity: Prisma.$video_entityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      video: bigint
      current: $Enums.video_status
    }, ExtArgs["result"]["statuses"]>
    composites: {}
  }


  type statusesGetPayload<S extends boolean | null | undefined | statusesDefaultArgs> = $Result.GetResult<Prisma.$statusesPayload, S>

  type statusesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<statusesFindManyArgs, 'select' | 'include'> & {
      select?: StatusesCountAggregateInputType | true
    }

  export interface statusesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['statuses'], meta: { name: 'statuses' } }
    /**
     * Find zero or one Statuses that matches the filter.
     * @param {statusesFindUniqueArgs} args - Arguments to find a Statuses
     * @example
     * // Get one Statuses
     * const statuses = await prisma.statuses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends statusesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, statusesFindUniqueArgs<ExtArgs>>
    ): Prisma__statusesClient<$Result.GetResult<Prisma.$statusesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Statuses that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {statusesFindUniqueOrThrowArgs} args - Arguments to find a Statuses
     * @example
     * // Get one Statuses
     * const statuses = await prisma.statuses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends statusesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, statusesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__statusesClient<$Result.GetResult<Prisma.$statusesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusesFindFirstArgs} args - Arguments to find a Statuses
     * @example
     * // Get one Statuses
     * const statuses = await prisma.statuses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends statusesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, statusesFindFirstArgs<ExtArgs>>
    ): Prisma__statusesClient<$Result.GetResult<Prisma.$statusesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Statuses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusesFindFirstOrThrowArgs} args - Arguments to find a Statuses
     * @example
     * // Get one Statuses
     * const statuses = await prisma.statuses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends statusesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, statusesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__statusesClient<$Result.GetResult<Prisma.$statusesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.statuses.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.statuses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusesWithIdOnly = await prisma.statuses.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends statusesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, statusesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statusesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Statuses.
     * @param {statusesCreateArgs} args - Arguments to create a Statuses.
     * @example
     * // Create one Statuses
     * const Statuses = await prisma.statuses.create({
     *   data: {
     *     // ... data to create a Statuses
     *   }
     * })
     * 
    **/
    create<T extends statusesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, statusesCreateArgs<ExtArgs>>
    ): Prisma__statusesClient<$Result.GetResult<Prisma.$statusesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Statuses.
     *     @param {statusesCreateManyArgs} args - Arguments to create many Statuses.
     *     @example
     *     // Create many Statuses
     *     const statuses = await prisma.statuses.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends statusesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, statusesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Statuses.
     * @param {statusesDeleteArgs} args - Arguments to delete one Statuses.
     * @example
     * // Delete one Statuses
     * const Statuses = await prisma.statuses.delete({
     *   where: {
     *     // ... filter to delete one Statuses
     *   }
     * })
     * 
    **/
    delete<T extends statusesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, statusesDeleteArgs<ExtArgs>>
    ): Prisma__statusesClient<$Result.GetResult<Prisma.$statusesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Statuses.
     * @param {statusesUpdateArgs} args - Arguments to update one Statuses.
     * @example
     * // Update one Statuses
     * const statuses = await prisma.statuses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends statusesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, statusesUpdateArgs<ExtArgs>>
    ): Prisma__statusesClient<$Result.GetResult<Prisma.$statusesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Statuses.
     * @param {statusesDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.statuses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends statusesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, statusesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const statuses = await prisma.statuses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends statusesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, statusesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Statuses.
     * @param {statusesUpsertArgs} args - Arguments to update or create a Statuses.
     * @example
     * // Update or create a Statuses
     * const statuses = await prisma.statuses.upsert({
     *   create: {
     *     // ... data to create a Statuses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Statuses we want to update
     *   }
     * })
    **/
    upsert<T extends statusesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, statusesUpsertArgs<ExtArgs>>
    ): Prisma__statusesClient<$Result.GetResult<Prisma.$statusesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusesCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.statuses.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends statusesCountArgs>(
      args?: Subset<T, statusesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusesAggregateArgs>(args: Subset<T, StatusesAggregateArgs>): Prisma.PrismaPromise<GetStatusesAggregateType<T>>

    /**
     * Group by Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends statusesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: statusesGroupByArgs['orderBy'] }
        : { orderBy?: statusesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, statusesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the statuses model
   */
  readonly fields: statusesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for statuses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__statusesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    video_entity<T extends video_entityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, video_entityDefaultArgs<ExtArgs>>): Prisma__video_entityClient<$Result.GetResult<Prisma.$video_entityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the statuses model
   */ 
  interface statusesFieldRefs {
    readonly id: FieldRef<"statuses", 'BigInt'>
    readonly video: FieldRef<"statuses", 'BigInt'>
    readonly current: FieldRef<"statuses", 'video_status'>
  }
    

  // Custom InputTypes

  /**
   * statuses findUnique
   */
  export type statusesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuses
     */
    select?: statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusesInclude<ExtArgs> | null
    /**
     * Filter, which statuses to fetch.
     */
    where: statusesWhereUniqueInput
  }


  /**
   * statuses findUniqueOrThrow
   */
  export type statusesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuses
     */
    select?: statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusesInclude<ExtArgs> | null
    /**
     * Filter, which statuses to fetch.
     */
    where: statusesWhereUniqueInput
  }


  /**
   * statuses findFirst
   */
  export type statusesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuses
     */
    select?: statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusesInclude<ExtArgs> | null
    /**
     * Filter, which statuses to fetch.
     */
    where?: statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusesOrderByWithRelationInput | statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statuses.
     */
    cursor?: statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuses.
     */
    distinct?: StatusesScalarFieldEnum | StatusesScalarFieldEnum[]
  }


  /**
   * statuses findFirstOrThrow
   */
  export type statusesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuses
     */
    select?: statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusesInclude<ExtArgs> | null
    /**
     * Filter, which statuses to fetch.
     */
    where?: statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusesOrderByWithRelationInput | statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statuses.
     */
    cursor?: statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuses.
     */
    distinct?: StatusesScalarFieldEnum | StatusesScalarFieldEnum[]
  }


  /**
   * statuses findMany
   */
  export type statusesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuses
     */
    select?: statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusesInclude<ExtArgs> | null
    /**
     * Filter, which statuses to fetch.
     */
    where?: statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusesOrderByWithRelationInput | statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing statuses.
     */
    cursor?: statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    distinct?: StatusesScalarFieldEnum | StatusesScalarFieldEnum[]
  }


  /**
   * statuses create
   */
  export type statusesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuses
     */
    select?: statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusesInclude<ExtArgs> | null
    /**
     * The data needed to create a statuses.
     */
    data: XOR<statusesCreateInput, statusesUncheckedCreateInput>
  }


  /**
   * statuses createMany
   */
  export type statusesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many statuses.
     */
    data: statusesCreateManyInput | statusesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * statuses update
   */
  export type statusesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuses
     */
    select?: statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusesInclude<ExtArgs> | null
    /**
     * The data needed to update a statuses.
     */
    data: XOR<statusesUpdateInput, statusesUncheckedUpdateInput>
    /**
     * Choose, which statuses to update.
     */
    where: statusesWhereUniqueInput
  }


  /**
   * statuses updateMany
   */
  export type statusesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update statuses.
     */
    data: XOR<statusesUpdateManyMutationInput, statusesUncheckedUpdateManyInput>
    /**
     * Filter which statuses to update
     */
    where?: statusesWhereInput
  }


  /**
   * statuses upsert
   */
  export type statusesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuses
     */
    select?: statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusesInclude<ExtArgs> | null
    /**
     * The filter to search for the statuses to update in case it exists.
     */
    where: statusesWhereUniqueInput
    /**
     * In case the statuses found by the `where` argument doesn't exist, create a new statuses with this data.
     */
    create: XOR<statusesCreateInput, statusesUncheckedCreateInput>
    /**
     * In case the statuses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<statusesUpdateInput, statusesUncheckedUpdateInput>
  }


  /**
   * statuses delete
   */
  export type statusesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuses
     */
    select?: statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusesInclude<ExtArgs> | null
    /**
     * Filter which statuses to delete.
     */
    where: statusesWhereUniqueInput
  }


  /**
   * statuses deleteMany
   */
  export type statusesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which statuses to delete
     */
    where?: statusesWhereInput
  }


  /**
   * statuses without action
   */
  export type statusesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuses
     */
    select?: statusesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusesInclude<ExtArgs> | null
  }



  /**
   * Model video_metadata
   */

  export type AggregateVideo_metadata = {
    _count: Video_metadataCountAggregateOutputType | null
    _avg: Video_metadataAvgAggregateOutputType | null
    _sum: Video_metadataSumAggregateOutputType | null
    _min: Video_metadataMinAggregateOutputType | null
    _max: Video_metadataMaxAggregateOutputType | null
  }

  export type Video_metadataAvgAggregateOutputType = {
    id: number | null
    video: number | null
    length_ms: number | null
    file_size: number | null
  }

  export type Video_metadataSumAggregateOutputType = {
    id: bigint | null
    video: bigint | null
    length_ms: bigint | null
    file_size: bigint | null
  }

  export type Video_metadataMinAggregateOutputType = {
    id: bigint | null
    video: bigint | null
    length_ms: bigint | null
    file_size: bigint | null
    uploader: string | null
  }

  export type Video_metadataMaxAggregateOutputType = {
    id: bigint | null
    video: bigint | null
    length_ms: bigint | null
    file_size: bigint | null
    uploader: string | null
  }

  export type Video_metadataCountAggregateOutputType = {
    id: number
    video: number
    length_ms: number
    file_size: number
    uploader: number
    _all: number
  }


  export type Video_metadataAvgAggregateInputType = {
    id?: true
    video?: true
    length_ms?: true
    file_size?: true
  }

  export type Video_metadataSumAggregateInputType = {
    id?: true
    video?: true
    length_ms?: true
    file_size?: true
  }

  export type Video_metadataMinAggregateInputType = {
    id?: true
    video?: true
    length_ms?: true
    file_size?: true
    uploader?: true
  }

  export type Video_metadataMaxAggregateInputType = {
    id?: true
    video?: true
    length_ms?: true
    file_size?: true
    uploader?: true
  }

  export type Video_metadataCountAggregateInputType = {
    id?: true
    video?: true
    length_ms?: true
    file_size?: true
    uploader?: true
    _all?: true
  }

  export type Video_metadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video_metadata to aggregate.
     */
    where?: video_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_metadata to fetch.
     */
    orderBy?: video_metadataOrderByWithRelationInput | video_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: video_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_metadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned video_metadata
    **/
    _count?: true | Video_metadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Video_metadataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Video_metadataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Video_metadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Video_metadataMaxAggregateInputType
  }

  export type GetVideo_metadataAggregateType<T extends Video_metadataAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo_metadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo_metadata[P]>
      : GetScalarType<T[P], AggregateVideo_metadata[P]>
  }




  export type video_metadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: video_metadataWhereInput
    orderBy?: video_metadataOrderByWithAggregationInput | video_metadataOrderByWithAggregationInput[]
    by: Video_metadataScalarFieldEnum[] | Video_metadataScalarFieldEnum
    having?: video_metadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Video_metadataCountAggregateInputType | true
    _avg?: Video_metadataAvgAggregateInputType
    _sum?: Video_metadataSumAggregateInputType
    _min?: Video_metadataMinAggregateInputType
    _max?: Video_metadataMaxAggregateInputType
  }

  export type Video_metadataGroupByOutputType = {
    id: bigint
    video: bigint
    length_ms: bigint
    file_size: bigint
    uploader: string
    _count: Video_metadataCountAggregateOutputType | null
    _avg: Video_metadataAvgAggregateOutputType | null
    _sum: Video_metadataSumAggregateOutputType | null
    _min: Video_metadataMinAggregateOutputType | null
    _max: Video_metadataMaxAggregateOutputType | null
  }

  type GetVideo_metadataGroupByPayload<T extends video_metadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Video_metadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Video_metadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Video_metadataGroupByOutputType[P]>
            : GetScalarType<T[P], Video_metadataGroupByOutputType[P]>
        }
      >
    >


  export type video_metadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video?: boolean
    length_ms?: boolean
    file_size?: boolean
    uploader?: boolean
    video_entity?: boolean | video_entityDefaultArgs<ExtArgs>
    title?: boolean | video_metadata$titleArgs<ExtArgs>
    description?: boolean | video_metadata$descriptionArgs<ExtArgs>
    _count?: boolean | Video_metadataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video_metadata"]>

  export type video_metadataSelectScalar = {
    id?: boolean
    video?: boolean
    length_ms?: boolean
    file_size?: boolean
    uploader?: boolean
  }

  export type video_metadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video_entity?: boolean | video_entityDefaultArgs<ExtArgs>
    title?: boolean | video_metadata$titleArgs<ExtArgs>
    description?: boolean | video_metadata$descriptionArgs<ExtArgs>
    _count?: boolean | Video_metadataCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $video_metadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "video_metadata"
    objects: {
      video_entity: Prisma.$video_entityPayload<ExtArgs>
      title: Prisma.$video_titlesPayload<ExtArgs>[]
      description: Prisma.$video_descriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      video: bigint
      length_ms: bigint
      file_size: bigint
      uploader: string
    }, ExtArgs["result"]["video_metadata"]>
    composites: {}
  }


  type video_metadataGetPayload<S extends boolean | null | undefined | video_metadataDefaultArgs> = $Result.GetResult<Prisma.$video_metadataPayload, S>

  type video_metadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<video_metadataFindManyArgs, 'select' | 'include'> & {
      select?: Video_metadataCountAggregateInputType | true
    }

  export interface video_metadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['video_metadata'], meta: { name: 'video_metadata' } }
    /**
     * Find zero or one Video_metadata that matches the filter.
     * @param {video_metadataFindUniqueArgs} args - Arguments to find a Video_metadata
     * @example
     * // Get one Video_metadata
     * const video_metadata = await prisma.video_metadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends video_metadataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, video_metadataFindUniqueArgs<ExtArgs>>
    ): Prisma__video_metadataClient<$Result.GetResult<Prisma.$video_metadataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Video_metadata that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {video_metadataFindUniqueOrThrowArgs} args - Arguments to find a Video_metadata
     * @example
     * // Get one Video_metadata
     * const video_metadata = await prisma.video_metadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends video_metadataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, video_metadataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__video_metadataClient<$Result.GetResult<Prisma.$video_metadataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Video_metadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_metadataFindFirstArgs} args - Arguments to find a Video_metadata
     * @example
     * // Get one Video_metadata
     * const video_metadata = await prisma.video_metadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends video_metadataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, video_metadataFindFirstArgs<ExtArgs>>
    ): Prisma__video_metadataClient<$Result.GetResult<Prisma.$video_metadataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Video_metadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_metadataFindFirstOrThrowArgs} args - Arguments to find a Video_metadata
     * @example
     * // Get one Video_metadata
     * const video_metadata = await prisma.video_metadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends video_metadataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, video_metadataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__video_metadataClient<$Result.GetResult<Prisma.$video_metadataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Video_metadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_metadataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Video_metadata
     * const video_metadata = await prisma.video_metadata.findMany()
     * 
     * // Get first 10 Video_metadata
     * const video_metadata = await prisma.video_metadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const video_metadataWithIdOnly = await prisma.video_metadata.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends video_metadataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, video_metadataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$video_metadataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Video_metadata.
     * @param {video_metadataCreateArgs} args - Arguments to create a Video_metadata.
     * @example
     * // Create one Video_metadata
     * const Video_metadata = await prisma.video_metadata.create({
     *   data: {
     *     // ... data to create a Video_metadata
     *   }
     * })
     * 
    **/
    create<T extends video_metadataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, video_metadataCreateArgs<ExtArgs>>
    ): Prisma__video_metadataClient<$Result.GetResult<Prisma.$video_metadataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Video_metadata.
     *     @param {video_metadataCreateManyArgs} args - Arguments to create many Video_metadata.
     *     @example
     *     // Create many Video_metadata
     *     const video_metadata = await prisma.video_metadata.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends video_metadataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, video_metadataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video_metadata.
     * @param {video_metadataDeleteArgs} args - Arguments to delete one Video_metadata.
     * @example
     * // Delete one Video_metadata
     * const Video_metadata = await prisma.video_metadata.delete({
     *   where: {
     *     // ... filter to delete one Video_metadata
     *   }
     * })
     * 
    **/
    delete<T extends video_metadataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, video_metadataDeleteArgs<ExtArgs>>
    ): Prisma__video_metadataClient<$Result.GetResult<Prisma.$video_metadataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Video_metadata.
     * @param {video_metadataUpdateArgs} args - Arguments to update one Video_metadata.
     * @example
     * // Update one Video_metadata
     * const video_metadata = await prisma.video_metadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends video_metadataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, video_metadataUpdateArgs<ExtArgs>>
    ): Prisma__video_metadataClient<$Result.GetResult<Prisma.$video_metadataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Video_metadata.
     * @param {video_metadataDeleteManyArgs} args - Arguments to filter Video_metadata to delete.
     * @example
     * // Delete a few Video_metadata
     * const { count } = await prisma.video_metadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends video_metadataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, video_metadataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Video_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_metadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Video_metadata
     * const video_metadata = await prisma.video_metadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends video_metadataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, video_metadataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video_metadata.
     * @param {video_metadataUpsertArgs} args - Arguments to update or create a Video_metadata.
     * @example
     * // Update or create a Video_metadata
     * const video_metadata = await prisma.video_metadata.upsert({
     *   create: {
     *     // ... data to create a Video_metadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video_metadata we want to update
     *   }
     * })
    **/
    upsert<T extends video_metadataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, video_metadataUpsertArgs<ExtArgs>>
    ): Prisma__video_metadataClient<$Result.GetResult<Prisma.$video_metadataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Video_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_metadataCountArgs} args - Arguments to filter Video_metadata to count.
     * @example
     * // Count the number of Video_metadata
     * const count = await prisma.video_metadata.count({
     *   where: {
     *     // ... the filter for the Video_metadata we want to count
     *   }
     * })
    **/
    count<T extends video_metadataCountArgs>(
      args?: Subset<T, video_metadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Video_metadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Video_metadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Video_metadataAggregateArgs>(args: Subset<T, Video_metadataAggregateArgs>): Prisma.PrismaPromise<GetVideo_metadataAggregateType<T>>

    /**
     * Group by Video_metadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_metadataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends video_metadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: video_metadataGroupByArgs['orderBy'] }
        : { orderBy?: video_metadataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, video_metadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideo_metadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the video_metadata model
   */
  readonly fields: video_metadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for video_metadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__video_metadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    video_entity<T extends video_entityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, video_entityDefaultArgs<ExtArgs>>): Prisma__video_entityClient<$Result.GetResult<Prisma.$video_entityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    title<T extends video_metadata$titleArgs<ExtArgs> = {}>(args?: Subset<T, video_metadata$titleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$video_titlesPayload<ExtArgs>, T, 'findMany'> | Null>;

    description<T extends video_metadata$descriptionArgs<ExtArgs> = {}>(args?: Subset<T, video_metadata$descriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$video_descriptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the video_metadata model
   */ 
  interface video_metadataFieldRefs {
    readonly id: FieldRef<"video_metadata", 'BigInt'>
    readonly video: FieldRef<"video_metadata", 'BigInt'>
    readonly length_ms: FieldRef<"video_metadata", 'BigInt'>
    readonly file_size: FieldRef<"video_metadata", 'BigInt'>
    readonly uploader: FieldRef<"video_metadata", 'String'>
  }
    

  // Custom InputTypes

  /**
   * video_metadata findUnique
   */
  export type video_metadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_metadata
     */
    select?: video_metadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_metadataInclude<ExtArgs> | null
    /**
     * Filter, which video_metadata to fetch.
     */
    where: video_metadataWhereUniqueInput
  }


  /**
   * video_metadata findUniqueOrThrow
   */
  export type video_metadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_metadata
     */
    select?: video_metadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_metadataInclude<ExtArgs> | null
    /**
     * Filter, which video_metadata to fetch.
     */
    where: video_metadataWhereUniqueInput
  }


  /**
   * video_metadata findFirst
   */
  export type video_metadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_metadata
     */
    select?: video_metadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_metadataInclude<ExtArgs> | null
    /**
     * Filter, which video_metadata to fetch.
     */
    where?: video_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_metadata to fetch.
     */
    orderBy?: video_metadataOrderByWithRelationInput | video_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for video_metadata.
     */
    cursor?: video_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_metadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of video_metadata.
     */
    distinct?: Video_metadataScalarFieldEnum | Video_metadataScalarFieldEnum[]
  }


  /**
   * video_metadata findFirstOrThrow
   */
  export type video_metadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_metadata
     */
    select?: video_metadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_metadataInclude<ExtArgs> | null
    /**
     * Filter, which video_metadata to fetch.
     */
    where?: video_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_metadata to fetch.
     */
    orderBy?: video_metadataOrderByWithRelationInput | video_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for video_metadata.
     */
    cursor?: video_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_metadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of video_metadata.
     */
    distinct?: Video_metadataScalarFieldEnum | Video_metadataScalarFieldEnum[]
  }


  /**
   * video_metadata findMany
   */
  export type video_metadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_metadata
     */
    select?: video_metadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_metadataInclude<ExtArgs> | null
    /**
     * Filter, which video_metadata to fetch.
     */
    where?: video_metadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_metadata to fetch.
     */
    orderBy?: video_metadataOrderByWithRelationInput | video_metadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing video_metadata.
     */
    cursor?: video_metadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_metadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_metadata.
     */
    skip?: number
    distinct?: Video_metadataScalarFieldEnum | Video_metadataScalarFieldEnum[]
  }


  /**
   * video_metadata create
   */
  export type video_metadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_metadata
     */
    select?: video_metadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_metadataInclude<ExtArgs> | null
    /**
     * The data needed to create a video_metadata.
     */
    data: XOR<video_metadataCreateInput, video_metadataUncheckedCreateInput>
  }


  /**
   * video_metadata createMany
   */
  export type video_metadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many video_metadata.
     */
    data: video_metadataCreateManyInput | video_metadataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * video_metadata update
   */
  export type video_metadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_metadata
     */
    select?: video_metadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_metadataInclude<ExtArgs> | null
    /**
     * The data needed to update a video_metadata.
     */
    data: XOR<video_metadataUpdateInput, video_metadataUncheckedUpdateInput>
    /**
     * Choose, which video_metadata to update.
     */
    where: video_metadataWhereUniqueInput
  }


  /**
   * video_metadata updateMany
   */
  export type video_metadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update video_metadata.
     */
    data: XOR<video_metadataUpdateManyMutationInput, video_metadataUncheckedUpdateManyInput>
    /**
     * Filter which video_metadata to update
     */
    where?: video_metadataWhereInput
  }


  /**
   * video_metadata upsert
   */
  export type video_metadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_metadata
     */
    select?: video_metadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_metadataInclude<ExtArgs> | null
    /**
     * The filter to search for the video_metadata to update in case it exists.
     */
    where: video_metadataWhereUniqueInput
    /**
     * In case the video_metadata found by the `where` argument doesn't exist, create a new video_metadata with this data.
     */
    create: XOR<video_metadataCreateInput, video_metadataUncheckedCreateInput>
    /**
     * In case the video_metadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<video_metadataUpdateInput, video_metadataUncheckedUpdateInput>
  }


  /**
   * video_metadata delete
   */
  export type video_metadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_metadata
     */
    select?: video_metadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_metadataInclude<ExtArgs> | null
    /**
     * Filter which video_metadata to delete.
     */
    where: video_metadataWhereUniqueInput
  }


  /**
   * video_metadata deleteMany
   */
  export type video_metadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video_metadata to delete
     */
    where?: video_metadataWhereInput
  }


  /**
   * video_metadata.title
   */
  export type video_metadata$titleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_titles
     */
    select?: video_titlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_titlesInclude<ExtArgs> | null
    where?: video_titlesWhereInput
    orderBy?: video_titlesOrderByWithRelationInput | video_titlesOrderByWithRelationInput[]
    cursor?: video_titlesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Video_titlesScalarFieldEnum | Video_titlesScalarFieldEnum[]
  }


  /**
   * video_metadata.description
   */
  export type video_metadata$descriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_description
     */
    select?: video_descriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_descriptionInclude<ExtArgs> | null
    where?: video_descriptionWhereInput
    orderBy?: video_descriptionOrderByWithRelationInput | video_descriptionOrderByWithRelationInput[]
    cursor?: video_descriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Video_descriptionScalarFieldEnum | Video_descriptionScalarFieldEnum[]
  }


  /**
   * video_metadata without action
   */
  export type video_metadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_metadata
     */
    select?: video_metadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_metadataInclude<ExtArgs> | null
  }



  /**
   * Model video_titles
   */

  export type AggregateVideo_titles = {
    _count: Video_titlesCountAggregateOutputType | null
    _avg: Video_titlesAvgAggregateOutputType | null
    _sum: Video_titlesSumAggregateOutputType | null
    _min: Video_titlesMinAggregateOutputType | null
    _max: Video_titlesMaxAggregateOutputType | null
  }

  export type Video_titlesAvgAggregateOutputType = {
    id: number | null
    video: number | null
  }

  export type Video_titlesSumAggregateOutputType = {
    id: bigint | null
    video: bigint | null
  }

  export type Video_titlesMinAggregateOutputType = {
    id: bigint | null
    video: bigint | null
    content: string | null
  }

  export type Video_titlesMaxAggregateOutputType = {
    id: bigint | null
    video: bigint | null
    content: string | null
  }

  export type Video_titlesCountAggregateOutputType = {
    id: number
    video: number
    content: number
    _all: number
  }


  export type Video_titlesAvgAggregateInputType = {
    id?: true
    video?: true
  }

  export type Video_titlesSumAggregateInputType = {
    id?: true
    video?: true
  }

  export type Video_titlesMinAggregateInputType = {
    id?: true
    video?: true
    content?: true
  }

  export type Video_titlesMaxAggregateInputType = {
    id?: true
    video?: true
    content?: true
  }

  export type Video_titlesCountAggregateInputType = {
    id?: true
    video?: true
    content?: true
    _all?: true
  }

  export type Video_titlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video_titles to aggregate.
     */
    where?: video_titlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_titles to fetch.
     */
    orderBy?: video_titlesOrderByWithRelationInput | video_titlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: video_titlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_titles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_titles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned video_titles
    **/
    _count?: true | Video_titlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Video_titlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Video_titlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Video_titlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Video_titlesMaxAggregateInputType
  }

  export type GetVideo_titlesAggregateType<T extends Video_titlesAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo_titles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo_titles[P]>
      : GetScalarType<T[P], AggregateVideo_titles[P]>
  }




  export type video_titlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: video_titlesWhereInput
    orderBy?: video_titlesOrderByWithAggregationInput | video_titlesOrderByWithAggregationInput[]
    by: Video_titlesScalarFieldEnum[] | Video_titlesScalarFieldEnum
    having?: video_titlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Video_titlesCountAggregateInputType | true
    _avg?: Video_titlesAvgAggregateInputType
    _sum?: Video_titlesSumAggregateInputType
    _min?: Video_titlesMinAggregateInputType
    _max?: Video_titlesMaxAggregateInputType
  }

  export type Video_titlesGroupByOutputType = {
    id: bigint
    video: bigint
    content: string
    _count: Video_titlesCountAggregateOutputType | null
    _avg: Video_titlesAvgAggregateOutputType | null
    _sum: Video_titlesSumAggregateOutputType | null
    _min: Video_titlesMinAggregateOutputType | null
    _max: Video_titlesMaxAggregateOutputType | null
  }

  type GetVideo_titlesGroupByPayload<T extends video_titlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Video_titlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Video_titlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Video_titlesGroupByOutputType[P]>
            : GetScalarType<T[P], Video_titlesGroupByOutputType[P]>
        }
      >
    >


  export type video_titlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video?: boolean
    content?: boolean
    video_metadata?: boolean | video_metadataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video_titles"]>

  export type video_titlesSelectScalar = {
    id?: boolean
    video?: boolean
    content?: boolean
  }

  export type video_titlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video_metadata?: boolean | video_metadataDefaultArgs<ExtArgs>
  }


  export type $video_titlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "video_titles"
    objects: {
      video_metadata: Prisma.$video_metadataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      video: bigint
      content: string
    }, ExtArgs["result"]["video_titles"]>
    composites: {}
  }


  type video_titlesGetPayload<S extends boolean | null | undefined | video_titlesDefaultArgs> = $Result.GetResult<Prisma.$video_titlesPayload, S>

  type video_titlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<video_titlesFindManyArgs, 'select' | 'include'> & {
      select?: Video_titlesCountAggregateInputType | true
    }

  export interface video_titlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['video_titles'], meta: { name: 'video_titles' } }
    /**
     * Find zero or one Video_titles that matches the filter.
     * @param {video_titlesFindUniqueArgs} args - Arguments to find a Video_titles
     * @example
     * // Get one Video_titles
     * const video_titles = await prisma.video_titles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends video_titlesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, video_titlesFindUniqueArgs<ExtArgs>>
    ): Prisma__video_titlesClient<$Result.GetResult<Prisma.$video_titlesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Video_titles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {video_titlesFindUniqueOrThrowArgs} args - Arguments to find a Video_titles
     * @example
     * // Get one Video_titles
     * const video_titles = await prisma.video_titles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends video_titlesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, video_titlesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__video_titlesClient<$Result.GetResult<Prisma.$video_titlesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Video_titles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_titlesFindFirstArgs} args - Arguments to find a Video_titles
     * @example
     * // Get one Video_titles
     * const video_titles = await prisma.video_titles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends video_titlesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, video_titlesFindFirstArgs<ExtArgs>>
    ): Prisma__video_titlesClient<$Result.GetResult<Prisma.$video_titlesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Video_titles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_titlesFindFirstOrThrowArgs} args - Arguments to find a Video_titles
     * @example
     * // Get one Video_titles
     * const video_titles = await prisma.video_titles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends video_titlesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, video_titlesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__video_titlesClient<$Result.GetResult<Prisma.$video_titlesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Video_titles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_titlesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Video_titles
     * const video_titles = await prisma.video_titles.findMany()
     * 
     * // Get first 10 Video_titles
     * const video_titles = await prisma.video_titles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const video_titlesWithIdOnly = await prisma.video_titles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends video_titlesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, video_titlesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$video_titlesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Video_titles.
     * @param {video_titlesCreateArgs} args - Arguments to create a Video_titles.
     * @example
     * // Create one Video_titles
     * const Video_titles = await prisma.video_titles.create({
     *   data: {
     *     // ... data to create a Video_titles
     *   }
     * })
     * 
    **/
    create<T extends video_titlesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, video_titlesCreateArgs<ExtArgs>>
    ): Prisma__video_titlesClient<$Result.GetResult<Prisma.$video_titlesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Video_titles.
     *     @param {video_titlesCreateManyArgs} args - Arguments to create many Video_titles.
     *     @example
     *     // Create many Video_titles
     *     const video_titles = await prisma.video_titles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends video_titlesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, video_titlesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video_titles.
     * @param {video_titlesDeleteArgs} args - Arguments to delete one Video_titles.
     * @example
     * // Delete one Video_titles
     * const Video_titles = await prisma.video_titles.delete({
     *   where: {
     *     // ... filter to delete one Video_titles
     *   }
     * })
     * 
    **/
    delete<T extends video_titlesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, video_titlesDeleteArgs<ExtArgs>>
    ): Prisma__video_titlesClient<$Result.GetResult<Prisma.$video_titlesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Video_titles.
     * @param {video_titlesUpdateArgs} args - Arguments to update one Video_titles.
     * @example
     * // Update one Video_titles
     * const video_titles = await prisma.video_titles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends video_titlesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, video_titlesUpdateArgs<ExtArgs>>
    ): Prisma__video_titlesClient<$Result.GetResult<Prisma.$video_titlesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Video_titles.
     * @param {video_titlesDeleteManyArgs} args - Arguments to filter Video_titles to delete.
     * @example
     * // Delete a few Video_titles
     * const { count } = await prisma.video_titles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends video_titlesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, video_titlesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Video_titles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_titlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Video_titles
     * const video_titles = await prisma.video_titles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends video_titlesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, video_titlesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video_titles.
     * @param {video_titlesUpsertArgs} args - Arguments to update or create a Video_titles.
     * @example
     * // Update or create a Video_titles
     * const video_titles = await prisma.video_titles.upsert({
     *   create: {
     *     // ... data to create a Video_titles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video_titles we want to update
     *   }
     * })
    **/
    upsert<T extends video_titlesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, video_titlesUpsertArgs<ExtArgs>>
    ): Prisma__video_titlesClient<$Result.GetResult<Prisma.$video_titlesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Video_titles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_titlesCountArgs} args - Arguments to filter Video_titles to count.
     * @example
     * // Count the number of Video_titles
     * const count = await prisma.video_titles.count({
     *   where: {
     *     // ... the filter for the Video_titles we want to count
     *   }
     * })
    **/
    count<T extends video_titlesCountArgs>(
      args?: Subset<T, video_titlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Video_titlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video_titles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Video_titlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Video_titlesAggregateArgs>(args: Subset<T, Video_titlesAggregateArgs>): Prisma.PrismaPromise<GetVideo_titlesAggregateType<T>>

    /**
     * Group by Video_titles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_titlesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends video_titlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: video_titlesGroupByArgs['orderBy'] }
        : { orderBy?: video_titlesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, video_titlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideo_titlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the video_titles model
   */
  readonly fields: video_titlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for video_titles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__video_titlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    video_metadata<T extends video_metadataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, video_metadataDefaultArgs<ExtArgs>>): Prisma__video_metadataClient<$Result.GetResult<Prisma.$video_metadataPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the video_titles model
   */ 
  interface video_titlesFieldRefs {
    readonly id: FieldRef<"video_titles", 'BigInt'>
    readonly video: FieldRef<"video_titles", 'BigInt'>
    readonly content: FieldRef<"video_titles", 'String'>
  }
    

  // Custom InputTypes

  /**
   * video_titles findUnique
   */
  export type video_titlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_titles
     */
    select?: video_titlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_titlesInclude<ExtArgs> | null
    /**
     * Filter, which video_titles to fetch.
     */
    where: video_titlesWhereUniqueInput
  }


  /**
   * video_titles findUniqueOrThrow
   */
  export type video_titlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_titles
     */
    select?: video_titlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_titlesInclude<ExtArgs> | null
    /**
     * Filter, which video_titles to fetch.
     */
    where: video_titlesWhereUniqueInput
  }


  /**
   * video_titles findFirst
   */
  export type video_titlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_titles
     */
    select?: video_titlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_titlesInclude<ExtArgs> | null
    /**
     * Filter, which video_titles to fetch.
     */
    where?: video_titlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_titles to fetch.
     */
    orderBy?: video_titlesOrderByWithRelationInput | video_titlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for video_titles.
     */
    cursor?: video_titlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_titles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_titles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of video_titles.
     */
    distinct?: Video_titlesScalarFieldEnum | Video_titlesScalarFieldEnum[]
  }


  /**
   * video_titles findFirstOrThrow
   */
  export type video_titlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_titles
     */
    select?: video_titlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_titlesInclude<ExtArgs> | null
    /**
     * Filter, which video_titles to fetch.
     */
    where?: video_titlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_titles to fetch.
     */
    orderBy?: video_titlesOrderByWithRelationInput | video_titlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for video_titles.
     */
    cursor?: video_titlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_titles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_titles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of video_titles.
     */
    distinct?: Video_titlesScalarFieldEnum | Video_titlesScalarFieldEnum[]
  }


  /**
   * video_titles findMany
   */
  export type video_titlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_titles
     */
    select?: video_titlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_titlesInclude<ExtArgs> | null
    /**
     * Filter, which video_titles to fetch.
     */
    where?: video_titlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_titles to fetch.
     */
    orderBy?: video_titlesOrderByWithRelationInput | video_titlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing video_titles.
     */
    cursor?: video_titlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_titles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_titles.
     */
    skip?: number
    distinct?: Video_titlesScalarFieldEnum | Video_titlesScalarFieldEnum[]
  }


  /**
   * video_titles create
   */
  export type video_titlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_titles
     */
    select?: video_titlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_titlesInclude<ExtArgs> | null
    /**
     * The data needed to create a video_titles.
     */
    data: XOR<video_titlesCreateInput, video_titlesUncheckedCreateInput>
  }


  /**
   * video_titles createMany
   */
  export type video_titlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many video_titles.
     */
    data: video_titlesCreateManyInput | video_titlesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * video_titles update
   */
  export type video_titlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_titles
     */
    select?: video_titlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_titlesInclude<ExtArgs> | null
    /**
     * The data needed to update a video_titles.
     */
    data: XOR<video_titlesUpdateInput, video_titlesUncheckedUpdateInput>
    /**
     * Choose, which video_titles to update.
     */
    where: video_titlesWhereUniqueInput
  }


  /**
   * video_titles updateMany
   */
  export type video_titlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update video_titles.
     */
    data: XOR<video_titlesUpdateManyMutationInput, video_titlesUncheckedUpdateManyInput>
    /**
     * Filter which video_titles to update
     */
    where?: video_titlesWhereInput
  }


  /**
   * video_titles upsert
   */
  export type video_titlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_titles
     */
    select?: video_titlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_titlesInclude<ExtArgs> | null
    /**
     * The filter to search for the video_titles to update in case it exists.
     */
    where: video_titlesWhereUniqueInput
    /**
     * In case the video_titles found by the `where` argument doesn't exist, create a new video_titles with this data.
     */
    create: XOR<video_titlesCreateInput, video_titlesUncheckedCreateInput>
    /**
     * In case the video_titles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<video_titlesUpdateInput, video_titlesUncheckedUpdateInput>
  }


  /**
   * video_titles delete
   */
  export type video_titlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_titles
     */
    select?: video_titlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_titlesInclude<ExtArgs> | null
    /**
     * Filter which video_titles to delete.
     */
    where: video_titlesWhereUniqueInput
  }


  /**
   * video_titles deleteMany
   */
  export type video_titlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video_titles to delete
     */
    where?: video_titlesWhereInput
  }


  /**
   * video_titles without action
   */
  export type video_titlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_titles
     */
    select?: video_titlesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_titlesInclude<ExtArgs> | null
  }



  /**
   * Model video_description
   */

  export type AggregateVideo_description = {
    _count: Video_descriptionCountAggregateOutputType | null
    _avg: Video_descriptionAvgAggregateOutputType | null
    _sum: Video_descriptionSumAggregateOutputType | null
    _min: Video_descriptionMinAggregateOutputType | null
    _max: Video_descriptionMaxAggregateOutputType | null
  }

  export type Video_descriptionAvgAggregateOutputType = {
    id: number | null
    video: number | null
  }

  export type Video_descriptionSumAggregateOutputType = {
    id: bigint | null
    video: bigint | null
  }

  export type Video_descriptionMinAggregateOutputType = {
    id: bigint | null
    video: bigint | null
    content: string | null
  }

  export type Video_descriptionMaxAggregateOutputType = {
    id: bigint | null
    video: bigint | null
    content: string | null
  }

  export type Video_descriptionCountAggregateOutputType = {
    id: number
    video: number
    content: number
    _all: number
  }


  export type Video_descriptionAvgAggregateInputType = {
    id?: true
    video?: true
  }

  export type Video_descriptionSumAggregateInputType = {
    id?: true
    video?: true
  }

  export type Video_descriptionMinAggregateInputType = {
    id?: true
    video?: true
    content?: true
  }

  export type Video_descriptionMaxAggregateInputType = {
    id?: true
    video?: true
    content?: true
  }

  export type Video_descriptionCountAggregateInputType = {
    id?: true
    video?: true
    content?: true
    _all?: true
  }

  export type Video_descriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video_description to aggregate.
     */
    where?: video_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_descriptions to fetch.
     */
    orderBy?: video_descriptionOrderByWithRelationInput | video_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: video_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned video_descriptions
    **/
    _count?: true | Video_descriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Video_descriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Video_descriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Video_descriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Video_descriptionMaxAggregateInputType
  }

  export type GetVideo_descriptionAggregateType<T extends Video_descriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo_description]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo_description[P]>
      : GetScalarType<T[P], AggregateVideo_description[P]>
  }




  export type video_descriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: video_descriptionWhereInput
    orderBy?: video_descriptionOrderByWithAggregationInput | video_descriptionOrderByWithAggregationInput[]
    by: Video_descriptionScalarFieldEnum[] | Video_descriptionScalarFieldEnum
    having?: video_descriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Video_descriptionCountAggregateInputType | true
    _avg?: Video_descriptionAvgAggregateInputType
    _sum?: Video_descriptionSumAggregateInputType
    _min?: Video_descriptionMinAggregateInputType
    _max?: Video_descriptionMaxAggregateInputType
  }

  export type Video_descriptionGroupByOutputType = {
    id: bigint
    video: bigint
    content: string
    _count: Video_descriptionCountAggregateOutputType | null
    _avg: Video_descriptionAvgAggregateOutputType | null
    _sum: Video_descriptionSumAggregateOutputType | null
    _min: Video_descriptionMinAggregateOutputType | null
    _max: Video_descriptionMaxAggregateOutputType | null
  }

  type GetVideo_descriptionGroupByPayload<T extends video_descriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Video_descriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Video_descriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Video_descriptionGroupByOutputType[P]>
            : GetScalarType<T[P], Video_descriptionGroupByOutputType[P]>
        }
      >
    >


  export type video_descriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video?: boolean
    content?: boolean
    video_metadata?: boolean | video_metadataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video_description"]>

  export type video_descriptionSelectScalar = {
    id?: boolean
    video?: boolean
    content?: boolean
  }

  export type video_descriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video_metadata?: boolean | video_metadataDefaultArgs<ExtArgs>
  }


  export type $video_descriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "video_description"
    objects: {
      video_metadata: Prisma.$video_metadataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      video: bigint
      content: string
    }, ExtArgs["result"]["video_description"]>
    composites: {}
  }


  type video_descriptionGetPayload<S extends boolean | null | undefined | video_descriptionDefaultArgs> = $Result.GetResult<Prisma.$video_descriptionPayload, S>

  type video_descriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<video_descriptionFindManyArgs, 'select' | 'include'> & {
      select?: Video_descriptionCountAggregateInputType | true
    }

  export interface video_descriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['video_description'], meta: { name: 'video_description' } }
    /**
     * Find zero or one Video_description that matches the filter.
     * @param {video_descriptionFindUniqueArgs} args - Arguments to find a Video_description
     * @example
     * // Get one Video_description
     * const video_description = await prisma.video_description.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends video_descriptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, video_descriptionFindUniqueArgs<ExtArgs>>
    ): Prisma__video_descriptionClient<$Result.GetResult<Prisma.$video_descriptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Video_description that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {video_descriptionFindUniqueOrThrowArgs} args - Arguments to find a Video_description
     * @example
     * // Get one Video_description
     * const video_description = await prisma.video_description.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends video_descriptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, video_descriptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__video_descriptionClient<$Result.GetResult<Prisma.$video_descriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Video_description that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_descriptionFindFirstArgs} args - Arguments to find a Video_description
     * @example
     * // Get one Video_description
     * const video_description = await prisma.video_description.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends video_descriptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, video_descriptionFindFirstArgs<ExtArgs>>
    ): Prisma__video_descriptionClient<$Result.GetResult<Prisma.$video_descriptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Video_description that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_descriptionFindFirstOrThrowArgs} args - Arguments to find a Video_description
     * @example
     * // Get one Video_description
     * const video_description = await prisma.video_description.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends video_descriptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, video_descriptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__video_descriptionClient<$Result.GetResult<Prisma.$video_descriptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Video_descriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_descriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Video_descriptions
     * const video_descriptions = await prisma.video_description.findMany()
     * 
     * // Get first 10 Video_descriptions
     * const video_descriptions = await prisma.video_description.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const video_descriptionWithIdOnly = await prisma.video_description.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends video_descriptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, video_descriptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$video_descriptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Video_description.
     * @param {video_descriptionCreateArgs} args - Arguments to create a Video_description.
     * @example
     * // Create one Video_description
     * const Video_description = await prisma.video_description.create({
     *   data: {
     *     // ... data to create a Video_description
     *   }
     * })
     * 
    **/
    create<T extends video_descriptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, video_descriptionCreateArgs<ExtArgs>>
    ): Prisma__video_descriptionClient<$Result.GetResult<Prisma.$video_descriptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Video_descriptions.
     *     @param {video_descriptionCreateManyArgs} args - Arguments to create many Video_descriptions.
     *     @example
     *     // Create many Video_descriptions
     *     const video_description = await prisma.video_description.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends video_descriptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, video_descriptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video_description.
     * @param {video_descriptionDeleteArgs} args - Arguments to delete one Video_description.
     * @example
     * // Delete one Video_description
     * const Video_description = await prisma.video_description.delete({
     *   where: {
     *     // ... filter to delete one Video_description
     *   }
     * })
     * 
    **/
    delete<T extends video_descriptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, video_descriptionDeleteArgs<ExtArgs>>
    ): Prisma__video_descriptionClient<$Result.GetResult<Prisma.$video_descriptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Video_description.
     * @param {video_descriptionUpdateArgs} args - Arguments to update one Video_description.
     * @example
     * // Update one Video_description
     * const video_description = await prisma.video_description.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends video_descriptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, video_descriptionUpdateArgs<ExtArgs>>
    ): Prisma__video_descriptionClient<$Result.GetResult<Prisma.$video_descriptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Video_descriptions.
     * @param {video_descriptionDeleteManyArgs} args - Arguments to filter Video_descriptions to delete.
     * @example
     * // Delete a few Video_descriptions
     * const { count } = await prisma.video_description.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends video_descriptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, video_descriptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Video_descriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_descriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Video_descriptions
     * const video_description = await prisma.video_description.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends video_descriptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, video_descriptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video_description.
     * @param {video_descriptionUpsertArgs} args - Arguments to update or create a Video_description.
     * @example
     * // Update or create a Video_description
     * const video_description = await prisma.video_description.upsert({
     *   create: {
     *     // ... data to create a Video_description
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video_description we want to update
     *   }
     * })
    **/
    upsert<T extends video_descriptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, video_descriptionUpsertArgs<ExtArgs>>
    ): Prisma__video_descriptionClient<$Result.GetResult<Prisma.$video_descriptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Video_descriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_descriptionCountArgs} args - Arguments to filter Video_descriptions to count.
     * @example
     * // Count the number of Video_descriptions
     * const count = await prisma.video_description.count({
     *   where: {
     *     // ... the filter for the Video_descriptions we want to count
     *   }
     * })
    **/
    count<T extends video_descriptionCountArgs>(
      args?: Subset<T, video_descriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Video_descriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video_description.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Video_descriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Video_descriptionAggregateArgs>(args: Subset<T, Video_descriptionAggregateArgs>): Prisma.PrismaPromise<GetVideo_descriptionAggregateType<T>>

    /**
     * Group by Video_description.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_descriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends video_descriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: video_descriptionGroupByArgs['orderBy'] }
        : { orderBy?: video_descriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, video_descriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideo_descriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the video_description model
   */
  readonly fields: video_descriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for video_description.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__video_descriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    video_metadata<T extends video_metadataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, video_metadataDefaultArgs<ExtArgs>>): Prisma__video_metadataClient<$Result.GetResult<Prisma.$video_metadataPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the video_description model
   */ 
  interface video_descriptionFieldRefs {
    readonly id: FieldRef<"video_description", 'BigInt'>
    readonly video: FieldRef<"video_description", 'BigInt'>
    readonly content: FieldRef<"video_description", 'String'>
  }
    

  // Custom InputTypes

  /**
   * video_description findUnique
   */
  export type video_descriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_description
     */
    select?: video_descriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which video_description to fetch.
     */
    where: video_descriptionWhereUniqueInput
  }


  /**
   * video_description findUniqueOrThrow
   */
  export type video_descriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_description
     */
    select?: video_descriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which video_description to fetch.
     */
    where: video_descriptionWhereUniqueInput
  }


  /**
   * video_description findFirst
   */
  export type video_descriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_description
     */
    select?: video_descriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which video_description to fetch.
     */
    where?: video_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_descriptions to fetch.
     */
    orderBy?: video_descriptionOrderByWithRelationInput | video_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for video_descriptions.
     */
    cursor?: video_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of video_descriptions.
     */
    distinct?: Video_descriptionScalarFieldEnum | Video_descriptionScalarFieldEnum[]
  }


  /**
   * video_description findFirstOrThrow
   */
  export type video_descriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_description
     */
    select?: video_descriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which video_description to fetch.
     */
    where?: video_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_descriptions to fetch.
     */
    orderBy?: video_descriptionOrderByWithRelationInput | video_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for video_descriptions.
     */
    cursor?: video_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of video_descriptions.
     */
    distinct?: Video_descriptionScalarFieldEnum | Video_descriptionScalarFieldEnum[]
  }


  /**
   * video_description findMany
   */
  export type video_descriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_description
     */
    select?: video_descriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which video_descriptions to fetch.
     */
    where?: video_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_descriptions to fetch.
     */
    orderBy?: video_descriptionOrderByWithRelationInput | video_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing video_descriptions.
     */
    cursor?: video_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_descriptions.
     */
    skip?: number
    distinct?: Video_descriptionScalarFieldEnum | Video_descriptionScalarFieldEnum[]
  }


  /**
   * video_description create
   */
  export type video_descriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_description
     */
    select?: video_descriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_descriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a video_description.
     */
    data: XOR<video_descriptionCreateInput, video_descriptionUncheckedCreateInput>
  }


  /**
   * video_description createMany
   */
  export type video_descriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many video_descriptions.
     */
    data: video_descriptionCreateManyInput | video_descriptionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * video_description update
   */
  export type video_descriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_description
     */
    select?: video_descriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_descriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a video_description.
     */
    data: XOR<video_descriptionUpdateInput, video_descriptionUncheckedUpdateInput>
    /**
     * Choose, which video_description to update.
     */
    where: video_descriptionWhereUniqueInput
  }


  /**
   * video_description updateMany
   */
  export type video_descriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update video_descriptions.
     */
    data: XOR<video_descriptionUpdateManyMutationInput, video_descriptionUncheckedUpdateManyInput>
    /**
     * Filter which video_descriptions to update
     */
    where?: video_descriptionWhereInput
  }


  /**
   * video_description upsert
   */
  export type video_descriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_description
     */
    select?: video_descriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_descriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the video_description to update in case it exists.
     */
    where: video_descriptionWhereUniqueInput
    /**
     * In case the video_description found by the `where` argument doesn't exist, create a new video_description with this data.
     */
    create: XOR<video_descriptionCreateInput, video_descriptionUncheckedCreateInput>
    /**
     * In case the video_description was found with the provided `where` argument, update it with this data.
     */
    update: XOR<video_descriptionUpdateInput, video_descriptionUncheckedUpdateInput>
  }


  /**
   * video_description delete
   */
  export type video_descriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_description
     */
    select?: video_descriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_descriptionInclude<ExtArgs> | null
    /**
     * Filter which video_description to delete.
     */
    where: video_descriptionWhereUniqueInput
  }


  /**
   * video_description deleteMany
   */
  export type video_descriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video_descriptions to delete
     */
    where?: video_descriptionWhereInput
  }


  /**
   * video_description without action
   */
  export type video_descriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_description
     */
    select?: video_descriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_descriptionInclude<ExtArgs> | null
  }



  /**
   * Model views
   */

  export type AggregateViews = {
    _count: ViewsCountAggregateOutputType | null
    _avg: ViewsAvgAggregateOutputType | null
    _sum: ViewsSumAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  export type ViewsAvgAggregateOutputType = {
    id: number | null
    owner: number | null
  }

  export type ViewsSumAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type ViewsMinAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type ViewsMaxAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type ViewsCountAggregateOutputType = {
    id: number
    owner: number
    _all: number
  }


  export type ViewsAvgAggregateInputType = {
    id?: true
    owner?: true
  }

  export type ViewsSumAggregateInputType = {
    id?: true
    owner?: true
  }

  export type ViewsMinAggregateInputType = {
    id?: true
    owner?: true
  }

  export type ViewsMaxAggregateInputType = {
    id?: true
    owner?: true
  }

  export type ViewsCountAggregateInputType = {
    id?: true
    owner?: true
    _all?: true
  }

  export type ViewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which views to aggregate.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned views
    **/
    _count?: true | ViewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewsMaxAggregateInputType
  }

  export type GetViewsAggregateType<T extends ViewsAggregateArgs> = {
        [P in keyof T & keyof AggregateViews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViews[P]>
      : GetScalarType<T[P], AggregateViews[P]>
  }




  export type viewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viewsWhereInput
    orderBy?: viewsOrderByWithAggregationInput | viewsOrderByWithAggregationInput[]
    by: ViewsScalarFieldEnum[] | ViewsScalarFieldEnum
    having?: viewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewsCountAggregateInputType | true
    _avg?: ViewsAvgAggregateInputType
    _sum?: ViewsSumAggregateInputType
    _min?: ViewsMinAggregateInputType
    _max?: ViewsMaxAggregateInputType
  }

  export type ViewsGroupByOutputType = {
    id: bigint
    owner: bigint
    _count: ViewsCountAggregateOutputType | null
    _avg: ViewsAvgAggregateOutputType | null
    _sum: ViewsSumAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  type GetViewsGroupByPayload<T extends viewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewsGroupByOutputType[P]>
            : GetScalarType<T[P], ViewsGroupByOutputType[P]>
        }
      >
    >


  export type viewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    video_entity?: boolean | video_entityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["views"]>

  export type viewsSelectScalar = {
    id?: boolean
    owner?: boolean
  }

  export type viewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video_entity?: boolean | video_entityDefaultArgs<ExtArgs>
  }


  export type $viewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "views"
    objects: {
      video_entity: Prisma.$video_entityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      owner: bigint
    }, ExtArgs["result"]["views"]>
    composites: {}
  }


  type viewsGetPayload<S extends boolean | null | undefined | viewsDefaultArgs> = $Result.GetResult<Prisma.$viewsPayload, S>

  type viewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<viewsFindManyArgs, 'select' | 'include'> & {
      select?: ViewsCountAggregateInputType | true
    }

  export interface viewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['views'], meta: { name: 'views' } }
    /**
     * Find zero or one Views that matches the filter.
     * @param {viewsFindUniqueArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends viewsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, viewsFindUniqueArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Views that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {viewsFindUniqueOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends viewsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, viewsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsFindFirstArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends viewsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, viewsFindFirstArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Views that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsFindFirstOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends viewsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, viewsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.views.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.views.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewsWithIdOnly = await prisma.views.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends viewsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, viewsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Views.
     * @param {viewsCreateArgs} args - Arguments to create a Views.
     * @example
     * // Create one Views
     * const Views = await prisma.views.create({
     *   data: {
     *     // ... data to create a Views
     *   }
     * })
     * 
    **/
    create<T extends viewsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, viewsCreateArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Views.
     *     @param {viewsCreateManyArgs} args - Arguments to create many Views.
     *     @example
     *     // Create many Views
     *     const views = await prisma.views.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends viewsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, viewsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Views.
     * @param {viewsDeleteArgs} args - Arguments to delete one Views.
     * @example
     * // Delete one Views
     * const Views = await prisma.views.delete({
     *   where: {
     *     // ... filter to delete one Views
     *   }
     * })
     * 
    **/
    delete<T extends viewsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, viewsDeleteArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Views.
     * @param {viewsUpdateArgs} args - Arguments to update one Views.
     * @example
     * // Update one Views
     * const views = await prisma.views.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends viewsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, viewsUpdateArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Views.
     * @param {viewsDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.views.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends viewsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, viewsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const views = await prisma.views.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends viewsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, viewsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Views.
     * @param {viewsUpsertArgs} args - Arguments to update or create a Views.
     * @example
     * // Update or create a Views
     * const views = await prisma.views.upsert({
     *   create: {
     *     // ... data to create a Views
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Views we want to update
     *   }
     * })
    **/
    upsert<T extends viewsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, viewsUpsertArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.views.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends viewsCountArgs>(
      args?: Subset<T, viewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewsAggregateArgs>(args: Subset<T, ViewsAggregateArgs>): Prisma.PrismaPromise<GetViewsAggregateType<T>>

    /**
     * Group by Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends viewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: viewsGroupByArgs['orderBy'] }
        : { orderBy?: viewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, viewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the views model
   */
  readonly fields: viewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for views.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__viewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    video_entity<T extends video_entityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, video_entityDefaultArgs<ExtArgs>>): Prisma__video_entityClient<$Result.GetResult<Prisma.$video_entityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the views model
   */ 
  interface viewsFieldRefs {
    readonly id: FieldRef<"views", 'BigInt'>
    readonly owner: FieldRef<"views", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * views findUnique
   */
  export type viewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where: viewsWhereUniqueInput
  }


  /**
   * views findUniqueOrThrow
   */
  export type viewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where: viewsWhereUniqueInput
  }


  /**
   * views findFirst
   */
  export type viewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for views.
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }


  /**
   * views findFirstOrThrow
   */
  export type viewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for views.
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }


  /**
   * views findMany
   */
  export type viewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing views.
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }


  /**
   * views create
   */
  export type viewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * The data needed to create a views.
     */
    data: XOR<viewsCreateInput, viewsUncheckedCreateInput>
  }


  /**
   * views createMany
   */
  export type viewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many views.
     */
    data: viewsCreateManyInput | viewsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * views update
   */
  export type viewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * The data needed to update a views.
     */
    data: XOR<viewsUpdateInput, viewsUncheckedUpdateInput>
    /**
     * Choose, which views to update.
     */
    where: viewsWhereUniqueInput
  }


  /**
   * views updateMany
   */
  export type viewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update views.
     */
    data: XOR<viewsUpdateManyMutationInput, viewsUncheckedUpdateManyInput>
    /**
     * Filter which views to update
     */
    where?: viewsWhereInput
  }


  /**
   * views upsert
   */
  export type viewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * The filter to search for the views to update in case it exists.
     */
    where: viewsWhereUniqueInput
    /**
     * In case the views found by the `where` argument doesn't exist, create a new views with this data.
     */
    create: XOR<viewsCreateInput, viewsUncheckedCreateInput>
    /**
     * In case the views was found with the provided `where` argument, update it with this data.
     */
    update: XOR<viewsUpdateInput, viewsUncheckedUpdateInput>
  }


  /**
   * views delete
   */
  export type viewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter which views to delete.
     */
    where: viewsWhereUniqueInput
  }


  /**
   * views deleteMany
   */
  export type viewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which views to delete
     */
    where?: viewsWhereInput
  }


  /**
   * views without action
   */
  export type viewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
  }



  /**
   * Model subtitles_container
   */

  export type AggregateSubtitles_container = {
    _count: Subtitles_containerCountAggregateOutputType | null
    _avg: Subtitles_containerAvgAggregateOutputType | null
    _sum: Subtitles_containerSumAggregateOutputType | null
    _min: Subtitles_containerMinAggregateOutputType | null
    _max: Subtitles_containerMaxAggregateOutputType | null
  }

  export type Subtitles_containerAvgAggregateOutputType = {
    id: number | null
  }

  export type Subtitles_containerSumAggregateOutputType = {
    id: bigint | null
  }

  export type Subtitles_containerMinAggregateOutputType = {
    id: bigint | null
    lang: string | null
  }

  export type Subtitles_containerMaxAggregateOutputType = {
    id: bigint | null
    lang: string | null
  }

  export type Subtitles_containerCountAggregateOutputType = {
    id: number
    lang: number
    _all: number
  }


  export type Subtitles_containerAvgAggregateInputType = {
    id?: true
  }

  export type Subtitles_containerSumAggregateInputType = {
    id?: true
  }

  export type Subtitles_containerMinAggregateInputType = {
    id?: true
    lang?: true
  }

  export type Subtitles_containerMaxAggregateInputType = {
    id?: true
    lang?: true
  }

  export type Subtitles_containerCountAggregateInputType = {
    id?: true
    lang?: true
    _all?: true
  }

  export type Subtitles_containerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subtitles_container to aggregate.
     */
    where?: subtitles_containerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtitles_containers to fetch.
     */
    orderBy?: subtitles_containerOrderByWithRelationInput | subtitles_containerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subtitles_containerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtitles_containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtitles_containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subtitles_containers
    **/
    _count?: true | Subtitles_containerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Subtitles_containerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Subtitles_containerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Subtitles_containerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Subtitles_containerMaxAggregateInputType
  }

  export type GetSubtitles_containerAggregateType<T extends Subtitles_containerAggregateArgs> = {
        [P in keyof T & keyof AggregateSubtitles_container]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubtitles_container[P]>
      : GetScalarType<T[P], AggregateSubtitles_container[P]>
  }




  export type subtitles_containerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subtitles_containerWhereInput
    orderBy?: subtitles_containerOrderByWithAggregationInput | subtitles_containerOrderByWithAggregationInput[]
    by: Subtitles_containerScalarFieldEnum[] | Subtitles_containerScalarFieldEnum
    having?: subtitles_containerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Subtitles_containerCountAggregateInputType | true
    _avg?: Subtitles_containerAvgAggregateInputType
    _sum?: Subtitles_containerSumAggregateInputType
    _min?: Subtitles_containerMinAggregateInputType
    _max?: Subtitles_containerMaxAggregateInputType
  }

  export type Subtitles_containerGroupByOutputType = {
    id: bigint
    lang: string
    _count: Subtitles_containerCountAggregateOutputType | null
    _avg: Subtitles_containerAvgAggregateOutputType | null
    _sum: Subtitles_containerSumAggregateOutputType | null
    _min: Subtitles_containerMinAggregateOutputType | null
    _max: Subtitles_containerMaxAggregateOutputType | null
  }

  type GetSubtitles_containerGroupByPayload<T extends subtitles_containerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Subtitles_containerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Subtitles_containerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Subtitles_containerGroupByOutputType[P]>
            : GetScalarType<T[P], Subtitles_containerGroupByOutputType[P]>
        }
      >
    >


  export type subtitles_containerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    subtitles?: boolean | subtitles_container$subtitlesArgs<ExtArgs>
    _count?: boolean | Subtitles_containerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtitles_container"]>

  export type subtitles_containerSelectScalar = {
    id?: boolean
    lang?: boolean
  }

  export type subtitles_containerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtitles?: boolean | subtitles_container$subtitlesArgs<ExtArgs>
    _count?: boolean | Subtitles_containerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $subtitles_containerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subtitles_container"
    objects: {
      subtitles: Prisma.$subtitlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      lang: string
    }, ExtArgs["result"]["subtitles_container"]>
    composites: {}
  }


  type subtitles_containerGetPayload<S extends boolean | null | undefined | subtitles_containerDefaultArgs> = $Result.GetResult<Prisma.$subtitles_containerPayload, S>

  type subtitles_containerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<subtitles_containerFindManyArgs, 'select' | 'include'> & {
      select?: Subtitles_containerCountAggregateInputType | true
    }

  export interface subtitles_containerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subtitles_container'], meta: { name: 'subtitles_container' } }
    /**
     * Find zero or one Subtitles_container that matches the filter.
     * @param {subtitles_containerFindUniqueArgs} args - Arguments to find a Subtitles_container
     * @example
     * // Get one Subtitles_container
     * const subtitles_container = await prisma.subtitles_container.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends subtitles_containerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, subtitles_containerFindUniqueArgs<ExtArgs>>
    ): Prisma__subtitles_containerClient<$Result.GetResult<Prisma.$subtitles_containerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Subtitles_container that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {subtitles_containerFindUniqueOrThrowArgs} args - Arguments to find a Subtitles_container
     * @example
     * // Get one Subtitles_container
     * const subtitles_container = await prisma.subtitles_container.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends subtitles_containerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subtitles_containerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__subtitles_containerClient<$Result.GetResult<Prisma.$subtitles_containerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Subtitles_container that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtitles_containerFindFirstArgs} args - Arguments to find a Subtitles_container
     * @example
     * // Get one Subtitles_container
     * const subtitles_container = await prisma.subtitles_container.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends subtitles_containerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, subtitles_containerFindFirstArgs<ExtArgs>>
    ): Prisma__subtitles_containerClient<$Result.GetResult<Prisma.$subtitles_containerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Subtitles_container that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtitles_containerFindFirstOrThrowArgs} args - Arguments to find a Subtitles_container
     * @example
     * // Get one Subtitles_container
     * const subtitles_container = await prisma.subtitles_container.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends subtitles_containerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subtitles_containerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__subtitles_containerClient<$Result.GetResult<Prisma.$subtitles_containerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Subtitles_containers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtitles_containerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subtitles_containers
     * const subtitles_containers = await prisma.subtitles_container.findMany()
     * 
     * // Get first 10 Subtitles_containers
     * const subtitles_containers = await prisma.subtitles_container.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subtitles_containerWithIdOnly = await prisma.subtitles_container.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends subtitles_containerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subtitles_containerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subtitles_containerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Subtitles_container.
     * @param {subtitles_containerCreateArgs} args - Arguments to create a Subtitles_container.
     * @example
     * // Create one Subtitles_container
     * const Subtitles_container = await prisma.subtitles_container.create({
     *   data: {
     *     // ... data to create a Subtitles_container
     *   }
     * })
     * 
    **/
    create<T extends subtitles_containerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, subtitles_containerCreateArgs<ExtArgs>>
    ): Prisma__subtitles_containerClient<$Result.GetResult<Prisma.$subtitles_containerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Subtitles_containers.
     *     @param {subtitles_containerCreateManyArgs} args - Arguments to create many Subtitles_containers.
     *     @example
     *     // Create many Subtitles_containers
     *     const subtitles_container = await prisma.subtitles_container.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends subtitles_containerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subtitles_containerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subtitles_container.
     * @param {subtitles_containerDeleteArgs} args - Arguments to delete one Subtitles_container.
     * @example
     * // Delete one Subtitles_container
     * const Subtitles_container = await prisma.subtitles_container.delete({
     *   where: {
     *     // ... filter to delete one Subtitles_container
     *   }
     * })
     * 
    **/
    delete<T extends subtitles_containerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, subtitles_containerDeleteArgs<ExtArgs>>
    ): Prisma__subtitles_containerClient<$Result.GetResult<Prisma.$subtitles_containerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Subtitles_container.
     * @param {subtitles_containerUpdateArgs} args - Arguments to update one Subtitles_container.
     * @example
     * // Update one Subtitles_container
     * const subtitles_container = await prisma.subtitles_container.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends subtitles_containerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, subtitles_containerUpdateArgs<ExtArgs>>
    ): Prisma__subtitles_containerClient<$Result.GetResult<Prisma.$subtitles_containerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Subtitles_containers.
     * @param {subtitles_containerDeleteManyArgs} args - Arguments to filter Subtitles_containers to delete.
     * @example
     * // Delete a few Subtitles_containers
     * const { count } = await prisma.subtitles_container.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends subtitles_containerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subtitles_containerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subtitles_containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtitles_containerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subtitles_containers
     * const subtitles_container = await prisma.subtitles_container.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends subtitles_containerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, subtitles_containerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subtitles_container.
     * @param {subtitles_containerUpsertArgs} args - Arguments to update or create a Subtitles_container.
     * @example
     * // Update or create a Subtitles_container
     * const subtitles_container = await prisma.subtitles_container.upsert({
     *   create: {
     *     // ... data to create a Subtitles_container
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subtitles_container we want to update
     *   }
     * })
    **/
    upsert<T extends subtitles_containerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, subtitles_containerUpsertArgs<ExtArgs>>
    ): Prisma__subtitles_containerClient<$Result.GetResult<Prisma.$subtitles_containerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Subtitles_containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtitles_containerCountArgs} args - Arguments to filter Subtitles_containers to count.
     * @example
     * // Count the number of Subtitles_containers
     * const count = await prisma.subtitles_container.count({
     *   where: {
     *     // ... the filter for the Subtitles_containers we want to count
     *   }
     * })
    **/
    count<T extends subtitles_containerCountArgs>(
      args?: Subset<T, subtitles_containerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Subtitles_containerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subtitles_container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Subtitles_containerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Subtitles_containerAggregateArgs>(args: Subset<T, Subtitles_containerAggregateArgs>): Prisma.PrismaPromise<GetSubtitles_containerAggregateType<T>>

    /**
     * Group by Subtitles_container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtitles_containerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends subtitles_containerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subtitles_containerGroupByArgs['orderBy'] }
        : { orderBy?: subtitles_containerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subtitles_containerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubtitles_containerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subtitles_container model
   */
  readonly fields: subtitles_containerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subtitles_container.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subtitles_containerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    subtitles<T extends subtitles_container$subtitlesArgs<ExtArgs> = {}>(args?: Subset<T, subtitles_container$subtitlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subtitlePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the subtitles_container model
   */ 
  interface subtitles_containerFieldRefs {
    readonly id: FieldRef<"subtitles_container", 'BigInt'>
    readonly lang: FieldRef<"subtitles_container", 'String'>
  }
    

  // Custom InputTypes

  /**
   * subtitles_container findUnique
   */
  export type subtitles_containerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitles_container
     */
    select?: subtitles_containerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitles_containerInclude<ExtArgs> | null
    /**
     * Filter, which subtitles_container to fetch.
     */
    where: subtitles_containerWhereUniqueInput
  }


  /**
   * subtitles_container findUniqueOrThrow
   */
  export type subtitles_containerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitles_container
     */
    select?: subtitles_containerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitles_containerInclude<ExtArgs> | null
    /**
     * Filter, which subtitles_container to fetch.
     */
    where: subtitles_containerWhereUniqueInput
  }


  /**
   * subtitles_container findFirst
   */
  export type subtitles_containerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitles_container
     */
    select?: subtitles_containerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitles_containerInclude<ExtArgs> | null
    /**
     * Filter, which subtitles_container to fetch.
     */
    where?: subtitles_containerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtitles_containers to fetch.
     */
    orderBy?: subtitles_containerOrderByWithRelationInput | subtitles_containerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subtitles_containers.
     */
    cursor?: subtitles_containerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtitles_containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtitles_containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subtitles_containers.
     */
    distinct?: Subtitles_containerScalarFieldEnum | Subtitles_containerScalarFieldEnum[]
  }


  /**
   * subtitles_container findFirstOrThrow
   */
  export type subtitles_containerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitles_container
     */
    select?: subtitles_containerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitles_containerInclude<ExtArgs> | null
    /**
     * Filter, which subtitles_container to fetch.
     */
    where?: subtitles_containerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtitles_containers to fetch.
     */
    orderBy?: subtitles_containerOrderByWithRelationInput | subtitles_containerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subtitles_containers.
     */
    cursor?: subtitles_containerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtitles_containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtitles_containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subtitles_containers.
     */
    distinct?: Subtitles_containerScalarFieldEnum | Subtitles_containerScalarFieldEnum[]
  }


  /**
   * subtitles_container findMany
   */
  export type subtitles_containerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitles_container
     */
    select?: subtitles_containerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitles_containerInclude<ExtArgs> | null
    /**
     * Filter, which subtitles_containers to fetch.
     */
    where?: subtitles_containerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtitles_containers to fetch.
     */
    orderBy?: subtitles_containerOrderByWithRelationInput | subtitles_containerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subtitles_containers.
     */
    cursor?: subtitles_containerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtitles_containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtitles_containers.
     */
    skip?: number
    distinct?: Subtitles_containerScalarFieldEnum | Subtitles_containerScalarFieldEnum[]
  }


  /**
   * subtitles_container create
   */
  export type subtitles_containerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitles_container
     */
    select?: subtitles_containerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitles_containerInclude<ExtArgs> | null
    /**
     * The data needed to create a subtitles_container.
     */
    data: XOR<subtitles_containerCreateInput, subtitles_containerUncheckedCreateInput>
  }


  /**
   * subtitles_container createMany
   */
  export type subtitles_containerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subtitles_containers.
     */
    data: subtitles_containerCreateManyInput | subtitles_containerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * subtitles_container update
   */
  export type subtitles_containerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitles_container
     */
    select?: subtitles_containerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitles_containerInclude<ExtArgs> | null
    /**
     * The data needed to update a subtitles_container.
     */
    data: XOR<subtitles_containerUpdateInput, subtitles_containerUncheckedUpdateInput>
    /**
     * Choose, which subtitles_container to update.
     */
    where: subtitles_containerWhereUniqueInput
  }


  /**
   * subtitles_container updateMany
   */
  export type subtitles_containerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subtitles_containers.
     */
    data: XOR<subtitles_containerUpdateManyMutationInput, subtitles_containerUncheckedUpdateManyInput>
    /**
     * Filter which subtitles_containers to update
     */
    where?: subtitles_containerWhereInput
  }


  /**
   * subtitles_container upsert
   */
  export type subtitles_containerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitles_container
     */
    select?: subtitles_containerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitles_containerInclude<ExtArgs> | null
    /**
     * The filter to search for the subtitles_container to update in case it exists.
     */
    where: subtitles_containerWhereUniqueInput
    /**
     * In case the subtitles_container found by the `where` argument doesn't exist, create a new subtitles_container with this data.
     */
    create: XOR<subtitles_containerCreateInput, subtitles_containerUncheckedCreateInput>
    /**
     * In case the subtitles_container was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subtitles_containerUpdateInput, subtitles_containerUncheckedUpdateInput>
  }


  /**
   * subtitles_container delete
   */
  export type subtitles_containerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitles_container
     */
    select?: subtitles_containerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitles_containerInclude<ExtArgs> | null
    /**
     * Filter which subtitles_container to delete.
     */
    where: subtitles_containerWhereUniqueInput
  }


  /**
   * subtitles_container deleteMany
   */
  export type subtitles_containerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subtitles_containers to delete
     */
    where?: subtitles_containerWhereInput
  }


  /**
   * subtitles_container.subtitles
   */
  export type subtitles_container$subtitlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitle
     */
    select?: subtitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitleInclude<ExtArgs> | null
    where?: subtitleWhereInput
    orderBy?: subtitleOrderByWithRelationInput | subtitleOrderByWithRelationInput[]
    cursor?: subtitleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubtitleScalarFieldEnum | SubtitleScalarFieldEnum[]
  }


  /**
   * subtitles_container without action
   */
  export type subtitles_containerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitles_container
     */
    select?: subtitles_containerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitles_containerInclude<ExtArgs> | null
  }



  /**
   * Model subtitle
   */

  export type AggregateSubtitle = {
    _count: SubtitleCountAggregateOutputType | null
    _avg: SubtitleAvgAggregateOutputType | null
    _sum: SubtitleSumAggregateOutputType | null
    _min: SubtitleMinAggregateOutputType | null
    _max: SubtitleMaxAggregateOutputType | null
  }

  export type SubtitleAvgAggregateOutputType = {
    id: number | null
    container: number | null
    timestamp: number | null
  }

  export type SubtitleSumAggregateOutputType = {
    id: bigint | null
    container: bigint | null
    timestamp: bigint | null
  }

  export type SubtitleMinAggregateOutputType = {
    id: bigint | null
    container: bigint | null
    timestamp: bigint | null
    content: string | null
  }

  export type SubtitleMaxAggregateOutputType = {
    id: bigint | null
    container: bigint | null
    timestamp: bigint | null
    content: string | null
  }

  export type SubtitleCountAggregateOutputType = {
    id: number
    container: number
    timestamp: number
    content: number
    _all: number
  }


  export type SubtitleAvgAggregateInputType = {
    id?: true
    container?: true
    timestamp?: true
  }

  export type SubtitleSumAggregateInputType = {
    id?: true
    container?: true
    timestamp?: true
  }

  export type SubtitleMinAggregateInputType = {
    id?: true
    container?: true
    timestamp?: true
    content?: true
  }

  export type SubtitleMaxAggregateInputType = {
    id?: true
    container?: true
    timestamp?: true
    content?: true
  }

  export type SubtitleCountAggregateInputType = {
    id?: true
    container?: true
    timestamp?: true
    content?: true
    _all?: true
  }

  export type SubtitleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subtitle to aggregate.
     */
    where?: subtitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtitles to fetch.
     */
    orderBy?: subtitleOrderByWithRelationInput | subtitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subtitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subtitles
    **/
    _count?: true | SubtitleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubtitleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubtitleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubtitleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubtitleMaxAggregateInputType
  }

  export type GetSubtitleAggregateType<T extends SubtitleAggregateArgs> = {
        [P in keyof T & keyof AggregateSubtitle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubtitle[P]>
      : GetScalarType<T[P], AggregateSubtitle[P]>
  }




  export type subtitleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subtitleWhereInput
    orderBy?: subtitleOrderByWithAggregationInput | subtitleOrderByWithAggregationInput[]
    by: SubtitleScalarFieldEnum[] | SubtitleScalarFieldEnum
    having?: subtitleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubtitleCountAggregateInputType | true
    _avg?: SubtitleAvgAggregateInputType
    _sum?: SubtitleSumAggregateInputType
    _min?: SubtitleMinAggregateInputType
    _max?: SubtitleMaxAggregateInputType
  }

  export type SubtitleGroupByOutputType = {
    id: bigint
    container: bigint
    timestamp: bigint
    content: string
    _count: SubtitleCountAggregateOutputType | null
    _avg: SubtitleAvgAggregateOutputType | null
    _sum: SubtitleSumAggregateOutputType | null
    _min: SubtitleMinAggregateOutputType | null
    _max: SubtitleMaxAggregateOutputType | null
  }

  type GetSubtitleGroupByPayload<T extends subtitleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubtitleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubtitleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubtitleGroupByOutputType[P]>
            : GetScalarType<T[P], SubtitleGroupByOutputType[P]>
        }
      >
    >


  export type subtitleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    container?: boolean
    timestamp?: boolean
    content?: boolean
    subtitles_container?: boolean | subtitles_containerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtitle"]>

  export type subtitleSelectScalar = {
    id?: boolean
    container?: boolean
    timestamp?: boolean
    content?: boolean
  }

  export type subtitleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtitles_container?: boolean | subtitles_containerDefaultArgs<ExtArgs>
  }


  export type $subtitlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subtitle"
    objects: {
      subtitles_container: Prisma.$subtitles_containerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      container: bigint
      timestamp: bigint
      content: string
    }, ExtArgs["result"]["subtitle"]>
    composites: {}
  }


  type subtitleGetPayload<S extends boolean | null | undefined | subtitleDefaultArgs> = $Result.GetResult<Prisma.$subtitlePayload, S>

  type subtitleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<subtitleFindManyArgs, 'select' | 'include'> & {
      select?: SubtitleCountAggregateInputType | true
    }

  export interface subtitleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subtitle'], meta: { name: 'subtitle' } }
    /**
     * Find zero or one Subtitle that matches the filter.
     * @param {subtitleFindUniqueArgs} args - Arguments to find a Subtitle
     * @example
     * // Get one Subtitle
     * const subtitle = await prisma.subtitle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends subtitleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, subtitleFindUniqueArgs<ExtArgs>>
    ): Prisma__subtitleClient<$Result.GetResult<Prisma.$subtitlePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Subtitle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {subtitleFindUniqueOrThrowArgs} args - Arguments to find a Subtitle
     * @example
     * // Get one Subtitle
     * const subtitle = await prisma.subtitle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends subtitleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subtitleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__subtitleClient<$Result.GetResult<Prisma.$subtitlePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Subtitle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtitleFindFirstArgs} args - Arguments to find a Subtitle
     * @example
     * // Get one Subtitle
     * const subtitle = await prisma.subtitle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends subtitleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, subtitleFindFirstArgs<ExtArgs>>
    ): Prisma__subtitleClient<$Result.GetResult<Prisma.$subtitlePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Subtitle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtitleFindFirstOrThrowArgs} args - Arguments to find a Subtitle
     * @example
     * // Get one Subtitle
     * const subtitle = await prisma.subtitle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends subtitleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subtitleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__subtitleClient<$Result.GetResult<Prisma.$subtitlePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Subtitles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtitleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subtitles
     * const subtitles = await prisma.subtitle.findMany()
     * 
     * // Get first 10 Subtitles
     * const subtitles = await prisma.subtitle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subtitleWithIdOnly = await prisma.subtitle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends subtitleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subtitleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subtitlePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Subtitle.
     * @param {subtitleCreateArgs} args - Arguments to create a Subtitle.
     * @example
     * // Create one Subtitle
     * const Subtitle = await prisma.subtitle.create({
     *   data: {
     *     // ... data to create a Subtitle
     *   }
     * })
     * 
    **/
    create<T extends subtitleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, subtitleCreateArgs<ExtArgs>>
    ): Prisma__subtitleClient<$Result.GetResult<Prisma.$subtitlePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Subtitles.
     *     @param {subtitleCreateManyArgs} args - Arguments to create many Subtitles.
     *     @example
     *     // Create many Subtitles
     *     const subtitle = await prisma.subtitle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends subtitleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subtitleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subtitle.
     * @param {subtitleDeleteArgs} args - Arguments to delete one Subtitle.
     * @example
     * // Delete one Subtitle
     * const Subtitle = await prisma.subtitle.delete({
     *   where: {
     *     // ... filter to delete one Subtitle
     *   }
     * })
     * 
    **/
    delete<T extends subtitleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, subtitleDeleteArgs<ExtArgs>>
    ): Prisma__subtitleClient<$Result.GetResult<Prisma.$subtitlePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Subtitle.
     * @param {subtitleUpdateArgs} args - Arguments to update one Subtitle.
     * @example
     * // Update one Subtitle
     * const subtitle = await prisma.subtitle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends subtitleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, subtitleUpdateArgs<ExtArgs>>
    ): Prisma__subtitleClient<$Result.GetResult<Prisma.$subtitlePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Subtitles.
     * @param {subtitleDeleteManyArgs} args - Arguments to filter Subtitles to delete.
     * @example
     * // Delete a few Subtitles
     * const { count } = await prisma.subtitle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends subtitleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subtitleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subtitles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtitleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subtitles
     * const subtitle = await prisma.subtitle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends subtitleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, subtitleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subtitle.
     * @param {subtitleUpsertArgs} args - Arguments to update or create a Subtitle.
     * @example
     * // Update or create a Subtitle
     * const subtitle = await prisma.subtitle.upsert({
     *   create: {
     *     // ... data to create a Subtitle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subtitle we want to update
     *   }
     * })
    **/
    upsert<T extends subtitleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, subtitleUpsertArgs<ExtArgs>>
    ): Prisma__subtitleClient<$Result.GetResult<Prisma.$subtitlePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Subtitles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtitleCountArgs} args - Arguments to filter Subtitles to count.
     * @example
     * // Count the number of Subtitles
     * const count = await prisma.subtitle.count({
     *   where: {
     *     // ... the filter for the Subtitles we want to count
     *   }
     * })
    **/
    count<T extends subtitleCountArgs>(
      args?: Subset<T, subtitleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubtitleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subtitle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtitleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubtitleAggregateArgs>(args: Subset<T, SubtitleAggregateArgs>): Prisma.PrismaPromise<GetSubtitleAggregateType<T>>

    /**
     * Group by Subtitle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subtitleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends subtitleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subtitleGroupByArgs['orderBy'] }
        : { orderBy?: subtitleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subtitleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubtitleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subtitle model
   */
  readonly fields: subtitleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subtitle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subtitleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    subtitles_container<T extends subtitles_containerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, subtitles_containerDefaultArgs<ExtArgs>>): Prisma__subtitles_containerClient<$Result.GetResult<Prisma.$subtitles_containerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the subtitle model
   */ 
  interface subtitleFieldRefs {
    readonly id: FieldRef<"subtitle", 'BigInt'>
    readonly container: FieldRef<"subtitle", 'BigInt'>
    readonly timestamp: FieldRef<"subtitle", 'BigInt'>
    readonly content: FieldRef<"subtitle", 'String'>
  }
    

  // Custom InputTypes

  /**
   * subtitle findUnique
   */
  export type subtitleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitle
     */
    select?: subtitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitleInclude<ExtArgs> | null
    /**
     * Filter, which subtitle to fetch.
     */
    where: subtitleWhereUniqueInput
  }


  /**
   * subtitle findUniqueOrThrow
   */
  export type subtitleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitle
     */
    select?: subtitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitleInclude<ExtArgs> | null
    /**
     * Filter, which subtitle to fetch.
     */
    where: subtitleWhereUniqueInput
  }


  /**
   * subtitle findFirst
   */
  export type subtitleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitle
     */
    select?: subtitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitleInclude<ExtArgs> | null
    /**
     * Filter, which subtitle to fetch.
     */
    where?: subtitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtitles to fetch.
     */
    orderBy?: subtitleOrderByWithRelationInput | subtitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subtitles.
     */
    cursor?: subtitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subtitles.
     */
    distinct?: SubtitleScalarFieldEnum | SubtitleScalarFieldEnum[]
  }


  /**
   * subtitle findFirstOrThrow
   */
  export type subtitleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitle
     */
    select?: subtitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitleInclude<ExtArgs> | null
    /**
     * Filter, which subtitle to fetch.
     */
    where?: subtitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtitles to fetch.
     */
    orderBy?: subtitleOrderByWithRelationInput | subtitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subtitles.
     */
    cursor?: subtitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subtitles.
     */
    distinct?: SubtitleScalarFieldEnum | SubtitleScalarFieldEnum[]
  }


  /**
   * subtitle findMany
   */
  export type subtitleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitle
     */
    select?: subtitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitleInclude<ExtArgs> | null
    /**
     * Filter, which subtitles to fetch.
     */
    where?: subtitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subtitles to fetch.
     */
    orderBy?: subtitleOrderByWithRelationInput | subtitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subtitles.
     */
    cursor?: subtitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subtitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subtitles.
     */
    skip?: number
    distinct?: SubtitleScalarFieldEnum | SubtitleScalarFieldEnum[]
  }


  /**
   * subtitle create
   */
  export type subtitleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitle
     */
    select?: subtitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitleInclude<ExtArgs> | null
    /**
     * The data needed to create a subtitle.
     */
    data: XOR<subtitleCreateInput, subtitleUncheckedCreateInput>
  }


  /**
   * subtitle createMany
   */
  export type subtitleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subtitles.
     */
    data: subtitleCreateManyInput | subtitleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * subtitle update
   */
  export type subtitleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitle
     */
    select?: subtitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitleInclude<ExtArgs> | null
    /**
     * The data needed to update a subtitle.
     */
    data: XOR<subtitleUpdateInput, subtitleUncheckedUpdateInput>
    /**
     * Choose, which subtitle to update.
     */
    where: subtitleWhereUniqueInput
  }


  /**
   * subtitle updateMany
   */
  export type subtitleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subtitles.
     */
    data: XOR<subtitleUpdateManyMutationInput, subtitleUncheckedUpdateManyInput>
    /**
     * Filter which subtitles to update
     */
    where?: subtitleWhereInput
  }


  /**
   * subtitle upsert
   */
  export type subtitleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitle
     */
    select?: subtitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitleInclude<ExtArgs> | null
    /**
     * The filter to search for the subtitle to update in case it exists.
     */
    where: subtitleWhereUniqueInput
    /**
     * In case the subtitle found by the `where` argument doesn't exist, create a new subtitle with this data.
     */
    create: XOR<subtitleCreateInput, subtitleUncheckedCreateInput>
    /**
     * In case the subtitle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subtitleUpdateInput, subtitleUncheckedUpdateInput>
  }


  /**
   * subtitle delete
   */
  export type subtitleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitle
     */
    select?: subtitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitleInclude<ExtArgs> | null
    /**
     * Filter which subtitle to delete.
     */
    where: subtitleWhereUniqueInput
  }


  /**
   * subtitle deleteMany
   */
  export type subtitleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subtitles to delete
     */
    where?: subtitleWhereInput
  }


  /**
   * subtitle without action
   */
  export type subtitleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subtitle
     */
    select?: subtitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subtitleInclude<ExtArgs> | null
  }



  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
    parent: number | null
    child: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: bigint | null
    parent: bigint | null
    child: bigint | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: bigint | null
    parent: bigint | null
    child: bigint | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: bigint | null
    parent: bigint | null
    child: bigint | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    parent: number
    child: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
    parent?: true
    child?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
    parent?: true
    child?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    parent?: true
    child?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    parent?: true
    child?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    parent?: true
    child?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: bigint
    parent: bigint
    child: bigint
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent?: boolean
    child?: boolean
    name?: boolean | categories$nameArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    parent?: boolean
    child?: boolean
  }

  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name?: boolean | categories$nameArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      name: Prisma.$cat_namesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      parent: bigint
      child: bigint
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }


  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categoriesFindManyArgs, 'select' | 'include'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoriesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>
    ): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Categories that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoriesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>
    ): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends categoriesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
    **/
    create<T extends categoriesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>
    ): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const categories = await prisma.categories.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categoriesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
    **/
    delete<T extends categoriesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>
    ): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categoriesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>
    ): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoriesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categoriesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
    **/
    upsert<T extends categoriesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>
    ): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    name<T extends categories$nameArgs<ExtArgs> = {}>(args?: Subset<T, categories$nameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cat_namesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the categories model
   */ 
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'BigInt'>
    readonly parent: FieldRef<"categories", 'BigInt'>
    readonly child: FieldRef<"categories", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }


  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }


  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }


  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }


  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
  }


  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }


  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }


  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
  }


  /**
   * categories.name
   */
  export type categories$nameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_names
     */
    select?: cat_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_namesInclude<ExtArgs> | null
    where?: cat_namesWhereInput
    orderBy?: cat_namesOrderByWithRelationInput | cat_namesOrderByWithRelationInput[]
    cursor?: cat_namesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cat_namesScalarFieldEnum | Cat_namesScalarFieldEnum[]
  }


  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriesInclude<ExtArgs> | null
  }



  /**
   * Model cat_names
   */

  export type AggregateCat_names = {
    _count: Cat_namesCountAggregateOutputType | null
    _avg: Cat_namesAvgAggregateOutputType | null
    _sum: Cat_namesSumAggregateOutputType | null
    _min: Cat_namesMinAggregateOutputType | null
    _max: Cat_namesMaxAggregateOutputType | null
  }

  export type Cat_namesAvgAggregateOutputType = {
    id: number | null
    owner: number | null
  }

  export type Cat_namesSumAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type Cat_namesMinAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type Cat_namesMaxAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type Cat_namesCountAggregateOutputType = {
    id: number
    name: number
    owner: number
    _all: number
  }


  export type Cat_namesAvgAggregateInputType = {
    id?: true
    owner?: true
  }

  export type Cat_namesSumAggregateInputType = {
    id?: true
    owner?: true
  }

  export type Cat_namesMinAggregateInputType = {
    id?: true
    owner?: true
  }

  export type Cat_namesMaxAggregateInputType = {
    id?: true
    owner?: true
  }

  export type Cat_namesCountAggregateInputType = {
    id?: true
    name?: true
    owner?: true
    _all?: true
  }

  export type Cat_namesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cat_names to aggregate.
     */
    where?: cat_namesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cat_names to fetch.
     */
    orderBy?: cat_namesOrderByWithRelationInput | cat_namesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cat_namesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cat_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cat_names.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cat_names
    **/
    _count?: true | Cat_namesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cat_namesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cat_namesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cat_namesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cat_namesMaxAggregateInputType
  }

  export type GetCat_namesAggregateType<T extends Cat_namesAggregateArgs> = {
        [P in keyof T & keyof AggregateCat_names]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCat_names[P]>
      : GetScalarType<T[P], AggregateCat_names[P]>
  }




  export type cat_namesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cat_namesWhereInput
    orderBy?: cat_namesOrderByWithAggregationInput | cat_namesOrderByWithAggregationInput[]
    by: Cat_namesScalarFieldEnum[] | Cat_namesScalarFieldEnum
    having?: cat_namesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cat_namesCountAggregateInputType | true
    _avg?: Cat_namesAvgAggregateInputType
    _sum?: Cat_namesSumAggregateInputType
    _min?: Cat_namesMinAggregateInputType
    _max?: Cat_namesMaxAggregateInputType
  }

  export type Cat_namesGroupByOutputType = {
    id: bigint
    name: string[]
    owner: bigint
    _count: Cat_namesCountAggregateOutputType | null
    _avg: Cat_namesAvgAggregateOutputType | null
    _sum: Cat_namesSumAggregateOutputType | null
    _min: Cat_namesMinAggregateOutputType | null
    _max: Cat_namesMaxAggregateOutputType | null
  }

  type GetCat_namesGroupByPayload<T extends cat_namesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cat_namesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cat_namesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cat_namesGroupByOutputType[P]>
            : GetScalarType<T[P], Cat_namesGroupByOutputType[P]>
        }
      >
    >


  export type cat_namesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    owner?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cat_names"]>

  export type cat_namesSelectScalar = {
    id?: boolean
    name?: boolean
    owner?: boolean
  }

  export type cat_namesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }


  export type $cat_namesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cat_names"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string[]
      owner: bigint
    }, ExtArgs["result"]["cat_names"]>
    composites: {}
  }


  type cat_namesGetPayload<S extends boolean | null | undefined | cat_namesDefaultArgs> = $Result.GetResult<Prisma.$cat_namesPayload, S>

  type cat_namesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cat_namesFindManyArgs, 'select' | 'include'> & {
      select?: Cat_namesCountAggregateInputType | true
    }

  export interface cat_namesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cat_names'], meta: { name: 'cat_names' } }
    /**
     * Find zero or one Cat_names that matches the filter.
     * @param {cat_namesFindUniqueArgs} args - Arguments to find a Cat_names
     * @example
     * // Get one Cat_names
     * const cat_names = await prisma.cat_names.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cat_namesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cat_namesFindUniqueArgs<ExtArgs>>
    ): Prisma__cat_namesClient<$Result.GetResult<Prisma.$cat_namesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cat_names that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cat_namesFindUniqueOrThrowArgs} args - Arguments to find a Cat_names
     * @example
     * // Get one Cat_names
     * const cat_names = await prisma.cat_names.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cat_namesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cat_namesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cat_namesClient<$Result.GetResult<Prisma.$cat_namesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cat_names that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_namesFindFirstArgs} args - Arguments to find a Cat_names
     * @example
     * // Get one Cat_names
     * const cat_names = await prisma.cat_names.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cat_namesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cat_namesFindFirstArgs<ExtArgs>>
    ): Prisma__cat_namesClient<$Result.GetResult<Prisma.$cat_namesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cat_names that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_namesFindFirstOrThrowArgs} args - Arguments to find a Cat_names
     * @example
     * // Get one Cat_names
     * const cat_names = await prisma.cat_names.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cat_namesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cat_namesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cat_namesClient<$Result.GetResult<Prisma.$cat_namesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cat_names that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_namesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cat_names
     * const cat_names = await prisma.cat_names.findMany()
     * 
     * // Get first 10 Cat_names
     * const cat_names = await prisma.cat_names.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cat_namesWithIdOnly = await prisma.cat_names.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends cat_namesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cat_namesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cat_namesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cat_names.
     * @param {cat_namesCreateArgs} args - Arguments to create a Cat_names.
     * @example
     * // Create one Cat_names
     * const Cat_names = await prisma.cat_names.create({
     *   data: {
     *     // ... data to create a Cat_names
     *   }
     * })
     * 
    **/
    create<T extends cat_namesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cat_namesCreateArgs<ExtArgs>>
    ): Prisma__cat_namesClient<$Result.GetResult<Prisma.$cat_namesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cat_names.
     *     @param {cat_namesCreateManyArgs} args - Arguments to create many Cat_names.
     *     @example
     *     // Create many Cat_names
     *     const cat_names = await prisma.cat_names.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cat_namesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cat_namesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cat_names.
     * @param {cat_namesDeleteArgs} args - Arguments to delete one Cat_names.
     * @example
     * // Delete one Cat_names
     * const Cat_names = await prisma.cat_names.delete({
     *   where: {
     *     // ... filter to delete one Cat_names
     *   }
     * })
     * 
    **/
    delete<T extends cat_namesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cat_namesDeleteArgs<ExtArgs>>
    ): Prisma__cat_namesClient<$Result.GetResult<Prisma.$cat_namesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cat_names.
     * @param {cat_namesUpdateArgs} args - Arguments to update one Cat_names.
     * @example
     * // Update one Cat_names
     * const cat_names = await prisma.cat_names.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cat_namesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cat_namesUpdateArgs<ExtArgs>>
    ): Prisma__cat_namesClient<$Result.GetResult<Prisma.$cat_namesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cat_names.
     * @param {cat_namesDeleteManyArgs} args - Arguments to filter Cat_names to delete.
     * @example
     * // Delete a few Cat_names
     * const { count } = await prisma.cat_names.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cat_namesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cat_namesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cat_names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_namesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cat_names
     * const cat_names = await prisma.cat_names.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cat_namesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cat_namesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cat_names.
     * @param {cat_namesUpsertArgs} args - Arguments to update or create a Cat_names.
     * @example
     * // Update or create a Cat_names
     * const cat_names = await prisma.cat_names.upsert({
     *   create: {
     *     // ... data to create a Cat_names
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cat_names we want to update
     *   }
     * })
    **/
    upsert<T extends cat_namesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cat_namesUpsertArgs<ExtArgs>>
    ): Prisma__cat_namesClient<$Result.GetResult<Prisma.$cat_namesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cat_names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_namesCountArgs} args - Arguments to filter Cat_names to count.
     * @example
     * // Count the number of Cat_names
     * const count = await prisma.cat_names.count({
     *   where: {
     *     // ... the filter for the Cat_names we want to count
     *   }
     * })
    **/
    count<T extends cat_namesCountArgs>(
      args?: Subset<T, cat_namesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cat_namesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cat_names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cat_namesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cat_namesAggregateArgs>(args: Subset<T, Cat_namesAggregateArgs>): Prisma.PrismaPromise<GetCat_namesAggregateType<T>>

    /**
     * Group by Cat_names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_namesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cat_namesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cat_namesGroupByArgs['orderBy'] }
        : { orderBy?: cat_namesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cat_namesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCat_namesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cat_names model
   */
  readonly fields: cat_namesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cat_names.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cat_namesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the cat_names model
   */ 
  interface cat_namesFieldRefs {
    readonly id: FieldRef<"cat_names", 'BigInt'>
    readonly name: FieldRef<"cat_names", 'String[]'>
    readonly owner: FieldRef<"cat_names", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * cat_names findUnique
   */
  export type cat_namesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_names
     */
    select?: cat_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_namesInclude<ExtArgs> | null
    /**
     * Filter, which cat_names to fetch.
     */
    where: cat_namesWhereUniqueInput
  }


  /**
   * cat_names findUniqueOrThrow
   */
  export type cat_namesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_names
     */
    select?: cat_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_namesInclude<ExtArgs> | null
    /**
     * Filter, which cat_names to fetch.
     */
    where: cat_namesWhereUniqueInput
  }


  /**
   * cat_names findFirst
   */
  export type cat_namesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_names
     */
    select?: cat_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_namesInclude<ExtArgs> | null
    /**
     * Filter, which cat_names to fetch.
     */
    where?: cat_namesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cat_names to fetch.
     */
    orderBy?: cat_namesOrderByWithRelationInput | cat_namesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cat_names.
     */
    cursor?: cat_namesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cat_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cat_names.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cat_names.
     */
    distinct?: Cat_namesScalarFieldEnum | Cat_namesScalarFieldEnum[]
  }


  /**
   * cat_names findFirstOrThrow
   */
  export type cat_namesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_names
     */
    select?: cat_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_namesInclude<ExtArgs> | null
    /**
     * Filter, which cat_names to fetch.
     */
    where?: cat_namesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cat_names to fetch.
     */
    orderBy?: cat_namesOrderByWithRelationInput | cat_namesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cat_names.
     */
    cursor?: cat_namesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cat_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cat_names.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cat_names.
     */
    distinct?: Cat_namesScalarFieldEnum | Cat_namesScalarFieldEnum[]
  }


  /**
   * cat_names findMany
   */
  export type cat_namesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_names
     */
    select?: cat_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_namesInclude<ExtArgs> | null
    /**
     * Filter, which cat_names to fetch.
     */
    where?: cat_namesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cat_names to fetch.
     */
    orderBy?: cat_namesOrderByWithRelationInput | cat_namesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cat_names.
     */
    cursor?: cat_namesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cat_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cat_names.
     */
    skip?: number
    distinct?: Cat_namesScalarFieldEnum | Cat_namesScalarFieldEnum[]
  }


  /**
   * cat_names create
   */
  export type cat_namesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_names
     */
    select?: cat_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_namesInclude<ExtArgs> | null
    /**
     * The data needed to create a cat_names.
     */
    data: XOR<cat_namesCreateInput, cat_namesUncheckedCreateInput>
  }


  /**
   * cat_names createMany
   */
  export type cat_namesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cat_names.
     */
    data: cat_namesCreateManyInput | cat_namesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cat_names update
   */
  export type cat_namesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_names
     */
    select?: cat_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_namesInclude<ExtArgs> | null
    /**
     * The data needed to update a cat_names.
     */
    data: XOR<cat_namesUpdateInput, cat_namesUncheckedUpdateInput>
    /**
     * Choose, which cat_names to update.
     */
    where: cat_namesWhereUniqueInput
  }


  /**
   * cat_names updateMany
   */
  export type cat_namesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cat_names.
     */
    data: XOR<cat_namesUpdateManyMutationInput, cat_namesUncheckedUpdateManyInput>
    /**
     * Filter which cat_names to update
     */
    where?: cat_namesWhereInput
  }


  /**
   * cat_names upsert
   */
  export type cat_namesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_names
     */
    select?: cat_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_namesInclude<ExtArgs> | null
    /**
     * The filter to search for the cat_names to update in case it exists.
     */
    where: cat_namesWhereUniqueInput
    /**
     * In case the cat_names found by the `where` argument doesn't exist, create a new cat_names with this data.
     */
    create: XOR<cat_namesCreateInput, cat_namesUncheckedCreateInput>
    /**
     * In case the cat_names was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cat_namesUpdateInput, cat_namesUncheckedUpdateInput>
  }


  /**
   * cat_names delete
   */
  export type cat_namesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_names
     */
    select?: cat_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_namesInclude<ExtArgs> | null
    /**
     * Filter which cat_names to delete.
     */
    where: cat_namesWhereUniqueInput
  }


  /**
   * cat_names deleteMany
   */
  export type cat_namesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cat_names to delete
     */
    where?: cat_namesWhereInput
  }


  /**
   * cat_names without action
   */
  export type cat_namesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cat_names
     */
    select?: cat_namesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_namesInclude<ExtArgs> | null
  }



  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_entity?: boolean | users$video_entityArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video_entity?: boolean | users$video_entityArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      video_entity: Prisma.$video_entityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    video_entity<T extends users$video_entityArgs<ExtArgs> = {}>(args?: Subset<T, users$video_entityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$video_entityPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.video_entity
   */
  export type users$video_entityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_entity
     */
    select?: video_entitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: video_entityInclude<ExtArgs> | null
    where?: video_entityWhereInput
    orderBy?: video_entityOrderByWithRelationInput | video_entityOrderByWithRelationInput[]
    cursor?: video_entityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Video_entityScalarFieldEnum | Video_entityScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Video_entityScalarFieldEnum: {
    id: 'id',
    type: 'type',
    uploader: 'uploader'
  };

  export type Video_entityScalarFieldEnum = (typeof Video_entityScalarFieldEnum)[keyof typeof Video_entityScalarFieldEnum]


  export const StatusesScalarFieldEnum: {
    id: 'id',
    video: 'video',
    current: 'current'
  };

  export type StatusesScalarFieldEnum = (typeof StatusesScalarFieldEnum)[keyof typeof StatusesScalarFieldEnum]


  export const Video_metadataScalarFieldEnum: {
    id: 'id',
    video: 'video',
    length_ms: 'length_ms',
    file_size: 'file_size',
    uploader: 'uploader'
  };

  export type Video_metadataScalarFieldEnum = (typeof Video_metadataScalarFieldEnum)[keyof typeof Video_metadataScalarFieldEnum]


  export const Video_titlesScalarFieldEnum: {
    id: 'id',
    video: 'video',
    content: 'content'
  };

  export type Video_titlesScalarFieldEnum = (typeof Video_titlesScalarFieldEnum)[keyof typeof Video_titlesScalarFieldEnum]


  export const Video_descriptionScalarFieldEnum: {
    id: 'id',
    video: 'video',
    content: 'content'
  };

  export type Video_descriptionScalarFieldEnum = (typeof Video_descriptionScalarFieldEnum)[keyof typeof Video_descriptionScalarFieldEnum]


  export const ViewsScalarFieldEnum: {
    id: 'id',
    owner: 'owner'
  };

  export type ViewsScalarFieldEnum = (typeof ViewsScalarFieldEnum)[keyof typeof ViewsScalarFieldEnum]


  export const Subtitles_containerScalarFieldEnum: {
    id: 'id',
    lang: 'lang'
  };

  export type Subtitles_containerScalarFieldEnum = (typeof Subtitles_containerScalarFieldEnum)[keyof typeof Subtitles_containerScalarFieldEnum]


  export const SubtitleScalarFieldEnum: {
    id: 'id',
    container: 'container',
    timestamp: 'timestamp',
    content: 'content'
  };

  export type SubtitleScalarFieldEnum = (typeof SubtitleScalarFieldEnum)[keyof typeof SubtitleScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    parent: 'parent',
    child: 'child'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const Cat_namesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    owner: 'owner'
  };

  export type Cat_namesScalarFieldEnum = (typeof Cat_namesScalarFieldEnum)[keyof typeof Cat_namesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'video_type'
   */
  export type Enumvideo_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'video_type'>
    


  /**
   * Reference to a field of type 'video_type[]'
   */
  export type ListEnumvideo_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'video_type[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'video_status'
   */
  export type Enumvideo_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'video_status'>
    


  /**
   * Reference to a field of type 'video_status[]'
   */
  export type ListEnumvideo_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'video_status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type video_entityWhereInput = {
    AND?: video_entityWhereInput | video_entityWhereInput[]
    OR?: video_entityWhereInput[]
    NOT?: video_entityWhereInput | video_entityWhereInput[]
    id?: BigIntFilter<"video_entity"> | bigint | number
    type?: Enumvideo_typeFilter<"video_entity"> | $Enums.video_type
    uploader?: UuidFilter<"video_entity"> | string
    video_metadata?: XOR<Video_metadataNullableRelationFilter, video_metadataWhereInput> | null
    views?: ViewsListRelationFilter
    statuses?: StatusesListRelationFilter
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type video_entityOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    uploader?: SortOrder
    video_metadata?: video_metadataOrderByWithRelationInput
    views?: viewsOrderByRelationAggregateInput
    statuses?: statusesOrderByRelationAggregateInput
    user?: usersOrderByWithRelationInput
  }

  export type video_entityWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: video_entityWhereInput | video_entityWhereInput[]
    OR?: video_entityWhereInput[]
    NOT?: video_entityWhereInput | video_entityWhereInput[]
    type?: Enumvideo_typeFilter<"video_entity"> | $Enums.video_type
    uploader?: UuidFilter<"video_entity"> | string
    video_metadata?: XOR<Video_metadataNullableRelationFilter, video_metadataWhereInput> | null
    views?: ViewsListRelationFilter
    statuses?: StatusesListRelationFilter
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }, "id">

  export type video_entityOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    uploader?: SortOrder
    _count?: video_entityCountOrderByAggregateInput
    _avg?: video_entityAvgOrderByAggregateInput
    _max?: video_entityMaxOrderByAggregateInput
    _min?: video_entityMinOrderByAggregateInput
    _sum?: video_entitySumOrderByAggregateInput
  }

  export type video_entityScalarWhereWithAggregatesInput = {
    AND?: video_entityScalarWhereWithAggregatesInput | video_entityScalarWhereWithAggregatesInput[]
    OR?: video_entityScalarWhereWithAggregatesInput[]
    NOT?: video_entityScalarWhereWithAggregatesInput | video_entityScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"video_entity"> | bigint | number
    type?: Enumvideo_typeWithAggregatesFilter<"video_entity"> | $Enums.video_type
    uploader?: UuidWithAggregatesFilter<"video_entity"> | string
  }

  export type statusesWhereInput = {
    AND?: statusesWhereInput | statusesWhereInput[]
    OR?: statusesWhereInput[]
    NOT?: statusesWhereInput | statusesWhereInput[]
    id?: BigIntFilter<"statuses"> | bigint | number
    video?: BigIntFilter<"statuses"> | bigint | number
    current?: Enumvideo_statusFilter<"statuses"> | $Enums.video_status
    video_entity?: XOR<Video_entityRelationFilter, video_entityWhereInput>
  }

  export type statusesOrderByWithRelationInput = {
    id?: SortOrder
    video?: SortOrder
    current?: SortOrder
    video_entity?: video_entityOrderByWithRelationInput
  }

  export type statusesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: statusesWhereInput | statusesWhereInput[]
    OR?: statusesWhereInput[]
    NOT?: statusesWhereInput | statusesWhereInput[]
    video?: BigIntFilter<"statuses"> | bigint | number
    current?: Enumvideo_statusFilter<"statuses"> | $Enums.video_status
    video_entity?: XOR<Video_entityRelationFilter, video_entityWhereInput>
  }, "id">

  export type statusesOrderByWithAggregationInput = {
    id?: SortOrder
    video?: SortOrder
    current?: SortOrder
    _count?: statusesCountOrderByAggregateInput
    _avg?: statusesAvgOrderByAggregateInput
    _max?: statusesMaxOrderByAggregateInput
    _min?: statusesMinOrderByAggregateInput
    _sum?: statusesSumOrderByAggregateInput
  }

  export type statusesScalarWhereWithAggregatesInput = {
    AND?: statusesScalarWhereWithAggregatesInput | statusesScalarWhereWithAggregatesInput[]
    OR?: statusesScalarWhereWithAggregatesInput[]
    NOT?: statusesScalarWhereWithAggregatesInput | statusesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"statuses"> | bigint | number
    video?: BigIntWithAggregatesFilter<"statuses"> | bigint | number
    current?: Enumvideo_statusWithAggregatesFilter<"statuses"> | $Enums.video_status
  }

  export type video_metadataWhereInput = {
    AND?: video_metadataWhereInput | video_metadataWhereInput[]
    OR?: video_metadataWhereInput[]
    NOT?: video_metadataWhereInput | video_metadataWhereInput[]
    id?: BigIntFilter<"video_metadata"> | bigint | number
    video?: BigIntFilter<"video_metadata"> | bigint | number
    length_ms?: BigIntFilter<"video_metadata"> | bigint | number
    file_size?: BigIntFilter<"video_metadata"> | bigint | number
    uploader?: UuidFilter<"video_metadata"> | string
    video_entity?: XOR<Video_entityRelationFilter, video_entityWhereInput>
    title?: Video_titlesListRelationFilter
    description?: Video_descriptionListRelationFilter
  }

  export type video_metadataOrderByWithRelationInput = {
    id?: SortOrder
    video?: SortOrder
    length_ms?: SortOrder
    file_size?: SortOrder
    uploader?: SortOrder
    video_entity?: video_entityOrderByWithRelationInput
    title?: video_titlesOrderByRelationAggregateInput
    description?: video_descriptionOrderByRelationAggregateInput
  }

  export type video_metadataWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    video?: bigint | number
    AND?: video_metadataWhereInput | video_metadataWhereInput[]
    OR?: video_metadataWhereInput[]
    NOT?: video_metadataWhereInput | video_metadataWhereInput[]
    length_ms?: BigIntFilter<"video_metadata"> | bigint | number
    file_size?: BigIntFilter<"video_metadata"> | bigint | number
    uploader?: UuidFilter<"video_metadata"> | string
    video_entity?: XOR<Video_entityRelationFilter, video_entityWhereInput>
    title?: Video_titlesListRelationFilter
    description?: Video_descriptionListRelationFilter
  }, "id" | "video">

  export type video_metadataOrderByWithAggregationInput = {
    id?: SortOrder
    video?: SortOrder
    length_ms?: SortOrder
    file_size?: SortOrder
    uploader?: SortOrder
    _count?: video_metadataCountOrderByAggregateInput
    _avg?: video_metadataAvgOrderByAggregateInput
    _max?: video_metadataMaxOrderByAggregateInput
    _min?: video_metadataMinOrderByAggregateInput
    _sum?: video_metadataSumOrderByAggregateInput
  }

  export type video_metadataScalarWhereWithAggregatesInput = {
    AND?: video_metadataScalarWhereWithAggregatesInput | video_metadataScalarWhereWithAggregatesInput[]
    OR?: video_metadataScalarWhereWithAggregatesInput[]
    NOT?: video_metadataScalarWhereWithAggregatesInput | video_metadataScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"video_metadata"> | bigint | number
    video?: BigIntWithAggregatesFilter<"video_metadata"> | bigint | number
    length_ms?: BigIntWithAggregatesFilter<"video_metadata"> | bigint | number
    file_size?: BigIntWithAggregatesFilter<"video_metadata"> | bigint | number
    uploader?: UuidWithAggregatesFilter<"video_metadata"> | string
  }

  export type video_titlesWhereInput = {
    AND?: video_titlesWhereInput | video_titlesWhereInput[]
    OR?: video_titlesWhereInput[]
    NOT?: video_titlesWhereInput | video_titlesWhereInput[]
    id?: BigIntFilter<"video_titles"> | bigint | number
    video?: BigIntFilter<"video_titles"> | bigint | number
    content?: StringFilter<"video_titles"> | string
    video_metadata?: XOR<Video_metadataRelationFilter, video_metadataWhereInput>
  }

  export type video_titlesOrderByWithRelationInput = {
    id?: SortOrder
    video?: SortOrder
    content?: SortOrder
    video_metadata?: video_metadataOrderByWithRelationInput
  }

  export type video_titlesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: video_titlesWhereInput | video_titlesWhereInput[]
    OR?: video_titlesWhereInput[]
    NOT?: video_titlesWhereInput | video_titlesWhereInput[]
    video?: BigIntFilter<"video_titles"> | bigint | number
    content?: StringFilter<"video_titles"> | string
    video_metadata?: XOR<Video_metadataRelationFilter, video_metadataWhereInput>
  }, "id">

  export type video_titlesOrderByWithAggregationInput = {
    id?: SortOrder
    video?: SortOrder
    content?: SortOrder
    _count?: video_titlesCountOrderByAggregateInput
    _avg?: video_titlesAvgOrderByAggregateInput
    _max?: video_titlesMaxOrderByAggregateInput
    _min?: video_titlesMinOrderByAggregateInput
    _sum?: video_titlesSumOrderByAggregateInput
  }

  export type video_titlesScalarWhereWithAggregatesInput = {
    AND?: video_titlesScalarWhereWithAggregatesInput | video_titlesScalarWhereWithAggregatesInput[]
    OR?: video_titlesScalarWhereWithAggregatesInput[]
    NOT?: video_titlesScalarWhereWithAggregatesInput | video_titlesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"video_titles"> | bigint | number
    video?: BigIntWithAggregatesFilter<"video_titles"> | bigint | number
    content?: StringWithAggregatesFilter<"video_titles"> | string
  }

  export type video_descriptionWhereInput = {
    AND?: video_descriptionWhereInput | video_descriptionWhereInput[]
    OR?: video_descriptionWhereInput[]
    NOT?: video_descriptionWhereInput | video_descriptionWhereInput[]
    id?: BigIntFilter<"video_description"> | bigint | number
    video?: BigIntFilter<"video_description"> | bigint | number
    content?: StringFilter<"video_description"> | string
    video_metadata?: XOR<Video_metadataRelationFilter, video_metadataWhereInput>
  }

  export type video_descriptionOrderByWithRelationInput = {
    id?: SortOrder
    video?: SortOrder
    content?: SortOrder
    video_metadata?: video_metadataOrderByWithRelationInput
  }

  export type video_descriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: video_descriptionWhereInput | video_descriptionWhereInput[]
    OR?: video_descriptionWhereInput[]
    NOT?: video_descriptionWhereInput | video_descriptionWhereInput[]
    video?: BigIntFilter<"video_description"> | bigint | number
    content?: StringFilter<"video_description"> | string
    video_metadata?: XOR<Video_metadataRelationFilter, video_metadataWhereInput>
  }, "id">

  export type video_descriptionOrderByWithAggregationInput = {
    id?: SortOrder
    video?: SortOrder
    content?: SortOrder
    _count?: video_descriptionCountOrderByAggregateInput
    _avg?: video_descriptionAvgOrderByAggregateInput
    _max?: video_descriptionMaxOrderByAggregateInput
    _min?: video_descriptionMinOrderByAggregateInput
    _sum?: video_descriptionSumOrderByAggregateInput
  }

  export type video_descriptionScalarWhereWithAggregatesInput = {
    AND?: video_descriptionScalarWhereWithAggregatesInput | video_descriptionScalarWhereWithAggregatesInput[]
    OR?: video_descriptionScalarWhereWithAggregatesInput[]
    NOT?: video_descriptionScalarWhereWithAggregatesInput | video_descriptionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"video_description"> | bigint | number
    video?: BigIntWithAggregatesFilter<"video_description"> | bigint | number
    content?: StringWithAggregatesFilter<"video_description"> | string
  }

  export type viewsWhereInput = {
    AND?: viewsWhereInput | viewsWhereInput[]
    OR?: viewsWhereInput[]
    NOT?: viewsWhereInput | viewsWhereInput[]
    id?: BigIntFilter<"views"> | bigint | number
    owner?: BigIntFilter<"views"> | bigint | number
    video_entity?: XOR<Video_entityRelationFilter, video_entityWhereInput>
  }

  export type viewsOrderByWithRelationInput = {
    id?: SortOrder
    owner?: SortOrder
    video_entity?: video_entityOrderByWithRelationInput
  }

  export type viewsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    owner?: bigint | number
    AND?: viewsWhereInput | viewsWhereInput[]
    OR?: viewsWhereInput[]
    NOT?: viewsWhereInput | viewsWhereInput[]
    video_entity?: XOR<Video_entityRelationFilter, video_entityWhereInput>
  }, "id" | "owner">

  export type viewsOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    _count?: viewsCountOrderByAggregateInput
    _avg?: viewsAvgOrderByAggregateInput
    _max?: viewsMaxOrderByAggregateInput
    _min?: viewsMinOrderByAggregateInput
    _sum?: viewsSumOrderByAggregateInput
  }

  export type viewsScalarWhereWithAggregatesInput = {
    AND?: viewsScalarWhereWithAggregatesInput | viewsScalarWhereWithAggregatesInput[]
    OR?: viewsScalarWhereWithAggregatesInput[]
    NOT?: viewsScalarWhereWithAggregatesInput | viewsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"views"> | bigint | number
    owner?: BigIntWithAggregatesFilter<"views"> | bigint | number
  }

  export type subtitles_containerWhereInput = {
    AND?: subtitles_containerWhereInput | subtitles_containerWhereInput[]
    OR?: subtitles_containerWhereInput[]
    NOT?: subtitles_containerWhereInput | subtitles_containerWhereInput[]
    id?: BigIntFilter<"subtitles_container"> | bigint | number
    lang?: StringFilter<"subtitles_container"> | string
    subtitles?: SubtitleListRelationFilter
  }

  export type subtitles_containerOrderByWithRelationInput = {
    id?: SortOrder
    lang?: SortOrder
    subtitles?: subtitleOrderByRelationAggregateInput
  }

  export type subtitles_containerWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: subtitles_containerWhereInput | subtitles_containerWhereInput[]
    OR?: subtitles_containerWhereInput[]
    NOT?: subtitles_containerWhereInput | subtitles_containerWhereInput[]
    lang?: StringFilter<"subtitles_container"> | string
    subtitles?: SubtitleListRelationFilter
  }, "id">

  export type subtitles_containerOrderByWithAggregationInput = {
    id?: SortOrder
    lang?: SortOrder
    _count?: subtitles_containerCountOrderByAggregateInput
    _avg?: subtitles_containerAvgOrderByAggregateInput
    _max?: subtitles_containerMaxOrderByAggregateInput
    _min?: subtitles_containerMinOrderByAggregateInput
    _sum?: subtitles_containerSumOrderByAggregateInput
  }

  export type subtitles_containerScalarWhereWithAggregatesInput = {
    AND?: subtitles_containerScalarWhereWithAggregatesInput | subtitles_containerScalarWhereWithAggregatesInput[]
    OR?: subtitles_containerScalarWhereWithAggregatesInput[]
    NOT?: subtitles_containerScalarWhereWithAggregatesInput | subtitles_containerScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"subtitles_container"> | bigint | number
    lang?: StringWithAggregatesFilter<"subtitles_container"> | string
  }

  export type subtitleWhereInput = {
    AND?: subtitleWhereInput | subtitleWhereInput[]
    OR?: subtitleWhereInput[]
    NOT?: subtitleWhereInput | subtitleWhereInput[]
    id?: BigIntFilter<"subtitle"> | bigint | number
    container?: BigIntFilter<"subtitle"> | bigint | number
    timestamp?: BigIntFilter<"subtitle"> | bigint | number
    content?: StringFilter<"subtitle"> | string
    subtitles_container?: XOR<Subtitles_containerRelationFilter, subtitles_containerWhereInput>
  }

  export type subtitleOrderByWithRelationInput = {
    id?: SortOrder
    container?: SortOrder
    timestamp?: SortOrder
    content?: SortOrder
    subtitles_container?: subtitles_containerOrderByWithRelationInput
  }

  export type subtitleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: subtitleWhereInput | subtitleWhereInput[]
    OR?: subtitleWhereInput[]
    NOT?: subtitleWhereInput | subtitleWhereInput[]
    container?: BigIntFilter<"subtitle"> | bigint | number
    timestamp?: BigIntFilter<"subtitle"> | bigint | number
    content?: StringFilter<"subtitle"> | string
    subtitles_container?: XOR<Subtitles_containerRelationFilter, subtitles_containerWhereInput>
  }, "id">

  export type subtitleOrderByWithAggregationInput = {
    id?: SortOrder
    container?: SortOrder
    timestamp?: SortOrder
    content?: SortOrder
    _count?: subtitleCountOrderByAggregateInput
    _avg?: subtitleAvgOrderByAggregateInput
    _max?: subtitleMaxOrderByAggregateInput
    _min?: subtitleMinOrderByAggregateInput
    _sum?: subtitleSumOrderByAggregateInput
  }

  export type subtitleScalarWhereWithAggregatesInput = {
    AND?: subtitleScalarWhereWithAggregatesInput | subtitleScalarWhereWithAggregatesInput[]
    OR?: subtitleScalarWhereWithAggregatesInput[]
    NOT?: subtitleScalarWhereWithAggregatesInput | subtitleScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"subtitle"> | bigint | number
    container?: BigIntWithAggregatesFilter<"subtitle"> | bigint | number
    timestamp?: BigIntWithAggregatesFilter<"subtitle"> | bigint | number
    content?: StringWithAggregatesFilter<"subtitle"> | string
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: BigIntFilter<"categories"> | bigint | number
    parent?: BigIntFilter<"categories"> | bigint | number
    child?: BigIntFilter<"categories"> | bigint | number
    name?: Cat_namesListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    parent?: SortOrder
    child?: SortOrder
    name?: cat_namesOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    parent?: BigIntFilter<"categories"> | bigint | number
    child?: BigIntFilter<"categories"> | bigint | number
    name?: Cat_namesListRelationFilter
  }, "id">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    parent?: SortOrder
    child?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"categories"> | bigint | number
    parent?: BigIntWithAggregatesFilter<"categories"> | bigint | number
    child?: BigIntWithAggregatesFilter<"categories"> | bigint | number
  }

  export type cat_namesWhereInput = {
    AND?: cat_namesWhereInput | cat_namesWhereInput[]
    OR?: cat_namesWhereInput[]
    NOT?: cat_namesWhereInput | cat_namesWhereInput[]
    id?: BigIntFilter<"cat_names"> | bigint | number
    name?: StringNullableListFilter<"cat_names">
    owner?: BigIntFilter<"cat_names"> | bigint | number
    categories?: XOR<CategoriesRelationFilter, categoriesWhereInput>
  }

  export type cat_namesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
    categories?: categoriesOrderByWithRelationInput
  }

  export type cat_namesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: cat_namesWhereInput | cat_namesWhereInput[]
    OR?: cat_namesWhereInput[]
    NOT?: cat_namesWhereInput | cat_namesWhereInput[]
    name?: StringNullableListFilter<"cat_names">
    owner?: BigIntFilter<"cat_names"> | bigint | number
    categories?: XOR<CategoriesRelationFilter, categoriesWhereInput>
  }, "id">

  export type cat_namesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
    _count?: cat_namesCountOrderByAggregateInput
    _avg?: cat_namesAvgOrderByAggregateInput
    _max?: cat_namesMaxOrderByAggregateInput
    _min?: cat_namesMinOrderByAggregateInput
    _sum?: cat_namesSumOrderByAggregateInput
  }

  export type cat_namesScalarWhereWithAggregatesInput = {
    AND?: cat_namesScalarWhereWithAggregatesInput | cat_namesScalarWhereWithAggregatesInput[]
    OR?: cat_namesScalarWhereWithAggregatesInput[]
    NOT?: cat_namesScalarWhereWithAggregatesInput | cat_namesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"cat_names"> | bigint | number
    name?: StringNullableListFilter<"cat_names">
    owner?: BigIntWithAggregatesFilter<"cat_names"> | bigint | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    video_entity?: Video_entityListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    video_entity?: video_entityOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    video_entity?: Video_entityListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
  }

  export type video_entityCreateInput = {
    id?: bigint | number
    type?: $Enums.video_type
    video_metadata?: video_metadataCreateNestedOneWithoutVideo_entityInput
    views?: viewsCreateNestedManyWithoutVideo_entityInput
    statuses?: statusesCreateNestedManyWithoutVideo_entityInput
    user: usersCreateNestedOneWithoutVideo_entityInput
  }

  export type video_entityUncheckedCreateInput = {
    id?: bigint | number
    type?: $Enums.video_type
    uploader: string
    video_metadata?: video_metadataUncheckedCreateNestedOneWithoutVideo_entityInput
    views?: viewsUncheckedCreateNestedManyWithoutVideo_entityInput
    statuses?: statusesUncheckedCreateNestedManyWithoutVideo_entityInput
  }

  export type video_entityUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumvideo_typeFieldUpdateOperationsInput | $Enums.video_type
    video_metadata?: video_metadataUpdateOneWithoutVideo_entityNestedInput
    views?: viewsUpdateManyWithoutVideo_entityNestedInput
    statuses?: statusesUpdateManyWithoutVideo_entityNestedInput
    user?: usersUpdateOneRequiredWithoutVideo_entityNestedInput
  }

  export type video_entityUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumvideo_typeFieldUpdateOperationsInput | $Enums.video_type
    uploader?: StringFieldUpdateOperationsInput | string
    video_metadata?: video_metadataUncheckedUpdateOneWithoutVideo_entityNestedInput
    views?: viewsUncheckedUpdateManyWithoutVideo_entityNestedInput
    statuses?: statusesUncheckedUpdateManyWithoutVideo_entityNestedInput
  }

  export type video_entityCreateManyInput = {
    id?: bigint | number
    type?: $Enums.video_type
    uploader: string
  }

  export type video_entityUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumvideo_typeFieldUpdateOperationsInput | $Enums.video_type
  }

  export type video_entityUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumvideo_typeFieldUpdateOperationsInput | $Enums.video_type
    uploader?: StringFieldUpdateOperationsInput | string
  }

  export type statusesCreateInput = {
    id?: bigint | number
    current: $Enums.video_status
    video_entity: video_entityCreateNestedOneWithoutStatusesInput
  }

  export type statusesUncheckedCreateInput = {
    id?: bigint | number
    video: bigint | number
    current: $Enums.video_status
  }

  export type statusesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    current?: Enumvideo_statusFieldUpdateOperationsInput | $Enums.video_status
    video_entity?: video_entityUpdateOneRequiredWithoutStatusesNestedInput
  }

  export type statusesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: BigIntFieldUpdateOperationsInput | bigint | number
    current?: Enumvideo_statusFieldUpdateOperationsInput | $Enums.video_status
  }

  export type statusesCreateManyInput = {
    id?: bigint | number
    video: bigint | number
    current: $Enums.video_status
  }

  export type statusesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    current?: Enumvideo_statusFieldUpdateOperationsInput | $Enums.video_status
  }

  export type statusesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: BigIntFieldUpdateOperationsInput | bigint | number
    current?: Enumvideo_statusFieldUpdateOperationsInput | $Enums.video_status
  }

  export type video_metadataCreateInput = {
    id?: bigint | number
    length_ms: bigint | number
    file_size: bigint | number
    uploader: string
    video_entity: video_entityCreateNestedOneWithoutVideo_metadataInput
    title?: video_titlesCreateNestedManyWithoutVideo_metadataInput
    description?: video_descriptionCreateNestedManyWithoutVideo_metadataInput
  }

  export type video_metadataUncheckedCreateInput = {
    id?: bigint | number
    video: bigint | number
    length_ms: bigint | number
    file_size: bigint | number
    uploader: string
    title?: video_titlesUncheckedCreateNestedManyWithoutVideo_metadataInput
    description?: video_descriptionUncheckedCreateNestedManyWithoutVideo_metadataInput
  }

  export type video_metadataUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    length_ms?: BigIntFieldUpdateOperationsInput | bigint | number
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    uploader?: StringFieldUpdateOperationsInput | string
    video_entity?: video_entityUpdateOneRequiredWithoutVideo_metadataNestedInput
    title?: video_titlesUpdateManyWithoutVideo_metadataNestedInput
    description?: video_descriptionUpdateManyWithoutVideo_metadataNestedInput
  }

  export type video_metadataUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: BigIntFieldUpdateOperationsInput | bigint | number
    length_ms?: BigIntFieldUpdateOperationsInput | bigint | number
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    uploader?: StringFieldUpdateOperationsInput | string
    title?: video_titlesUncheckedUpdateManyWithoutVideo_metadataNestedInput
    description?: video_descriptionUncheckedUpdateManyWithoutVideo_metadataNestedInput
  }

  export type video_metadataCreateManyInput = {
    id?: bigint | number
    video: bigint | number
    length_ms: bigint | number
    file_size: bigint | number
    uploader: string
  }

  export type video_metadataUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    length_ms?: BigIntFieldUpdateOperationsInput | bigint | number
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    uploader?: StringFieldUpdateOperationsInput | string
  }

  export type video_metadataUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: BigIntFieldUpdateOperationsInput | bigint | number
    length_ms?: BigIntFieldUpdateOperationsInput | bigint | number
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    uploader?: StringFieldUpdateOperationsInput | string
  }

  export type video_titlesCreateInput = {
    id?: bigint | number
    content: string
    video_metadata: video_metadataCreateNestedOneWithoutTitleInput
  }

  export type video_titlesUncheckedCreateInput = {
    id?: bigint | number
    video: bigint | number
    content: string
  }

  export type video_titlesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    video_metadata?: video_metadataUpdateOneRequiredWithoutTitleNestedInput
  }

  export type video_titlesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type video_titlesCreateManyInput = {
    id?: bigint | number
    video: bigint | number
    content: string
  }

  export type video_titlesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type video_titlesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type video_descriptionCreateInput = {
    id?: bigint | number
    content: string
    video_metadata: video_metadataCreateNestedOneWithoutDescriptionInput
  }

  export type video_descriptionUncheckedCreateInput = {
    id?: bigint | number
    video: bigint | number
    content: string
  }

  export type video_descriptionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    video_metadata?: video_metadataUpdateOneRequiredWithoutDescriptionNestedInput
  }

  export type video_descriptionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type video_descriptionCreateManyInput = {
    id?: bigint | number
    video: bigint | number
    content: string
  }

  export type video_descriptionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type video_descriptionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type viewsCreateInput = {
    id?: bigint | number
    video_entity: video_entityCreateNestedOneWithoutViewsInput
  }

  export type viewsUncheckedCreateInput = {
    id?: bigint | number
    owner: bigint | number
  }

  export type viewsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video_entity?: video_entityUpdateOneRequiredWithoutViewsNestedInput
  }

  export type viewsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type viewsCreateManyInput = {
    id?: bigint | number
    owner: bigint | number
  }

  export type viewsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type viewsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type subtitles_containerCreateInput = {
    id?: bigint | number
    lang: string
    subtitles?: subtitleCreateNestedManyWithoutSubtitles_containerInput
  }

  export type subtitles_containerUncheckedCreateInput = {
    id?: bigint | number
    lang: string
    subtitles?: subtitleUncheckedCreateNestedManyWithoutSubtitles_containerInput
  }

  export type subtitles_containerUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    lang?: StringFieldUpdateOperationsInput | string
    subtitles?: subtitleUpdateManyWithoutSubtitles_containerNestedInput
  }

  export type subtitles_containerUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    lang?: StringFieldUpdateOperationsInput | string
    subtitles?: subtitleUncheckedUpdateManyWithoutSubtitles_containerNestedInput
  }

  export type subtitles_containerCreateManyInput = {
    id?: bigint | number
    lang: string
  }

  export type subtitles_containerUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type subtitles_containerUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type subtitleCreateInput = {
    id?: bigint | number
    timestamp: bigint | number
    content: string
    subtitles_container: subtitles_containerCreateNestedOneWithoutSubtitlesInput
  }

  export type subtitleUncheckedCreateInput = {
    id?: bigint | number
    container: bigint | number
    timestamp: bigint | number
    content: string
  }

  export type subtitleUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    subtitles_container?: subtitles_containerUpdateOneRequiredWithoutSubtitlesNestedInput
  }

  export type subtitleUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    container?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type subtitleCreateManyInput = {
    id?: bigint | number
    container: bigint | number
    timestamp: bigint | number
    content: string
  }

  export type subtitleUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type subtitleUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    container?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesCreateInput = {
    id?: bigint | number
    parent: bigint | number
    child: bigint | number
    name?: cat_namesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: bigint | number
    parent: bigint | number
    child: bigint | number
    name?: cat_namesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    parent?: BigIntFieldUpdateOperationsInput | bigint | number
    child?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: cat_namesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    parent?: BigIntFieldUpdateOperationsInput | bigint | number
    child?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: cat_namesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: bigint | number
    parent: bigint | number
    child: bigint | number
  }

  export type categoriesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    parent?: BigIntFieldUpdateOperationsInput | bigint | number
    child?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    parent?: BigIntFieldUpdateOperationsInput | bigint | number
    child?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type cat_namesCreateInput = {
    id?: bigint | number
    name?: cat_namesCreatenameInput | string[]
    categories: categoriesCreateNestedOneWithoutNameInput
  }

  export type cat_namesUncheckedCreateInput = {
    id?: bigint | number
    name?: cat_namesCreatenameInput | string[]
    owner: bigint | number
  }

  export type cat_namesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: cat_namesUpdatenameInput | string[]
    categories?: categoriesUpdateOneRequiredWithoutNameNestedInput
  }

  export type cat_namesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: cat_namesUpdatenameInput | string[]
    owner?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type cat_namesCreateManyInput = {
    id?: bigint | number
    name?: cat_namesCreatenameInput | string[]
    owner: bigint | number
  }

  export type cat_namesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: cat_namesUpdatenameInput | string[]
  }

  export type cat_namesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: cat_namesUpdatenameInput | string[]
    owner?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type usersCreateInput = {
    id: string
    video_entity?: video_entityCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    video_entity?: video_entityUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_entity?: video_entityUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_entity?: video_entityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id: string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type Enumvideo_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.video_type | Enumvideo_typeFieldRefInput<$PrismaModel>
    in?: $Enums.video_type[] | ListEnumvideo_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.video_type[] | ListEnumvideo_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumvideo_typeFilter<$PrismaModel> | $Enums.video_type
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type Video_metadataNullableRelationFilter = {
    is?: video_metadataWhereInput | null
    isNot?: video_metadataWhereInput | null
  }

  export type ViewsListRelationFilter = {
    every?: viewsWhereInput
    some?: viewsWhereInput
    none?: viewsWhereInput
  }

  export type StatusesListRelationFilter = {
    every?: statusesWhereInput
    some?: statusesWhereInput
    none?: statusesWhereInput
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type viewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type statusesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type video_entityCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    uploader?: SortOrder
  }

  export type video_entityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type video_entityMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    uploader?: SortOrder
  }

  export type video_entityMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    uploader?: SortOrder
  }

  export type video_entitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type Enumvideo_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.video_type | Enumvideo_typeFieldRefInput<$PrismaModel>
    in?: $Enums.video_type[] | ListEnumvideo_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.video_type[] | ListEnumvideo_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumvideo_typeWithAggregatesFilter<$PrismaModel> | $Enums.video_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvideo_typeFilter<$PrismaModel>
    _max?: NestedEnumvideo_typeFilter<$PrismaModel>
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumvideo_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.video_status | Enumvideo_statusFieldRefInput<$PrismaModel>
    in?: $Enums.video_status[] | ListEnumvideo_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.video_status[] | ListEnumvideo_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumvideo_statusFilter<$PrismaModel> | $Enums.video_status
  }

  export type Video_entityRelationFilter = {
    is?: video_entityWhereInput
    isNot?: video_entityWhereInput
  }

  export type statusesCountOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
    current?: SortOrder
  }

  export type statusesAvgOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
  }

  export type statusesMaxOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
    current?: SortOrder
  }

  export type statusesMinOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
    current?: SortOrder
  }

  export type statusesSumOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
  }

  export type Enumvideo_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.video_status | Enumvideo_statusFieldRefInput<$PrismaModel>
    in?: $Enums.video_status[] | ListEnumvideo_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.video_status[] | ListEnumvideo_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumvideo_statusWithAggregatesFilter<$PrismaModel> | $Enums.video_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvideo_statusFilter<$PrismaModel>
    _max?: NestedEnumvideo_statusFilter<$PrismaModel>
  }

  export type Video_titlesListRelationFilter = {
    every?: video_titlesWhereInput
    some?: video_titlesWhereInput
    none?: video_titlesWhereInput
  }

  export type Video_descriptionListRelationFilter = {
    every?: video_descriptionWhereInput
    some?: video_descriptionWhereInput
    none?: video_descriptionWhereInput
  }

  export type video_titlesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type video_descriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type video_metadataCountOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
    length_ms?: SortOrder
    file_size?: SortOrder
    uploader?: SortOrder
  }

  export type video_metadataAvgOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
    length_ms?: SortOrder
    file_size?: SortOrder
  }

  export type video_metadataMaxOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
    length_ms?: SortOrder
    file_size?: SortOrder
    uploader?: SortOrder
  }

  export type video_metadataMinOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
    length_ms?: SortOrder
    file_size?: SortOrder
    uploader?: SortOrder
  }

  export type video_metadataSumOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
    length_ms?: SortOrder
    file_size?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Video_metadataRelationFilter = {
    is?: video_metadataWhereInput
    isNot?: video_metadataWhereInput
  }

  export type video_titlesCountOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
    content?: SortOrder
  }

  export type video_titlesAvgOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
  }

  export type video_titlesMaxOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
    content?: SortOrder
  }

  export type video_titlesMinOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
    content?: SortOrder
  }

  export type video_titlesSumOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type video_descriptionCountOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
    content?: SortOrder
  }

  export type video_descriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
  }

  export type video_descriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
    content?: SortOrder
  }

  export type video_descriptionMinOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
    content?: SortOrder
  }

  export type video_descriptionSumOrderByAggregateInput = {
    id?: SortOrder
    video?: SortOrder
  }

  export type viewsCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type viewsAvgOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type viewsMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type viewsMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type viewsSumOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type SubtitleListRelationFilter = {
    every?: subtitleWhereInput
    some?: subtitleWhereInput
    none?: subtitleWhereInput
  }

  export type subtitleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type subtitles_containerCountOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
  }

  export type subtitles_containerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type subtitles_containerMaxOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
  }

  export type subtitles_containerMinOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
  }

  export type subtitles_containerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Subtitles_containerRelationFilter = {
    is?: subtitles_containerWhereInput
    isNot?: subtitles_containerWhereInput
  }

  export type subtitleCountOrderByAggregateInput = {
    id?: SortOrder
    container?: SortOrder
    timestamp?: SortOrder
    content?: SortOrder
  }

  export type subtitleAvgOrderByAggregateInput = {
    id?: SortOrder
    container?: SortOrder
    timestamp?: SortOrder
  }

  export type subtitleMaxOrderByAggregateInput = {
    id?: SortOrder
    container?: SortOrder
    timestamp?: SortOrder
    content?: SortOrder
  }

  export type subtitleMinOrderByAggregateInput = {
    id?: SortOrder
    container?: SortOrder
    timestamp?: SortOrder
    content?: SortOrder
  }

  export type subtitleSumOrderByAggregateInput = {
    id?: SortOrder
    container?: SortOrder
    timestamp?: SortOrder
  }

  export type Cat_namesListRelationFilter = {
    every?: cat_namesWhereInput
    some?: cat_namesWhereInput
    none?: cat_namesWhereInput
  }

  export type cat_namesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    parent?: SortOrder
    child?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    parent?: SortOrder
    child?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    parent?: SortOrder
    child?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    parent?: SortOrder
    child?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
    parent?: SortOrder
    child?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CategoriesRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type cat_namesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
  }

  export type cat_namesAvgOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type cat_namesMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type cat_namesMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type cat_namesSumOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type Video_entityListRelationFilter = {
    every?: video_entityWhereInput
    some?: video_entityWhereInput
    none?: video_entityWhereInput
  }

  export type video_entityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type video_metadataCreateNestedOneWithoutVideo_entityInput = {
    create?: XOR<video_metadataCreateWithoutVideo_entityInput, video_metadataUncheckedCreateWithoutVideo_entityInput>
    connectOrCreate?: video_metadataCreateOrConnectWithoutVideo_entityInput
    connect?: video_metadataWhereUniqueInput
  }

  export type viewsCreateNestedManyWithoutVideo_entityInput = {
    create?: XOR<viewsCreateWithoutVideo_entityInput, viewsUncheckedCreateWithoutVideo_entityInput> | viewsCreateWithoutVideo_entityInput[] | viewsUncheckedCreateWithoutVideo_entityInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutVideo_entityInput | viewsCreateOrConnectWithoutVideo_entityInput[]
    createMany?: viewsCreateManyVideo_entityInputEnvelope
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
  }

  export type statusesCreateNestedManyWithoutVideo_entityInput = {
    create?: XOR<statusesCreateWithoutVideo_entityInput, statusesUncheckedCreateWithoutVideo_entityInput> | statusesCreateWithoutVideo_entityInput[] | statusesUncheckedCreateWithoutVideo_entityInput[]
    connectOrCreate?: statusesCreateOrConnectWithoutVideo_entityInput | statusesCreateOrConnectWithoutVideo_entityInput[]
    createMany?: statusesCreateManyVideo_entityInputEnvelope
    connect?: statusesWhereUniqueInput | statusesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutVideo_entityInput = {
    create?: XOR<usersCreateWithoutVideo_entityInput, usersUncheckedCreateWithoutVideo_entityInput>
    connectOrCreate?: usersCreateOrConnectWithoutVideo_entityInput
    connect?: usersWhereUniqueInput
  }

  export type video_metadataUncheckedCreateNestedOneWithoutVideo_entityInput = {
    create?: XOR<video_metadataCreateWithoutVideo_entityInput, video_metadataUncheckedCreateWithoutVideo_entityInput>
    connectOrCreate?: video_metadataCreateOrConnectWithoutVideo_entityInput
    connect?: video_metadataWhereUniqueInput
  }

  export type viewsUncheckedCreateNestedManyWithoutVideo_entityInput = {
    create?: XOR<viewsCreateWithoutVideo_entityInput, viewsUncheckedCreateWithoutVideo_entityInput> | viewsCreateWithoutVideo_entityInput[] | viewsUncheckedCreateWithoutVideo_entityInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutVideo_entityInput | viewsCreateOrConnectWithoutVideo_entityInput[]
    createMany?: viewsCreateManyVideo_entityInputEnvelope
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
  }

  export type statusesUncheckedCreateNestedManyWithoutVideo_entityInput = {
    create?: XOR<statusesCreateWithoutVideo_entityInput, statusesUncheckedCreateWithoutVideo_entityInput> | statusesCreateWithoutVideo_entityInput[] | statusesUncheckedCreateWithoutVideo_entityInput[]
    connectOrCreate?: statusesCreateOrConnectWithoutVideo_entityInput | statusesCreateOrConnectWithoutVideo_entityInput[]
    createMany?: statusesCreateManyVideo_entityInputEnvelope
    connect?: statusesWhereUniqueInput | statusesWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type Enumvideo_typeFieldUpdateOperationsInput = {
    set?: $Enums.video_type
  }

  export type video_metadataUpdateOneWithoutVideo_entityNestedInput = {
    create?: XOR<video_metadataCreateWithoutVideo_entityInput, video_metadataUncheckedCreateWithoutVideo_entityInput>
    connectOrCreate?: video_metadataCreateOrConnectWithoutVideo_entityInput
    upsert?: video_metadataUpsertWithoutVideo_entityInput
    disconnect?: video_metadataWhereInput | boolean
    delete?: video_metadataWhereInput | boolean
    connect?: video_metadataWhereUniqueInput
    update?: XOR<XOR<video_metadataUpdateToOneWithWhereWithoutVideo_entityInput, video_metadataUpdateWithoutVideo_entityInput>, video_metadataUncheckedUpdateWithoutVideo_entityInput>
  }

  export type viewsUpdateManyWithoutVideo_entityNestedInput = {
    create?: XOR<viewsCreateWithoutVideo_entityInput, viewsUncheckedCreateWithoutVideo_entityInput> | viewsCreateWithoutVideo_entityInput[] | viewsUncheckedCreateWithoutVideo_entityInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutVideo_entityInput | viewsCreateOrConnectWithoutVideo_entityInput[]
    upsert?: viewsUpsertWithWhereUniqueWithoutVideo_entityInput | viewsUpsertWithWhereUniqueWithoutVideo_entityInput[]
    createMany?: viewsCreateManyVideo_entityInputEnvelope
    set?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    disconnect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    delete?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    update?: viewsUpdateWithWhereUniqueWithoutVideo_entityInput | viewsUpdateWithWhereUniqueWithoutVideo_entityInput[]
    updateMany?: viewsUpdateManyWithWhereWithoutVideo_entityInput | viewsUpdateManyWithWhereWithoutVideo_entityInput[]
    deleteMany?: viewsScalarWhereInput | viewsScalarWhereInput[]
  }

  export type statusesUpdateManyWithoutVideo_entityNestedInput = {
    create?: XOR<statusesCreateWithoutVideo_entityInput, statusesUncheckedCreateWithoutVideo_entityInput> | statusesCreateWithoutVideo_entityInput[] | statusesUncheckedCreateWithoutVideo_entityInput[]
    connectOrCreate?: statusesCreateOrConnectWithoutVideo_entityInput | statusesCreateOrConnectWithoutVideo_entityInput[]
    upsert?: statusesUpsertWithWhereUniqueWithoutVideo_entityInput | statusesUpsertWithWhereUniqueWithoutVideo_entityInput[]
    createMany?: statusesCreateManyVideo_entityInputEnvelope
    set?: statusesWhereUniqueInput | statusesWhereUniqueInput[]
    disconnect?: statusesWhereUniqueInput | statusesWhereUniqueInput[]
    delete?: statusesWhereUniqueInput | statusesWhereUniqueInput[]
    connect?: statusesWhereUniqueInput | statusesWhereUniqueInput[]
    update?: statusesUpdateWithWhereUniqueWithoutVideo_entityInput | statusesUpdateWithWhereUniqueWithoutVideo_entityInput[]
    updateMany?: statusesUpdateManyWithWhereWithoutVideo_entityInput | statusesUpdateManyWithWhereWithoutVideo_entityInput[]
    deleteMany?: statusesScalarWhereInput | statusesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutVideo_entityNestedInput = {
    create?: XOR<usersCreateWithoutVideo_entityInput, usersUncheckedCreateWithoutVideo_entityInput>
    connectOrCreate?: usersCreateOrConnectWithoutVideo_entityInput
    upsert?: usersUpsertWithoutVideo_entityInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutVideo_entityInput, usersUpdateWithoutVideo_entityInput>, usersUncheckedUpdateWithoutVideo_entityInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type video_metadataUncheckedUpdateOneWithoutVideo_entityNestedInput = {
    create?: XOR<video_metadataCreateWithoutVideo_entityInput, video_metadataUncheckedCreateWithoutVideo_entityInput>
    connectOrCreate?: video_metadataCreateOrConnectWithoutVideo_entityInput
    upsert?: video_metadataUpsertWithoutVideo_entityInput
    disconnect?: video_metadataWhereInput | boolean
    delete?: video_metadataWhereInput | boolean
    connect?: video_metadataWhereUniqueInput
    update?: XOR<XOR<video_metadataUpdateToOneWithWhereWithoutVideo_entityInput, video_metadataUpdateWithoutVideo_entityInput>, video_metadataUncheckedUpdateWithoutVideo_entityInput>
  }

  export type viewsUncheckedUpdateManyWithoutVideo_entityNestedInput = {
    create?: XOR<viewsCreateWithoutVideo_entityInput, viewsUncheckedCreateWithoutVideo_entityInput> | viewsCreateWithoutVideo_entityInput[] | viewsUncheckedCreateWithoutVideo_entityInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutVideo_entityInput | viewsCreateOrConnectWithoutVideo_entityInput[]
    upsert?: viewsUpsertWithWhereUniqueWithoutVideo_entityInput | viewsUpsertWithWhereUniqueWithoutVideo_entityInput[]
    createMany?: viewsCreateManyVideo_entityInputEnvelope
    set?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    disconnect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    delete?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    update?: viewsUpdateWithWhereUniqueWithoutVideo_entityInput | viewsUpdateWithWhereUniqueWithoutVideo_entityInput[]
    updateMany?: viewsUpdateManyWithWhereWithoutVideo_entityInput | viewsUpdateManyWithWhereWithoutVideo_entityInput[]
    deleteMany?: viewsScalarWhereInput | viewsScalarWhereInput[]
  }

  export type statusesUncheckedUpdateManyWithoutVideo_entityNestedInput = {
    create?: XOR<statusesCreateWithoutVideo_entityInput, statusesUncheckedCreateWithoutVideo_entityInput> | statusesCreateWithoutVideo_entityInput[] | statusesUncheckedCreateWithoutVideo_entityInput[]
    connectOrCreate?: statusesCreateOrConnectWithoutVideo_entityInput | statusesCreateOrConnectWithoutVideo_entityInput[]
    upsert?: statusesUpsertWithWhereUniqueWithoutVideo_entityInput | statusesUpsertWithWhereUniqueWithoutVideo_entityInput[]
    createMany?: statusesCreateManyVideo_entityInputEnvelope
    set?: statusesWhereUniqueInput | statusesWhereUniqueInput[]
    disconnect?: statusesWhereUniqueInput | statusesWhereUniqueInput[]
    delete?: statusesWhereUniqueInput | statusesWhereUniqueInput[]
    connect?: statusesWhereUniqueInput | statusesWhereUniqueInput[]
    update?: statusesUpdateWithWhereUniqueWithoutVideo_entityInput | statusesUpdateWithWhereUniqueWithoutVideo_entityInput[]
    updateMany?: statusesUpdateManyWithWhereWithoutVideo_entityInput | statusesUpdateManyWithWhereWithoutVideo_entityInput[]
    deleteMany?: statusesScalarWhereInput | statusesScalarWhereInput[]
  }

  export type video_entityCreateNestedOneWithoutStatusesInput = {
    create?: XOR<video_entityCreateWithoutStatusesInput, video_entityUncheckedCreateWithoutStatusesInput>
    connectOrCreate?: video_entityCreateOrConnectWithoutStatusesInput
    connect?: video_entityWhereUniqueInput
  }

  export type Enumvideo_statusFieldUpdateOperationsInput = {
    set?: $Enums.video_status
  }

  export type video_entityUpdateOneRequiredWithoutStatusesNestedInput = {
    create?: XOR<video_entityCreateWithoutStatusesInput, video_entityUncheckedCreateWithoutStatusesInput>
    connectOrCreate?: video_entityCreateOrConnectWithoutStatusesInput
    upsert?: video_entityUpsertWithoutStatusesInput
    connect?: video_entityWhereUniqueInput
    update?: XOR<XOR<video_entityUpdateToOneWithWhereWithoutStatusesInput, video_entityUpdateWithoutStatusesInput>, video_entityUncheckedUpdateWithoutStatusesInput>
  }

  export type video_entityCreateNestedOneWithoutVideo_metadataInput = {
    create?: XOR<video_entityCreateWithoutVideo_metadataInput, video_entityUncheckedCreateWithoutVideo_metadataInput>
    connectOrCreate?: video_entityCreateOrConnectWithoutVideo_metadataInput
    connect?: video_entityWhereUniqueInput
  }

  export type video_titlesCreateNestedManyWithoutVideo_metadataInput = {
    create?: XOR<video_titlesCreateWithoutVideo_metadataInput, video_titlesUncheckedCreateWithoutVideo_metadataInput> | video_titlesCreateWithoutVideo_metadataInput[] | video_titlesUncheckedCreateWithoutVideo_metadataInput[]
    connectOrCreate?: video_titlesCreateOrConnectWithoutVideo_metadataInput | video_titlesCreateOrConnectWithoutVideo_metadataInput[]
    createMany?: video_titlesCreateManyVideo_metadataInputEnvelope
    connect?: video_titlesWhereUniqueInput | video_titlesWhereUniqueInput[]
  }

  export type video_descriptionCreateNestedManyWithoutVideo_metadataInput = {
    create?: XOR<video_descriptionCreateWithoutVideo_metadataInput, video_descriptionUncheckedCreateWithoutVideo_metadataInput> | video_descriptionCreateWithoutVideo_metadataInput[] | video_descriptionUncheckedCreateWithoutVideo_metadataInput[]
    connectOrCreate?: video_descriptionCreateOrConnectWithoutVideo_metadataInput | video_descriptionCreateOrConnectWithoutVideo_metadataInput[]
    createMany?: video_descriptionCreateManyVideo_metadataInputEnvelope
    connect?: video_descriptionWhereUniqueInput | video_descriptionWhereUniqueInput[]
  }

  export type video_titlesUncheckedCreateNestedManyWithoutVideo_metadataInput = {
    create?: XOR<video_titlesCreateWithoutVideo_metadataInput, video_titlesUncheckedCreateWithoutVideo_metadataInput> | video_titlesCreateWithoutVideo_metadataInput[] | video_titlesUncheckedCreateWithoutVideo_metadataInput[]
    connectOrCreate?: video_titlesCreateOrConnectWithoutVideo_metadataInput | video_titlesCreateOrConnectWithoutVideo_metadataInput[]
    createMany?: video_titlesCreateManyVideo_metadataInputEnvelope
    connect?: video_titlesWhereUniqueInput | video_titlesWhereUniqueInput[]
  }

  export type video_descriptionUncheckedCreateNestedManyWithoutVideo_metadataInput = {
    create?: XOR<video_descriptionCreateWithoutVideo_metadataInput, video_descriptionUncheckedCreateWithoutVideo_metadataInput> | video_descriptionCreateWithoutVideo_metadataInput[] | video_descriptionUncheckedCreateWithoutVideo_metadataInput[]
    connectOrCreate?: video_descriptionCreateOrConnectWithoutVideo_metadataInput | video_descriptionCreateOrConnectWithoutVideo_metadataInput[]
    createMany?: video_descriptionCreateManyVideo_metadataInputEnvelope
    connect?: video_descriptionWhereUniqueInput | video_descriptionWhereUniqueInput[]
  }

  export type video_entityUpdateOneRequiredWithoutVideo_metadataNestedInput = {
    create?: XOR<video_entityCreateWithoutVideo_metadataInput, video_entityUncheckedCreateWithoutVideo_metadataInput>
    connectOrCreate?: video_entityCreateOrConnectWithoutVideo_metadataInput
    upsert?: video_entityUpsertWithoutVideo_metadataInput
    connect?: video_entityWhereUniqueInput
    update?: XOR<XOR<video_entityUpdateToOneWithWhereWithoutVideo_metadataInput, video_entityUpdateWithoutVideo_metadataInput>, video_entityUncheckedUpdateWithoutVideo_metadataInput>
  }

  export type video_titlesUpdateManyWithoutVideo_metadataNestedInput = {
    create?: XOR<video_titlesCreateWithoutVideo_metadataInput, video_titlesUncheckedCreateWithoutVideo_metadataInput> | video_titlesCreateWithoutVideo_metadataInput[] | video_titlesUncheckedCreateWithoutVideo_metadataInput[]
    connectOrCreate?: video_titlesCreateOrConnectWithoutVideo_metadataInput | video_titlesCreateOrConnectWithoutVideo_metadataInput[]
    upsert?: video_titlesUpsertWithWhereUniqueWithoutVideo_metadataInput | video_titlesUpsertWithWhereUniqueWithoutVideo_metadataInput[]
    createMany?: video_titlesCreateManyVideo_metadataInputEnvelope
    set?: video_titlesWhereUniqueInput | video_titlesWhereUniqueInput[]
    disconnect?: video_titlesWhereUniqueInput | video_titlesWhereUniqueInput[]
    delete?: video_titlesWhereUniqueInput | video_titlesWhereUniqueInput[]
    connect?: video_titlesWhereUniqueInput | video_titlesWhereUniqueInput[]
    update?: video_titlesUpdateWithWhereUniqueWithoutVideo_metadataInput | video_titlesUpdateWithWhereUniqueWithoutVideo_metadataInput[]
    updateMany?: video_titlesUpdateManyWithWhereWithoutVideo_metadataInput | video_titlesUpdateManyWithWhereWithoutVideo_metadataInput[]
    deleteMany?: video_titlesScalarWhereInput | video_titlesScalarWhereInput[]
  }

  export type video_descriptionUpdateManyWithoutVideo_metadataNestedInput = {
    create?: XOR<video_descriptionCreateWithoutVideo_metadataInput, video_descriptionUncheckedCreateWithoutVideo_metadataInput> | video_descriptionCreateWithoutVideo_metadataInput[] | video_descriptionUncheckedCreateWithoutVideo_metadataInput[]
    connectOrCreate?: video_descriptionCreateOrConnectWithoutVideo_metadataInput | video_descriptionCreateOrConnectWithoutVideo_metadataInput[]
    upsert?: video_descriptionUpsertWithWhereUniqueWithoutVideo_metadataInput | video_descriptionUpsertWithWhereUniqueWithoutVideo_metadataInput[]
    createMany?: video_descriptionCreateManyVideo_metadataInputEnvelope
    set?: video_descriptionWhereUniqueInput | video_descriptionWhereUniqueInput[]
    disconnect?: video_descriptionWhereUniqueInput | video_descriptionWhereUniqueInput[]
    delete?: video_descriptionWhereUniqueInput | video_descriptionWhereUniqueInput[]
    connect?: video_descriptionWhereUniqueInput | video_descriptionWhereUniqueInput[]
    update?: video_descriptionUpdateWithWhereUniqueWithoutVideo_metadataInput | video_descriptionUpdateWithWhereUniqueWithoutVideo_metadataInput[]
    updateMany?: video_descriptionUpdateManyWithWhereWithoutVideo_metadataInput | video_descriptionUpdateManyWithWhereWithoutVideo_metadataInput[]
    deleteMany?: video_descriptionScalarWhereInput | video_descriptionScalarWhereInput[]
  }

  export type video_titlesUncheckedUpdateManyWithoutVideo_metadataNestedInput = {
    create?: XOR<video_titlesCreateWithoutVideo_metadataInput, video_titlesUncheckedCreateWithoutVideo_metadataInput> | video_titlesCreateWithoutVideo_metadataInput[] | video_titlesUncheckedCreateWithoutVideo_metadataInput[]
    connectOrCreate?: video_titlesCreateOrConnectWithoutVideo_metadataInput | video_titlesCreateOrConnectWithoutVideo_metadataInput[]
    upsert?: video_titlesUpsertWithWhereUniqueWithoutVideo_metadataInput | video_titlesUpsertWithWhereUniqueWithoutVideo_metadataInput[]
    createMany?: video_titlesCreateManyVideo_metadataInputEnvelope
    set?: video_titlesWhereUniqueInput | video_titlesWhereUniqueInput[]
    disconnect?: video_titlesWhereUniqueInput | video_titlesWhereUniqueInput[]
    delete?: video_titlesWhereUniqueInput | video_titlesWhereUniqueInput[]
    connect?: video_titlesWhereUniqueInput | video_titlesWhereUniqueInput[]
    update?: video_titlesUpdateWithWhereUniqueWithoutVideo_metadataInput | video_titlesUpdateWithWhereUniqueWithoutVideo_metadataInput[]
    updateMany?: video_titlesUpdateManyWithWhereWithoutVideo_metadataInput | video_titlesUpdateManyWithWhereWithoutVideo_metadataInput[]
    deleteMany?: video_titlesScalarWhereInput | video_titlesScalarWhereInput[]
  }

  export type video_descriptionUncheckedUpdateManyWithoutVideo_metadataNestedInput = {
    create?: XOR<video_descriptionCreateWithoutVideo_metadataInput, video_descriptionUncheckedCreateWithoutVideo_metadataInput> | video_descriptionCreateWithoutVideo_metadataInput[] | video_descriptionUncheckedCreateWithoutVideo_metadataInput[]
    connectOrCreate?: video_descriptionCreateOrConnectWithoutVideo_metadataInput | video_descriptionCreateOrConnectWithoutVideo_metadataInput[]
    upsert?: video_descriptionUpsertWithWhereUniqueWithoutVideo_metadataInput | video_descriptionUpsertWithWhereUniqueWithoutVideo_metadataInput[]
    createMany?: video_descriptionCreateManyVideo_metadataInputEnvelope
    set?: video_descriptionWhereUniqueInput | video_descriptionWhereUniqueInput[]
    disconnect?: video_descriptionWhereUniqueInput | video_descriptionWhereUniqueInput[]
    delete?: video_descriptionWhereUniqueInput | video_descriptionWhereUniqueInput[]
    connect?: video_descriptionWhereUniqueInput | video_descriptionWhereUniqueInput[]
    update?: video_descriptionUpdateWithWhereUniqueWithoutVideo_metadataInput | video_descriptionUpdateWithWhereUniqueWithoutVideo_metadataInput[]
    updateMany?: video_descriptionUpdateManyWithWhereWithoutVideo_metadataInput | video_descriptionUpdateManyWithWhereWithoutVideo_metadataInput[]
    deleteMany?: video_descriptionScalarWhereInput | video_descriptionScalarWhereInput[]
  }

  export type video_metadataCreateNestedOneWithoutTitleInput = {
    create?: XOR<video_metadataCreateWithoutTitleInput, video_metadataUncheckedCreateWithoutTitleInput>
    connectOrCreate?: video_metadataCreateOrConnectWithoutTitleInput
    connect?: video_metadataWhereUniqueInput
  }

  export type video_metadataUpdateOneRequiredWithoutTitleNestedInput = {
    create?: XOR<video_metadataCreateWithoutTitleInput, video_metadataUncheckedCreateWithoutTitleInput>
    connectOrCreate?: video_metadataCreateOrConnectWithoutTitleInput
    upsert?: video_metadataUpsertWithoutTitleInput
    connect?: video_metadataWhereUniqueInput
    update?: XOR<XOR<video_metadataUpdateToOneWithWhereWithoutTitleInput, video_metadataUpdateWithoutTitleInput>, video_metadataUncheckedUpdateWithoutTitleInput>
  }

  export type video_metadataCreateNestedOneWithoutDescriptionInput = {
    create?: XOR<video_metadataCreateWithoutDescriptionInput, video_metadataUncheckedCreateWithoutDescriptionInput>
    connectOrCreate?: video_metadataCreateOrConnectWithoutDescriptionInput
    connect?: video_metadataWhereUniqueInput
  }

  export type video_metadataUpdateOneRequiredWithoutDescriptionNestedInput = {
    create?: XOR<video_metadataCreateWithoutDescriptionInput, video_metadataUncheckedCreateWithoutDescriptionInput>
    connectOrCreate?: video_metadataCreateOrConnectWithoutDescriptionInput
    upsert?: video_metadataUpsertWithoutDescriptionInput
    connect?: video_metadataWhereUniqueInput
    update?: XOR<XOR<video_metadataUpdateToOneWithWhereWithoutDescriptionInput, video_metadataUpdateWithoutDescriptionInput>, video_metadataUncheckedUpdateWithoutDescriptionInput>
  }

  export type video_entityCreateNestedOneWithoutViewsInput = {
    create?: XOR<video_entityCreateWithoutViewsInput, video_entityUncheckedCreateWithoutViewsInput>
    connectOrCreate?: video_entityCreateOrConnectWithoutViewsInput
    connect?: video_entityWhereUniqueInput
  }

  export type video_entityUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<video_entityCreateWithoutViewsInput, video_entityUncheckedCreateWithoutViewsInput>
    connectOrCreate?: video_entityCreateOrConnectWithoutViewsInput
    upsert?: video_entityUpsertWithoutViewsInput
    connect?: video_entityWhereUniqueInput
    update?: XOR<XOR<video_entityUpdateToOneWithWhereWithoutViewsInput, video_entityUpdateWithoutViewsInput>, video_entityUncheckedUpdateWithoutViewsInput>
  }

  export type subtitleCreateNestedManyWithoutSubtitles_containerInput = {
    create?: XOR<subtitleCreateWithoutSubtitles_containerInput, subtitleUncheckedCreateWithoutSubtitles_containerInput> | subtitleCreateWithoutSubtitles_containerInput[] | subtitleUncheckedCreateWithoutSubtitles_containerInput[]
    connectOrCreate?: subtitleCreateOrConnectWithoutSubtitles_containerInput | subtitleCreateOrConnectWithoutSubtitles_containerInput[]
    createMany?: subtitleCreateManySubtitles_containerInputEnvelope
    connect?: subtitleWhereUniqueInput | subtitleWhereUniqueInput[]
  }

  export type subtitleUncheckedCreateNestedManyWithoutSubtitles_containerInput = {
    create?: XOR<subtitleCreateWithoutSubtitles_containerInput, subtitleUncheckedCreateWithoutSubtitles_containerInput> | subtitleCreateWithoutSubtitles_containerInput[] | subtitleUncheckedCreateWithoutSubtitles_containerInput[]
    connectOrCreate?: subtitleCreateOrConnectWithoutSubtitles_containerInput | subtitleCreateOrConnectWithoutSubtitles_containerInput[]
    createMany?: subtitleCreateManySubtitles_containerInputEnvelope
    connect?: subtitleWhereUniqueInput | subtitleWhereUniqueInput[]
  }

  export type subtitleUpdateManyWithoutSubtitles_containerNestedInput = {
    create?: XOR<subtitleCreateWithoutSubtitles_containerInput, subtitleUncheckedCreateWithoutSubtitles_containerInput> | subtitleCreateWithoutSubtitles_containerInput[] | subtitleUncheckedCreateWithoutSubtitles_containerInput[]
    connectOrCreate?: subtitleCreateOrConnectWithoutSubtitles_containerInput | subtitleCreateOrConnectWithoutSubtitles_containerInput[]
    upsert?: subtitleUpsertWithWhereUniqueWithoutSubtitles_containerInput | subtitleUpsertWithWhereUniqueWithoutSubtitles_containerInput[]
    createMany?: subtitleCreateManySubtitles_containerInputEnvelope
    set?: subtitleWhereUniqueInput | subtitleWhereUniqueInput[]
    disconnect?: subtitleWhereUniqueInput | subtitleWhereUniqueInput[]
    delete?: subtitleWhereUniqueInput | subtitleWhereUniqueInput[]
    connect?: subtitleWhereUniqueInput | subtitleWhereUniqueInput[]
    update?: subtitleUpdateWithWhereUniqueWithoutSubtitles_containerInput | subtitleUpdateWithWhereUniqueWithoutSubtitles_containerInput[]
    updateMany?: subtitleUpdateManyWithWhereWithoutSubtitles_containerInput | subtitleUpdateManyWithWhereWithoutSubtitles_containerInput[]
    deleteMany?: subtitleScalarWhereInput | subtitleScalarWhereInput[]
  }

  export type subtitleUncheckedUpdateManyWithoutSubtitles_containerNestedInput = {
    create?: XOR<subtitleCreateWithoutSubtitles_containerInput, subtitleUncheckedCreateWithoutSubtitles_containerInput> | subtitleCreateWithoutSubtitles_containerInput[] | subtitleUncheckedCreateWithoutSubtitles_containerInput[]
    connectOrCreate?: subtitleCreateOrConnectWithoutSubtitles_containerInput | subtitleCreateOrConnectWithoutSubtitles_containerInput[]
    upsert?: subtitleUpsertWithWhereUniqueWithoutSubtitles_containerInput | subtitleUpsertWithWhereUniqueWithoutSubtitles_containerInput[]
    createMany?: subtitleCreateManySubtitles_containerInputEnvelope
    set?: subtitleWhereUniqueInput | subtitleWhereUniqueInput[]
    disconnect?: subtitleWhereUniqueInput | subtitleWhereUniqueInput[]
    delete?: subtitleWhereUniqueInput | subtitleWhereUniqueInput[]
    connect?: subtitleWhereUniqueInput | subtitleWhereUniqueInput[]
    update?: subtitleUpdateWithWhereUniqueWithoutSubtitles_containerInput | subtitleUpdateWithWhereUniqueWithoutSubtitles_containerInput[]
    updateMany?: subtitleUpdateManyWithWhereWithoutSubtitles_containerInput | subtitleUpdateManyWithWhereWithoutSubtitles_containerInput[]
    deleteMany?: subtitleScalarWhereInput | subtitleScalarWhereInput[]
  }

  export type subtitles_containerCreateNestedOneWithoutSubtitlesInput = {
    create?: XOR<subtitles_containerCreateWithoutSubtitlesInput, subtitles_containerUncheckedCreateWithoutSubtitlesInput>
    connectOrCreate?: subtitles_containerCreateOrConnectWithoutSubtitlesInput
    connect?: subtitles_containerWhereUniqueInput
  }

  export type subtitles_containerUpdateOneRequiredWithoutSubtitlesNestedInput = {
    create?: XOR<subtitles_containerCreateWithoutSubtitlesInput, subtitles_containerUncheckedCreateWithoutSubtitlesInput>
    connectOrCreate?: subtitles_containerCreateOrConnectWithoutSubtitlesInput
    upsert?: subtitles_containerUpsertWithoutSubtitlesInput
    connect?: subtitles_containerWhereUniqueInput
    update?: XOR<XOR<subtitles_containerUpdateToOneWithWhereWithoutSubtitlesInput, subtitles_containerUpdateWithoutSubtitlesInput>, subtitles_containerUncheckedUpdateWithoutSubtitlesInput>
  }

  export type cat_namesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<cat_namesCreateWithoutCategoriesInput, cat_namesUncheckedCreateWithoutCategoriesInput> | cat_namesCreateWithoutCategoriesInput[] | cat_namesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: cat_namesCreateOrConnectWithoutCategoriesInput | cat_namesCreateOrConnectWithoutCategoriesInput[]
    createMany?: cat_namesCreateManyCategoriesInputEnvelope
    connect?: cat_namesWhereUniqueInput | cat_namesWhereUniqueInput[]
  }

  export type cat_namesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<cat_namesCreateWithoutCategoriesInput, cat_namesUncheckedCreateWithoutCategoriesInput> | cat_namesCreateWithoutCategoriesInput[] | cat_namesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: cat_namesCreateOrConnectWithoutCategoriesInput | cat_namesCreateOrConnectWithoutCategoriesInput[]
    createMany?: cat_namesCreateManyCategoriesInputEnvelope
    connect?: cat_namesWhereUniqueInput | cat_namesWhereUniqueInput[]
  }

  export type cat_namesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<cat_namesCreateWithoutCategoriesInput, cat_namesUncheckedCreateWithoutCategoriesInput> | cat_namesCreateWithoutCategoriesInput[] | cat_namesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: cat_namesCreateOrConnectWithoutCategoriesInput | cat_namesCreateOrConnectWithoutCategoriesInput[]
    upsert?: cat_namesUpsertWithWhereUniqueWithoutCategoriesInput | cat_namesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: cat_namesCreateManyCategoriesInputEnvelope
    set?: cat_namesWhereUniqueInput | cat_namesWhereUniqueInput[]
    disconnect?: cat_namesWhereUniqueInput | cat_namesWhereUniqueInput[]
    delete?: cat_namesWhereUniqueInput | cat_namesWhereUniqueInput[]
    connect?: cat_namesWhereUniqueInput | cat_namesWhereUniqueInput[]
    update?: cat_namesUpdateWithWhereUniqueWithoutCategoriesInput | cat_namesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: cat_namesUpdateManyWithWhereWithoutCategoriesInput | cat_namesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: cat_namesScalarWhereInput | cat_namesScalarWhereInput[]
  }

  export type cat_namesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<cat_namesCreateWithoutCategoriesInput, cat_namesUncheckedCreateWithoutCategoriesInput> | cat_namesCreateWithoutCategoriesInput[] | cat_namesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: cat_namesCreateOrConnectWithoutCategoriesInput | cat_namesCreateOrConnectWithoutCategoriesInput[]
    upsert?: cat_namesUpsertWithWhereUniqueWithoutCategoriesInput | cat_namesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: cat_namesCreateManyCategoriesInputEnvelope
    set?: cat_namesWhereUniqueInput | cat_namesWhereUniqueInput[]
    disconnect?: cat_namesWhereUniqueInput | cat_namesWhereUniqueInput[]
    delete?: cat_namesWhereUniqueInput | cat_namesWhereUniqueInput[]
    connect?: cat_namesWhereUniqueInput | cat_namesWhereUniqueInput[]
    update?: cat_namesUpdateWithWhereUniqueWithoutCategoriesInput | cat_namesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: cat_namesUpdateManyWithWhereWithoutCategoriesInput | cat_namesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: cat_namesScalarWhereInput | cat_namesScalarWhereInput[]
  }

  export type cat_namesCreatenameInput = {
    set: string[]
  }

  export type categoriesCreateNestedOneWithoutNameInput = {
    create?: XOR<categoriesCreateWithoutNameInput, categoriesUncheckedCreateWithoutNameInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutNameInput
    connect?: categoriesWhereUniqueInput
  }

  export type cat_namesUpdatenameInput = {
    set?: string[]
    push?: string | string[]
  }

  export type categoriesUpdateOneRequiredWithoutNameNestedInput = {
    create?: XOR<categoriesCreateWithoutNameInput, categoriesUncheckedCreateWithoutNameInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutNameInput
    upsert?: categoriesUpsertWithoutNameInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutNameInput, categoriesUpdateWithoutNameInput>, categoriesUncheckedUpdateWithoutNameInput>
  }

  export type video_entityCreateNestedManyWithoutUserInput = {
    create?: XOR<video_entityCreateWithoutUserInput, video_entityUncheckedCreateWithoutUserInput> | video_entityCreateWithoutUserInput[] | video_entityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: video_entityCreateOrConnectWithoutUserInput | video_entityCreateOrConnectWithoutUserInput[]
    createMany?: video_entityCreateManyUserInputEnvelope
    connect?: video_entityWhereUniqueInput | video_entityWhereUniqueInput[]
  }

  export type video_entityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<video_entityCreateWithoutUserInput, video_entityUncheckedCreateWithoutUserInput> | video_entityCreateWithoutUserInput[] | video_entityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: video_entityCreateOrConnectWithoutUserInput | video_entityCreateOrConnectWithoutUserInput[]
    createMany?: video_entityCreateManyUserInputEnvelope
    connect?: video_entityWhereUniqueInput | video_entityWhereUniqueInput[]
  }

  export type video_entityUpdateManyWithoutUserNestedInput = {
    create?: XOR<video_entityCreateWithoutUserInput, video_entityUncheckedCreateWithoutUserInput> | video_entityCreateWithoutUserInput[] | video_entityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: video_entityCreateOrConnectWithoutUserInput | video_entityCreateOrConnectWithoutUserInput[]
    upsert?: video_entityUpsertWithWhereUniqueWithoutUserInput | video_entityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: video_entityCreateManyUserInputEnvelope
    set?: video_entityWhereUniqueInput | video_entityWhereUniqueInput[]
    disconnect?: video_entityWhereUniqueInput | video_entityWhereUniqueInput[]
    delete?: video_entityWhereUniqueInput | video_entityWhereUniqueInput[]
    connect?: video_entityWhereUniqueInput | video_entityWhereUniqueInput[]
    update?: video_entityUpdateWithWhereUniqueWithoutUserInput | video_entityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: video_entityUpdateManyWithWhereWithoutUserInput | video_entityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: video_entityScalarWhereInput | video_entityScalarWhereInput[]
  }

  export type video_entityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<video_entityCreateWithoutUserInput, video_entityUncheckedCreateWithoutUserInput> | video_entityCreateWithoutUserInput[] | video_entityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: video_entityCreateOrConnectWithoutUserInput | video_entityCreateOrConnectWithoutUserInput[]
    upsert?: video_entityUpsertWithWhereUniqueWithoutUserInput | video_entityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: video_entityCreateManyUserInputEnvelope
    set?: video_entityWhereUniqueInput | video_entityWhereUniqueInput[]
    disconnect?: video_entityWhereUniqueInput | video_entityWhereUniqueInput[]
    delete?: video_entityWhereUniqueInput | video_entityWhereUniqueInput[]
    connect?: video_entityWhereUniqueInput | video_entityWhereUniqueInput[]
    update?: video_entityUpdateWithWhereUniqueWithoutUserInput | video_entityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: video_entityUpdateManyWithWhereWithoutUserInput | video_entityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: video_entityScalarWhereInput | video_entityScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumvideo_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.video_type | Enumvideo_typeFieldRefInput<$PrismaModel>
    in?: $Enums.video_type[] | ListEnumvideo_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.video_type[] | ListEnumvideo_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumvideo_typeFilter<$PrismaModel> | $Enums.video_type
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumvideo_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.video_type | Enumvideo_typeFieldRefInput<$PrismaModel>
    in?: $Enums.video_type[] | ListEnumvideo_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.video_type[] | ListEnumvideo_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumvideo_typeWithAggregatesFilter<$PrismaModel> | $Enums.video_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvideo_typeFilter<$PrismaModel>
    _max?: NestedEnumvideo_typeFilter<$PrismaModel>
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumvideo_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.video_status | Enumvideo_statusFieldRefInput<$PrismaModel>
    in?: $Enums.video_status[] | ListEnumvideo_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.video_status[] | ListEnumvideo_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumvideo_statusFilter<$PrismaModel> | $Enums.video_status
  }

  export type NestedEnumvideo_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.video_status | Enumvideo_statusFieldRefInput<$PrismaModel>
    in?: $Enums.video_status[] | ListEnumvideo_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.video_status[] | ListEnumvideo_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumvideo_statusWithAggregatesFilter<$PrismaModel> | $Enums.video_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvideo_statusFilter<$PrismaModel>
    _max?: NestedEnumvideo_statusFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type video_metadataCreateWithoutVideo_entityInput = {
    id?: bigint | number
    length_ms: bigint | number
    file_size: bigint | number
    uploader: string
    title?: video_titlesCreateNestedManyWithoutVideo_metadataInput
    description?: video_descriptionCreateNestedManyWithoutVideo_metadataInput
  }

  export type video_metadataUncheckedCreateWithoutVideo_entityInput = {
    id?: bigint | number
    length_ms: bigint | number
    file_size: bigint | number
    uploader: string
    title?: video_titlesUncheckedCreateNestedManyWithoutVideo_metadataInput
    description?: video_descriptionUncheckedCreateNestedManyWithoutVideo_metadataInput
  }

  export type video_metadataCreateOrConnectWithoutVideo_entityInput = {
    where: video_metadataWhereUniqueInput
    create: XOR<video_metadataCreateWithoutVideo_entityInput, video_metadataUncheckedCreateWithoutVideo_entityInput>
  }

  export type viewsCreateWithoutVideo_entityInput = {
    id?: bigint | number
  }

  export type viewsUncheckedCreateWithoutVideo_entityInput = {
    id?: bigint | number
  }

  export type viewsCreateOrConnectWithoutVideo_entityInput = {
    where: viewsWhereUniqueInput
    create: XOR<viewsCreateWithoutVideo_entityInput, viewsUncheckedCreateWithoutVideo_entityInput>
  }

  export type viewsCreateManyVideo_entityInputEnvelope = {
    data: viewsCreateManyVideo_entityInput | viewsCreateManyVideo_entityInput[]
    skipDuplicates?: boolean
  }

  export type statusesCreateWithoutVideo_entityInput = {
    id?: bigint | number
    current: $Enums.video_status
  }

  export type statusesUncheckedCreateWithoutVideo_entityInput = {
    id?: bigint | number
    current: $Enums.video_status
  }

  export type statusesCreateOrConnectWithoutVideo_entityInput = {
    where: statusesWhereUniqueInput
    create: XOR<statusesCreateWithoutVideo_entityInput, statusesUncheckedCreateWithoutVideo_entityInput>
  }

  export type statusesCreateManyVideo_entityInputEnvelope = {
    data: statusesCreateManyVideo_entityInput | statusesCreateManyVideo_entityInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutVideo_entityInput = {
    id: string
  }

  export type usersUncheckedCreateWithoutVideo_entityInput = {
    id: string
  }

  export type usersCreateOrConnectWithoutVideo_entityInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutVideo_entityInput, usersUncheckedCreateWithoutVideo_entityInput>
  }

  export type video_metadataUpsertWithoutVideo_entityInput = {
    update: XOR<video_metadataUpdateWithoutVideo_entityInput, video_metadataUncheckedUpdateWithoutVideo_entityInput>
    create: XOR<video_metadataCreateWithoutVideo_entityInput, video_metadataUncheckedCreateWithoutVideo_entityInput>
    where?: video_metadataWhereInput
  }

  export type video_metadataUpdateToOneWithWhereWithoutVideo_entityInput = {
    where?: video_metadataWhereInput
    data: XOR<video_metadataUpdateWithoutVideo_entityInput, video_metadataUncheckedUpdateWithoutVideo_entityInput>
  }

  export type video_metadataUpdateWithoutVideo_entityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    length_ms?: BigIntFieldUpdateOperationsInput | bigint | number
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    uploader?: StringFieldUpdateOperationsInput | string
    title?: video_titlesUpdateManyWithoutVideo_metadataNestedInput
    description?: video_descriptionUpdateManyWithoutVideo_metadataNestedInput
  }

  export type video_metadataUncheckedUpdateWithoutVideo_entityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    length_ms?: BigIntFieldUpdateOperationsInput | bigint | number
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    uploader?: StringFieldUpdateOperationsInput | string
    title?: video_titlesUncheckedUpdateManyWithoutVideo_metadataNestedInput
    description?: video_descriptionUncheckedUpdateManyWithoutVideo_metadataNestedInput
  }

  export type viewsUpsertWithWhereUniqueWithoutVideo_entityInput = {
    where: viewsWhereUniqueInput
    update: XOR<viewsUpdateWithoutVideo_entityInput, viewsUncheckedUpdateWithoutVideo_entityInput>
    create: XOR<viewsCreateWithoutVideo_entityInput, viewsUncheckedCreateWithoutVideo_entityInput>
  }

  export type viewsUpdateWithWhereUniqueWithoutVideo_entityInput = {
    where: viewsWhereUniqueInput
    data: XOR<viewsUpdateWithoutVideo_entityInput, viewsUncheckedUpdateWithoutVideo_entityInput>
  }

  export type viewsUpdateManyWithWhereWithoutVideo_entityInput = {
    where: viewsScalarWhereInput
    data: XOR<viewsUpdateManyMutationInput, viewsUncheckedUpdateManyWithoutVideo_entityInput>
  }

  export type viewsScalarWhereInput = {
    AND?: viewsScalarWhereInput | viewsScalarWhereInput[]
    OR?: viewsScalarWhereInput[]
    NOT?: viewsScalarWhereInput | viewsScalarWhereInput[]
    id?: BigIntFilter<"views"> | bigint | number
    owner?: BigIntFilter<"views"> | bigint | number
  }

  export type statusesUpsertWithWhereUniqueWithoutVideo_entityInput = {
    where: statusesWhereUniqueInput
    update: XOR<statusesUpdateWithoutVideo_entityInput, statusesUncheckedUpdateWithoutVideo_entityInput>
    create: XOR<statusesCreateWithoutVideo_entityInput, statusesUncheckedCreateWithoutVideo_entityInput>
  }

  export type statusesUpdateWithWhereUniqueWithoutVideo_entityInput = {
    where: statusesWhereUniqueInput
    data: XOR<statusesUpdateWithoutVideo_entityInput, statusesUncheckedUpdateWithoutVideo_entityInput>
  }

  export type statusesUpdateManyWithWhereWithoutVideo_entityInput = {
    where: statusesScalarWhereInput
    data: XOR<statusesUpdateManyMutationInput, statusesUncheckedUpdateManyWithoutVideo_entityInput>
  }

  export type statusesScalarWhereInput = {
    AND?: statusesScalarWhereInput | statusesScalarWhereInput[]
    OR?: statusesScalarWhereInput[]
    NOT?: statusesScalarWhereInput | statusesScalarWhereInput[]
    id?: BigIntFilter<"statuses"> | bigint | number
    video?: BigIntFilter<"statuses"> | bigint | number
    current?: Enumvideo_statusFilter<"statuses"> | $Enums.video_status
  }

  export type usersUpsertWithoutVideo_entityInput = {
    update: XOR<usersUpdateWithoutVideo_entityInput, usersUncheckedUpdateWithoutVideo_entityInput>
    create: XOR<usersCreateWithoutVideo_entityInput, usersUncheckedCreateWithoutVideo_entityInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutVideo_entityInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutVideo_entityInput, usersUncheckedUpdateWithoutVideo_entityInput>
  }

  export type usersUpdateWithoutVideo_entityInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateWithoutVideo_entityInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type video_entityCreateWithoutStatusesInput = {
    id?: bigint | number
    type?: $Enums.video_type
    video_metadata?: video_metadataCreateNestedOneWithoutVideo_entityInput
    views?: viewsCreateNestedManyWithoutVideo_entityInput
    user: usersCreateNestedOneWithoutVideo_entityInput
  }

  export type video_entityUncheckedCreateWithoutStatusesInput = {
    id?: bigint | number
    type?: $Enums.video_type
    uploader: string
    video_metadata?: video_metadataUncheckedCreateNestedOneWithoutVideo_entityInput
    views?: viewsUncheckedCreateNestedManyWithoutVideo_entityInput
  }

  export type video_entityCreateOrConnectWithoutStatusesInput = {
    where: video_entityWhereUniqueInput
    create: XOR<video_entityCreateWithoutStatusesInput, video_entityUncheckedCreateWithoutStatusesInput>
  }

  export type video_entityUpsertWithoutStatusesInput = {
    update: XOR<video_entityUpdateWithoutStatusesInput, video_entityUncheckedUpdateWithoutStatusesInput>
    create: XOR<video_entityCreateWithoutStatusesInput, video_entityUncheckedCreateWithoutStatusesInput>
    where?: video_entityWhereInput
  }

  export type video_entityUpdateToOneWithWhereWithoutStatusesInput = {
    where?: video_entityWhereInput
    data: XOR<video_entityUpdateWithoutStatusesInput, video_entityUncheckedUpdateWithoutStatusesInput>
  }

  export type video_entityUpdateWithoutStatusesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumvideo_typeFieldUpdateOperationsInput | $Enums.video_type
    video_metadata?: video_metadataUpdateOneWithoutVideo_entityNestedInput
    views?: viewsUpdateManyWithoutVideo_entityNestedInput
    user?: usersUpdateOneRequiredWithoutVideo_entityNestedInput
  }

  export type video_entityUncheckedUpdateWithoutStatusesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumvideo_typeFieldUpdateOperationsInput | $Enums.video_type
    uploader?: StringFieldUpdateOperationsInput | string
    video_metadata?: video_metadataUncheckedUpdateOneWithoutVideo_entityNestedInput
    views?: viewsUncheckedUpdateManyWithoutVideo_entityNestedInput
  }

  export type video_entityCreateWithoutVideo_metadataInput = {
    id?: bigint | number
    type?: $Enums.video_type
    views?: viewsCreateNestedManyWithoutVideo_entityInput
    statuses?: statusesCreateNestedManyWithoutVideo_entityInput
    user: usersCreateNestedOneWithoutVideo_entityInput
  }

  export type video_entityUncheckedCreateWithoutVideo_metadataInput = {
    id?: bigint | number
    type?: $Enums.video_type
    uploader: string
    views?: viewsUncheckedCreateNestedManyWithoutVideo_entityInput
    statuses?: statusesUncheckedCreateNestedManyWithoutVideo_entityInput
  }

  export type video_entityCreateOrConnectWithoutVideo_metadataInput = {
    where: video_entityWhereUniqueInput
    create: XOR<video_entityCreateWithoutVideo_metadataInput, video_entityUncheckedCreateWithoutVideo_metadataInput>
  }

  export type video_titlesCreateWithoutVideo_metadataInput = {
    id?: bigint | number
    content: string
  }

  export type video_titlesUncheckedCreateWithoutVideo_metadataInput = {
    id?: bigint | number
    content: string
  }

  export type video_titlesCreateOrConnectWithoutVideo_metadataInput = {
    where: video_titlesWhereUniqueInput
    create: XOR<video_titlesCreateWithoutVideo_metadataInput, video_titlesUncheckedCreateWithoutVideo_metadataInput>
  }

  export type video_titlesCreateManyVideo_metadataInputEnvelope = {
    data: video_titlesCreateManyVideo_metadataInput | video_titlesCreateManyVideo_metadataInput[]
    skipDuplicates?: boolean
  }

  export type video_descriptionCreateWithoutVideo_metadataInput = {
    id?: bigint | number
    content: string
  }

  export type video_descriptionUncheckedCreateWithoutVideo_metadataInput = {
    id?: bigint | number
    content: string
  }

  export type video_descriptionCreateOrConnectWithoutVideo_metadataInput = {
    where: video_descriptionWhereUniqueInput
    create: XOR<video_descriptionCreateWithoutVideo_metadataInput, video_descriptionUncheckedCreateWithoutVideo_metadataInput>
  }

  export type video_descriptionCreateManyVideo_metadataInputEnvelope = {
    data: video_descriptionCreateManyVideo_metadataInput | video_descriptionCreateManyVideo_metadataInput[]
    skipDuplicates?: boolean
  }

  export type video_entityUpsertWithoutVideo_metadataInput = {
    update: XOR<video_entityUpdateWithoutVideo_metadataInput, video_entityUncheckedUpdateWithoutVideo_metadataInput>
    create: XOR<video_entityCreateWithoutVideo_metadataInput, video_entityUncheckedCreateWithoutVideo_metadataInput>
    where?: video_entityWhereInput
  }

  export type video_entityUpdateToOneWithWhereWithoutVideo_metadataInput = {
    where?: video_entityWhereInput
    data: XOR<video_entityUpdateWithoutVideo_metadataInput, video_entityUncheckedUpdateWithoutVideo_metadataInput>
  }

  export type video_entityUpdateWithoutVideo_metadataInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumvideo_typeFieldUpdateOperationsInput | $Enums.video_type
    views?: viewsUpdateManyWithoutVideo_entityNestedInput
    statuses?: statusesUpdateManyWithoutVideo_entityNestedInput
    user?: usersUpdateOneRequiredWithoutVideo_entityNestedInput
  }

  export type video_entityUncheckedUpdateWithoutVideo_metadataInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumvideo_typeFieldUpdateOperationsInput | $Enums.video_type
    uploader?: StringFieldUpdateOperationsInput | string
    views?: viewsUncheckedUpdateManyWithoutVideo_entityNestedInput
    statuses?: statusesUncheckedUpdateManyWithoutVideo_entityNestedInput
  }

  export type video_titlesUpsertWithWhereUniqueWithoutVideo_metadataInput = {
    where: video_titlesWhereUniqueInput
    update: XOR<video_titlesUpdateWithoutVideo_metadataInput, video_titlesUncheckedUpdateWithoutVideo_metadataInput>
    create: XOR<video_titlesCreateWithoutVideo_metadataInput, video_titlesUncheckedCreateWithoutVideo_metadataInput>
  }

  export type video_titlesUpdateWithWhereUniqueWithoutVideo_metadataInput = {
    where: video_titlesWhereUniqueInput
    data: XOR<video_titlesUpdateWithoutVideo_metadataInput, video_titlesUncheckedUpdateWithoutVideo_metadataInput>
  }

  export type video_titlesUpdateManyWithWhereWithoutVideo_metadataInput = {
    where: video_titlesScalarWhereInput
    data: XOR<video_titlesUpdateManyMutationInput, video_titlesUncheckedUpdateManyWithoutVideo_metadataInput>
  }

  export type video_titlesScalarWhereInput = {
    AND?: video_titlesScalarWhereInput | video_titlesScalarWhereInput[]
    OR?: video_titlesScalarWhereInput[]
    NOT?: video_titlesScalarWhereInput | video_titlesScalarWhereInput[]
    id?: BigIntFilter<"video_titles"> | bigint | number
    video?: BigIntFilter<"video_titles"> | bigint | number
    content?: StringFilter<"video_titles"> | string
  }

  export type video_descriptionUpsertWithWhereUniqueWithoutVideo_metadataInput = {
    where: video_descriptionWhereUniqueInput
    update: XOR<video_descriptionUpdateWithoutVideo_metadataInput, video_descriptionUncheckedUpdateWithoutVideo_metadataInput>
    create: XOR<video_descriptionCreateWithoutVideo_metadataInput, video_descriptionUncheckedCreateWithoutVideo_metadataInput>
  }

  export type video_descriptionUpdateWithWhereUniqueWithoutVideo_metadataInput = {
    where: video_descriptionWhereUniqueInput
    data: XOR<video_descriptionUpdateWithoutVideo_metadataInput, video_descriptionUncheckedUpdateWithoutVideo_metadataInput>
  }

  export type video_descriptionUpdateManyWithWhereWithoutVideo_metadataInput = {
    where: video_descriptionScalarWhereInput
    data: XOR<video_descriptionUpdateManyMutationInput, video_descriptionUncheckedUpdateManyWithoutVideo_metadataInput>
  }

  export type video_descriptionScalarWhereInput = {
    AND?: video_descriptionScalarWhereInput | video_descriptionScalarWhereInput[]
    OR?: video_descriptionScalarWhereInput[]
    NOT?: video_descriptionScalarWhereInput | video_descriptionScalarWhereInput[]
    id?: BigIntFilter<"video_description"> | bigint | number
    video?: BigIntFilter<"video_description"> | bigint | number
    content?: StringFilter<"video_description"> | string
  }

  export type video_metadataCreateWithoutTitleInput = {
    id?: bigint | number
    length_ms: bigint | number
    file_size: bigint | number
    uploader: string
    video_entity: video_entityCreateNestedOneWithoutVideo_metadataInput
    description?: video_descriptionCreateNestedManyWithoutVideo_metadataInput
  }

  export type video_metadataUncheckedCreateWithoutTitleInput = {
    id?: bigint | number
    video: bigint | number
    length_ms: bigint | number
    file_size: bigint | number
    uploader: string
    description?: video_descriptionUncheckedCreateNestedManyWithoutVideo_metadataInput
  }

  export type video_metadataCreateOrConnectWithoutTitleInput = {
    where: video_metadataWhereUniqueInput
    create: XOR<video_metadataCreateWithoutTitleInput, video_metadataUncheckedCreateWithoutTitleInput>
  }

  export type video_metadataUpsertWithoutTitleInput = {
    update: XOR<video_metadataUpdateWithoutTitleInput, video_metadataUncheckedUpdateWithoutTitleInput>
    create: XOR<video_metadataCreateWithoutTitleInput, video_metadataUncheckedCreateWithoutTitleInput>
    where?: video_metadataWhereInput
  }

  export type video_metadataUpdateToOneWithWhereWithoutTitleInput = {
    where?: video_metadataWhereInput
    data: XOR<video_metadataUpdateWithoutTitleInput, video_metadataUncheckedUpdateWithoutTitleInput>
  }

  export type video_metadataUpdateWithoutTitleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    length_ms?: BigIntFieldUpdateOperationsInput | bigint | number
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    uploader?: StringFieldUpdateOperationsInput | string
    video_entity?: video_entityUpdateOneRequiredWithoutVideo_metadataNestedInput
    description?: video_descriptionUpdateManyWithoutVideo_metadataNestedInput
  }

  export type video_metadataUncheckedUpdateWithoutTitleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: BigIntFieldUpdateOperationsInput | bigint | number
    length_ms?: BigIntFieldUpdateOperationsInput | bigint | number
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    uploader?: StringFieldUpdateOperationsInput | string
    description?: video_descriptionUncheckedUpdateManyWithoutVideo_metadataNestedInput
  }

  export type video_metadataCreateWithoutDescriptionInput = {
    id?: bigint | number
    length_ms: bigint | number
    file_size: bigint | number
    uploader: string
    video_entity: video_entityCreateNestedOneWithoutVideo_metadataInput
    title?: video_titlesCreateNestedManyWithoutVideo_metadataInput
  }

  export type video_metadataUncheckedCreateWithoutDescriptionInput = {
    id?: bigint | number
    video: bigint | number
    length_ms: bigint | number
    file_size: bigint | number
    uploader: string
    title?: video_titlesUncheckedCreateNestedManyWithoutVideo_metadataInput
  }

  export type video_metadataCreateOrConnectWithoutDescriptionInput = {
    where: video_metadataWhereUniqueInput
    create: XOR<video_metadataCreateWithoutDescriptionInput, video_metadataUncheckedCreateWithoutDescriptionInput>
  }

  export type video_metadataUpsertWithoutDescriptionInput = {
    update: XOR<video_metadataUpdateWithoutDescriptionInput, video_metadataUncheckedUpdateWithoutDescriptionInput>
    create: XOR<video_metadataCreateWithoutDescriptionInput, video_metadataUncheckedCreateWithoutDescriptionInput>
    where?: video_metadataWhereInput
  }

  export type video_metadataUpdateToOneWithWhereWithoutDescriptionInput = {
    where?: video_metadataWhereInput
    data: XOR<video_metadataUpdateWithoutDescriptionInput, video_metadataUncheckedUpdateWithoutDescriptionInput>
  }

  export type video_metadataUpdateWithoutDescriptionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    length_ms?: BigIntFieldUpdateOperationsInput | bigint | number
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    uploader?: StringFieldUpdateOperationsInput | string
    video_entity?: video_entityUpdateOneRequiredWithoutVideo_metadataNestedInput
    title?: video_titlesUpdateManyWithoutVideo_metadataNestedInput
  }

  export type video_metadataUncheckedUpdateWithoutDescriptionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: BigIntFieldUpdateOperationsInput | bigint | number
    length_ms?: BigIntFieldUpdateOperationsInput | bigint | number
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    uploader?: StringFieldUpdateOperationsInput | string
    title?: video_titlesUncheckedUpdateManyWithoutVideo_metadataNestedInput
  }

  export type video_entityCreateWithoutViewsInput = {
    id?: bigint | number
    type?: $Enums.video_type
    video_metadata?: video_metadataCreateNestedOneWithoutVideo_entityInput
    statuses?: statusesCreateNestedManyWithoutVideo_entityInput
    user: usersCreateNestedOneWithoutVideo_entityInput
  }

  export type video_entityUncheckedCreateWithoutViewsInput = {
    id?: bigint | number
    type?: $Enums.video_type
    uploader: string
    video_metadata?: video_metadataUncheckedCreateNestedOneWithoutVideo_entityInput
    statuses?: statusesUncheckedCreateNestedManyWithoutVideo_entityInput
  }

  export type video_entityCreateOrConnectWithoutViewsInput = {
    where: video_entityWhereUniqueInput
    create: XOR<video_entityCreateWithoutViewsInput, video_entityUncheckedCreateWithoutViewsInput>
  }

  export type video_entityUpsertWithoutViewsInput = {
    update: XOR<video_entityUpdateWithoutViewsInput, video_entityUncheckedUpdateWithoutViewsInput>
    create: XOR<video_entityCreateWithoutViewsInput, video_entityUncheckedCreateWithoutViewsInput>
    where?: video_entityWhereInput
  }

  export type video_entityUpdateToOneWithWhereWithoutViewsInput = {
    where?: video_entityWhereInput
    data: XOR<video_entityUpdateWithoutViewsInput, video_entityUncheckedUpdateWithoutViewsInput>
  }

  export type video_entityUpdateWithoutViewsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumvideo_typeFieldUpdateOperationsInput | $Enums.video_type
    video_metadata?: video_metadataUpdateOneWithoutVideo_entityNestedInput
    statuses?: statusesUpdateManyWithoutVideo_entityNestedInput
    user?: usersUpdateOneRequiredWithoutVideo_entityNestedInput
  }

  export type video_entityUncheckedUpdateWithoutViewsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumvideo_typeFieldUpdateOperationsInput | $Enums.video_type
    uploader?: StringFieldUpdateOperationsInput | string
    video_metadata?: video_metadataUncheckedUpdateOneWithoutVideo_entityNestedInput
    statuses?: statusesUncheckedUpdateManyWithoutVideo_entityNestedInput
  }

  export type subtitleCreateWithoutSubtitles_containerInput = {
    id?: bigint | number
    timestamp: bigint | number
    content: string
  }

  export type subtitleUncheckedCreateWithoutSubtitles_containerInput = {
    id?: bigint | number
    timestamp: bigint | number
    content: string
  }

  export type subtitleCreateOrConnectWithoutSubtitles_containerInput = {
    where: subtitleWhereUniqueInput
    create: XOR<subtitleCreateWithoutSubtitles_containerInput, subtitleUncheckedCreateWithoutSubtitles_containerInput>
  }

  export type subtitleCreateManySubtitles_containerInputEnvelope = {
    data: subtitleCreateManySubtitles_containerInput | subtitleCreateManySubtitles_containerInput[]
    skipDuplicates?: boolean
  }

  export type subtitleUpsertWithWhereUniqueWithoutSubtitles_containerInput = {
    where: subtitleWhereUniqueInput
    update: XOR<subtitleUpdateWithoutSubtitles_containerInput, subtitleUncheckedUpdateWithoutSubtitles_containerInput>
    create: XOR<subtitleCreateWithoutSubtitles_containerInput, subtitleUncheckedCreateWithoutSubtitles_containerInput>
  }

  export type subtitleUpdateWithWhereUniqueWithoutSubtitles_containerInput = {
    where: subtitleWhereUniqueInput
    data: XOR<subtitleUpdateWithoutSubtitles_containerInput, subtitleUncheckedUpdateWithoutSubtitles_containerInput>
  }

  export type subtitleUpdateManyWithWhereWithoutSubtitles_containerInput = {
    where: subtitleScalarWhereInput
    data: XOR<subtitleUpdateManyMutationInput, subtitleUncheckedUpdateManyWithoutSubtitles_containerInput>
  }

  export type subtitleScalarWhereInput = {
    AND?: subtitleScalarWhereInput | subtitleScalarWhereInput[]
    OR?: subtitleScalarWhereInput[]
    NOT?: subtitleScalarWhereInput | subtitleScalarWhereInput[]
    id?: BigIntFilter<"subtitle"> | bigint | number
    container?: BigIntFilter<"subtitle"> | bigint | number
    timestamp?: BigIntFilter<"subtitle"> | bigint | number
    content?: StringFilter<"subtitle"> | string
  }

  export type subtitles_containerCreateWithoutSubtitlesInput = {
    id?: bigint | number
    lang: string
  }

  export type subtitles_containerUncheckedCreateWithoutSubtitlesInput = {
    id?: bigint | number
    lang: string
  }

  export type subtitles_containerCreateOrConnectWithoutSubtitlesInput = {
    where: subtitles_containerWhereUniqueInput
    create: XOR<subtitles_containerCreateWithoutSubtitlesInput, subtitles_containerUncheckedCreateWithoutSubtitlesInput>
  }

  export type subtitles_containerUpsertWithoutSubtitlesInput = {
    update: XOR<subtitles_containerUpdateWithoutSubtitlesInput, subtitles_containerUncheckedUpdateWithoutSubtitlesInput>
    create: XOR<subtitles_containerCreateWithoutSubtitlesInput, subtitles_containerUncheckedCreateWithoutSubtitlesInput>
    where?: subtitles_containerWhereInput
  }

  export type subtitles_containerUpdateToOneWithWhereWithoutSubtitlesInput = {
    where?: subtitles_containerWhereInput
    data: XOR<subtitles_containerUpdateWithoutSubtitlesInput, subtitles_containerUncheckedUpdateWithoutSubtitlesInput>
  }

  export type subtitles_containerUpdateWithoutSubtitlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type subtitles_containerUncheckedUpdateWithoutSubtitlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    lang?: StringFieldUpdateOperationsInput | string
  }

  export type cat_namesCreateWithoutCategoriesInput = {
    id?: bigint | number
    name?: cat_namesCreatenameInput | string[]
  }

  export type cat_namesUncheckedCreateWithoutCategoriesInput = {
    id?: bigint | number
    name?: cat_namesCreatenameInput | string[]
  }

  export type cat_namesCreateOrConnectWithoutCategoriesInput = {
    where: cat_namesWhereUniqueInput
    create: XOR<cat_namesCreateWithoutCategoriesInput, cat_namesUncheckedCreateWithoutCategoriesInput>
  }

  export type cat_namesCreateManyCategoriesInputEnvelope = {
    data: cat_namesCreateManyCategoriesInput | cat_namesCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type cat_namesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: cat_namesWhereUniqueInput
    update: XOR<cat_namesUpdateWithoutCategoriesInput, cat_namesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<cat_namesCreateWithoutCategoriesInput, cat_namesUncheckedCreateWithoutCategoriesInput>
  }

  export type cat_namesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: cat_namesWhereUniqueInput
    data: XOR<cat_namesUpdateWithoutCategoriesInput, cat_namesUncheckedUpdateWithoutCategoriesInput>
  }

  export type cat_namesUpdateManyWithWhereWithoutCategoriesInput = {
    where: cat_namesScalarWhereInput
    data: XOR<cat_namesUpdateManyMutationInput, cat_namesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type cat_namesScalarWhereInput = {
    AND?: cat_namesScalarWhereInput | cat_namesScalarWhereInput[]
    OR?: cat_namesScalarWhereInput[]
    NOT?: cat_namesScalarWhereInput | cat_namesScalarWhereInput[]
    id?: BigIntFilter<"cat_names"> | bigint | number
    name?: StringNullableListFilter<"cat_names">
    owner?: BigIntFilter<"cat_names"> | bigint | number
  }

  export type categoriesCreateWithoutNameInput = {
    id?: bigint | number
    parent: bigint | number
    child: bigint | number
  }

  export type categoriesUncheckedCreateWithoutNameInput = {
    id?: bigint | number
    parent: bigint | number
    child: bigint | number
  }

  export type categoriesCreateOrConnectWithoutNameInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutNameInput, categoriesUncheckedCreateWithoutNameInput>
  }

  export type categoriesUpsertWithoutNameInput = {
    update: XOR<categoriesUpdateWithoutNameInput, categoriesUncheckedUpdateWithoutNameInput>
    create: XOR<categoriesCreateWithoutNameInput, categoriesUncheckedCreateWithoutNameInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutNameInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutNameInput, categoriesUncheckedUpdateWithoutNameInput>
  }

  export type categoriesUpdateWithoutNameInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    parent?: BigIntFieldUpdateOperationsInput | bigint | number
    child?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type categoriesUncheckedUpdateWithoutNameInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    parent?: BigIntFieldUpdateOperationsInput | bigint | number
    child?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type video_entityCreateWithoutUserInput = {
    id?: bigint | number
    type?: $Enums.video_type
    video_metadata?: video_metadataCreateNestedOneWithoutVideo_entityInput
    views?: viewsCreateNestedManyWithoutVideo_entityInput
    statuses?: statusesCreateNestedManyWithoutVideo_entityInput
  }

  export type video_entityUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    type?: $Enums.video_type
    video_metadata?: video_metadataUncheckedCreateNestedOneWithoutVideo_entityInput
    views?: viewsUncheckedCreateNestedManyWithoutVideo_entityInput
    statuses?: statusesUncheckedCreateNestedManyWithoutVideo_entityInput
  }

  export type video_entityCreateOrConnectWithoutUserInput = {
    where: video_entityWhereUniqueInput
    create: XOR<video_entityCreateWithoutUserInput, video_entityUncheckedCreateWithoutUserInput>
  }

  export type video_entityCreateManyUserInputEnvelope = {
    data: video_entityCreateManyUserInput | video_entityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type video_entityUpsertWithWhereUniqueWithoutUserInput = {
    where: video_entityWhereUniqueInput
    update: XOR<video_entityUpdateWithoutUserInput, video_entityUncheckedUpdateWithoutUserInput>
    create: XOR<video_entityCreateWithoutUserInput, video_entityUncheckedCreateWithoutUserInput>
  }

  export type video_entityUpdateWithWhereUniqueWithoutUserInput = {
    where: video_entityWhereUniqueInput
    data: XOR<video_entityUpdateWithoutUserInput, video_entityUncheckedUpdateWithoutUserInput>
  }

  export type video_entityUpdateManyWithWhereWithoutUserInput = {
    where: video_entityScalarWhereInput
    data: XOR<video_entityUpdateManyMutationInput, video_entityUncheckedUpdateManyWithoutUserInput>
  }

  export type video_entityScalarWhereInput = {
    AND?: video_entityScalarWhereInput | video_entityScalarWhereInput[]
    OR?: video_entityScalarWhereInput[]
    NOT?: video_entityScalarWhereInput | video_entityScalarWhereInput[]
    id?: BigIntFilter<"video_entity"> | bigint | number
    type?: Enumvideo_typeFilter<"video_entity"> | $Enums.video_type
    uploader?: UuidFilter<"video_entity"> | string
  }

  export type viewsCreateManyVideo_entityInput = {
    id?: bigint | number
  }

  export type statusesCreateManyVideo_entityInput = {
    id?: bigint | number
    current: $Enums.video_status
  }

  export type viewsUpdateWithoutVideo_entityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type viewsUncheckedUpdateWithoutVideo_entityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type viewsUncheckedUpdateManyWithoutVideo_entityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type statusesUpdateWithoutVideo_entityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    current?: Enumvideo_statusFieldUpdateOperationsInput | $Enums.video_status
  }

  export type statusesUncheckedUpdateWithoutVideo_entityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    current?: Enumvideo_statusFieldUpdateOperationsInput | $Enums.video_status
  }

  export type statusesUncheckedUpdateManyWithoutVideo_entityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    current?: Enumvideo_statusFieldUpdateOperationsInput | $Enums.video_status
  }

  export type video_titlesCreateManyVideo_metadataInput = {
    id?: bigint | number
    content: string
  }

  export type video_descriptionCreateManyVideo_metadataInput = {
    id?: bigint | number
    content: string
  }

  export type video_titlesUpdateWithoutVideo_metadataInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type video_titlesUncheckedUpdateWithoutVideo_metadataInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type video_titlesUncheckedUpdateManyWithoutVideo_metadataInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type video_descriptionUpdateWithoutVideo_metadataInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type video_descriptionUncheckedUpdateWithoutVideo_metadataInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type video_descriptionUncheckedUpdateManyWithoutVideo_metadataInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type subtitleCreateManySubtitles_containerInput = {
    id?: bigint | number
    timestamp: bigint | number
    content: string
  }

  export type subtitleUpdateWithoutSubtitles_containerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type subtitleUncheckedUpdateWithoutSubtitles_containerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type subtitleUncheckedUpdateManyWithoutSubtitles_containerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type cat_namesCreateManyCategoriesInput = {
    id?: bigint | number
    name?: cat_namesCreatenameInput | string[]
  }

  export type cat_namesUpdateWithoutCategoriesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: cat_namesUpdatenameInput | string[]
  }

  export type cat_namesUncheckedUpdateWithoutCategoriesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: cat_namesUpdatenameInput | string[]
  }

  export type cat_namesUncheckedUpdateManyWithoutCategoriesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: cat_namesUpdatenameInput | string[]
  }

  export type video_entityCreateManyUserInput = {
    id?: bigint | number
    type?: $Enums.video_type
  }

  export type video_entityUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumvideo_typeFieldUpdateOperationsInput | $Enums.video_type
    video_metadata?: video_metadataUpdateOneWithoutVideo_entityNestedInput
    views?: viewsUpdateManyWithoutVideo_entityNestedInput
    statuses?: statusesUpdateManyWithoutVideo_entityNestedInput
  }

  export type video_entityUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumvideo_typeFieldUpdateOperationsInput | $Enums.video_type
    video_metadata?: video_metadataUncheckedUpdateOneWithoutVideo_entityNestedInput
    views?: viewsUncheckedUpdateManyWithoutVideo_entityNestedInput
    statuses?: statusesUncheckedUpdateManyWithoutVideo_entityNestedInput
  }

  export type video_entityUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumvideo_typeFieldUpdateOperationsInput | $Enums.video_type
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Video_entityCountOutputTypeDefaultArgs instead
     */
    export type Video_entityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Video_entityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Video_metadataCountOutputTypeDefaultArgs instead
     */
    export type Video_metadataCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Video_metadataCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Subtitles_containerCountOutputTypeDefaultArgs instead
     */
    export type Subtitles_containerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Subtitles_containerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriesCountOutputTypeDefaultArgs instead
     */
    export type CategoriesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use video_entityDefaultArgs instead
     */
    export type video_entityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = video_entityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use statusesDefaultArgs instead
     */
    export type statusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = statusesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use video_metadataDefaultArgs instead
     */
    export type video_metadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = video_metadataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use video_titlesDefaultArgs instead
     */
    export type video_titlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = video_titlesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use video_descriptionDefaultArgs instead
     */
    export type video_descriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = video_descriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use viewsDefaultArgs instead
     */
    export type viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = viewsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use subtitles_containerDefaultArgs instead
     */
    export type subtitles_containerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = subtitles_containerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use subtitleDefaultArgs instead
     */
    export type subtitleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = subtitleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categoriesDefaultArgs instead
     */
    export type categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categoriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cat_namesDefaultArgs instead
     */
    export type cat_namesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cat_namesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}