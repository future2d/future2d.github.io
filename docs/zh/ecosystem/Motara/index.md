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

Motara 是 MotaraSoft 发布的开源桌面应用 fork。当前 Future2D fork 已经包含应用本体和配套库，而不再只是项目概要。本说明文章以表中列出的 Future2D fork 修订作为版本依据；上游仓库用于说明来源与归属，不作为本页描述的版本锚点。Motara 仍处于积极开发阶段，尚未提供官方二进制发行版；其 API、文件格式、网络行为和受支持平台范围也尚未构成稳定的兼容性承诺。Future2D fork 记录的是公开仓库状态，不是 Motara 官方分发包，也不改变 MotaraSoft 的所有权。

## 适配范围

当前源码实现的是用于 **面部捕捉数据处理、虚拟形象控制和场景合成** 的桌面应用，已公开的实现范围包括：

- 基于 Avalonia 的桌面外壳，以及英文和简体中文本地化；
- 本地场景、模型分配、图像/视频背景、效果、截图和 Spout2/NDI 信号附件；
- 可导入 Cubism 模型描述文件目录以及 ZIP、RAR、7Z 压缩包的模型库；
- 通过独立维护、采用 MIT 许可证的 [PurismCore](https://github.com/MotaraSoft/PurismCore) 组件实现 MOC3 解析和 Skia 渲染；
- iFacialMocap UDP、本地相机 MediaPipe 和本地 OpenSeeFace 捕捉适配器，以及映射、公式、校准、滤波和参数优先级；
- 可配置参数映射的 Live2D Cubism Editor 外部 API 输出适配器；
- 身份、邀请、加密点对点帧、好友和模型包传输等早期协作原语。

这些能力不等于已经发布或可在所有平台直接运行的通用 runtime。VTube Studio 输出、公开插件 SDK、插件宿主、稳定的第三方扩展契约以及可发行级端到端互操作性尚未实现。MOC3 渲染、视频解码、捕捉输入和 Spout2/NDI 输出还依赖干净检出中不会随附的本地运行时或外部应用。

Motara 仓库包含一份关于 PurismCore 的 internal compliance record。该记录是 MotaraSoft 描述的有限技术观察，并明确不是法律结论；本页不能将它表述为法律许可，或对任何第三方作出声明。

## Future2D 收录原因

Motara 现在提供了一条具体的应用管线，用于研究 tracking signals、parameter processing、model runtime behavior、scene composition、collaboration 与 desktop output 之间的边界。它的源码也暴露了未来标准需要描述、但不能与模型包混为一谈的实际问题：本地资源发现、参数映射、渲染回退、捕获表面和可选原生依赖。因此它适合作为应用层与集成契约的研究证据，同时仍独立于 Future2D 标准。

## Future2D fork 的角色

该 fork 作为工作中应用架构的研究参考保留。Future2D 不主张与 MotaraSoft 存在实施关系、得到认可、同步发行，也不主张兼容 Motara 的全部功能。本页能力描述以已核对的 Future2D fork 修订为依据；使用时应再次检查 fork 的新提交。

## 许可证与使用边界

上游仓库规定，除文件另有说明外，Motara 自有源码采用 Mozilla Public License 2.0，说明性文档采用 CC BY 4.0。PurismCore 和其他可选组件仍使用各自许可证并受各自分发条件约束；上游仓库不包含这些运行时和依赖的官方可再分发包。Motara 的名称、Logo 和视觉标识另受上游商标政策管理。现行条款应以上游声明为准。收录 fork 不表示 MotaraSoft 与 Future2D 存在关联或认可关系。
