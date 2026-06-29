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
