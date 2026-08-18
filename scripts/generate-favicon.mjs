// One-shot favicon generator. Run manually when changing the icon design.
// Output goes to public/ and is committed to git; Vite copies it to dist/ at build.
//
//   node scripts/generate-favicon.mjs

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import pngToIco from "png-to-ico";

const teal = "hsl(175, 45%, 42%)";
const cream = "hsl(30, 20%, 96%)";

const fontDir = path.join("node_modules", "@fontsource", "josefin-sans", "files");
const josefinMedium = await readFile(path.join(fontDir, "josefin-sans-latin-500-normal.woff"));

const size = 512;

const tree = {
  type: "div",
  props: {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: teal,
    },
    children: {
      type: "div",
      props: {
        style: {
          fontFamily: "Josefin Sans",
          fontSize: 400,
          fontWeight: 500,
          color: cream,
          lineHeight: 1,
          display: "flex",
          marginTop: 40,
        },
        children: "U",
      },
    },
  },
};

const svg = await satori(tree, {
  width: size,
  height: size,
  fonts: [{ name: "Josefin Sans", data: josefinMedium, weight: 500, style: "normal" }],
});

await writeFile(path.join("public", "favicon.svg"), svg);

const render = (targetSize) =>
  new Resvg(svg, { fitTo: { mode: "width", value: targetSize } }).render().asPng();

await writeFile(path.join("public", "apple-touch-icon.png"), render(180));

const ico = await pngToIco([render(32), render(48)]);
await writeFile(path.join("public", "favicon.ico"), ico);

console.log("[generate-favicon] Wrote public/favicon.svg, favicon.ico, apple-touch-icon.png");
