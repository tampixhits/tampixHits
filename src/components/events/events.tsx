import "./events.css";
import Casamento from "@/assets/imgs/casamento.jpg";
import Particular from "@/assets/imgs/particular.jpg";
import Corporativo from "@/assets/imgs/corporativo.jpg";
import { scrollToSection } from "@/services/scrollToSection";
import { eventsContent } from "./events.content";

const getSystemLanguage = (): "pt" | "en" => {
  const language = navigator.language.toLowerCase();
  return language.startsWith("pt") ? "pt" : "en";
};

export function Events() {
  const content = eventsContent[getSystemLanguage()];
  const handleScrollToQuote = () => scrollToSection("quote");
  return (
    <section id="events">
      <div className="events__wrapper">
        <h1>{content.sectionTitle}</h1>
        <div className="events">
          <div className="event">
            <h2 className="event__heading__mobile">{content.wedding.title}</h2>
            <div className="event__text">
              <h2 className="event__heading__desktop">
                {content.wedding.title}
              </h2>
              <p className="event__paragraph">{content.wedding.paragraph1}</p>
              <p className="event__paragraph">{content.wedding.paragraph2}</p>

              <button className="events__button" type="button" onClick={handleScrollToQuote}>
                {content.wedding.buttonText}
              </button>
            </div>
            <div className="event__image">
              <img src={Casamento} alt={content.wedding.imageAlt} />
            </div>
          </div>

          <div className="event">
            <h2 className="event__heading__mobile">
              {content.corporate.title}
            </h2>
            <div className="event__image">
              <img src={Corporativo} alt={content.corporate.imageAlt} />
            </div>
            <div className="event__text">
              <h2 className="event__heading__desktop">
                {content.corporate.title}
              </h2>
              <p className="event__paragraph">{content.corporate.paragraph1}</p>
              <p className="event__paragraph">{content.corporate.paragraph2}</p>

              <button className="events__button" type="button" onClick={handleScrollToQuote}>
                {content.corporate.buttonText}
              </button>
            </div>
          </div>

          <div className="event">
            <h2 className="event__heading__mobile">{content.private.title}</h2>

            <div className="event__text">
              <h2 className="event__heading__desktop">
                {content.private.title}
              </h2>
              <p className="event__paragraph">{content.private.paragraph1}</p>
              <p className="event__paragraph">{content.private.paragraph2}</p>

              <button className="events__button" type="button" onClick={handleScrollToQuote}>
                {content.private.buttonText}
              </button>
            </div>

            <div className="event__image">
              <img src={Particular} alt={content.private.imageAlt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
