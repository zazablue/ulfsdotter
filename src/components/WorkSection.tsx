import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "HAL",
    company: "Personal Project",
    description: "Testing whether context sovereignty is technically feasible. Every AI conversation is an investment — I wanted to prove it can be in my infrastructure, not theirs.",
    tags: ["MCP", "RAG", "Data Sovereignty"],
    color: "bg-primary",
    link: "/projects/hal",
  },
  {
    title: "BIZZIT",
    company: "Personal Project",
    description: "Snap a picture of a place and we turn it into a contact. I built it to test LLM orchestration and evaluation in production.",
    tags: ["Mobile", "LLM", "AI Evals"],
    color: "bg-accent",
    link: "/projects/bizzit",
    externalUrl: "https://bizzit.cloud",
  },
  {
    title: "CHROMOS",
    company: "Personal Project",
    description: "Shop your wardrobe, not the internet. Upload a garment, Chromos shows you what works together — starting with palettes, evolving into outfit suggestions.",
    tags: ["Mobile", "Graph Database", "Color"],
    color: "bg-turquoise",
    link: "/projects/chromos",
    externalUrl: "https://www.chromos.app",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-24 md:py-32 gradient-sky">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-foreground/30" />
            <span className="font-display text-sm tracking-[0.3em] text-foreground/70 uppercase">
              Projects
            </span>
            <div className="h-px w-12 bg-foreground/30" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-wider text-foreground">
            What I am Building
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group bg-card rounded-sm shadow-card overflow-hidden hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
            >
              {/* Color Bar */}
              <div className={`h-2 ${project.color}`} />
              
              <div className="p-8">
                {/* Company */}
                <span className="font-display text-xs tracking-widest uppercase text-muted-foreground">
                  {project.company}
                </span>
                
                {/* Title */}
                <h3 className="font-display text-xl tracking-wide text-foreground mt-2 mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-display tracking-wider uppercase rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.link ? (
                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase text-primary hover:text-accent transition-colors group/link"
                    >
                      Learn More →
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase text-muted-foreground cursor-default">
                      Coming Soon
                    </span>
                  )}
                  {project.externalUrl ? (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase text-primary hover:text-accent transition-colors"
                    >
                      Visit →
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
