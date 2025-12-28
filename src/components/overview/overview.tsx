import "./overview.css";
import image from "@/assets/imgs/guitar-classical-guitar-acoustic-guitar-electric-guitar.webp";
import WhatsAppButton from "../whatsapp-button/whatsapp-button";

export function Overview() {
  return (
    <div className="wrapper-overview">
      <div className="text-overview">
        <h1>Levamos Música ao Vivo para o seu evento social ou corporativo</h1>
        <p>
          Voz e Violão, Banda, Quarteto de Cordas, Violino, Saxofone, Sax Live,
          Quarteto Vocal, Som, Luz, DJ e muito mais!
        </p>
        <WhatsAppButton phoneNumber="+5541992909011" message="Olá, gostaria de saber mais sobre os serviços de música ao vivo."/>
      </div>

      <img src={image} alt="Image" className="image" />
    </div>
  );
}
