
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
 * Model video
 * 
 */
export type video = $Result.DefaultSelection<Prisma.$videoPayload>
/**
 * Model thumbnail
 * 
 */
export type thumbnail = $Result.DefaultSelection<Prisma.$thumbnailPayload>
/**
 * Model low_quality
 * 
 */
export type low_quality = $Result.DefaultSelection<Prisma.$low_qualityPayload>
/**
 * Model chunks
 * 
 */
export type chunks = $Result.DefaultSelection<Prisma.$chunksPayload>
/**
 * Model mid_quality
 * 
 */
export type mid_quality = $Result.DefaultSelection<Prisma.$mid_qualityPayload>
/**
 * Model hq
 * 
 */
export type hq = $Result.DefaultSelection<Prisma.$hqPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Videos
 * const videos = await prisma.video.findMany()
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
   * // Fetch zero or more Videos
   * const videos = await prisma.video.findMany()
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
   * `prisma.video`: Exposes CRUD operations for the **video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.videoDelegate<ExtArgs>;

  /**
   * `prisma.thumbnail`: Exposes CRUD operations for the **thumbnail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Thumbnails
    * const thumbnails = await prisma.thumbnail.findMany()
    * ```
    */
  get thumbnail(): Prisma.thumbnailDelegate<ExtArgs>;

  /**
   * `prisma.low_quality`: Exposes CRUD operations for the **low_quality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Low_qualities
    * const low_qualities = await prisma.low_quality.findMany()
    * ```
    */
  get low_quality(): Prisma.low_qualityDelegate<ExtArgs>;

  /**
   * `prisma.chunks`: Exposes CRUD operations for the **chunks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chunks
    * const chunks = await prisma.chunks.findMany()
    * ```
    */
  get chunks(): Prisma.chunksDelegate<ExtArgs>;

  /**
   * `prisma.mid_quality`: Exposes CRUD operations for the **mid_quality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mid_qualities
    * const mid_qualities = await prisma.mid_quality.findMany()
    * ```
    */
  get mid_quality(): Prisma.mid_qualityDelegate<ExtArgs>;

  /**
   * `prisma.hq`: Exposes CRUD operations for the **hq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hqs
    * const hqs = await prisma.hq.findMany()
    * ```
    */
  get hq(): Prisma.hqDelegate<ExtArgs>;
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
    video: 'video',
    thumbnail: 'thumbnail',
    low_quality: 'low_quality',
    chunks: 'chunks',
    mid_quality: 'mid_quality',
    hq: 'hq'
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
      modelProps: 'video' | 'thumbnail' | 'low_quality' | 'chunks' | 'mid_quality' | 'hq'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      video: {
        payload: Prisma.$videoPayload<ExtArgs>
        fields: Prisma.videoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.videoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$videoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.videoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$videoPayload>
          }
          findFirst: {
            args: Prisma.videoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$videoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.videoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$videoPayload>
          }
          findMany: {
            args: Prisma.videoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$videoPayload>[]
          }
          create: {
            args: Prisma.videoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$videoPayload>
          }
          createMany: {
            args: Prisma.videoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.videoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$videoPayload>
          }
          update: {
            args: Prisma.videoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$videoPayload>
          }
          deleteMany: {
            args: Prisma.videoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.videoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.videoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$videoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.videoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.videoCountArgs<ExtArgs>,
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      thumbnail: {
        payload: Prisma.$thumbnailPayload<ExtArgs>
        fields: Prisma.thumbnailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.thumbnailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$thumbnailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.thumbnailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$thumbnailPayload>
          }
          findFirst: {
            args: Prisma.thumbnailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$thumbnailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.thumbnailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$thumbnailPayload>
          }
          findMany: {
            args: Prisma.thumbnailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$thumbnailPayload>[]
          }
          create: {
            args: Prisma.thumbnailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$thumbnailPayload>
          }
          createMany: {
            args: Prisma.thumbnailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.thumbnailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$thumbnailPayload>
          }
          update: {
            args: Prisma.thumbnailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$thumbnailPayload>
          }
          deleteMany: {
            args: Prisma.thumbnailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.thumbnailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.thumbnailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$thumbnailPayload>
          }
          aggregate: {
            args: Prisma.ThumbnailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateThumbnail>
          }
          groupBy: {
            args: Prisma.thumbnailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ThumbnailGroupByOutputType>[]
          }
          count: {
            args: Prisma.thumbnailCountArgs<ExtArgs>,
            result: $Utils.Optional<ThumbnailCountAggregateOutputType> | number
          }
        }
      }
      low_quality: {
        payload: Prisma.$low_qualityPayload<ExtArgs>
        fields: Prisma.low_qualityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.low_qualityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$low_qualityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.low_qualityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$low_qualityPayload>
          }
          findFirst: {
            args: Prisma.low_qualityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$low_qualityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.low_qualityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$low_qualityPayload>
          }
          findMany: {
            args: Prisma.low_qualityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$low_qualityPayload>[]
          }
          create: {
            args: Prisma.low_qualityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$low_qualityPayload>
          }
          createMany: {
            args: Prisma.low_qualityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.low_qualityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$low_qualityPayload>
          }
          update: {
            args: Prisma.low_qualityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$low_qualityPayload>
          }
          deleteMany: {
            args: Prisma.low_qualityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.low_qualityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.low_qualityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$low_qualityPayload>
          }
          aggregate: {
            args: Prisma.Low_qualityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLow_quality>
          }
          groupBy: {
            args: Prisma.low_qualityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Low_qualityGroupByOutputType>[]
          }
          count: {
            args: Prisma.low_qualityCountArgs<ExtArgs>,
            result: $Utils.Optional<Low_qualityCountAggregateOutputType> | number
          }
        }
      }
      chunks: {
        payload: Prisma.$chunksPayload<ExtArgs>
        fields: Prisma.chunksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chunksFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$chunksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chunksFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$chunksPayload>
          }
          findFirst: {
            args: Prisma.chunksFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$chunksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chunksFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$chunksPayload>
          }
          findMany: {
            args: Prisma.chunksFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$chunksPayload>[]
          }
          create: {
            args: Prisma.chunksCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$chunksPayload>
          }
          createMany: {
            args: Prisma.chunksCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.chunksDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$chunksPayload>
          }
          update: {
            args: Prisma.chunksUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$chunksPayload>
          }
          deleteMany: {
            args: Prisma.chunksDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.chunksUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.chunksUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$chunksPayload>
          }
          aggregate: {
            args: Prisma.ChunksAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChunks>
          }
          groupBy: {
            args: Prisma.chunksGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChunksGroupByOutputType>[]
          }
          count: {
            args: Prisma.chunksCountArgs<ExtArgs>,
            result: $Utils.Optional<ChunksCountAggregateOutputType> | number
          }
        }
      }
      mid_quality: {
        payload: Prisma.$mid_qualityPayload<ExtArgs>
        fields: Prisma.mid_qualityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mid_qualityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mid_qualityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mid_qualityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mid_qualityPayload>
          }
          findFirst: {
            args: Prisma.mid_qualityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mid_qualityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mid_qualityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mid_qualityPayload>
          }
          findMany: {
            args: Prisma.mid_qualityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mid_qualityPayload>[]
          }
          create: {
            args: Prisma.mid_qualityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mid_qualityPayload>
          }
          createMany: {
            args: Prisma.mid_qualityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.mid_qualityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mid_qualityPayload>
          }
          update: {
            args: Prisma.mid_qualityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mid_qualityPayload>
          }
          deleteMany: {
            args: Prisma.mid_qualityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.mid_qualityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.mid_qualityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mid_qualityPayload>
          }
          aggregate: {
            args: Prisma.Mid_qualityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMid_quality>
          }
          groupBy: {
            args: Prisma.mid_qualityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Mid_qualityGroupByOutputType>[]
          }
          count: {
            args: Prisma.mid_qualityCountArgs<ExtArgs>,
            result: $Utils.Optional<Mid_qualityCountAggregateOutputType> | number
          }
        }
      }
      hq: {
        payload: Prisma.$hqPayload<ExtArgs>
        fields: Prisma.hqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hqFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hqFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hqPayload>
          }
          findFirst: {
            args: Prisma.hqFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hqFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hqPayload>
          }
          findMany: {
            args: Prisma.hqFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hqPayload>[]
          }
          create: {
            args: Prisma.hqCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hqPayload>
          }
          createMany: {
            args: Prisma.hqCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.hqDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hqPayload>
          }
          update: {
            args: Prisma.hqUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hqPayload>
          }
          deleteMany: {
            args: Prisma.hqDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.hqUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.hqUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$hqPayload>
          }
          aggregate: {
            args: Prisma.HqAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHq>
          }
          groupBy: {
            args: Prisma.hqGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HqGroupByOutputType>[]
          }
          count: {
            args: Prisma.hqCountArgs<ExtArgs>,
            result: $Utils.Optional<HqCountAggregateOutputType> | number
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
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    low_quality: number
    mid_quality: number
    hq: number
    thumbnail: number
  }

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    low_quality?: boolean | VideoCountOutputTypeCountLow_qualityArgs
    mid_quality?: boolean | VideoCountOutputTypeCountMid_qualityArgs
    hq?: boolean | VideoCountOutputTypeCountHqArgs
    thumbnail?: boolean | VideoCountOutputTypeCountThumbnailArgs
  }

  // Custom InputTypes

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountLow_qualityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: low_qualityWhereInput
  }


  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountMid_qualityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mid_qualityWhereInput
  }


  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountHqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hqWhereInput
  }


  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountThumbnailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: thumbnailWhereInput
  }



  /**
   * Count Type Low_qualityCountOutputType
   */

  export type Low_qualityCountOutputType = {
    chunks: number
  }

  export type Low_qualityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunks?: boolean | Low_qualityCountOutputTypeCountChunksArgs
  }

  // Custom InputTypes

  /**
   * Low_qualityCountOutputType without action
   */
  export type Low_qualityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Low_qualityCountOutputType
     */
    select?: Low_qualityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Low_qualityCountOutputType without action
   */
  export type Low_qualityCountOutputTypeCountChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chunksWhereInput
  }



  /**
   * Count Type Mid_qualityCountOutputType
   */

  export type Mid_qualityCountOutputType = {
    chunks: number
  }

  export type Mid_qualityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunks?: boolean | Mid_qualityCountOutputTypeCountChunksArgs
  }

  // Custom InputTypes

  /**
   * Mid_qualityCountOutputType without action
   */
  export type Mid_qualityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mid_qualityCountOutputType
     */
    select?: Mid_qualityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Mid_qualityCountOutputType without action
   */
  export type Mid_qualityCountOutputTypeCountChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chunksWhereInput
  }



  /**
   * Count Type HqCountOutputType
   */

  export type HqCountOutputType = {
    chunks: number
  }

  export type HqCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunks?: boolean | HqCountOutputTypeCountChunksArgs
  }

  // Custom InputTypes

  /**
   * HqCountOutputType without action
   */
  export type HqCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HqCountOutputType
     */
    select?: HqCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * HqCountOutputType without action
   */
  export type HqCountOutputTypeCountChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chunksWhereInput
  }



  /**
   * Models
   */

  /**
   * Model video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: bigint | null
  }

  export type VideoMinAggregateOutputType = {
    id: bigint | null
  }

  export type VideoMaxAggregateOutputType = {
    id: bigint | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video to aggregate.
     */
    where?: videoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: videoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type videoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videoWhereInput
    orderBy?: videoOrderByWithAggregationInput | videoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: videoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: bigint
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends videoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type videoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    low_quality?: boolean | video$low_qualityArgs<ExtArgs>
    mid_quality?: boolean | video$mid_qualityArgs<ExtArgs>
    hq?: boolean | video$hqArgs<ExtArgs>
    thumbnail?: boolean | video$thumbnailArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type videoSelectScalar = {
    id?: boolean
  }

  export type videoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    low_quality?: boolean | video$low_qualityArgs<ExtArgs>
    mid_quality?: boolean | video$mid_qualityArgs<ExtArgs>
    hq?: boolean | video$hqArgs<ExtArgs>
    thumbnail?: boolean | video$thumbnailArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $videoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "video"
    objects: {
      low_quality: Prisma.$low_qualityPayload<ExtArgs>[]
      mid_quality: Prisma.$mid_qualityPayload<ExtArgs>[]
      hq: Prisma.$hqPayload<ExtArgs>[]
      thumbnail: Prisma.$thumbnailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
    }, ExtArgs["result"]["video"]>
    composites: {}
  }


  type videoGetPayload<S extends boolean | null | undefined | videoDefaultArgs> = $Result.GetResult<Prisma.$videoPayload, S>

  type videoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<videoFindManyArgs, 'select' | 'include'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface videoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['video'], meta: { name: 'video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {videoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends videoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, videoFindUniqueArgs<ExtArgs>>
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Video that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {videoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends videoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, videoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends videoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, videoFindFirstArgs<ExtArgs>>
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends videoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, videoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends videoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, videoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Video.
     * @param {videoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
    **/
    create<T extends videoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, videoCreateArgs<ExtArgs>>
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Videos.
     *     @param {videoCreateManyArgs} args - Arguments to create many Videos.
     *     @example
     *     // Create many Videos
     *     const video = await prisma.video.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends videoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, videoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {videoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
    **/
    delete<T extends videoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, videoDeleteArgs<ExtArgs>>
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Video.
     * @param {videoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends videoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, videoUpdateArgs<ExtArgs>>
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Videos.
     * @param {videoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends videoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, videoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends videoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, videoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {videoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
    **/
    upsert<T extends videoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, videoUpsertArgs<ExtArgs>>
    ): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends videoCountArgs>(
      args?: Subset<T, videoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videoGroupByArgs} args - Group by arguments.
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
      T extends videoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: videoGroupByArgs['orderBy'] }
        : { orderBy?: videoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, videoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the video model
   */
  readonly fields: videoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__videoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    low_quality<T extends video$low_qualityArgs<ExtArgs> = {}>(args?: Subset<T, video$low_qualityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$low_qualityPayload<ExtArgs>, T, 'findMany'> | Null>;

    mid_quality<T extends video$mid_qualityArgs<ExtArgs> = {}>(args?: Subset<T, video$mid_qualityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mid_qualityPayload<ExtArgs>, T, 'findMany'> | Null>;

    hq<T extends video$hqArgs<ExtArgs> = {}>(args?: Subset<T, video$hqArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hqPayload<ExtArgs>, T, 'findMany'> | Null>;

    thumbnail<T extends video$thumbnailArgs<ExtArgs> = {}>(args?: Subset<T, video$thumbnailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$thumbnailPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the video model
   */ 
  interface videoFieldRefs {
    readonly id: FieldRef<"video", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * video findUnique
   */
  export type videoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * Filter, which video to fetch.
     */
    where: videoWhereUniqueInput
  }


  /**
   * video findUniqueOrThrow
   */
  export type videoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * Filter, which video to fetch.
     */
    where: videoWhereUniqueInput
  }


  /**
   * video findFirst
   */
  export type videoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * Filter, which video to fetch.
     */
    where?: videoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos.
     */
    cursor?: videoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }


  /**
   * video findFirstOrThrow
   */
  export type videoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * Filter, which video to fetch.
     */
    where?: videoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos.
     */
    cursor?: videoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }


  /**
   * video findMany
   */
  export type videoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videoOrderByWithRelationInput | videoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing videos.
     */
    cursor?: videoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }


  /**
   * video create
   */
  export type videoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * The data needed to create a video.
     */
    data?: XOR<videoCreateInput, videoUncheckedCreateInput>
  }


  /**
   * video createMany
   */
  export type videoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many videos.
     */
    data: videoCreateManyInput | videoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * video update
   */
  export type videoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * The data needed to update a video.
     */
    data: XOR<videoUpdateInput, videoUncheckedUpdateInput>
    /**
     * Choose, which video to update.
     */
    where: videoWhereUniqueInput
  }


  /**
   * video updateMany
   */
  export type videoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update videos.
     */
    data: XOR<videoUpdateManyMutationInput, videoUncheckedUpdateManyInput>
    /**
     * Filter which videos to update
     */
    where?: videoWhereInput
  }


  /**
   * video upsert
   */
  export type videoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * The filter to search for the video to update in case it exists.
     */
    where: videoWhereUniqueInput
    /**
     * In case the video found by the `where` argument doesn't exist, create a new video with this data.
     */
    create: XOR<videoCreateInput, videoUncheckedCreateInput>
    /**
     * In case the video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<videoUpdateInput, videoUncheckedUpdateInput>
  }


  /**
   * video delete
   */
  export type videoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null
    /**
     * Filter which video to delete.
     */
    where: videoWhereUniqueInput
  }


  /**
   * video deleteMany
   */
  export type videoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos to delete
     */
    where?: videoWhereInput
  }


  /**
   * video.low_quality
   */
  export type video$low_qualityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the low_quality
     */
    select?: low_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: low_qualityInclude<ExtArgs> | null
    where?: low_qualityWhereInput
    orderBy?: low_qualityOrderByWithRelationInput | low_qualityOrderByWithRelationInput[]
    cursor?: low_qualityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Low_qualityScalarFieldEnum | Low_qualityScalarFieldEnum[]
  }


  /**
   * video.mid_quality
   */
  export type video$mid_qualityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mid_quality
     */
    select?: mid_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mid_qualityInclude<ExtArgs> | null
    where?: mid_qualityWhereInput
    orderBy?: mid_qualityOrderByWithRelationInput | mid_qualityOrderByWithRelationInput[]
    cursor?: mid_qualityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Mid_qualityScalarFieldEnum | Mid_qualityScalarFieldEnum[]
  }


  /**
   * video.hq
   */
  export type video$hqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hq
     */
    select?: hqSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hqInclude<ExtArgs> | null
    where?: hqWhereInput
    orderBy?: hqOrderByWithRelationInput | hqOrderByWithRelationInput[]
    cursor?: hqWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HqScalarFieldEnum | HqScalarFieldEnum[]
  }


  /**
   * video.thumbnail
   */
  export type video$thumbnailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thumbnail
     */
    select?: thumbnailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: thumbnailInclude<ExtArgs> | null
    where?: thumbnailWhereInput
    orderBy?: thumbnailOrderByWithRelationInput | thumbnailOrderByWithRelationInput[]
    cursor?: thumbnailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThumbnailScalarFieldEnum | ThumbnailScalarFieldEnum[]
  }


  /**
   * video without action
   */
  export type videoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video
     */
    select?: videoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: videoInclude<ExtArgs> | null
  }



  /**
   * Model thumbnail
   */

  export type AggregateThumbnail = {
    _count: ThumbnailCountAggregateOutputType | null
    _avg: ThumbnailAvgAggregateOutputType | null
    _sum: ThumbnailSumAggregateOutputType | null
    _min: ThumbnailMinAggregateOutputType | null
    _max: ThumbnailMaxAggregateOutputType | null
  }

  export type ThumbnailAvgAggregateOutputType = {
    id: number | null
    owner: number | null
  }

  export type ThumbnailSumAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type ThumbnailMinAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
    contents: Buffer | null
  }

  export type ThumbnailMaxAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
    contents: Buffer | null
  }

  export type ThumbnailCountAggregateOutputType = {
    id: number
    owner: number
    contents: number
    _all: number
  }


  export type ThumbnailAvgAggregateInputType = {
    id?: true
    owner?: true
  }

  export type ThumbnailSumAggregateInputType = {
    id?: true
    owner?: true
  }

  export type ThumbnailMinAggregateInputType = {
    id?: true
    owner?: true
    contents?: true
  }

  export type ThumbnailMaxAggregateInputType = {
    id?: true
    owner?: true
    contents?: true
  }

  export type ThumbnailCountAggregateInputType = {
    id?: true
    owner?: true
    contents?: true
    _all?: true
  }

  export type ThumbnailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which thumbnail to aggregate.
     */
    where?: thumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thumbnails to fetch.
     */
    orderBy?: thumbnailOrderByWithRelationInput | thumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: thumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thumbnails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned thumbnails
    **/
    _count?: true | ThumbnailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThumbnailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThumbnailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThumbnailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThumbnailMaxAggregateInputType
  }

  export type GetThumbnailAggregateType<T extends ThumbnailAggregateArgs> = {
        [P in keyof T & keyof AggregateThumbnail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThumbnail[P]>
      : GetScalarType<T[P], AggregateThumbnail[P]>
  }




  export type thumbnailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: thumbnailWhereInput
    orderBy?: thumbnailOrderByWithAggregationInput | thumbnailOrderByWithAggregationInput[]
    by: ThumbnailScalarFieldEnum[] | ThumbnailScalarFieldEnum
    having?: thumbnailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThumbnailCountAggregateInputType | true
    _avg?: ThumbnailAvgAggregateInputType
    _sum?: ThumbnailSumAggregateInputType
    _min?: ThumbnailMinAggregateInputType
    _max?: ThumbnailMaxAggregateInputType
  }

  export type ThumbnailGroupByOutputType = {
    id: bigint
    owner: bigint
    contents: Buffer
    _count: ThumbnailCountAggregateOutputType | null
    _avg: ThumbnailAvgAggregateOutputType | null
    _sum: ThumbnailSumAggregateOutputType | null
    _min: ThumbnailMinAggregateOutputType | null
    _max: ThumbnailMaxAggregateOutputType | null
  }

  type GetThumbnailGroupByPayload<T extends thumbnailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThumbnailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThumbnailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThumbnailGroupByOutputType[P]>
            : GetScalarType<T[P], ThumbnailGroupByOutputType[P]>
        }
      >
    >


  export type thumbnailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    contents?: boolean
    video?: boolean | videoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thumbnail"]>

  export type thumbnailSelectScalar = {
    id?: boolean
    owner?: boolean
    contents?: boolean
  }

  export type thumbnailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | videoDefaultArgs<ExtArgs>
  }


  export type $thumbnailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "thumbnail"
    objects: {
      video: Prisma.$videoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      owner: bigint
      contents: Buffer
    }, ExtArgs["result"]["thumbnail"]>
    composites: {}
  }


  type thumbnailGetPayload<S extends boolean | null | undefined | thumbnailDefaultArgs> = $Result.GetResult<Prisma.$thumbnailPayload, S>

  type thumbnailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<thumbnailFindManyArgs, 'select' | 'include'> & {
      select?: ThumbnailCountAggregateInputType | true
    }

  export interface thumbnailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['thumbnail'], meta: { name: 'thumbnail' } }
    /**
     * Find zero or one Thumbnail that matches the filter.
     * @param {thumbnailFindUniqueArgs} args - Arguments to find a Thumbnail
     * @example
     * // Get one Thumbnail
     * const thumbnail = await prisma.thumbnail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends thumbnailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, thumbnailFindUniqueArgs<ExtArgs>>
    ): Prisma__thumbnailClient<$Result.GetResult<Prisma.$thumbnailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Thumbnail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {thumbnailFindUniqueOrThrowArgs} args - Arguments to find a Thumbnail
     * @example
     * // Get one Thumbnail
     * const thumbnail = await prisma.thumbnail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends thumbnailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, thumbnailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__thumbnailClient<$Result.GetResult<Prisma.$thumbnailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Thumbnail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thumbnailFindFirstArgs} args - Arguments to find a Thumbnail
     * @example
     * // Get one Thumbnail
     * const thumbnail = await prisma.thumbnail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends thumbnailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, thumbnailFindFirstArgs<ExtArgs>>
    ): Prisma__thumbnailClient<$Result.GetResult<Prisma.$thumbnailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Thumbnail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thumbnailFindFirstOrThrowArgs} args - Arguments to find a Thumbnail
     * @example
     * // Get one Thumbnail
     * const thumbnail = await prisma.thumbnail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends thumbnailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, thumbnailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__thumbnailClient<$Result.GetResult<Prisma.$thumbnailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Thumbnails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thumbnailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Thumbnails
     * const thumbnails = await prisma.thumbnail.findMany()
     * 
     * // Get first 10 Thumbnails
     * const thumbnails = await prisma.thumbnail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const thumbnailWithIdOnly = await prisma.thumbnail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends thumbnailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, thumbnailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$thumbnailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Thumbnail.
     * @param {thumbnailCreateArgs} args - Arguments to create a Thumbnail.
     * @example
     * // Create one Thumbnail
     * const Thumbnail = await prisma.thumbnail.create({
     *   data: {
     *     // ... data to create a Thumbnail
     *   }
     * })
     * 
    **/
    create<T extends thumbnailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, thumbnailCreateArgs<ExtArgs>>
    ): Prisma__thumbnailClient<$Result.GetResult<Prisma.$thumbnailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Thumbnails.
     *     @param {thumbnailCreateManyArgs} args - Arguments to create many Thumbnails.
     *     @example
     *     // Create many Thumbnails
     *     const thumbnail = await prisma.thumbnail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends thumbnailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, thumbnailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Thumbnail.
     * @param {thumbnailDeleteArgs} args - Arguments to delete one Thumbnail.
     * @example
     * // Delete one Thumbnail
     * const Thumbnail = await prisma.thumbnail.delete({
     *   where: {
     *     // ... filter to delete one Thumbnail
     *   }
     * })
     * 
    **/
    delete<T extends thumbnailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, thumbnailDeleteArgs<ExtArgs>>
    ): Prisma__thumbnailClient<$Result.GetResult<Prisma.$thumbnailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Thumbnail.
     * @param {thumbnailUpdateArgs} args - Arguments to update one Thumbnail.
     * @example
     * // Update one Thumbnail
     * const thumbnail = await prisma.thumbnail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends thumbnailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, thumbnailUpdateArgs<ExtArgs>>
    ): Prisma__thumbnailClient<$Result.GetResult<Prisma.$thumbnailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Thumbnails.
     * @param {thumbnailDeleteManyArgs} args - Arguments to filter Thumbnails to delete.
     * @example
     * // Delete a few Thumbnails
     * const { count } = await prisma.thumbnail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends thumbnailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, thumbnailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thumbnails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thumbnailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Thumbnails
     * const thumbnail = await prisma.thumbnail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends thumbnailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, thumbnailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Thumbnail.
     * @param {thumbnailUpsertArgs} args - Arguments to update or create a Thumbnail.
     * @example
     * // Update or create a Thumbnail
     * const thumbnail = await prisma.thumbnail.upsert({
     *   create: {
     *     // ... data to create a Thumbnail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thumbnail we want to update
     *   }
     * })
    **/
    upsert<T extends thumbnailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, thumbnailUpsertArgs<ExtArgs>>
    ): Prisma__thumbnailClient<$Result.GetResult<Prisma.$thumbnailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Thumbnails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thumbnailCountArgs} args - Arguments to filter Thumbnails to count.
     * @example
     * // Count the number of Thumbnails
     * const count = await prisma.thumbnail.count({
     *   where: {
     *     // ... the filter for the Thumbnails we want to count
     *   }
     * })
    **/
    count<T extends thumbnailCountArgs>(
      args?: Subset<T, thumbnailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThumbnailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thumbnail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThumbnailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThumbnailAggregateArgs>(args: Subset<T, ThumbnailAggregateArgs>): Prisma.PrismaPromise<GetThumbnailAggregateType<T>>

    /**
     * Group by Thumbnail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thumbnailGroupByArgs} args - Group by arguments.
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
      T extends thumbnailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: thumbnailGroupByArgs['orderBy'] }
        : { orderBy?: thumbnailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, thumbnailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThumbnailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the thumbnail model
   */
  readonly fields: thumbnailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for thumbnail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__thumbnailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    video<T extends videoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, videoDefaultArgs<ExtArgs>>): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the thumbnail model
   */ 
  interface thumbnailFieldRefs {
    readonly id: FieldRef<"thumbnail", 'BigInt'>
    readonly owner: FieldRef<"thumbnail", 'BigInt'>
    readonly contents: FieldRef<"thumbnail", 'Bytes'>
  }
    

  // Custom InputTypes

  /**
   * thumbnail findUnique
   */
  export type thumbnailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thumbnail
     */
    select?: thumbnailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: thumbnailInclude<ExtArgs> | null
    /**
     * Filter, which thumbnail to fetch.
     */
    where: thumbnailWhereUniqueInput
  }


  /**
   * thumbnail findUniqueOrThrow
   */
  export type thumbnailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thumbnail
     */
    select?: thumbnailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: thumbnailInclude<ExtArgs> | null
    /**
     * Filter, which thumbnail to fetch.
     */
    where: thumbnailWhereUniqueInput
  }


  /**
   * thumbnail findFirst
   */
  export type thumbnailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thumbnail
     */
    select?: thumbnailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: thumbnailInclude<ExtArgs> | null
    /**
     * Filter, which thumbnail to fetch.
     */
    where?: thumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thumbnails to fetch.
     */
    orderBy?: thumbnailOrderByWithRelationInput | thumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for thumbnails.
     */
    cursor?: thumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thumbnails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of thumbnails.
     */
    distinct?: ThumbnailScalarFieldEnum | ThumbnailScalarFieldEnum[]
  }


  /**
   * thumbnail findFirstOrThrow
   */
  export type thumbnailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thumbnail
     */
    select?: thumbnailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: thumbnailInclude<ExtArgs> | null
    /**
     * Filter, which thumbnail to fetch.
     */
    where?: thumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thumbnails to fetch.
     */
    orderBy?: thumbnailOrderByWithRelationInput | thumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for thumbnails.
     */
    cursor?: thumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thumbnails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of thumbnails.
     */
    distinct?: ThumbnailScalarFieldEnum | ThumbnailScalarFieldEnum[]
  }


  /**
   * thumbnail findMany
   */
  export type thumbnailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thumbnail
     */
    select?: thumbnailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: thumbnailInclude<ExtArgs> | null
    /**
     * Filter, which thumbnails to fetch.
     */
    where?: thumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thumbnails to fetch.
     */
    orderBy?: thumbnailOrderByWithRelationInput | thumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing thumbnails.
     */
    cursor?: thumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thumbnails.
     */
    skip?: number
    distinct?: ThumbnailScalarFieldEnum | ThumbnailScalarFieldEnum[]
  }


  /**
   * thumbnail create
   */
  export type thumbnailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thumbnail
     */
    select?: thumbnailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: thumbnailInclude<ExtArgs> | null
    /**
     * The data needed to create a thumbnail.
     */
    data: XOR<thumbnailCreateInput, thumbnailUncheckedCreateInput>
  }


  /**
   * thumbnail createMany
   */
  export type thumbnailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many thumbnails.
     */
    data: thumbnailCreateManyInput | thumbnailCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * thumbnail update
   */
  export type thumbnailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thumbnail
     */
    select?: thumbnailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: thumbnailInclude<ExtArgs> | null
    /**
     * The data needed to update a thumbnail.
     */
    data: XOR<thumbnailUpdateInput, thumbnailUncheckedUpdateInput>
    /**
     * Choose, which thumbnail to update.
     */
    where: thumbnailWhereUniqueInput
  }


  /**
   * thumbnail updateMany
   */
  export type thumbnailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update thumbnails.
     */
    data: XOR<thumbnailUpdateManyMutationInput, thumbnailUncheckedUpdateManyInput>
    /**
     * Filter which thumbnails to update
     */
    where?: thumbnailWhereInput
  }


  /**
   * thumbnail upsert
   */
  export type thumbnailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thumbnail
     */
    select?: thumbnailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: thumbnailInclude<ExtArgs> | null
    /**
     * The filter to search for the thumbnail to update in case it exists.
     */
    where: thumbnailWhereUniqueInput
    /**
     * In case the thumbnail found by the `where` argument doesn't exist, create a new thumbnail with this data.
     */
    create: XOR<thumbnailCreateInput, thumbnailUncheckedCreateInput>
    /**
     * In case the thumbnail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<thumbnailUpdateInput, thumbnailUncheckedUpdateInput>
  }


  /**
   * thumbnail delete
   */
  export type thumbnailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thumbnail
     */
    select?: thumbnailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: thumbnailInclude<ExtArgs> | null
    /**
     * Filter which thumbnail to delete.
     */
    where: thumbnailWhereUniqueInput
  }


  /**
   * thumbnail deleteMany
   */
  export type thumbnailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which thumbnails to delete
     */
    where?: thumbnailWhereInput
  }


  /**
   * thumbnail without action
   */
  export type thumbnailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thumbnail
     */
    select?: thumbnailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: thumbnailInclude<ExtArgs> | null
  }



  /**
   * Model low_quality
   */

  export type AggregateLow_quality = {
    _count: Low_qualityCountAggregateOutputType | null
    _avg: Low_qualityAvgAggregateOutputType | null
    _sum: Low_qualitySumAggregateOutputType | null
    _min: Low_qualityMinAggregateOutputType | null
    _max: Low_qualityMaxAggregateOutputType | null
  }

  export type Low_qualityAvgAggregateOutputType = {
    id: number | null
    owner: number | null
  }

  export type Low_qualitySumAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type Low_qualityMinAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type Low_qualityMaxAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type Low_qualityCountAggregateOutputType = {
    id: number
    owner: number
    _all: number
  }


  export type Low_qualityAvgAggregateInputType = {
    id?: true
    owner?: true
  }

  export type Low_qualitySumAggregateInputType = {
    id?: true
    owner?: true
  }

  export type Low_qualityMinAggregateInputType = {
    id?: true
    owner?: true
  }

  export type Low_qualityMaxAggregateInputType = {
    id?: true
    owner?: true
  }

  export type Low_qualityCountAggregateInputType = {
    id?: true
    owner?: true
    _all?: true
  }

  export type Low_qualityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which low_quality to aggregate.
     */
    where?: low_qualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of low_qualities to fetch.
     */
    orderBy?: low_qualityOrderByWithRelationInput | low_qualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: low_qualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` low_qualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` low_qualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned low_qualities
    **/
    _count?: true | Low_qualityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Low_qualityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Low_qualitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Low_qualityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Low_qualityMaxAggregateInputType
  }

  export type GetLow_qualityAggregateType<T extends Low_qualityAggregateArgs> = {
        [P in keyof T & keyof AggregateLow_quality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLow_quality[P]>
      : GetScalarType<T[P], AggregateLow_quality[P]>
  }




  export type low_qualityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: low_qualityWhereInput
    orderBy?: low_qualityOrderByWithAggregationInput | low_qualityOrderByWithAggregationInput[]
    by: Low_qualityScalarFieldEnum[] | Low_qualityScalarFieldEnum
    having?: low_qualityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Low_qualityCountAggregateInputType | true
    _avg?: Low_qualityAvgAggregateInputType
    _sum?: Low_qualitySumAggregateInputType
    _min?: Low_qualityMinAggregateInputType
    _max?: Low_qualityMaxAggregateInputType
  }

  export type Low_qualityGroupByOutputType = {
    id: bigint
    owner: bigint
    _count: Low_qualityCountAggregateOutputType | null
    _avg: Low_qualityAvgAggregateOutputType | null
    _sum: Low_qualitySumAggregateOutputType | null
    _min: Low_qualityMinAggregateOutputType | null
    _max: Low_qualityMaxAggregateOutputType | null
  }

  type GetLow_qualityGroupByPayload<T extends low_qualityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Low_qualityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Low_qualityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Low_qualityGroupByOutputType[P]>
            : GetScalarType<T[P], Low_qualityGroupByOutputType[P]>
        }
      >
    >


  export type low_qualitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    video?: boolean | videoDefaultArgs<ExtArgs>
    chunks?: boolean | low_quality$chunksArgs<ExtArgs>
    _count?: boolean | Low_qualityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["low_quality"]>

  export type low_qualitySelectScalar = {
    id?: boolean
    owner?: boolean
  }

  export type low_qualityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | videoDefaultArgs<ExtArgs>
    chunks?: boolean | low_quality$chunksArgs<ExtArgs>
    _count?: boolean | Low_qualityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $low_qualityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "low_quality"
    objects: {
      video: Prisma.$videoPayload<ExtArgs>
      chunks: Prisma.$chunksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      owner: bigint
    }, ExtArgs["result"]["low_quality"]>
    composites: {}
  }


  type low_qualityGetPayload<S extends boolean | null | undefined | low_qualityDefaultArgs> = $Result.GetResult<Prisma.$low_qualityPayload, S>

  type low_qualityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<low_qualityFindManyArgs, 'select' | 'include'> & {
      select?: Low_qualityCountAggregateInputType | true
    }

  export interface low_qualityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['low_quality'], meta: { name: 'low_quality' } }
    /**
     * Find zero or one Low_quality that matches the filter.
     * @param {low_qualityFindUniqueArgs} args - Arguments to find a Low_quality
     * @example
     * // Get one Low_quality
     * const low_quality = await prisma.low_quality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends low_qualityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, low_qualityFindUniqueArgs<ExtArgs>>
    ): Prisma__low_qualityClient<$Result.GetResult<Prisma.$low_qualityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Low_quality that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {low_qualityFindUniqueOrThrowArgs} args - Arguments to find a Low_quality
     * @example
     * // Get one Low_quality
     * const low_quality = await prisma.low_quality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends low_qualityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, low_qualityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__low_qualityClient<$Result.GetResult<Prisma.$low_qualityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Low_quality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {low_qualityFindFirstArgs} args - Arguments to find a Low_quality
     * @example
     * // Get one Low_quality
     * const low_quality = await prisma.low_quality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends low_qualityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, low_qualityFindFirstArgs<ExtArgs>>
    ): Prisma__low_qualityClient<$Result.GetResult<Prisma.$low_qualityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Low_quality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {low_qualityFindFirstOrThrowArgs} args - Arguments to find a Low_quality
     * @example
     * // Get one Low_quality
     * const low_quality = await prisma.low_quality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends low_qualityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, low_qualityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__low_qualityClient<$Result.GetResult<Prisma.$low_qualityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Low_qualities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {low_qualityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Low_qualities
     * const low_qualities = await prisma.low_quality.findMany()
     * 
     * // Get first 10 Low_qualities
     * const low_qualities = await prisma.low_quality.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const low_qualityWithIdOnly = await prisma.low_quality.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends low_qualityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, low_qualityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$low_qualityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Low_quality.
     * @param {low_qualityCreateArgs} args - Arguments to create a Low_quality.
     * @example
     * // Create one Low_quality
     * const Low_quality = await prisma.low_quality.create({
     *   data: {
     *     // ... data to create a Low_quality
     *   }
     * })
     * 
    **/
    create<T extends low_qualityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, low_qualityCreateArgs<ExtArgs>>
    ): Prisma__low_qualityClient<$Result.GetResult<Prisma.$low_qualityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Low_qualities.
     *     @param {low_qualityCreateManyArgs} args - Arguments to create many Low_qualities.
     *     @example
     *     // Create many Low_qualities
     *     const low_quality = await prisma.low_quality.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends low_qualityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, low_qualityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Low_quality.
     * @param {low_qualityDeleteArgs} args - Arguments to delete one Low_quality.
     * @example
     * // Delete one Low_quality
     * const Low_quality = await prisma.low_quality.delete({
     *   where: {
     *     // ... filter to delete one Low_quality
     *   }
     * })
     * 
    **/
    delete<T extends low_qualityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, low_qualityDeleteArgs<ExtArgs>>
    ): Prisma__low_qualityClient<$Result.GetResult<Prisma.$low_qualityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Low_quality.
     * @param {low_qualityUpdateArgs} args - Arguments to update one Low_quality.
     * @example
     * // Update one Low_quality
     * const low_quality = await prisma.low_quality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends low_qualityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, low_qualityUpdateArgs<ExtArgs>>
    ): Prisma__low_qualityClient<$Result.GetResult<Prisma.$low_qualityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Low_qualities.
     * @param {low_qualityDeleteManyArgs} args - Arguments to filter Low_qualities to delete.
     * @example
     * // Delete a few Low_qualities
     * const { count } = await prisma.low_quality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends low_qualityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, low_qualityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Low_qualities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {low_qualityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Low_qualities
     * const low_quality = await prisma.low_quality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends low_qualityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, low_qualityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Low_quality.
     * @param {low_qualityUpsertArgs} args - Arguments to update or create a Low_quality.
     * @example
     * // Update or create a Low_quality
     * const low_quality = await prisma.low_quality.upsert({
     *   create: {
     *     // ... data to create a Low_quality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Low_quality we want to update
     *   }
     * })
    **/
    upsert<T extends low_qualityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, low_qualityUpsertArgs<ExtArgs>>
    ): Prisma__low_qualityClient<$Result.GetResult<Prisma.$low_qualityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Low_qualities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {low_qualityCountArgs} args - Arguments to filter Low_qualities to count.
     * @example
     * // Count the number of Low_qualities
     * const count = await prisma.low_quality.count({
     *   where: {
     *     // ... the filter for the Low_qualities we want to count
     *   }
     * })
    **/
    count<T extends low_qualityCountArgs>(
      args?: Subset<T, low_qualityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Low_qualityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Low_quality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Low_qualityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Low_qualityAggregateArgs>(args: Subset<T, Low_qualityAggregateArgs>): Prisma.PrismaPromise<GetLow_qualityAggregateType<T>>

    /**
     * Group by Low_quality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {low_qualityGroupByArgs} args - Group by arguments.
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
      T extends low_qualityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: low_qualityGroupByArgs['orderBy'] }
        : { orderBy?: low_qualityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, low_qualityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLow_qualityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the low_quality model
   */
  readonly fields: low_qualityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for low_quality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__low_qualityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    video<T extends videoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, videoDefaultArgs<ExtArgs>>): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    chunks<T extends low_quality$chunksArgs<ExtArgs> = {}>(args?: Subset<T, low_quality$chunksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chunksPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the low_quality model
   */ 
  interface low_qualityFieldRefs {
    readonly id: FieldRef<"low_quality", 'BigInt'>
    readonly owner: FieldRef<"low_quality", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * low_quality findUnique
   */
  export type low_qualityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the low_quality
     */
    select?: low_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: low_qualityInclude<ExtArgs> | null
    /**
     * Filter, which low_quality to fetch.
     */
    where: low_qualityWhereUniqueInput
  }


  /**
   * low_quality findUniqueOrThrow
   */
  export type low_qualityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the low_quality
     */
    select?: low_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: low_qualityInclude<ExtArgs> | null
    /**
     * Filter, which low_quality to fetch.
     */
    where: low_qualityWhereUniqueInput
  }


  /**
   * low_quality findFirst
   */
  export type low_qualityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the low_quality
     */
    select?: low_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: low_qualityInclude<ExtArgs> | null
    /**
     * Filter, which low_quality to fetch.
     */
    where?: low_qualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of low_qualities to fetch.
     */
    orderBy?: low_qualityOrderByWithRelationInput | low_qualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for low_qualities.
     */
    cursor?: low_qualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` low_qualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` low_qualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of low_qualities.
     */
    distinct?: Low_qualityScalarFieldEnum | Low_qualityScalarFieldEnum[]
  }


  /**
   * low_quality findFirstOrThrow
   */
  export type low_qualityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the low_quality
     */
    select?: low_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: low_qualityInclude<ExtArgs> | null
    /**
     * Filter, which low_quality to fetch.
     */
    where?: low_qualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of low_qualities to fetch.
     */
    orderBy?: low_qualityOrderByWithRelationInput | low_qualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for low_qualities.
     */
    cursor?: low_qualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` low_qualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` low_qualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of low_qualities.
     */
    distinct?: Low_qualityScalarFieldEnum | Low_qualityScalarFieldEnum[]
  }


  /**
   * low_quality findMany
   */
  export type low_qualityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the low_quality
     */
    select?: low_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: low_qualityInclude<ExtArgs> | null
    /**
     * Filter, which low_qualities to fetch.
     */
    where?: low_qualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of low_qualities to fetch.
     */
    orderBy?: low_qualityOrderByWithRelationInput | low_qualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing low_qualities.
     */
    cursor?: low_qualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` low_qualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` low_qualities.
     */
    skip?: number
    distinct?: Low_qualityScalarFieldEnum | Low_qualityScalarFieldEnum[]
  }


  /**
   * low_quality create
   */
  export type low_qualityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the low_quality
     */
    select?: low_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: low_qualityInclude<ExtArgs> | null
    /**
     * The data needed to create a low_quality.
     */
    data: XOR<low_qualityCreateInput, low_qualityUncheckedCreateInput>
  }


  /**
   * low_quality createMany
   */
  export type low_qualityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many low_qualities.
     */
    data: low_qualityCreateManyInput | low_qualityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * low_quality update
   */
  export type low_qualityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the low_quality
     */
    select?: low_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: low_qualityInclude<ExtArgs> | null
    /**
     * The data needed to update a low_quality.
     */
    data: XOR<low_qualityUpdateInput, low_qualityUncheckedUpdateInput>
    /**
     * Choose, which low_quality to update.
     */
    where: low_qualityWhereUniqueInput
  }


  /**
   * low_quality updateMany
   */
  export type low_qualityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update low_qualities.
     */
    data: XOR<low_qualityUpdateManyMutationInput, low_qualityUncheckedUpdateManyInput>
    /**
     * Filter which low_qualities to update
     */
    where?: low_qualityWhereInput
  }


  /**
   * low_quality upsert
   */
  export type low_qualityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the low_quality
     */
    select?: low_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: low_qualityInclude<ExtArgs> | null
    /**
     * The filter to search for the low_quality to update in case it exists.
     */
    where: low_qualityWhereUniqueInput
    /**
     * In case the low_quality found by the `where` argument doesn't exist, create a new low_quality with this data.
     */
    create: XOR<low_qualityCreateInput, low_qualityUncheckedCreateInput>
    /**
     * In case the low_quality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<low_qualityUpdateInput, low_qualityUncheckedUpdateInput>
  }


  /**
   * low_quality delete
   */
  export type low_qualityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the low_quality
     */
    select?: low_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: low_qualityInclude<ExtArgs> | null
    /**
     * Filter which low_quality to delete.
     */
    where: low_qualityWhereUniqueInput
  }


  /**
   * low_quality deleteMany
   */
  export type low_qualityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which low_qualities to delete
     */
    where?: low_qualityWhereInput
  }


  /**
   * low_quality.chunks
   */
  export type low_quality$chunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chunks
     */
    select?: chunksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chunksInclude<ExtArgs> | null
    where?: chunksWhereInput
    orderBy?: chunksOrderByWithRelationInput | chunksOrderByWithRelationInput[]
    cursor?: chunksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChunksScalarFieldEnum | ChunksScalarFieldEnum[]
  }


  /**
   * low_quality without action
   */
  export type low_qualityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the low_quality
     */
    select?: low_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: low_qualityInclude<ExtArgs> | null
  }



  /**
   * Model chunks
   */

  export type AggregateChunks = {
    _count: ChunksCountAggregateOutputType | null
    _avg: ChunksAvgAggregateOutputType | null
    _sum: ChunksSumAggregateOutputType | null
    _min: ChunksMinAggregateOutputType | null
    _max: ChunksMaxAggregateOutputType | null
  }

  export type ChunksAvgAggregateOutputType = {
    id: number | null
    lq: number | null
    mq: number | null
    high_quality: number | null
  }

  export type ChunksSumAggregateOutputType = {
    id: bigint | null
    lq: bigint | null
    mq: bigint | null
    high_quality: bigint | null
  }

  export type ChunksMinAggregateOutputType = {
    id: bigint | null
    contents: Buffer | null
    lq: bigint | null
    mq: bigint | null
    high_quality: bigint | null
  }

  export type ChunksMaxAggregateOutputType = {
    id: bigint | null
    contents: Buffer | null
    lq: bigint | null
    mq: bigint | null
    high_quality: bigint | null
  }

  export type ChunksCountAggregateOutputType = {
    id: number
    contents: number
    lq: number
    mq: number
    high_quality: number
    _all: number
  }


  export type ChunksAvgAggregateInputType = {
    id?: true
    lq?: true
    mq?: true
    high_quality?: true
  }

  export type ChunksSumAggregateInputType = {
    id?: true
    lq?: true
    mq?: true
    high_quality?: true
  }

  export type ChunksMinAggregateInputType = {
    id?: true
    contents?: true
    lq?: true
    mq?: true
    high_quality?: true
  }

  export type ChunksMaxAggregateInputType = {
    id?: true
    contents?: true
    lq?: true
    mq?: true
    high_quality?: true
  }

  export type ChunksCountAggregateInputType = {
    id?: true
    contents?: true
    lq?: true
    mq?: true
    high_quality?: true
    _all?: true
  }

  export type ChunksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chunks to aggregate.
     */
    where?: chunksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chunks to fetch.
     */
    orderBy?: chunksOrderByWithRelationInput | chunksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chunksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chunks
    **/
    _count?: true | ChunksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChunksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChunksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChunksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChunksMaxAggregateInputType
  }

  export type GetChunksAggregateType<T extends ChunksAggregateArgs> = {
        [P in keyof T & keyof AggregateChunks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChunks[P]>
      : GetScalarType<T[P], AggregateChunks[P]>
  }




  export type chunksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chunksWhereInput
    orderBy?: chunksOrderByWithAggregationInput | chunksOrderByWithAggregationInput[]
    by: ChunksScalarFieldEnum[] | ChunksScalarFieldEnum
    having?: chunksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChunksCountAggregateInputType | true
    _avg?: ChunksAvgAggregateInputType
    _sum?: ChunksSumAggregateInputType
    _min?: ChunksMinAggregateInputType
    _max?: ChunksMaxAggregateInputType
  }

  export type ChunksGroupByOutputType = {
    id: bigint
    contents: Buffer
    lq: bigint | null
    mq: bigint | null
    high_quality: bigint | null
    _count: ChunksCountAggregateOutputType | null
    _avg: ChunksAvgAggregateOutputType | null
    _sum: ChunksSumAggregateOutputType | null
    _min: ChunksMinAggregateOutputType | null
    _max: ChunksMaxAggregateOutputType | null
  }

  type GetChunksGroupByPayload<T extends chunksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChunksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChunksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChunksGroupByOutputType[P]>
            : GetScalarType<T[P], ChunksGroupByOutputType[P]>
        }
      >
    >


  export type chunksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contents?: boolean
    lq?: boolean
    mq?: boolean
    high_quality?: boolean
    low_quality?: boolean | chunks$low_qualityArgs<ExtArgs>
    md_quality?: boolean | chunks$md_qualityArgs<ExtArgs>
    hq?: boolean | chunks$hqArgs<ExtArgs>
  }, ExtArgs["result"]["chunks"]>

  export type chunksSelectScalar = {
    id?: boolean
    contents?: boolean
    lq?: boolean
    mq?: boolean
    high_quality?: boolean
  }

  export type chunksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    low_quality?: boolean | chunks$low_qualityArgs<ExtArgs>
    md_quality?: boolean | chunks$md_qualityArgs<ExtArgs>
    hq?: boolean | chunks$hqArgs<ExtArgs>
  }


  export type $chunksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chunks"
    objects: {
      low_quality: Prisma.$low_qualityPayload<ExtArgs> | null
      md_quality: Prisma.$mid_qualityPayload<ExtArgs> | null
      hq: Prisma.$hqPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      contents: Buffer
      lq: bigint | null
      mq: bigint | null
      high_quality: bigint | null
    }, ExtArgs["result"]["chunks"]>
    composites: {}
  }


  type chunksGetPayload<S extends boolean | null | undefined | chunksDefaultArgs> = $Result.GetResult<Prisma.$chunksPayload, S>

  type chunksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<chunksFindManyArgs, 'select' | 'include'> & {
      select?: ChunksCountAggregateInputType | true
    }

  export interface chunksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chunks'], meta: { name: 'chunks' } }
    /**
     * Find zero or one Chunks that matches the filter.
     * @param {chunksFindUniqueArgs} args - Arguments to find a Chunks
     * @example
     * // Get one Chunks
     * const chunks = await prisma.chunks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends chunksFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, chunksFindUniqueArgs<ExtArgs>>
    ): Prisma__chunksClient<$Result.GetResult<Prisma.$chunksPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Chunks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {chunksFindUniqueOrThrowArgs} args - Arguments to find a Chunks
     * @example
     * // Get one Chunks
     * const chunks = await prisma.chunks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends chunksFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, chunksFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__chunksClient<$Result.GetResult<Prisma.$chunksPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Chunks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chunksFindFirstArgs} args - Arguments to find a Chunks
     * @example
     * // Get one Chunks
     * const chunks = await prisma.chunks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends chunksFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, chunksFindFirstArgs<ExtArgs>>
    ): Prisma__chunksClient<$Result.GetResult<Prisma.$chunksPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Chunks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chunksFindFirstOrThrowArgs} args - Arguments to find a Chunks
     * @example
     * // Get one Chunks
     * const chunks = await prisma.chunks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends chunksFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, chunksFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__chunksClient<$Result.GetResult<Prisma.$chunksPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Chunks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chunksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chunks
     * const chunks = await prisma.chunks.findMany()
     * 
     * // Get first 10 Chunks
     * const chunks = await prisma.chunks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chunksWithIdOnly = await prisma.chunks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends chunksFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, chunksFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chunksPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Chunks.
     * @param {chunksCreateArgs} args - Arguments to create a Chunks.
     * @example
     * // Create one Chunks
     * const Chunks = await prisma.chunks.create({
     *   data: {
     *     // ... data to create a Chunks
     *   }
     * })
     * 
    **/
    create<T extends chunksCreateArgs<ExtArgs>>(
      args: SelectSubset<T, chunksCreateArgs<ExtArgs>>
    ): Prisma__chunksClient<$Result.GetResult<Prisma.$chunksPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Chunks.
     *     @param {chunksCreateManyArgs} args - Arguments to create many Chunks.
     *     @example
     *     // Create many Chunks
     *     const chunks = await prisma.chunks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends chunksCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, chunksCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chunks.
     * @param {chunksDeleteArgs} args - Arguments to delete one Chunks.
     * @example
     * // Delete one Chunks
     * const Chunks = await prisma.chunks.delete({
     *   where: {
     *     // ... filter to delete one Chunks
     *   }
     * })
     * 
    **/
    delete<T extends chunksDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, chunksDeleteArgs<ExtArgs>>
    ): Prisma__chunksClient<$Result.GetResult<Prisma.$chunksPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Chunks.
     * @param {chunksUpdateArgs} args - Arguments to update one Chunks.
     * @example
     * // Update one Chunks
     * const chunks = await prisma.chunks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends chunksUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, chunksUpdateArgs<ExtArgs>>
    ): Prisma__chunksClient<$Result.GetResult<Prisma.$chunksPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Chunks.
     * @param {chunksDeleteManyArgs} args - Arguments to filter Chunks to delete.
     * @example
     * // Delete a few Chunks
     * const { count } = await prisma.chunks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends chunksDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, chunksDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chunksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chunks
     * const chunks = await prisma.chunks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends chunksUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, chunksUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chunks.
     * @param {chunksUpsertArgs} args - Arguments to update or create a Chunks.
     * @example
     * // Update or create a Chunks
     * const chunks = await prisma.chunks.upsert({
     *   create: {
     *     // ... data to create a Chunks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chunks we want to update
     *   }
     * })
    **/
    upsert<T extends chunksUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, chunksUpsertArgs<ExtArgs>>
    ): Prisma__chunksClient<$Result.GetResult<Prisma.$chunksPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Chunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chunksCountArgs} args - Arguments to filter Chunks to count.
     * @example
     * // Count the number of Chunks
     * const count = await prisma.chunks.count({
     *   where: {
     *     // ... the filter for the Chunks we want to count
     *   }
     * })
    **/
    count<T extends chunksCountArgs>(
      args?: Subset<T, chunksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChunksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChunksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChunksAggregateArgs>(args: Subset<T, ChunksAggregateArgs>): Prisma.PrismaPromise<GetChunksAggregateType<T>>

    /**
     * Group by Chunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chunksGroupByArgs} args - Group by arguments.
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
      T extends chunksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chunksGroupByArgs['orderBy'] }
        : { orderBy?: chunksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chunksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChunksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chunks model
   */
  readonly fields: chunksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chunks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chunksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    low_quality<T extends chunks$low_qualityArgs<ExtArgs> = {}>(args?: Subset<T, chunks$low_qualityArgs<ExtArgs>>): Prisma__low_qualityClient<$Result.GetResult<Prisma.$low_qualityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    md_quality<T extends chunks$md_qualityArgs<ExtArgs> = {}>(args?: Subset<T, chunks$md_qualityArgs<ExtArgs>>): Prisma__mid_qualityClient<$Result.GetResult<Prisma.$mid_qualityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    hq<T extends chunks$hqArgs<ExtArgs> = {}>(args?: Subset<T, chunks$hqArgs<ExtArgs>>): Prisma__hqClient<$Result.GetResult<Prisma.$hqPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the chunks model
   */ 
  interface chunksFieldRefs {
    readonly id: FieldRef<"chunks", 'BigInt'>
    readonly contents: FieldRef<"chunks", 'Bytes'>
    readonly lq: FieldRef<"chunks", 'BigInt'>
    readonly mq: FieldRef<"chunks", 'BigInt'>
    readonly high_quality: FieldRef<"chunks", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * chunks findUnique
   */
  export type chunksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chunks
     */
    select?: chunksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chunksInclude<ExtArgs> | null
    /**
     * Filter, which chunks to fetch.
     */
    where: chunksWhereUniqueInput
  }


  /**
   * chunks findUniqueOrThrow
   */
  export type chunksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chunks
     */
    select?: chunksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chunksInclude<ExtArgs> | null
    /**
     * Filter, which chunks to fetch.
     */
    where: chunksWhereUniqueInput
  }


  /**
   * chunks findFirst
   */
  export type chunksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chunks
     */
    select?: chunksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chunksInclude<ExtArgs> | null
    /**
     * Filter, which chunks to fetch.
     */
    where?: chunksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chunks to fetch.
     */
    orderBy?: chunksOrderByWithRelationInput | chunksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chunks.
     */
    cursor?: chunksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chunks.
     */
    distinct?: ChunksScalarFieldEnum | ChunksScalarFieldEnum[]
  }


  /**
   * chunks findFirstOrThrow
   */
  export type chunksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chunks
     */
    select?: chunksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chunksInclude<ExtArgs> | null
    /**
     * Filter, which chunks to fetch.
     */
    where?: chunksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chunks to fetch.
     */
    orderBy?: chunksOrderByWithRelationInput | chunksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chunks.
     */
    cursor?: chunksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chunks.
     */
    distinct?: ChunksScalarFieldEnum | ChunksScalarFieldEnum[]
  }


  /**
   * chunks findMany
   */
  export type chunksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chunks
     */
    select?: chunksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chunksInclude<ExtArgs> | null
    /**
     * Filter, which chunks to fetch.
     */
    where?: chunksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chunks to fetch.
     */
    orderBy?: chunksOrderByWithRelationInput | chunksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chunks.
     */
    cursor?: chunksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chunks.
     */
    skip?: number
    distinct?: ChunksScalarFieldEnum | ChunksScalarFieldEnum[]
  }


  /**
   * chunks create
   */
  export type chunksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chunks
     */
    select?: chunksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chunksInclude<ExtArgs> | null
    /**
     * The data needed to create a chunks.
     */
    data: XOR<chunksCreateInput, chunksUncheckedCreateInput>
  }


  /**
   * chunks createMany
   */
  export type chunksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chunks.
     */
    data: chunksCreateManyInput | chunksCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * chunks update
   */
  export type chunksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chunks
     */
    select?: chunksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chunksInclude<ExtArgs> | null
    /**
     * The data needed to update a chunks.
     */
    data: XOR<chunksUpdateInput, chunksUncheckedUpdateInput>
    /**
     * Choose, which chunks to update.
     */
    where: chunksWhereUniqueInput
  }


  /**
   * chunks updateMany
   */
  export type chunksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chunks.
     */
    data: XOR<chunksUpdateManyMutationInput, chunksUncheckedUpdateManyInput>
    /**
     * Filter which chunks to update
     */
    where?: chunksWhereInput
  }


  /**
   * chunks upsert
   */
  export type chunksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chunks
     */
    select?: chunksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chunksInclude<ExtArgs> | null
    /**
     * The filter to search for the chunks to update in case it exists.
     */
    where: chunksWhereUniqueInput
    /**
     * In case the chunks found by the `where` argument doesn't exist, create a new chunks with this data.
     */
    create: XOR<chunksCreateInput, chunksUncheckedCreateInput>
    /**
     * In case the chunks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chunksUpdateInput, chunksUncheckedUpdateInput>
  }


  /**
   * chunks delete
   */
  export type chunksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chunks
     */
    select?: chunksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chunksInclude<ExtArgs> | null
    /**
     * Filter which chunks to delete.
     */
    where: chunksWhereUniqueInput
  }


  /**
   * chunks deleteMany
   */
  export type chunksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chunks to delete
     */
    where?: chunksWhereInput
  }


  /**
   * chunks.low_quality
   */
  export type chunks$low_qualityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the low_quality
     */
    select?: low_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: low_qualityInclude<ExtArgs> | null
    where?: low_qualityWhereInput
  }


  /**
   * chunks.md_quality
   */
  export type chunks$md_qualityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mid_quality
     */
    select?: mid_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mid_qualityInclude<ExtArgs> | null
    where?: mid_qualityWhereInput
  }


  /**
   * chunks.hq
   */
  export type chunks$hqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hq
     */
    select?: hqSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hqInclude<ExtArgs> | null
    where?: hqWhereInput
  }


  /**
   * chunks without action
   */
  export type chunksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chunks
     */
    select?: chunksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chunksInclude<ExtArgs> | null
  }



  /**
   * Model mid_quality
   */

  export type AggregateMid_quality = {
    _count: Mid_qualityCountAggregateOutputType | null
    _avg: Mid_qualityAvgAggregateOutputType | null
    _sum: Mid_qualitySumAggregateOutputType | null
    _min: Mid_qualityMinAggregateOutputType | null
    _max: Mid_qualityMaxAggregateOutputType | null
  }

  export type Mid_qualityAvgAggregateOutputType = {
    id: number | null
    owner: number | null
  }

  export type Mid_qualitySumAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type Mid_qualityMinAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type Mid_qualityMaxAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type Mid_qualityCountAggregateOutputType = {
    id: number
    owner: number
    _all: number
  }


  export type Mid_qualityAvgAggregateInputType = {
    id?: true
    owner?: true
  }

  export type Mid_qualitySumAggregateInputType = {
    id?: true
    owner?: true
  }

  export type Mid_qualityMinAggregateInputType = {
    id?: true
    owner?: true
  }

  export type Mid_qualityMaxAggregateInputType = {
    id?: true
    owner?: true
  }

  export type Mid_qualityCountAggregateInputType = {
    id?: true
    owner?: true
    _all?: true
  }

  export type Mid_qualityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mid_quality to aggregate.
     */
    where?: mid_qualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mid_qualities to fetch.
     */
    orderBy?: mid_qualityOrderByWithRelationInput | mid_qualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mid_qualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mid_qualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mid_qualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mid_qualities
    **/
    _count?: true | Mid_qualityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mid_qualityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mid_qualitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mid_qualityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mid_qualityMaxAggregateInputType
  }

  export type GetMid_qualityAggregateType<T extends Mid_qualityAggregateArgs> = {
        [P in keyof T & keyof AggregateMid_quality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMid_quality[P]>
      : GetScalarType<T[P], AggregateMid_quality[P]>
  }




  export type mid_qualityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mid_qualityWhereInput
    orderBy?: mid_qualityOrderByWithAggregationInput | mid_qualityOrderByWithAggregationInput[]
    by: Mid_qualityScalarFieldEnum[] | Mid_qualityScalarFieldEnum
    having?: mid_qualityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mid_qualityCountAggregateInputType | true
    _avg?: Mid_qualityAvgAggregateInputType
    _sum?: Mid_qualitySumAggregateInputType
    _min?: Mid_qualityMinAggregateInputType
    _max?: Mid_qualityMaxAggregateInputType
  }

  export type Mid_qualityGroupByOutputType = {
    id: bigint
    owner: bigint
    _count: Mid_qualityCountAggregateOutputType | null
    _avg: Mid_qualityAvgAggregateOutputType | null
    _sum: Mid_qualitySumAggregateOutputType | null
    _min: Mid_qualityMinAggregateOutputType | null
    _max: Mid_qualityMaxAggregateOutputType | null
  }

  type GetMid_qualityGroupByPayload<T extends mid_qualityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mid_qualityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mid_qualityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mid_qualityGroupByOutputType[P]>
            : GetScalarType<T[P], Mid_qualityGroupByOutputType[P]>
        }
      >
    >


  export type mid_qualitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    video?: boolean | videoDefaultArgs<ExtArgs>
    chunks?: boolean | mid_quality$chunksArgs<ExtArgs>
    _count?: boolean | Mid_qualityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mid_quality"]>

  export type mid_qualitySelectScalar = {
    id?: boolean
    owner?: boolean
  }

  export type mid_qualityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | videoDefaultArgs<ExtArgs>
    chunks?: boolean | mid_quality$chunksArgs<ExtArgs>
    _count?: boolean | Mid_qualityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $mid_qualityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mid_quality"
    objects: {
      video: Prisma.$videoPayload<ExtArgs>
      chunks: Prisma.$chunksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      owner: bigint
    }, ExtArgs["result"]["mid_quality"]>
    composites: {}
  }


  type mid_qualityGetPayload<S extends boolean | null | undefined | mid_qualityDefaultArgs> = $Result.GetResult<Prisma.$mid_qualityPayload, S>

  type mid_qualityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mid_qualityFindManyArgs, 'select' | 'include'> & {
      select?: Mid_qualityCountAggregateInputType | true
    }

  export interface mid_qualityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mid_quality'], meta: { name: 'mid_quality' } }
    /**
     * Find zero or one Mid_quality that matches the filter.
     * @param {mid_qualityFindUniqueArgs} args - Arguments to find a Mid_quality
     * @example
     * // Get one Mid_quality
     * const mid_quality = await prisma.mid_quality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mid_qualityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, mid_qualityFindUniqueArgs<ExtArgs>>
    ): Prisma__mid_qualityClient<$Result.GetResult<Prisma.$mid_qualityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Mid_quality that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mid_qualityFindUniqueOrThrowArgs} args - Arguments to find a Mid_quality
     * @example
     * // Get one Mid_quality
     * const mid_quality = await prisma.mid_quality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mid_qualityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, mid_qualityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__mid_qualityClient<$Result.GetResult<Prisma.$mid_qualityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Mid_quality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mid_qualityFindFirstArgs} args - Arguments to find a Mid_quality
     * @example
     * // Get one Mid_quality
     * const mid_quality = await prisma.mid_quality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mid_qualityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, mid_qualityFindFirstArgs<ExtArgs>>
    ): Prisma__mid_qualityClient<$Result.GetResult<Prisma.$mid_qualityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Mid_quality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mid_qualityFindFirstOrThrowArgs} args - Arguments to find a Mid_quality
     * @example
     * // Get one Mid_quality
     * const mid_quality = await prisma.mid_quality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mid_qualityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, mid_qualityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__mid_qualityClient<$Result.GetResult<Prisma.$mid_qualityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Mid_qualities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mid_qualityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mid_qualities
     * const mid_qualities = await prisma.mid_quality.findMany()
     * 
     * // Get first 10 Mid_qualities
     * const mid_qualities = await prisma.mid_quality.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mid_qualityWithIdOnly = await prisma.mid_quality.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mid_qualityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mid_qualityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mid_qualityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Mid_quality.
     * @param {mid_qualityCreateArgs} args - Arguments to create a Mid_quality.
     * @example
     * // Create one Mid_quality
     * const Mid_quality = await prisma.mid_quality.create({
     *   data: {
     *     // ... data to create a Mid_quality
     *   }
     * })
     * 
    **/
    create<T extends mid_qualityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, mid_qualityCreateArgs<ExtArgs>>
    ): Prisma__mid_qualityClient<$Result.GetResult<Prisma.$mid_qualityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Mid_qualities.
     *     @param {mid_qualityCreateManyArgs} args - Arguments to create many Mid_qualities.
     *     @example
     *     // Create many Mid_qualities
     *     const mid_quality = await prisma.mid_quality.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mid_qualityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mid_qualityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mid_quality.
     * @param {mid_qualityDeleteArgs} args - Arguments to delete one Mid_quality.
     * @example
     * // Delete one Mid_quality
     * const Mid_quality = await prisma.mid_quality.delete({
     *   where: {
     *     // ... filter to delete one Mid_quality
     *   }
     * })
     * 
    **/
    delete<T extends mid_qualityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, mid_qualityDeleteArgs<ExtArgs>>
    ): Prisma__mid_qualityClient<$Result.GetResult<Prisma.$mid_qualityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Mid_quality.
     * @param {mid_qualityUpdateArgs} args - Arguments to update one Mid_quality.
     * @example
     * // Update one Mid_quality
     * const mid_quality = await prisma.mid_quality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mid_qualityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, mid_qualityUpdateArgs<ExtArgs>>
    ): Prisma__mid_qualityClient<$Result.GetResult<Prisma.$mid_qualityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Mid_qualities.
     * @param {mid_qualityDeleteManyArgs} args - Arguments to filter Mid_qualities to delete.
     * @example
     * // Delete a few Mid_qualities
     * const { count } = await prisma.mid_quality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mid_qualityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mid_qualityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mid_qualities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mid_qualityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mid_qualities
     * const mid_quality = await prisma.mid_quality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mid_qualityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, mid_qualityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mid_quality.
     * @param {mid_qualityUpsertArgs} args - Arguments to update or create a Mid_quality.
     * @example
     * // Update or create a Mid_quality
     * const mid_quality = await prisma.mid_quality.upsert({
     *   create: {
     *     // ... data to create a Mid_quality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mid_quality we want to update
     *   }
     * })
    **/
    upsert<T extends mid_qualityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, mid_qualityUpsertArgs<ExtArgs>>
    ): Prisma__mid_qualityClient<$Result.GetResult<Prisma.$mid_qualityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Mid_qualities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mid_qualityCountArgs} args - Arguments to filter Mid_qualities to count.
     * @example
     * // Count the number of Mid_qualities
     * const count = await prisma.mid_quality.count({
     *   where: {
     *     // ... the filter for the Mid_qualities we want to count
     *   }
     * })
    **/
    count<T extends mid_qualityCountArgs>(
      args?: Subset<T, mid_qualityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mid_qualityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mid_quality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mid_qualityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mid_qualityAggregateArgs>(args: Subset<T, Mid_qualityAggregateArgs>): Prisma.PrismaPromise<GetMid_qualityAggregateType<T>>

    /**
     * Group by Mid_quality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mid_qualityGroupByArgs} args - Group by arguments.
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
      T extends mid_qualityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mid_qualityGroupByArgs['orderBy'] }
        : { orderBy?: mid_qualityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mid_qualityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMid_qualityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mid_quality model
   */
  readonly fields: mid_qualityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mid_quality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mid_qualityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    video<T extends videoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, videoDefaultArgs<ExtArgs>>): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    chunks<T extends mid_quality$chunksArgs<ExtArgs> = {}>(args?: Subset<T, mid_quality$chunksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chunksPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the mid_quality model
   */ 
  interface mid_qualityFieldRefs {
    readonly id: FieldRef<"mid_quality", 'BigInt'>
    readonly owner: FieldRef<"mid_quality", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * mid_quality findUnique
   */
  export type mid_qualityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mid_quality
     */
    select?: mid_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mid_qualityInclude<ExtArgs> | null
    /**
     * Filter, which mid_quality to fetch.
     */
    where: mid_qualityWhereUniqueInput
  }


  /**
   * mid_quality findUniqueOrThrow
   */
  export type mid_qualityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mid_quality
     */
    select?: mid_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mid_qualityInclude<ExtArgs> | null
    /**
     * Filter, which mid_quality to fetch.
     */
    where: mid_qualityWhereUniqueInput
  }


  /**
   * mid_quality findFirst
   */
  export type mid_qualityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mid_quality
     */
    select?: mid_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mid_qualityInclude<ExtArgs> | null
    /**
     * Filter, which mid_quality to fetch.
     */
    where?: mid_qualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mid_qualities to fetch.
     */
    orderBy?: mid_qualityOrderByWithRelationInput | mid_qualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mid_qualities.
     */
    cursor?: mid_qualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mid_qualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mid_qualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mid_qualities.
     */
    distinct?: Mid_qualityScalarFieldEnum | Mid_qualityScalarFieldEnum[]
  }


  /**
   * mid_quality findFirstOrThrow
   */
  export type mid_qualityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mid_quality
     */
    select?: mid_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mid_qualityInclude<ExtArgs> | null
    /**
     * Filter, which mid_quality to fetch.
     */
    where?: mid_qualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mid_qualities to fetch.
     */
    orderBy?: mid_qualityOrderByWithRelationInput | mid_qualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mid_qualities.
     */
    cursor?: mid_qualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mid_qualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mid_qualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mid_qualities.
     */
    distinct?: Mid_qualityScalarFieldEnum | Mid_qualityScalarFieldEnum[]
  }


  /**
   * mid_quality findMany
   */
  export type mid_qualityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mid_quality
     */
    select?: mid_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mid_qualityInclude<ExtArgs> | null
    /**
     * Filter, which mid_qualities to fetch.
     */
    where?: mid_qualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mid_qualities to fetch.
     */
    orderBy?: mid_qualityOrderByWithRelationInput | mid_qualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mid_qualities.
     */
    cursor?: mid_qualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mid_qualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mid_qualities.
     */
    skip?: number
    distinct?: Mid_qualityScalarFieldEnum | Mid_qualityScalarFieldEnum[]
  }


  /**
   * mid_quality create
   */
  export type mid_qualityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mid_quality
     */
    select?: mid_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mid_qualityInclude<ExtArgs> | null
    /**
     * The data needed to create a mid_quality.
     */
    data: XOR<mid_qualityCreateInput, mid_qualityUncheckedCreateInput>
  }


  /**
   * mid_quality createMany
   */
  export type mid_qualityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mid_qualities.
     */
    data: mid_qualityCreateManyInput | mid_qualityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * mid_quality update
   */
  export type mid_qualityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mid_quality
     */
    select?: mid_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mid_qualityInclude<ExtArgs> | null
    /**
     * The data needed to update a mid_quality.
     */
    data: XOR<mid_qualityUpdateInput, mid_qualityUncheckedUpdateInput>
    /**
     * Choose, which mid_quality to update.
     */
    where: mid_qualityWhereUniqueInput
  }


  /**
   * mid_quality updateMany
   */
  export type mid_qualityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mid_qualities.
     */
    data: XOR<mid_qualityUpdateManyMutationInput, mid_qualityUncheckedUpdateManyInput>
    /**
     * Filter which mid_qualities to update
     */
    where?: mid_qualityWhereInput
  }


  /**
   * mid_quality upsert
   */
  export type mid_qualityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mid_quality
     */
    select?: mid_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mid_qualityInclude<ExtArgs> | null
    /**
     * The filter to search for the mid_quality to update in case it exists.
     */
    where: mid_qualityWhereUniqueInput
    /**
     * In case the mid_quality found by the `where` argument doesn't exist, create a new mid_quality with this data.
     */
    create: XOR<mid_qualityCreateInput, mid_qualityUncheckedCreateInput>
    /**
     * In case the mid_quality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mid_qualityUpdateInput, mid_qualityUncheckedUpdateInput>
  }


  /**
   * mid_quality delete
   */
  export type mid_qualityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mid_quality
     */
    select?: mid_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mid_qualityInclude<ExtArgs> | null
    /**
     * Filter which mid_quality to delete.
     */
    where: mid_qualityWhereUniqueInput
  }


  /**
   * mid_quality deleteMany
   */
  export type mid_qualityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mid_qualities to delete
     */
    where?: mid_qualityWhereInput
  }


  /**
   * mid_quality.chunks
   */
  export type mid_quality$chunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chunks
     */
    select?: chunksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chunksInclude<ExtArgs> | null
    where?: chunksWhereInput
    orderBy?: chunksOrderByWithRelationInput | chunksOrderByWithRelationInput[]
    cursor?: chunksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChunksScalarFieldEnum | ChunksScalarFieldEnum[]
  }


  /**
   * mid_quality without action
   */
  export type mid_qualityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mid_quality
     */
    select?: mid_qualitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mid_qualityInclude<ExtArgs> | null
  }



  /**
   * Model hq
   */

  export type AggregateHq = {
    _count: HqCountAggregateOutputType | null
    _avg: HqAvgAggregateOutputType | null
    _sum: HqSumAggregateOutputType | null
    _min: HqMinAggregateOutputType | null
    _max: HqMaxAggregateOutputType | null
  }

  export type HqAvgAggregateOutputType = {
    id: number | null
    owner: number | null
  }

  export type HqSumAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type HqMinAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type HqMaxAggregateOutputType = {
    id: bigint | null
    owner: bigint | null
  }

  export type HqCountAggregateOutputType = {
    id: number
    owner: number
    _all: number
  }


  export type HqAvgAggregateInputType = {
    id?: true
    owner?: true
  }

  export type HqSumAggregateInputType = {
    id?: true
    owner?: true
  }

  export type HqMinAggregateInputType = {
    id?: true
    owner?: true
  }

  export type HqMaxAggregateInputType = {
    id?: true
    owner?: true
  }

  export type HqCountAggregateInputType = {
    id?: true
    owner?: true
    _all?: true
  }

  export type HqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hq to aggregate.
     */
    where?: hqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hqs to fetch.
     */
    orderBy?: hqOrderByWithRelationInput | hqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hqs
    **/
    _count?: true | HqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HqAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HqSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HqMaxAggregateInputType
  }

  export type GetHqAggregateType<T extends HqAggregateArgs> = {
        [P in keyof T & keyof AggregateHq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHq[P]>
      : GetScalarType<T[P], AggregateHq[P]>
  }




  export type hqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hqWhereInput
    orderBy?: hqOrderByWithAggregationInput | hqOrderByWithAggregationInput[]
    by: HqScalarFieldEnum[] | HqScalarFieldEnum
    having?: hqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HqCountAggregateInputType | true
    _avg?: HqAvgAggregateInputType
    _sum?: HqSumAggregateInputType
    _min?: HqMinAggregateInputType
    _max?: HqMaxAggregateInputType
  }

  export type HqGroupByOutputType = {
    id: bigint
    owner: bigint
    _count: HqCountAggregateOutputType | null
    _avg: HqAvgAggregateOutputType | null
    _sum: HqSumAggregateOutputType | null
    _min: HqMinAggregateOutputType | null
    _max: HqMaxAggregateOutputType | null
  }

  type GetHqGroupByPayload<T extends hqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HqGroupByOutputType[P]>
            : GetScalarType<T[P], HqGroupByOutputType[P]>
        }
      >
    >


  export type hqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    video?: boolean | videoDefaultArgs<ExtArgs>
    chunks?: boolean | hq$chunksArgs<ExtArgs>
    _count?: boolean | HqCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hq"]>

  export type hqSelectScalar = {
    id?: boolean
    owner?: boolean
  }

  export type hqInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | videoDefaultArgs<ExtArgs>
    chunks?: boolean | hq$chunksArgs<ExtArgs>
    _count?: boolean | HqCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $hqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hq"
    objects: {
      video: Prisma.$videoPayload<ExtArgs>
      chunks: Prisma.$chunksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      owner: bigint
    }, ExtArgs["result"]["hq"]>
    composites: {}
  }


  type hqGetPayload<S extends boolean | null | undefined | hqDefaultArgs> = $Result.GetResult<Prisma.$hqPayload, S>

  type hqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<hqFindManyArgs, 'select' | 'include'> & {
      select?: HqCountAggregateInputType | true
    }

  export interface hqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hq'], meta: { name: 'hq' } }
    /**
     * Find zero or one Hq that matches the filter.
     * @param {hqFindUniqueArgs} args - Arguments to find a Hq
     * @example
     * // Get one Hq
     * const hq = await prisma.hq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends hqFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, hqFindUniqueArgs<ExtArgs>>
    ): Prisma__hqClient<$Result.GetResult<Prisma.$hqPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Hq that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {hqFindUniqueOrThrowArgs} args - Arguments to find a Hq
     * @example
     * // Get one Hq
     * const hq = await prisma.hq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends hqFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hqFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__hqClient<$Result.GetResult<Prisma.$hqPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Hq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hqFindFirstArgs} args - Arguments to find a Hq
     * @example
     * // Get one Hq
     * const hq = await prisma.hq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends hqFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, hqFindFirstArgs<ExtArgs>>
    ): Prisma__hqClient<$Result.GetResult<Prisma.$hqPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Hq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hqFindFirstOrThrowArgs} args - Arguments to find a Hq
     * @example
     * // Get one Hq
     * const hq = await prisma.hq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends hqFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hqFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__hqClient<$Result.GetResult<Prisma.$hqPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Hqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hqFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hqs
     * const hqs = await prisma.hq.findMany()
     * 
     * // Get first 10 Hqs
     * const hqs = await prisma.hq.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hqWithIdOnly = await prisma.hq.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends hqFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hqFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hqPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Hq.
     * @param {hqCreateArgs} args - Arguments to create a Hq.
     * @example
     * // Create one Hq
     * const Hq = await prisma.hq.create({
     *   data: {
     *     // ... data to create a Hq
     *   }
     * })
     * 
    **/
    create<T extends hqCreateArgs<ExtArgs>>(
      args: SelectSubset<T, hqCreateArgs<ExtArgs>>
    ): Prisma__hqClient<$Result.GetResult<Prisma.$hqPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Hqs.
     *     @param {hqCreateManyArgs} args - Arguments to create many Hqs.
     *     @example
     *     // Create many Hqs
     *     const hq = await prisma.hq.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends hqCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hqCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hq.
     * @param {hqDeleteArgs} args - Arguments to delete one Hq.
     * @example
     * // Delete one Hq
     * const Hq = await prisma.hq.delete({
     *   where: {
     *     // ... filter to delete one Hq
     *   }
     * })
     * 
    **/
    delete<T extends hqDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, hqDeleteArgs<ExtArgs>>
    ): Prisma__hqClient<$Result.GetResult<Prisma.$hqPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Hq.
     * @param {hqUpdateArgs} args - Arguments to update one Hq.
     * @example
     * // Update one Hq
     * const hq = await prisma.hq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends hqUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, hqUpdateArgs<ExtArgs>>
    ): Prisma__hqClient<$Result.GetResult<Prisma.$hqPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Hqs.
     * @param {hqDeleteManyArgs} args - Arguments to filter Hqs to delete.
     * @example
     * // Delete a few Hqs
     * const { count } = await prisma.hq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends hqDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hqDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hqs
     * const hq = await prisma.hq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends hqUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, hqUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hq.
     * @param {hqUpsertArgs} args - Arguments to update or create a Hq.
     * @example
     * // Update or create a Hq
     * const hq = await prisma.hq.upsert({
     *   create: {
     *     // ... data to create a Hq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hq we want to update
     *   }
     * })
    **/
    upsert<T extends hqUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, hqUpsertArgs<ExtArgs>>
    ): Prisma__hqClient<$Result.GetResult<Prisma.$hqPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Hqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hqCountArgs} args - Arguments to filter Hqs to count.
     * @example
     * // Count the number of Hqs
     * const count = await prisma.hq.count({
     *   where: {
     *     // ... the filter for the Hqs we want to count
     *   }
     * })
    **/
    count<T extends hqCountArgs>(
      args?: Subset<T, hqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HqAggregateArgs>(args: Subset<T, HqAggregateArgs>): Prisma.PrismaPromise<GetHqAggregateType<T>>

    /**
     * Group by Hq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hqGroupByArgs} args - Group by arguments.
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
      T extends hqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hqGroupByArgs['orderBy'] }
        : { orderBy?: hqGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, hqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hq model
   */
  readonly fields: hqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    video<T extends videoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, videoDefaultArgs<ExtArgs>>): Prisma__videoClient<$Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    chunks<T extends hq$chunksArgs<ExtArgs> = {}>(args?: Subset<T, hq$chunksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chunksPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the hq model
   */ 
  interface hqFieldRefs {
    readonly id: FieldRef<"hq", 'BigInt'>
    readonly owner: FieldRef<"hq", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * hq findUnique
   */
  export type hqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hq
     */
    select?: hqSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hqInclude<ExtArgs> | null
    /**
     * Filter, which hq to fetch.
     */
    where: hqWhereUniqueInput
  }


  /**
   * hq findUniqueOrThrow
   */
  export type hqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hq
     */
    select?: hqSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hqInclude<ExtArgs> | null
    /**
     * Filter, which hq to fetch.
     */
    where: hqWhereUniqueInput
  }


  /**
   * hq findFirst
   */
  export type hqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hq
     */
    select?: hqSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hqInclude<ExtArgs> | null
    /**
     * Filter, which hq to fetch.
     */
    where?: hqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hqs to fetch.
     */
    orderBy?: hqOrderByWithRelationInput | hqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hqs.
     */
    cursor?: hqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hqs.
     */
    distinct?: HqScalarFieldEnum | HqScalarFieldEnum[]
  }


  /**
   * hq findFirstOrThrow
   */
  export type hqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hq
     */
    select?: hqSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hqInclude<ExtArgs> | null
    /**
     * Filter, which hq to fetch.
     */
    where?: hqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hqs to fetch.
     */
    orderBy?: hqOrderByWithRelationInput | hqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hqs.
     */
    cursor?: hqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hqs.
     */
    distinct?: HqScalarFieldEnum | HqScalarFieldEnum[]
  }


  /**
   * hq findMany
   */
  export type hqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hq
     */
    select?: hqSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hqInclude<ExtArgs> | null
    /**
     * Filter, which hqs to fetch.
     */
    where?: hqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hqs to fetch.
     */
    orderBy?: hqOrderByWithRelationInput | hqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hqs.
     */
    cursor?: hqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hqs.
     */
    skip?: number
    distinct?: HqScalarFieldEnum | HqScalarFieldEnum[]
  }


  /**
   * hq create
   */
  export type hqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hq
     */
    select?: hqSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hqInclude<ExtArgs> | null
    /**
     * The data needed to create a hq.
     */
    data: XOR<hqCreateInput, hqUncheckedCreateInput>
  }


  /**
   * hq createMany
   */
  export type hqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hqs.
     */
    data: hqCreateManyInput | hqCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * hq update
   */
  export type hqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hq
     */
    select?: hqSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hqInclude<ExtArgs> | null
    /**
     * The data needed to update a hq.
     */
    data: XOR<hqUpdateInput, hqUncheckedUpdateInput>
    /**
     * Choose, which hq to update.
     */
    where: hqWhereUniqueInput
  }


  /**
   * hq updateMany
   */
  export type hqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hqs.
     */
    data: XOR<hqUpdateManyMutationInput, hqUncheckedUpdateManyInput>
    /**
     * Filter which hqs to update
     */
    where?: hqWhereInput
  }


  /**
   * hq upsert
   */
  export type hqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hq
     */
    select?: hqSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hqInclude<ExtArgs> | null
    /**
     * The filter to search for the hq to update in case it exists.
     */
    where: hqWhereUniqueInput
    /**
     * In case the hq found by the `where` argument doesn't exist, create a new hq with this data.
     */
    create: XOR<hqCreateInput, hqUncheckedCreateInput>
    /**
     * In case the hq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hqUpdateInput, hqUncheckedUpdateInput>
  }


  /**
   * hq delete
   */
  export type hqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hq
     */
    select?: hqSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hqInclude<ExtArgs> | null
    /**
     * Filter which hq to delete.
     */
    where: hqWhereUniqueInput
  }


  /**
   * hq deleteMany
   */
  export type hqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hqs to delete
     */
    where?: hqWhereInput
  }


  /**
   * hq.chunks
   */
  export type hq$chunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chunks
     */
    select?: chunksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chunksInclude<ExtArgs> | null
    where?: chunksWhereInput
    orderBy?: chunksOrderByWithRelationInput | chunksOrderByWithRelationInput[]
    cursor?: chunksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChunksScalarFieldEnum | ChunksScalarFieldEnum[]
  }


  /**
   * hq without action
   */
  export type hqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hq
     */
    select?: hqSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hqInclude<ExtArgs> | null
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


  export const VideoScalarFieldEnum: {
    id: 'id'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const ThumbnailScalarFieldEnum: {
    id: 'id',
    owner: 'owner',
    contents: 'contents'
  };

  export type ThumbnailScalarFieldEnum = (typeof ThumbnailScalarFieldEnum)[keyof typeof ThumbnailScalarFieldEnum]


  export const Low_qualityScalarFieldEnum: {
    id: 'id',
    owner: 'owner'
  };

  export type Low_qualityScalarFieldEnum = (typeof Low_qualityScalarFieldEnum)[keyof typeof Low_qualityScalarFieldEnum]


  export const ChunksScalarFieldEnum: {
    id: 'id',
    contents: 'contents',
    lq: 'lq',
    mq: 'mq',
    high_quality: 'high_quality'
  };

  export type ChunksScalarFieldEnum = (typeof ChunksScalarFieldEnum)[keyof typeof ChunksScalarFieldEnum]


  export const Mid_qualityScalarFieldEnum: {
    id: 'id',
    owner: 'owner'
  };

  export type Mid_qualityScalarFieldEnum = (typeof Mid_qualityScalarFieldEnum)[keyof typeof Mid_qualityScalarFieldEnum]


  export const HqScalarFieldEnum: {
    id: 'id',
    owner: 'owner'
  };

  export type HqScalarFieldEnum = (typeof HqScalarFieldEnum)[keyof typeof HqScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


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


  export type videoWhereInput = {
    AND?: videoWhereInput | videoWhereInput[]
    OR?: videoWhereInput[]
    NOT?: videoWhereInput | videoWhereInput[]
    id?: BigIntFilter<"video"> | bigint | number
    low_quality?: Low_qualityListRelationFilter
    mid_quality?: Mid_qualityListRelationFilter
    hq?: HqListRelationFilter
    thumbnail?: ThumbnailListRelationFilter
  }

  export type videoOrderByWithRelationInput = {
    id?: SortOrder
    low_quality?: low_qualityOrderByRelationAggregateInput
    mid_quality?: mid_qualityOrderByRelationAggregateInput
    hq?: hqOrderByRelationAggregateInput
    thumbnail?: thumbnailOrderByRelationAggregateInput
  }

  export type videoWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: videoWhereInput | videoWhereInput[]
    OR?: videoWhereInput[]
    NOT?: videoWhereInput | videoWhereInput[]
    low_quality?: Low_qualityListRelationFilter
    mid_quality?: Mid_qualityListRelationFilter
    hq?: HqListRelationFilter
    thumbnail?: ThumbnailListRelationFilter
  }, "id">

  export type videoOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: videoCountOrderByAggregateInput
    _avg?: videoAvgOrderByAggregateInput
    _max?: videoMaxOrderByAggregateInput
    _min?: videoMinOrderByAggregateInput
    _sum?: videoSumOrderByAggregateInput
  }

  export type videoScalarWhereWithAggregatesInput = {
    AND?: videoScalarWhereWithAggregatesInput | videoScalarWhereWithAggregatesInput[]
    OR?: videoScalarWhereWithAggregatesInput[]
    NOT?: videoScalarWhereWithAggregatesInput | videoScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"video"> | bigint | number
  }

  export type thumbnailWhereInput = {
    AND?: thumbnailWhereInput | thumbnailWhereInput[]
    OR?: thumbnailWhereInput[]
    NOT?: thumbnailWhereInput | thumbnailWhereInput[]
    id?: BigIntFilter<"thumbnail"> | bigint | number
    owner?: BigIntFilter<"thumbnail"> | bigint | number
    contents?: BytesFilter<"thumbnail"> | Buffer
    video?: XOR<VideoRelationFilter, videoWhereInput>
  }

  export type thumbnailOrderByWithRelationInput = {
    id?: SortOrder
    owner?: SortOrder
    contents?: SortOrder
    video?: videoOrderByWithRelationInput
  }

  export type thumbnailWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: thumbnailWhereInput | thumbnailWhereInput[]
    OR?: thumbnailWhereInput[]
    NOT?: thumbnailWhereInput | thumbnailWhereInput[]
    owner?: BigIntFilter<"thumbnail"> | bigint | number
    contents?: BytesFilter<"thumbnail"> | Buffer
    video?: XOR<VideoRelationFilter, videoWhereInput>
  }, "id">

  export type thumbnailOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    contents?: SortOrder
    _count?: thumbnailCountOrderByAggregateInput
    _avg?: thumbnailAvgOrderByAggregateInput
    _max?: thumbnailMaxOrderByAggregateInput
    _min?: thumbnailMinOrderByAggregateInput
    _sum?: thumbnailSumOrderByAggregateInput
  }

  export type thumbnailScalarWhereWithAggregatesInput = {
    AND?: thumbnailScalarWhereWithAggregatesInput | thumbnailScalarWhereWithAggregatesInput[]
    OR?: thumbnailScalarWhereWithAggregatesInput[]
    NOT?: thumbnailScalarWhereWithAggregatesInput | thumbnailScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"thumbnail"> | bigint | number
    owner?: BigIntWithAggregatesFilter<"thumbnail"> | bigint | number
    contents?: BytesWithAggregatesFilter<"thumbnail"> | Buffer
  }

  export type low_qualityWhereInput = {
    AND?: low_qualityWhereInput | low_qualityWhereInput[]
    OR?: low_qualityWhereInput[]
    NOT?: low_qualityWhereInput | low_qualityWhereInput[]
    id?: BigIntFilter<"low_quality"> | bigint | number
    owner?: BigIntFilter<"low_quality"> | bigint | number
    video?: XOR<VideoRelationFilter, videoWhereInput>
    chunks?: ChunksListRelationFilter
  }

  export type low_qualityOrderByWithRelationInput = {
    id?: SortOrder
    owner?: SortOrder
    video?: videoOrderByWithRelationInput
    chunks?: chunksOrderByRelationAggregateInput
  }

  export type low_qualityWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: low_qualityWhereInput | low_qualityWhereInput[]
    OR?: low_qualityWhereInput[]
    NOT?: low_qualityWhereInput | low_qualityWhereInput[]
    owner?: BigIntFilter<"low_quality"> | bigint | number
    video?: XOR<VideoRelationFilter, videoWhereInput>
    chunks?: ChunksListRelationFilter
  }, "id">

  export type low_qualityOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    _count?: low_qualityCountOrderByAggregateInput
    _avg?: low_qualityAvgOrderByAggregateInput
    _max?: low_qualityMaxOrderByAggregateInput
    _min?: low_qualityMinOrderByAggregateInput
    _sum?: low_qualitySumOrderByAggregateInput
  }

  export type low_qualityScalarWhereWithAggregatesInput = {
    AND?: low_qualityScalarWhereWithAggregatesInput | low_qualityScalarWhereWithAggregatesInput[]
    OR?: low_qualityScalarWhereWithAggregatesInput[]
    NOT?: low_qualityScalarWhereWithAggregatesInput | low_qualityScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"low_quality"> | bigint | number
    owner?: BigIntWithAggregatesFilter<"low_quality"> | bigint | number
  }

  export type chunksWhereInput = {
    AND?: chunksWhereInput | chunksWhereInput[]
    OR?: chunksWhereInput[]
    NOT?: chunksWhereInput | chunksWhereInput[]
    id?: BigIntFilter<"chunks"> | bigint | number
    contents?: BytesFilter<"chunks"> | Buffer
    lq?: BigIntNullableFilter<"chunks"> | bigint | number | null
    mq?: BigIntNullableFilter<"chunks"> | bigint | number | null
    high_quality?: BigIntNullableFilter<"chunks"> | bigint | number | null
    low_quality?: XOR<Low_qualityNullableRelationFilter, low_qualityWhereInput> | null
    md_quality?: XOR<Mid_qualityNullableRelationFilter, mid_qualityWhereInput> | null
    hq?: XOR<HqNullableRelationFilter, hqWhereInput> | null
  }

  export type chunksOrderByWithRelationInput = {
    id?: SortOrder
    contents?: SortOrder
    lq?: SortOrderInput | SortOrder
    mq?: SortOrderInput | SortOrder
    high_quality?: SortOrderInput | SortOrder
    low_quality?: low_qualityOrderByWithRelationInput
    md_quality?: mid_qualityOrderByWithRelationInput
    hq?: hqOrderByWithRelationInput
  }

  export type chunksWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: chunksWhereInput | chunksWhereInput[]
    OR?: chunksWhereInput[]
    NOT?: chunksWhereInput | chunksWhereInput[]
    contents?: BytesFilter<"chunks"> | Buffer
    lq?: BigIntNullableFilter<"chunks"> | bigint | number | null
    mq?: BigIntNullableFilter<"chunks"> | bigint | number | null
    high_quality?: BigIntNullableFilter<"chunks"> | bigint | number | null
    low_quality?: XOR<Low_qualityNullableRelationFilter, low_qualityWhereInput> | null
    md_quality?: XOR<Mid_qualityNullableRelationFilter, mid_qualityWhereInput> | null
    hq?: XOR<HqNullableRelationFilter, hqWhereInput> | null
  }, "id">

  export type chunksOrderByWithAggregationInput = {
    id?: SortOrder
    contents?: SortOrder
    lq?: SortOrderInput | SortOrder
    mq?: SortOrderInput | SortOrder
    high_quality?: SortOrderInput | SortOrder
    _count?: chunksCountOrderByAggregateInput
    _avg?: chunksAvgOrderByAggregateInput
    _max?: chunksMaxOrderByAggregateInput
    _min?: chunksMinOrderByAggregateInput
    _sum?: chunksSumOrderByAggregateInput
  }

  export type chunksScalarWhereWithAggregatesInput = {
    AND?: chunksScalarWhereWithAggregatesInput | chunksScalarWhereWithAggregatesInput[]
    OR?: chunksScalarWhereWithAggregatesInput[]
    NOT?: chunksScalarWhereWithAggregatesInput | chunksScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"chunks"> | bigint | number
    contents?: BytesWithAggregatesFilter<"chunks"> | Buffer
    lq?: BigIntNullableWithAggregatesFilter<"chunks"> | bigint | number | null
    mq?: BigIntNullableWithAggregatesFilter<"chunks"> | bigint | number | null
    high_quality?: BigIntNullableWithAggregatesFilter<"chunks"> | bigint | number | null
  }

  export type mid_qualityWhereInput = {
    AND?: mid_qualityWhereInput | mid_qualityWhereInput[]
    OR?: mid_qualityWhereInput[]
    NOT?: mid_qualityWhereInput | mid_qualityWhereInput[]
    id?: BigIntFilter<"mid_quality"> | bigint | number
    owner?: BigIntFilter<"mid_quality"> | bigint | number
    video?: XOR<VideoRelationFilter, videoWhereInput>
    chunks?: ChunksListRelationFilter
  }

  export type mid_qualityOrderByWithRelationInput = {
    id?: SortOrder
    owner?: SortOrder
    video?: videoOrderByWithRelationInput
    chunks?: chunksOrderByRelationAggregateInput
  }

  export type mid_qualityWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: mid_qualityWhereInput | mid_qualityWhereInput[]
    OR?: mid_qualityWhereInput[]
    NOT?: mid_qualityWhereInput | mid_qualityWhereInput[]
    owner?: BigIntFilter<"mid_quality"> | bigint | number
    video?: XOR<VideoRelationFilter, videoWhereInput>
    chunks?: ChunksListRelationFilter
  }, "id">

  export type mid_qualityOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    _count?: mid_qualityCountOrderByAggregateInput
    _avg?: mid_qualityAvgOrderByAggregateInput
    _max?: mid_qualityMaxOrderByAggregateInput
    _min?: mid_qualityMinOrderByAggregateInput
    _sum?: mid_qualitySumOrderByAggregateInput
  }

  export type mid_qualityScalarWhereWithAggregatesInput = {
    AND?: mid_qualityScalarWhereWithAggregatesInput | mid_qualityScalarWhereWithAggregatesInput[]
    OR?: mid_qualityScalarWhereWithAggregatesInput[]
    NOT?: mid_qualityScalarWhereWithAggregatesInput | mid_qualityScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"mid_quality"> | bigint | number
    owner?: BigIntWithAggregatesFilter<"mid_quality"> | bigint | number
  }

  export type hqWhereInput = {
    AND?: hqWhereInput | hqWhereInput[]
    OR?: hqWhereInput[]
    NOT?: hqWhereInput | hqWhereInput[]
    id?: BigIntFilter<"hq"> | bigint | number
    owner?: BigIntFilter<"hq"> | bigint | number
    video?: XOR<VideoRelationFilter, videoWhereInput>
    chunks?: ChunksListRelationFilter
  }

  export type hqOrderByWithRelationInput = {
    id?: SortOrder
    owner?: SortOrder
    video?: videoOrderByWithRelationInput
    chunks?: chunksOrderByRelationAggregateInput
  }

  export type hqWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: hqWhereInput | hqWhereInput[]
    OR?: hqWhereInput[]
    NOT?: hqWhereInput | hqWhereInput[]
    owner?: BigIntFilter<"hq"> | bigint | number
    video?: XOR<VideoRelationFilter, videoWhereInput>
    chunks?: ChunksListRelationFilter
  }, "id">

  export type hqOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    _count?: hqCountOrderByAggregateInput
    _avg?: hqAvgOrderByAggregateInput
    _max?: hqMaxOrderByAggregateInput
    _min?: hqMinOrderByAggregateInput
    _sum?: hqSumOrderByAggregateInput
  }

  export type hqScalarWhereWithAggregatesInput = {
    AND?: hqScalarWhereWithAggregatesInput | hqScalarWhereWithAggregatesInput[]
    OR?: hqScalarWhereWithAggregatesInput[]
    NOT?: hqScalarWhereWithAggregatesInput | hqScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"hq"> | bigint | number
    owner?: BigIntWithAggregatesFilter<"hq"> | bigint | number
  }

  export type videoCreateInput = {
    id?: bigint | number
    low_quality?: low_qualityCreateNestedManyWithoutVideoInput
    mid_quality?: mid_qualityCreateNestedManyWithoutVideoInput
    hq?: hqCreateNestedManyWithoutVideoInput
    thumbnail?: thumbnailCreateNestedManyWithoutVideoInput
  }

  export type videoUncheckedCreateInput = {
    id?: bigint | number
    low_quality?: low_qualityUncheckedCreateNestedManyWithoutVideoInput
    mid_quality?: mid_qualityUncheckedCreateNestedManyWithoutVideoInput
    hq?: hqUncheckedCreateNestedManyWithoutVideoInput
    thumbnail?: thumbnailUncheckedCreateNestedManyWithoutVideoInput
  }

  export type videoUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    low_quality?: low_qualityUpdateManyWithoutVideoNestedInput
    mid_quality?: mid_qualityUpdateManyWithoutVideoNestedInput
    hq?: hqUpdateManyWithoutVideoNestedInput
    thumbnail?: thumbnailUpdateManyWithoutVideoNestedInput
  }

  export type videoUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    low_quality?: low_qualityUncheckedUpdateManyWithoutVideoNestedInput
    mid_quality?: mid_qualityUncheckedUpdateManyWithoutVideoNestedInput
    hq?: hqUncheckedUpdateManyWithoutVideoNestedInput
    thumbnail?: thumbnailUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type videoCreateManyInput = {
    id?: bigint | number
  }

  export type videoUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type videoUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type thumbnailCreateInput = {
    id?: bigint | number
    contents: Buffer
    video: videoCreateNestedOneWithoutThumbnailInput
  }

  export type thumbnailUncheckedCreateInput = {
    id?: bigint | number
    owner: bigint | number
    contents: Buffer
  }

  export type thumbnailUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
    video?: videoUpdateOneRequiredWithoutThumbnailNestedInput
  }

  export type thumbnailUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type thumbnailCreateManyInput = {
    id?: bigint | number
    owner: bigint | number
    contents: Buffer
  }

  export type thumbnailUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type thumbnailUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type low_qualityCreateInput = {
    id?: bigint | number
    video: videoCreateNestedOneWithoutLow_qualityInput
    chunks?: chunksCreateNestedManyWithoutLow_qualityInput
  }

  export type low_qualityUncheckedCreateInput = {
    id?: bigint | number
    owner: bigint | number
    chunks?: chunksUncheckedCreateNestedManyWithoutLow_qualityInput
  }

  export type low_qualityUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: videoUpdateOneRequiredWithoutLow_qualityNestedInput
    chunks?: chunksUpdateManyWithoutLow_qualityNestedInput
  }

  export type low_qualityUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: BigIntFieldUpdateOperationsInput | bigint | number
    chunks?: chunksUncheckedUpdateManyWithoutLow_qualityNestedInput
  }

  export type low_qualityCreateManyInput = {
    id?: bigint | number
    owner: bigint | number
  }

  export type low_qualityUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type low_qualityUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type chunksCreateInput = {
    id?: bigint | number
    contents: Buffer
    low_quality?: low_qualityCreateNestedOneWithoutChunksInput
    md_quality?: mid_qualityCreateNestedOneWithoutChunksInput
    hq?: hqCreateNestedOneWithoutChunksInput
  }

  export type chunksUncheckedCreateInput = {
    id?: bigint | number
    contents: Buffer
    lq?: bigint | number | null
    mq?: bigint | number | null
    high_quality?: bigint | number | null
  }

  export type chunksUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
    low_quality?: low_qualityUpdateOneWithoutChunksNestedInput
    md_quality?: mid_qualityUpdateOneWithoutChunksNestedInput
    hq?: hqUpdateOneWithoutChunksNestedInput
  }

  export type chunksUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
    lq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    high_quality?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type chunksCreateManyInput = {
    id?: bigint | number
    contents: Buffer
    lq?: bigint | number | null
    mq?: bigint | number | null
    high_quality?: bigint | number | null
  }

  export type chunksUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type chunksUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
    lq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    high_quality?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type mid_qualityCreateInput = {
    id?: bigint | number
    video: videoCreateNestedOneWithoutMid_qualityInput
    chunks?: chunksCreateNestedManyWithoutMd_qualityInput
  }

  export type mid_qualityUncheckedCreateInput = {
    id?: bigint | number
    owner: bigint | number
    chunks?: chunksUncheckedCreateNestedManyWithoutMd_qualityInput
  }

  export type mid_qualityUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: videoUpdateOneRequiredWithoutMid_qualityNestedInput
    chunks?: chunksUpdateManyWithoutMd_qualityNestedInput
  }

  export type mid_qualityUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: BigIntFieldUpdateOperationsInput | bigint | number
    chunks?: chunksUncheckedUpdateManyWithoutMd_qualityNestedInput
  }

  export type mid_qualityCreateManyInput = {
    id?: bigint | number
    owner: bigint | number
  }

  export type mid_qualityUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type mid_qualityUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type hqCreateInput = {
    id?: bigint | number
    video: videoCreateNestedOneWithoutHqInput
    chunks?: chunksCreateNestedManyWithoutHqInput
  }

  export type hqUncheckedCreateInput = {
    id?: bigint | number
    owner: bigint | number
    chunks?: chunksUncheckedCreateNestedManyWithoutHqInput
  }

  export type hqUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: videoUpdateOneRequiredWithoutHqNestedInput
    chunks?: chunksUpdateManyWithoutHqNestedInput
  }

  export type hqUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: BigIntFieldUpdateOperationsInput | bigint | number
    chunks?: chunksUncheckedUpdateManyWithoutHqNestedInput
  }

  export type hqCreateManyInput = {
    id?: bigint | number
    owner: bigint | number
  }

  export type hqUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type hqUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: BigIntFieldUpdateOperationsInput | bigint | number
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

  export type Low_qualityListRelationFilter = {
    every?: low_qualityWhereInput
    some?: low_qualityWhereInput
    none?: low_qualityWhereInput
  }

  export type Mid_qualityListRelationFilter = {
    every?: mid_qualityWhereInput
    some?: mid_qualityWhereInput
    none?: mid_qualityWhereInput
  }

  export type HqListRelationFilter = {
    every?: hqWhereInput
    some?: hqWhereInput
    none?: hqWhereInput
  }

  export type ThumbnailListRelationFilter = {
    every?: thumbnailWhereInput
    some?: thumbnailWhereInput
    none?: thumbnailWhereInput
  }

  export type low_qualityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mid_qualityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hqOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type thumbnailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type videoCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type videoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type videoMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type videoMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type videoSumOrderByAggregateInput = {
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

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type VideoRelationFilter = {
    is?: videoWhereInput
    isNot?: videoWhereInput
  }

  export type thumbnailCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    contents?: SortOrder
  }

  export type thumbnailAvgOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type thumbnailMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    contents?: SortOrder
  }

  export type thumbnailMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    contents?: SortOrder
  }

  export type thumbnailSumOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type ChunksListRelationFilter = {
    every?: chunksWhereInput
    some?: chunksWhereInput
    none?: chunksWhereInput
  }

  export type chunksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type low_qualityCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type low_qualityAvgOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type low_qualityMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type low_qualityMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type low_qualitySumOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type Low_qualityNullableRelationFilter = {
    is?: low_qualityWhereInput | null
    isNot?: low_qualityWhereInput | null
  }

  export type Mid_qualityNullableRelationFilter = {
    is?: mid_qualityWhereInput | null
    isNot?: mid_qualityWhereInput | null
  }

  export type HqNullableRelationFilter = {
    is?: hqWhereInput | null
    isNot?: hqWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type chunksCountOrderByAggregateInput = {
    id?: SortOrder
    contents?: SortOrder
    lq?: SortOrder
    mq?: SortOrder
    high_quality?: SortOrder
  }

  export type chunksAvgOrderByAggregateInput = {
    id?: SortOrder
    lq?: SortOrder
    mq?: SortOrder
    high_quality?: SortOrder
  }

  export type chunksMaxOrderByAggregateInput = {
    id?: SortOrder
    contents?: SortOrder
    lq?: SortOrder
    mq?: SortOrder
    high_quality?: SortOrder
  }

  export type chunksMinOrderByAggregateInput = {
    id?: SortOrder
    contents?: SortOrder
    lq?: SortOrder
    mq?: SortOrder
    high_quality?: SortOrder
  }

  export type chunksSumOrderByAggregateInput = {
    id?: SortOrder
    lq?: SortOrder
    mq?: SortOrder
    high_quality?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type mid_qualityCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type mid_qualityAvgOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type mid_qualityMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type mid_qualityMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type mid_qualitySumOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type hqCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type hqAvgOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type hqMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type hqMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type hqSumOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type low_qualityCreateNestedManyWithoutVideoInput = {
    create?: XOR<low_qualityCreateWithoutVideoInput, low_qualityUncheckedCreateWithoutVideoInput> | low_qualityCreateWithoutVideoInput[] | low_qualityUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: low_qualityCreateOrConnectWithoutVideoInput | low_qualityCreateOrConnectWithoutVideoInput[]
    createMany?: low_qualityCreateManyVideoInputEnvelope
    connect?: low_qualityWhereUniqueInput | low_qualityWhereUniqueInput[]
  }

  export type mid_qualityCreateNestedManyWithoutVideoInput = {
    create?: XOR<mid_qualityCreateWithoutVideoInput, mid_qualityUncheckedCreateWithoutVideoInput> | mid_qualityCreateWithoutVideoInput[] | mid_qualityUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: mid_qualityCreateOrConnectWithoutVideoInput | mid_qualityCreateOrConnectWithoutVideoInput[]
    createMany?: mid_qualityCreateManyVideoInputEnvelope
    connect?: mid_qualityWhereUniqueInput | mid_qualityWhereUniqueInput[]
  }

  export type hqCreateNestedManyWithoutVideoInput = {
    create?: XOR<hqCreateWithoutVideoInput, hqUncheckedCreateWithoutVideoInput> | hqCreateWithoutVideoInput[] | hqUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: hqCreateOrConnectWithoutVideoInput | hqCreateOrConnectWithoutVideoInput[]
    createMany?: hqCreateManyVideoInputEnvelope
    connect?: hqWhereUniqueInput | hqWhereUniqueInput[]
  }

  export type thumbnailCreateNestedManyWithoutVideoInput = {
    create?: XOR<thumbnailCreateWithoutVideoInput, thumbnailUncheckedCreateWithoutVideoInput> | thumbnailCreateWithoutVideoInput[] | thumbnailUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: thumbnailCreateOrConnectWithoutVideoInput | thumbnailCreateOrConnectWithoutVideoInput[]
    createMany?: thumbnailCreateManyVideoInputEnvelope
    connect?: thumbnailWhereUniqueInput | thumbnailWhereUniqueInput[]
  }

  export type low_qualityUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<low_qualityCreateWithoutVideoInput, low_qualityUncheckedCreateWithoutVideoInput> | low_qualityCreateWithoutVideoInput[] | low_qualityUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: low_qualityCreateOrConnectWithoutVideoInput | low_qualityCreateOrConnectWithoutVideoInput[]
    createMany?: low_qualityCreateManyVideoInputEnvelope
    connect?: low_qualityWhereUniqueInput | low_qualityWhereUniqueInput[]
  }

  export type mid_qualityUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<mid_qualityCreateWithoutVideoInput, mid_qualityUncheckedCreateWithoutVideoInput> | mid_qualityCreateWithoutVideoInput[] | mid_qualityUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: mid_qualityCreateOrConnectWithoutVideoInput | mid_qualityCreateOrConnectWithoutVideoInput[]
    createMany?: mid_qualityCreateManyVideoInputEnvelope
    connect?: mid_qualityWhereUniqueInput | mid_qualityWhereUniqueInput[]
  }

  export type hqUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<hqCreateWithoutVideoInput, hqUncheckedCreateWithoutVideoInput> | hqCreateWithoutVideoInput[] | hqUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: hqCreateOrConnectWithoutVideoInput | hqCreateOrConnectWithoutVideoInput[]
    createMany?: hqCreateManyVideoInputEnvelope
    connect?: hqWhereUniqueInput | hqWhereUniqueInput[]
  }

  export type thumbnailUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<thumbnailCreateWithoutVideoInput, thumbnailUncheckedCreateWithoutVideoInput> | thumbnailCreateWithoutVideoInput[] | thumbnailUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: thumbnailCreateOrConnectWithoutVideoInput | thumbnailCreateOrConnectWithoutVideoInput[]
    createMany?: thumbnailCreateManyVideoInputEnvelope
    connect?: thumbnailWhereUniqueInput | thumbnailWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type low_qualityUpdateManyWithoutVideoNestedInput = {
    create?: XOR<low_qualityCreateWithoutVideoInput, low_qualityUncheckedCreateWithoutVideoInput> | low_qualityCreateWithoutVideoInput[] | low_qualityUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: low_qualityCreateOrConnectWithoutVideoInput | low_qualityCreateOrConnectWithoutVideoInput[]
    upsert?: low_qualityUpsertWithWhereUniqueWithoutVideoInput | low_qualityUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: low_qualityCreateManyVideoInputEnvelope
    set?: low_qualityWhereUniqueInput | low_qualityWhereUniqueInput[]
    disconnect?: low_qualityWhereUniqueInput | low_qualityWhereUniqueInput[]
    delete?: low_qualityWhereUniqueInput | low_qualityWhereUniqueInput[]
    connect?: low_qualityWhereUniqueInput | low_qualityWhereUniqueInput[]
    update?: low_qualityUpdateWithWhereUniqueWithoutVideoInput | low_qualityUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: low_qualityUpdateManyWithWhereWithoutVideoInput | low_qualityUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: low_qualityScalarWhereInput | low_qualityScalarWhereInput[]
  }

  export type mid_qualityUpdateManyWithoutVideoNestedInput = {
    create?: XOR<mid_qualityCreateWithoutVideoInput, mid_qualityUncheckedCreateWithoutVideoInput> | mid_qualityCreateWithoutVideoInput[] | mid_qualityUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: mid_qualityCreateOrConnectWithoutVideoInput | mid_qualityCreateOrConnectWithoutVideoInput[]
    upsert?: mid_qualityUpsertWithWhereUniqueWithoutVideoInput | mid_qualityUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: mid_qualityCreateManyVideoInputEnvelope
    set?: mid_qualityWhereUniqueInput | mid_qualityWhereUniqueInput[]
    disconnect?: mid_qualityWhereUniqueInput | mid_qualityWhereUniqueInput[]
    delete?: mid_qualityWhereUniqueInput | mid_qualityWhereUniqueInput[]
    connect?: mid_qualityWhereUniqueInput | mid_qualityWhereUniqueInput[]
    update?: mid_qualityUpdateWithWhereUniqueWithoutVideoInput | mid_qualityUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: mid_qualityUpdateManyWithWhereWithoutVideoInput | mid_qualityUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: mid_qualityScalarWhereInput | mid_qualityScalarWhereInput[]
  }

  export type hqUpdateManyWithoutVideoNestedInput = {
    create?: XOR<hqCreateWithoutVideoInput, hqUncheckedCreateWithoutVideoInput> | hqCreateWithoutVideoInput[] | hqUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: hqCreateOrConnectWithoutVideoInput | hqCreateOrConnectWithoutVideoInput[]
    upsert?: hqUpsertWithWhereUniqueWithoutVideoInput | hqUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: hqCreateManyVideoInputEnvelope
    set?: hqWhereUniqueInput | hqWhereUniqueInput[]
    disconnect?: hqWhereUniqueInput | hqWhereUniqueInput[]
    delete?: hqWhereUniqueInput | hqWhereUniqueInput[]
    connect?: hqWhereUniqueInput | hqWhereUniqueInput[]
    update?: hqUpdateWithWhereUniqueWithoutVideoInput | hqUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: hqUpdateManyWithWhereWithoutVideoInput | hqUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: hqScalarWhereInput | hqScalarWhereInput[]
  }

  export type thumbnailUpdateManyWithoutVideoNestedInput = {
    create?: XOR<thumbnailCreateWithoutVideoInput, thumbnailUncheckedCreateWithoutVideoInput> | thumbnailCreateWithoutVideoInput[] | thumbnailUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: thumbnailCreateOrConnectWithoutVideoInput | thumbnailCreateOrConnectWithoutVideoInput[]
    upsert?: thumbnailUpsertWithWhereUniqueWithoutVideoInput | thumbnailUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: thumbnailCreateManyVideoInputEnvelope
    set?: thumbnailWhereUniqueInput | thumbnailWhereUniqueInput[]
    disconnect?: thumbnailWhereUniqueInput | thumbnailWhereUniqueInput[]
    delete?: thumbnailWhereUniqueInput | thumbnailWhereUniqueInput[]
    connect?: thumbnailWhereUniqueInput | thumbnailWhereUniqueInput[]
    update?: thumbnailUpdateWithWhereUniqueWithoutVideoInput | thumbnailUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: thumbnailUpdateManyWithWhereWithoutVideoInput | thumbnailUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: thumbnailScalarWhereInput | thumbnailScalarWhereInput[]
  }

  export type low_qualityUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<low_qualityCreateWithoutVideoInput, low_qualityUncheckedCreateWithoutVideoInput> | low_qualityCreateWithoutVideoInput[] | low_qualityUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: low_qualityCreateOrConnectWithoutVideoInput | low_qualityCreateOrConnectWithoutVideoInput[]
    upsert?: low_qualityUpsertWithWhereUniqueWithoutVideoInput | low_qualityUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: low_qualityCreateManyVideoInputEnvelope
    set?: low_qualityWhereUniqueInput | low_qualityWhereUniqueInput[]
    disconnect?: low_qualityWhereUniqueInput | low_qualityWhereUniqueInput[]
    delete?: low_qualityWhereUniqueInput | low_qualityWhereUniqueInput[]
    connect?: low_qualityWhereUniqueInput | low_qualityWhereUniqueInput[]
    update?: low_qualityUpdateWithWhereUniqueWithoutVideoInput | low_qualityUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: low_qualityUpdateManyWithWhereWithoutVideoInput | low_qualityUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: low_qualityScalarWhereInput | low_qualityScalarWhereInput[]
  }

  export type mid_qualityUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<mid_qualityCreateWithoutVideoInput, mid_qualityUncheckedCreateWithoutVideoInput> | mid_qualityCreateWithoutVideoInput[] | mid_qualityUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: mid_qualityCreateOrConnectWithoutVideoInput | mid_qualityCreateOrConnectWithoutVideoInput[]
    upsert?: mid_qualityUpsertWithWhereUniqueWithoutVideoInput | mid_qualityUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: mid_qualityCreateManyVideoInputEnvelope
    set?: mid_qualityWhereUniqueInput | mid_qualityWhereUniqueInput[]
    disconnect?: mid_qualityWhereUniqueInput | mid_qualityWhereUniqueInput[]
    delete?: mid_qualityWhereUniqueInput | mid_qualityWhereUniqueInput[]
    connect?: mid_qualityWhereUniqueInput | mid_qualityWhereUniqueInput[]
    update?: mid_qualityUpdateWithWhereUniqueWithoutVideoInput | mid_qualityUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: mid_qualityUpdateManyWithWhereWithoutVideoInput | mid_qualityUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: mid_qualityScalarWhereInput | mid_qualityScalarWhereInput[]
  }

  export type hqUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<hqCreateWithoutVideoInput, hqUncheckedCreateWithoutVideoInput> | hqCreateWithoutVideoInput[] | hqUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: hqCreateOrConnectWithoutVideoInput | hqCreateOrConnectWithoutVideoInput[]
    upsert?: hqUpsertWithWhereUniqueWithoutVideoInput | hqUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: hqCreateManyVideoInputEnvelope
    set?: hqWhereUniqueInput | hqWhereUniqueInput[]
    disconnect?: hqWhereUniqueInput | hqWhereUniqueInput[]
    delete?: hqWhereUniqueInput | hqWhereUniqueInput[]
    connect?: hqWhereUniqueInput | hqWhereUniqueInput[]
    update?: hqUpdateWithWhereUniqueWithoutVideoInput | hqUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: hqUpdateManyWithWhereWithoutVideoInput | hqUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: hqScalarWhereInput | hqScalarWhereInput[]
  }

  export type thumbnailUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<thumbnailCreateWithoutVideoInput, thumbnailUncheckedCreateWithoutVideoInput> | thumbnailCreateWithoutVideoInput[] | thumbnailUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: thumbnailCreateOrConnectWithoutVideoInput | thumbnailCreateOrConnectWithoutVideoInput[]
    upsert?: thumbnailUpsertWithWhereUniqueWithoutVideoInput | thumbnailUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: thumbnailCreateManyVideoInputEnvelope
    set?: thumbnailWhereUniqueInput | thumbnailWhereUniqueInput[]
    disconnect?: thumbnailWhereUniqueInput | thumbnailWhereUniqueInput[]
    delete?: thumbnailWhereUniqueInput | thumbnailWhereUniqueInput[]
    connect?: thumbnailWhereUniqueInput | thumbnailWhereUniqueInput[]
    update?: thumbnailUpdateWithWhereUniqueWithoutVideoInput | thumbnailUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: thumbnailUpdateManyWithWhereWithoutVideoInput | thumbnailUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: thumbnailScalarWhereInput | thumbnailScalarWhereInput[]
  }

  export type videoCreateNestedOneWithoutThumbnailInput = {
    create?: XOR<videoCreateWithoutThumbnailInput, videoUncheckedCreateWithoutThumbnailInput>
    connectOrCreate?: videoCreateOrConnectWithoutThumbnailInput
    connect?: videoWhereUniqueInput
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type videoUpdateOneRequiredWithoutThumbnailNestedInput = {
    create?: XOR<videoCreateWithoutThumbnailInput, videoUncheckedCreateWithoutThumbnailInput>
    connectOrCreate?: videoCreateOrConnectWithoutThumbnailInput
    upsert?: videoUpsertWithoutThumbnailInput
    connect?: videoWhereUniqueInput
    update?: XOR<XOR<videoUpdateToOneWithWhereWithoutThumbnailInput, videoUpdateWithoutThumbnailInput>, videoUncheckedUpdateWithoutThumbnailInput>
  }

  export type videoCreateNestedOneWithoutLow_qualityInput = {
    create?: XOR<videoCreateWithoutLow_qualityInput, videoUncheckedCreateWithoutLow_qualityInput>
    connectOrCreate?: videoCreateOrConnectWithoutLow_qualityInput
    connect?: videoWhereUniqueInput
  }

  export type chunksCreateNestedManyWithoutLow_qualityInput = {
    create?: XOR<chunksCreateWithoutLow_qualityInput, chunksUncheckedCreateWithoutLow_qualityInput> | chunksCreateWithoutLow_qualityInput[] | chunksUncheckedCreateWithoutLow_qualityInput[]
    connectOrCreate?: chunksCreateOrConnectWithoutLow_qualityInput | chunksCreateOrConnectWithoutLow_qualityInput[]
    createMany?: chunksCreateManyLow_qualityInputEnvelope
    connect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
  }

  export type chunksUncheckedCreateNestedManyWithoutLow_qualityInput = {
    create?: XOR<chunksCreateWithoutLow_qualityInput, chunksUncheckedCreateWithoutLow_qualityInput> | chunksCreateWithoutLow_qualityInput[] | chunksUncheckedCreateWithoutLow_qualityInput[]
    connectOrCreate?: chunksCreateOrConnectWithoutLow_qualityInput | chunksCreateOrConnectWithoutLow_qualityInput[]
    createMany?: chunksCreateManyLow_qualityInputEnvelope
    connect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
  }

  export type videoUpdateOneRequiredWithoutLow_qualityNestedInput = {
    create?: XOR<videoCreateWithoutLow_qualityInput, videoUncheckedCreateWithoutLow_qualityInput>
    connectOrCreate?: videoCreateOrConnectWithoutLow_qualityInput
    upsert?: videoUpsertWithoutLow_qualityInput
    connect?: videoWhereUniqueInput
    update?: XOR<XOR<videoUpdateToOneWithWhereWithoutLow_qualityInput, videoUpdateWithoutLow_qualityInput>, videoUncheckedUpdateWithoutLow_qualityInput>
  }

  export type chunksUpdateManyWithoutLow_qualityNestedInput = {
    create?: XOR<chunksCreateWithoutLow_qualityInput, chunksUncheckedCreateWithoutLow_qualityInput> | chunksCreateWithoutLow_qualityInput[] | chunksUncheckedCreateWithoutLow_qualityInput[]
    connectOrCreate?: chunksCreateOrConnectWithoutLow_qualityInput | chunksCreateOrConnectWithoutLow_qualityInput[]
    upsert?: chunksUpsertWithWhereUniqueWithoutLow_qualityInput | chunksUpsertWithWhereUniqueWithoutLow_qualityInput[]
    createMany?: chunksCreateManyLow_qualityInputEnvelope
    set?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    disconnect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    delete?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    connect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    update?: chunksUpdateWithWhereUniqueWithoutLow_qualityInput | chunksUpdateWithWhereUniqueWithoutLow_qualityInput[]
    updateMany?: chunksUpdateManyWithWhereWithoutLow_qualityInput | chunksUpdateManyWithWhereWithoutLow_qualityInput[]
    deleteMany?: chunksScalarWhereInput | chunksScalarWhereInput[]
  }

  export type chunksUncheckedUpdateManyWithoutLow_qualityNestedInput = {
    create?: XOR<chunksCreateWithoutLow_qualityInput, chunksUncheckedCreateWithoutLow_qualityInput> | chunksCreateWithoutLow_qualityInput[] | chunksUncheckedCreateWithoutLow_qualityInput[]
    connectOrCreate?: chunksCreateOrConnectWithoutLow_qualityInput | chunksCreateOrConnectWithoutLow_qualityInput[]
    upsert?: chunksUpsertWithWhereUniqueWithoutLow_qualityInput | chunksUpsertWithWhereUniqueWithoutLow_qualityInput[]
    createMany?: chunksCreateManyLow_qualityInputEnvelope
    set?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    disconnect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    delete?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    connect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    update?: chunksUpdateWithWhereUniqueWithoutLow_qualityInput | chunksUpdateWithWhereUniqueWithoutLow_qualityInput[]
    updateMany?: chunksUpdateManyWithWhereWithoutLow_qualityInput | chunksUpdateManyWithWhereWithoutLow_qualityInput[]
    deleteMany?: chunksScalarWhereInput | chunksScalarWhereInput[]
  }

  export type low_qualityCreateNestedOneWithoutChunksInput = {
    create?: XOR<low_qualityCreateWithoutChunksInput, low_qualityUncheckedCreateWithoutChunksInput>
    connectOrCreate?: low_qualityCreateOrConnectWithoutChunksInput
    connect?: low_qualityWhereUniqueInput
  }

  export type mid_qualityCreateNestedOneWithoutChunksInput = {
    create?: XOR<mid_qualityCreateWithoutChunksInput, mid_qualityUncheckedCreateWithoutChunksInput>
    connectOrCreate?: mid_qualityCreateOrConnectWithoutChunksInput
    connect?: mid_qualityWhereUniqueInput
  }

  export type hqCreateNestedOneWithoutChunksInput = {
    create?: XOR<hqCreateWithoutChunksInput, hqUncheckedCreateWithoutChunksInput>
    connectOrCreate?: hqCreateOrConnectWithoutChunksInput
    connect?: hqWhereUniqueInput
  }

  export type low_qualityUpdateOneWithoutChunksNestedInput = {
    create?: XOR<low_qualityCreateWithoutChunksInput, low_qualityUncheckedCreateWithoutChunksInput>
    connectOrCreate?: low_qualityCreateOrConnectWithoutChunksInput
    upsert?: low_qualityUpsertWithoutChunksInput
    disconnect?: low_qualityWhereInput | boolean
    delete?: low_qualityWhereInput | boolean
    connect?: low_qualityWhereUniqueInput
    update?: XOR<XOR<low_qualityUpdateToOneWithWhereWithoutChunksInput, low_qualityUpdateWithoutChunksInput>, low_qualityUncheckedUpdateWithoutChunksInput>
  }

  export type mid_qualityUpdateOneWithoutChunksNestedInput = {
    create?: XOR<mid_qualityCreateWithoutChunksInput, mid_qualityUncheckedCreateWithoutChunksInput>
    connectOrCreate?: mid_qualityCreateOrConnectWithoutChunksInput
    upsert?: mid_qualityUpsertWithoutChunksInput
    disconnect?: mid_qualityWhereInput | boolean
    delete?: mid_qualityWhereInput | boolean
    connect?: mid_qualityWhereUniqueInput
    update?: XOR<XOR<mid_qualityUpdateToOneWithWhereWithoutChunksInput, mid_qualityUpdateWithoutChunksInput>, mid_qualityUncheckedUpdateWithoutChunksInput>
  }

  export type hqUpdateOneWithoutChunksNestedInput = {
    create?: XOR<hqCreateWithoutChunksInput, hqUncheckedCreateWithoutChunksInput>
    connectOrCreate?: hqCreateOrConnectWithoutChunksInput
    upsert?: hqUpsertWithoutChunksInput
    disconnect?: hqWhereInput | boolean
    delete?: hqWhereInput | boolean
    connect?: hqWhereUniqueInput
    update?: XOR<XOR<hqUpdateToOneWithWhereWithoutChunksInput, hqUpdateWithoutChunksInput>, hqUncheckedUpdateWithoutChunksInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type videoCreateNestedOneWithoutMid_qualityInput = {
    create?: XOR<videoCreateWithoutMid_qualityInput, videoUncheckedCreateWithoutMid_qualityInput>
    connectOrCreate?: videoCreateOrConnectWithoutMid_qualityInput
    connect?: videoWhereUniqueInput
  }

  export type chunksCreateNestedManyWithoutMd_qualityInput = {
    create?: XOR<chunksCreateWithoutMd_qualityInput, chunksUncheckedCreateWithoutMd_qualityInput> | chunksCreateWithoutMd_qualityInput[] | chunksUncheckedCreateWithoutMd_qualityInput[]
    connectOrCreate?: chunksCreateOrConnectWithoutMd_qualityInput | chunksCreateOrConnectWithoutMd_qualityInput[]
    createMany?: chunksCreateManyMd_qualityInputEnvelope
    connect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
  }

  export type chunksUncheckedCreateNestedManyWithoutMd_qualityInput = {
    create?: XOR<chunksCreateWithoutMd_qualityInput, chunksUncheckedCreateWithoutMd_qualityInput> | chunksCreateWithoutMd_qualityInput[] | chunksUncheckedCreateWithoutMd_qualityInput[]
    connectOrCreate?: chunksCreateOrConnectWithoutMd_qualityInput | chunksCreateOrConnectWithoutMd_qualityInput[]
    createMany?: chunksCreateManyMd_qualityInputEnvelope
    connect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
  }

  export type videoUpdateOneRequiredWithoutMid_qualityNestedInput = {
    create?: XOR<videoCreateWithoutMid_qualityInput, videoUncheckedCreateWithoutMid_qualityInput>
    connectOrCreate?: videoCreateOrConnectWithoutMid_qualityInput
    upsert?: videoUpsertWithoutMid_qualityInput
    connect?: videoWhereUniqueInput
    update?: XOR<XOR<videoUpdateToOneWithWhereWithoutMid_qualityInput, videoUpdateWithoutMid_qualityInput>, videoUncheckedUpdateWithoutMid_qualityInput>
  }

  export type chunksUpdateManyWithoutMd_qualityNestedInput = {
    create?: XOR<chunksCreateWithoutMd_qualityInput, chunksUncheckedCreateWithoutMd_qualityInput> | chunksCreateWithoutMd_qualityInput[] | chunksUncheckedCreateWithoutMd_qualityInput[]
    connectOrCreate?: chunksCreateOrConnectWithoutMd_qualityInput | chunksCreateOrConnectWithoutMd_qualityInput[]
    upsert?: chunksUpsertWithWhereUniqueWithoutMd_qualityInput | chunksUpsertWithWhereUniqueWithoutMd_qualityInput[]
    createMany?: chunksCreateManyMd_qualityInputEnvelope
    set?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    disconnect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    delete?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    connect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    update?: chunksUpdateWithWhereUniqueWithoutMd_qualityInput | chunksUpdateWithWhereUniqueWithoutMd_qualityInput[]
    updateMany?: chunksUpdateManyWithWhereWithoutMd_qualityInput | chunksUpdateManyWithWhereWithoutMd_qualityInput[]
    deleteMany?: chunksScalarWhereInput | chunksScalarWhereInput[]
  }

  export type chunksUncheckedUpdateManyWithoutMd_qualityNestedInput = {
    create?: XOR<chunksCreateWithoutMd_qualityInput, chunksUncheckedCreateWithoutMd_qualityInput> | chunksCreateWithoutMd_qualityInput[] | chunksUncheckedCreateWithoutMd_qualityInput[]
    connectOrCreate?: chunksCreateOrConnectWithoutMd_qualityInput | chunksCreateOrConnectWithoutMd_qualityInput[]
    upsert?: chunksUpsertWithWhereUniqueWithoutMd_qualityInput | chunksUpsertWithWhereUniqueWithoutMd_qualityInput[]
    createMany?: chunksCreateManyMd_qualityInputEnvelope
    set?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    disconnect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    delete?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    connect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    update?: chunksUpdateWithWhereUniqueWithoutMd_qualityInput | chunksUpdateWithWhereUniqueWithoutMd_qualityInput[]
    updateMany?: chunksUpdateManyWithWhereWithoutMd_qualityInput | chunksUpdateManyWithWhereWithoutMd_qualityInput[]
    deleteMany?: chunksScalarWhereInput | chunksScalarWhereInput[]
  }

  export type videoCreateNestedOneWithoutHqInput = {
    create?: XOR<videoCreateWithoutHqInput, videoUncheckedCreateWithoutHqInput>
    connectOrCreate?: videoCreateOrConnectWithoutHqInput
    connect?: videoWhereUniqueInput
  }

  export type chunksCreateNestedManyWithoutHqInput = {
    create?: XOR<chunksCreateWithoutHqInput, chunksUncheckedCreateWithoutHqInput> | chunksCreateWithoutHqInput[] | chunksUncheckedCreateWithoutHqInput[]
    connectOrCreate?: chunksCreateOrConnectWithoutHqInput | chunksCreateOrConnectWithoutHqInput[]
    createMany?: chunksCreateManyHqInputEnvelope
    connect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
  }

  export type chunksUncheckedCreateNestedManyWithoutHqInput = {
    create?: XOR<chunksCreateWithoutHqInput, chunksUncheckedCreateWithoutHqInput> | chunksCreateWithoutHqInput[] | chunksUncheckedCreateWithoutHqInput[]
    connectOrCreate?: chunksCreateOrConnectWithoutHqInput | chunksCreateOrConnectWithoutHqInput[]
    createMany?: chunksCreateManyHqInputEnvelope
    connect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
  }

  export type videoUpdateOneRequiredWithoutHqNestedInput = {
    create?: XOR<videoCreateWithoutHqInput, videoUncheckedCreateWithoutHqInput>
    connectOrCreate?: videoCreateOrConnectWithoutHqInput
    upsert?: videoUpsertWithoutHqInput
    connect?: videoWhereUniqueInput
    update?: XOR<XOR<videoUpdateToOneWithWhereWithoutHqInput, videoUpdateWithoutHqInput>, videoUncheckedUpdateWithoutHqInput>
  }

  export type chunksUpdateManyWithoutHqNestedInput = {
    create?: XOR<chunksCreateWithoutHqInput, chunksUncheckedCreateWithoutHqInput> | chunksCreateWithoutHqInput[] | chunksUncheckedCreateWithoutHqInput[]
    connectOrCreate?: chunksCreateOrConnectWithoutHqInput | chunksCreateOrConnectWithoutHqInput[]
    upsert?: chunksUpsertWithWhereUniqueWithoutHqInput | chunksUpsertWithWhereUniqueWithoutHqInput[]
    createMany?: chunksCreateManyHqInputEnvelope
    set?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    disconnect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    delete?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    connect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    update?: chunksUpdateWithWhereUniqueWithoutHqInput | chunksUpdateWithWhereUniqueWithoutHqInput[]
    updateMany?: chunksUpdateManyWithWhereWithoutHqInput | chunksUpdateManyWithWhereWithoutHqInput[]
    deleteMany?: chunksScalarWhereInput | chunksScalarWhereInput[]
  }

  export type chunksUncheckedUpdateManyWithoutHqNestedInput = {
    create?: XOR<chunksCreateWithoutHqInput, chunksUncheckedCreateWithoutHqInput> | chunksCreateWithoutHqInput[] | chunksUncheckedCreateWithoutHqInput[]
    connectOrCreate?: chunksCreateOrConnectWithoutHqInput | chunksCreateOrConnectWithoutHqInput[]
    upsert?: chunksUpsertWithWhereUniqueWithoutHqInput | chunksUpsertWithWhereUniqueWithoutHqInput[]
    createMany?: chunksCreateManyHqInputEnvelope
    set?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    disconnect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    delete?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    connect?: chunksWhereUniqueInput | chunksWhereUniqueInput[]
    update?: chunksUpdateWithWhereUniqueWithoutHqInput | chunksUpdateWithWhereUniqueWithoutHqInput[]
    updateMany?: chunksUpdateManyWithWhereWithoutHqInput | chunksUpdateManyWithWhereWithoutHqInput[]
    deleteMany?: chunksScalarWhereInput | chunksScalarWhereInput[]
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

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type low_qualityCreateWithoutVideoInput = {
    id?: bigint | number
    chunks?: chunksCreateNestedManyWithoutLow_qualityInput
  }

  export type low_qualityUncheckedCreateWithoutVideoInput = {
    id?: bigint | number
    chunks?: chunksUncheckedCreateNestedManyWithoutLow_qualityInput
  }

  export type low_qualityCreateOrConnectWithoutVideoInput = {
    where: low_qualityWhereUniqueInput
    create: XOR<low_qualityCreateWithoutVideoInput, low_qualityUncheckedCreateWithoutVideoInput>
  }

  export type low_qualityCreateManyVideoInputEnvelope = {
    data: low_qualityCreateManyVideoInput | low_qualityCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type mid_qualityCreateWithoutVideoInput = {
    id?: bigint | number
    chunks?: chunksCreateNestedManyWithoutMd_qualityInput
  }

  export type mid_qualityUncheckedCreateWithoutVideoInput = {
    id?: bigint | number
    chunks?: chunksUncheckedCreateNestedManyWithoutMd_qualityInput
  }

  export type mid_qualityCreateOrConnectWithoutVideoInput = {
    where: mid_qualityWhereUniqueInput
    create: XOR<mid_qualityCreateWithoutVideoInput, mid_qualityUncheckedCreateWithoutVideoInput>
  }

  export type mid_qualityCreateManyVideoInputEnvelope = {
    data: mid_qualityCreateManyVideoInput | mid_qualityCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type hqCreateWithoutVideoInput = {
    id?: bigint | number
    chunks?: chunksCreateNestedManyWithoutHqInput
  }

  export type hqUncheckedCreateWithoutVideoInput = {
    id?: bigint | number
    chunks?: chunksUncheckedCreateNestedManyWithoutHqInput
  }

  export type hqCreateOrConnectWithoutVideoInput = {
    where: hqWhereUniqueInput
    create: XOR<hqCreateWithoutVideoInput, hqUncheckedCreateWithoutVideoInput>
  }

  export type hqCreateManyVideoInputEnvelope = {
    data: hqCreateManyVideoInput | hqCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type thumbnailCreateWithoutVideoInput = {
    id?: bigint | number
    contents: Buffer
  }

  export type thumbnailUncheckedCreateWithoutVideoInput = {
    id?: bigint | number
    contents: Buffer
  }

  export type thumbnailCreateOrConnectWithoutVideoInput = {
    where: thumbnailWhereUniqueInput
    create: XOR<thumbnailCreateWithoutVideoInput, thumbnailUncheckedCreateWithoutVideoInput>
  }

  export type thumbnailCreateManyVideoInputEnvelope = {
    data: thumbnailCreateManyVideoInput | thumbnailCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type low_qualityUpsertWithWhereUniqueWithoutVideoInput = {
    where: low_qualityWhereUniqueInput
    update: XOR<low_qualityUpdateWithoutVideoInput, low_qualityUncheckedUpdateWithoutVideoInput>
    create: XOR<low_qualityCreateWithoutVideoInput, low_qualityUncheckedCreateWithoutVideoInput>
  }

  export type low_qualityUpdateWithWhereUniqueWithoutVideoInput = {
    where: low_qualityWhereUniqueInput
    data: XOR<low_qualityUpdateWithoutVideoInput, low_qualityUncheckedUpdateWithoutVideoInput>
  }

  export type low_qualityUpdateManyWithWhereWithoutVideoInput = {
    where: low_qualityScalarWhereInput
    data: XOR<low_qualityUpdateManyMutationInput, low_qualityUncheckedUpdateManyWithoutVideoInput>
  }

  export type low_qualityScalarWhereInput = {
    AND?: low_qualityScalarWhereInput | low_qualityScalarWhereInput[]
    OR?: low_qualityScalarWhereInput[]
    NOT?: low_qualityScalarWhereInput | low_qualityScalarWhereInput[]
    id?: BigIntFilter<"low_quality"> | bigint | number
    owner?: BigIntFilter<"low_quality"> | bigint | number
  }

  export type mid_qualityUpsertWithWhereUniqueWithoutVideoInput = {
    where: mid_qualityWhereUniqueInput
    update: XOR<mid_qualityUpdateWithoutVideoInput, mid_qualityUncheckedUpdateWithoutVideoInput>
    create: XOR<mid_qualityCreateWithoutVideoInput, mid_qualityUncheckedCreateWithoutVideoInput>
  }

  export type mid_qualityUpdateWithWhereUniqueWithoutVideoInput = {
    where: mid_qualityWhereUniqueInput
    data: XOR<mid_qualityUpdateWithoutVideoInput, mid_qualityUncheckedUpdateWithoutVideoInput>
  }

  export type mid_qualityUpdateManyWithWhereWithoutVideoInput = {
    where: mid_qualityScalarWhereInput
    data: XOR<mid_qualityUpdateManyMutationInput, mid_qualityUncheckedUpdateManyWithoutVideoInput>
  }

  export type mid_qualityScalarWhereInput = {
    AND?: mid_qualityScalarWhereInput | mid_qualityScalarWhereInput[]
    OR?: mid_qualityScalarWhereInput[]
    NOT?: mid_qualityScalarWhereInput | mid_qualityScalarWhereInput[]
    id?: BigIntFilter<"mid_quality"> | bigint | number
    owner?: BigIntFilter<"mid_quality"> | bigint | number
  }

  export type hqUpsertWithWhereUniqueWithoutVideoInput = {
    where: hqWhereUniqueInput
    update: XOR<hqUpdateWithoutVideoInput, hqUncheckedUpdateWithoutVideoInput>
    create: XOR<hqCreateWithoutVideoInput, hqUncheckedCreateWithoutVideoInput>
  }

  export type hqUpdateWithWhereUniqueWithoutVideoInput = {
    where: hqWhereUniqueInput
    data: XOR<hqUpdateWithoutVideoInput, hqUncheckedUpdateWithoutVideoInput>
  }

  export type hqUpdateManyWithWhereWithoutVideoInput = {
    where: hqScalarWhereInput
    data: XOR<hqUpdateManyMutationInput, hqUncheckedUpdateManyWithoutVideoInput>
  }

  export type hqScalarWhereInput = {
    AND?: hqScalarWhereInput | hqScalarWhereInput[]
    OR?: hqScalarWhereInput[]
    NOT?: hqScalarWhereInput | hqScalarWhereInput[]
    id?: BigIntFilter<"hq"> | bigint | number
    owner?: BigIntFilter<"hq"> | bigint | number
  }

  export type thumbnailUpsertWithWhereUniqueWithoutVideoInput = {
    where: thumbnailWhereUniqueInput
    update: XOR<thumbnailUpdateWithoutVideoInput, thumbnailUncheckedUpdateWithoutVideoInput>
    create: XOR<thumbnailCreateWithoutVideoInput, thumbnailUncheckedCreateWithoutVideoInput>
  }

  export type thumbnailUpdateWithWhereUniqueWithoutVideoInput = {
    where: thumbnailWhereUniqueInput
    data: XOR<thumbnailUpdateWithoutVideoInput, thumbnailUncheckedUpdateWithoutVideoInput>
  }

  export type thumbnailUpdateManyWithWhereWithoutVideoInput = {
    where: thumbnailScalarWhereInput
    data: XOR<thumbnailUpdateManyMutationInput, thumbnailUncheckedUpdateManyWithoutVideoInput>
  }

  export type thumbnailScalarWhereInput = {
    AND?: thumbnailScalarWhereInput | thumbnailScalarWhereInput[]
    OR?: thumbnailScalarWhereInput[]
    NOT?: thumbnailScalarWhereInput | thumbnailScalarWhereInput[]
    id?: BigIntFilter<"thumbnail"> | bigint | number
    owner?: BigIntFilter<"thumbnail"> | bigint | number
    contents?: BytesFilter<"thumbnail"> | Buffer
  }

  export type videoCreateWithoutThumbnailInput = {
    id?: bigint | number
    low_quality?: low_qualityCreateNestedManyWithoutVideoInput
    mid_quality?: mid_qualityCreateNestedManyWithoutVideoInput
    hq?: hqCreateNestedManyWithoutVideoInput
  }

  export type videoUncheckedCreateWithoutThumbnailInput = {
    id?: bigint | number
    low_quality?: low_qualityUncheckedCreateNestedManyWithoutVideoInput
    mid_quality?: mid_qualityUncheckedCreateNestedManyWithoutVideoInput
    hq?: hqUncheckedCreateNestedManyWithoutVideoInput
  }

  export type videoCreateOrConnectWithoutThumbnailInput = {
    where: videoWhereUniqueInput
    create: XOR<videoCreateWithoutThumbnailInput, videoUncheckedCreateWithoutThumbnailInput>
  }

  export type videoUpsertWithoutThumbnailInput = {
    update: XOR<videoUpdateWithoutThumbnailInput, videoUncheckedUpdateWithoutThumbnailInput>
    create: XOR<videoCreateWithoutThumbnailInput, videoUncheckedCreateWithoutThumbnailInput>
    where?: videoWhereInput
  }

  export type videoUpdateToOneWithWhereWithoutThumbnailInput = {
    where?: videoWhereInput
    data: XOR<videoUpdateWithoutThumbnailInput, videoUncheckedUpdateWithoutThumbnailInput>
  }

  export type videoUpdateWithoutThumbnailInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    low_quality?: low_qualityUpdateManyWithoutVideoNestedInput
    mid_quality?: mid_qualityUpdateManyWithoutVideoNestedInput
    hq?: hqUpdateManyWithoutVideoNestedInput
  }

  export type videoUncheckedUpdateWithoutThumbnailInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    low_quality?: low_qualityUncheckedUpdateManyWithoutVideoNestedInput
    mid_quality?: mid_qualityUncheckedUpdateManyWithoutVideoNestedInput
    hq?: hqUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type videoCreateWithoutLow_qualityInput = {
    id?: bigint | number
    mid_quality?: mid_qualityCreateNestedManyWithoutVideoInput
    hq?: hqCreateNestedManyWithoutVideoInput
    thumbnail?: thumbnailCreateNestedManyWithoutVideoInput
  }

  export type videoUncheckedCreateWithoutLow_qualityInput = {
    id?: bigint | number
    mid_quality?: mid_qualityUncheckedCreateNestedManyWithoutVideoInput
    hq?: hqUncheckedCreateNestedManyWithoutVideoInput
    thumbnail?: thumbnailUncheckedCreateNestedManyWithoutVideoInput
  }

  export type videoCreateOrConnectWithoutLow_qualityInput = {
    where: videoWhereUniqueInput
    create: XOR<videoCreateWithoutLow_qualityInput, videoUncheckedCreateWithoutLow_qualityInput>
  }

  export type chunksCreateWithoutLow_qualityInput = {
    id?: bigint | number
    contents: Buffer
    md_quality?: mid_qualityCreateNestedOneWithoutChunksInput
    hq?: hqCreateNestedOneWithoutChunksInput
  }

  export type chunksUncheckedCreateWithoutLow_qualityInput = {
    id?: bigint | number
    contents: Buffer
    mq?: bigint | number | null
    high_quality?: bigint | number | null
  }

  export type chunksCreateOrConnectWithoutLow_qualityInput = {
    where: chunksWhereUniqueInput
    create: XOR<chunksCreateWithoutLow_qualityInput, chunksUncheckedCreateWithoutLow_qualityInput>
  }

  export type chunksCreateManyLow_qualityInputEnvelope = {
    data: chunksCreateManyLow_qualityInput | chunksCreateManyLow_qualityInput[]
    skipDuplicates?: boolean
  }

  export type videoUpsertWithoutLow_qualityInput = {
    update: XOR<videoUpdateWithoutLow_qualityInput, videoUncheckedUpdateWithoutLow_qualityInput>
    create: XOR<videoCreateWithoutLow_qualityInput, videoUncheckedCreateWithoutLow_qualityInput>
    where?: videoWhereInput
  }

  export type videoUpdateToOneWithWhereWithoutLow_qualityInput = {
    where?: videoWhereInput
    data: XOR<videoUpdateWithoutLow_qualityInput, videoUncheckedUpdateWithoutLow_qualityInput>
  }

  export type videoUpdateWithoutLow_qualityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    mid_quality?: mid_qualityUpdateManyWithoutVideoNestedInput
    hq?: hqUpdateManyWithoutVideoNestedInput
    thumbnail?: thumbnailUpdateManyWithoutVideoNestedInput
  }

  export type videoUncheckedUpdateWithoutLow_qualityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    mid_quality?: mid_qualityUncheckedUpdateManyWithoutVideoNestedInput
    hq?: hqUncheckedUpdateManyWithoutVideoNestedInput
    thumbnail?: thumbnailUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type chunksUpsertWithWhereUniqueWithoutLow_qualityInput = {
    where: chunksWhereUniqueInput
    update: XOR<chunksUpdateWithoutLow_qualityInput, chunksUncheckedUpdateWithoutLow_qualityInput>
    create: XOR<chunksCreateWithoutLow_qualityInput, chunksUncheckedCreateWithoutLow_qualityInput>
  }

  export type chunksUpdateWithWhereUniqueWithoutLow_qualityInput = {
    where: chunksWhereUniqueInput
    data: XOR<chunksUpdateWithoutLow_qualityInput, chunksUncheckedUpdateWithoutLow_qualityInput>
  }

  export type chunksUpdateManyWithWhereWithoutLow_qualityInput = {
    where: chunksScalarWhereInput
    data: XOR<chunksUpdateManyMutationInput, chunksUncheckedUpdateManyWithoutLow_qualityInput>
  }

  export type chunksScalarWhereInput = {
    AND?: chunksScalarWhereInput | chunksScalarWhereInput[]
    OR?: chunksScalarWhereInput[]
    NOT?: chunksScalarWhereInput | chunksScalarWhereInput[]
    id?: BigIntFilter<"chunks"> | bigint | number
    contents?: BytesFilter<"chunks"> | Buffer
    lq?: BigIntNullableFilter<"chunks"> | bigint | number | null
    mq?: BigIntNullableFilter<"chunks"> | bigint | number | null
    high_quality?: BigIntNullableFilter<"chunks"> | bigint | number | null
  }

  export type low_qualityCreateWithoutChunksInput = {
    id?: bigint | number
    video: videoCreateNestedOneWithoutLow_qualityInput
  }

  export type low_qualityUncheckedCreateWithoutChunksInput = {
    id?: bigint | number
    owner: bigint | number
  }

  export type low_qualityCreateOrConnectWithoutChunksInput = {
    where: low_qualityWhereUniqueInput
    create: XOR<low_qualityCreateWithoutChunksInput, low_qualityUncheckedCreateWithoutChunksInput>
  }

  export type mid_qualityCreateWithoutChunksInput = {
    id?: bigint | number
    video: videoCreateNestedOneWithoutMid_qualityInput
  }

  export type mid_qualityUncheckedCreateWithoutChunksInput = {
    id?: bigint | number
    owner: bigint | number
  }

  export type mid_qualityCreateOrConnectWithoutChunksInput = {
    where: mid_qualityWhereUniqueInput
    create: XOR<mid_qualityCreateWithoutChunksInput, mid_qualityUncheckedCreateWithoutChunksInput>
  }

  export type hqCreateWithoutChunksInput = {
    id?: bigint | number
    video: videoCreateNestedOneWithoutHqInput
  }

  export type hqUncheckedCreateWithoutChunksInput = {
    id?: bigint | number
    owner: bigint | number
  }

  export type hqCreateOrConnectWithoutChunksInput = {
    where: hqWhereUniqueInput
    create: XOR<hqCreateWithoutChunksInput, hqUncheckedCreateWithoutChunksInput>
  }

  export type low_qualityUpsertWithoutChunksInput = {
    update: XOR<low_qualityUpdateWithoutChunksInput, low_qualityUncheckedUpdateWithoutChunksInput>
    create: XOR<low_qualityCreateWithoutChunksInput, low_qualityUncheckedCreateWithoutChunksInput>
    where?: low_qualityWhereInput
  }

  export type low_qualityUpdateToOneWithWhereWithoutChunksInput = {
    where?: low_qualityWhereInput
    data: XOR<low_qualityUpdateWithoutChunksInput, low_qualityUncheckedUpdateWithoutChunksInput>
  }

  export type low_qualityUpdateWithoutChunksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: videoUpdateOneRequiredWithoutLow_qualityNestedInput
  }

  export type low_qualityUncheckedUpdateWithoutChunksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type mid_qualityUpsertWithoutChunksInput = {
    update: XOR<mid_qualityUpdateWithoutChunksInput, mid_qualityUncheckedUpdateWithoutChunksInput>
    create: XOR<mid_qualityCreateWithoutChunksInput, mid_qualityUncheckedCreateWithoutChunksInput>
    where?: mid_qualityWhereInput
  }

  export type mid_qualityUpdateToOneWithWhereWithoutChunksInput = {
    where?: mid_qualityWhereInput
    data: XOR<mid_qualityUpdateWithoutChunksInput, mid_qualityUncheckedUpdateWithoutChunksInput>
  }

  export type mid_qualityUpdateWithoutChunksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: videoUpdateOneRequiredWithoutMid_qualityNestedInput
  }

  export type mid_qualityUncheckedUpdateWithoutChunksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type hqUpsertWithoutChunksInput = {
    update: XOR<hqUpdateWithoutChunksInput, hqUncheckedUpdateWithoutChunksInput>
    create: XOR<hqCreateWithoutChunksInput, hqUncheckedCreateWithoutChunksInput>
    where?: hqWhereInput
  }

  export type hqUpdateToOneWithWhereWithoutChunksInput = {
    where?: hqWhereInput
    data: XOR<hqUpdateWithoutChunksInput, hqUncheckedUpdateWithoutChunksInput>
  }

  export type hqUpdateWithoutChunksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: videoUpdateOneRequiredWithoutHqNestedInput
  }

  export type hqUncheckedUpdateWithoutChunksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type videoCreateWithoutMid_qualityInput = {
    id?: bigint | number
    low_quality?: low_qualityCreateNestedManyWithoutVideoInput
    hq?: hqCreateNestedManyWithoutVideoInput
    thumbnail?: thumbnailCreateNestedManyWithoutVideoInput
  }

  export type videoUncheckedCreateWithoutMid_qualityInput = {
    id?: bigint | number
    low_quality?: low_qualityUncheckedCreateNestedManyWithoutVideoInput
    hq?: hqUncheckedCreateNestedManyWithoutVideoInput
    thumbnail?: thumbnailUncheckedCreateNestedManyWithoutVideoInput
  }

  export type videoCreateOrConnectWithoutMid_qualityInput = {
    where: videoWhereUniqueInput
    create: XOR<videoCreateWithoutMid_qualityInput, videoUncheckedCreateWithoutMid_qualityInput>
  }

  export type chunksCreateWithoutMd_qualityInput = {
    id?: bigint | number
    contents: Buffer
    low_quality?: low_qualityCreateNestedOneWithoutChunksInput
    hq?: hqCreateNestedOneWithoutChunksInput
  }

  export type chunksUncheckedCreateWithoutMd_qualityInput = {
    id?: bigint | number
    contents: Buffer
    lq?: bigint | number | null
    high_quality?: bigint | number | null
  }

  export type chunksCreateOrConnectWithoutMd_qualityInput = {
    where: chunksWhereUniqueInput
    create: XOR<chunksCreateWithoutMd_qualityInput, chunksUncheckedCreateWithoutMd_qualityInput>
  }

  export type chunksCreateManyMd_qualityInputEnvelope = {
    data: chunksCreateManyMd_qualityInput | chunksCreateManyMd_qualityInput[]
    skipDuplicates?: boolean
  }

  export type videoUpsertWithoutMid_qualityInput = {
    update: XOR<videoUpdateWithoutMid_qualityInput, videoUncheckedUpdateWithoutMid_qualityInput>
    create: XOR<videoCreateWithoutMid_qualityInput, videoUncheckedCreateWithoutMid_qualityInput>
    where?: videoWhereInput
  }

  export type videoUpdateToOneWithWhereWithoutMid_qualityInput = {
    where?: videoWhereInput
    data: XOR<videoUpdateWithoutMid_qualityInput, videoUncheckedUpdateWithoutMid_qualityInput>
  }

  export type videoUpdateWithoutMid_qualityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    low_quality?: low_qualityUpdateManyWithoutVideoNestedInput
    hq?: hqUpdateManyWithoutVideoNestedInput
    thumbnail?: thumbnailUpdateManyWithoutVideoNestedInput
  }

  export type videoUncheckedUpdateWithoutMid_qualityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    low_quality?: low_qualityUncheckedUpdateManyWithoutVideoNestedInput
    hq?: hqUncheckedUpdateManyWithoutVideoNestedInput
    thumbnail?: thumbnailUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type chunksUpsertWithWhereUniqueWithoutMd_qualityInput = {
    where: chunksWhereUniqueInput
    update: XOR<chunksUpdateWithoutMd_qualityInput, chunksUncheckedUpdateWithoutMd_qualityInput>
    create: XOR<chunksCreateWithoutMd_qualityInput, chunksUncheckedCreateWithoutMd_qualityInput>
  }

  export type chunksUpdateWithWhereUniqueWithoutMd_qualityInput = {
    where: chunksWhereUniqueInput
    data: XOR<chunksUpdateWithoutMd_qualityInput, chunksUncheckedUpdateWithoutMd_qualityInput>
  }

  export type chunksUpdateManyWithWhereWithoutMd_qualityInput = {
    where: chunksScalarWhereInput
    data: XOR<chunksUpdateManyMutationInput, chunksUncheckedUpdateManyWithoutMd_qualityInput>
  }

  export type videoCreateWithoutHqInput = {
    id?: bigint | number
    low_quality?: low_qualityCreateNestedManyWithoutVideoInput
    mid_quality?: mid_qualityCreateNestedManyWithoutVideoInput
    thumbnail?: thumbnailCreateNestedManyWithoutVideoInput
  }

  export type videoUncheckedCreateWithoutHqInput = {
    id?: bigint | number
    low_quality?: low_qualityUncheckedCreateNestedManyWithoutVideoInput
    mid_quality?: mid_qualityUncheckedCreateNestedManyWithoutVideoInput
    thumbnail?: thumbnailUncheckedCreateNestedManyWithoutVideoInput
  }

  export type videoCreateOrConnectWithoutHqInput = {
    where: videoWhereUniqueInput
    create: XOR<videoCreateWithoutHqInput, videoUncheckedCreateWithoutHqInput>
  }

  export type chunksCreateWithoutHqInput = {
    id?: bigint | number
    contents: Buffer
    low_quality?: low_qualityCreateNestedOneWithoutChunksInput
    md_quality?: mid_qualityCreateNestedOneWithoutChunksInput
  }

  export type chunksUncheckedCreateWithoutHqInput = {
    id?: bigint | number
    contents: Buffer
    lq?: bigint | number | null
    mq?: bigint | number | null
  }

  export type chunksCreateOrConnectWithoutHqInput = {
    where: chunksWhereUniqueInput
    create: XOR<chunksCreateWithoutHqInput, chunksUncheckedCreateWithoutHqInput>
  }

  export type chunksCreateManyHqInputEnvelope = {
    data: chunksCreateManyHqInput | chunksCreateManyHqInput[]
    skipDuplicates?: boolean
  }

  export type videoUpsertWithoutHqInput = {
    update: XOR<videoUpdateWithoutHqInput, videoUncheckedUpdateWithoutHqInput>
    create: XOR<videoCreateWithoutHqInput, videoUncheckedCreateWithoutHqInput>
    where?: videoWhereInput
  }

  export type videoUpdateToOneWithWhereWithoutHqInput = {
    where?: videoWhereInput
    data: XOR<videoUpdateWithoutHqInput, videoUncheckedUpdateWithoutHqInput>
  }

  export type videoUpdateWithoutHqInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    low_quality?: low_qualityUpdateManyWithoutVideoNestedInput
    mid_quality?: mid_qualityUpdateManyWithoutVideoNestedInput
    thumbnail?: thumbnailUpdateManyWithoutVideoNestedInput
  }

  export type videoUncheckedUpdateWithoutHqInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    low_quality?: low_qualityUncheckedUpdateManyWithoutVideoNestedInput
    mid_quality?: mid_qualityUncheckedUpdateManyWithoutVideoNestedInput
    thumbnail?: thumbnailUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type chunksUpsertWithWhereUniqueWithoutHqInput = {
    where: chunksWhereUniqueInput
    update: XOR<chunksUpdateWithoutHqInput, chunksUncheckedUpdateWithoutHqInput>
    create: XOR<chunksCreateWithoutHqInput, chunksUncheckedCreateWithoutHqInput>
  }

  export type chunksUpdateWithWhereUniqueWithoutHqInput = {
    where: chunksWhereUniqueInput
    data: XOR<chunksUpdateWithoutHqInput, chunksUncheckedUpdateWithoutHqInput>
  }

  export type chunksUpdateManyWithWhereWithoutHqInput = {
    where: chunksScalarWhereInput
    data: XOR<chunksUpdateManyMutationInput, chunksUncheckedUpdateManyWithoutHqInput>
  }

  export type low_qualityCreateManyVideoInput = {
    id?: bigint | number
  }

  export type mid_qualityCreateManyVideoInput = {
    id?: bigint | number
  }

  export type hqCreateManyVideoInput = {
    id?: bigint | number
  }

  export type thumbnailCreateManyVideoInput = {
    id?: bigint | number
    contents: Buffer
  }

  export type low_qualityUpdateWithoutVideoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chunks?: chunksUpdateManyWithoutLow_qualityNestedInput
  }

  export type low_qualityUncheckedUpdateWithoutVideoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chunks?: chunksUncheckedUpdateManyWithoutLow_qualityNestedInput
  }

  export type low_qualityUncheckedUpdateManyWithoutVideoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type mid_qualityUpdateWithoutVideoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chunks?: chunksUpdateManyWithoutMd_qualityNestedInput
  }

  export type mid_qualityUncheckedUpdateWithoutVideoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chunks?: chunksUncheckedUpdateManyWithoutMd_qualityNestedInput
  }

  export type mid_qualityUncheckedUpdateManyWithoutVideoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type hqUpdateWithoutVideoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chunks?: chunksUpdateManyWithoutHqNestedInput
  }

  export type hqUncheckedUpdateWithoutVideoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chunks?: chunksUncheckedUpdateManyWithoutHqNestedInput
  }

  export type hqUncheckedUpdateManyWithoutVideoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type thumbnailUpdateWithoutVideoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type thumbnailUncheckedUpdateWithoutVideoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type thumbnailUncheckedUpdateManyWithoutVideoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type chunksCreateManyLow_qualityInput = {
    id?: bigint | number
    contents: Buffer
    mq?: bigint | number | null
    high_quality?: bigint | number | null
  }

  export type chunksUpdateWithoutLow_qualityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
    md_quality?: mid_qualityUpdateOneWithoutChunksNestedInput
    hq?: hqUpdateOneWithoutChunksNestedInput
  }

  export type chunksUncheckedUpdateWithoutLow_qualityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
    mq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    high_quality?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type chunksUncheckedUpdateManyWithoutLow_qualityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
    mq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    high_quality?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type chunksCreateManyMd_qualityInput = {
    id?: bigint | number
    contents: Buffer
    lq?: bigint | number | null
    high_quality?: bigint | number | null
  }

  export type chunksUpdateWithoutMd_qualityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
    low_quality?: low_qualityUpdateOneWithoutChunksNestedInput
    hq?: hqUpdateOneWithoutChunksNestedInput
  }

  export type chunksUncheckedUpdateWithoutMd_qualityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
    lq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    high_quality?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type chunksUncheckedUpdateManyWithoutMd_qualityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
    lq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    high_quality?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type chunksCreateManyHqInput = {
    id?: bigint | number
    contents: Buffer
    lq?: bigint | number | null
    mq?: bigint | number | null
  }

  export type chunksUpdateWithoutHqInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
    low_quality?: low_qualityUpdateOneWithoutChunksNestedInput
    md_quality?: mid_qualityUpdateOneWithoutChunksNestedInput
  }

  export type chunksUncheckedUpdateWithoutHqInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
    lq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type chunksUncheckedUpdateManyWithoutHqInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contents?: BytesFieldUpdateOperationsInput | Buffer
    lq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mq?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use VideoCountOutputTypeDefaultArgs instead
     */
    export type VideoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VideoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Low_qualityCountOutputTypeDefaultArgs instead
     */
    export type Low_qualityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Low_qualityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Mid_qualityCountOutputTypeDefaultArgs instead
     */
    export type Mid_qualityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Mid_qualityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HqCountOutputTypeDefaultArgs instead
     */
    export type HqCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HqCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use videoDefaultArgs instead
     */
    export type videoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = videoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use thumbnailDefaultArgs instead
     */
    export type thumbnailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = thumbnailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use low_qualityDefaultArgs instead
     */
    export type low_qualityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = low_qualityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use chunksDefaultArgs instead
     */
    export type chunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = chunksDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mid_qualityDefaultArgs instead
     */
    export type mid_qualityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mid_qualityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use hqDefaultArgs instead
     */
    export type hqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = hqDefaultArgs<ExtArgs>

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