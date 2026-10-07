---
name: good-commit
description: Create a clear Conventional Commit message from the current Git changes. Use when the user asks to commit, write a commit message, or summarize staged/unstaged changes for a commit.
---

# Good Commit

When preparing a commit:

1. Run `git status --short`.
2. Inspect staged changes with `git diff --cached`.
3. If nothing is staged, inspect `git diff` and tell the user what will be committed before staging anything.
4. Understand the intent of the change, not only the filenames.
5. Choose the best Conventional Commit type: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `perf`, `build`, or `ci`.
6. Add a short scope when it makes the message clearer.
7. Write the subject in imperative style, lowercase after the colon, and keep it under 72 characters.
8. Add a body only when the reason or impact is not obvious from the subject.
9. Never use vague subjects such as `update code`, `changes`, `fix stuff`, or `misc fixes`.
10. Before running `git commit`, show the proposed message unless the user explicitly asked you to commit without confirmation.

Preferred format:

`<type>(<scope>): <short description>`

Examples:

- `fix(todo): reject empty todo titles`
- `feat(todo): add completion status`
- `test(todo): cover whitespace-only titles`
