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

Future2D 仓库是 yuyuyzl/EasyVtuber 的 GitHub fork。该上游 README 还说明其项目 fork 自 GunwooHan/EasyVtuber，并整合或移植了 Talking Head Anime demo 中的部分工作。两层关系需要分开理解：直接 GitHub fork parent 是 yuyuyzl/EasyVtuber，README 记录的是更早 lineage 与其他依赖。Future2D 不拥有这些上游项目。

## 适配范围

EasyVtuber 是 image-driven virtual-avatar application，而非传统 skeletal 或 Live2D model runtime。上游 README 记录其支持或集成 **Talking Head Anime models**、通过 UDP 的 iFacialMocap iOS facial tracking、OpenSeeFace camera tracking、OpenCV camera input、mouse/audio input、**OBS virtual camera** 与 **Spout2** output。它还记录了可选的 TensorRT、DirectML、RIFE interpolation 和 super-resolution 等 acceleration/image-processing 组件。

这些能力属于应用管线支持，不代表它加载 Spine data、实现 Live2D Cubism SDK，或定义通用可移植 2D model format。

## Future2D 收录原因

EasyVtuber 展示了由 source image 和 tracking signal 驱动 synthesized output 的另一类管线。它有助于判断哪些内容应归为 model semantics、renderer behavior、input processing、post-processing 或 presentation output，也说明并非每一种 2D avatar workflow 都是 rigged mesh 或 skeletal animation。

## Future2D fork 的角色

该 fork 用于应用管线研究，不承诺提供受维护的 Future2D build，不承诺特定 GPU/tracker 支持，也不建议无条件分发其 models 和 dependencies。上游 system requirements 与 third-party model license 必须单独确认。

## 许可证与使用边界

直接 GitHub fork parent 的仓库 metadata 声明 MIT License，但 EasyVtuber 同时引用多个外部 models、demos、trackers、OBS plugins 与 acceleration libraries，各自可能有独立条件。使用或分发前，应检查直接上游仓库及每一项引用依赖。
