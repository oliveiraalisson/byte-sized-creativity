import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio
    toast({
      title: "Mensagem Enviada! ✨",
      description: "Obrigado pelo contato! Responderemos em breve.",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "#",
      color: "primary"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "#",
      color: "secondary"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      url: "#",
      color: "synthpink"
    }
  ];

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
              <span className="text-synthpink">[</span>
              <span className="text-foreground">CONTATO</span>
              <span className="text-synthpink">]</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-retro mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Pronto para criar algo incrível? Entre em contato e vamos transformar suas ideias em realidade!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-background/50 border-primary/20 animate-slide-up">
              <h3 className="text-2xl font-bold font-mono text-foreground mb-6">
                Envie uma Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-mono">
                      Nome *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-background/50 border-border focus:border-primary rounded-none"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground font-mono">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-background/50 border-border focus:border-primary rounded-none"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground font-mono">
                    Assunto *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-background/50 border-border focus:border-primary rounded-none"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-mono">
                    Mensagem *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2 bg-background/50 border-border focus:border-primary rounded-none resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cyber" 
                  size="lg" 
                  className="w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Contact Details */}
              <Card className="p-8 bg-background/50 border-secondary/20">
                <h3 className="text-2xl font-bold font-mono text-foreground mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 border border-primary/50 flex items-center justify-center rounded-none">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-mono text-foreground font-medium">Email</p>
                      <p className="text-muted-foreground">alex.pixel@email.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/20 border border-secondary/50 flex items-center justify-center rounded-none">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-mono text-foreground font-medium">Telefone</p>
                      <p className="text-muted-foreground">+55 (11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/20 border border-accent/50 flex items-center justify-center rounded-none">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-mono text-foreground font-medium">Localização</p>
                      <p className="text-muted-foreground">São Paulo, Brasil</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-8 bg-background/50 border-synthpink/20">
                <h3 className="text-xl font-bold font-mono text-foreground mb-6">
                  Redes Sociais
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex flex-col items-center p-4 border border-${social.color}/50 bg-${social.color}/10 hover:bg-${social.color}/20 transition-all duration-300 rounded-none group hover:shadow-neon`}
                    >
                      <div className={`text-${social.color} mb-2 group-hover:animate-pixel-pulse`}>
                        {social.icon}
                      </div>
                      <span className="text-sm font-mono text-foreground">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Call to Action */}
              <div className="text-center p-8 bg-gradient-cyber rounded-none border border-primary/30">
                <h4 className="text-xl font-bold font-mono text-background mb-2">
                  Vamos Trabalhar Juntos!
                </h4>
                <p className="text-background/90 text-sm">
                  Resposta garantida em até 24 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;