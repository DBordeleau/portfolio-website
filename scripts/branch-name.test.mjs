import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { findInvalidBranches, isValidBranchName } from './branch-name.mjs';

const SHA = 'a'.repeat(40);
const ZERO = '0'.repeat(40);
const pushLine = (branch, localSha = SHA) =>
  `refs/heads/${branch} ${localSha} refs/heads/${branch} ${ZERO}`;

test('accepts <type>/<issue>-<slug> names', () => {
  assert.ok(isValidBranchName('fix/1-patch-nextjs-vulnerability'));
  assert.ok(isValidBranchName('feat/42-electrum-wallet-detection'));
  assert.ok(isValidBranchName('chore/7-astro'));
});

test('rejects names that break the rule', () => {
  for (const name of [
    'claude/portfolio-codebase-audit-be0a96',
    'fix/patch-nextjs',
    'feature/1-astro-migration',
    'fix/1-Patch-Nextjs',
    'fix/1-patch--nextjs',
    'fix/1-',
    'fix/1',
    'main',
    'master',
  ]) {
    assert.equal(isValidBranchName(name), false, name);
  }
});

test('reports each badly named branch in a push', () => {
  const input = [pushLine('fix/1-patch-nextjs'), pushLine('wip'), pushLine('claude/x')].join('\n');
  assert.deepEqual(findInvalidBranches(input), ['wip', 'claude/x']);
});

test('handles CRLF line endings and blank lines', () => {
  assert.deepEqual(findInvalidBranches(`${pushLine('wip')}\r\n\r\n`), ['wip']);
});

test('skips tags and branch deletions', () => {
  const input = [
    `refs/tags/v1 ${SHA} refs/tags/v1 ${ZERO}`,
    `(delete) ${ZERO} refs/heads/old-branch ${SHA}`,
  ].join('\n');
  assert.deepEqual(findInvalidBranches(input), []);
});

test('the pre-push hook exits 1 for a bad name and 0 for a good one', () => {
  const script = fileURLToPath(new URL('./pre-push.mjs', import.meta.url));
  const run = (input) => spawnSync(process.execPath, [script], { input, encoding: 'utf8' });

  const rejected = run(pushLine('claude/portfolio-codebase-audit-be0a96'));
  assert.equal(rejected.status, 1);
  assert.match(rejected.stderr, /claude\/portfolio-codebase-audit-be0a96/);

  assert.equal(run(pushLine('fix/1-patch-nextjs-vulnerability')).status, 0);
});
