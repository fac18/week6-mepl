-- db_build.sql

BEGIN;

DROP TABLE IF EXISTS user_input CASCADE;
DROP TABLE IF EXISTS user_results CASCADE;
DROP TABLE IF EXISTS choices CASCADE;

CREATE TABLE "user_input" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar,
  "current_age" int
);

CREATE TABLE "user_results" (
  "id" int,
  "username" varchar,
  "calculated_life_expectancy" int,
  "years_left_to_live" int
);

CREATE TABLE "choices" (
  "id" int PRIMARY KEY,
  "question" varchar,
  "yes_answer" int,
  "no_answer" int
);

ALTER TABLE "user_results" ADD FOREIGN KEY ("id") REFERENCES "user_input" ("id");
ALTER TABLE "user_results" ADD FOREIGN KEY ("username") REFERENCES "user_input" ("username");

COMMIT;