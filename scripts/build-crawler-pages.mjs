import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = "https://ulfsdotter.com";
const currentYear = new Date().getFullYear();

const routes = [
  {
    path: "/",
    title: "Isabelle Ulfsdotter | Product Leader and Builder",
    description:
      "Product leader in Brussels building HAL, Bizzit, and Chromos. Portfolio covering product strategy, AI projects, data sovereignty, mobile apps, and product discovery.",
    sections: [
      {
        heading: "Isabelle Ulfsdotter",
        paragraphs: [
          "Builder and tinkerer. I learn by building. These are my projects and the ideas behind them.",
          "I am a product leader with 10+ years of experience. By day, I lead product and data strategy at Izix, used by 40k users daily. By night, I build personal software projects.",
          "I am an engineer at heart. With agentic coding and backend-as-a-service, it has never been easier to turn ideas into working software.",
        ],
      },
      {
        heading: "Projects",
        items: [
          {
            title: "HAL",
            href: "/projects/hal",
            text: "Testing whether context sovereignty is technically feasible. Every AI conversation is an investment; HAL proves that investment can live in my infrastructure, not a vendor moat.",
          },
          {
            title: "Bizzit",
            href: "/projects/bizzit",
            text: "An AI-powered business memory tool. Snap a picture of a place and turn it into a contact, using OCR, geolocation, LLM orchestration, and evaluation in production.",
          },
          {
            title: "Chromos",
            href: "/projects/chromos",
            text: "A color palette app for getting dressed. Upload a garment and Chromos suggests what works with it, starting with palettes and evolving toward outfit suggestions.",
          },
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "I am based in Brussels and am always happy to connect with fellow builders and tinkerers.",
        ],
        items: [
          {
            title: "LinkedIn",
            href: "https://www.linkedin.com/in/isabelle-ulfsdotter-netus/",
            text: "Connect with Isabelle Ulfsdotter on LinkedIn.",
          },
        ],
      },
    ],
  },
  {
    path: "/projects/hal",
    title: "HAL | Isabelle Ulfsdotter",
    description:
      "HAL is a personal knowledge system with semantic search, MCP, RAG, and local Markdown storage built to test context sovereignty.",
    sections: [
      {
        heading: "HAL",
        paragraphs: [
          "A personal knowledge system with semantic search. Tags: MCP, RAG, Data Sovereignty.",
        ],
      },
      {
        heading: "The Problem",
        paragraphs: [
          "Every conversation with ChatGPT or Claude is an investment, but it is in their moat, not mine. Each interaction builds context, and more context locks you in.",
          "With features like memory, project instructions, and project files, your dependence becomes increasingly entrenched with your provider of choice. Those are valuable capabilities, but switching costs mount over time.",
          "Context is infrastructure, not just a repository of files. LLMs compel you to document tacit knowledge because you want better answers, so you keep feeding them context that may have only lived in your head before.",
        ],
      },
      {
        heading: "How I Built It",
        paragraphs: [
          "I built HAL to prove that context sovereignty is technically feasible. The substrate, the cumulated knowledge and processes that expound it, lives with me.",
        ],
        items: [
          { title: "Storage", text: "Local Markdown files with Time Machine backups." },
          { title: "Search", text: "Weaviate for semantic and keyword search." },
          { title: "Embeddings", text: "Mistral." },
          {
            title: "Interface",
            text: "An MCP server that any compatible AI can connect to.",
          },
        ],
      },
      {
        heading: "What I Am Learning",
        paragraphs: [
          "HAL works as a weekend build and demonstrates that there is a there there. The question is not whether LLMs are useful; they clearly are. I want to make sure I am not locked into any single one of them.",
          "If this resonates, keep important notes in local files where you can own them, copy valuable AI conversations to your own documents, and use multiple AI platforms rather than going all-in on one.",
        ],
      },
      {
        heading: "Roadmap",
        items: [
          { title: "Local stack", text: "Migrate to fully local and open-source Weaviate instance and embeddings." },
          { title: "Models", text: "Test open-source LLMs." },
          { title: "Capture", text: "Maybe add voice-note transcription." },
        ],
      },
    ],
  },
  {
    path: "/projects/bizzit",
    title: "Bizzit | Isabelle Ulfsdotter",
    description:
      "Bizzit is an AI-powered business memory tool that turns photos or vague business references into structured contact cards.",
    sections: [
      {
        heading: "Bizzit",
        paragraphs: ["An AI-powered business memory tool. Tags: AI, Mobile App, Solo Build."],
      },
      {
        heading: "The Problem",
        paragraphs: [
          "Every time I needed a plumber, a notary, or a restaurant a friend mentioned, I found myself digging through WhatsApp threads, old emails, screenshots, Notes, saved Instagram posts, and half-remembered conversations.",
          "We do not save useful business info when we discover it because entering it properly is tedious. So we end up starting from scratch, asking the same questions again, or settling for whatever Google serves up.",
        ],
      },
      {
        heading: "How I Built It",
        paragraphs: [
          "I wanted capture to feel effortless. Snap a photo of a storefront, and the app uses OCR and geolocation to figure out what business it is. Or type something vague like 'ventura plumber brussels' and an AI agent handles the rest, pulling in addresses, phone numbers, websites, and generating a structured contact card.",
          "The backend runs on Google Cloud with Cloud Run and Firebase, with Weaviate as the vector database for semantic search. The AI layer uses a router and orchestrator agent pattern, experimenting with both Mistral and OpenAI to balance quality and cost.",
        ],
      },
      {
        heading: "What I Am Learning",
        paragraphs: [
          "The photo-to-contact feature genuinely delights people, but delight on first use does not guarantee retention.",
          "User interviews revealed that people are surrounded by others who have information they will eventually need, but they do not know who has it or when they will need it. The desire to share exists, but there is no good moment to share to.",
          "This is an invisible problem. People experience the frustration privately but do not search for solutions online, which makes typical SEO and GEO acquisition tricky.",
        ],
      },
      {
        heading: "Roadmap",
        paragraphs: [
          "Right now I am focused on user acquisition, testing Reddit and Indie Hackers as channels, and exploring Answer Engine Optimization for AI discovery.",
          "Open questions: Is personal organization the right wedge, or should I pivot toward the social and sharing insight? What is the minimum number of saved contacts before search feels valuable?",
        ],
        items: [{ title: "Visit Bizzit", href: "https://bizzit.cloud", text: "Bizzit product website." }],
      },
    ],
  },
  {
    path: "/projects/chromos",
    title: "Chromos | Isabelle Ulfsdotter",
    description:
      "Chromos is a color palette app for getting dressed, combining color similarity, vector search, and graph thinking for wardrobe suggestions.",
    sections: [
      {
        heading: "Chromos",
        paragraphs: ["A color palette app for getting dressed. Tags: Mobile, Graph Database, Color."],
      },
      {
        heading: "The Problem",
        paragraphs: [
          "Chromos is a color palette app for getting dressed. You upload a photo of something you own but struggle to style, and Chromos suggests what to pair it with.",
          "Most people do not lack clothes. They lack confidence combining them. The nothing to wear feeling usually means nothing I know how to put together. Wardrobe apps focus on cataloging what you own; Chromos focuses on helping you actually wear it.",
        ],
      },
      {
        heading: "How I Built It",
        paragraphs: ["Three modes, three risk levels:"],
        items: [
          { title: "Wear it anywhere", text: "Safe, versatile neutrals that work for any context." },
          { title: "Keep the mood", text: "Tonal pairings that honor the garment's character." },
          { title: "Go for it", text: "Unexpected combinations for when you want to commit." },
        ],
      },
      {
        heading: "What I Am Learning",
        paragraphs: [
          "Chromos pushed me into unfamiliar architectural territory. I knew I needed vector search because color similarity is not a lookup, it is a proximity question.",
          "Vector search answers what is similar to this, but it cannot answer what this user could actually wear. That second question is about traversal: user to garments, garments to colors, colors to palettes, palettes to suggested colors, and suggested colors back to garments owned by the same user.",
          "I am learning to think in two modes at once: vectors for what is like this, and graphs for how this connects to that.",
        ],
      },
      {
        heading: "Roadmap",
        paragraphs: [
          "Palettes are the wedge. The real vision is outfit suggestions pulled from your actual wardrobe.",
        ],
        items: [{ title: "Try Chromos", href: "https://www.chromos.app", text: "Chromos product website." }],
      },
    ],
  },
];

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const stripExistingCrawlerContent = (html) =>
  html
    .replace(/\n?\s*<noscript id="crawler-content">[\s\S]*?<\/noscript>\s*\n?/g, "\n")
    .replace(/\n?\s*<script type="application\/ld\+json">[\s\S]*?<\/script>\s*\n?/g, "\n");

