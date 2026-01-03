import "./overview.css";
import image from "@/assets/imgs/backgroud.jpg";
import { scrollToSection } from "@/services/scrollToSection";
import { overviewContent } from "./overview.content";

const getSystemLanguage = (): 'pt' | 'en' => {
  const language = navigator.language.toLowerCase();
  return language.startsWith('pt') ? 'pt' : 'en';
};

export function Overview() {
  const content = overviewContent[getSystemLanguage()];

  const handleScrollToQuote = () => {
    scrollToSection("quote");
  };

  return (
    <div className="overview__wrapper">
      <div className="overview__text">
        <div className="overview__brand">TAMPIX HITS</div>
        <h1>{content.title}</h1>
        <button className="overview__button" type="button" onClick={handleScrollToQuote}>
          {content.buttonText}
        </button>
      </div>

      <img src={image} alt={content.imageAlt} className="overview__image" />
    </div>
  );
}
