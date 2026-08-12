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

该仓库 fork 自 AyagamiDev 的 Ayagami。上游将 Ayagami 描述为使用 Rust 编写的开源 2D 木偶模型加载与渲染 SDK。它是独立项目，不是 Future2D 的组成部分；Future2D fork 用于研究和对比，上游作者保留所有权与开发方向。

## 适配范围

Ayagami 的设计目标是加载和渲染 **Live2D 模型格式的模型**，同时为将来格式和能力扩展留出空间。其文档范围是 2D 木偶 runtime/SDK，而不是 Live2D 创作应用。上游还提供浏览器 demo 和模型 poser，因此也适合研究 Web 交付与交互式模型检查。

上游说明该实现独立完成，并采用黑盒逆向方式开发，且有相应 contributor policy。根据上游 README，代码使用 MIT 与 Apache-2.0 双许可证。

## Future2D 收录原因

Ayagami 是可扩展渲染器架构的例子：模型格式加载、runtime 求值和渲染器可以被分离，而不必让整个应用绑定在单一专有 SDK 上。这正对应 Future2D 对模型图、能力、渲染器特定行为和扩展机制的研究。

## Future2D fork 的角色

该 fork 是兼容性研究参考，不认证其为 Future2D 实现，不保证支持所有 Live2D 功能，也不表示 Future2D 已采用其 API 或许可模型。使用具体行为前，应比较上游与 fork 并查看对应版本。

## 许可证与使用边界

对 Ayagami 代码应遵循上游 MIT 或 Apache-2.0 条款并保留 notices。模型文件、品牌名称及第三方格式条款与 Ayagami 源码许可证相互独立。
