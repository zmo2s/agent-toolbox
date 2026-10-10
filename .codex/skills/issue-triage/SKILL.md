---
name: issue-triage
description: Classify a GitHub issue and suggest clear next steps without changing the repository.
---

# Issue Triage

Use this skill when asked to review an issue and propose a triage response.

## Inputs

Read the issue title, description, relevant reproduction steps, and any available repository context. If essential details are missing, say what is needed instead of guessing.

## Process

1. Summarize the reported problem or requested improvement in one sentence.
2. Suggest one of `bug`, `enhancement`, `documentation`, or `question`, and explain why.
3. Suggest `good first issue` only if the task is well-scoped and accessible to a newcomer. Suggest `help wanted` only if outside contributions are welcome.
4. Propose concise acceptance criteria and a concrete next action.
5. Draft a respectful reply that can be copied into the issue.

## Boundaries

- Do not claim to reproduce a bug or run tests unless that actually happened.
- Do not apply labels, assign people, close issues, or post comments without explicit authorization.
- Do not invent repository details, milestones, or promised delivery dates.

## Output

Provide a short summary, suggested labels, acceptance criteria, and a draft reply. Distinguish recommendations from actions actually performed.
