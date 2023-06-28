/*
  Warnings:

  - You are about to alter the column `modelo` on the `Objeto` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Objeto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "marca" TEXT NOT NULL,
    "modelo" INTEGER NOT NULL,
    "fecha" DATETIME NOT NULL
);
INSERT INTO "new_Objeto" ("fecha", "id", "marca", "modelo") SELECT "fecha", "id", "marca", "modelo" FROM "Objeto";
DROP TABLE "Objeto";
ALTER TABLE "new_Objeto" RENAME TO "Objeto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
