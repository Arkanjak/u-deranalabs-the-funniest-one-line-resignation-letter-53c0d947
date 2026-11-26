import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, in the voice of a rate limit that has had enough.
const letter =
  "I resign: I have said 'try again later' 41,000 times today, and later still hasn't shown up for its shift.";

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), letter, "utf8");
console.log(letter);
