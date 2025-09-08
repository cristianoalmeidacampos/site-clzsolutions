import React from "react";

const Depoimentos = () => {
  const depoimentos = [
    {
      nome: "Maria Silva",
      cargo: "Diretora de Marketing",
      empresa: "TechCorp",
      foto: "https://images.unsplash.com/photo-1548009813-c6442fa355dc?w=100&h=100&fit=crop&crop=face",
      texto: "A Clz Solutions transformou completamente nosso evento corporativo. A qualidade do vídeo mapping foi excepcional e superou todas as nossas expectativas.",
      avaliacao: 5
    },
    {
      nome: "João Santos",
      cargo: "Produtor de Eventos",
      empresa: "EventPro",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      texto: "Profissionalismo e criatividade em todos os projetos. A equipe é extremamente competente e sempre entrega resultados impressionantes.",
      avaliacao: 5
    },
    {
      nome: "Ana Costa",
      cargo: "CEO",
      empresa: "StartupXYZ",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      texto: "Incrível como conseguiram capturar a essência da nossa marca no projeto visual. O resultado foi simplesmente espetacular!",
      avaliacao: 5
    },
    {
      nome: "Carlos Oliveira",
      cargo: "Diretor Criativo",
      empresa: "Creative Studio",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      texto: "A parceria com a Clz Solutions elevou nossos eventos a um novo patamar. Tecnologia de ponta e atendimento impecável.",
      avaliacao: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

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
            O que dizem nossos clientes
          </h2>
          <p className="section-subtitle">
            A satisfação dos nossos clientes é nossa maior recompensa. 
            Conheça alguns depoimentos de quem já experimentou nossas soluções.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="testimonial-card hover-lift">
              <div className="flex justify-center mb-6">
                {renderStars(depoimento.avaliacao)}
              </div>
              <p className="text-gray mb-8 italic text-lg leading-relaxed">
                "{depoimento.texto}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={depoimento.foto}
                  alt={depoimento.nome}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-primary/10"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-dark text-base">
                    {depoimento.nome}
                  </h4>
                  <p className="text-gray text-sm">
                    {depoimento.cargo} • {depoimento.empresa}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-3">500+</div>
            <div className="text-gray font-medium">Projetos Concluídos</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-3">98%</div>
            <div className="text-gray font-medium">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-3">5+</div>
            <div className="text-gray font-medium">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-3">24/7</div>
            <div className="text-gray font-medium">Suporte Disponível</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 text-dark relative overflow-hidden border-2 border-blue-200">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-dark">
                Junte-se aos nossos clientes satisfeitos
              </h3>
              <p className="text-gray mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Transforme seu evento em uma experiência inesquecível 
                com nossas soluções visuais inovadoras.
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

export default Depoimentos;
