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
git commit -m "chore(core): 🔧 initialize demo"
```

Now edit `src/todo.js` or a test. In Codex, send:

```text
/skill-commit
```

The project's `AGENTS.md` routes this text shortcut to
the skill. It prepares a commit message without staging or committing.
This is a project instruction, not a native slash-menu autocomplete entry.

You can also ask:

> Use the good-commit skill to prepare a commit for my current changes.

Responses use blue markers (🔷 / 🔹) and your language to distinguish the
proposal, changes, checks, and Git status. Every copyable commit subject uses
`<type>(<scope>): <emoji> <description>`, with a mandatory emoji and a
parenthesized scope such as `back`, `front`, `skills`, or `core`.
The skill distinguishes staged and unstaged changes,
flags breaking changes, and proposes separate commits for unrelated work.

For a change that rejects blank todo titles, a good result is:

```text
fix(core): 🐛 reject empty todo titles
```

The skill lives at `.codex/skills/good-commit/SKILL.md`, so it travels with this repository.
