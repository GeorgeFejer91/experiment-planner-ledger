# Project contract

## Purpose and product boundary

Experiment Planner Ledger helps researchers author local video-affect studies. Its sibling is
[experiment-planner-classic](https://github.com/GeorgeFejer91/experiment-planner-classic). Both target the same authoring capabilities and
versioned recipe semantics; their default interfaces differ.

The Planner owns workspaces/media catalogues, questionnaires/languages,
variants and named intervals, screen layout, feedback/input configuration,
validation, save and editable reopen. Preview is an authoring simulation.
Participant allocation, execution, sampling, actual timestamps, LSL/XDF and
recording belong to the separate [Experiment Runner](https://github.com/GeorgeFejer91/experiment-runner).
This repository ships no Runner app. Shared recipe changes must be checked
against that independently versioned consumer as well as the sibling Planner.

## Architecture

- `experiment-planner/web/`: browser UI and shared pure authoring modules.
- `experiment-planner/desktop/`: Tauri WebView frontend and Vite configuration.
- `native/`: existing Rust crate, Planner executable and hidden authoring CLI.
- `docs/`: versioned contracts, research provenance and dependency licences.
- `test/`: synthetic authoring/contract fixtures and Node regression tests.
- `scripts/`: Planner build and verification tools.

The inherited native library still contains coupled Runner/session modules.
They are implementation dependencies, not a delivered participant application
or permission to add recording features. Prune only with contract/build evidence.

## Scope and invariants

Preserve historical recipe generations and questionnaire wording, codes,
citations and licences. Never silently replace a researcher's setting or
upgrade an opened recipe. Browser authoring has no native filesystem grants,
global input, LSL/XDF or timing authority. Use HTML video; no retired native
player stack. Optional spatial recipe fields do not establish XR device support.
Private instrument installs and participant data remain researcher-local.

## Extraction task and acceptance

Source: [Affect Research](https://github.com/GeorgeFejer91/affect-tracker-research/tree/25a429024ace0074119c2a44fb4e661670f0e84d).
Interface: **ledger**. A source snapshot is preserved without copying the
monorepo's Git history, participant results, bundled videos or Runner frontend.
Related contracts remain available for compatibility, not additional app scope.

- [x] Bootstrap a separate repository using the installed For-AI scaffold.
- [x] Extract the actual ledger interface and matching authoring source.
- [x] Verify shared domain parity with the sibling, tests and both frontend builds.
- [x] Publish privately with reciprocal documentation links and verify remote HEAD.

Overall product readiness remains open: repository extraction is not an installed
research-release qualification. Next action: qualify packaged Planner save/reopen with researcher-supplied media
and compare both interfaces against one identical authored experiment.
Task state and evidence belong here; do not create a second progress ledger.

## Session observation — 2026-11-04

Extraction task complete. This repository is public at [experiment-planner-ledger](https://github.com/GeorgeFejer91/experiment-planner-ledger),
default branch `main`, under the canonical `Documents/GitHub/experiment-planner-ledger` folder.
The last verified product commit is `f55b65b6b2a3db698532da06000205910e0d75ee`; local HEAD and the actual remote
main ref matched, with a clean tree before this documentation-only handoff.
[GitHub CI](https://github.com/GeorgeFejer91/experiment-planner-ledger/actions/runs/41825253926) passed frozen install, SurveyJS checks,
the full extracted Node suite and both frontend builds. The remote-required
For-AI context/safety check passed. Final handoff documentation is the subsequent
checkpoint; inspect fresh Git state rather than assuming this observation persists.

Local native checks passed with all features and no default features, and Rust
formatting passed. Headless Chrome at 1280x860 loaded the selected interface with
seven sections, no startup errors and no participant Run panel. All 66 checked
shared authoring modules match the sibling. Five OpenLAV publisher-original
files retain exact source Git bytes. No video bytes, participant results or
Runner application are tracked. The source monorepo remains clean and unchanged.

No extraction blocker remains. Overall product/research-release readiness stays
open. Next acceptance check: create and reopen the same real-media recipe in both
installed interfaces without setting loss, silent version changes or hidden
ambient dependencies. Native executable/CLI runtime, real-media save/reopen,
installer, full accessibility/geometry and Runner session qualification are NOT RUN.
The initial creation was private. The user's 2026-11-04 follow-up explicitly
authorized public visibility and collaborator access for Antonin Fourcade.
GitHub verified PUBLIC visibility and a pending write invitation for
[`afourcade`](https://github.com/afourcade). He must accept the invitation;
pending status is not active write access. No product code changed.
Future product changes and publication follow matching session authorization.
