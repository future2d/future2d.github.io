# umamo

## 仓库信息

| 字段 | 内容 |
| --- | --- |
| Future2D fork | [future2d/umamo](https://github.com/future2d/umamo) |
| 上游仓库 | [umamoorg/umamo](https://github.com/umamoorg/umamo) |
| 上游组织 | umamoorg |
| 本文依据 | Future2D fork `b5cb72d`（2026-08-12） |
| 生态角色 | 参考 |

## 来源与归属

Umamo 是 umamoorg 维护的开源项目的 fork。上游 README 将其描述为跨平台 2D 木偶动画 modelling editor，并具备笔和触控支持。项目仍处于早期开发阶段，API、格式和范围仍会变化。Future2D 保存副本用于参考。

## 适配范围

Umamo 声明支持 **Live2D Cubism source format `.cmo3`**，并支持导入与导出 **MOC3** runtime 模型。它运行于 Windows、macOS、Linux 与 Android tablets，强调笔和触控输入。该项目连接可编辑源数据与 runtime 数据，可作为创作侧参考。

目前没有证据表明每个 Cubism 功能或版本都能无损 round-trip。比较导入导出行为时，应结合上游的 early-development 说明。

## Future2D 收录原因

编辑器会暴露 runtime export 中可能消失的信息，例如名称、可编辑关系、参数、网格、画面资源引用和创作意图。Umamo 因此有助于研究可编辑 2D 模型项目与可移植 runtime package 之间的边界，以及转换器必须保留或明确报告的内容。

## Future2D fork 的角色

该 fork 被收录为创作工作流参考。CMO3 和 MOC3 仍是 Cubism 格式，具体能力应从上游 release 和 fork comparison 判断。

## 许可证与使用边界

使用代码或资产时，请遵循上游仓库的许可证、发布说明及第三方格式条款。Cubism、CMO3、MOC3 仍受各自权利人的政策约束。
