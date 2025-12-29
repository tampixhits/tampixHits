import { useState, useRef, useEffect } from "react";
import "./spotify-redirect.css";
import { Spotify } from "@/assets/logos";

interface SpotifyArtistButtonProps {
  location?: "header" | "footer"; // controls toast direction
}

const SpotifyArtistButton = ({ location = "header" }: SpotifyArtistButtonProps) => {
  const [showToast, setShowToast] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<SVGSVGElement>(null);
  
  const spotifyWebUrl = "https://open.spotify.com/artist/1uvgjDX1AAuConmn2zvdcO?si=90OZblWDTSWSBeYluttF6w&nd=1&dlsi=5ef9c7f152a84eca";
  const spotifyUri = "spotify:artist:1uvgjDX1AAuConmn2zvdcO";

  const handleSpotifyClick = () => {
    setShowToast(!showToast);
  };

  const openInApp = () => {
    window.location.href = spotifyUri;
    setShowToast(false);
  };

  const openInWeb = () => {
    window.open(spotifyWebUrl, "_blank");
    setShowToast(false);
  };

  // Close toast when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        toastRef.current &&
        buttonRef.current &&
        !toastRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowToast(false);
      }
    };

    if (showToast) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showToast]);

  return (
    <div className="spotify-button-container">
      <Spotify
        ref={buttonRef}
        className="social-media-logo"
        onClick={handleSpotifyClick}
      />
      {showToast && (
        <div
          ref={toastRef}
          className={`spotify-toast ${location === "footer" ? "spotify-toast--up" : "spotify-toast--down"}`}
        >
          <button onClick={openInApp} className="toast-option">
            Abrir no App
          </button>
          <button onClick={openInWeb} className="toast-option">
            Abrir no Navegador
          </button>
        </div>
      )}
    </div>
  );
};

export default SpotifyArtistButton;
