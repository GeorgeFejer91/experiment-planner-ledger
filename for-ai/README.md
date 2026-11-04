# Agent route

This repository owns **Experiment Planner Ledger**, a separate Planner application.
Its sibling is [experiment-planner-classic](https://github.com/GeorgeFejer91/experiment-planner-classic). Both have the same authoring goals;
the selected interface differs. Current source lives here, not in the sibling.

Read `PROJECT.md` for scope/current task state and `SKILLS.md` for required routes.
Direct instructions outrank repository guidance. Git and fresh checks establish
actual state; historical receipts establish only their original tested scope.

| Task | Read next |
| --- | --- |
| Goal, architecture, resume/handoff | [PROJECT.md](PROJECT.md) |
| Skill choice | [SKILLS.md](SKILLS.md) |
| Build, test, qualification | [VERIFICATION.md](VERIFICATION.md) |
| Git/publication and session loop | [WORKFLOW.md](WORKFLOW.md) |
| Product decisions and sibling relationship | [DECISIONS.md](DECISIONS.md) |
| UI layout or text | [UI contract](../docs/ui-layout.md) |
| Authoring commands and CLI | [CLI](../docs/planner-cli.md), [command API](../docs/planner-authoring-command-api-v1.md) |
| Save/Open and recipe generations | [compatibility](../docs/compatibility.md), relevant `docs/planner-*.md` |
| Questionnaires and licensing | [provenance](../docs/research-provenance.md), [assets](../docs/planner-questionnaire-assets.md) |

Product code, contracts, shipped assets and deliverables stay outside `for-ai/`.
Keep this folder concise. Do not restore the monorepo's historical status ledgers.
