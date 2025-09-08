import React from 'react';
export const Layout = ({ children }) => (
  <div className="bg-black text-white min-h-screen font-inter">
    <header className="flex items-center py-4 px-6">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-black bg-clip-text text-transparent">
        Clz Solutions
      </h1>
    </header>
    <main>{children}</main>
    <footer className="py-8 px-6 text-center text-gray-400">
      <nav className="flex justify-center gap-6 mb-4">
        {['Home','Sobre','Serviços','Galeria','Contato'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-green-400">{item}</a>
        ))}
      </nav>
      <p>© 2025 clzsolutions. Todos os direitos reservados.</p>
    </footer>
  </div>
);
