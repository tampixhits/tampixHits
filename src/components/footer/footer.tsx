import SpotifyArtistButton from "../spotify-redirect/spotify-redirect";
import WhatsAppButton from "../whatsapp-button/whatsapp-button";
import "./footer.css";
import { Facebook, Instagram, Logo, Youtube } from "@/assets/logos";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section footer__section--left">
        <div className="footer__contacts">
          Guilherme Andreatta <br />
          guilhermeandreatta@hotmail.com
          <div className="contact__whats">
            <WhatsAppButton
              phoneNumber="+5541992909011"
              message="Olá, gostaria de saber mais sobre os serviços da tampix hits."
              variant="icon"
            />
            +55 41 99290-9011
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
                <SpotifyArtistButton location="footer" />
              </div>
            </div>
          </div>
          <div className="website">
            Desenvolvido por Bernardo Giraldi Andreatta <br />
            bernardo.giraldi.andreatta@gmail.com <br />
          </div>
        </div>
      </div>

      <div className="footer__section footer__section--right">
        <Logo className="footer__logo" />
      </div>
    </footer>
  );
}
