# PurismCore

## 仓库信息

| 字段 | 内容 |
| --- | --- |
| Future2D fork | [future2d/PurismCore](https://github.com/future2d/PurismCore) |
| 上游仓库 | [SakuraMotion/PurismCore](https://github.com/SakuraMotion/PurismCore) |
| 上游组织 | SakuraMotion |
| 本文依据 | Future2D fork `97dd2a5`（2026-06-08） |
| 生态角色 | 兼容性 |

## 来源与归属

PurismCore 是 SakuraMotion 的 Sakura2D Purism Core 的 fork。上游将该项目描述为对 Live2D Cubism Core 中心组件的自由、开源再实现，并说明 Live2D Inc. 未参与开发。Future2D 保存 fork 副本，上游项目、作者和许可证各自独立。

## 适配范围

PurismCore 目标是 **兼容 Live2D Cubism Core 的 MOC3 加载与求值**。上游 README 说明它是仅依赖 C 标准库的 C99 实现，并按平台分别记录支持情况。其范围是加载和计算模型数据所需的运行时行为，创作编辑器和通用 2D 渲染属于其他范围。

MOC3 加载结果只覆盖模型加载边界。其他 Cubism SDK 组件、创作流程、资产许可证和应用集成需要单独测试。

## Future2D 收录原因

该项目适合研究可移植模型包与负责求值的运行时契约之间的分离。它使解析、参数求值、变形、平台目标和错误行为成为可讨论的具体问题，也为“部分支持应明确报告而非悄悄改变模型”的规范设计提供证据。

## Future2D fork 的角色

Future2D 将此 fork 作为兼容性研究参考。使用具体行为前，应通过仓库历史确认实际补丁和同步状态。

## 许可证与使用边界

复制、修改或分发代码时，应遵循上游仓库的现行许可证和 notices。Live2D、Cubism、MOC3 及相关名称仍受各权利人的条款约束。本目录仅记录技术范围，不对格式兼容或分发作法律结论。
