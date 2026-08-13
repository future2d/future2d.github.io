# Introduction

Future2D is an open research effort for interoperable 2D model data. Existing tools describe the same kinds of assets in different ways: a character may have a hierarchy, drawable parts, deformation, animation, physics, and interaction state. The project records the data and runtime behavior involved when those assets move between tools.

The current site contains shared terminology, draft module boundaries, compatibility records, and references to existing projects. It is an early working document. A stable schema, binary encoding, and conformance program have not yet been published.

## Questions under study

- How can a package identify a drawable part, joint, parameter, or animation event across tools?
- Which data belongs in a portable package, and which data belongs to a renderer or application?
- How should a converter describe an omitted or substituted feature?
- Which test case is sufficient for a stated target use?

## Initial scope

The initial modules cover package structure, model graphs, animation data, optional physical behavior, runtime evaluation, and validation. A 2D file can contain visual resources together with behavior evaluated at runtime. A useful exchange record therefore includes both the stored data and the conditions under which it was evaluated.

For example, a target may draw a texture while producing a different parameter relation, clipping result, constraint result, or event sequence. Compatibility records need to state the fixture, source and target versions, exercised features, and observed output.

## Reading the site

Start with [Core concepts](/docs/concepts), then read the [Specification drafts](/docs/specification/) and [Compatibility](/docs/compatibility) pages. When researching an ecosystem, use a small reproducible asset and record the source tool, version, export settings, target runtime, tested feature, and visible result.

The [Ecosystem](/ecosystem/) directory lists research forks in the Future2D organization. Each detail page identifies its upstream repository, reviewed fork revision, documented scope, and license information.
