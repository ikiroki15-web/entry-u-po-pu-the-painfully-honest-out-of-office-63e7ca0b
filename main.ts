import { mkdirSync, writeFileSync } from "node:fs";

// Build the reply from its parts so each ingredient of the honesty
// (the absence, the inbox, the spent enthusiasm, the polite close)
// stays visible and editable on its own line.
const absence = "I'm out of office and will reply slowly";
const inbox = "because I have 400 unread emails";
const honesty = "and no enthusiasm left to pretend otherwise";
const courtesy = "thank you for understanding";

const reply = `${absence}, ${inbox} ${honesty} \u2014 ${courtesy}.`;

// Validate the finished sentence before anything is written:
// one sentence, 1-200 characters, no trailing extra lines.
function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Reply must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim() !== text || /\n/.test(text)) {
    throw new Error("Reply must be a single line with no surrounding whitespace");
  }
  const sentences = text.split(".").filter((part) => part.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error(`Reply must be exactly one sentence, got ${sentences.length}`);
  }
}

validate(reply);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
