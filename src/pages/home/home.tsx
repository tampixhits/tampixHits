import "./home.css";
import { Overview } from "@/components/overview/overview";
import { AboutUs } from "@/components/about-us/about-us";
import { FeaturedVideo } from "@/components/featured-video/featured-video";
import { Events } from "@/components/events/events";
import { VideoGrid } from "@/components/video-grid/video-grid";
import { SoundLight } from "@/components/sound-light/sound-light";
import { FormsEmail } from "@/components/forms-email/forms-email";

export function Home() {
  return (
    <section className="home">
      <Overview />
      <AboutUs />
      <FeaturedVideo />
      <Events />
      <VideoGrid />
      <SoundLight />
      <FormsEmail />
    </section>
  );
}
