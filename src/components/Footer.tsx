import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="text-xl font-bold font-mono">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">Alex</span>
              <span className="text-secondary">Pixel</span>
              <span className="text-primary">/&gt;</span>
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-2 text-muted-foreground text-sm font-mono">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-synthpink animate-pixel-pulse" />
              <Code className="w-4 h-4 text-primary" />
              <span>e muito</span>
              <Coffee className="w-4 h-4 text-accent" />
            </div>

            {/* Copyright */}
            <div className="text-muted-foreground text-sm font-mono">
              © 2024 Alex Pixel. Todos os direitos reservados.
            </div>
          </div>

          {/* Back to top */}
          <div className="text-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-primary hover:text-primary-glow transition-colors font-mono text-sm animate-bounce"
            >
              ↑ Voltar ao topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;