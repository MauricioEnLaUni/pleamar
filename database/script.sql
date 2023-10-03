DROP DATABASE IF EXISTS personal_website;
CREATE DATABASE personal_website
	TEMPLATE template0
	ENCODING 'UTF-8'
	LC_COLLATE 'en_US.UTF-8'
 	LC_CTYPE 'en_US.UTF-8'
	CONNECTION LIMIT 5;
SET timezone = 'UTC';

DROP ROLE IF EXISTS ACO77MFtvwyecudQsD2jj0QVUONIVul7OhBnyCLiomCfZNMBtu9o7jLnyUDVxSA;
DROP ROLE IF EXISTS EkuLqoaRcKa8G3UpRKBhicaVKRm6KPvSYtlLZxT99CexPuZCoTAHDYaSpvlszSs;
DROP ROLE IF EXISTS YbALV9bJtbrmMXiBVW7qCEfB4kX5mEP7OG9CVDMAv2OiiWO3pYcSHGYOMBEZ7pr;

CREATE ROLE ACO77MFtvwyecudQsD2jj0QVUONIVul7OhBnyCLiomCfZNMBtu9o7jLnyUDVxSA
CONNECTION LIMIT 1
PASSWORD 'FZk5xRsblUU5mD8dwTlMdG4wdtiEvAXuFRQyH2ooC5o39b5Vh9FrLhHtL5mArDG';

CREATE ROLE EkuLqoaRcKa8G3UpRKBhicaVKRm6KPvSYtlLZxT99CexPuZCoTAHDYaSpvlszSs
CONNECTION LIMIT 5
PASSWORD '90pptdEXakyjPSZtNvpbK8hK94jjZOZhby8I5pqJf5jmqbMblyFjeGWeIvv9z9h';

CREATE ROLE YbALV9bJtbrmMXiBVW7qCEfB4kX5mEP7OG9CVDMAv2OiiWO3pYcSHGYOMBEZ7pr
PASSWORD 'ye0AdZSHXvuKLWvuL2i0JWDiUs2S7dTexCbZu32XED960B87aw7cBpIFKP8wg74';

GRANT ALL PRIVILEGES
ON DATABASE personal_website
TO ACO77MFtvwyecudQsD2jj0QVUONIVul7OhBnyCLiomCfZNMBtu9o7jLnyUDVxSA;

REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM EkuLqoaRcKa8G3UpRKBhicaVKRm6KPvSYtlLZxT99CexPuZCoTAHDYaSpvlszSs;
REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public FROM EkuLqoaRcKa8G3UpRKBhicaVKRm6KPvSYtlLZxT99CexPuZCoTAHDYaSpvlszSs;
REVOKE ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public FROM EkuLqoaRcKa8G3UpRKBhicaVKRm6KPvSYtlLZxT99CexPuZCoTAHDYaSpvlszSs;

REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM YbALV9bJtbrmMXiBVW7qCEfB4kX5mEP7OG9CVDMAv2OiiWO3pYcSHGYOMBEZ7pr;
REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public FROM YbALV9bJtbrmMXiBVW7qCEfB4kX5mEP7OG9CVDMAv2OiiWO3pYcSHGYOMBEZ7pr;
REVOKE ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public FROM YbALV9bJtbrmMXiBVW7qCEfB4kX5mEP7OG9CVDMAv2OiiWO3pYcSHGYOMBEZ7pr;

DROP USER IF EXISTS eKpiyD17sFTqIzGCM3r8ODWjGboe7oBYtz6GdhAFeHyTTHmHG4QHQ0Mfys9iKSH;
DROP USER IF EXISTS hDZSW6snzwoLBnGFBjDNiXwB08CZHcWPRQ4S8pAiZRTvhPjovqkxwFglMAAt6aE;

CREATE USER eKpiyD17sFTqIzGCM3r8ODWjGboe7oBYtz6GdhAFeHyTTHmHG4QHQ0Mfys9iKSH
PASSWORD 'Nlwn3sNvdU0kC?%L+s**MgSNiZUw(3aC)cjUhhsobM%BXlI%cp3KRG2n*);ED2Ck7&Kw1%2VsmVBQ9$+k0LIAziYHEWtRh^(2x6!Sl;PdMJqK8$s34aeZgd!vf^Ws6wSJtO6h7memR6EH^uWt3)2p2NC]At0&Snp28ta*IPy?v^0qn%3oKo!o1msW@COO]i;&V3OfSZ)CCv#Epmno5MjlrqZpA5l3w?7G2HXwAP%C+e%%D%fvvJrEGj0la!U'
VALID UNTIL '2023-11-01';
GRANT EkuLqoaRcKa8G3UpRKBhicaVKRm6KPvSYtlLZxT99CexPuZCoTAHDYaSpvlszSs TO eKpiyD17sFTqIzGCM3r8ODWjGboe7oBYtz6GdhAFeHyTTHmHG4QHQ0Mfys9iKSH;

CREATE USER hDZSW6snzwoLBnGFBjDNiXwB08CZHcWPRQ4S8pAiZRTvhPjovqkxwFglMAAt6aE
PASSWORD 'h@KuBxUAi0R*KD%*(%@veJ$(c8RMaYUavN*1@MJ3q)9YS(Hqns9Z1oJ1xbMcLSm'
VALID UNTIL '2023-11-01';
GRANT YbALV9bJtbrmMXiBVW7qCEfB4kX5mEP7OG9CVDMAv2OiiWO3pYcSHGYOMBEZ7pr TO hDZSW6snzwoLBnGFBjDNiXwB08CZHcWPRQ4S8pAiZRTvhPjovqkxwFglMAAt6aE;

CREATE SCHEMA visitors;
CREATE SCHEMA authenticated;
CREATE SCHEMA admins;

CREATE TYPE admins.user_type AS ENUM(
	'admin',
	'standard',
	'banned',
	'suspended',
	'deactivated',
    'undefined'
);
CREATE TABLE admins.application_user(
    id UUID NOT NULL,
    username TEXT NOT NULL UNIQUE,
	user_type admins.user_type DEFAULT 'standard' NOT NULL
);

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
