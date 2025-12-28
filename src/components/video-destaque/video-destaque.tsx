import { useEffect, useState } from "react";
import "./video-destaque.css";
import { sanityClient } from "@/sanityClient";

interface videoDestaqueData {
  titulo: string;
  link: string;
}

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

export function VideoDestaque() {
  const [data, setData] = useState<videoDestaqueData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoDestaque = async () => {
      try {
        const result = await sanityClient.fetch(
          `*[_type == "videoDestaque"][0]`
        );
        setData(result);
      } catch (error) {
        console.error("Error fetching video destaque data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoDestaque();
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

  return (
    <section id="video-destaque" className="video-destaque">
      <div className="video-destaque__container">
        <h2>{data.titulo}</h2>
        <div className="video-destaque__wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-destaque__iframe"
          />
        </div>
      </div>
    </section>
  );
}