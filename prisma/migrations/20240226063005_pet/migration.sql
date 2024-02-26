-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "nascimento" TEXT NOT NULL,
    "animal" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "donoId" TEXT NOT NULL,
    CONSTRAINT "Pet_donoId_fkey" FOREIGN KEY ("donoId") REFERENCES "Dono" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Dono" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "donoNome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL
);
