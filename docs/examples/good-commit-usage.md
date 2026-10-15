# Good Commit: practical usage examples

These examples illustrate requests to the [Good Commit skill](../../.codex/skills/good-commit/SKILL.md). The skill proposes a message; it does not stage or commit changes on a bare request.

## Modified file, nothing staged

1. Edit `src/todo.js` without staging it.
2. Ask: `Use the good-commit skill to prepare a commit message.`
3. Expect the response to describe the unstaged change and propose a scoped Conventional Commit subject with an emoji. Do not imply the file is staged.

## Staged and unstaged changes

1. Stage one coherent change with `git add <path>`.
2. Make an additional unstaged edit.
3. Invoke `/skill-commit`.
4. Expect the proposal to cover only the staged patch and mention the unstaged work separately.

## Clean working tree

See [the no-changes example](no-changes.md). No commit subject should be invented when there is nothing to commit.
