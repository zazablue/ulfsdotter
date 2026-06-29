import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectBizzit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 gradient-sky">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <h1 className="font-display text-5xl md:text-7xl font-light tracking-wider text-foreground mb-6">
              BIZZIT
            </h1>
            <p className="font-display text-xl md:text-2xl tracking-wide text-muted-foreground mb-8">
              An AI-powered business memory tool
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["AI", "Mobile App", "Solo Build"].map((tag) => (
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
              Every time I needed a plumber, a notary, or that restaurant a friend mentioned 
              at school pickup, I found myself digging through WhatsApp threads, old emails, 
              half-remembered conversations. The recommendation existed somewhere—I just 
              could not find it when I actually needed it.
            </p>
            <p>
              The real frustration: I knew someone had told me about a great option. But I 
              had not saved it properly. Or I had, scattered across Notes, screenshots, saved 
              Instagram posts, and a dozen other places that do not talk to each other.
            </p>
            <p>
              We do not save useful business info when we discover it because entering it 
              properly is tedious. So we end up starting from scratch, asking the same 
              questions again, or settling for whatever Google serves up.
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
            <p>
              I wanted capture to feel effortless. Snap a photo of a storefront, and the app 
              uses OCR and geolocation to figure out what business it is. Or just type 
              something vague like 'ventura plumber brussels'—an AI agent handles the rest, 
              pulling in addresses, phone numbers, websites, and generating a structured 
              contact card.
            </p>
            <p>
              The backend runs on Google Cloud (Cloud Run, Firebase) with Weaviate as the 
              vector database for semantic search. The AI layer uses a router/orchestrator 
              agent pattern—I have been experimenting with both Mistral and OpenAI to balance 
              quality and cost.
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
              The photo-to-contact feature genuinely delights people—one early tester called it &quot;magic.&quot; But delight on first use doesn&apos;t guarantee retention.
            </p>
            <p>
              User interviews revealed something unexpected about the core problem. One woman described being thrilled with her mover, but had no natural way to share it. She doesn&apos;t post on Facebook (lurker, not sharer), and broadcasting it in WhatsApp groups would feel strange and unsolicited. Yet inevitably, someone in her network will move—and won&apos;t know to ask her.
            </p>
            <p>
              This is the real tension: we&apos;re surrounded by people who have information we&apos;ll eventually need, but we don&apos;t know who has it or when we&apos;ll need it. The desire to share exists, but there&apos;s no good moment to share to. If only we could search each other&apos;s brains asynchronously.
            </p>
            <p>
              Also learned: this is an &quot;invisible problem.&quot; People experience the frustration privately but don&apos;t search for solutions online—which makes typical SEO/GEO acquisition tricky.
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
              Right now I am focused on user acquisition—testing Reddit and Indie Hackers as 
              channels, exploring Answer Engine Optimization for AI discovery.
            </p>
            <p>
              Open questions I am sitting with: Is 'personal organization' the right wedge, 
              or should I pivot toward the social/sharing insight? What is the minimum number 
              of saved contacts before search feels valuable?
            </p>
            <p>
              I have given myself 12 weeks to get signal. If it is working, I will double down. 
              If not, I will take the learnings and ship the next thing.
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

export default ProjectBizzit;
