# EasyVtuber

## Repository record

| Field | Value |
| --- | --- |
| Future2D fork | [future2d/EasyVtuber](https://github.com/future2d/EasyVtuber) |
| GitHub fork parent | [yuyuyzl/EasyVtuber](https://github.com/yuyuyzl/EasyVtuber) |
| Earlier source noted upstream | [GunwooHan/EasyVtuber](https://github.com/GunwooHan/EasyVtuber) |
| Article basis | Future2D fork `f7dd2de` (2026-02-12) |
| Ecosystem role | Research |

## Origin and ownership

The Future2D repository is a GitHub fork of yuyuyzl/EasyVtuber. That upstream README separately states that its project was forked from GunwooHan/EasyVtuber and incorporates or ports selected work related to the Talking Head Anime demo. These are distinct relationships: the direct GitHub fork parent is yuyuyzl/EasyVtuber, while the upstream README records earlier lineage and additional dependencies. Future2D does not own any of those upstream projects.

## Compatibility scope

EasyVtuber is an image-driven virtual-avatar application rather than a traditional skeletal or Live2D model runtime. The upstream README documents support or integrations for **Talking Head Anime models**, iFacialMocap iOS facial tracking through UDP, OpenSeeFace camera tracking, OpenCV camera input, mouse and audio input, **OBS virtual camera**, and **Spout2** output. It also documents optional acceleration or image-processing components such as TensorRT, DirectML, RIFE interpolation, and super-resolution models.

These capabilities should be read as application pipeline support. They do not mean the project loads Spine data, implements the Live2D Cubism SDK, or defines a general portable 2D model format.

## Why Future2D catalogs it

EasyVtuber provides a contrasting pipeline in which a source image and tracking signal drive synthesized output. This is useful when deciding what Future2D should classify as model semantics, renderer behavior, input processing, post-processing, or presentation output. It demonstrates that not every 2D avatar workflow is a rigged mesh or skeletal animation workflow.

## Role of the Future2D fork

The fork is cataloged for application-pipeline research. It is not a promise of a maintained Future2D build, support for particular GPUs or trackers, or a recommendation to redistribute its models and dependencies. Upstream system requirements and third-party model licenses must be checked separately.

## License and use boundary

The direct GitHub fork parent declares an MIT license in repository metadata, but EasyVtuber also references multiple external models, demos, trackers, OBS plugins, and acceleration libraries. Each may impose separate conditions. Verify the direct upstream repository and each referenced dependency before use or redistribution.
