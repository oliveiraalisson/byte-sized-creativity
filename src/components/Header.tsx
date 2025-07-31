import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold font-mono">
            <span className="text-primary animate-neon-glow">&lt;</span>
            <span className="text-foreground">Alex</span>
            <span className="text-secondary">Pixel</span>
            <span className="text-primary animate-neon-glow">/&gt;</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary"
            >
              Sobre
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('projetos')}
              className="text-foreground hover:text-secondary"
            >
              Projetos
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('certificados')}
              className="text-foreground hover:text-accent"
            >
              Certificados
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-synthpink"
            >
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 animate-slide-up">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('sobre')}
              className="w-full text-left justify-start"
            >
              Sobre
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('projetos')}
              className="w-full text-left justify-start"
            >
              Projetos
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('certificados')}
              className="w-full text-left justify-start"
            >
              Certificados
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contato')}
              className="w-full text-left justify-start"
            >
              Contato
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;