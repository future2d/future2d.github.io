# Specification drafts

Future2D is in the research and draft phase. These modules describe the intended scope. A module becomes normative after its terms, examples, validation cases, and implementation implications have received public review.

The modules are separated so a tool can adopt a useful subset. Cross-module references must name their dependency. For example, an animation track can target a model parameter while using the identity rules from the model module.

- **Package**: files, resources, and versioning
- **Model**: hierarchy, geometry, materials, and constraints
- **Animation**: timelines, interpolation, and events
- **Physics**: optional physical behavior
- **Runtime**: loading, evaluation, and rendering boundaries
- **Validation**: conformance and interchange testing

## Draft status

The current site describes the boundaries and questions for each module. It does not yet publish a stable schema, binary encoding, or conformance badge. Examples in future drafts should be small enough to inspect by hand and rich enough to expose the behavior under discussion.

## How a draft advances

1. **Research** records how existing ecosystems represent a capability and where their assumptions differ.
2. **Draft** states a proposed concept, data shape, and failure behavior with examples.
3. **Reference implementation** exercises the proposal against real assets and at least one runtime.
4. **Interoperability review** compares independent implementations and records remaining ambiguity.

Until these steps are complete, a module remains review material. Compatibility claims require the corresponding evidence and implementation results.
