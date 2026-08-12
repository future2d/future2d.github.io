# Mocari

## Repository record

| Field | Value |
| --- | --- |
| Future2D fork | [future2d/Mocari](https://github.com/future2d/Mocari) |
| Upstream | [Eatgrapes/Mocari](https://github.com/Eatgrapes/Mocari) |
| Upstream organization | Eatgrapes |
| Article basis | Future2D fork `13c7ed3` (2026-07-13) |
| Ecosystem role | Prototype |

## Origin and ownership

Mocari is a fork of the upstream Rust project maintained at Eatgrapes/Mocari. The upstream README describes it as a pure Rust Live2D/Cubism runtime experiment intended to reduce reliance on native bindings to a closed-source core. The Future2D repository is a forked research copy, not the upstream project's canonical home.

## Compatibility scope

Mocari explores a **Live2D/Cubism-compatible runtime in Rust**. Its stated goal is a practical Rust library that is straightforward to call and integrate without complicated native runtime setup. It is published on crates.io upstream, but its experimental status matters: an experiment is evidence about a possible implementation boundary, not a promise that every model, SDK behavior, or platform is supported.

The scope is runtime research rather than authoring. It should not be assumed to import Cubism source projects, replace the official editor, or provide a Future2D model format.

## Why Future2D catalogs it

Mocari helps examine what is required to express and evaluate 2D puppet behavior in a memory-safe, cross-platform language. It is relevant to questions around native dependencies, runtime API shape, error reporting, model loading, and the portability costs of a closed-core ecosystem.

## Role of the Future2D fork

Future2D treats Mocari as a prototype reference. No claim is made that Future2D has selected it as a reference implementation, synchronized it with upstream, or validated it against a conformance suite. Any behavioral claim must be tied to a specific upstream revision and model case.

## License and use boundary

Consult the upstream repository for the applicable code license, release status, and dependency notices. Live2D and Cubism format names and any model assets have terms independent of this catalogue or a Rust implementation.
