// WhatsAppButton.jsx
import React from 'react';
import { Fab } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';
import { styled } from '@mui/system';

const WhatsAppFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#25D366',
  color: '#fff',
  zIndex: 1000,
  '&:hover': {
    backgroundColor: '#1ebe5b',
  },
}));

export default function WhatsAppButton({ phoneNumber = '551192082409', message = 'Olá! Gostaria de solicitar um orçamento para meu evento.' }) {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <WhatsAppFab aria-label="WhatsApp">
        <FaWhatsapp size={24} />
      </WhatsAppFab>
    </a>
  );
}
