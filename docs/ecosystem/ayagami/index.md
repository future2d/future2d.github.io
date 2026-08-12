# ayagami

## Repository record

| Field | Value |
| --- | --- |
| Future2D fork | [future2d/ayagami](https://github.com/future2d/ayagami) |
| Upstream | [AyagamiDev/ayagami](https://github.com/AyagamiDev/ayagami) |
| Upstream organization | AyagamiDev |
| Ecosystem role | Compatibility |

## Origin and ownership

This repository is a fork of AyagamiDev's Ayagami project. Upstream describes Ayagami as an open-source 2D puppet loading and rendering SDK written in Rust. It is an independent project, not a component of Future2D. Future2D's fork exists for study and comparison; upstream authors retain ownership and maintain the upstream development direction.

## Compatibility scope

Ayagami is designed to load and render **models in the Live2D model format**, while leaving room for future formats and capabilities. Its documented scope is therefore a 2D puppet runtime and SDK, not a Live2D authoring application. The upstream project also provides a browser demo and model poser, which makes it relevant to web delivery and interactive model inspection.

Upstream states that the implementation is independent and developed through black-box reverse engineering, with a contributor policy intended to protect that boundary. Its code is dual licensed under MIT and Apache-2.0 according to the upstream README.

## Why Future2D catalogs it

Ayagami is a useful example of an extensible renderer architecture: a model-format loader, runtime evaluation, and renderer can be separated without committing the entire application to one proprietary SDK. That boundary is central to Future2D's research on model graphs, capabilities, renderer-specific behavior, and extension mechanisms.

## Role of the Future2D fork

The Future2D fork is a compatibility research reference. It does not certify the project as a Future2D implementation, guarantee support for every Live2D feature, or imply that Future2D has adopted its API or licensing model. Check the upstream repository and the fork comparison before relying on a specific behavior.

## License and use boundary

Follow the upstream MIT or Apache-2.0 terms for the Ayagami code, and preserve applicable notices. Model files, brand names, and third-party format terms are separate from the Ayagami source license.
