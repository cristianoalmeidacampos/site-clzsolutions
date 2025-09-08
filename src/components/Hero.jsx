import React from "react";
import logo from "../assets/logo_white.jpg";






const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section section-padding relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Soluções Visuais{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Inovadoras
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Transformamos suas ideias em experiências visuais extraordinárias. 
              Design criativo, tecnologia avançada e resultados que impressionam.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
              <button 
                onClick={scrollToContact}
                className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Solicitar Orçamento
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-primary transition-all duration-300">
                Ver Galeria
              </button>
            </div>
            
            {/* Estatísticas */}
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projetos Concluídos</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Clientes Satisfeitos</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Imagem/Ilustração */}
          <div className="relative">
            <div className="card hover-lift bg-white/10 backdrop-blur-sm border-white/20">
              <div className="text-center p-8">
              <img
                  src={logo}
                  alt="logo"
                  className="w-200 h-full object-cover group-hover:scale-50 transition-transform duration-300"
                />
                {/* <div className="text-8xl mb-6">🎨</div>*/}
                {/*<h3 className="text-3xl font-bold text-gray mb-4">Design Criativo</h3>*/}
                <h3 className="text-3xl font-bold text-gray mb-4 mt-4">A Solução para o seu evento</h3>
                {/*<p className="text-gray text-lg">
                  A Solução para o seu evento.
                </p>*/}
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-12 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-white rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
