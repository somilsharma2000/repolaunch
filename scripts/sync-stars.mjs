#!/usr/bin/env node
/**
 * sync-stars.mjs — machine-verify repo facts from the GitHub API.
 * Run locally: npm run sync:stars
 * Runs nightly in CI (.github/workflows/sync-stars.yml) and commits the result.
 *
 * Anti-hallucination rule (docs/VIBE-CODING-PLAYBOOK.md): star counts, repo
 * existence, and license data come from the API — never from an AI's memory.
 */
import { readFileSync, writeFileSync } from "node:fs";

const TOKEN = process.env.GITHUB_TOKEN;
const repos = JSON.parse(readFileSync("./src/data/repos.json", "utf8"));
const out = {};

for (const r of repos) {
  const key = `${r.owner}/${r.name}`;
  const url = `https://api.github.com/repos/${key}`;
  const headers = {
    Accept: "application/vnd.github+json",
    ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
  };
  try {
    const res = await fetch(url, { headers });
    if (res.status === 404) {
      console.warn(`⚠️  ${key} NOT FOUND on GitHub — remove it or fix the name (anti-hallucination gate)`);
      continue;
    }
    if (!res.ok) {
      console.warn(`⚠️  ${key}: HTTP ${res.status} — keeping previous stars`);
      continue;
    }
    const data = await res.json();
    out[key] = data.stargazers_count;
    const licenseId = data.license?.spdx_id ?? "none";
    if (licenseId === "none" && r.licenseType === "safe") {
      console.warn(`⚠️  ${key}: no license detected on GitHub — review before publishing`);
    }
    console.log(`✓ ${key}: ${data.stargazers_count} stars (${licenseId})`);
  } catch (e) {
    console.warn(`⚠️  ${key}: ${e.message}`);
  }
}

writeFileSync("./src/data/stars.json", JSON.stringify(out, null, 2) + "\n");
console.log(`\nWrote ${Object.keys(out).length} entries to src/data/stars.json`);
