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

Mocari is a fork of the upstream Rust project maintained at Eatgrapes/Mocari. The upstream README describes it as a pure Rust Live2D/Cubism runtime experiment intended to reduce reliance on native bindings to a closed-source core. Eatgrapes/Mocari is the upstream project; the Future2D repository is a research copy.

## Compatibility scope

Mocari explores a **Live2D/Cubism-compatible runtime in Rust**. Its stated goal is a Rust library that can be called and integrated without a complex native runtime setup. The upstream project is published on crates.io and describes itself as experimental, so model, SDK, and platform coverage must be checked per case.

The documented scope is runtime research. The page does not list Cubism source-project import, an editor replacement, or a Future2D model format.

## Why Future2D catalogs it

Mocari helps examine what is required to express and evaluate 2D puppet behavior in a memory-safe, cross-platform language. It is relevant to questions around native dependencies, runtime API shape, error reporting, model loading, and the portability costs of a closed-core ecosystem.

## Role of the Future2D fork

Future2D treats Mocari as a prototype reference. Any behavioral claim must be tied to a specific upstream revision and model case.

## License and use boundary

Consult the upstream repository for the applicable code license, release status, and dependency notices. Live2D and Cubism format names and any model assets have terms independent of this catalogue or a Rust implementation.
