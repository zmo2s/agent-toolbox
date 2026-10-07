# ChatGPT / Codex good-commit Skill demo

A tiny Node.js project showing a repo-scoped Codex Skill that turns Git changes into clean Conventional Commit messages.

## Structure

```text
chatgpt-good-commit/
├── .codex/skills/good-commit/SKILL.md
├── src/todo.js
├── test/todo.test.js
├── package.json
└── README.md
```

## Try it

```bash
npm test
git init
git add .
git commit -m "chore: initial demo"
```

Now edit `src/todo.js` or a test. In Codex, ask:

> Use the good-commit skill to prepare a commit for my current changes.

For a change that rejects blank todo titles, a good result is:

```text
fix(todo): reject empty todo titles
```

The skill lives at `.codex/skills/good-commit/SKILL.md`, so it travels with this repository.
