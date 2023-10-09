CREATE SEQUENCE authenticated.request_token_id
    START 1
    INCREMENT 1
    MINVALUE 1
    NO MAXVALUE
    CACHE 50;

CREATE TABLE request_token(
    id BIGINT DEFAULT nextval("authenticated.request_token_id") PRIMARY KEY,
    token_owner UUID NOT NULL,
    auth BIGINT NOT NULL,
    token BYTEA NOT NULL,
);

ALTER TABLE request_token
    ADD CONSTRAINT bit_size
    CHECK (octet_length(token)) <= 128;
