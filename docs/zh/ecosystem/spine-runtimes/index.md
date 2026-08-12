# spine-runtimes

## 仓库信息

| 字段 | 内容 |
| --- | --- |
| Future2D fork | [future2d/spine-runtimes](https://github.com/future2d/spine-runtimes) |
| 上游仓库 | [EsotericSoftware/spine-runtimes](https://github.com/EsotericSoftware/spine-runtimes) |
| 上游组织 | Esoteric Software |
| 本文依据 | Future2D fork `51d8d78`（2026-08-04） |
| 生态角色 | 参考 |

## 来源与归属

本仓库 fork 自 Esoteric Software 的 Spine Runtimes。上游项目为 Spine 这套 2D 骨骼动画工具提供加载和求值运行时。Future2D 并不拥有 Spine、其文件格式、运行时行为、商标或许可证条款；组织中的副本仅作为研究参考。

## 适配范围

上游运行时用于让不同游戏或应用工具链使用 **Spine 骨骼动画数据**。对 Future2D 而言，关键不只是绘制一个角色：Spine 数据还涉及骨骼结构、attachments、skins、时间线、绘制顺序、约束及其他运行时语义。若消费者只显示纹理却改变这些关系，就不能视为行为等价的 Spine 运行时。

确切功能和运行时目标取决于上游具体运行时及 Spine 版本。使用任何能力前，应查看上游运行时指南和对应分支。

## Future2D 收录原因

Spine 是成熟 2D 骨骼动画管线的有价值参考。它帮助区分哪些概念属于可移植模型数据，哪些依赖运行时求值规则，以及转换何时必须报告能力缺失或损失。模型图、attachments、动画时间线、约束和带版本资产包都与该研究直接相关。

## Future2D fork 的角色

该 fork 用于格式和运行时研究。本页不表示 Future2D 修改了代码、支持全部上游运行时，或提供 Spine 兼容实现。实际补丁、分支差异和同步状态必须在对应 fork 与上游分支的比较中确认。

## 许可证与使用边界

Spine Runtimes 受 Esoteric Software 的运行时和编辑器许可证管理，不受 Future2D 管理。上游 README 说明集成与分发条件依赖 Spine 授权。使用或分发代码、资产前，请阅读当前 [Spine Runtimes License Agreement](http://esotericsoftware.com/spine-runtimes-license) 与上游文档。
