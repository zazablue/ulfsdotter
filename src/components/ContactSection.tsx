import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-background/30" />
            <span className="font-display text-sm tracking-[0.3em] text-background/70 uppercase">
              Contact
            </span>
            <div className="h-px w-12 bg-background/30" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-background mb-6">
            Let's Connect
          </h2>
          
          <p className="text-lg text-background/80 leading-relaxed mb-10 max-w-xl mx-auto">
            I am always happy to connect with fellow builders and tinkerers.
          </p>

          {/* LinkedIn CTA */}
          <a
            href="https://www.linkedin.com/in/isabelle-ulfsdotter-netus/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              size="xl" 
              className="bg-turquoise text-primary-foreground hover:bg-turquoise-light"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </Button>
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="https://www.linkedin.com/in/isabelle-ulfsdotter-netus/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-sm border border-background/30 flex items-center justify-center text-background/70 hover:bg-background hover:text-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
