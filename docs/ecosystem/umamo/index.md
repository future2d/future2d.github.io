# umamo

## Repository record

| Field | Value |
| --- | --- |
| Future2D fork | [future2d/umamo](https://github.com/future2d/umamo) |
| Upstream | [umamoorg/umamo](https://github.com/umamoorg/umamo) |
| Upstream organization | umamoorg |
| Ecosystem role | Reference |

## Origin and ownership

Umamo is a fork of the open-source project maintained by umamoorg. Its upstream README describes a cross-platform modelling editor for 2D puppet animation, with pen and touch support. The project is in early development and says that its APIs, formats, and scope are still changing. Future2D's fork is a reference copy; it does not make Future2D the original author or maintainer.

## Compatibility scope

Umamo documents support for **Live2D Cubism source format `.cmo3`** and for importing and exporting **MOC3** runtime models. It runs on Windows, macOS, Linux, and Android tablets, with emphasis on pen and touch input. This makes it an authoring-side reference that bridges editable source data and runtime data, rather than a renderer-only project.

The stated support does not guarantee round-trip fidelity for every Cubism feature or version. Its early-development notice is important when comparing import/export behavior.

## Why Future2D catalogs it

An editor exposes information that may disappear by runtime export: names, editable relationships, parameters, meshes, artwork references, and authoring intent. Umamo therefore helps Future2D study the boundary between an editable 2D model project and a portable runtime package, including what a conversion must preserve or explicitly report.

## Role of the Future2D fork

The fork is cataloged as an authoring-workflow reference. It is not a Future2D editor, a statement that CMO3 or MOC3 are Future2D formats, or an assurance that the fork is synchronized with upstream. Inspect upstream releases and the fork comparison for a specific capability.

## License and use boundary

Use the upstream repository's license, release notices, and third-party format terms when using code or assets. Cubism, CMO3, and MOC3 remain subject to their respective owners' policies.
