CREATE SEQUENCE authenticated.video_id
    START 1
    INCREMENT 1
    MINVALUE 1
    NO MAXVALUE
    CACHE 50;

CREATE TYPE authenticated.video_status AS ENUM (
	'active',
    'processing',
    'disabled',
    'banned'
);

CREATE TYPE authenticated.video_types AS ENUM (
    'mp4',
    'ogg',
    'flv'
);

-- El usuario hace una consulta
-- Recorrido
-- Ordenado de resultados
-- Push priority

DROP TABLE IF EXISTS authenticated.video_entity;
CREATE TABLE authenticated.video_entity(
    id BIGINT DEFAULT nextval('authenticated.video_id') PRIMARY KEY,
    video_status authenticated.video_status NOT NULL,
    video_type authenticated.video_types NOT NULL
);

CREATE SEQUENCE authenticated.video_metadata_id
    START 1
    INCREMENT 1
    MINVALUE 1
    NO MAXVALUE
    CACHE 50;

DROP TABLE IF EXISTS authenticated.video_metadata;
CREATE TABLE authenticated.video_metadata(
    id BIGINT DEFAULT nextval('authenticated.video_metadata_id') PRIMARY KEY,
    length_ms INTEGER NOT NULL,
    title TEXT[],
    description_copy TEXT[],
    file_size BIGINT NOT NULL,
    uploader UUID NOT NULL
);

CREATE SEQUENCE authenticated.video_media_id
    START 1
    INCREMENT 1
    MINVALUE 1
    NO MAXVALUE
    CACHE 50;

DROP TABLE IF EXISTS authenticated.video_media;
CREATE TABLE authenticated.video_media(
    id BIGINT DEFAULT nextval('authenticated.video_media_id') PRIMARY KEY,
    low_quality BYTEA NOT NULL,
    standard_quality BYTEA,
    high_quality BYTEA,
    sm_thumbnail BYTEA[],
    md_thumbnail BYTEA[],
    lg_thumbnail BYTEA[]
);

CREATE SEQUENCE authenticated.video_views_id
    START 1
    INCREMENT 1
    MINVALUE 1
    NO MAXVALUE
    CACHE 50;

DROP TABLE IF EXISTS authenticated.video_views;
CREATE TABLE authenticated.video_views(
    id BIGINT DEFAULT nextval('authenticated.video_views_id') PRIMARY KEY,
	owner BIGINT NOT NULL,
    views BIGINT[]
);

CREATE SEQUENCE authenticated.video_subtitles_id
    START 1
    INCREMENT 1
    MINVALUE 1
    NO MAXVALUE
    CACHE 50;

DROP TABLE IF EXISTS authenticated.video_subtitles;
CREATE TABLE authenticated.video_subtitles(
    id BIGINT NOT NULL,
    lang TEXT NOT NULL,
    timestmp BIGINT[] NOT NULL,
    subtitles TEXT[] NOT NULL
);

CREATE SEQUENCE authenticated.video_categories_id
    START 1
    INCREMENT 1
    MINVALUE 1
    NO MAXVALUE
    CACHE 50;

DROP TABLE IF EXISTS authenticated.video_categories;
CREATE TABLE authenticated.video_categories(
    id BIGINT DEFAULT nextval('authenticated.video_categories_id') PRIMARY KEY,
    category TEXT NOT NULL,
    parent BIGINT,
    child BIGINT
);