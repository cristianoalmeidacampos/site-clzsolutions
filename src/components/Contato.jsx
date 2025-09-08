import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

// Importar configuração do EmailJS
// import { EMAILJS_CONFIG } from '../emailjs-config.js';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoEvento: "",
    dataEvento: "",
    mensagem: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [planoEscolhido, setPlanoEscolhido] = useState(null);

  // Inicializar EmailJS
  useEffect(() => {
    // emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY); // Descomente após configurar
    emailjs.init("YOUR_PUBLIC_KEY"); // Substitua pela sua chave pública do EmailJS
  }, []);

  // Verificar se há um plano escolhido ao carregar o componente
  useEffect(() => {
    const checkPlanoEscolhido = () => {
      const planoSalvo = localStorage.getItem('planoEscolhido');
      if (planoSalvo) {
        try {
          const plano = JSON.parse(planoSalvo);
          setPlanoEscolhido(plano);
          
          // Preencher automaticamente a mensagem com o plano escolhido
          setFormData(prev => ({
            ...prev,
            mensagem: plano.mensagem
          }));

          // Limpar o localStorage após usar
          localStorage.removeItem('planoEscolhido');
          
          console.log('Plano carregado:', plano); // Debug
          return true; // Indica que encontrou um plano
        } catch (error) {
          console.error('Erro ao processar plano escolhido:', error);
        }
      }
      return false; // Indica que não encontrou plano
    };

    // Verificar imediatamente
    if (!checkPlanoEscolhido()) {
      // Se não encontrou, verificar periodicamente por alguns segundos
      let attempts = 0;
      const maxAttempts = 20; // 2 segundos (20 * 100ms)
      
      const intervalId = setInterval(() => {
        attempts++;
        if (checkPlanoEscolhido() || attempts >= maxAttempts) {
          clearInterval(intervalId);
        }
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, []);

  // Adicionar um useEffect para monitorar mudanças no planoEscolhido
  useEffect(() => {
    if (planoEscolhido && planoEscolhido.mensagem) {
      setFormData(prev => ({
        ...prev,
        mensagem: planoEscolhido.mensagem
      }));
      console.log('Mensagem preenchida:', planoEscolhido.mensagem); // Debug
    }
  }, [planoEscolhido]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro do campo quando usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
    }

    if (!formData.tipoEvento || formData.tipoEvento === "Selecione uma opção") {
      newErrors.tipoEvento = "Tipo de evento é obrigatório";
    }

    if (!formData.dataEvento) {
      newErrors.dataEvento = "Data do evento é obrigatória";
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Mensagem é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Configuração do EmailJS
      const templateParams = {
        to_email: 'clayton.almeida.campos@gmail.com',
        from_name: formData.nome,
        from_email: formData.email,
        telefone: formData.telefone,
        tipo_evento: formData.tipoEvento,
        data_evento: formData.dataEvento,
        mensagem: formData.mensagem,
        reply_to: formData.email
      };

      // Enviar email usando EmailJS
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Substitua pelo seu Service ID
        'YOUR_TEMPLATE_ID', // Substitua pelo seu Template ID
        templateParams
      );

      // Alternativa usando arquivo de configuração:
      // const result = await emailjs.send(
      //   EMAILJS_CONFIG.SERVICE_ID,
      //   EMAILJS_CONFIG.TEMPLATE_ID,
      //   templateParams
      // );

      console.log('Email enviado com sucesso:', result);
      
      // Mostrar mensagem de sucesso
      setShowSuccess(true);
      
      // Limpar formulário
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        tipoEvento: "",
        dataEvento: "",
        mensagem: ""
      });

      // Limpar plano escolhido
      setPlanoEscolhido(null);
      
      // Esconder mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar mensagem. Tente novamente. Ou click no botão WhatsApp para entrar em contato.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Vamos Dar Vida à Sua Visão
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e descubra como podemos transformar 
            seu evento em uma experiência visual inesquecível.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Formulário */}
          <div className="card">
            <h3 className="text-3xl font-bold text-dark mb-8">
              Solicite um Orçamento
            </h3>
            
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Mensagem Enviada!</h4>
                    <p className="text-green-700 text-sm">Obrigado pelo contato. Responderemos em breve!</p>
                  </div>
                </div>
              </div>
            )}

            {planoEscolhido && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Plano Selecionado</h4>
                    <p className="text-blue-700 text-sm">{planoEscolhido.plano} - {planoEscolhido.preco}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray mb-3">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className={`form-input ${errors.nome ? 'border-red-500' : ''}`}
                    placeholder="Seu nome completo"
                  />
                  {errors.nome && (
                    <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray mb-3">
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className={`form-input ${errors.telefone ? 'border-red-500' : ''}`}
                  placeholder="(11) 99999-9999"
                />
                {errors.telefone && (
                  <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray mb-3">
                  Tipo de Evento *
                </label>
                <select 
                  name="tipoEvento"
                  value={formData.tipoEvento}
                  onChange={handleChange}
                  className={`form-input ${errors.tipoEvento ? 'border-red-500' : ''}`}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Evento Corporativo">Evento Corporativo</option>
                  <option value="Casamento">Casamento</option>
                  <option value="Festival">Festival</option>
                  <option value="Exposição">Exposição</option>
                  <option value="Show">Show</option>
                  <option value="Outro">Outro</option>
                </select>
                {errors.tipoEvento && (
                  <p className="text-red-500 text-sm mt-1">{errors.tipoEvento}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray mb-3">
                  Data do Evento *
                </label>
                <input
                  type="date"
                  name="dataEvento"
                  value={formData.dataEvento}
                  onChange={handleChange}
                  className={`form-input ${errors.dataEvento ? 'border-red-500' : ''}`}
                />
                {errors.dataEvento && (
                  <p className="text-red-500 text-sm mt-1">{errors.dataEvento}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray mb-3">
                  Mensagem *
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows="5"
                  className={`form-input resize-none ${errors.mensagem ? 'border-red-500' : ''}`}
                  placeholder="Conte-nos sobre seu projeto..."
                ></textarea>
                {errors.mensagem && (
                  <p className="text-red-500 text-sm mt-1">{errors.mensagem}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`btn-primary w-full text-lg py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </div>
                ) : (
                  "Enviar Mensagem"
                )}
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Informações de Contato
              </h3>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Estamos aqui para ajudar você a criar a experiência visual 
                perfeita para seu evento. Entre em contato conosco!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Telefone</h4>
                  <p className="text-white/90 text-lg">(11) 9 4724-3979</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
                  <p className="text-white/90 text-lg">clezio@clzsolutions.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Endereço</h4>
                  <p className="text-white/90 text-lg">Rua Jacomina Aparecida Paterno luongo, 258</p>
                  <p className="text-white/90 text-lg">Guarulhos - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Horário de Atendimento</h4>
                  <p className="text-white/90 text-lg">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-white/90 text-lg">Sábado: 9h às 14h</p>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="pt-8 border-t border-white/20">
              <h4 className="text-xl font-semibold text-white mb-6">Siga-nos</h4>
              <div className="flex gap-4">
                <a href="https://facebook.com/clzsolutions" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/clzsolutions" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="mailto:clezio@clzsolution.com.br" className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
