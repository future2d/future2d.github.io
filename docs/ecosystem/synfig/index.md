# synfig

## Repository record

| Field | Value |
| --- | --- |
| Future2D fork | [future2d/synfig](https://github.com/future2d/synfig) |
| Upstream | [synfig/synfig](https://github.com/synfig/synfig) |
| Upstream organization | synfig |
| Ecosystem role | Research |

## Origin and ownership

The Future2D synfig repository is a fork of Synfig Studio's official source repository. Synfig Studio describes itself upstream as free and open-source 2D animation software maintained by its contributor community. The Future2D copy is retained as a research reference and does not make Future2D an upstream maintainer, release authority, or support channel.

## Compatibility scope

Synfig Studio is intended for **vector and bitmap 2D animation**, with an emphasis on producing animation without drawing every frame by hand. Its upstream README documents Windows, Linux, and macOS availability. The relevant compatibility scope is authoring and rendering of 2D animation through its own project and rendering model, rather than Live2D/Cubism, Spine, DragonBones, or a facial-tracking protocol.

For Future2D, this is evidence that a 2D interchange discussion may need to account for animated vector artwork, parameters or controls, layers, timing, and renderer behavior even where the source system is not a skeletal-avatar runtime.

## Why Future2D catalogs it

Synfig provides a mature vector-animation reference for comparing editable artwork, interpolation, compositing, and output behavior. It helps prevent an overly narrow standard scope in which only 2D puppet rigs count as models, while keeping the distinction between an editor's native project data and a portable exchange package explicit.

## Role of the Future2D fork

The fork is used for research and comparison. It is not a Future2D runtime, a promise to support Synfig project files, or a claim that all Synfig features can be represented in another system. Evaluate any conversion or feature mapping against a concrete upstream version and asset.

## License and use boundary

The upstream repository identifies GNU General Public License v3.0 terms. Consult its current license, build documentation, asset policies, and community guidance before using or redistributing code. The fork does not change upstream ownership or obligations.
