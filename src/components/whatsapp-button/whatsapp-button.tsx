import React from 'react';
import "./whatsapp-button.css";
import { Whatsapp } from "@/assets/logos";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  children?: React.ReactNode;
  variant?: "button" | "icon";
  ariaLabel?: string;
}

const WhatsAppButton = ({
  phoneNumber,
  message,
  children,
  variant = "button",
  ariaLabel = "Fale agora por Whatsapp",
}: WhatsAppButtonProps) => {
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  
  const encodedMessage = encodeURIComponent(message);
  
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={variant === "icon" ? "whatsapp-icon" : "whatsapp-button"}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {variant === "icon" ? (
        <>
          <Whatsapp className="whatsapp-icon__svg" />
          {children}
        </>
      ) : (
        children || "Fale agora por Whatsapp"
      )}
    </a>
  );
};

export default WhatsAppButton;