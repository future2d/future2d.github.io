# spine-runtimes

## Repository record

| Field | Value |
| --- | --- |
| Future2D fork | [future2d/spine-runtimes](https://github.com/future2d/spine-runtimes) |
| Upstream | [EsotericSoftware/spine-runtimes](https://github.com/EsotericSoftware/spine-runtimes) |
| Upstream organization | Esoteric Software |
| Ecosystem role | Reference |

## Origin and ownership

This repository is a GitHub fork of Esoteric Software's Spine Runtimes. The upstream project provides the runtime libraries used to load and evaluate data authored with Spine, a 2D skeletal-animation tool. Future2D does not own Spine, its file formats, runtime behavior, trademarks, or licensing terms. The Future2D copy is retained as a research reference inside the organization.

## Compatibility scope

The upstream runtimes are intended to use **Spine skeletal-animation data** with multiple game and application toolkits. The important boundary for Future2D research is not merely drawing a character: Spine data also carries skeleton structure, attachments, skins, timelines, draw order, constraints, and other runtime semantics. A consumer that displays textures but changes those relationships is not behaviorally equivalent to a Spine runtime.

The exact supported features and runtime targets depend on the upstream runtime and Spine version. Consult the upstream runtime guide and the selected branch before treating a feature as available.

## Why Future2D catalogs it

Spine is a useful reference for a mature 2D skeletal-animation pipeline. It helps identify which concepts belong in portable model data, which depend on runtime evaluation rules, and where a conversion needs an explicit loss or capability report. It is especially relevant to model graphs, attachments, animation timelines, constraints, and versioned asset packages.

## Role of the Future2D fork

The fork is cataloged for format and runtime study. This page does not assert that Future2D has modified the code, supports every upstream runtime, or provides a Spine-compatible implementation. Any synchronization state, patch, or branch difference must be checked in the GitHub compare view for the specific fork and upstream branch.

## License and use boundary

Spine Runtimes are governed by Esoteric Software's runtime and editor license terms, not by Future2D. The upstream README states that integration and redistribution conditions depend on Spine licensing. Read the current [Spine Runtimes License Agreement](http://esotericsoftware.com/spine-runtimes-license) and upstream documentation before using or redistributing code or assets.