const absoluteUrl = (routePath = "/") => `${siteUrl}${routePath === "/" ? "/" : routePath}`;

const renderSection = (section) => {
  const paragraphs = (section.paragraphs ?? [])
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("\n");
  const items = (section.items ?? [])
    .map((item) => {
      const title = item.href
        ? `<a href="${escapeHtml(item.href)}">${escapeHtml(item.title)}</a>`
        : escapeHtml(item.title);
      return `<li><strong>${title}</strong>${item.text ? `: ${escapeHtml(item.text)}` : ""}</li>`;
    })
    .join("\n");
  const list = items ? `<ul>\n${items}\n</ul>` : "";

  return `<section>
<h2>${escapeHtml(section.heading)}</h2>
${paragraphs}
${list}
</section>`;
};

const renderCrawlerContent = (route) => `<noscript id="crawler-content">
<div>
<header>
<p><a href="/">Isabelle Ulfsdotter</a></p>
<nav aria-label="Primary">
<a href="/#about">About</a>
<a href="/#work">Work</a>
<a href="/#contact">Contact</a>
<a href="/projects/hal">HAL</a>
<a href="/projects/bizzit">Bizzit</a>
<a href="/projects/chromos">Chromos</a>
</nav>
</header>
<main>
${route.sections.map(renderSection).join("\n")}
</main>
<footer>
<p>Based in Brussels. Copyright ${currentYear} Isabelle Ulfsdotter.</p>
</footer>
</div>
</noscript>`;

