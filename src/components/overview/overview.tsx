import "./overview.css";
import image from "@/assets/imgs/PlaceholderLC.png";
import WhatsAppButton from "../whatsapp-button/whatsapp-button";

export function Overview() {
  return (
    <div className="wrapper">
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
