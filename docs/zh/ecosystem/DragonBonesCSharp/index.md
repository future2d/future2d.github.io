# DragonBonesCSharp

## 仓库信息

| 字段 | 内容 |
| --- | --- |
| Future2D fork | [future2d/DragonBonesCSharp](https://github.com/future2d/DragonBonesCSharp) |
| 上游仓库 | [DragonBones/DragonBonesCSharp](https://github.com/DragonBones/DragonBonesCSharp) |
| 上游组织 | DragonBones |
| 本文依据 | Future2D fork `29a3613`（2026-05-08） |
| 生态角色 | 参考 |

## 来源与归属

DragonBonesCSharp 是 DragonBones 组织维护的 C# runtime 的 fork。上游 README 将其描述为 DragonBones C# Runtime，包含 common library 与 Unity 接入。Future2D 保存副本用于参考，代码和数据格式仍归上游项目。

## 适配范围

该仓库面向 **DragonBones 骨骼动画数据** 及其 C# 运行时使用，并提供文档化的 Unity 集成。它代表了托管运行时中的 2D 骨骼动画路径：应用需要加载模型和动画数据、求值动画状态，并将结果姿态传给引擎集成。

DragonBones 兼容性仅针对上游定义的数据和运行时契约，与 Spine、Live2D 及未来的 Future2D 包分开处理。

## Future2D 收录原因

DragonBones 提供第二套成熟骨骼动画词汇，可与模型层级、slot 或 display 选择、动画播放和引擎绑定进行比较。它有助于区分可以跨骨骼系统移植的概念，以及依赖具体运行时表示或求值顺序的概念。

## Future2D fork 的角色

该 fork 用于托管运行时和引擎集成研究。评估代码行为时，应查看精确的上游分支和仓库历史。

## 许可证与使用边界

DragonBones 上游项目与贡献者仍拥有各自代码和标识。许可证义务及引擎依赖必须从上游仓库和实际版本判断，Future2D fork 不替代上游支持或许可证审查。
