# Compatibility and validation

Compatibility work records what survives a conversion, what degrades, and what must remain explicit. It is not a pass/fail contest between tools. A conversion may be successful for a target use case while still omitting an advanced effect; the important result is that the omission is visible, repeatable, and documented.

## What to record

Each report should include:

- the source asset, package, and authoring tool version;
- the target runtime or editor and its version;
- the capabilities intentionally exercised;
- a feature matrix marking preserved, transformed, sampled, omitted, or blocked data;
- the expected visual or behavioral result;
- the observed result and a link to reproducible steps.

## Parse success is not interchange success

A runtime loading a file proves that it understood enough bytes to continue. It does not prove that hierarchy, deformation, animation timing, clipping, draw order, physics, or events have the intended meaning. Validation should therefore inspect both structural data and the evaluated result.

For visual behavior, a small deterministic fixture is more useful than a large production model. For runtime behavior, record the input state, time step, parameters, and expected event order. When exact rendering differs across platforms, define the invariant that matters: part visibility, ordering, parameter range, or event occurrence.

## Compatibility levels

Future2D can use compatibility levels as communication, not as marketing scores:

1. **Structural**: the package can be parsed and its identities/resources resolved.
2. **Semantic**: the target understands the model relationships and capability declarations.
3. **Evaluated**: the target produces the expected pose, animation, or event behavior for the fixture.
4. **Interchange**: an independent implementation can consume the result and reproduce the stated invariants.

Reports should name the highest level demonstrated and list the boundaries below it.
