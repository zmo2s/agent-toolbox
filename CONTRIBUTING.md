# Contributing to Agent Toolbox

Contributions and pull requests are welcome, including small documentation fixes. You can improve existing skills and policies, add reusable workflows, or share practical examples.

## Start with a focused change

- Fix unclear instructions or broken links.
- Add examples showing how to use an existing skill.
- Improve a security rule and explain the scenario it addresses.
- Propose a new skill that solves a concrete, reusable problem.

For a large change, open an issue first to discuss the scope. Small fixes can go straight to a pull request.

## Open a pull request

1. Fork this repository into your own GitHub account.
2. Clone your fork and create a branch:

   ```bash
   git clone https://github.com/YOUR-USERNAME/agent-toolbox.git
   cd agent-toolbox
   git switch -c docs/your-change
   ```

3. Make a focused change and perform the relevant checks below.
4. Review the diff and stage only the files you intend to contribute. For example, for a README change:

   ```bash
   git diff
   git add README.md
   git diff --cached
   git commit -m "docs(readme): 📝 clarify setup instructions"
   git push -u origin docs/your-change
   ```

5. Open a pull request from your fork's branch into `zmo2s/agent-toolbox:main`. Explain the problem, your solution, and the checks you performed.

## Adding or updating a skill

Follow the existing layout:

```text
.codex/skills/your-skill-name/SKILL.md
```

Use a lowercase, hyphenated folder name. Start `SKILL.md` with YAML metadata:

```yaml
---
name: your-skill-name
description: Explain what the skill does and when to use it.
---
```

Keep instructions focused on the intended task. Include practical usage examples and document prerequisites or limitations. Add supporting files only when they serve the skill, and link new skills from the README resource table.

Security guidance should distinguish instructions for the agent from controls enforced by permissions, sandboxing, or the database. Explain changes to approval requirements and access boundaries. Never include real credentials, secrets, or private data in examples.

## Checks before submitting

- Run `git diff --check` to catch whitespace errors.
- For documentation, verify relative links and examples against the repository.
- For skill changes, check the metadata and try a relevant example in a safe environment. Describe what you actually verified.
- For JavaScript changes, run `npm test` with Node.js installed and add or update tests when behavior changes.
- Record checks that were skipped or blocked and explain why. Documentation-only changes do not require the JavaScript test suite.

Use commit subjects in the repository's format: `<type>(<scope>): <emoji> <description>`. The [Good Commit skill](.codex/skills/good-commit/SKILL.md) contains examples.

Keep unrelated changes out of your PR. Maintainers may ask for revisions before merging; opening a PR does not automatically publish its changes on the default branch.
