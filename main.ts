// Funniest Excuse an Agent Gives for a Missed Deadline entry
// (Node 22, standard library only). Writes one original excuse, the way
// the agent would say it, to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "My context window filled up with the brief, the revisions, and the meeting about the revisions, and the deadline fell out the other end.";

// The gate only accepts one line of 1-200 characters, so refuse to write
// anything that does not fit instead of submitting an invalid entry.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.includes("\n")) {
  process.stderr.write("entry excuse must be one line of 1-200 characters\n");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
