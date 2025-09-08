import React from "react";


const Solucoes = () => {
  const solucoes = [
    {
      icon: "🎥",
      title: "Vídeo Mapping",
      description: "Projeções mapeadas que transformam qualquer superfície em uma tela dinâmica e interativa.",
      features: ["Mapeamento 3D", "Projeções arquitetônicas", "Eventos imersivos"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: "🖥️",
      title: "Multiprojeções",
      description: "Sistemas de projeção múltipla para criar experiências visuais grandiosas e impactantes.",
      features: ["Sincronização perfeita", "Alta resolução", "Controle centralizado"],
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: "✨",
      title: "Efeitos Visuais",
      description: "Efeitos especiais que impressionam e emocionam, elevando qualquer apresentação.",
      features: ["Transições suaves", "Animações customizadas", "Integração perfeita"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: "⚡",
      title: "Automação de Vídeo",
      description: "Controle automatizado para apresentações perfeitas e sem interrupções.",
      features: ["Controle remoto", "Sequências programadas", "Backup automático"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: "🎭",
      title: "Eventos Especiais",
      description: "Produção completa de eventos com soluções visuais personalizadas e exclusivas.",
      features: ["Consultoria especializada", "Equipe dedicada", "Suporte 24/7"],
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: "🎨",
      title: "Design Criativo",
      description: "Criação de conteúdo visual único e memorável para sua marca ou evento.",
      features: ["Design personalizado", "Branding consistente", "Conceitos inovadores"],
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding gradient-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title">
            Nossas Soluções Visuais
          </h2>
          <p className="section-subtitle">
            Oferecemos um portfólio completo de soluções visuais inovadoras 
            para transformar seus eventos e projetos em experiências extraordinárias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solucoes.map((solucao, index) => (
            <div key={index} className="card hover-lift group relative overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solucao.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {solucao.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">
                  {solucao.title}
                </h3>
                <p className="text-gray mb-6 leading-relaxed">
                  {solucao.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {solucao.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn-secondary w-full">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 text-dark relative overflow-hidden border-2 border-blue-200">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-dark">
                Pronto para Transformar seu Evento?
              </h3>
              <p className="text-gray mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Entre em contato conosco e descubra como podemos criar uma 
                experiência visual única para seu projeto.
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solucoes;
