import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Solucoes from "./components/Solucoes";
import Galeria from "./components/Galeria";
import Depoimentos from "./components/Depoimentos";
import Planos from "./components/Planos";
import Contato from "./components/Contato";
import Rodape from "./components/Rodape";
import WhatsAppButton from './components/WhatsAppButton';
{/*import VideoPlayer from "./components/Video";*/}

function App() {
  return (
    <div className="bg-light text-dark pt-20">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="sobre">
        <Sobre />
      </div>
      <div id="solucoes">
        <Solucoes />
      </div>
      <div id="galeria">
        <Galeria />
      </div>
      <div id="depoimentos">
        <Depoimentos />
      </div>
      <div id="planos">
        <Planos />
      </div>
      <div id="contato">
        <Contato />
      </div>
      <div>
        <WhatsAppButton />
      </div>
      <Rodape />
    </div>
  );
}

export default App;
