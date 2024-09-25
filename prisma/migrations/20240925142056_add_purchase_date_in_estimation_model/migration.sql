/*
  Warnings:

  - Added the required column `purchaseDate` to the `Estimation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Estimation" ADD COLUMN     "purchaseDate" TIMESTAMP(3) NOT NULL;
