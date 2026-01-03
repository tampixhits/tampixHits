import "./home.css";
import { Overview } from "@/components/overview/overview";
import { AboutUs } from "@/components/about-us/about-us";
import { FeaturedVideo } from "@/components/featured-video/featured-video";
import { Events } from "@/components/events/events";
import { VideoGrid } from "@/components/video-grid/video-grid";
import { SoundLight } from "@/components/sound-light/sound-light";
import { FormsEmail } from "@/components/forms-email/forms-email";
import WhatsAppButton from "@/components/whatsapp-button/whatsapp-button";

export function Home() {
  const getSystemLanguage = (): "pt" | "en" => {
    const language = navigator.language.toLowerCase();
    return language.startsWith("pt") ? "pt" : "en";
  };

  const lang = getSystemLanguage();
  const floatingMessage =
    lang === "pt"
      ? "Olá! Quero saber mais sobre os serviços da Tampix Hits."
      : "Hi! I'd like to know more about Tampix Hits services.";

  return (
    <section className="home">
      <div className="home__wrapper">
        <Overview />
        <AboutUs />
        <FeaturedVideo />
        <Events />
        <VideoGrid />
        <SoundLight />
        <FormsEmail />
      </div>

      <div className="whatsapp-floating">
        <WhatsAppButton
          phoneNumber="+5541992909011"
          message={floatingMessage}
          variant="icon"
          ariaLabel={lang === "pt" ? "Fale conosco no WhatsApp" : "Chat on WhatsApp"}
        />
      </div>
    </section>
  );
}
