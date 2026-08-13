# EasyVtuber

## 仓库信息

| 字段 | 内容 |
| --- | --- |
| Future2D fork | [future2d/EasyVtuber](https://github.com/future2d/EasyVtuber) |
| GitHub fork 父仓库 | [yuyuyzl/EasyVtuber](https://github.com/yuyuyzl/EasyVtuber) |
| 上游 README 记录的更早来源 | [GunwooHan/EasyVtuber](https://github.com/GunwooHan/EasyVtuber) |
| 本文依据 | Future2D fork `f7dd2de`（2026-02-12） |
| 生态角色 | 研究 |

## 来源与归属

Future2D 仓库是 yuyuyzl/EasyVtuber 的 GitHub fork。该仓库 README 还记录了它与 GunwooHan/EasyVtuber 的更早 fork 关系，以及 Talking Head Anime demo 的部分移植工作。直接 fork parent 与更早项目 lineage 分别记录。

## 适配范围

EasyVtuber 是 image-driven virtual-avatar application。它的管线使用 **Talking Head Anime models**、通过 UDP 的 iFacialMocap iOS facial tracking、OpenSeeFace camera tracking、OpenCV camera input、mouse/audio input、**OBS virtual camera** 与 **Spout2** output。README 还记录了 TensorRT、DirectML、RIFE interpolation 和 super-resolution 等可选 acceleration/image-processing 组件。

这些能力属于应用管线。README 未列出 Spine 加载、Live2D Cubism SDK 实现或通用可移植 2D model format。

## Future2D 收录原因

EasyVtuber 展示了由 source image 和 tracking signal 驱动 synthesized output 的管线，可用于区分 model semantics、renderer behavior、input processing、post-processing 和 presentation output。

## Future2D fork 的角色

该 fork 用于应用管线研究。上游 system requirements 与 third-party model license 必须单独确认。

## 许可证与使用边界

直接 GitHub fork parent 的仓库 metadata 声明 MIT License，但 EasyVtuber 同时引用多个外部 models、demos、trackers、OBS plugins 与 acceleration libraries，各自可能有独立条件。使用或分发前，应检查直接上游仓库及每一项引用依赖。
