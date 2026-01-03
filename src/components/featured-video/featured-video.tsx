import { useEffect, useState } from "react";
import "./featured-video.css";
import { sanityClient } from "@/sanityClient";

interface FeaturedVideoData {
  titulo: string;
  tituloIngles: string;
  link: string;
}

const getSystemLanguage = (): 'pt' | 'en' => {
  const language = navigator.language.toLowerCase();
  return language.startsWith('pt') ? 'pt' : 'en';
};

// Extract YouTube video ID from various URL formats
function getYouTubeVideoId(url: string): string | null {
  if (!url) return null;

  // Handle different YouTube URL formats
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([^?]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

export function FeaturedVideo() {
  const [data, setData] = useState<FeaturedVideoData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedVideo = async () => {
      try {
        const result = await sanityClient.fetch(
          `*[_type == "videoDestaque"][0]`
        );
        setData(result);
        console.log("Fetched featured video data:", result);
      } catch (error) {
        console.error("Error fetching featured video data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedVideo();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!data) {
    return <div>Dados não encontrados</div>;
  }

  const videoId = getYouTubeVideoId(data.link);

  if (!videoId) {
    return <div>URL de vídeo inválida</div>;
  }

  const language = getSystemLanguage();
  const title = language === 'pt' ? data.titulo : data.tituloIngles;

  return (
    <section id="featured-video" className="featured-video">
      <div className="featured-video__container">
        <h1>{title}</h1>
        <div className="featured-video__wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="featured-video__iframe"
          />
        </div>
      </div>
    </section>
  );
}
