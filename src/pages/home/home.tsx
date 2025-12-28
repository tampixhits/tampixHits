import "./home.css";
import { Overview } from "@/components/overview/overview";
import { SobreNos } from "@/components/sobre-nos/sobre-nos";
import { VideoDestaque } from "@/components/video-destaque/video-destaque";

export function Home() {
  return (
    <section className="home">
      <Overview />
      <SobreNos />
      <VideoDestaque />
    </section>
  );
}
