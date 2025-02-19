-- CreateTable
CREATE TABLE "pigeons" (
    "id" SERIAL NOT NULL,
    "image_path" VARCHAR(255),
    "name" VARCHAR(255),
    "price" DECIMAL(10,2),
    "pigeon_name" VARCHAR(255),
    "description" TEXT,

    CONSTRAINT "pigeons_pkey" PRIMARY KEY ("id")
);

