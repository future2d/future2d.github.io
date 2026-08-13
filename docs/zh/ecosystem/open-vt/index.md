# open-vt

## 仓库信息

| 字段 | 内容 |
| --- | --- |
| Future2D fork | [future2d/open-vt](https://github.com/future2d/open-vt) |
| 上游仓库 | [erodozer/open-vt](https://github.com/erodozer/open-vt) |
| 上游组织 | erodozer |
| 本文依据 | Future2D fork `6e2ffa6`（2026-08-10） |
| 生态角色 | 研究 |

## 来源与归属

open-vt 是 erodozer 维护的开源 2D VTubing 应用的 fork。Future2D 保存副本用于研究，应用、集成、品牌和支持仍由上游负责。

## 适配范围

上游 README 将 open-vt 定义为 **2D VTubing** 软件。文档化的 tracker inputs 包括 **OpenSeeFace** 和通过 Wi-Fi TCP 连接的 **VTube Studio**。它还声明提供 native Linux support、用于 alpha-based OBS capture 的透明窗口支持，并且是应用工作流而非模型创作格式。

在生态映射中，tracking input、model evaluation、desktop compositing 和 OBS capture 属于不同接口。tracker 集成和透明捕获输出描述的是应用连接方式，不规定 2D model package。

## Future2D 收录原因

open-vt 为 Future2D 提供从 tracking data 输入、控制 2D avatar 到 capture-friendly surface 输出的具体应用管线。它有助于识别哪些输入输出应作为 portable model package 之外的 integration contract。

## Future2D fork 的角色

该 fork 用作应用管线证据。将其用于兼容性测试时，应根据选定的上游 revision 核对具体集成。

## 许可证与使用边界

应从上游仓库确认许可证、dependencies、tracker requirements 与 release 信息。OpenSeeFace、VTube Studio、OBS 等第三方工具均有各自的许可证和政策。
