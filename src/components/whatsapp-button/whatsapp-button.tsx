import React from 'react';
import "./whatsapp-button.css";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  children?: React.ReactNode;
}

const WhatsAppButton = ({ phoneNumber, message, children }: WhatsAppButtonProps) => {
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  
  const encodedMessage = encodeURIComponent(message);
  
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      {children || 'Fale agora por Whatsapp'}
    </a>
  );
};

export default WhatsAppButton;