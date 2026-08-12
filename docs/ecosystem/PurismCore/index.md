# PurismCore

## Repository record

| Field | Value |
| --- | --- |
| Future2D fork | [future2d/PurismCore](https://github.com/future2d/PurismCore) |
| Upstream | [SakuraMotion/PurismCore](https://github.com/SakuraMotion/PurismCore) |
| Upstream organization | SakuraMotion |
| Article basis | Future2D fork `97dd2a5` (2026-06-08) |
| Ecosystem role | Compatibility |

## Origin and ownership

PurismCore is a fork of SakuraMotion's Sakura2D Purism Core. The upstream project describes itself as a free, open reimplementation of the central Live2D Cubism Core component and explicitly states that it is not developed by Live2D Inc. Future2D owns only its fork copy and any changes made in that fork; the upstream project, its authors, and its licensing remain separate.

## Compatibility scope

PurismCore targets **Live2D Cubism Core-compatible MOC3 loading and evaluation**. Its upstream README identifies a plain C99 implementation with only the C standard library as a dependency and documents platform support separately. This is a runtime-level compatibility scope: it concerns the behavior necessary to load and compute model data, rather than an authoring editor or a general-purpose 2D renderer.

Compatibility with a MOC3 file does not establish compatibility with every Cubism SDK component, authoring workflow, asset license, or application integration. Those boundaries must be tested independently.

## Why Future2D catalogs it

The project is useful for studying the separation between a portable model package and the runtime contract that evaluates it. It makes questions about parsing, parameter evaluation, deformation, platform targets, and error behavior concrete. It also provides evidence for discussing how an open specification should report partial support rather than silently change a model.

## Role of the Future2D fork

Future2D keeps the fork as a compatibility research reference. It is not a declaration that PurismCore is an official Future2D runtime, that Future2D provides MOC3 compatibility, or that the fork is current with upstream. Inspect the repository history for actual patches and synchronization state.

## License and use boundary

Use the upstream repository's current license and notices when copying, modifying, or distributing code. Live2D, Cubism, MOC3, and related names remain subject to their respective owners' terms. This catalogue records technical scope only and does not provide legal conclusions about format compatibility or redistribution.
