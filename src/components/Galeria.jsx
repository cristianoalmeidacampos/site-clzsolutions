import React, { useState } from "react";
import tela_em_u from "../assets/tela_u.png";
import mapping_cubos from "../assets/video_mapping_2_em_cubos.png";
import mapping_dupla_profundidade from "../assets/video_mapping_3_mapping_dupla_profuncidade.png";
import mega_tela_panoramica from "../assets/mega_tela_panoramica.png";
import multtela_particionada from "../assets/multitela_particionada.png"; 
import projecao_institucional from "../assets/projecao_institucional.png";

const Galeria = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filtros = [
    { id: "todos", label: "Todos" },
    { id: "mapping", label: "Vídeo Mapping" },
    { id: "eventos", label: "Eventos" },
    { id: "projecoes", label: "Projeções" }
  ];

  const projetos = [
    {
      id: 1,
      categoria: "mapping",
      titulo: "Vídeo Mapping Arquitetônico",
      descricao: "Projeção mapeada em cubos",
      imagem: mapping_cubos
    },
    {
      id: 2,
      categoria: "mapping",
      titulo: "Mapping 3D",
      descricao: "Projeção com dupla profundidade",
      imagem: mapping_dupla_profundidade
    },
    {
      id: 3,
      categoria: "projecoes",
      titulo: "Mega Tela Panorâmica",
      descricao: "Projeção em mega tela panorâmica",
      imagem: mega_tela_panoramica
    },
    {
      id: 4,
      categoria: "projecoes",
      titulo: "Projeção em tela em U",
      descricao: "Apresentação com multiprojeções tela em U",
      imagem: tela_em_u
    },
    {
      id: 5,
      categoria: "eventos",
      titulo: "Evento institucional",
      descricao: "Mapping multitela",
      imagem: projecao_institucional
    },
    {
      id: 6,
      categoria: "projecoes",
      titulo: "Multitela Particionada",
      descricao: "Instalação com projeções mapeadas",
      imagem: multtela_particionada
    }
  ];

  const projetosFiltrados = activeFilter === "todos" 
    ? projetos 
    : projetos.filter(projeto => projeto.categoria === activeFilter);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Galeria de Projetos
          </h2>
          <p className="section-subtitle">
            Conheça alguns dos nossos trabalhos mais impressionantes 
            e descubra como transformamos ideias em experiências visuais únicas.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filtros.map((filtro) => (
            <button
              key={filtro.id}
              onClick={() => setActiveFilter(filtro.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filtro.id
                  ? "bg-primary text-white shadow-soft"
                  : "bg-gray-light text-gray hover:bg-primary hover:text-white"
              }`}
            >
              {filtro.label}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetosFiltrados.map((projeto) => (
            <div key={projeto.id} className="card hover-lift group overflow-hidden">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold">{projeto.titulo}</h4>
                    <p className="text-sm text-white/90">{projeto.descricao}</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">
                {projeto.titulo}
              </h3>
              <p className="text-gray mb-4">
                {projeto.descricao}
              </p>
              <button className="btn-secondary w-full">
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            Ver Galeria Completa
          </button>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
