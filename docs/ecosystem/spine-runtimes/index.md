# spine-runtimes

## Repository record

| Field | Value |
| --- | --- |
| Future2D fork | [future2d/spine-runtimes](https://github.com/future2d/spine-runtimes) |
| Upstream | [EsotericSoftware/spine-runtimes](https://github.com/EsotericSoftware/spine-runtimes) |
| Upstream organization | Esoteric Software |
| Article basis | Future2D fork `51d8d78` (2026-08-04) |
| Ecosystem role | Reference |

## Origin and ownership

This repository is a GitHub fork of Esoteric Software's Spine Runtimes. The upstream project provides runtime libraries for loading and evaluating data authored with Spine, a 2D skeletal-animation tool. Future2D keeps the copy as a research reference; Spine, its formats, runtime behavior, trademarks, and licenses remain with Esoteric Software.

## Compatibility scope

The upstream runtimes use **Spine skeletal-animation data** with multiple game and application toolkits. Spine data carries skeleton structure, attachments, skins, timelines, draw order, constraints, and other runtime semantics in addition to textures. A compatibility test needs to check those relationships and their evaluation.

The exact supported features and runtime targets depend on the upstream runtime and Spine version. Consult the upstream runtime guide and the selected branch before treating a feature as available.

## Why Future2D catalogs it

Spine is a useful reference for a mature 2D skeletal-animation pipeline. It helps identify which concepts belong in portable model data, which depend on runtime evaluation rules, and where a conversion needs an explicit loss or capability report. It is especially relevant to model graphs, attachments, animation timelines, constraints, and versioned asset packages.

## Role of the Future2D fork

The fork is cataloged for format and runtime study. Check the GitHub compare view for the specific fork and upstream branch when assessing patches, synchronization, or runtime coverage.

## License and use boundary

Spine Runtimes are governed by Esoteric Software's runtime and editor license terms, not by Future2D. The upstream README states that integration and redistribution conditions depend on Spine licensing. Read the current [Spine Runtimes License Agreement](http://esotericsoftware.com/spine-runtimes-license) and upstream documentation before using or redistributing code or assets.
