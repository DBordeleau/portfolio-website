// Runs on `npm install` (the prepare script) and points git at .githooks.
// It does nothing outside a git checkout, such as some CI builds.
import { execFileSync } from 'node:child_process';

try {
  execFileSync('git', ['config', 'core.hooksPath', '.githooks'], { stdio: 'ignore' });
} catch {
  // Not a git checkout, or git isn't installed. There are no hooks to install.
}
