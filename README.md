# Ulfsdotter Portfolio

Personal portfolio site for Isabelle Ulfsdotter.

Built with Vite, React, TypeScript, Tailwind CSS, and shadcn-ui.

## Local Development

Install dependencies:

```sh
npm install
```

Run the dev server:

```sh
npm run dev
```

Build production assets:

```sh
npm run build
```

The build runs Vite and then `scripts/build-crawler-pages.mjs`, which generates crawler-readable HTML for the homepage and project pages, plus `sitemap.xml` and `llms.txt`.

## Useful Files

- `scripts/build-crawler-pages.mjs`: Generates crawler-readable route HTML, sitemap, and LLM summary.
- `public/robots.txt`: Allows crawlers and points to the sitemap.
- `public/llms.txt`: Short LLM-readable site summary.

## License

Blog posts under `content/` are licensed under CC BY 4.0 (reuse with credit welcome). Branding, hero photography, favicon, and OG images are reserved. Code is copyright and provided for reference — see [LICENSE](./LICENSE) for details.

## Dependency security and installation

Use Node.js 22.12+ (or 20.19+) and npm. `package-lock.json` is the authoritative
lockfile; install reproducibly with `npm ci`. Stale Bun locks were removed so
alternate installs cannot silently restore the old vulnerable dependency graph.
Run `npm run build` and `npm run dev` before release. The typography dependency
override stays on selector-parser 6.x and replaces its vulnerable exact pin.
