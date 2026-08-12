# Core concepts

The first Future2D vocabulary separates the model graph from the resources and runtime that evaluate it. These terms are deliberately small. They give an authoring tool, converter, and runtime a way to talk about the same asset without requiring them to share an internal implementation.

## Model graph

The hierarchy, geometry, materials, constraints, and named parts that describe a 2D model. The graph is not just a scene tree: it records relationships that make a part meaningful, such as a drawable attached to a transform, a mesh influenced by bones, or a mask that limits another drawable.

Each addressable object needs a stable identifier within the package. Names are useful for people, but they are not enough for a converter because they can be localized or duplicated. A future module should therefore distinguish a machine identity, an optional human-facing name, and the relationship edges that connect objects.

## Resources and packages

A package is the portable unit exchanged by tools. It contains a manifest, model data, and referenced resources such as textures or auxiliary files. The manifest identifies the format version, optional features, and entry points. Resources should be referenced predictably so a runtime can report a missing asset or an unsupported resource type without guessing.

Packaging is separate from compression and transport. A web server, game archive, or editor project may package data differently, while the Future2D package contract should still identify the same model and dependencies.

## Evaluation

Evaluation is the process that turns model data and animation state into a renderable pose. A runtime may resolve transforms, constraints, parameter-driven deformation, draw order, clipping, and events before it asks a renderer to draw. Keeping this boundary explicit prevents a common source of ambiguity: a file can describe a relationship without defining when or how a target must evaluate it.

Animation is input to evaluation, not merely a list of image swaps. A timeline can change parameters, transforms, visibility, deformation, or named events. Interpolation rules and time units must be stated whenever they affect the result. A converter that samples an animation at fixed frames is making a lossy choice and should report that fact.

## Capabilities and fallbacks

A capability is a named behavior a producer can emit or a consumer can evaluate. A runtime might support skeletal transforms but not mesh deformation, or display a mask but not a particular blend mode. Future2D should allow a package and runtime to declare those capabilities clearly.

A fallback is not a claim that a feature was preserved. It is a documented alternative, such as baking a deformation into sampled geometry or replacing an unsupported effect with a transparent placeholder. The compatibility report must identify the fallback, its scope, and whether it changes appearance or behavior.

## Exchange boundary

The explicit contract for what can move between an authoring tool, a file package, and a runtime. It defines the data shape, the semantics that a consumer must understand, and the information a converter must preserve or report as unsupported.

An exchange boundary is useful only when it is testable. A compatibility case should name a source asset, source version, target, selected capabilities, and expected result. The validation module will use these cases to distinguish a successful parse from a successful interchange.
