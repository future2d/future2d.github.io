# Core concepts

The first Future2D vocabulary separates the model graph, its resources, and the runtime that evaluates it. The terms provide a common description for authoring tools, converters, and runtimes.

## Model graph

The model graph contains the hierarchy, geometry, materials, constraints, and named parts of a 2D model. It records relationships such as a drawable attached to a transform, a mesh influenced by bones, or a mask applied to another drawable.

Each addressable object needs a stable identifier within the package. A separate optional display name can be localized or duplicated. A future module should distinguish the machine identity, display name, and relationship edges.

## Resources and packages

A package is the portable unit exchanged by tools. It contains a manifest, model data, and referenced resources such as textures or auxiliary files. The manifest identifies the format version, optional features, and entry points. Predictable resource references let a runtime report missing assets and unsupported resource types precisely.

Packaging is separate from compression and transport. A web server, game archive, or editor project may package data differently, while the Future2D package contract should still identify the same model and dependencies.

## Evaluation

Evaluation turns model data and animation state into a renderable pose. A runtime may resolve transforms, constraints, parameter-driven deformation, draw order, clipping, and events before it calls a renderer. The file format and the evaluation contract need separate descriptions because a relationship in data does not define its evaluation order.

Animation supplies state to evaluation. A timeline can change parameters, transforms, visibility, deformation, or named events. Interpolation rules and time units belong in the format description whenever they affect the result. Fixed-frame sampling is a lossy conversion and should be recorded.

## Capabilities and fallbacks

A capability is a named behavior a producer can emit or a consumer can evaluate. A runtime might support skeletal transforms but not mesh deformation, or display a mask but not a particular blend mode. Future2D should allow a package and runtime to declare those capabilities clearly.

A fallback is a documented alternative, such as baking a deformation into sampled geometry or replacing an unsupported effect with a transparent placeholder. The compatibility report identifies the fallback, its scope, and any change to appearance or behavior.

## Exchange boundary

The exchange boundary is the contract for data moving between an authoring tool, a file package, and a runtime. It defines the data shape, the required semantics, and the information a converter must preserve or report as unsupported.

An exchange boundary is useful only when it is testable. A compatibility case should name a source asset, source version, target, selected capabilities, and expected result. The validation module will use these cases to distinguish a successful parse from a successful interchange.
