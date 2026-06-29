import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectChromos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 gradient-sky">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <h1 className="font-display text-5xl md:text-7xl font-light tracking-wider text-foreground mb-6">
              CHROMOS
            </h1>
            <p className="font-display text-xl md:text-2xl tracking-wide text-muted-foreground mb-8">
              A color palette app for getting dressed
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Mobile", "Graph Database", "Color"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-primary/10 text-primary text-sm font-display tracking-wider uppercase rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-foreground/30" />
            <span className="font-display text-sm tracking-[0.3em] text-foreground/70 uppercase">
              The Problem
            </span>
          </div>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Chromos is a color palette app for getting dressed. You upload a photo of something you own but struggle to style—an impulse purchase, a bold print, a color you love but never wear—and Chromos suggests what to pair it with.
            </p>
            <p>
              The problem: Most people do not lack clothes. They lack confidence combining them. The &quot;nothing to wear&quot; feeling usually means &quot;nothing I know how to put together.&quot; Wardrobe apps focus on cataloging what you own; Chromos focuses on helping you actually wear it.
            </p>
          </div>
        </div>
      </section>

      {/* How I Built It */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-foreground/30" />
            <span className="font-display text-sm tracking-[0.3em] text-foreground/70 uppercase">
              The Approach
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl tracking-wide text-foreground mb-8">
            How I Built It
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>Three modes, three risk levels:</p>
            <ul className="space-y-4">
              <li>
                <span className="font-display text-primary font-medium">Wear it anywhere</span> — safe, versatile neutrals that work for any context
              </li>
              <li>
                <span className="font-display text-primary font-medium">Keep the mood</span> — tonal pairings that honor the garment's character
              </li>
              <li>
                <span className="font-display text-primary font-medium">Go for it</span> — unexpected combinations for when you want to commit (think Patricia Field styling a fuchsia sweater with orange)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-foreground/30" />
            <span className="font-display text-sm tracking-[0.3em] text-foreground/70 uppercase">
              Demo
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl tracking-wide text-foreground mb-8">
            See It In Action
          </h2>
          <div className="aspect-video bg-secondary/50 rounded-sm flex items-center justify-center border border-border">
            <p className="font-display text-muted-foreground tracking-wider">
              Video coming soon
            </p>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-foreground/30" />
            <span className="font-display text-sm tracking-[0.3em] text-foreground/70 uppercase">
              Learnings
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl tracking-wide text-foreground mb-8">
            What I am Learning
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Chromos pushed me into unfamiliar architectural territory. Early on, I knew I needed vector search—color similarity isn&apos;t a lookup, it&apos;s a proximity question. &quot;Is this navy close enough to that navy?&quot; requires embedding colors in a space where distance is meaningful. Relational databases can&apos;t do this, so I built the palette matching layer on Weaviate.
            </p>
            <p>
              But vector search only answers &quot;what&apos;s similar to this?&quot; It can&apos;t answer &quot;what could this user actually wear?&quot;
            </p>
            <p>
              That second question isn&apos;t about similarity—it&apos;s about traversal. User → owns → garments → contain → colors → pair with → palettes → suggest → colors → present in → other garments → owned by → same user. That&apos;s a graph problem: nodes and edges, not nearest neighbors.
            </p>
            <p>
              So I&apos;m learning to think in two modes at once: vectors for &quot;what&apos;s like this?&quot; and graphs for &quot;how does this connect to that?&quot;
            </p>
          </div>
        </div>
      </section>

      {/* What is Next */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-foreground/30" />
            <span className="font-display text-sm tracking-[0.3em] text-foreground/70 uppercase">
              Roadmap
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl tracking-wide text-foreground mb-8">
            What is Next
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Where it's going: Palettes are the wedge. The real vision is outfit suggestions pulled from your actual wardrobe.
            </p>
            <p>
              <a
                href="https://www.chromos.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-accent transition-colors"
              >
                Try it →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-12 md:py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link 
            to="/#work" 
            className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase text-primary hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to projects
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectChromos;
