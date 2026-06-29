const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary/40" />
            <span className="font-display text-sm tracking-[0.3em] text-muted-foreground uppercase">
              About
            </span>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-wider text-foreground">
            Who I Am
          </h2>
        </div>

        {/* Content Grid */}
        <div className="max-w-3xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a product leader. 10+ years.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Like most people, I got here by accident. When I realized what I had been doing was actually called &quot;product management,&quot; I was delighted — wait, this is a real job? Not just something I cobbled together? It fit perfectly: new domains, new problems, ground always shifting beneath you.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              But I am an engineer at heart. My first CS class was the first time anything made me think:{" "}
              <i>this is it - this is the funnest thing I have ever done</i>. I am still grateful my then-friend, now-husband pushed me into it.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              So I keep building on the side. With agentic coding and backend-as-a-service, it has never been easier to turn ideas into working software.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By day, I lead product and data strategy at Izix — 40k users daily. By night, I tinker.{" "}
              <a
                href="https://www.linkedin.com/in/isabelle-ulfsdotter-netus/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-accent transition-colors"
              >
                See CV →
              </a>
            </p>
            <div className="pt-4">
              <div className="h-0.5 w-20 bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
