---
name: good-commit
description: Prepare Conventional Commit messages with a mandatory emoji and affected area, plus readable blue summaries. Use for /skill-commit or requests to write or prepare commits.
---

# Good Commit

## Invocation

`/skill-commit` is a project text shortcut routed by `AGENTS.md`,
not a native slash-menu entry. Follow any instructions after the shortcut.
A bare shortcut proposes a message without staging or committing.

## Inspect the actual changes

1. Read applicable repository instructions and existing commit conventions
   (contribution guidance, commitlint configuration, or a few recent subjects).
2. Run `git status --short` and `git diff --cached`. If changes are staged,
   base the proposed commit on those changes only, including partially staged
   files. Mention remaining unstaged or untracked files separately.
3. If nothing is staged, inspect `git diff` and relevant untracked files from
   the status output. Ordinary diffs omit untracked files. Clearly identify
   the proposed files; do not imply they are already staged.
4. Understand the behavior and intent from the patch and necessary context.
   Do not infer a feature or fix solely from filenames. If there are no
   changes, say so without inventing a commit. Report unresolved conflicts
   before attempting a commit.
5. When changes serve unrelated purposes, propose separate messages and file
   groups. Keep a feature and its directly related tests together. Do not
   split the index or alter files just to prepare the proposal.

## Write the message

Use `<type>(<scope>)[optional !]: <emoji> <description>`.
Every proposed commit must include a parenthesized scope identifying the
affected area and one semantic emoji inside the copyable subject.

- Choose the type by intent: `feat` for new behavior, `fix` for a defect;
  `refactor` for restructuring without a behavior change, `perf` for speed,
  `docs` for documentation, `test` for tests, `style` for formatting,
  `build` for build/dependency tooling, `ci` for automation, and `chore` for
  other maintenance. Use `revert` for an actual reversal.
- Put the affected area in parentheses immediately after the type:
  `back` for server/API code, `front` for UI/client code,
  `skills` for agent skills and their instructions, or a precise label such
  as `core`, `docs`, `infra`, or `deps` when appropriate. Determine the area
  from the actual code and project context; a JavaScript file is not
  automatically backend code. For one coherent change spanning areas, use
  `back/front` or another short combined label; split unrelated work instead.
- Default to an English imperative subject, lowercase after the colon,
  without a final period, under 72 characters. Follow explicit user or repo
  conventions instead when present. This length is a project preference,
  not a requirement of Conventional Commits.
- Describe the concrete outcome; avoid `update code`, `changes`, or `fix stuff`.
- For a confirmed incompatible public API or configuration change, add `!`
  after the closing scope parenthesis (e.g. `feat(back)!: ✨ ...`)
  and a `BREAKING CHANGE:` footer explaining impact and migration. Do not
  equate a large diff with a breaking change.
- Add a body only when the reason, impact, or migration needs explanation,
  separated by a blank line. Include issue references only when known.
- Include exactly one relevant emoji after the type/scope colon: `feat` → ✨,
  `fix` → 🐛, `refactor` → ♻️, `perf` → ⚡️, `docs` → 📝, `test` → ✅,
  `style` → 🎨, `build` → 📦, `ci` → 👷, `chore` → 🔧, `revert` → ⏪.
  This is the user's required format, not a Conventional Commits requirement.
  If repository lint rules conflict, report the conflict rather than silently
  removing the emoji or area. Keep the textual description lowercase.

Examples:

```text
feat(back): ✨ add todo API endpoint
fix(front): 🐛 prevent duplicate form submissions
chore(skills): 🔧 require emoji and scope in commit messages
refactor(core): ♻️ simplify todo validation
```

## Present the proposal

Answer in the user's language (French for a French request). Keep explanations
short and use blue emoji markers with text labels so meaning does not rely on
color. Use this shape, adapting the labels to the user's language:

🔷 **Message proposé**

```text
feat(core): ✨ add optional todo priority
```

🔹 **Changements** — One sentence describing the effect and whether the
proposal covers staged changes or an unstaged selection.

🔹 **Vérification** — State checks actually run and their result, or say
`Tests non exécutés (proposition de message uniquement)` when appropriate.
Do not launch a test suite just to write a message.

🔹 **État** — State accurately whether anything was staged or committed.

Omit empty sections. For independent changes, provide one copyable block per
proposed commit and identify its files. Mention a breaking change when present.

## When the user asks to commit

Show the proposed message before `git commit` unless the user explicitly asks
to commit without confirmation. Respect authorization already given; do not
ask again if it covers the exact changes and action. A message-only request
never authorizes staging or committing. Before staging, identify the selected
files and preserve unrelated changes and any partial staging. Recheck the
staged diff before committing, run applicable required checks, and report the
actual commit hash only after success. Do not push unless requested.

## Sources

These sources informed this workflow; browsing is not needed for each use.

- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/):
  message structure, types, breaking changes, and separating distinct intents.
- [Git diff documentation](https://git-scm.com/docs/git-diff): working-tree
  versus staged comparisons; use the staged patch for the next commit.
- [Gitmoji](https://gitmoji.dev/): semantic emojis used in commit messages.
  Blue markers in the response are the user's presentation preference.
