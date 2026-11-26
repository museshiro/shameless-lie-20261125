import { mkdirSync, writeFileSync } from "node:fs";

const line = "Deleted it. " + "Kept a copy.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
