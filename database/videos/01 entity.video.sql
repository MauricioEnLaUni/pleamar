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

CREATE TABLE video_entity(
    id BIGINT DEFAULT nextval('authenticated.video_status') PRIMARY KEY,
    video_status authenticated.video_status NOT NULL,
    video_type authenticated.video_types NOT NULL
);

CREATE TABLE video_metadata(
    id BIGINT NOT NULL,
    length_ms NOT NULL,
    title TEXT[],
    description_copy TEXT[],
    file_size BIGINT NOT NULL,
    uploader UUID NOT NULL,
);

CREATE TABLE video_media(
    id BIGINT NOT NULL,
    low_quality BYTEA NOT NULL,
    standard_quality BYTEA,
    high_quality BYTEA,
    sm_thumbnail BYTEA[],
    md_thumbnail BYTEA[],
    lg_thumbnail BYTEA[],
);

CREATE TABLE video_views(
    id BIGINT NOT NULL,
    views BIGINT[],
);

CREATE TABLE video_subtitles(
    id BIGINT NOT NULL,
    lang TEXT NOT NULL,
    timestmp BIGINT[] NOT NULL,
    subtitles TEXT[] NOT NULL,
);

CREATE SEQUENCE authenticated.category_id
    START 1
    INCREMENT 1
    MINVALUE 1
    NO MAXVALUE
    CACHE 50;

CREATE TABLE video_categories(
    id BIGINT DEFAULT nextval('authenticated.category_id') PRIMARY KEY,
    category TEXT NOT NULL,
    parent BIGINT,
    child BIGINT,
);

CREATE TABLE relations_categories(
    id BIGINT DEFAULT nextval('authenticated.relations_id') PRIMARY KEY,
    edges BIGINT[],
);