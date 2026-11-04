# Verification

## Extraction gates

Run `pnpm install --frozen-lockfile`, `pnpm surveyjs:check`, `pnpm test`,
`pnpm desktop:build` and `pnpm build:pages`. Browser output must contain the
selected Planner and companion views, no Runner app, and a closed module graph.
Compare all shared authoring/recipe modules with the sibling's source: UI
differences must not change normalized settings, schema dispatch or recipe bytes.

Run `powershell -NoProfile -ExecutionPolicy Bypass -File for-ai/scripts/check-context.ps1 -ProjectRoot . -RequireRemote`
after publication. Confirm private visibility, main default, clean Git status
and local HEAD equal to the GitHub main ref. Local generated evidence belongs
in ignored `.for-ai-local/`, not in research data or durable policy.

## Native and release gates

```powershell
pnpm planner:cli:build
cargo fmt --manifest-path native/Cargo.toml --all -- --check
cargo check --locked --manifest-path native/Cargo.toml --all-features
cargo check --locked --manifest-path native/Cargo.toml --no-default-features
```

Run Cargo serially. Native executable, hidden CLI, installed media save/reopen,
visual geometry, accessibility, error recovery and installer checks require
their own evidence. Do not operate the user's live desktop without opt-in.
Headless checks may inspect generated UI; they do not qualify an installed app.

The extracted Node suite covers Planner and shared contract modules. Monorepo
Runner execution, suite installer/deployment and bundled-media-corpus tests are
outside this repository. Their exclusion does not establish a pass.

Use VERIFIED, PARTIAL, BLOCKED or NOT RUN for the named scope. Builds and unit
tests never prove participant playback, physical timing, recording or release
readiness. Historical source receipts are not fresh extraction results.

## Current evidence — 2026-11-04

VERIFIED for repository extraction: 1132 Node tests passed, zero failures and
zero skipped. Frozen dependency install, full SurveyJS vendor/fixture checks,
desktop frontend build and static browser build passed. Rust formatting and
`cargo check --locked` with `--all-features` and `--no-default-features` passed
for the Planner library and binary targets. Both source snapshots retain the
same 66 checked shared authoring modules; no schema or setting default was changed.

Headless Chrome loaded the built browser artifact at 1280x860: selected
`ledger` interface, seven planning sections, zero bootstrap/errors and no
participant execution panel. The initial screenshot was inspected. This is a
startup/entrypoint check, not the full responsive/accessibility matrix or a native
WebView check. Local logs, screenshot and receipt stay under `.for-ai-local/`.

Preserved publisher originals and source snapshots retain their existing
whitespace. The source-preservation attributes keep original questionnaire TSV
columns and OpenLAV source bytes intact. Modified control-plane/build files pass
the whitespace check; scientific source material is not reformatted for a lint.

PARTIAL overall product readiness: native executable/CLI runtime, real-media
save/reopen, installers and full accessibility/geometry qualification are NOT RUN.
No signing, installer publication, website deployment or participant run occurred.
For-AI structure/safety check passed locally; remote synchronization and CI are
the remaining extraction publication gates recorded in PROJECT.md.
