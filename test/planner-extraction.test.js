import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
const root = new URL("../", import.meta.url);
test("selected Planner interface is the default at both delivery entrypoints", async () => {
  for (const path of ["experiment-planner/web/index.html", "experiment-planner/web/planner/index.html", "experiment-planner/desktop/index.html"]) {
    const source = await readFile(new URL(path, root), "utf8");
    assert.match(source, /data-research-program="planner"/);
    assert.match(source, /data-planner-interface="ledger"/);
  }
});
test("native manifest delivers Planner GUI and CLI, without a Runner binary", async () => {
  const source = await readFile(new URL("native/Cargo.toml", root), "utf8");
  assert.match(source, /name = "affect-planner-cli"/);
  assert.match(source, /name = "affect-research"/);
  assert.doesNotMatch(source, /name = "affect-runner"/);
});
