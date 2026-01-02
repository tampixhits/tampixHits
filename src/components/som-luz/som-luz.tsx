import "./som-luz.css";
import image from "@/assets/imgs/dj.jpg";
import WhatsAppButton from "../whatsapp-button/whatsapp-button";
import { somLuzContent } from "./som-luz.content";

const getSystemLanguage = (): "pt" | "en" => {
  const language = navigator.language.toLowerCase();
  return language.startsWith("pt") ? "pt" : "en";
};

export function SomLuz() {
  const content = somLuzContent[getSystemLanguage()];
  return (
    <section id="som-luz">
      <div className="wrapper-som-luz">
        <div className="text-som-luz">
          <h1>{content.title}</h1>
          <p className="paragraph-text">{content.description}</p>
          <WhatsAppButton
            phoneNumber="+5541992909011"
            message={content.whatsappMessage}
          >
            {content.buttonText}
          </WhatsAppButton>
        </div>

        <img src={image} alt={content.imageAlt} className="image-som-luz" />
      </div>
    </section>
  );
}
