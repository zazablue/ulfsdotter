import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectHAL = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 gradient-sky">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <h1 className="font-display text-5xl md:text-7xl font-light tracking-wider text-foreground mb-6">
              HAL
            </h1>
            <p className="font-display text-xl md:text-2xl tracking-wide text-muted-foreground mb-8">
              A personal knowledge system with semantic search
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["MCP", "RAG", "Data Sovereignty"].map((tag) => (
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
              Have you ever said, &quot;Nah, I will stick with ChatGPT for project X because it already knows everything&quot;?
            </p>
            <p>
              Every conversation with ChatGPT or Claude is an investment — but it is in their moat, not mine. Each interaction builds context, and more context locks you in.
            </p>
            <p>
              With features like memory, project instructions, and project files, your dependence becomes increasingly entrenched with your provider of choice. Those are valuable capabilities, but switching costs mount over time.
            </p>
            <p>
              MIT&apos;s Danielle Li reminds us that expertise is what distinguishes human capital from other forms of capital — the accumulated wisdom, taste, and problem-solving patterns that make you uniquely valuable. But when that expertise lives in vendor infrastructure, you are renting access to your own cumulated expertise.
            </p>
            <p>
              I would even argue that context is infrastructure, not just a repository of files. Part of the inadvertent genius of LLMs is that they compel you to document tacit knowledge. You want better answers, so you keep feeding it context — context that may have only lived in your head before.
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
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            I built HAL to prove that context sovereignty is technically feasible. The substrate — the cumulated knowledge and processes that expound it — lives with me.
          </p>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="font-display text-primary font-medium">Storage:</span>
              <span className="text-muted-foreground leading-relaxed">
                Local Markdown files (+ Time Machine backups)
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-display text-primary font-medium">Search:</span>
              <span className="text-muted-foreground leading-relaxed">
                Weaviate for semantic and keyword search
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-display text-primary font-medium">Embeddings:</span>
              <span className="text-muted-foreground leading-relaxed">
                Mistral
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-display text-primary font-medium">Interface:</span>
              <span className="text-muted-foreground leading-relaxed">
                MCP server that any compatible AI can connect to
              </span>
            </li>
          </ul>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed mt-8">
            <p>
              When I write new notes, HAL makes them instantly searchable. In a conversation with Claude (or any MCP-compatible AI), HAL enables the AI to search my context repository directly. When a conversation produces genuine insight, I can ask it to save the insight as a note. Most importantly, if the conditions of using one LLM ever worsen, I can connect a different one and continue where I left off.
            </p>
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
          <div className="aspect-video bg-secondary/50 rounded-sm border border-border overflow-hidden">
            <iframe
              src="https://www.loom.com/embed/c37fe70ef7ab400d9d7ef64778eba41f"
              title="HAL demo video"
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
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
              I built this over a weekend and it works pretty well.
            </p>
            <p>
              I know this is not a &quot;practical&quot; solution — certainly not one that most people can easily set up. But it demonstrates that there is a &quot;there&quot; there. The question is not whether these LLMs are useful; they clearly are. I just want to make sure I am not locked into any single one of them.
            </p>
            <p>
              In the meantime, if this resonates: keep your important notes in local files where you can actually own them. Copy valuable AI conversations to your own documents. Use multiple AI platforms rather than going all-in on one. These are not perfect solutions, but they reduce your exposure.
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
            <ul className="space-y-4">
              <li>Migrate to fully local and open-source Weaviate instance and embeddings</li>
              <li>Test open-source LLMs</li>
              <li>Maybe add voice-note transcription</li>
            </ul>
            <p>
              I would love to see a consumer-friendly version of this. Code cleanup and README in progress — will post HAL on GitHub for anyone who wants to explore or contribute.
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

export default ProjectHAL;
