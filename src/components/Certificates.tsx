import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, ExternalLink } from "lucide-react";
import certificateIcon from "@/assets/certificate-icon.jpg";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Adobe Certified Expert",
      institution: "Adobe Systems",
      date: "2023",
      description: "Certificação avançada em Creative Suite (Photoshop, Illustrator, After Effects)",
      type: "Profissional",
      color: "primary"
    },
    {
      id: 2,
      title: "UI/UX Design Specialization",
      institution: "Google Design",
      date: "2022",
      description: "Especialização completa em Design de Experiência do Usuário e Interface",
      type: "Especialização",
      color: "secondary"
    },
    {
      id: 3,
      title: "Graphic Design Masterclass",
      institution: "Domestika",
      date: "2022",
      description: "Curso avançado de design gráfico com foco em identidade visual e branding",
      type: "Curso",
      color: "accent"
    },
    {
      id: 4,
      title: "Motion Graphics Pro",
      institution: "School of Motion",
      date: "2021",
      description: "Certificação em motion graphics e animação para mídias digitais",
      type: "Profissional",
      color: "synthpink"
    }
  ];

  return (
    <section id="certificados" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
              <span className="text-accent">[</span>
              <span className="text-foreground">CERTIFICADOS</span>
              <span className="text-accent">]</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-matrix mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Formação contínua e certificações que garantem expertise e atualização constante
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card 
                key={cert.id}
                className="group p-6 bg-background/50 border-primary/20 hover:border-accent/50 transition-all duration-500 animate-slide-up hover:shadow-neon"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  {/* Certificate Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-none overflow-hidden border-2 border-accent/50 group-hover:border-accent transition-colors">
                      <img 
                        src={certificateIcon} 
                        alt="Certificado"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold font-mono text-foreground group-hover:text-accent transition-colors">
                        {cert.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors cursor-pointer" />
                    </div>

                    <p className="text-primary font-mono text-sm mb-2">
                      {cert.institution}
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-muted-foreground text-xs">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>

                      <Badge 
                        variant="outline" 
                        className={`text-${cert.color} border-${cert.color}/50 bg-${cert.color}/10 font-mono text-xs`}
                      >
                        <Award className="w-3 h-3 mr-1" />
                        {cert.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16 animate-slide-up">
            <div className="bg-gradient-cyber p-8 rounded-none border border-primary/30">
              <h3 className="text-2xl font-bold font-mono text-background mb-4">
                Educação Contínua
              </h3>
              <p className="text-background/90 leading-relaxed max-w-2xl mx-auto">
                Acredito que o aprendizado contínuo é fundamental no design. Estou sempre buscando 
                novas técnicas, tendências e tecnologias para oferecer soluções inovadoras e 
                atualizadas aos meus clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;