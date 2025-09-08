import React from "react";

const Planos = () => {
  const planos = [
    {
      nome: "Básico",
      preco: "R$ 2.500",
      periodo: "por evento",
      descricao: "Ideal para eventos pequenos e apresentações simples",
      recursos: [
        "Vídeo mapping básico",
        "2 projetores",
        "Suporte técnico",
        "Setup e desmontagem",
        "Garantia de funcionamento"
      ],
      destaque: false,
      popular: false
    },
    {
      nome: "Profissional",
      preco: "R$ 5.000",
      periodo: "por evento",
      descricao: "Solução completa para eventos médios e corporativos",
      recursos: [
        "Vídeo mapping avançado",
        "4 projetores",
        "Efeitos visuais",
        "Suporte técnico dedicado",
        "Setup e desmontagem",
        "Garantia de funcionamento",
        "Consultoria prévia",
        "Backup de equipamentos"
      ],
      destaque: true,
      popular: true
    },
    {
      nome: "Premium",
      preco: "R$ 10.000",
      periodo: "por evento",
      descricao: "Experiência premium para eventos grandes e especiais",
      recursos: [
        "Vídeo mapping 3D",
        "8+ projetores",
        "Efeitos visuais avançados",
        "Suporte técnico 24/7",
        "Setup e desmontagem",
        "Garantia de funcionamento",
        "Consultoria completa",
        "Backup de equipamentos",
        "Equipe dedicada",
        "Personalização total"
      ],
      destaque: false,
      popular: false
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  const escolherPlano = (plano) => {
    // Criar mensagem personalizada baseada no plano
    const mensagem = `Olá! Gostaria de solicitar um orçamento para o plano ${plano.nome}.

Detalhes do plano escolhido:
• Plano: ${plano.nome}
• Valor: ${plano.preco} ${plano.periodo}
• Descrição: ${plano.descricao}

Recursos incluídos:
${plano.recursos.map(recurso => `• ${recurso}`).join('\n')}

Por favor, entre em contato para discutir os detalhes do meu evento e finalizar o orçamento.`;

    // Armazenar a mensagem no localStorage para o formulário acessar
    const planoData = {
      plano: plano.nome,
      preco: plano.preco,
      mensagem: mensagem
    };

    localStorage.setItem('planoEscolhido', JSON.stringify(planoData));
    
    console.log('Plano salvo no localStorage:', planoData); // Debug

    // Pequeno delay antes de navegar para garantir que o localStorage seja processado
    setTimeout(() => {
      scrollToContact();
      handleReload();
    }, 50);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title">
            Planos Flexíveis
          </h2>
          <p className="section-subtitle">
            Escolha o plano ideal para o seu evento. Todos os nossos pacotes 
            incluem qualidade profissional e suporte técnico especializado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`pricing-card relative ${
                plano.popular ? 'featured' : ''
              }`}
            >
              {plano.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-dark mb-4">
                  {plano.nome}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary">
                    {plano.preco}
                  </span>
                  <span className="text-gray text-lg">/{plano.periodo}</span>
                </div>
                <p className="text-gray text-base leading-relaxed">
                  {plano.descricao}
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {plano.recursos.map((recurso, recursoIndex) => (
                  <li key={recursoIndex} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray text-base">{recurso}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => escolherPlano(plano)}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plano.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                Escolher Plano
              </button>
            </div>
          ))}
        </div>

        {/* Informações Adicionais */}
        <div className="text-center mb-20">
          <div className="card max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-dark mb-8">
              Todos os planos incluem
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h4 className="text-xl font-semibold text-dark mb-4">Garantia Total</h4>
                <p className="text-gray leading-relaxed">
                  Garantimos o funcionamento perfeito de todos os equipamentos
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h4 className="text-xl font-semibold text-dark mb-4">Suporte Rápido</h4>
                <p className="text-gray leading-relaxed">
                  Equipe técnica disponível durante todo o evento
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h4 className="text-xl font-semibold text-dark mb-4">Personalização</h4>
                <p className="text-gray leading-relaxed">
                  Adaptamos cada solução às necessidades do seu evento
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={scrollToContact}
            className="btn-primary text-lg px-10 py-4"
          >
            Solicitar Orçamento Personalizado
          </button>
        </div>
      </div>
    </section>
  );
};

export default Planos;
