-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "descriptionKey" TEXT NOT NULL,
    "technicalSpecificationsKey" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "perUser" BOOLEAN NOT NULL,
    "perDevice" BOOLEAN NOT NULL,
    "available" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);
