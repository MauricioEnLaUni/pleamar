
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.2
 * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
 */
Prisma.prismaVersion = {
  client: "5.4.2",
  engine: "ac9d7041ed77bcc8a8dbd2ab6616b39013829574"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Video_entityScalarFieldEnum = {
  id: 'id',
  type: 'type',
  uploader: 'uploader'
};

exports.Prisma.StatusesScalarFieldEnum = {
  id: 'id',
  video: 'video',
  current: 'current'
};

exports.Prisma.Video_metadataScalarFieldEnum = {
  id: 'id',
  video: 'video',
  length_ms: 'length_ms',
  file_size: 'file_size',
  uploader: 'uploader'
};

exports.Prisma.Video_titlesScalarFieldEnum = {
  id: 'id',
  video: 'video',
  content: 'content'
};

exports.Prisma.Video_descriptionScalarFieldEnum = {
  id: 'id',
  video: 'video',
  content: 'content'
};

exports.Prisma.ViewsScalarFieldEnum = {
  id: 'id',
  owner: 'owner'
};

exports.Prisma.Subtitles_containerScalarFieldEnum = {
  id: 'id',
  lang: 'lang'
};

exports.Prisma.SubtitleScalarFieldEnum = {
  id: 'id',
  container: 'container',
  timestamp: 'timestamp',
  content: 'content'
};

exports.Prisma.CategoriesScalarFieldEnum = {
  id: 'id',
  parent: 'parent',
  child: 'child'
};

exports.Prisma.Cat_namesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  owner: 'owner'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.video_type = exports.$Enums.video_type = {
  MP4: 'MP4',
  OGG: 'OGG',
  FLV: 'FLV'
};

exports.video_status = exports.$Enums.video_status = {
  ACTIVE: 'ACTIVE',
  BANNED: 'BANNED',
  DISABLED: 'DISABLED',
  PROCESSING: 'PROCESSING'
};

exports.Prisma.ModelName = {
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
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/sohmer/Documents/idgs-7-a/projects/pleamar/prisma/generated/clientMetadata",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../..",
  "clientVersion": "5.4.2",
  "engineVersion": "ac9d7041ed77bcc8a8dbd2ab6616b39013829574",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "PG_METADATA_CONNECTION",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIgogICAgb3V0cHV0ID0gIi4vZ2VuZXJhdGVkL2NsaWVudE1ldGFkYXRhIgp9CgpkYXRhc291cmNlIGRiIHsKICAgIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgICB1cmwgPSBlbnYoIlBHX01FVEFEQVRBX0NPTk5FQ1RJT04iKQp9CgplbnVtIHZpZGVvX3N0YXR1cyB7CiAgICBBQ1RJVkUKICAgIEJBTk5FRAogICAgRElTQUJMRUQKICAgIFBST0NFU1NJTkcKfQoKZW51bSB2aWRlb190eXBlIHsKICAgIE1QNAogICAgT0dHCiAgICBGTFYKfQoKbW9kZWwgdmlkZW9fZW50aXR5IHsKICAgIGlkIEJpZ0ludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogICAgdmlkZW9fbWV0YWRhdGEgdmlkZW9fbWV0YWRhdGE/CiAgICB2aWV3cyB2aWV3c1tdCiAgICBzdGF0dXNlcyBzdGF0dXNlc1tdCiAgICB0eXBlIHZpZGVvX3R5cGUgQGRlZmF1bHQoTVA0KQogICAgdXNlciB1c2VycyBAcmVsYXRpb24oZmllbGRzOiBbdXBsb2FkZXJdLCByZWZlcmVuY2VzOiBbaWRdKQogICAgdXBsb2FkZXIgU3RyaW5nIEBkYi5VdWlkCgogICAgQEBpbmRleChbdXBsb2FkZXJdKQp9Cgptb2RlbCBzdGF0dXNlcyB7CiAgICBpZCBCaWdJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICAgIHZpZGVvX2VudGl0eSB2aWRlb19lbnRpdHkgQHJlbGF0aW9uKGZpZWxkczogW3ZpZGVvXSwgcmVmZXJlbmNlczogW2lkXSkKICAgIHZpZGVvIEJpZ0ludAogICAgY3VycmVudCB2aWRlb19zdGF0dXMKfQoKbW9kZWwgdmlkZW9fbWV0YWRhdGEgewogICAgaWQgQmlnSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgICB2aWRlb19lbnRpdHkgdmlkZW9fZW50aXR5IEByZWxhdGlvbihmaWVsZHM6IFt2aWRlb10sIHJlZmVyZW5jZXM6IFtpZF0pCiAgICB2aWRlbyBCaWdJbnQgQHVuaXF1ZQogICAgbGVuZ3RoX21zIEJpZ0ludAogICAgdGl0bGUgdmlkZW9fdGl0bGVzW10KICAgIGRlc2NyaXB0aW9uIHZpZGVvX2Rlc2NyaXB0aW9uW10KICAgIGZpbGVfc2l6ZSBCaWdJbnQKICAgIHVwbG9hZGVyIFN0cmluZyBAZGIuVXVpZAoKICAgIEBAaW5kZXgoW3ZpZGVvLCB1cGxvYWRlcl0pCn0KCm1vZGVsIHZpZGVvX3RpdGxlcyB7CiAgICBpZCBCaWdJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICAgIHZpZGVvX21ldGFkYXRhIHZpZGVvX21ldGFkYXRhIEByZWxhdGlvbihmaWVsZHM6IFt2aWRlb10sIHJlZmVyZW5jZXM6IFtpZF0pCiAgICB2aWRlbyBCaWdJbnQKICAgIGNvbnRlbnQgU3RyaW5nIEBkYi5UZXh0Cn0KCm1vZGVsIHZpZGVvX2Rlc2NyaXB0aW9uIHsKICAgIGlkIEJpZ0ludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogICAgdmlkZW9fbWV0YWRhdGEgdmlkZW9fbWV0YWRhdGEgQHJlbGF0aW9uKGZpZWxkczogW3ZpZGVvXSwgcmVmZXJlbmNlczogW2lkXSkKICAgIHZpZGVvIEJpZ0ludAogICAgY29udGVudCBTdHJpbmcgQGRiLlRleHQKfQoKbW9kZWwgdmlld3MgewogICAgaWQgQmlnSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgICB2aWRlb19lbnRpdHkgdmlkZW9fZW50aXR5IEByZWxhdGlvbihmaWVsZHM6IFtvd25lcl0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgICBvd25lciBCaWdJbnQgQHVuaXF1ZQp9Cgptb2RlbCBzdWJ0aXRsZXNfY29udGFpbmVyIHsKICAgIGlkIEJpZ0ludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogICAgbGFuZyBTdHJpbmcgQGRiLlRleHQKICAgIHN1YnRpdGxlcyBzdWJ0aXRsZVtdCn0KCm1vZGVsIHN1YnRpdGxlIHsKICAgIGlkIEJpZ0ludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogICAgc3VidGl0bGVzX2NvbnRhaW5lciBzdWJ0aXRsZXNfY29udGFpbmVyIEByZWxhdGlvbihmaWVsZHM6IFtjb250YWluZXJdLCByZWZlcmVuY2VzOiBbaWRdKQogICAgY29udGFpbmVyIEJpZ0ludAogICAgdGltZXN0YW1wIEJpZ0ludAogICAgY29udGVudCBTdHJpbmcKfQoKbW9kZWwgY2F0ZWdvcmllcyB7CiAgICBpZCBCaWdJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICAgIG5hbWUgY2F0X25hbWVzW10KICAgIHBhcmVudCBCaWdJbnQKICAgIGNoaWxkIEJpZ0ludAp9Cgptb2RlbCBjYXRfbmFtZXMgewogICAgaWQgQmlnSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgICBuYW1lIFN0cmluZ1tdIEBkYi5UZXh0CiAgICBjYXRlZ29yaWVzIGNhdGVnb3JpZXMgQHJlbGF0aW9uKGZpZWxkczogW293bmVyXSwgcmVmZXJlbmNlczogW2lkXSkKICAgIG93bmVyIEJpZ0ludAp9Cgptb2RlbCB1c2VycyB7CiAgICBpZCBTdHJpbmcgQGlkIEBkYi5VdWlkCiAgICB2aWRlb19lbnRpdHkgdmlkZW9fZW50aXR5W10KfQo=",
  "inlineSchemaHash": "6c5b50aa92a9228dd1f8cfbd4e6d80e4a83c7ffcf16355cf2f6973fec9b35699"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"video_entity\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video_metadata\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"video_metadata\",\"relationName\":\"video_entityTovideo_metadata\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"views\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"views\",\"relationName\":\"video_entityToviews\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statuses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"statuses\",\"relationName\":\"statusesTovideo_entity\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"video_type\",\"default\":\"MP4\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"usersTovideo_entity\",\"relationFromFields\":[\"uploader\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploader\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"statuses\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video_entity\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"video_entity\",\"relationName\":\"statusesTovideo_entity\",\"relationFromFields\":[\"video\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"video_status\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"video_metadata\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video_entity\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"video_entity\",\"relationName\":\"video_entityTovideo_metadata\",\"relationFromFields\":[\"video\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"length_ms\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"video_titles\",\"relationName\":\"video_metadataTovideo_titles\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"video_description\",\"relationName\":\"video_descriptionTovideo_metadata\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploader\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"video_titles\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video_metadata\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"video_metadata\",\"relationName\":\"video_metadataTovideo_titles\",\"relationFromFields\":[\"video\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"video_description\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video_metadata\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"video_metadata\",\"relationName\":\"video_descriptionTovideo_metadata\",\"relationFromFields\":[\"video\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"views\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video_entity\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"video_entity\",\"relationName\":\"video_entityToviews\",\"relationFromFields\":[\"owner\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"subtitles_container\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subtitles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"subtitle\",\"relationName\":\"subtitleTosubtitles_container\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"subtitle\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subtitles_container\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"subtitles_container\",\"relationName\":\"subtitleTosubtitles_container\",\"relationFromFields\":[\"container\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"container\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"categories\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cat_names\",\"relationName\":\"cat_namesTocategories\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"child\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cat_names\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categories\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"categories\",\"relationName\":\"cat_namesTocategories\",\"relationFromFields\":[\"owner\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video_entity\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"video_entity\",\"relationName\":\"usersTovideo_entity\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"video_status\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"BANNED\",\"dbName\":null},{\"name\":\"DISABLED\",\"dbName\":null},{\"name\":\"PROCESSING\",\"dbName\":null}],\"dbName\":null},\"video_type\":{\"values\":[{\"name\":\"MP4\",\"dbName\":null},{\"name\":\"OGG\",\"dbName\":null},{\"name\":\"FLV\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    PG_METADATA_CONNECTION: typeof globalThis !== 'undefined' && globalThis['PG_METADATA_CONNECTION'] || typeof process !== 'undefined' && process.env && process.env.PG_METADATA_CONNECTION || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

