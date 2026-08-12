# 生态地图

Future2D 整理相关技术，但不会把它们直接视为已经完成的标准组成部分。下列每一项都是 Future2D GitHub 组织中的 fork。Fork 会保留与上游项目的关联，但不转移上游所有权，不表示上游认可 Future2D，也不表示上游已经实现 Future2D。

详情页会记录上游来源、每个项目实际支持的格式或工作流，以及它对本研究有价值的具体原因。“适配范围”仅描述上游项目已经声明的能力，不代表 Future2D 一致性声明。

## 模型与骨骼动画

| 项目 | 适配范围 | 状态 | 收录原因 |
| --- | --- | --- | --- |
| [spine-runtimes](/zh/ecosystem/spine-runtimes/) | Spine 骨骼动画数据及官方运行时 | 参考 | 用于研究 2D 骨骼动画格式和运行时。 [Fork](https://github.com/future2d/spine-runtimes) |
| [DragonBonesCSharp](/zh/ecosystem/DragonBonesCSharp/) | DragonBones 数据、C# 与 Unity 运行时接入 | 参考 | 用于研究骨骼动画交换和托管运行时接入。 [Fork](https://github.com/future2d/DragonBonesCSharp) |

## 运行时与兼容性研究

| 项目 | 适配范围 | 状态 | 收录原因 |
| --- | --- | --- | --- |
| [PurismCore](/zh/ecosystem/PurismCore/) | 兼容 Live2D Cubism Core 的 MOC3 加载 | 兼容性 | 作为开放 C99 运行时研究模型加载边界。 [Fork](https://github.com/future2d/PurismCore) |
| [ayagami](/zh/ecosystem/ayagami/) | Live2D 格式 2D 木偶模型加载与渲染 | 兼容性 | 用于研究可扩展的 Rust 木偶渲染 SDK。 [Fork](https://github.com/future2d/ayagami) |
| [Mocari](/zh/ecosystem/Mocari/) | Rust 中的 Live2D/Cubism 运行时实验 | 原型 | 用于研究实现边界与可移植性。 [Fork](https://github.com/future2d/Mocari) |

## 创作与应用管线

| 项目 | 适配范围 | 状态 | 收录原因 |
| --- | --- | --- | --- |
| [umamo](/zh/ecosystem/umamo/) | CMO3/MOC3 导入导出和 2D 木偶创作 | 参考 | 用于研究源模型与运行时模型的数据流。 [Fork](https://github.com/future2d/umamo) |
| [pencil2d](/zh/ecosystem/pencil2d/) | 位图、矢量与手绘逐帧 2D 动画 | 研究 | 用于研究非绑定型 2D 创作工作流。 [Fork](https://github.com/future2d/pencil2d) |
| [synfig](/zh/ecosystem/synfig/) | 矢量和位图 2D 动画及其创作工具 | 研究 | 用于研究矢量动画创作与渲染概念。 [Fork](https://github.com/future2d/synfig) |

## 虚拟形象应用与输入管线

| 项目 | 适配范围 | 状态 | 收录原因 |
| --- | --- | --- | --- |
| [open-vt](/zh/ecosystem/open-vt/) | 2D 虚拟主播、OpenSeeFace 与 VTube Studio 追踪输入 | 研究 | 提供从追踪到透明捕获输出的完整应用管线。 [Fork](https://github.com/future2d/open-vt) |
| [Motara](/zh/ecosystem/Motara/) | 面部捕捉处理、虚拟形象控制、场景合成与应用输出 | 研究 | 积极开发中的开源桌面应用，用于研究捕捉、模型运行时、场景、协作和输出边界。 [Fork](https://github.com/future2d/Motara) |
| [EasyVtuber](/zh/ecosystem/EasyVtuber/) | Talking-head anime、面捕、OBS 与 Spout2 输出 | 研究 | 研究区别于骨骼或 Live2D 模型的图像驱动虚拟形象管线。 [Fork](https://github.com/future2d/EasyVtuber) |

## 状态标签说明

- **参考**：项目被收录以理解其设计与数据选择。
- **兼容性**：项目行为有助于测试交换边界。
- **原型**：项目启发可能的实现方式，但不定义标准。
- **研究**：项目为创作或应用管线提供证据。

## 归属与范围

在依赖某项能力或分发代码前，请阅读详情页和上游仓库。Future2D 仅拥有其 fork 副本及在这些副本中作出的修改；名称、代码、资源、许可证、商标、支持义务和兼容性声明仍由各上游项目分别管理。本目录不构成法律意见，也不为任何列出的仓库提供统一授权。
