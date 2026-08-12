# synfig

## 仓库信息

| 字段 | 内容 |
| --- | --- |
| Future2D fork | [future2d/synfig](https://github.com/future2d/synfig) |
| 上游仓库 | [synfig/synfig](https://github.com/synfig/synfig) |
| 上游组织 | synfig |
| 生态角色 | 研究 |

## 来源与归属

Future2D 的 synfig 仓库 fork 自 Synfig Studio 的官方源码仓库。Synfig Studio 在上游中被描述为 free and open-source 2D animation software，由贡献者社区维护。Future2D 的副本仅作为研究参考，不表示 Future2D 是上游 maintainer、release authority 或 support channel。

## 适配范围

Synfig Studio 面向 **vector 和 bitmap 2D animation**，强调无需逐帧手绘也能制作动画。上游 README 记录其支持 Windows、Linux 与 macOS。对 Future2D 而言，相关范围是其自身 project/rendering model 中的 2D animation authoring 与 rendering，而不是 Live2D/Cubism、Spine、DragonBones 或 facial-tracking protocol。

它表明 2D interchange 的讨论可能需要考虑 animated vector artwork、parameters/controls、layers、timing 和 renderer behavior，即使源系统并非 skeletal-avatar runtime。

## Future2D 收录原因

Synfig 是比较 editable artwork、interpolation、compositing 与 output behavior 的成熟矢量动画参考。它有助于避免将标准范围限定得过窄，同时保持 editor native project data 与 portable exchange package 的区分。

## Future2D fork 的角色

该 fork 用于研究与比较，不是 Future2D runtime，不承诺支持 Synfig project files，也不表示所有 Synfig features 都可以被其他系统表示。任何 conversion 或 feature mapping 都应绑定具体上游版本和资产。

## 许可证与使用边界

上游仓库标识 GNU General Public License v3.0。使用或分发代码前，应查阅其当前许可证、构建文档、asset policies 和 community guidance。fork 不改变上游所有权或义务。
