import React from "react";

const Sobre = () => {
  const features = [
    {
      icon: "🎯",
      title: "Design Criativo",
      description: "Criamos designs únicos e memoráveis que destacam sua marca"
    },
    {
      icon: "⚡",
      title: "Tecnologia Avançada",
      description: "Utilizamos as melhores ferramentas e tecnologias do mercado"
    },
    {
      icon: "🛡️",
      title: "Suporte Completo",
      description: "Acompanhamos você em todo o processo, do planejamento à execução"
    }
  ];

  const services = [
    {
      icon: "🎥",
      title: "Vídeo Mapping",
      description: "Projeções mapeadas que transformam qualquer superfície"
    },
    {
      icon: "✨",
      title: "Efeitos Visuais",
      description: "Efeitos especiais que impressionam e emocionam"
    },
    {
      icon: "🖥️",
      title: "Multiprojeções",
      description: "Sistemas de projeção múltipla para eventos grandiosos"
    },
    {
      icon: "⚡",
      title: "Automação",
      description: "Controle automatizado para apresentações perfeitas"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title">
            Quem Somos
          </h2>
          <p className="section-subtitle">
            Somos uma empresa especializada em soluções visuais inovadoras, 
            comprometida em transformar suas ideias em experiências extraordinárias.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Conteúdo */}
          <div>
            <h3 className="text-4xl font-bold text-dark mb-8 leading-tight">
              Transformando Visões em Realidade
            </h3>
            <p className="text-lg text-gray mb-8 leading-relaxed">
              Com mais de 5 anos de experiência no mercado, a Clz Solutions 
              se destaca pela criatividade, inovação e qualidade em todos os 
              projetos que desenvolvemos.
            </p>
            
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dark mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-primary">
              Saiba Mais
            </button>
          </div>

          {/* Imagem/Ilustração */}
          <div className="relative">
            <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <div className="text-center">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold text-dark mb-4">
                  Inovação em Cada Projeto
                </h3>
                <p className="text-gray">
                  Nossa missão é criar experiências visuais que inspirem e conectem
                </p>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-secondary rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-primary rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Serviços Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-feature hover-lift group">
              <div className="feature-icon group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-dark mb-3">
                {service.title}
              </h4>
              <p className="text-gray leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre;
