# open-vt

## Repository record

| Field | Value |
| --- | --- |
| Future2D fork | [future2d/open-vt](https://github.com/future2d/open-vt) |
| Upstream | [erodozer/open-vt](https://github.com/erodozer/open-vt) |
| Upstream organization | erodozer |
| Ecosystem role | Research |

## Origin and ownership

open-vt is a fork of the open-source 2D VTubing application maintained upstream by erodozer. Future2D's copy is a research reference. It does not transfer application ownership, tracker integrations, branding, or support responsibility from upstream to Future2D.

## Compatibility scope

The upstream README identifies open-vt as software for **2D VTubing**. Its documented tracker inputs include **OpenSeeFace** and **VTube Studio over TCP on Wi-Fi**. It also documents native Linux support, transparent-window support for alpha-based OBS capture, and an application-oriented workflow rather than a model-authoring format.

This is important for ecosystem mapping: tracking input, model evaluation, desktop compositing, and OBS capture are different interfaces. Support for a tracker does not by itself establish compatibility with a particular 2D model format, and transparent capture output does not prescribe an asset package.

## Why Future2D catalogs it

open-vt gives Future2D a concrete application pipeline to study: tracking data enters an application, controls a 2D avatar, and leaves through a capture-friendly surface. It helps identify which inputs and outputs should be represented as integration contracts outside a portable model package.

## Role of the Future2D fork

The fork is retained as application-pipeline evidence. It is not a Future2D runtime or a promise that Future2D will support OpenSeeFace, VTube Studio, OBS, Linux desktops, or every open-vt integration. Those remain separate implementation decisions.

## License and use boundary

Refer to the upstream repository for license terms, dependencies, tracker requirements, and release information. Third-party tools such as OpenSeeFace, VTube Studio, and OBS have their own licenses and policies.
