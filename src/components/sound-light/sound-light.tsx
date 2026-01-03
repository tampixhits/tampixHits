import "./sound-light.css";
import image from "@/assets/imgs/dj.jpg";
import WhatsAppButton from "../whatsapp-button/whatsapp-button";
import { soundLightContent } from "./sound-light.content";

const getSystemLanguage = (): "pt" | "en" => {
  const language = navigator.language.toLowerCase();
  return language.startsWith("pt") ? "pt" : "en";
};

export function SoundLight() {
  const content = soundLightContent[getSystemLanguage()];
  return (
    <section id="sound-light">
      <div className="sound-light__wrapper">
        <div className="sound-light__text">
          <h1>{content.title}</h1>
          <p className="sound-light__description">{content.description}</p>
          <WhatsAppButton
            phoneNumber="+5541992909011"
            message={content.whatsappMessage}
          >
            {content.buttonText}
          </WhatsAppButton>
        </div>

        <img src={image} alt={content.imageAlt} className="sound-light__image" />
      </div>
    </section>
  );
}
