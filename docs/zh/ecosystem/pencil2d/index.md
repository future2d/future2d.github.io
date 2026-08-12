# pencil2d

## 仓库信息

| 字段 | 内容 |
| --- | --- |
| Future2D fork | [future2d/pencil2d](https://github.com/future2d/pencil2d) |
| 上游仓库 | [pencil2d/pencil](https://github.com/pencil2d/pencil) |
| 上游组织 | pencil2d |
| 生态角色 | 研究 |

## 来源与归属

Future2D 中名为 pencil2d 的仓库 fork 自 Pencil2D 上游源码仓库，其 canonical GitHub 名称为 `pencil2d/pencil`。Pencil2D 将自己描述为由志愿者社区开发的 free and open-source animation/drawing project。Future2D 保存副本用于研究；上游社区仍拥有项目的维护、治理与所有权。

## 适配范围

Pencil2D 支持使用位图和矢量图形进行 **traditional hand-drawn 2D animation**。上游 README 列出 Windows、macOS、Linux 和 FreeBSD 平台。这是一种与 bone-driven、deformation-driven 或 facial-tracking avatar system 不同的创作范围：绘图和帧是主体，runtime 可能需要保留 timing、layers、artwork references 以及 vector/bitmap distinction。

除非上游特定版本的文档明确说明，否则不能把它描述为 Spine、DragonBones 或 Live2D-compatible editor。

## Future2D 收录原因

Future2D 需要足够宽的 2D model 视野来理解相邻工作流，而不是强行把所有内容塞进一种 rigging model。Pencil2D 提供 frame-oriented、drawing-first 管线的证据，有助于判断未来标准何时需要可选 animation/artwork module，而不能假定每个 2D asset 都有 skeleton 和 parameters。

## Future2D fork 的角色

该 fork 用于研究 traditional-animation authoring，不是 Future2D authoring tool，不是 Pencil2D community 维护的分支，也不表示其 native project files 已属于 Future2D specification。

## 许可证与使用边界

上游仓库 metadata 标识 GNU General Public License v2.0。现行许可证文本、build dependencies、文档和 contributor policy 应以上游项目为准，Future2D fork 不改变这些义务。
