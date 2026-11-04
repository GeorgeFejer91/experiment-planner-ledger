# Experiment Planner Ledger

A local-first experiment authoring application for researchers studying continuous
affect during video presentation. This repository uses the **Ledger interface**.

The sibling [experiment-planner-classic](https://github.com/GeorgeFejer91/experiment-planner-classic) has the same authoring goals and recipe
contracts with a different interface. This is a source split from
[Affect Research](https://github.com/GeorgeFejer91/affect-tracker-research), not a new
experiment format. See [extraction provenance](docs/extraction.json).

## What it does

- Select a workspace and catalogue researcher-supplied videos.
- Author languages, questionnaires, demographics and questionnaire assets.
- Define variants, video order and named interstimulus intervals.
- Configure screen geometry, feedback placement, Flubber appearance and input.
- Validate, save and reopen the experiment recipe for a separate Runner.
- Use the same authoring owners through the [Planner CLI](docs/planner-cli.md).

Ledger uses ordered planning sheets and separate Flubber preview/settings windows.
The UI is a design tool; previews do not record research measurements.

## Develop

Node >=22.12, pnpm and Git are required. Native builds additionally require the
pinned Rust toolchain, Windows C++ build tools and WebView2.

```powershell
pnpm install --frozen-lockfile
pnpm serve
# Open http://127.0.0.1:8000/ in desktop Chrome or Edge.
pnpm test
pnpm surveyjs:check
pnpm desktop:build
pnpm build:pages
pnpm planner:cli:build
```

`desktop:build` builds the WebView frontend; it does not create an installer.
`build:pages` creates an offline-capable static artifact in `dist-pages/`; this
repository does not automatically deploy a website. Native installer release
configuration is deliberately inactive pending separate identity/packaging checks.

## Boundaries and compatibility

The separate Runner owns participant execution, assignment, timestamps,
acquisition, LSL/XDF and recording. No Runner application is included here.
Some coupled native library modules remain to preserve the existing Planner
build; their presence does not expand this project's scope.

Historical recipes retain their versioned semantics. Desktop and browser are
delivery surfaces with different native capabilities. Neither interface is
independently qualified as a research release by this repository split.

Bundled video bytes are intentionally omitted. Supply your own media through
the workspace workflow; preserved catalogue entries are metadata, not proof that
their media is installed. Researcher-local instruments and participant results
must never be committed. Questionnaire attribution and third-party licences are
preserved under [research provenance](docs/research-provenance.md) and `docs/licenses/`.

## Working on this project

Start at [AGENTS.md](AGENTS.md) and [for-ai/README.md](for-ai/README.md).
The [project contract](for-ai/PROJECT.md) owns scope and current task state;
[verification](for-ai/VERIFICATION.md) records evidence and remaining gates.
Changes to shared authoring or recipe semantics must be assessed against the
[sibling repository](https://github.com/GeorgeFejer91/experiment-planner-classic) and independently tested there.
