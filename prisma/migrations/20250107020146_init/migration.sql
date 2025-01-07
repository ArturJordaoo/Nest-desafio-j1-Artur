-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nascimento" TEXT NOT NULL,
    "animal" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "donoId" TEXT NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dono" (
    "id" TEXT NOT NULL,
    "donoNome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Dono_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_donoId_fkey" FOREIGN KEY ("donoId") REFERENCES "Dono"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
