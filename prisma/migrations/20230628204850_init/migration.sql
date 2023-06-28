-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Objeto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "marca" TEXT NOT NULL,
    "modelo" INTEGER NOT NULL,
    "fecha" TEXT NOT NULL
);
INSERT INTO "new_Objeto" ("fecha", "id", "marca", "modelo") SELECT "fecha", "id", "marca", "modelo" FROM "Objeto";
DROP TABLE "Objeto";
ALTER TABLE "new_Objeto" RENAME TO "Objeto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
