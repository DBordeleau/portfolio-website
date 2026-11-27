// Branch names follow <type>/<issue>-<slug>, for example fix/1-patch-nextjs-vulnerability.
export const BRANCH_NAME_PATTERN =
  /^(feat|fix|refactor|perf|test|docs|chore)\/[0-9]+-[a-z0-9]+(-[a-z0-9]+)*$/;

// The default branch, master, fails the pattern on purpose: it moves through
// merged pull requests, not local pushes. Override once with --no-verify.

const ZERO_SHA = /^0+$/;

export function isValidBranchName(name) {
  return BRANCH_NAME_PATTERN.test(name);
}

// Takes the text git writes to a pre-push hook's stdin, one line per ref:
// "<local ref> <local sha> <remote ref> <remote sha>".
// Returns the names of branches being created or updated that break the rule.
// Tags and branch deletions are skipped.
export function findInvalidBranches(prePushInput) {
  const invalid = [];
  for (const line of prePushInput.split(/\r?\n/)) {
    const [, localSha, remoteRef] = line.trim().split(/\s+/);
    if (!remoteRef?.startsWith('refs/heads/') || ZERO_SHA.test(localSha)) continue;
    const name = remoteRef.slice('refs/heads/'.length);
    if (!isValidBranchName(name)) invalid.push(name);
  }
  return invalid;
}
