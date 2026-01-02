import "./eventos.css";
import Casamento from "@/assets/imgs/casamento.jpg";
import Particular from "@/assets/imgs/particular.jpg";
import Corporativo from "@/assets/imgs/corporativo.jpg";
import WhatsAppButton from "../whatsapp-button/whatsapp-button";
import { eventosContent } from "./eventos.content";

const getSystemLanguage = (): 'pt' | 'en' => {
  const language = navigator.language.toLowerCase();
  return language.startsWith('pt') ? 'pt' : 'en';
};

export function Eventos() {
  const content = eventosContent[getSystemLanguage()];
  return (
    <section className="eventos" id="eventos">
      <div className="eventos__wrapper">
        <h1>{content.sectionTitle}</h1>

        <div className="evento">
          <h2 className="evento__heading__mobile">{content.casamento.title}</h2>
          <div className="evento__text">
            <h2 className="evento__heading__desktop">{content.casamento.title}</h2>
            <p className="evento__paragraph">
              {content.casamento.paragraph1}
            </p>
            <p className="evento__paragraph">
              {content.casamento.paragraph2}
            </p> 

            <WhatsAppButton
              phoneNumber="+5541992909011"
              message={content.casamento.whatsappMessage}
            >
              {content.casamento.buttonText}
            </WhatsAppButton>
          </div>
          <div className="evento__image">
            <img src={Casamento} alt={content.casamento.imageAlt} />
          </div>
        </div>

        <div className="evento">
          <h2 className="evento__heading__mobile">{content.corporativo.title}</h2>
          <div className="evento__image">
            <img src={Corporativo} alt={content.corporativo.imageAlt} />
          </div>
          <div className="evento__text">
            <h2 className="evento__heading__desktop">{content.corporativo.title}</h2>
            <p className="evento__paragraph">
              {content.corporativo.paragraph1}
            </p>
            <p className="evento__paragraph">
              {content.corporativo.paragraph2}
            </p> 

            <WhatsAppButton
              phoneNumber="+5541992909011"
              message={content.corporativo.whatsappMessage}
            >
              {content.corporativo.buttonText}
            </WhatsAppButton>
          </div>
        </div>

        <div className="evento">
          <h2 className="evento__heading__mobile">{content.particular.title}</h2>
          
          <div className="evento__text">
            <h2 className="evento__heading__desktop">{content.particular.title}</h2>
            <p className="evento__paragraph">
              {content.particular.paragraph1}
            </p>
            <p className="evento__paragraph">
              {content.particular.paragraph2}
            </p> 

            <WhatsAppButton
              phoneNumber="+5541992909011"
              message={content.particular.whatsappMessage}
            >
              {content.particular.buttonText}
            </WhatsAppButton>
          </div>

          <div className="evento__image">
            <img src={Particular} alt={content.particular.imageAlt} />
          </div>

        </div>
      </div>
    </section>
  );
}
