/*
  Warnings:

  - You are about to drop the `cat_names` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `statuses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subtitle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subtitles_container` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `video_description` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `video_entity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `video_metadata` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `video_titles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `views` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cat_names" DROP CONSTRAINT "cat_names_owner_fkey";

-- DropForeignKey
ALTER TABLE "statuses" DROP CONSTRAINT "statuses_video_fkey";

-- DropForeignKey
ALTER TABLE "subtitle" DROP CONSTRAINT "subtitle_container_fkey";

-- DropForeignKey
ALTER TABLE "video_description" DROP CONSTRAINT "video_description_video_fkey";

-- DropForeignKey
ALTER TABLE "video_entity" DROP CONSTRAINT "video_entity_uploader_fkey";

-- DropForeignKey
ALTER TABLE "video_metadata" DROP CONSTRAINT "video_metadata_video_fkey";

-- DropForeignKey
ALTER TABLE "video_titles" DROP CONSTRAINT "video_titles_video_fkey";

-- DropForeignKey
ALTER TABLE "views" DROP CONSTRAINT "views_owner_fkey";

-- DropTable
DROP TABLE "cat_names";

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "statuses";

-- DropTable
DROP TABLE "subtitle";

-- DropTable
DROP TABLE "subtitles_container";

-- DropTable
DROP TABLE "users";

-- DropTable
DROP TABLE "video_description";

-- DropTable
DROP TABLE "video_entity";

-- DropTable
DROP TABLE "video_metadata";

-- DropTable
DROP TABLE "video_titles";

-- DropTable
DROP TABLE "views";

-- DropEnum
DROP TYPE "video_status";

-- DropEnum
DROP TYPE "video_type";

-- CreateTable
CREATE TABLE "video" (
    "id" BIGSERIAL NOT NULL,

    CONSTRAINT "video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "thumbnail" (
    "id" BIGSERIAL NOT NULL,
    "owner" BIGINT NOT NULL,
    "contents" BYTEA NOT NULL,

    CONSTRAINT "thumbnail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "low_quality" (
    "id" BIGSERIAL NOT NULL,
    "owner" BIGINT NOT NULL,

    CONSTRAINT "low_quality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chunks" (
    "id" BIGSERIAL NOT NULL,
    "contents" BYTEA NOT NULL,
    "lq" BIGINT,
    "mq" BIGINT,
    "high_quality" BIGINT,

    CONSTRAINT "chunks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mid_quality" (
    "id" BIGSERIAL NOT NULL,
    "owner" BIGINT NOT NULL,

    CONSTRAINT "mid_quality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hq" (
    "id" BIGSERIAL NOT NULL,
    "owner" BIGINT NOT NULL,

    CONSTRAINT "hq_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "thumbnail" ADD CONSTRAINT "thumbnail_owner_fkey" FOREIGN KEY ("owner") REFERENCES "video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "low_quality" ADD CONSTRAINT "low_quality_owner_fkey" FOREIGN KEY ("owner") REFERENCES "video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chunks" ADD CONSTRAINT "chunks_lq_fkey" FOREIGN KEY ("lq") REFERENCES "low_quality"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chunks" ADD CONSTRAINT "chunks_mq_fkey" FOREIGN KEY ("mq") REFERENCES "mid_quality"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chunks" ADD CONSTRAINT "chunks_high_quality_fkey" FOREIGN KEY ("high_quality") REFERENCES "hq"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mid_quality" ADD CONSTRAINT "mid_quality_owner_fkey" FOREIGN KEY ("owner") REFERENCES "video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hq" ADD CONSTRAINT "hq_owner_fkey" FOREIGN KEY ("owner") REFERENCES "video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
