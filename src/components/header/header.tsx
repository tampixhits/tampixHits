import "./header.css";
import { Logo, Facebook, Instagram, Youtube, X } from "@/assets/logos";
import { useState } from "react";
import "@/components/spotify-redirect/spotify-redirect"
import SpotifyArtistButton from "@/components/spotify-redirect/spotify-redirect";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Logo className="logo" />

      <button
        className="menu-toggle"
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <button className="nav-link">Quem Somos</button>
        <button className="nav-link">Música Para Eventos</button>
        <button className="nav-link">Vídeos</button>
        <button className="nav-link">Shows Especiais</button>
        <button className="nav-link">Som, Luz e DJ</button>
      </nav>

      <div className="contact">
        <button className="budget">Faça um orçamento</button>
        <div className="social-media">
          <Facebook className="social-media-logo"  onClick={() => window.open("https://www.facebook.com/guilhermeandreatta.musico/videos/clique-aqui-para-iniciar-o-atendimento/849864734167693/")}/>
          <Instagram className="social-media-logo"  onClick={() => window.open("https://www.instagram.com/tampixhits/")}/>
          <Youtube className="social-media-logo"  onClick={() => window.open("https://www.youtube.com/@guiandreatta")}/>
          {/* <X className="social-media-logo" /> */}
          <SpotifyArtistButton/>
        </div>
      </div>
    </header>
  );
}
