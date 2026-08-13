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

PurismCore is a fork of SakuraMotion's Sakura2D Purism Core. The upstream project describes itself as a free, open reimplementation of the central Live2D Cubism Core component and states that Live2D Inc. does not develop it. Future2D keeps a fork copy; the upstream project, authors, and license remain separate.

## Compatibility scope

PurismCore targets **Live2D Cubism Core-compatible MOC3 loading and evaluation**. Its upstream README identifies a plain C99 implementation with only the C standard library as a dependency and documents platform support separately. The scope is runtime behavior for loading and computing model data. Authoring and general-purpose rendering are outside the documented scope.

A MOC3 loading result covers the model-loading boundary. Other Cubism SDK components, authoring workflows, asset licenses, and application integrations require separate tests.

## Why Future2D catalogs it

The project is useful for studying the separation between a portable model package and the runtime contract that evaluates it. It makes questions about parsing, parameter evaluation, deformation, platform targets, and error behavior concrete. It also provides evidence for discussing how an open specification should report partial support rather than silently change a model.

## Role of the Future2D fork

Future2D keeps the fork as a compatibility research reference. Inspect the repository history for patches and synchronization state before relying on a behavior.

## License and use boundary

Use the upstream repository's current license and notices when copying, modifying, or distributing code. Live2D, Cubism, MOC3, and related names remain subject to their respective owners' terms. This catalogue records technical scope only and does not provide legal conclusions about format compatibility or redistribution.
