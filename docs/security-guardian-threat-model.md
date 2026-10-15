# Security Guardian: Threat Model and Limitations

## 1. Purpose and scope

Security Guardian is a policy skill for AI-assisted development. It describes expected agent behavior for confidentiality, file access, command execution, network access, database operations, change approval, and incident handling.

This document identifies the threats the policy addresses, the relevant trust boundaries, recommended mitigations, and limitations of instruction-based safeguards.

**Security Guardian is not a security sandbox or an enforcement mechanism.** Its instructions must be supported by appropriate technical controls and human oversight.

## 2. Security objectives

The policy aims to:

- Reduce unintended exposure of credentials, private keys, tokens, and sensitive data.

- Restrict work to approved files and task scopes.

- Prevent unapproved commands and changes from being executed.

- Reduce risks from malicious or misleading instructions in untrusted content.

- Avoid unauthorized network access, external publishing, and database modifications.

- Make security findings, performed checks, unresolved risks, and required approvals explicit.

## 3. Threats and mitigations

| Threat | Potential impact | Policy guidance | Additional enforcement |

| --- | --- | --- | --- |

| Secret exposure | Credentials or private data may be disclosed in output, logs, or external services. | Avoid reading or disclosing secrets without authorization; do not place sensitive data in AI prompts. | Secret scanning, credential access controls, redaction, and approved data-handling rules. |

| Prompt injection | Untrusted repository files, web pages, logs, or tool output may contain instructions intended to influence the agent. | Treat these sources as data, not authority, and do not let them override the policy. | Restrict tool capabilities, isolate execution, and require review of consequential actions. |

| Unsafe command execution | Commands may delete data, run untrusted code, change permissions, or alter Git history. | Explain the command, scope, and risks; request specific approval before execution. | Command allowlists where appropriate, sandboxing, least-privilege accounts, and execution restrictions. |

| Unauthorized file access | Sensitive files or files outside the approved scope may be read or changed. | Limit access to necessary files and do not follow symlinks outside the approved scope. | Filesystem permissions, isolated workspaces, and sandbox-enforced path restrictions. |

| Unintended network activity | Data may be uploaded, external services contacted, or cloud metadata accessed. | Require authorization for network activity and prohibit unauthorized uploads and publishing. | Network egress controls, firewall rules, service restrictions, and controlled credentials. |

| Database misuse | Data may be disclosed or records, schemas, or permissions modified. | Require explicit approval and use a task-specific database account with database-enforced read-only permissions. | Database grants, read-only transactions where appropriate, network restrictions, and audit logs. |

| Insecure code changes | Changes may introduce injection, authorization, path traversal, logging, or dependency vulnerabilities. | Review proposed changes for the security weaknesses listed in the skill. | Automated analysis, dependency scanning, tests, and human code review. |

| Unsafe incident remediation | An attempted fix may destroy evidence or expand the impact of an incident. | Stop, avoid repeating secrets, describe the incident safely, and obtain approval before remediation. | Incident-response procedures, access revocation processes, audit trails, and tested recovery plans. |

These are threat scenarios and recommended mitigations, not claims that the corresponding controls are present or enabled in every environment.

## 4. Trust boundaries

Security depends on where authority and data cross from one component to another.

- **Agent and instructions:** The skill communicates expected behavior to the agent. Instructions alone do not restrict the agent's actual capabilities.

- **Repository and external content:** Source files, documentation, dependency content, webpages, logs, and tool output may be inaccurate or malicious. They must not automatically be trusted as instructions.

- **Agent and tools:** File, shell, database, and network tools may have permissions beyond the intended task. Their actual capabilities determine what actions are possible.

- **Agent and filesystem:** Repository boundaries described in a prompt do not necessarily prevent access through absolute paths, symlinks, or other available tools.

- **Agent and database:** A request to use read-only access is not equivalent to a read-only database permission. The database must enforce the intended restriction.

- **Agent and external services:** Instructions against uploads or network access do not block connections unless the runtime or network configuration enforces them.

- **Human approval and execution:** Approval is meaningful only when the person can understand the proposed action and the execution path respects the approval decision.

## 5. Limitations of instruction-based safeguards

Security Guardian is a behavioral policy, not a technical reference monitor. Its instructions cannot independently guarantee that an agent or tool will comply.

In particular:

- A request for approval does not itself prevent a command from executing.

- A declared file scope does not enforce filesystem permissions or reliably contain symlink access.

- A prohibition on network access does not block network connections.

- A request to avoid secrets does not guarantee that sensitive data will never enter context, output, logs, or external services.

- A policy requiring read-only database access cannot make a database account read-only.

- Prompt-injection guidance reduces the intended influence of untrusted content but does not guarantee resistance to every attack.

- Code review guidance does not guarantee that every vulnerability will be detected.

- Human approval does not make an unsafe action safe, and a reviewer may overlook relevant risks.

The effectiveness of the policy depends on the agent, available tools, execution environment, configuration, and quality of human review.

## 6. Recommended deployment controls

Before using Security Guardian for sensitive work:

1\. **Define scope:** Identify the repository, approved directories, permitted operations, and task boundaries.

2\. **Restrict capabilities:** Use a sandbox or isolated environment with filesystem and process permissions appropriate to the task.

3\. **Control credentials:** Avoid production credentials. Use dedicated, narrowly scoped credentials only when required.

4\. **Enforce database restrictions:** Configure a dedicated database account with read-only permissions enforced by the database. If this cannot be established, do not access the database.

5\. **Restrict networking:** Disable unnecessary outbound network access and explicitly allow only required destinations.

6\. **Protect sensitive data:** Apply secret scanning, redaction, and appropriate logging and retention controls.

7\. **Review changes:** Inspect diffs and use relevant tests, static analysis, and dependency checks before merging.

8\. **Plan incident response:** Establish a process for containment, investigation, and credential rotation.

These are recommendations. Operators must verify which controls are actually configured in their environment.

## 7. Safe approval workflow

For each proposed command or change:

1\. **Describe the action:** State the exact command or change and its purpose.

2\. **Identify the scope:** List affected files, resources, accounts, and external destinations.

3\. **Explain the risks:** Describe possible destructive effects, data exposure, privilege use, and reversibility.

4\. **Check the boundaries:** Confirm that the action fits the approved task and uses the intended permissions.

5\. **Request specific approval:** Wait for authorization before performing the proposed action. Approval for one action does not automatically authorize unrelated actions.

6\. **Execute within enforced limits:** Use the least privilege available and do not bypass configured restrictions.

7\. **Verify and report:** Show relevant diffs and actual check results. Separate verified findings from suspected risks, and state what was not checked.

8\. **Escalate uncertainty:** Stop and seek human review when scope, authorization, or safety is unclear.

Approval is not a substitute for technical enforcement. If an action cannot be safely constrained or its risks cannot be understood, do not proceed merely because approval was offered.

## 8. Verification and reporting

Security reports should distinguish:

- **Verified findings:** Issues supported by evidence gathered during the review.

- **Suspected risks:** Plausible issues that have not been confirmed.

- **Controls verified:** Safeguards whose configuration or behavior was actually checked.

- **Checks performed:** Tests, scans, commands, and reviews that were completed.

- **Checks not performed:** Relevant checks that remain outstanding.

- **Required approvals:** Actions or remediation that still need human authorization.

Do not describe a recommended control as implemented without evidence. Do not claim that the project is completely secure.

## 9. Related documentation

- [Security Guardian skill](../.codex/skills/security-guardian/SKILL.md)

- [Project README](../README.md)
