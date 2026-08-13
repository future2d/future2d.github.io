# ayagami

## 仓库信息

| 字段 | 内容 |
| --- | --- |
| Future2D fork | [future2d/ayagami](https://github.com/future2d/ayagami) |
| 上游仓库 | [AyagamiDev/ayagami](https://github.com/AyagamiDev/ayagami) |
| 上游组织 | AyagamiDev |
| 本文依据 | Future2D fork `ffb8d50`（2026-08-11） |
| 生态角色 | 兼容性 |

## 来源与归属

该仓库 fork 自 AyagamiDev 的 Ayagami。上游将 Ayagami 描述为使用 Rust 编写的开源 2D 木偶模型加载与渲染 SDK。Future2D 保存副本用于研究和对比，项目所有权与开发方向仍由上游维护者负责。

## 适配范围

Ayagami 用于加载和渲染 **Live2D 模型格式的模型**，设计上为其他格式和能力保留扩展空间。文档范围是 2D 木偶 runtime/SDK。上游还提供浏览器 demo 和模型 poser，可用于研究 Web 交付与交互式模型检查。

上游说明该实现独立完成，并采用黑盒逆向方式开发，且有相应 contributor policy。根据上游 README，代码使用 MIT 与 Apache-2.0 双许可证。

## Future2D 收录原因

Ayagami 将模型格式加载、runtime 求值和渲染器分开实现。这种结构可用于比较模型图、能力、渲染器特定行为和扩展机制。

## Future2D fork 的角色

该 fork 用于兼容性研究。使用具体行为前，应比较上游与 fork 并查看对应版本。

## 许可证与使用边界

对 Ayagami 代码应遵循上游 MIT 或 Apache-2.0 条款并保留 notices。模型文件、品牌名称及第三方格式条款与 Ayagami 源码许可证相互独立。
