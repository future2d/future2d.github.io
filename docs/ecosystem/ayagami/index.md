# ayagami

## Repository record

| Field | Value |
| --- | --- |
| Future2D fork | [future2d/ayagami](https://github.com/future2d/ayagami) |
| Upstream | [AyagamiDev/ayagami](https://github.com/AyagamiDev/ayagami) |
| Upstream organization | AyagamiDev |
| Article basis | Future2D fork `ffb8d50` (2026-08-11) |
| Ecosystem role | Compatibility |

## Origin and ownership

This repository is a fork of AyagamiDev's Ayagami project. Upstream describes Ayagami as an open-source 2D puppet loading and rendering SDK written in Rust. The Future2D copy is kept for study and comparison; upstream authors retain the project and its development direction.

## Compatibility scope

Ayagami loads and renders **models in the Live2D model format**, with room in its design for additional formats and capabilities. The documented scope is a 2D puppet runtime and SDK. Upstream also provides a browser demo and model poser for web delivery and interactive model inspection.

Upstream states that the implementation is independent and developed through black-box reverse engineering, with a contributor policy intended to protect that boundary. Its code is dual licensed under MIT and Apache-2.0 according to the upstream README.

## Why Future2D catalogs it

Ayagami separates the model-format loader, runtime evaluation, and renderer. This structure is useful when comparing model graphs, capabilities, renderer-specific behavior, and extension mechanisms.

## Role of the Future2D fork

The Future2D fork is a compatibility research reference. Check the upstream repository and fork comparison for a specific behavior or synchronization state.

## License and use boundary

Follow the upstream MIT or Apache-2.0 terms for the Ayagami code, and preserve applicable notices. Model files, brand names, and third-party format terms are separate from the Ayagami source license.
