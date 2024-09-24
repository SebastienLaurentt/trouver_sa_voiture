/*
  Warnings:

  - Added the required column `buyingOption` to the `Estimation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Estimation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Estimation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `immatriculation` to the `Estimation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kmNumber` to the `Estimation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Estimation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Estimation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `Estimation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellingPeriod` to the `Estimation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Estimation" ADD COLUMN     "buyingOption" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "immatriculation" TEXT NOT NULL,
ADD COLUMN     "kmNumber" INTEGER NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "postalCode" TEXT NOT NULL,
ADD COLUMN     "sellingPeriod" TEXT NOT NULL;
