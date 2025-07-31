import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TechCorp Logo Design",
      category: "Branding",
      description: "Identidade visual completa para startup de tecnologia com estética cyberpunk e elementos futuristas.",
      image: project1,
      tags: ["Logo", "Branding", "Tech"],
      color: "primary"
    },
    {
      id: 2,
      title: "GameUI Dashboard",
      category: "UI/UX Design",
      description: "Interface de usuário para plataforma de jogos com design retrô inspirado nos anos 80.",
      image: project2,
      tags: ["UI/UX", "Gaming", "Interface"],
      color: "secondary"
    },
    {
      id: 3,
      title: "Digital Art Series",
      category: "Arte Digital",
      description: "Série de posters digitais explorando a estética vaporwave e elementos de pixel art.",
      image: project3,
      tags: ["Arte", "Digital", "Poster"],
      color: "accent"
    }
  ];

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
              <span className="text-secondary">[</span>
              <span className="text-foreground">PROJETOS</span>
              <span className="text-secondary">]</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-retro mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes combinando criatividade e inovação tecnológica
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group bg-background/50 border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden animate-slide-up hover:shadow-neon"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" variant="cyber" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        Ver
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-mono font-bold rounded-none bg-${project.color} text-${project.color}-foreground shadow-retro`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground font-mono border border-border rounded-none"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-slide-up">
            <p className="text-muted-foreground mb-6 font-mono">
              Gostou do que viu? Vamos criar algo incrível juntos!
            </p>
            <Button 
              variant="synthpink" 
              size="lg"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Iniciar Projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;