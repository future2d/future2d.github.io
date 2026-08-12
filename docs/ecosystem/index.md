# Ecosystem

Future2D catalogues relevant technologies without treating them as parts of a finalized standard. Status labels distinguish reference projects, research, compatibility work, and prototypes.

## Models and skeletal animation

| Project | Status | Why it is here |
| --- | --- | --- |
| [Spine Runtimes](https://github.com/future2d/spine-runtimes) | Reference | A 2D skeletal animation runtime used as a format and runtime reference. [Upstream](https://github.com/EsotericSoftware/spine-runtimes) |
| [DragonBones C# Runtime](https://github.com/future2d/DragonBonesCSharp) | Reference | A DragonBones runtime retained as a reference for skeletal animation interchange. [Upstream](https://github.com/DragonBones/DragonBonesCSharp) |

## Runtime and compatibility research

| Project | Status | Why it is here |
| --- | --- | --- |
| [PurismCore](https://github.com/future2d/PurismCore) | Compatibility | An open Live2D-compatible runtime for loading MOC3 files. [Upstream](https://github.com/avahci/PurismCore) |
| [Ayagami](https://github.com/future2d/ayagami) | Compatibility | A 2D puppet renderer compatible with Live2D, used for runtime interoperability research. [Upstream](https://github.com/OpalAyagami/ayagami) |
| [Mocari](https://github.com/future2d/Mocari) | Prototype | A pure Rust Live2D/Cubism runtime experiment that informs implementation boundaries. [Upstream](https://github.com/Ohmwada/mocari) |

## Authoring and application pipelines

| Project | Status | Why it is here |
| --- | --- | --- |
| [Umamo](https://github.com/future2d/umamo) | Reference | A cross-platform rigging editor for 2D puppet animation and a useful authoring workflow reference. [Upstream](https://github.com/Yukariin/Umamo) |
| [Open VT](https://github.com/future2d/open-vt) | Research | Open-source 2D VTuber software included as a real application pipeline reference. [Upstream](https://github.com/ArpaAP/open-vt) |

## Reading the status labels

- **Reference** means a project is being catalogued to understand design and data choices.
- **Compatibility** means its behavior is useful for testing interchange boundaries.
- **Prototype** means it informs possible implementation approaches but does not define the standard.
- **Research** means the project provides evidence from a complete application pipeline.
