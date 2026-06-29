import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-palm-springs.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/10 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Geometric decorative element */}
          <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-up">
            <div className="h-px w-12 bg-primary-foreground/60" />
            <span className="font-display text-sm tracking-[0.3em] text-primary-foreground/80 uppercase">
              Builder & Tinkerer
            </span>
            <div className="h-px w-12 bg-primary-foreground/60" />
          </div>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] text-primary-foreground mb-2 opacity-0 animate-fade-up animation-delay-100">
            Isabelle Ulfsdotter
          </h1>

          {/* Name meaning */}
          <p className="text-sm md:text-base text-primary-foreground/70 italic font-light mb-8 opacity-0 animate-fade-up animation-delay-150">
            Swedish for 'daughter of Ulf' — from Old Norse úlfr, meaning wolf.
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 font-light leading-relaxed max-w-xl mx-auto mb-10 opacity-0 animate-fade-up animation-delay-200">
            I learn by building. These are my projects and the ideas behind them.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animation-delay-300">
            <Button variant="hero" size="lg">
              See What I am Building
            </Button>
            <Button variant="heroSolid" size="lg">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-400">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        >
          <span className="font-display text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>

      {/* Geometric corner accents */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-primary-foreground/20 opacity-0 animate-fade-up animation-delay-300" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-r-2 border-b-2 border-primary-foreground/20 opacity-0 animate-fade-up animation-delay-300" />
    </section>
  );
};

export default HeroSection;
