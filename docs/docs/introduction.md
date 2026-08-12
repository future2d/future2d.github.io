# Introduction

Future2D is an open initiative for a next-generation, interoperable standard for 2D models. It starts from a practical observation: useful 2D assets are often locked to a particular authoring tool or runtime even when their visual intent is simple to describe. A character can have a hierarchy, drawable parts, deformation, animation, physics, and interaction state, but those ideas are expressed differently by every ecosystem.

The project does not aim to replace existing tools by decree. It studies the capabilities already present in them, identifies the information that must survive exchange, and makes the boundaries explicit. A format can then state what it represents, a runtime can state what it evaluates, and a conversion can report what it preserved or deliberately omitted.

## What Future2D is building

The initial work is a set of shared concepts, draft modules, compatibility evidence, and reference implementations. Together they should make it possible to answer concrete questions:

- What is the stable identity of a drawable part, joint, parameter, or animation event?
- Which information belongs to a portable model package, and which belongs to one renderer?
- How should a tool declare an unsupported feature without silently changing the asset?
- What evidence proves that a model has been exchanged faithfully enough for a target use case?

The first release of this site documents the scope and vocabulary. It does not claim that a finished wire format or final specification already exists.

## Design principles

- Model semantics should be explicit and portable.
- Capabilities should degrade predictably when a target runtime is simpler.
- A specification should be testable with real assets and tools.
- Existing ecosystems are evidence and collaborators, not obstacles to erase.

## A narrow starting point

Future2D begins with the common ground needed for a model to move through a pipeline: package structure, model graph, animation data, optional physical behavior, runtime evaluation, and validation. Not every system needs every capability. The point is to represent absence and degradation explicitly, rather than pretending every conversion is lossless.

This is especially important for 2D models. A file may contain both visual information and behavior that is evaluated at runtime. A target can display an image while still failing to reproduce a parameter relationship, clipping rule, constraint, or event. The specification work therefore distinguishes data representation from the runtime contract that gives that data meaning.

## How to use these documents

Read the core concepts before proposing a field or conversion rule. Read the specification drafts as a map of modules under formation, not as normative text. When investigating an existing ecosystem, record a small reproducible asset, the source tool and version, the target runtime, the feature being tested, and the visible result. This makes discussion concrete and gives later reference implementations something to verify.

The ecosystem directory is a catalogue of references. A fork in the Future2D organization may be used for research, compatibility testing, or a prototype; it is not automatically an endorsed component of the standard.
