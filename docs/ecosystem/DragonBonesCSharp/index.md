# DragonBonesCSharp

## Repository record

| Field | Value |
| --- | --- |
| Future2D fork | [future2d/DragonBonesCSharp](https://github.com/future2d/DragonBonesCSharp) |
| Upstream | [DragonBones/DragonBonesCSharp](https://github.com/DragonBones/DragonBonesCSharp) |
| Upstream organization | DragonBones |
| Article basis | Future2D fork `29a3613` (2026-05-08) |
| Ecosystem role | Reference |

## Origin and ownership

DragonBonesCSharp is a fork of the C# runtime maintained in the DragonBones upstream organization. The upstream README identifies it as a DragonBones C# Runtime, with a common library and Unity integration. Future2D's fork preserves this project as a reference; it does not make the DragonBones data format or the original implementation Future2D property.

## Compatibility scope

The repository is relevant to **DragonBones skeletal-animation data** and its C# runtime use, including the documented Unity integration. It represents a managed-runtime view of 2D skeletal animation: an application must load model and animation data, evaluate the animation state, and pass the resulting pose to the engine integration. That makes it useful beside native and Rust-oriented runtimes in the ecosystem.

The fork should not be read as a claim that it supports Spine, Live2D, or a Future2D package. DragonBones compatibility is specific to the upstream project's data and runtime contract.

## Why Future2D catalogs it

DragonBones provides a second established skeletal-animation vocabulary with which to compare model hierarchy, slot or display selection, animation playback, and engine bindings. It helps distinguish concepts that may be portable across skeletal systems from concepts whose representation or evaluation order is specific to a particular runtime.

## Role of the Future2D fork

Future2D catalogs this fork for managed-runtime and engine-integration research. No Future2D conformance, conversion path, synchronized branch, or support guarantee is implied. Review the exact upstream branch and repository history when assessing code behavior.

## License and use boundary

The upstream DragonBones project and its contributors retain ownership of their code and marks. License obligations and engine-specific dependencies must be determined from the upstream repository and the version being used. A Future2D fork does not substitute for upstream support or licensing review.
