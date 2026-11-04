# Project contract

## Purpose and product boundary

Experiment Planner Ledger helps researchers author local video-affect studies. Its sibling is
[experiment-planner-classic](https://github.com/GeorgeFejer91/experiment-planner-classic). Both target the same authoring capabilities and
versioned recipe semantics; their default interfaces differ.

The Planner owns workspaces/media catalogues, questionnaires/languages,
variants and named intervals, screen layout, feedback/input configuration,
validation, save and editable reopen. Preview is an authoring simulation.
Participant allocation, execution, sampling, actual timestamps, LSL/XDF and
recording belong to a separate Runner. This repository ships no Runner app.

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
- [ ] Publish privately with reciprocal documentation links and verify remote HEAD.

Overall product readiness remains open: repository extraction is not an installed
research-release qualification. Next action: verify private publication and CI, then qualify packaged Planner
save/reopen and compare both interfaces with real media.
Task state and evidence belong here; do not create a second progress ledger.

## Session observation

2026-11-04: local bootstrap on `codex/extract-planner`; remote publication pending.
Extraction evidence: 1132 Node tests passed with zero failures/skips;
SurveyJS checks, browser build, desktop frontend build, Rust formatting and
locked native checks with all features and no default features passed. Headless
Chrome at 1280x860 loaded the selected interface with seven sections, no startup
errors and no participant Run panel. 66 shared authoring modules match the sibling
byte-for-byte. Installer, actual native CLI execution, save/reopen against real
media and the full visual/accessibility matrix remain NOT RUN. Read fresh Git state at the next session.
