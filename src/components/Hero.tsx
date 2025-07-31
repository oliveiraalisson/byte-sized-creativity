import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const titles = ["Designer Gráfico", "Produtor Cultural", "Diretor de Arte", "Criativo Visual"];
  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentFullTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentFullTitle.length) {
        setCurrentTitle(currentFullTitle.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentTitle(currentFullTitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentFullTitle.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, titles]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      {/* Floating Pixels */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary animate-float shadow-neon" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-secondary animate-float shadow-neon" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-accent animate-float shadow-neon" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-synthpink animate-float shadow-neon" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-slide-up">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold font-mono">
              <span className="text-primary animate-neon-glow">MORENO</span>
              <br />
              <span className="text-secondary">MOTA</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground font-mono h-8">
              <span className="text-accent">[</span>
              <span>{currentTitle}</span>
              <span className="animate-pulse">|</span>
              <span className="text-accent">]</span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 leading-relaxed">
            Criando experiências visuais únicas com estética{" "}
            <span className="text-primary font-bold">retro-futurista</span> e
            design <span className="text-secondary font-bold">pixel-perfect</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="cyber"
              size="lg"
              onClick={() => scrollToSection('projetos')}
              className="min-w-48"
            >
              <ExternalLink className="mr-2" size={18} />
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contato')}
              className="min-w-48"
            >
              <Download className="mr-2" size={18} />
              Contato
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;