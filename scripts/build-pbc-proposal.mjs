import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const proposalDir = join(rootDir, "pbc-proposal");
const publicDir = join(rootDir, "public");
const staticDir = join(publicDir, "pbc-proposal-static");
const outputDir = join(proposalDir, "out");
const outputHtml = join(outputDir, "index.html");
const outputAssets = join(outputDir, "_next");

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

if (!existsSync(join(proposalDir, "node_modules"))) {
  run("npm", ["install"], proposalDir);
}

run("npm", ["run", "build"], proposalDir);

if (!existsSync(outputHtml) || !existsSync(outputAssets)) {
  throw new Error("Proposal build did not produce the expected static output.");
}

mkdirSync(publicDir, { recursive: true });
rmSync(staticDir, { recursive: true, force: true });
mkdirSync(staticDir, { recursive: true });

cpSync(outputHtml, join(publicDir, "pbc-proposal-final.html"));
cpSync(outputAssets, join(staticDir, "_next"), { recursive: true });

console.log("Proposal HTML refreshed at public/pbc-proposal-final.html");
