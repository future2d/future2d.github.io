# Ecosystem

Future2D catalogues relevant technologies without treating them as parts of a finalized standard. Every entry below is a repository fork in the Future2D GitHub organization. A fork preserves a link to an upstream project; it does not transfer ownership, imply endorsement, or mean that the upstream project implements Future2D.

The detail pages record the upstream source, the actual format or workflow each project supports, and the narrow reason it is useful to this research. “Compatibility scope” describes the upstream project's documented capabilities, not a claim of Future2D conformance.

## Models and skeletal animation

| Project | Compatibility scope | Status | Why it is here |
| --- | --- | --- |
| [spine-runtimes](/ecosystem/spine-runtimes/) | Spine skeletal-animation data and official runtimes | Reference | A format and runtime reference for 2D skeletal animation. [Fork](https://github.com/future2d/spine-runtimes) |
| [DragonBonesCSharp](/ecosystem/DragonBonesCSharp/) | DragonBones data; C# and Unity runtime integration | Reference | A reference for skeletal-animation interchange and managed runtime integration. [Fork](https://github.com/future2d/DragonBonesCSharp) |

## Runtime and compatibility research

| Project | Compatibility scope | Status | Why it is here |
| --- | --- | --- |
| [PurismCore](/ecosystem/PurismCore/) | Live2D Cubism Core-compatible MOC3 loading | Compatibility | An open C99 runtime reference for model-loading boundaries. [Fork](https://github.com/future2d/PurismCore) |
| [ayagami](/ecosystem/ayagami/) | Live2D-format 2D puppet loading and rendering | Compatibility | A Rust SDK reference for extensible puppet rendering. [Fork](https://github.com/future2d/ayagami) |
| [Mocari](/ecosystem/Mocari/) | Live2D/Cubism runtime experiment in Rust | Prototype | A prototype for implementation and portability research. [Fork](https://github.com/future2d/Mocari) |

## Authoring and application pipelines

| Project | Compatibility scope | Status | Why it is here |
| --- | --- | --- |
| [umamo](/ecosystem/umamo/) | CMO3 and MOC3 import/export; 2D puppet authoring | Reference | An editor workflow reference for source and runtime model data. [Fork](https://github.com/future2d/umamo) |
| [pencil2d](/ecosystem/pencil2d/) | Bitmap and vector, hand-drawn 2D animation | Research | A reference for non-rigged 2D authoring workflows. [Fork](https://github.com/future2d/pencil2d) |
| [synfig](/ecosystem/synfig/) | Vector and bitmap 2D animation with animation tooling | Research | A reference for vector-animation authoring and rendering concepts. [Fork](https://github.com/future2d/synfig) |

## Virtual-avatar applications and input pipelines

| Project | Compatibility scope | Status | Why it is here |
| --- | --- | --- |
| [open-vt](/ecosystem/open-vt/) | 2D VTubing; OpenSeeFace and VTube Studio tracking inputs | Research | A real application pipeline from tracking to transparent capture output. [Fork](https://github.com/future2d/open-vt) |
| [Motara](/ecosystem/Motara/) | Planned facial-tracking processing and virtual-avatar control | Prototype | An early-stage application boundary reference; no public application source is currently published upstream. [Fork](https://github.com/future2d/Motara) |
| [EasyVtuber](/ecosystem/EasyVtuber/) | Talking-head anime, facial tracking, OBS and Spout2 output | Research | A practical image-driven avatar pipeline distinct from skeletal or Live2D models. [Fork](https://github.com/future2d/EasyVtuber) |

## Reading the status labels

- **Reference** means a project is being catalogued to understand design and data choices.
- **Compatibility** means its behavior is useful for testing interchange boundaries.
- **Prototype** means it informs possible implementation approaches but does not define the standard.
- **Research** means the project provides evidence from an authoring or application pipeline.

## Attribution and scope

Use the detail page and upstream repository before relying on a capability or redistributing code. The Future2D organization owns only its fork copies and any changes made within those copies. Names, code, assets, licenses, trademarks, support obligations, and compatibility claims remain governed by their respective upstream projects. This catalogue does not provide legal advice or a blanket license for any listed repository.
