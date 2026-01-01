import "./footer.css";
import WhatsAppButton from "../whatsapp-button/whatsapp-button";
import { Facebook, Instagram, Logo, Youtube, Spotify } from "@/assets/logos";
import { useState } from "react";

export function Footer() {
  const [showToast, setShowToast] = useState(false);

  const copyText = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };


  return (
    <footer className="footer">
      <div  className="footer__wrapper">
        <div className="footer__section footer__section--left">
          <div className="footer__contacts">
            Guilherme Andreatta <br />
            <button 
              onClick={() => copyText("guilhermeandreatta@hotmail.com")}
              className="email-button"
            >
              guilhermeandreatta@hotmail.com
            </button>
            <div className="contact__whats">
              <WhatsAppButton
                phoneNumber="+5541992909011"
                message="Olá, gostaria de saber mais sobre os serviços da tampix hits."
                variant="icon"
              >
                +55 41 99290-9011
              </WhatsAppButton>
            </div>
          </div>
        </div>

        <div className="footer__section footer__section--middle">
          <div className="footer__middle">
            <div className="social__media">
              Redes Sociais
              <div className="social__media__logos">
                <div className="footer__social-media">
                  <Facebook
                    className="footer__social-media-logo"
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/guilhermeandreatta.musico/videos/clique-aqui-para-iniciar-o-atendimento/849864734167693/"
                      )
                    }
                  />
                  <Instagram
                    className="footer__social-media-logo"
                    onClick={() =>
                      window.open("https://www.instagram.com/tampixhits/")
                    }
                  />
                  <Youtube
                    className="footer__social-media-logo"
                    onClick={() =>
                      window.open("https://www.youtube.com/@guiandreatta")
                    }
                  />
                  <Spotify
                    className="footer__social-media-logo"
                    onClick={() =>
                      window.open(
                        "https://open.spotify.com/artist/1uvgjDX1AAuConmn2zvdcO?si=90OZblWDTSWSBeYluttF6w&nd=1&dlsi=5ef9c7f152a84eca"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__section footer__section--right">
          <Logo className="footer__logo" />
        </div>
      </div>

      <div className="developer__section">
        Desenvolvido por Bernardo Giraldi Andreatta <br />
        <button 
          onClick={() => copyText("bernardo.giraldi.andreatta@gmail.com")}
          className="email-button"
        >
          bernardo.giraldi.andreatta@gmail.com
        </button>
      </div>

      {showToast && (
        <div className="toast">
          Copiado para área de transferência
        </div>
      )}

    </footer>
  );
}
