import "./about-us.css";
import image from "@/assets/imgs/guitar-classical-guitar-acoustic-guitar-electric-guitar.webp";
import { aboutUsContent } from "./about-us.content";

const getSystemLanguage = (): 'pt' | 'en' => {
  const language = navigator.language.toLowerCase();
  return language.startsWith('pt') ? 'pt' : 'en';
};

export function AboutUs() {
  const content = aboutUsContent[getSystemLanguage()];
  return (
    <section id="about-us" className="about-us">
      <div className="about-us__wrapper">
        <img src={image} alt={content.imageAlt} className="about-us__image" />

        <div className="about-us__text">
          <h1>{content.title}</h1>
          <p>
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
