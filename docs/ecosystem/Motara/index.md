# Motara

## Repository record

| Field | Value |
| --- | --- |
| Future2D fork | [future2d/Motara](https://github.com/future2d/Motara) |
| Upstream | [MotaraSoft/Motara](https://github.com/MotaraSoft/Motara) |
| Upstream organization | MotaraSoft |
| Article basis | Future2D fork `16d9e4f` (2026-08-13) |
| Ecosystem role | Research |

## Origin and ownership

Motara is a fork of the open-source desktop application published by MotaraSoft. The current Future2D fork contains the application and supporting libraries. This article uses the Future2D fork revision listed above as its version basis; the upstream repository is cited for origin and ownership. Motara remains in active development and has no official binary release. Its APIs, file formats, network behavior, and supported platforms may change.

## Compatibility scope

The current source implements a cross-platform desktop application for **facial-tracking data processing, virtual-avatar control, and scene composition**. The documented implementation includes:

- an Avalonia desktop shell with English and Simplified Chinese localization;
- local scenes, model assignment, image/video backgrounds, effects, screenshots, and Spout2/NDI signal attachments;
- a model library that imports Cubism model descriptor directories and ZIP, RAR, or 7Z archives;
- MOC3 parsing and Skia rendering through the separately maintained MIT-licensed [PurismCore](https://github.com/MotaraSoft/PurismCore) component;
- iFacialMocap UDP, local-camera MediaPipe, and local OpenSeeFace tracking adapters with mapping, formulas, calibration, filtering, and parameter priorities;
- a configurable Live2D Cubism Editor external-API output adapter; and
- early collaboration primitives for identities, invitations, encrypted peer frames, friends, and model-package transfer.

The current source does not include VTube Studio output, a public plugin SDK, a plugin host, stable extension contracts, or release-ready end-to-end interoperability. MOC3 rendering, video decoding, tracking inputs, and Spout2/NDI output also depend on optional local runtimes or external applications that are absent from a clean checkout.

Motara's repository includes an internal PurismCore compliance record. MotaraSoft describes it as a limited technical observation; this page treats it as project documentation, not a legal conclusion.

## Why Future2D catalogs it

Motara provides a concrete application pipeline for studying tracking signals, parameter processing, model runtime behavior, scene composition, collaboration, and desktop output. Its source also exposes application concerns such as local asset discovery, parameter mapping, renderer fallbacks, capture surfaces, and optional native dependencies. These are useful references for application and integration contracts alongside the model package.

## Role of the Future2D fork

The fork is retained as a research reference for a working application architecture. Capability statements on this page are tied to the reviewed Future2D fork revision and should be checked against newer fork commits before use.

## License and use boundary

The upstream repository licenses Motara-authored source under the Mozilla Public License 2.0 unless a file states otherwise, and its explanatory documentation under CC BY 4.0. PurismCore and other optional components retain their own licenses and distribution conditions; the upstream repository does not include official redistributable bundles for those runtimes and dependencies. Motara's name, logos, and visual identity are governed separately by the upstream trademark policy. Follow the upstream notices for current terms.
