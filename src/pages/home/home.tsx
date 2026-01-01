import "./home.css";
import { Overview } from "@/components/overview/overview";
import { SobreNos } from "@/components/sobre-nos/sobre-nos";
import { VideoDestaque } from "@/components/video-destaque/video-destaque";
import { Eventos } from "@/components/eventos/eventos";

export function Home() {
  return (
    <section className="home">
      <Overview />
      <SobreNos />
      <VideoDestaque />
      <Eventos />
    </section>
  );
}
