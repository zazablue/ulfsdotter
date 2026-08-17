import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { formatPostDate, getPostBySlug } from "@/lib/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 gradient-sky">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-foreground/30" />
              <time
                dateTime={post.date}
                className="font-display text-sm tracking-[0.3em] text-foreground/70 uppercase"
              >
                {formatPostDate(post.date)}
              </time>
              <div className="h-px w-12 bg-foreground/30" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-light tracking-wider text-foreground mb-6 text-balance">
              {post.title}
            </h1>
            {post.description && (
              <p className="font-display text-xl md:text-2xl tracking-wide text-muted-foreground mb-8 text-balance">
                {post.description}
              </p>
            )}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-primary/10 text-primary text-sm font-display tracking-wider uppercase rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <article
            className="
              prose prose-lg md:prose-xl max-w-none
              prose-headings:font-display prose-headings:tracking-wide prose-headings:text-foreground prose-headings:font-normal
              prose-h2:mt-14 prose-h2:mb-6 prose-h2:text-3xl md:prose-h2:text-4xl
              prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-2xl
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent prose-a:transition-colors
              prose-strong:text-foreground prose-strong:font-medium
              prose-em:text-foreground/90
              prose-blockquote:border-l-primary prose-blockquote:text-foreground/80 prose-blockquote:font-light prose-blockquote:not-italic
              prose-code:text-primary prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
              prose-code:bg-secondary/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-sm
              prose-pre:bg-foreground/5 prose-pre:border prose-pre:border-border prose-pre:rounded-sm
              prose-img:rounded-sm prose-img:shadow-card
              prose-hr:border-border prose-hr:my-14
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-li:marker:text-primary/60
            "
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.body}
            </ReactMarkdown>
          </article>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase text-primary hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to writing
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
