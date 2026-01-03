import "./header.css";
import { Logo, Facebook, Instagram, Youtube, Spotify } from "@/assets/logos";
import { useState } from "react";
import { scrollToSection } from "@/services/scrollToSection";
import { headerContent } from "./header.content";

const getSystemLanguage = (): 'pt' | 'en' => {
  const language = navigator.language.toLowerCase();
  return language.startsWith('pt') ? 'pt' : 'en';
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const content = headerContent[getSystemLanguage()];

  const handleTap = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    element.classList.add('tapped');
    setTimeout(() => element.classList.remove('tapped'), 200);
  };

  const handleNavClick = (section: string) => {
    const didScroll = scrollToSection(section);
    if (didScroll) setMenuOpen(false);
  };

  return (
    <header className="header">
      <Logo className="logo" />

      <button
        className="menu-toggle"
        aria-label={content.menuLabel}
        aria-expanded={menuOpen}
        onClick={(e) => {
          handleTap(e);
          setMenuOpen(!menuOpen);
        }}
      >
        ☰
      </button>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <button className="nav-link" onClick={() => handleNavClick('about-us')}>{content.navLinks.aboutUs}</button>
        <button className="nav-link" onClick={() => handleNavClick('events')}>{content.navLinks.musicForEvents}</button>
        <button className="nav-link" onClick={() => handleNavClick('videos')}>{content.navLinks.videos}</button>
        <button className="nav-link" onClick={() => handleNavClick('sound-light')}>{content.navLinks.soundLightDj}</button>
        
        <div className="nav-contact">
          <div className="social-media">
            <button className="social-media-button" onClick={(e) => { handleTap(e); window.open("https://www.facebook.com/guilhermeandreatta.musico/videos/clique-aqui-para-iniciar-o-atendimento/849864734167693/"); }} aria-label="Facebook">
              <Facebook className="social-media-logo" />
            </button>
            <button className="social-media-button" onClick={(e) => { handleTap(e); window.open("https://www.instagram.com/tampixhits/"); }} aria-label="Instagram">
              <Instagram className="social-media-logo" />
            </button>
            <button className="social-media-button" onClick={(e) => { handleTap(e); window.open("https://www.youtube.com/@guiandreatta"); }} aria-label="Youtube">
              <Youtube className="social-media-logo" />
            </button>
            <button className="social-media-button" onClick={(e) => { handleTap(e); window.open("https://open.spotify.com/artist/1uvgjDX1AAuConmn2zvdcO?si=90OZblWDTSWSBeYluttF6w&nd=1&dlsi=5ef9c7f152a84eca"); }} aria-label="Spotify">
              <Spotify className="social-media-logo" />
            </button>
          </div>
        </div>
      </nav>

      <div className="contact">
        <div className="social-media">
          <button className="social-media-button" onClick={(e) => { handleTap(e); window.open("https://www.facebook.com/guilhermeandreatta.musico/videos/clique-aqui-para-iniciar-o-atendimento/849864734167693/"); }} aria-label="Facebook">
            <Facebook className="social-media-logo" />
          </button>
          <button className="social-media-button" onClick={(e) => { handleTap(e); window.open("https://www.instagram.com/tampixhits/"); }} aria-label="Instagram">
            <Instagram className="social-media-logo" />
          </button>
          <button className="social-media-button" onClick={(e) => { handleTap(e); window.open("https://www.youtube.com/@guiandreatta"); }} aria-label="Youtube">
            <Youtube className="social-media-logo" />
          </button>
          <button className="social-media-button" onClick={(e) => { handleTap(e); window.open("https://open.spotify.com/artist/1uvgjDX1AAuConmn2zvdcO?si=90OZblWDTSWSBeYluttF6w&nd=1&dlsi=5ef9c7f152a84eca"); }} aria-label="Spotify">
            <Spotify className="social-media-logo" />
          </button>
        </div>
      </div>
    </header>
  );
}
