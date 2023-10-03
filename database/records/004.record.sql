-- Mauricio López Cházaro
-- 210804 - 449 457 72 48
-- mauricioeneltrabajo@gmail.com

-- 2023/09/18

CREATE SEQUENCE admins.record_id
    START 1
    INCREMENT 1
    MINVALUE 1
    NO MAXVALUE
    CACHE 50;

CREATE TYPE admins.database_action AS ENUM (
	'create',
	'read',
	'update',
	'delete'
);

-- Keeps track of database operations
CREATE TABLE admins.record(
    id BIGINT DEFAULT nextval('admins.record_id') PRIMARY KEY,
	table_address TEXT NOT NULL,
	resource_address JSONB NOT NULL,
	action admins.database_action DEFAULT 'read' NOT NULL,
	time TIMESTAMP(6) WITH TIME ZONE DEFAULT now(),
    database_user TEXT NOT NULL,
	application_user UUID NOT NULL
);

CREATE INDEX idx_table_address
ON admins.record
USING btree(table_address);

CREATE OR REPLACE PROCEDURE authenticated.log(
	address TEXT,
	resource JSONB,
	insert_time TIMESTAMP(6),
	usr TEXT,
	db_action admins.database_action DEFAULT 'read'
) LANGUAGE plpgsql
AS $$
BEGIN
	IF authenticated.wide_approve(usr) THEN
		INSERT INTO admin.record(
			table_address,
			resource_address,
			action,
			time,
			database_user,
			application_user
		) VALUES(
			address,
			resource,
			db_action,
			insert_time,
			(SELECT current_user),
			usr
		) RETURNING id;
	END IF;
END;
$$;
