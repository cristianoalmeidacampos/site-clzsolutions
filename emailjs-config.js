// Configuração do EmailJS
// Substitua estas chaves pelas suas chaves reais do EmailJS

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_public_key_here',
  SERVICE_ID: 'your_service_id_here', 
  TEMPLATE_ID: 'your_template_id_here',
  CONTACT_EMAIL: 'clayton.almeida.campos@gmail.com' // ou 'seu_email@uol.com.br'
};

// Configurações para diferentes provedores de email:

// Para Gmail:
// - Service Type: Gmail
// - Email: clayton.almeida.campos@gmail.com

// Para UOL:
// - Service Type: Outlook (recomendado) ou SMTP
// - Email: seu_email@uol.com.br
// - SMTP Host: smtp.uol.com.br
// - SMTP Port: 587 ou 465

// Para Yahoo:
// - Service Type: Outlook
// - Email: seu_email@yahoo.com

// Para Hotmail/Outlook:
// - Service Type: Outlook
// - Email: seu_email@hotmail.com ou seu_email@outlook.com

// Como usar:
// 1. Substitua 'your_public_key_here' pela sua Public Key do EmailJS
// 2. Substitua 'your_service_id_here' pelo seu Service ID
// 3. Substitua 'your_template_id_here' pelo seu Template ID
// 4. Substitua o CONTACT_EMAIL pelo email que você quer receber os formulários
// 5. Importe este arquivo no componente Contato.jsx

// Exemplo de uso no Contato.jsx:
// import { EMAILJS_CONFIG } from '../emailjs-config.js';
// 
// emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
// 
// const result = await emailjs.send(
//   EMAILJS_CONFIG.SERVICE_ID,
//   EMAILJS_CONFIG.TEMPLATE_ID,
//   templateParams
// );
