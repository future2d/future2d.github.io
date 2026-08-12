# Motara

## 仓库信息

| 字段 | 内容 |
| --- | --- |
| Future2D fork | [future2d/Motara](https://github.com/future2d/Motara) |
| 上游仓库 | [MotaraSoft/Motara](https://github.com/MotaraSoft/Motara) |
| 上游组织 | MotaraSoft |
| 生态角色 | 原型 |

## 来源与归属

Motara 是 MotaraSoft 发布项目的 fork。上游 README 将其定位为跨平台的 facial-tracking data processing 与 virtual-avatar control 项目。上游明确表示项目处于早期开发，公开仓库当前没有发布 application source、tests、internal technical documentation、build assets 或 development tools。因此 Future2D fork 记录的是公开仓库状态，不是可用的应用分发包。

## 适配范围

当前文档范围是 **计划中的 facial-tracking input processing 与 virtual-avatar control**。上游没有将它作为已发布的 Live2D、Cubism、Spine、DragonBones、CMO3/MOC3 editor 或 Future2D format 实现。README 仅说明未来方向包括 configurable signal processing 和 output integrations，不能当作已公开 runtime 能力。

Motara 仓库包含一份关于 PurismCore 的 internal compliance record。该记录是 MotaraSoft 描述的有限技术观察，并明确不是法律结论；本页不能将它表述为法律许可，或对任何第三方作出声明。

## Future2D 收录原因

早期 avatar-control 项目有助于映射 tracking signals、parameter processing、application control 与 renderer/model runtime behavior 之间的边界。它提醒我们：输入设备和 tracking protocols 可以是重要 integration，但不必成为 2D model package 的强制部分。

## Future2D fork 的角色

该 fork 仅是原型参考。Future2D 不主张与 MotaraSoft 存在实施关系，不主张获得未公开源码，也不主张兼容任何计划功能。未来发展必须以公开的上游 revision 与文档为依据。

## 许可证与使用边界

上游 README 表示未来 Motara application source 计划采用 Mozilla Public License 2.0，同时名称和视觉标识另受 trademark policy 管理。现行条款应以其上游仓库为准。被本目录收录不表示 Motara 与 Future2D 存在关联或得到认可。
