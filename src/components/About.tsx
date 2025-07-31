import { Card } from "@/components/ui/card";
import { Cpu, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Visual",
      description: "Especializado em identidade visual, branding e arte digital com foco em estética moderna."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Tech Design",
      description: "Domínio em UI/UX, design de interfaces e prototipagem para experiências digitais."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Criatividade",
      description: "Combinação única de criatividade artística com precisão técnica e atenção aos detalhes."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
              <span className="text-primary">[</span>
              <span className="text-foreground">SOBRE</span>
              <span className="text-primary">]</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary font-mono">
                Olá, eu sou Alex Pixel!
              </h3>
              
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Designer gráfico com mais de <span className="text-accent font-bold">5 anos</span> de experiência 
                  criando identidades visuais marcantes e experiências digitais inovadoras.
                </p>
                
                <p>
                  Minha paixão pela estética <span className="text-primary font-bold">retro-futurista</span> me 
                  levou a desenvolver um estilo único que combina elementos clássicos do design pixel art 
                  com tendências modernas de interface.
                </p>
                
                <p>
                  Trabalho com empresas de tecnologia, startups e artistas independentes, sempre buscando 
                  criar soluções visuais que <span className="text-synthpink font-bold">impactem</span> e 
                  <span className="text-secondary font-bold"> inspirem</span>.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary font-mono">50+</div>
                  <div className="text-sm text-muted-foreground">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary font-mono">5+</div>
                  <div className="text-sm text-muted-foreground">Anos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent font-mono">30+</div>
                  <div className="text-sm text-muted-foreground">Clientes</div>
                </div>
              </div>
            </div>

            {/* Skills Cards */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-background/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-neon animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2 font-mono">
                        {skill.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;