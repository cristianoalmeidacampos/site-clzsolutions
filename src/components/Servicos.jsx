export default function Servicos() {
  const servicos = [
    { title: 'Gerenciamento de Vídeo', desc: 'Produção, distribuição e controle de conteúdo audiovisual em eventos.' },
    { title: 'Multiprojeções', desc: 'Imagens sincronizadas em múltiplas telas ou superfícies.' },
    { title: 'Vídeo Mapping', desc: 'Projeção mapeada para transformar espaços.' },
    { title: 'Automação de Vídeo', desc: 'Controle inteligente e em tempo real para suas apresentações.' },
  ];
  return (
    <section id="servicos" className="py-20 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-black bg-clip-text text-transparent">
        Nossas Soluções Visuais
      </h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {servicos.map(({ title, desc }) => (
          <div key={title} className="p-6 bg-black rounded-xl shadow-lg text-center">
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-gray-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}