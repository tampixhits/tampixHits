import "./overview.css";
import image from "@/assets/imgs/guitar-classical-guitar-acoustic-guitar-electric-guitar.webp";
import WhatsAppButton from "../whatsapp-button/whatsapp-button";
import { overviewContent } from "./overview.content";

const getSystemLanguage = (): 'pt' | 'en' => {
  const language = navigator.language.toLowerCase();
  return language.startsWith('pt') ? 'pt' : 'en';
};

export function Overview() {
  const content = overviewContent[getSystemLanguage()];
  return (
    <div className="wrapper-overview">
      <div className="text-overview">
        <h1>{content.title}</h1>
        <p className="paragraph-text">
          {content.description}
        </p>
        <WhatsAppButton phoneNumber="+5541992909011" message={content.whatsappMessage}>
          {content.buttonText}
        </WhatsAppButton>
      </div>

      <img src={image} alt={content.imageAlt} className="image" />
    </div>
  );
}
