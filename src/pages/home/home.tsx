import "./home.css";
import { Overview } from "@/components/overview/overview";
import { SobreNos } from "@/components/sobre-nos/sobre-nos";
import { VideoDestaque } from "@/components/video-destaque/video-destaque";
import { Eventos } from "@/components/eventos/eventos";
import { VideoGrid } from "@/components/video-grid/video-grid";
import { SomLuz } from "@/components/som-luz/som-luz";
import { FormsEmail } from "@/components/forms-email/forms-email";

export function Home() {
  return (
    <section className="home">
      <Overview />
      <SobreNos />
      <VideoDestaque />
      <Eventos />
      <VideoGrid />
      <SomLuz />
      <FormsEmail />
    </section>
  );
}
