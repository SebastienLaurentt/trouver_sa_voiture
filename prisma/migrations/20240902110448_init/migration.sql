-- CreateTable
CREATE TABLE "Vehicule" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "kmNumber" INTEGER NOT NULL,
    "boiteType" TEXT NOT NULL,
    "carType" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Vehicule_pkey" PRIMARY KEY ("id")
);
