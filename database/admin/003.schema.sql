-- Mauricio López Cházaro
-- 210804 - 449 457 72 48
-- mauricioeneltrabajo@gmail.com

-- 2023/09/17

-- Creates separate schemas to control privileges public
-- will stored functions that are allowed to be run by
-- visitors, meanwhile authenticated will contain those
-- restricted to logged in users, while the admin schema
-- contains the rest.

CREATE SCHEMA visitors;
CREATE SCHEMA authenticated;
CREATE SCHEMA admin;