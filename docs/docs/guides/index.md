# Integration guides

Guides document how to inspect an existing model, map its semantics, and test a conversion path. They are written for people working with real assets, including contributors who are not yet familiar with every 2D authoring ecosystem.

The recommended workflow is deliberately evidence-first. Begin with a small asset that demonstrates one capability. Record the source tool and version, export settings, resources involved, and the target runtime. Then compare the result in a way another contributor can repeat.

## Planned guides

- Export a minimal model package.
- Map skeleton and animation data.
- Declare unsupported capabilities.
- Validate a runtime conversion.

## A useful guide report

A practical report should include the original asset or a minimal reproducible substitute, the relevant package files, the source and target versions, and a feature matrix. For each feature, mark whether it was preserved, transformed, sampled, omitted, or blocked. Include screenshots or a short capture only when they clarify a visible difference; the machine-readable result and explanation remain primary.

## Keep experiments small

Large character projects make it difficult to tell which relationship caused a mismatch. Prefer one parameter, one constraint, one mask, or one event per experiment. Once the behavior is understood, combine cases into a larger fixture and add it to a reference implementation's validation set.

## Reporting uncertainty

If a format's behavior is undocumented, say so. An observation from one export is evidence, not a universal rule. Mark assumptions and ask for a second implementation or a maintainer confirmation before encoding the assumption into a normative module.
