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

Motara is a fork of the open-source desktop application published by MotaraSoft. The current Future2D fork contains the application and supporting libraries rather than only a project outline. The version basis for this article is the Future2D fork revision listed above; the upstream repository is cited for origin and ownership, not as the version anchor for these descriptions. Motara remains in active development, has no official binary release yet, and does not make stable compatibility commitments for its APIs, file formats, network behavior, or supported platforms. Future2D's fork records the public repository state; it does not provide an official Motara distribution or transfer ownership from MotaraSoft.

## Compatibility scope

The current source implements a cross-platform desktop application for **facial-tracking data processing, virtual-avatar control, and scene composition**. The documented implementation includes:

- an Avalonia desktop shell with English and Simplified Chinese localization;
- local scenes, model assignment, image/video backgrounds, effects, screenshots, and Spout2/NDI signal attachments;
- a model library that imports Cubism model descriptor directories and ZIP, RAR, or 7Z archives;
- MOC3 parsing and Skia rendering through the separately maintained MIT-licensed [PurismCore](https://github.com/MotaraSoft/PurismCore) component;
- iFacialMocap UDP, local-camera MediaPipe, and local OpenSeeFace tracking adapters with mapping, formulas, calibration, filtering, and parameter priorities;
- a configurable Live2D Cubism Editor external-API output adapter; and
- early collaboration primitives for identities, invitations, encrypted peer frames, friends, and model-package transfer.

These capabilities are not equivalent to a released or universally portable runtime. VTube Studio output, a public plugin SDK, a plugin host, stable extension contracts, and release-ready end-to-end interoperability are not implemented. MOC3 rendering, video decoding, tracking inputs, and Spout2/NDI output also depend on optional local runtimes or external applications that are not included in a clean checkout.

Motara's repository includes an internal PurismCore compliance record. That record is a limited technical observation described by MotaraSoft and explicitly not a legal conclusion; it must not be recast here as legal clearance or a statement about any third party.

## Why Future2D catalogs it

Motara now provides a concrete application pipeline for mapping the boundary between tracking signals, parameter processing, model runtime behavior, scene composition, collaboration, and desktop output. Its source also exposes practical concerns that a future standard must describe without conflating them with the model package itself: local asset discovery, parameter mapping, renderer fallbacks, capture surfaces, and optional native dependencies. The project is therefore useful evidence for application and integration contracts, while remaining independent from the Future2D standard.

## Role of the Future2D fork

The fork is retained as a research reference for a working application architecture. Future2D does not claim an implementation relationship with MotaraSoft, endorsement, synchronized releases, or compatibility with every Motara feature. Capability statements on this page are tied to the reviewed Future2D fork revision and should be checked against newer fork commits before use.

## License and use boundary

The upstream repository licenses Motara-authored source under the Mozilla Public License 2.0 unless a file states otherwise, and its explanatory documentation under CC BY 4.0. PurismCore and other optional components retain their own licenses and distribution conditions; the upstream repository does not include official redistributable bundles for those runtimes and dependencies. Motara's name, logos, and visual identity are governed separately by the upstream trademark policy. Follow the upstream notices for current terms. Cataloging a fork does not create affiliation or endorsement between MotaraSoft and Future2D.
