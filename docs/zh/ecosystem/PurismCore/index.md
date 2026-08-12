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

PurismCore 是 SakuraMotion 的 Sakura2D Purism Core 的 fork。上游将该项目描述为对 Live2D Cubism Core 中心组件的自由、开源再实现，并明确说明它不是由 Live2D Inc. 开发。Future2D 仅拥有自己的 fork 副本及其中的改动；上游项目、作者和许可证均独立存在。

## 适配范围

PurismCore 目标是 **兼容 Live2D Cubism Core 的 MOC3 加载与求值**。上游 README 说明它是仅依赖 C 标准库的 C99 实现，并按平台分别记录支持情况。这是一种运行时层面的兼容范围，关注加载和计算模型数据所需的行为，而不是创作编辑器或通用 2D 渲染器。

能处理一个 MOC3 文件并不等于兼容全部 Cubism SDK 组件、创作流程、资产许可证或应用集成；这些边界必须独立测试。

## Future2D 收录原因

该项目适合研究可移植模型包与负责求值的运行时契约之间的分离。它使解析、参数求值、变形、平台目标和错误行为成为可讨论的具体问题，也为“部分支持应明确报告而非悄悄改变模型”的规范设计提供证据。

## Future2D fork 的角色

Future2D 将此 fork 作为兼容性研究参考，不表示 PurismCore 是官方 Future2D runtime、Future2D 提供 MOC3 兼容性，或该 fork 与上游同步。实际补丁和同步状态应通过仓库历史确认。

## 许可证与使用边界

复制、修改或分发代码时，应遵循上游仓库的现行许可证和 notices。Live2D、Cubism、MOC3 及相关名称仍受各权利人的条款约束。本目录仅记录技术范围，不对格式兼容或分发作法律结论。
