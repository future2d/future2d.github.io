# Motara

## 仓库信息

| 字段 | 内容 |
| --- | --- |
| Future2D fork | [future2d/Motara](https://github.com/future2d/Motara) |
| 上游仓库 | [MotaraSoft/Motara](https://github.com/MotaraSoft/Motara) |
| 上游组织 | MotaraSoft |
| 本文依据 | Future2D fork `16d9e4f`（2026-08-13） |
| 生态角色 | 研究 |

## 来源与归属

Motara 是 MotaraSoft 发布的开源桌面应用 fork。当前 Future2D fork 已包含应用本体和配套库。本说明文章以表中列出的 Future2D fork 修订为版本依据；上游仓库用于说明来源和归属。Motara 仍处于积极开发阶段，尚未提供官方二进制发行版，API、文件格式、网络行为和受支持平台可能继续变化。

## 适配范围

当前源码实现的是用于 **面部捕捉数据处理、虚拟形象控制和场景合成** 的桌面应用，已公开的实现范围包括：

- 基于 Avalonia 的桌面外壳，以及英文和简体中文本地化；
- 本地场景、模型分配、图像/视频背景、效果、截图和 Spout2/NDI 信号附件；
- 可导入 Cubism 模型描述文件目录以及 ZIP、RAR、7Z 压缩包的模型库；
- 通过独立维护、采用 MIT 许可证的 [PurismCore](https://github.com/MotaraSoft/PurismCore) 组件实现 MOC3 解析和 Skia 渲染；
- iFacialMocap UDP、本地相机 MediaPipe 和本地 OpenSeeFace 捕捉适配器，以及映射、公式、校准、滤波和参数优先级；
- 可配置参数映射的 Live2D Cubism Editor 外部 API 输出适配器；
- 身份、邀请、加密点对点帧、好友和模型包传输等早期协作原语。

当前源码未包含 VTube Studio 输出、公开插件 SDK、插件宿主、稳定的第三方扩展契约或可发行级端到端互操作性。MOC3 渲染、视频解码、捕捉输入和 Spout2/NDI 输出还依赖干净检出中不随附的本地运行时或外部应用。

Motara 仓库包含一份关于 PurismCore 的 internal compliance record。MotaraSoft 将其描述为有限的技术观察；本页仅将其作为项目文档引用，不作法律结论。

## Future2D 收录原因

Motara 提供了一条具体的应用管线，用于研究 tracking signals、parameter processing、model runtime behavior、scene composition、collaboration 与 desktop output。源码还展示了本地资源发现、参数映射、渲染回退、捕获表面和可选原生依赖等应用层问题，可作为应用层和集成契约的参考。

## Future2D fork 的角色

该 fork 作为工作中应用架构的研究参考保留。本页能力描述以已核对的 Future2D fork 修订为依据；使用时应再次检查 fork 的新提交。

## 许可证与使用边界

上游仓库规定，除文件另有说明外，Motara 自有源码采用 Mozilla Public License 2.0，说明性文档采用 CC BY 4.0。PurismCore 和其他可选组件仍使用各自许可证并受各自分发条件约束；上游仓库不包含这些运行时和依赖的官方可再分发包。Motara 的名称、Logo 和视觉标识另受上游商标政策管理，现行条款应以上游声明为准。
