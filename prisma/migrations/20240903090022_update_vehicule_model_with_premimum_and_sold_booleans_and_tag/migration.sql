/*
  Warnings:

  - Added the required column `premium` to the `Vehicule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sold` to the `Vehicule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicule" ADD COLUMN     "premium" BOOLEAN NOT NULL,
ADD COLUMN     "sold" BOOLEAN NOT NULL,
ADD COLUMN     "tag" TEXT;
