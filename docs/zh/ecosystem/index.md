# 生态地图

Future2D 整理相关技术，但不会把它们直接视为已经完成的标准组成部分。状态标签用于区分参考项目、研究、兼容性工作与原型。

## 模型与骨骼动画

| 项目 | 状态 | 收录原因 |
| --- | --- | --- |
| [Spine Runtimes](https://github.com/future2d/spine-runtimes) | 参考 | 用于研究格式和运行时设计的 2D 骨骼动画运行时。[上游项目](https://github.com/EsotericSoftware/spine-runtimes) |
| [DragonBones C# Runtime](https://github.com/future2d/DragonBonesCSharp) | 参考 | 保留为骨骼动画交换参考的 DragonBones 运行时。[上游项目](https://github.com/DragonBones/DragonBonesCSharp) |

## 运行时与兼容性研究

| 项目 | 状态 | 收录原因 |
| --- | --- | --- |
| [PurismCore](https://github.com/future2d/PurismCore) | 兼容性 | 用于加载 MOC3 文件的开源 Live2D 兼容运行时。[上游项目](https://github.com/SakuraMotion/PurismCore) |
| [Ayagami](https://github.com/future2d/ayagami) | 兼容性 | 兼容 Live2D 的 2D 木偶渲染器，用于运行时互操作研究。[上游项目](https://github.com/AyagamiDev/ayagami) |
| [Mocari](https://github.com/future2d/Mocari) | 原型 | 纯 Rust 的 Live2D/Cubism 运行时实验，用于理解实现边界。[上游项目](https://github.com/Eatgrapes/Mocari) |

## 创作与应用管线

| 项目 | 状态 | 收录原因 |
| --- | --- | --- |
| [Umamo](https://github.com/future2d/umamo) | 参考 | 跨平台 2D 木偶动画绑定编辑器，是创作工作流的重要参考。[上游项目](https://github.com/umamoorg/umamo) |
| [Open VT](https://github.com/future2d/open-vt) | 研究 | 开源 2D 虚拟主播软件，提供真实应用管线的证据。[上游项目](https://github.com/erodozer/open-vt) |

## 状态标签说明

- **参考**：项目被收录以理解其设计与数据选择。
- **兼容性**：项目行为有助于测试交换边界。
- **原型**：项目启发可能的实现方式，但不定义标准。
- **研究**：项目为完整应用管线提供证据。
