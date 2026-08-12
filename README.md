# Future2D Website

The website for [Future2D](https://github.com/future2d), an open initiative to
develop a practical, interoperable standard for next-generation 2D models.
The project studies the capabilities already present in ecosystems such as
Spine, Live2D, DragonBones, and related runtimes and authoring tools. The goal
is to make model data, animation, behavior, and runtime expectations easier to
describe, exchange, validate, and implement across tools.

This repository contains only the source required to build the public site. It
is intentionally separate from the organization repositories that are used for
runtime experiments, format research, and other implementation work.

## What the site contains

The home page is the project statement and the entry point for the current
research. The navigation is organized around four areas:

- **Ecosystem** (`/ecosystem/`) catalogs related projects and explains whether
  each entry is being used as a reference, compatibility target, prototype, or
  research input. A listing is not an endorsement and does not make an upstream
  project part of the Future2D standard.
- **Documentation** (`/docs/`) introduces the shared vocabulary, model graph,
  resource packaging, compatibility evidence, and the draft modules that are
  currently being discussed.
- **Roadmap** (`/roadmap/`) describes the progression from ecosystem research
  through reviewable drafts, reference implementations, and interoperability
  testing. It is a public orientation page, not a release promise.
- **Community** (`/community/`) points contributors to the organization and
  lists the kinds of evidence, reviews, and implementation work that are useful.

English is the default language. The Simplified Chinese version mirrors the
same information under `/zh/`, for example `/zh/ecosystem/` and `/zh/docs/`.
VitePress provides the language switcher, search, responsive navigation, and
light/dark appearance controls.

## Local development

Requirements: Node.js 20 or newer and pnpm 9 or newer. Corepack can install a
compatible pnpm version when it is not already available.

```powershell
corepack enable
pnpm install
pnpm run docs:dev
```

The development server prints a local URL, normally
`http://localhost:5173/`. Changes under `docs/` are hot-reloaded.

To build and inspect the production output locally:

```powershell
pnpm run docs:build
pnpm run docs:preview
```

The generated files are written to `docs/.vitepress/dist/`. Build output and
VitePress caches are ignored by Git.

## Deployment

The `main` branch is built by the GitHub Actions workflow in
`.github/workflows/deploy.yml` and deployed with GitHub Pages. The custom
domain is recorded in `CNAME` as `www.future2d.org`; the apex domain can
redirect to that host through the DNS provider. The public site is therefore
available at [www.future2d.org](https://www.future2d.org/).

When changing the domain, update both the DNS records and `CNAME`, then verify
the custom-domain setting in the repository's Pages configuration. A local
build should pass before pushing a change so that the Pages workflow receives
the same dependency lockfile used during development.

## Contributing

Small, evidence-based contributions are welcome. Useful changes include
clarifying terminology, documenting how an existing tool represents a feature,
adding a reproducible compatibility observation, reviewing a draft for
ambiguity, and improving the accessibility or navigation of the site.

For documentation changes, edit the corresponding English page first and keep
the Chinese page in sync under `docs/zh/`. Keep ecosystem entries factual and
link to the upstream project. Please open an issue or discussion in the
[Future2D organization](https://github.com/future2d) when a change needs
cross-project coordination.

Before opening a pull request, run `pnpm install`, `pnpm run docs:build`, and
`git diff --check`. Do not commit generated site output, local caches, test
fixtures, or organization-level planning material to this website repository.

## Project status

Future2D is in the research and specification-draft stage. The pages describe
working concepts and publicly visible evidence; they are not a final standard,
compatibility guarantee, or promise that every listed runtime will be
supported. Normative decisions will be published only after review and
reference implementation work demonstrates that they can be tested in practice.

## License

The website source is released under the [MIT License](LICENSE). Individual
cataloged projects retain their own upstream licenses; consult each project
before redistributing its code or assets.
