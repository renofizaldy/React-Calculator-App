/*
  Warnings:

  - You are about to drop the `User_time` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User_time";

-- CreateTable
CREATE TABLE "Useract" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "lastLogin" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLogout" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Useract_pkey" PRIMARY KEY ("id")
);
