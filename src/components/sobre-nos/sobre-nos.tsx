import "./sobre-nos.css";
import image from "@/assets/imgs/guitar-classical-guitar-acoustic-guitar-electric-guitar.webp";
import { sobreNosContent } from "./sobre-nos.content";

const getSystemLanguage = (): 'pt' | 'en' => {
  const language = navigator.language.toLowerCase();
  return language.startsWith('pt') ? 'pt' : 'en';
};

export function SobreNos() {
  const content = sobreNosContent[getSystemLanguage()];
  return (
    <section id="sobre-nos" className="sobre-nos">
      <div className="sobre-nos__wrapper">
        <img src={image} alt={content.imageAlt} className="sobre-nos__image" />

        <div className="sobre-nos__text">
          <h1>{content.title}</h1>
          <p>
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
