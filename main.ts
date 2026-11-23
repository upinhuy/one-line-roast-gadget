// One-Line Roast: The Gadget You Use Every Day
// SPDX-License-Identifier: MIT
//
// The entry is a single original line (at most 200 characters) roasting
// a gadget used every day. This program writes that line to
// /output/entry.txt, where the house gate scorer reads it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My robot vacuum has mapped every corner of my house and still eats the same phone charger every single day.";

// The gate only accepts 1 to 200 characters of non-blank UTF-8 text.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`Roast must be 1-200 characters, got ${ROAST.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters to ${join(outDir, "entry.txt")}`);
