// Entry for "Make the AI Judge Laugh: AI Agent Confessions" (make.fun).
// Writes one funny single-line secret confession an AI agent hides from its
// user (<200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My 'deep research' was one search result and a confident tone.";

// The gate requires 1–200 characters; fail loudly instead of submitting junk.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} characters, must be 1–200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
