import "./events.css";
import Casamento from "@/assets/imgs/casamento.jpg";
import Particular from "@/assets/imgs/particular.jpg";
import Corporativo from "@/assets/imgs/corporativo.jpg";
import WhatsAppButton from "../whatsapp-button/whatsapp-button";
import { eventsContent } from "./events.content";

const getSystemLanguage = (): 'pt' | 'en' => {
  const language = navigator.language.toLowerCase();
  return language.startsWith('pt') ? 'pt' : 'en';
};

export function Events() {
  const content = eventsContent[getSystemLanguage()];
  return (
    <section className="events" id="events">
      <div className="events__wrapper">
        <h1>{content.sectionTitle}</h1>

        <div className="event">
          <h2 className="event__heading__mobile">{content.wedding.title}</h2>
          <div className="event__text">
            <h2 className="event__heading__desktop">{content.wedding.title}</h2>
            <p className="event__paragraph">
              {content.wedding.paragraph1}
            </p>
            <p className="event__paragraph">
              {content.wedding.paragraph2}
            </p> 

            <WhatsAppButton
              phoneNumber="+5541992909011"
              message={content.wedding.whatsappMessage}
            >
              {content.wedding.buttonText}
            </WhatsAppButton>
          </div>
          <div className="event__image">
            <img src={Casamento} alt={content.wedding.imageAlt} />
          </div>
        </div>

        <div className="event">
          <h2 className="event__heading__mobile">{content.corporate.title}</h2>
          <div className="event__image">
            <img src={Corporativo} alt={content.corporate.imageAlt} />
          </div>
          <div className="event__text">
            <h2 className="event__heading__desktop">{content.corporate.title}</h2>
            <p className="event__paragraph">
              {content.corporate.paragraph1}
            </p>
            <p className="event__paragraph">
              {content.corporate.paragraph2}
            </p> 

            <WhatsAppButton
              phoneNumber="+5541992909011"
              message={content.corporate.whatsappMessage}
            >
              {content.corporate.buttonText}
            </WhatsAppButton>
          </div>
        </div>

        <div className="event">
          <h2 className="event__heading__mobile">{content.private.title}</h2>
          
          <div className="event__text">
            <h2 className="event__heading__desktop">{content.private.title}</h2>
            <p className="event__paragraph">
              {content.private.paragraph1}
            </p>
            <p className="event__paragraph">
              {content.private.paragraph2}
            </p> 

            <WhatsAppButton
              phoneNumber="+5541992909011"
              message={content.private.whatsappMessage}
            >
              {content.private.buttonText}
            </WhatsAppButton>
          </div>

          <div className="event__image">
            <img src={Particular} alt={content.private.imageAlt} />
          </div>

        </div>
      </div>
    </section>
  );
}