const setTag = (html, pattern, replacement) =>
  pattern.test(html) ? html.replace(pattern, replacement) : html.replace("</head>", `${replacement}\n</head>`);

const renderJsonLd = (route) => {
  const isHome = route.path === "/";
  const jsonLd = isHome
    ? {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Isabelle Ulfsdotter",
        url: siteUrl,
        jobTitle: "Product leader",
        address: { "@type": "PostalAddress", addressLocality: "Brussels", addressCountry: "Belgium" },
        sameAs: ["https://www.linkedin.com/in/isabelle-ulfsdotter-netus/"],
        knowsAbout: ["Product management", "AI products", "Data strategy", "MCP", "RAG", "Mobile apps"],
      }
    : {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: route.sections[0].heading,
        headline: route.title,
        description: route.description,
        url: absoluteUrl(route.path),
        author: { "@type": "Person", name: "Isabelle Ulfsdotter", url: siteUrl },
      };

  return `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
};

const applyRouteMetadata = (html, route) => {
  const canonical = absoluteUrl(route.path);
  let next = stripExistingCrawlerContent(html);

  next = setTag(next, /<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`);
  next = setTag(
    next,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
  );
  next = setTag(
    next,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`,
  );
  next = setTag(next, /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escapeHtml(route.title)}" />`);
  next = setTag(
    next,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
  );
  next = setTag(next, /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`);
  next = setTag(
    next,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
  );
  next = setTag(next, /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${canonical}" />`);

  return next.replace('<div id="root"></div>', `${renderCrawlerContent(route)}\n    <div id="root"></div>\n    ${renderJsonLd(route)}`);
};

const templatePath = path.join("dist", "index.html");
const template = await readFile(templatePath, "utf8");

for (const route of routes) {
  const html = applyRouteMetadata(template, route);
  if (route.path === "/") {
    await writeFile(path.join("dist", "index.html"), html);
  } else {
    const outputPath = path.join("dist", `${route.path}.html`);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
await writeFile(path.join("dist", "sitemap.xml"), sitemap);

const llms = `# Isabelle Ulfsdotter

Product leader and builder based in Brussels.

## Core Pages

- [Home](${siteUrl}/): Product leadership profile and project overview.
- [HAL](${siteUrl}/projects/hal): Personal knowledge system with semantic search, MCP, RAG, and data sovereignty.
- [Bizzit](${siteUrl}/projects/bizzit): AI-powered business memory tool that turns photos or vague references into structured contact cards.
- [Chromos](${siteUrl}/projects/chromos): Color palette app for getting dressed, using vector search and graph thinking.

## Contact

- [LinkedIn](https://www.linkedin.com/in/isabelle-ulfsdotter-netus/)
`;
await writeFile(path.join("dist", "llms.txt"), llms);
