import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Excuse me — I only take exact change, but for you I'd jam my own coil just to drop something sweet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
