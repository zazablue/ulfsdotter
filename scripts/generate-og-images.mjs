import { mkdir, readFile, writeFile, readdir } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const width = 1200;
const height = 630;

// Palette (hsl values match src/index.css)
const teal = "hsl(175, 45%, 42%)";
const tealDark = "hsl(175, 50%, 30%)";
const terracotta = "hsl(355, 35%, 65%)";
const cream = "hsl(30, 20%, 96%)";
const creamMuted = "hsla(30, 20%, 96%, 0.75)";

// Load Josefin Sans fonts (from @fontsource; .woff is compatible with satori)
const fontDir = path.join("node_modules", "@fontsource", "josefin-sans", "files");
const [josefinLight, josefinRegular, josefinMedium] = await Promise.all([
  readFile(path.join(fontDir, "josefin-sans-latin-300-normal.woff")),
  readFile(path.join(fontDir, "josefin-sans-latin-400-normal.woff")),
  readFile(path.join(fontDir, "josefin-sans-latin-500-normal.woff")),
]);

const fonts = [
  { name: "Josefin Sans", data: josefinLight, weight: 300, style: "normal" },
  { name: "Josefin Sans", data: josefinRegular, weight: 400, style: "normal" },
  { name: "Josefin Sans", data: josefinMedium, weight: 500, style: "normal" },
];

// Tiny hyperscript for satori (avoids JSX in .mjs)
const h = (type, props = {}, ...children) => {
  const filtered = children.flat().filter((c) => c !== null && c !== undefined && c !== false);
  const finalProps = { ...props };
  if (filtered.length === 1) finalProps.children = filtered[0];
  else if (filtered.length > 1) finalProps.children = filtered;
  return { type, props: finalProps };
};

const template = ({ eyebrow, title, footer }) =>
  h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        fontFamily: "Josefin Sans",
        // Sharp diagonal split: teal top-left, terracotta bottom-right
        backgroundImage: `linear-gradient(135deg, ${teal} 0%, ${teal} 58%, ${terracotta} 58%, ${terracotta} 100%)`,
      },
    },
    // Subtle geometric corner accent (top-left)
    h("div", {
      style: {
        display: "flex",
        position: "absolute",
        top: 60,
        left: 60,
        width: 44,
        height: 44,
        borderLeft: `2px solid ${creamMuted}`,
        borderTop: `2px solid ${creamMuted}`,
      },
    }),
    // Subtle geometric corner accent (bottom-right)
    h("div", {
      style: {
        display: "flex",
        position: "absolute",
        bottom: 60,
        right: 60,
        width: 44,
        height: 44,
        borderRight: `2px solid ${creamMuted}`,
        borderBottom: `2px solid ${creamMuted}`,
      },
    }),
    // Author mark (top-left, above content)
    h(
      "div",
      {
        style: {
          position: "absolute",
          top: 68,
          left: 130,
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 20,
          letterSpacing: 6,
          color: cream,
          fontWeight: 500,
          textTransform: "uppercase",
        },
      },
      "Isabelle Ulfsdotter",
    ),
    // Main content stack
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          padding: "0 100px",
          gap: 24,
        },
      },
      eyebrow
        ? h(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 20,
                fontSize: 22,
                letterSpacing: 8,
                color: creamMuted,
                textTransform: "uppercase",
                fontWeight: 400,
              },
            },
            h("div", { style: { width: 48, height: 1, backgroundColor: creamMuted } }),
            eyebrow,
          )
        : null,
      h(
        "div",
        {
          style: {
            fontSize: title.length > 60 ? 68 : title.length > 40 ? 84 : 104,
            fontWeight: 300,
            letterSpacing: 4,
            color: cream,
            lineHeight: 1.05,
            maxWidth: 1000,
            display: "flex",
          },
        },
        title,
      ),
      footer
        ? h(
            "div",
            {
              style: {
                display: "flex",
                fontSize: 22,
                letterSpacing: 6,
                color: creamMuted,
                textTransform: "uppercase",
                fontWeight: 400,
                marginTop: 12,
              },
            },
            footer,
          )
        : null,
    ),
  );

const render = async (options, outPath) => {
  const svg = await satori(template(options), { width, height, fonts });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: width } }).render().asPng();
  await mkdir(path.dirname(outPath), { recursive: true });
  await writeFile(outPath, png);
};

const formatPostDate = (dateString) => {
  if (!dateString) return "";
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return dateString;
  return d
    .toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    .toUpperCase();
};

// ---------- Which images to generate ----------

const outDir = path.join("dist", "og");

// Site-level images
const staticImages = [
  { eyebrow: "Portfolio", title: "Isabelle Ulfsdotter", footer: "Product · Builder · Brussels", slug: "home" },
  { eyebrow: "Writing", title: "Notes & Essays", footer: "Isabelle Ulfsdotter", slug: "blog" },
  { eyebrow: "Project", title: "HAL", footer: "Personal knowledge system", slug: "project-hal" },
  { eyebrow: "Project", title: "Bizzit", footer: "AI business memory", slug: "project-bizzit" },
  { eyebrow: "Project", title: "Chromos", footer: "Color palette for dressing", slug: "project-chromos" },
];

for (const img of staticImages) {
  await render(img, path.join(outDir, `${img.slug}.png`));
}

// Blog post images (skip if frontmatter defines a custom ogImage)
const contentDir = path.join("content", "blog");
let files = [];
try {
  files = await readdir(contentDir);
} catch {
  // no posts dir
}

for (const file of files) {
  if (!file.endsWith(".md")) continue;
  const raw = await readFile(path.join(contentDir, file), "utf8");
  const { data } = matter(raw);
  if (data.draft) continue;
  if (typeof data.ogImage === "string") continue; // per-post override, don't overwrite

  const slug = typeof data.slug === "string" ? data.slug : file.replace(/\.md$/, "");
  await render(
    {
      eyebrow: "Writing",
      title: String(data.title ?? "Untitled"),
      footer: formatPostDate(String(data.date ?? "")),
      slug,
    },
    path.join(outDir, `${slug}.png`),
  );
}

console.log(
  `[generate-og-images] Wrote ${staticImages.length} site images + ${files.filter((f) => f.endsWith(".md")).length} post images to ${outDir}`,
);
