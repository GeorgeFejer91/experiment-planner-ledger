# Independent compatibility readers

These pure modules were extracted from the original Runner solely to retain
Planner-to-consumer contract regression tests. They are not application entrypoints,
are never bundled into Planner, and must not become a second Runner implementation.
Source revision is recorded in docs/extraction.json. Changes require correspondence
with the actual Runner project, rather than adjusting a reader to accept a bug.
