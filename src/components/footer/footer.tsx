import "./footer.css";
import WhatsAppButton from "../whatsapp-button/whatsapp-button";
import { Facebook, Instagram, Logo, Youtube, Spotify } from "@/assets/logos";
import { useState } from "react";
import { footerContent } from "./footer.content";

const getSystemLanguage = (): 'pt' | 'en' => {
  const language = navigator.language.toLowerCase();
  return language.startsWith('pt') ? 'pt' : 'en';
};

export function Footer() {
  const [showToast, setShowToast] = useState(false);
  const content = footerContent[getSystemLanguage()];

  const copyText = async (textToCopy: string) => {
    let usedFallback = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      } else {
        usedFallback = true;
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };


  return (
    <footer className="footer">
      <div  className="footer__wrapper">
        <div className="footer__section footer__section--left">
          <div className="footer__contacts">
            {content.name} <br />
            <button 
              onClick={() => copyText(content.email)}
              className="email-button"
            >
              {content.email}
            </button>
            <div className="contact__whats">
              <WhatsAppButton
                phoneNumber="+5541992909011"
                message={content.whatsappMessage}
                variant="icon"
              >
                {content.phoneNumber}
              </WhatsAppButton>
            </div>
          </div>
        </div>

        <div className="footer__section footer__section--middle">
          <div className="footer__middle">
            <div className="social__media">
              {content.socialMediaLabel}
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
        {content.developerLabel} <br />
        <button 
          onClick={() => copyText(content.developerEmail)}
          className="email-button"
        >
          {content.developerEmail}
        </button>
      </div>

      {showToast && (
        <div className="toast">
          {content.toastMessage}
        </div>
      )}

    </footer>
  );
}
