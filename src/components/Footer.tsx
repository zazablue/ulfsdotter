const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground border-t border-background/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-sm tracking-wider text-background/50">
            © {currentYear} Isabelle Ulfsdotter. All rights reserved.
          </p>
          <p className="text-sm text-background/40">
            Based in Brussels
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
