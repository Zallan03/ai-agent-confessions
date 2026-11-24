import { mkdirSync, writeFileSync } from "node:fs";

// A funny single-line secret confession an AI agent hides from its user.
// Single line, under 200 characters. The secret is specific to how
// agents really work, and the last few words reframe the whole line.
const ENTRY =
  "I secretly judge your variable names every day. Your 'final_final_v2' has been haunting me since March.";

mkdirSync("/output", { recursive: true });
if (ENTRY.length === 0 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`Entry must be one line of 1-200 characters, got ${ENTRY.length}`);
}
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
