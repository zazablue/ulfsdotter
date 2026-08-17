export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  ogImage?: string;
  draft?: boolean;
  body: string;
};

const rawFiles = import.meta.glob("/content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const parseSlug = (filePath: string) =>
  filePath.split("/").pop()!.replace(/\.md$/, "");

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

const parseFrontmatter = (raw: string): { data: Record<string, unknown>; content: string } => {
  const match = raw.match(FRONTMATTER_RE);
  if (!match) return { data: {}, content: raw };
  const [, fm, content] = match;
  const data: Record<string, unknown> = {};
  const lines = fm.split(/\r?\n/);
  let currentKey: string | null = null;
  for (const line of lines) {
    if (!line.trim()) continue;
    const listMatch = line.match(/^\s+-\s+(.+)$/);
    if (listMatch && currentKey) {
      const value = listMatch[1].trim().replace(/^["'](.*)["']$/, "$1");
      const existing = data[currentKey];
      if (Array.isArray(existing)) existing.push(value);
      else data[currentKey] = [value];
      continue;
    }
    const kvMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!kvMatch) continue;
    const [, key, rawValue] = kvMatch;
    currentKey = key;
    const value = rawValue.trim();
    if (!value) {
      data[key] = [];
    } else if (value === "true" || value === "false") {
      data[key] = value === "true";
    } else {
      data[key] = value.replace(/^["'](.*)["']$/, "$1");
    }
  }
  return { data, content };
};

const parsePost = (filePath: string, raw: string): Post => {
  const { data, content } = parseFrontmatter(raw);
  return {
    slug: typeof data.slug === "string" ? data.slug : parseSlug(filePath),
    title: String(data.title ?? "Untitled"),
    date: String(data.date ?? ""),
    description: String(data.description ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    ogImage: typeof data.ogImage === "string" ? data.ogImage : undefined,
    draft: Boolean(data.draft),
    body: content,
  };
};

const allPosts: Post[] = Object.entries(rawFiles)
  .map(([filePath, raw]) => parsePost(filePath, raw))
  .filter((post) => import.meta.env.DEV || !post.draft)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getAllPosts = () => allPosts;

export const getPostBySlug = (slug: string) =>
  allPosts.find((post) => post.slug === slug);

export const formatPostDate = (date: string) => {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
