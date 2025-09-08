import React from "react";

const Rodape = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary font-bold text-lg mb-2">Clz Solutions</p>
        <p className="text-gray mb-4">
          Transformando eventos em experiências visuais extraordinárias
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com/clzsolutions" target="_blank" rel="noopener noreferrer" className="text-gray hover:text-primary transition-colors">
            Facebook
          </a>
          <a href="https://instagram.com/clzsolutions" target="_blank" rel="noopener noreferrer" className="text-gray hover:text-primary transition-colors">
            Instagram
          </a>
          <a href="mailto:contato@clzsolutions.com" className="text-gray hover:text-primary transition-colors">
            Email
          </a>
        </div>
        <p>© 2025 Clz Solutions. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Rodape;
