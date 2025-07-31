import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: "TechCorp Logo Design",
      category: "Branding",
      description: "Identidade visual completa para startup de tecnologia com estética cyberpunk e elementos futuristas. Este projeto envolveu a criação de um sistema visual robusto incluindo logotipo, paleta de cores, tipografia e aplicações em diversos materiais.",
      images: [project1, project2, project3],
      tags: ["Logo", "Branding", "Tech"],
      color: "primary"
    },
    {
      id: 2,
      title: "GameUI Dashboard",
      category: "UI/UX Design",
      description: "Interface de usuário para plataforma de jogos com design retrô inspirado nos anos 80. Desenvolvido com foco na experiência do usuário gamer, combinando nostalgia com funcionalidade moderna.",
      images: [project2, project1, project3],
      tags: ["UI/UX", "Gaming", "Interface"],
      color: "secondary"
    },
    {
      id: 3,
      title: "Digital Art Series",
      category: "Arte Digital",
      description: "Série de posters digitais explorando a estética vaporwave e elementos de pixel art. Cada peça da série conta uma história única através de cores vibrantes e composições geométricas complexas.",
      images: [project3, project2, project1],
      tags: ["Arte", "Digital", "Poster"],
      color: "accent"
    },
    {
      id: 4,
      title: "Retro Gaming Magazine",
      category: "Editorial",
      description: "Design editorial para revista especializada em jogos retrô. Layout inspirado nos manuais clássicos dos videogames dos anos 80 e 90, com tipografia pixelizada e ilustrações nostálgicas.",
      images: [project1, project3, project2],
      tags: ["Editorial", "Gaming", "Magazine"],
      color: "primary"
    },
    {
      id: 5,
      title: "Pixel Food App",
      category: "UI/UX Design",
      description: "Interface para aplicativo de delivery com tema 8-bit. Cada elemento foi desenhado pixel por pixel para criar uma experiência gastronômica única e divertida.",
      images: [project2, project3, project1],
      tags: ["UI/UX", "App", "Food"],
      color: "secondary"
    },
    {
      id: 6,
      title: "Synthwave Album Cover",
      category: "Arte Digital",
      description: "Capas de álbum para artista de música eletrônica synthwave. Combinação de elementos neon, grids futuristas e carros esportivos dos anos 80 em composições dinâmicas.",
      images: [project3, project1, project2],
      tags: ["Arte", "Music", "Album"],
      color: "accent"
    },
    {
      id: 7,
      title: "Indie Game Branding",
      category: "Branding",
      description: "Identidade visual completa para estúdio independente de jogos. Logo, personagens mascotes e guidelines para aplicação em diferentes mídias e plataformas digitais.",
      images: [project1, project2, project3],
      tags: ["Branding", "Gaming", "Indie"],
      color: "primary"
    },
    {
      id: 8,
      title: "Virtual Reality Interface",
      category: "UI/UX Design",
      description: "Design de interface para experiência em realidade virtual. Elementos flutuantes, interações gestuais e visual futurista adaptado para o ambiente tridimensional.",
      images: [project2, project1, project3],
      tags: ["UI/UX", "VR", "Interface"],
      color: "secondary"
    },
    {
      id: 9,
      title: "Cyberpunk Poster Series",
      category: "Arte Digital",
      description: "Série de posters promocionais para evento de tecnologia. Estética cyberpunk com elementos de realidade aumentada, hologramas e arquitetura futurista.",
      images: [project3, project2, project1],
      tags: ["Arte", "Poster", "Event"],
      color: "accent"
    }
  ];

  const categories = ["Todos", ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);
    
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const truncateText = (text: string, maxLength: number = 80) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

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

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "cyber" : "outline"}
                size="sm"
                className="font-mono text-xs"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="group bg-background/50 border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden animate-slide-up hover:shadow-neon"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Images Carousel */}
                <div className="relative overflow-hidden">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="cursor-pointer">
                        <img 
                          src={project.images[0]} 
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Image Count Badge */}
                        {project.images.length > 1 && (
                          <div className="absolute top-4 right-4">
                            <span className="px-2 py-1 text-xs font-mono font-bold rounded-none bg-background/80 text-foreground">
                              {project.images.length} fotos
                            </span>
                          </div>
                        )}
                      </div>
                    </DialogTrigger>
                    
                    <DialogContent className="max-w-4xl">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {project.images.map((image, imageIndex) => (
                            <CarouselItem key={imageIndex}>
                              <div className="p-1">
                                <img 
                                  src={image} 
                                  alt={`${project.title} - Imagem ${imageIndex + 1}`}
                                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {project.images.length > 1 && (
                          <>
                            <CarouselPrevious />
                            <CarouselNext />
                          </>
                        )}
                      </Carousel>
                    </DialogContent>
                  </Dialog>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="cyber" className="flex-1">
                            <Eye className="w-4 h-4 mr-2" />
                            Ver
                          </Button>
                        </DialogTrigger>
                        
                        <DialogContent className="max-w-4xl">
                          <Carousel className="w-full">
                            <CarouselContent>
                              {project.images.map((image, imageIndex) => (
                                <CarouselItem key={imageIndex}>
                                  <div className="p-1">
                                    <img 
                                      src={image} 
                                      alt={`${project.title} - Imagem ${imageIndex + 1}`}
                                      className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                                    />
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            {project.images.length > 1 && (
                              <>
                                <CarouselPrevious />
                                <CarouselNext />
                              </>
                            )}
                          </Carousel>
                        </DialogContent>
                      </Dialog>
                      
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
                  
                  <div className="text-muted-foreground text-sm leading-relaxed">
                    <p>
                      {expandedProject === project.id 
                        ? project.description 
                        : truncateText(project.description)
                      }
                    </p>
                    {project.description.length > 80 && (
                      <button
                        onClick={() => setExpandedProject(
                          expandedProject === project.id ? null : project.id
                        )}
                        className="text-primary hover:text-primary/80 transition-colors text-xs font-mono mt-2 underline"
                      >
                        {expandedProject === project.id ? "Ver menos" : "Ver mais"}
                      </button>
                    )}
                  </div>

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

          {/* Show More Button */}
          {filteredProjects.length > 6 && (
            <div className="text-center mt-12 animate-slide-up">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="font-mono"
              >
                {showAll ? "Ver Menos" : `Ver Mais (${filteredProjects.length - 6})`}
              </Button>
            </div>
          )}

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