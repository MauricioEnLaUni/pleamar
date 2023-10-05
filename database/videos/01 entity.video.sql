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
    'mp4'
);

CREATE TABLE video_entity(
    id BIGINT DEFAULT nextval('authenticated.video_status') PRIMARY KEY,
    video_status authenticated.video_status NOT NULL,
    uploader UUID NOT NULL,
    length_ms BIGINT NOT NULL,
    views BIGINT DEFAULT 0 NOT NULL,
    title TEXT[] NOT NULL,
    description_copy TEXT[],
    video_type authenticated.video_types NOT NULL,
    file_size BIGINT NOT NULL,
    thumbnail BIGINT[] NOT NULL,
);