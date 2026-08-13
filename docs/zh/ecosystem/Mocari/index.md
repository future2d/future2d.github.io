# Mocari

## 仓库信息

| 字段 | 内容 |
| --- | --- |
| Future2D fork | [future2d/Mocari](https://github.com/future2d/Mocari) |
| 上游仓库 | [Eatgrapes/Mocari](https://github.com/Eatgrapes/Mocari) |
| 上游组织 | Eatgrapes |
| 本文依据 | Future2D fork `13c7ed3`（2026-07-13） |
| 生态角色 | 原型 |

## 来源与归属

Mocari 是 Eatgrapes/Mocari 维护的上游 Rust 项目的 fork。上游 README 将其描述为纯 Rust 的 Live2D/Cubism runtime experiment，目标是减少对闭源 core 的 native bindings 依赖。Eatgrapes/Mocari 是上游项目，Future2D 仓库是研究副本。

## 适配范围

Mocari 探索 **Rust 中的 Live2D/Cubism 兼容 runtime**。其目标是成为易调用、易集成的 Rust library，减少复杂的 native runtime 配置。上游发布于 crates.io，并将项目标为实验性；模型、SDK 行为和平台覆盖应按具体案例核对。

其文档范围是 runtime 研究，页面未列出 Cubism source projects 导入、官方编辑器替代品或 Future2D 模型格式。

## Future2D 收录原因

Mocari 有助于研究在内存安全、跨平台语言中表达和求值 2D 木偶行为需要哪些内容。它关联 native dependency、runtime API、错误报告、模型加载，以及闭源 core 生态的可移植性成本等问题。

## Future2D fork 的角色

Future2D 将 Mocari 作为原型参考。任何行为结论都应绑定具体上游 revision 和模型案例。

## 许可证与使用边界

应从上游仓库确认适用代码许可证、发布状态和依赖 notices。Live2D、Cubism 格式名称与任何模型资产的条款独立于本目录或 Rust 实现。
