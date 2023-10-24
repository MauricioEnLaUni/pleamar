-- CreateEnum
CREATE TYPE "video_status" AS ENUM ('ACTIVE', 'BANNED', 'DISABLED', 'PROCESSING');

-- CreateEnum
CREATE TYPE "video_type" AS ENUM ('MP4', 'OGG', 'FLV');

-- CreateTable
CREATE TABLE "video_entity" (
    "id" BIGSERIAL NOT NULL,
    "type" "video_type" NOT NULL DEFAULT 'MP4',
    "uploader" UUID NOT NULL,

    CONSTRAINT "video_entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statuses" (
    "id" BIGSERIAL NOT NULL,
    "video" BIGINT NOT NULL,
    "current" "video_status" NOT NULL,

    CONSTRAINT "statuses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "video_metadata" (
    "id" BIGSERIAL NOT NULL,
    "video" BIGINT NOT NULL,
    "length_ms" BIGINT NOT NULL,
    "file_size" BIGINT NOT NULL,
    "uploader" UUID NOT NULL,

    CONSTRAINT "video_metadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "video_titles" (
    "id" BIGSERIAL NOT NULL,
    "video" BIGINT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "video_titles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "video_description" (
    "id" BIGSERIAL NOT NULL,
    "video" BIGINT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "video_description_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "views" (
    "id" BIGSERIAL NOT NULL,
    "owner" BIGINT NOT NULL,

    CONSTRAINT "views_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subtitles_container" (
    "id" BIGSERIAL NOT NULL,
    "lang" TEXT NOT NULL,

    CONSTRAINT "subtitles_container_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subtitle" (
    "id" BIGSERIAL NOT NULL,
    "container" BIGINT NOT NULL,
    "timestamp" BIGINT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "subtitle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" BIGSERIAL NOT NULL,
    "parent" BIGINT NOT NULL,
    "child" BIGINT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cat_names" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT[],
    "owner" BIGINT NOT NULL,

    CONSTRAINT "cat_names_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "video_entity_uploader_idx" ON "video_entity"("uploader");

-- CreateIndex
CREATE UNIQUE INDEX "video_metadata_video_key" ON "video_metadata"("video");

-- CreateIndex
CREATE INDEX "video_metadata_video_uploader_idx" ON "video_metadata"("video", "uploader");

-- CreateIndex
CREATE UNIQUE INDEX "views_owner_key" ON "views"("owner");

-- AddForeignKey
ALTER TABLE "video_entity" ADD CONSTRAINT "video_entity_uploader_fkey" FOREIGN KEY ("uploader") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statuses" ADD CONSTRAINT "statuses_video_fkey" FOREIGN KEY ("video") REFERENCES "video_entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video_metadata" ADD CONSTRAINT "video_metadata_video_fkey" FOREIGN KEY ("video") REFERENCES "video_entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video_titles" ADD CONSTRAINT "video_titles_video_fkey" FOREIGN KEY ("video") REFERENCES "video_metadata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video_description" ADD CONSTRAINT "video_description_video_fkey" FOREIGN KEY ("video") REFERENCES "video_metadata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "views" ADD CONSTRAINT "views_owner_fkey" FOREIGN KEY ("owner") REFERENCES "video_entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subtitle" ADD CONSTRAINT "subtitle_container_fkey" FOREIGN KEY ("container") REFERENCES "subtitles_container"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cat_names" ADD CONSTRAINT "cat_names_owner_fkey" FOREIGN KEY ("owner") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
