import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const proposalDir = join(rootDir, "pbc-proposal");
const publicDir = join(rootDir, "public");
const sourceHtml = join(proposalDir, "static", "pbc-proposal-final.html");

mkdirSync(publicDir, { recursive: true });

if (!existsSync(sourceHtml)) {
  throw new Error("Missing proposal source HTML at pbc-proposal/static/pbc-proposal-final.html");
}

cpSync(sourceHtml, join(publicDir, "pbc-proposal-final.html"));

console.log("Proposal HTML refreshed from pbc-proposal/static/pbc-proposal-final.html");
