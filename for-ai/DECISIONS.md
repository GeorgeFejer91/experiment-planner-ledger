# Decisions

## 2026-11-04: Separate interface repositories — accepted

The user requested two focused GitHub repositories with matching authoring goals
and capabilities, one Ledger and one Classic. This repository defaults to
**ledger**; [experiment-planner-classic](https://github.com/GeorgeFejer91/experiment-planner-classic) is its counterpart.
Both retain the established versioned recipe and owner contracts. Neither is
the other's runtime dependency. Shared fixes require an explicit sibling check;
do not imply ongoing automatic synchronization.

## 2026-11-04: Extraction and publication defaults — implementation choice

Use private repositories under GeorgeFejer91, the existing JavaScript/Tauri/Rust stack,
new clean Git histories and exact source provenance. Keep source dependency
versions unchanged. Preserve coupled native library modules while removing the
Runner executable/frontend. Exclude bundled video bytes, local installs/results
and historical suite packaging. Installer identities are separate by interface;
packaging stays inactive until qualified. Original monorepo remains unchanged.
