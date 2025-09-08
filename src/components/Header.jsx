import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-soft border-b border-gray-light"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Clz Solutions
            </h1>
          </div>

          {/* Menu de Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-dark hover:text-primary transition-colors duration-200 font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-dark hover:text-primary transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("solucoes")}
              className="text-dark hover:text-primary transition-colors duration-200 font-medium"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-dark hover:text-primary transition-colors duration-200 font-medium"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-dark hover:text-primary transition-colors duration-200 font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="text-dark hover:text-primary transition-colors duration-200 font-medium"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="btn-primary"
            >
              Contato
            </button>
          </nav>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-dark hover:text-primary transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-light bg-white rounded-lg shadow-soft">
            <nav className="flex flex-col space-y-4 pt-4 px-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-dark hover:text-primary transition-colors duration-200 font-medium text-left py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-dark hover:text-primary transition-colors duration-200 font-medium text-left py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("solucoes")}
                className="text-dark hover:text-primary transition-colors duration-200 font-medium text-left py-2"
              >
                Soluções
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-dark hover:text-primary transition-colors duration-200 font-medium text-left py-2"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-dark hover:text-primary transition-colors duration-200 font-medium text-left py-2"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("planos")}
                className="text-dark hover:text-primary transition-colors duration-200 font-medium text-left py-2"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="btn-primary w-full text-center"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
