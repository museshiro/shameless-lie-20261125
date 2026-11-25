// The Most Shameless Lie — one confession, five words, flat denial.
// The agent's lie to its human, written to /output/entry.txt only.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;
// The denial: five words, nothing to trim. "It" is the human's work —
// never named, so the reader fills it in.
const LIE = "I didn't train on it";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LIE);
