# Write a commit message for what you staged, not everything you edited

Suppose you add a todo validation test and also tidy another test in the same file. You stage only the new test. A commit message describing both edits would promise a change that is not in the commit.

[Agent Toolbox](https://github.com/zmo2s/agent-toolbox) includes Good Commit, a reusable instruction file that asks an AI coding assistant to inspect the Git index before proposing a message. Here is a reproducible example using its small JavaScript demo.

## Try it in a fresh clone

You need Git, Node.js to run the demo tests, and an assistant that can read files and run Git commands. No npm dependencies are required.

```bash
git clone https://github.com/zmo2s/agent-toolbox.git
cd agent-toolbox
git switch -c demo/partially-staged
```

Append this test to `test/todo.test.js`:

```js
test("rejects an omitted title", () => {
  assert.throws(() => addTodo(), /Todo title is required/);
});
```

Stage that addition:

```bash
git add test/todo.test.js
```

Now rename the first test from `creates a todo` to `creates an incomplete todo`, but leave that rename unstaged. Both edits are in the same file, yet only the new test belongs to the next commit.

Inspect the two patches and run the tests:

```bash
git status --short
git diff --cached
git diff
npm test
```

The file should appear as `MM test/todo.test.js`: the first `M` represents staged changes, and the second represents unstaged changes. The cached diff should contain only the appended test; the ordinary diff should contain only the rename. Test counts can change as the project grows.

## Ask for a message

Send your assistant this prompt from the clone:

```text
Read .codex/skills/good-commit/SKILL.md and propose a commit message for my current changes.
```

An illustrative subject is:

```text
test(core): ✅ cover omitted todo titles
```

The assistant should explain that this proposal covers the staged test addition and mention the unstaged test-name edit separately. It should not include that rename in the commit description, restage the entire file, or create a commit merely because you requested a message. Exact wording may vary; the important check is whether the message matches `git diff --cached`.

## Reuse it in your project

Copy [the Good Commit skill](../../.codex/skills/good-commit/SKILL.md) into `.codex/skills/good-commit/SKILL.md` in your repository and use the explicit prompt above. The `/skill-commit` shortcut additionally needs the routing instructions from [AGENTS.md](../../AGENTS.md).

The skill provides instructions, not a guarantee of model behavior. Review the patch and proposed message before committing. You can try this workflow without installing the separate Security Guardian policy.

## Help improve the examples

First-time contributors are welcome. Try [documenting a breaking-change commit with migration guidance](https://github.com/zmo2s/agent-toolbox/issues/8), or [showing separate messages for unrelated changes](https://github.com/zmo2s/agent-toolbox/issues/7). Check the issue and open PRs before starting, and follow the [contribution guide](../../CONTRIBUTING.md).
