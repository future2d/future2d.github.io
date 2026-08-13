# open-vt

## Repository record

| Field | Value |
| --- | --- |
| Future2D fork | [future2d/open-vt](https://github.com/future2d/open-vt) |
| Upstream | [erodozer/open-vt](https://github.com/erodozer/open-vt) |
| Upstream organization | erodozer |
| Article basis | Future2D fork `6e2ffa6` (2026-08-10) |
| Ecosystem role | Research |

## Origin and ownership

open-vt is a fork of the open-source 2D VTubing application maintained upstream by erodozer. Future2D keeps the copy as a research reference; upstream remains responsible for the application, integrations, branding, and support.

## Compatibility scope

The upstream README identifies open-vt as software for **2D VTubing**. Its documented tracker inputs include **OpenSeeFace** and **VTube Studio over TCP on Wi-Fi**. It also documents native Linux support, transparent-window support for alpha-based OBS capture, and an application-oriented workflow rather than a model-authoring format.

For ecosystem mapping, tracking input, model evaluation, desktop compositing, and OBS capture are separate interfaces. A tracker integration and transparent capture output describe application connections; they do not specify a 2D model package.

## Why Future2D catalogs it

open-vt gives Future2D a concrete application pipeline to study: tracking data enters an application, controls a 2D avatar, and leaves through a capture-friendly surface. It helps identify which inputs and outputs should be represented as integration contracts outside a portable model package.

## Role of the Future2D fork

The fork is retained as application-pipeline evidence. Its documented integrations should be checked against the selected upstream revision when used in a compatibility test.

## License and use boundary

Refer to the upstream repository for license terms, dependencies, tracker requirements, and release information. Third-party tools such as OpenSeeFace, VTube Studio, and OBS have their own licenses and policies.
