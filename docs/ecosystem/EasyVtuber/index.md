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

The Future2D repository is a GitHub fork of yuyuyzl/EasyVtuber. That repository's README records an earlier fork from GunwooHan/EasyVtuber and selected work related to the Talking Head Anime demo. The direct fork parent and the earlier project lineage are separate records.

## Compatibility scope

EasyVtuber is an image-driven virtual-avatar application. Its pipeline uses **Talking Head Anime models**, iFacialMocap iOS facial tracking through UDP, OpenSeeFace camera tracking, OpenCV camera input, mouse and audio input, **OBS virtual camera**, and **Spout2** output. The README also lists optional acceleration and image-processing components such as TensorRT, DirectML, RIFE interpolation, and super-resolution models.

These capabilities belong to the application pipeline. The README does not list Spine loading, Live2D Cubism SDK implementation, or a general portable 2D model format.

## Why Future2D catalogs it

EasyVtuber provides a pipeline in which a source image and tracking signal drive synthesized output. It is useful for separating model semantics, renderer behavior, input processing, post-processing, and presentation output when describing 2D avatar systems.

## Role of the Future2D fork

The fork is cataloged for application-pipeline research. Upstream system requirements and third-party model licenses must be checked separately.

## License and use boundary

The direct GitHub fork parent declares an MIT license in repository metadata, but EasyVtuber also references multiple external models, demos, trackers, OBS plugins, and acceleration libraries. Each may impose separate conditions. Verify the direct upstream repository and each referenced dependency before use or redistribution.
