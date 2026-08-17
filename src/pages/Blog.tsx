import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { formatPostDate, getAllPosts } from "@/lib/blog";

const Blog = () => {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 gradient-sky">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-foreground/30" />
            <span className="font-display text-sm tracking-[0.3em] text-foreground/70 uppercase">
              Writing
            </span>
            <div className="h-px w-12 bg-foreground/30" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-light tracking-wider text-foreground mb-6">
            Notes & Essays
          </h1>
          <p className="font-display text-lg md:text-xl tracking-wide text-muted-foreground max-w-2xl mx-auto">
            Working notes from building products, tinkering with AI, and thinking about product strategy.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">
              First post coming soon.
            </p>
          ) : (
            <ul className="space-y-8">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block bg-card rounded-sm shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="h-1 bg-primary" />
                    <article className="p-8 md:p-10">
                      <div className="flex flex-wrap items-center gap-3 mb-4 font-display text-xs tracking-widest uppercase text-muted-foreground">
                        <time dateTime={post.date}>
                          {formatPostDate(post.date)}
                        </time>
                        {post.tags.length > 0 && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>{post.tags.join(" · ")}</span>
                          </>
                        )}
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl tracking-wide text-foreground mb-4 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {post.description}
                      </p>
                      <span className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase text-primary group-hover:text-accent transition-colors">
                        Read →
                      </span>
                    </article>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
