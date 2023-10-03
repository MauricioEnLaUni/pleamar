-- Mauricio López Cházaro
-- 210804 - 449 457 72 48
-- mauricioeneltrabajo@gmail.com

-- 2023/09/17

CREATE TYPE admins.user_type AS ENUM(
	'admin',
	'standard',
	'banned',
	'suspended',
	'deactivated',
    'undefined'
);

CREATE SEQUENCE admins.user_status_id
    START 1
    INCREMENT 1
    MINVALUE 1
    NO MAXVALUE
    CACHE 50;

CREATE TABLE admins.user_status(
	user_status_id BIGINT NOT NULL,
	current_status admins.user_types NOT NULL,
	assigned TIMESTAMP(6) WITH TIME ZONE DEFAULT now()
);

CREATE TABLE admins.application_user(
    application_user_id UUID NOT NULL,
    username TEXT NOT NULL UNIQUE,
	current_status INT NOT NULL
);

CONSTRAINT fk_user_status
FOREIGN KEY (user_status_id)
REFERENCES admins.user_status(user_status_id);

-- General function to find database user,
-- returns their status or undefined if not found.
DROP FUNCTION IF EXISTS public.user_exists;
CREATE OR REPLACE FUNCTION public.user_exists(usr TEXT)
RETURNS admins.user_type
LANGUAGE plpgsql
AS $$
	BEGIN
		IF (SELECT COUNT(*) FROM admins.application_user WHERE username = usr) = 1 THEN
				RETURN (SELECT user_type FROM admins.application_user WHERE username = usr)::admins.user_type;
		ELSE
			RETURN 'undefined'::admins.user_type;
		END IF;
	END;
$$;

-- Approves a certain action for standard users and admins
CREATE OR REPLACE FUNCTION authenticated.wide_approve(usr TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
AS $$
DECLARE
	user_type admins.user_type;
BEGIN
	user_type = public.user_exists(usr);
	
	IF user_type = 'standard' OR user_type = 'admin' THEN
		RETURN TRUE;
	ELSIF user_type = 'undefined' THEN RAISE EXCEPTION 'User not found: (%)', usr;
	ELSE
		RAISE EXCEPTION '%', format('User (%s) has been (%s)', usr, user_type);
	END IF;
END;
$$;

-- Approves an action for admins.
DROP FUNCTION IF EXISTS admins.narrow_approve;
CREATE OR REPLACE FUNCTION admins.narrow_approve(usr TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
AS $$
DECLARE
	user_type admins.user_type;
BEGIN
	user_type = public.user_exists(usr);
	
	IF user_type = 'admin' THEN
		RETURN TRUE;
	ELSIF user_type = 'standard' THEN
		RAISE EXCEPTION 'User (%) has no permission for this operation!', usr;
	ELSIF user_type = 'undefined' THEN RAISE EXCEPTION 'User not found: (%)', usr;
	ELSE
		RAISE EXCEPTION '%', format('User (%s) has been (%s)', usr, user_type);
	END IF;
END;
$$;
