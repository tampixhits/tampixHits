import "./header.css";
import { Logo, Facebook, Instagram, Youtube, Spotify } from "@/assets/logos";
import { useState } from "react";
import { headerContent } from "./header.content";

const getSystemLanguage = (): 'pt' | 'en' => {
  const language = navigator.language.toLowerCase();
  return language.startsWith('pt') ? 'pt' : 'en';
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const content = headerContent[getSystemLanguage()];

  function scrollToSection(section: string) {
    const sectionElement = document.getElementById(section);
    
    if (sectionElement) {
      const isMobile = window.innerWidth <= 768;
      const header = isMobile ? (document.querySelector(".header") as HTMLElement) : null;
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = sectionElement.offsetTop - headerHeight;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1200; 
      let start: number | null = null;

      function animation(currentTime: number) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
      setMenuOpen(false);
    }
  }

  return (
    <header className="header">
      <Logo className="logo" />

      <button
        className="menu-toggle"
        aria-label={content.menuLabel}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <button className="nav-link" onClick={() => scrollToSection('about-us')}>{content.navLinks.aboutUs}</button>
        <button className="nav-link" onClick={() => scrollToSection('events')}>{content.navLinks.musicForEvents}</button>
        <button className="nav-link" onClick={() => scrollToSection('videos')}>{content.navLinks.videos}</button>
        <button className="nav-link" onClick={() => scrollToSection('sound-light')}>{content.navLinks.soundLightDj}</button>
        
        <div className="nav-contact">
          <button className="budget" onClick={() => scrollToSection('quote')}>{content.budget}</button>
          <div className="social-media">
            <Facebook className="social-media-logo" onClick={() => window.open("https://www.facebook.com/guilhermeandreatta.musico/videos/clique-aqui-para-iniciar-o-atendimento/849864734167693/")}/>
            <Instagram className="social-media-logo" onClick={() => window.open("https://www.instagram.com/tampixhits/")}/>
            <Youtube className="social-media-logo" onClick={() => window.open("https://www.youtube.com/@guiandreatta")}/>
            <Spotify className="social-media-logo" onClick={() => window.open("https://open.spotify.com/artist/1uvgjDX1AAuConmn2zvdcO?si=90OZblWDTSWSBeYluttF6w&nd=1&dlsi=5ef9c7f152a84eca")}/>
          </div>
        </div>
      </nav>

      <div className="contact">
        <button className="budget" onClick={() => scrollToSection('quote')}>{content.budget}</button>
        <div className="social-media">
          <Facebook className="social-media-logo" onClick={() => window.open("https://www.facebook.com/guilhermeandreatta.musico/videos/clique-aqui-para-iniciar-o-atendimento/849864734167693/")}/>
          <Instagram className="social-media-logo" onClick={() => window.open("https://www.instagram.com/tampixhits/")}/>
          <Youtube className="social-media-logo" onClick={() => window.open("https://www.youtube.com/@guiandreatta")}/>
          <Spotify className="social-media-logo" onClick={() => window.open("https://open.spotify.com/artist/1uvgjDX1AAuConmn2zvdcO?si=90OZblWDTSWSBeYluttF6w&nd=1&dlsi=5ef9c7f152a84eca")}/>
        </div>
      </div>
    </header>
  );
}
