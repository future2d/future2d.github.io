# Ecosystem

Future2D catalogs related technologies for comparison. Every entry below is a fork in the Future2D GitHub organization. The fork link identifies the copy held by Future2D; ownership, releases, licenses, and support remain with the respective upstream project.

Each detail page records the upstream source, the documented format or workflow, the reviewed fork revision, and the reason the project is useful to this research. “Compatibility scope” quotes the project's current documented capability, not a Future2D conformance result.

## Models and skeletal animation

| Project | Compatibility scope | Status | Why it is here |
| --- | --- | --- | --- |
| [spine-runtimes](/ecosystem/spine-runtimes/) | Spine skeletal-animation data and official runtimes | Reference | A format and runtime reference for 2D skeletal animation. [Fork](https://github.com/future2d/spine-runtimes) |
| [DragonBonesCSharp](/ecosystem/DragonBonesCSharp/) | DragonBones data; C# and Unity runtime integration | Reference | A reference for skeletal-animation interchange and managed runtime integration. [Fork](https://github.com/future2d/DragonBonesCSharp) |

## Runtime and compatibility research

| Project | Compatibility scope | Status | Why it is here |
| --- | --- | --- | --- |
| [PurismCore](/ecosystem/PurismCore/) | Live2D Cubism Core-compatible MOC3 loading | Compatibility | An open C99 runtime reference for model-loading boundaries. [Fork](https://github.com/future2d/PurismCore) |
| [ayagami](/ecosystem/ayagami/) | Live2D-format 2D puppet loading and rendering | Compatibility | A Rust SDK reference for extensible puppet rendering. [Fork](https://github.com/future2d/ayagami) |
| [Mocari](/ecosystem/Mocari/) | Live2D/Cubism runtime experiment in Rust | Prototype | A prototype for implementation and portability research. [Fork](https://github.com/future2d/Mocari) |

## Authoring and application pipelines

| Project | Compatibility scope | Status | Why it is here |
| --- | --- | --- | --- |
| [umamo](/ecosystem/umamo/) | CMO3 and MOC3 import/export; 2D puppet authoring | Reference | An editor workflow reference for source and runtime model data. [Fork](https://github.com/future2d/umamo) |
| [pencil2d](/ecosystem/pencil2d/) | Bitmap and vector, hand-drawn 2D animation | Research | A reference for non-rigged 2D authoring workflows. [Fork](https://github.com/future2d/pencil2d) |
| [synfig](/ecosystem/synfig/) | Vector and bitmap 2D animation with animation tooling | Research | A reference for vector-animation authoring and rendering concepts. [Fork](https://github.com/future2d/synfig) |

## Virtual-avatar applications and input pipelines

| Project | Compatibility scope | Status | Why it is here |
| --- | --- | --- | --- |
| [open-vt](/ecosystem/open-vt/) | 2D VTubing; OpenSeeFace and VTube Studio tracking inputs | Research | A real application pipeline from tracking to transparent capture output. [Fork](https://github.com/future2d/open-vt) |
| [Motara](/ecosystem/Motara/) | Facial-tracking processing, virtual-avatar control, scene composition, and application outputs | Research | An active open-source desktop application that exposes practical tracking, model-runtime, scene, collaboration, and output boundaries. [Fork](https://github.com/future2d/Motara) |
| [EasyVtuber](/ecosystem/EasyVtuber/) | Talking-head anime, facial tracking, OBS and Spout2 output | Research | A practical image-driven avatar pipeline distinct from skeletal or Live2D models. [Fork](https://github.com/future2d/EasyVtuber) |

## Reading the status labels

- **Reference** means a project is being catalogued to understand design and data choices.
- **Compatibility** means its behavior is useful for testing interchange boundaries.
- **Prototype** means it informs possible implementation approaches but does not define the standard.
- **Research** means the project provides evidence from an authoring or application pipeline.

## Attribution and scope

Read the detail page and upstream repository before relying on a capability or redistributing code. Future2D owns its fork copies and changes made in those copies. Code, assets, names, trademarks, support obligations, and license terms remain specific to each project.
