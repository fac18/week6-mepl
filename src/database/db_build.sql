-- db_build.sql

BEGIN;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "kitty" int DEFAULT 16
);

CREATE TABLE "shop" (
  "id" SERIAL PRIMARY KEY,
  "fruit" varchar,
  "stock" int,
  "price" int
);

CREATE TABLE "basket" (
  "id" SERIAL PRIMARY KEY,
  "fruit_id" int,
  "stock" int
);

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "basket" ("id");
ALTER TABLE "users" ADD FOREIGN KEY ("name") REFERENCES "shop" ("id");

COMMIT;