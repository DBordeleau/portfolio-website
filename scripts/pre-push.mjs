import { readFileSync } from 'node:fs';
import { findInvalidBranches } from './branch-name.mjs';

const invalid = findInvalidBranches(readFileSync(0, 'utf8'));

if (invalid.length > 0) {
  console.error('Push rejected. Branch names must look like <type>/<issue>-<slug>,');
  console.error('for example fix/1-patch-nextjs-vulnerability.');
  console.error('Types: feat, fix, refactor, perf, test, docs, chore.');
  for (const name of invalid) console.error(`  ${name}`);
  process.exit(1);
}
