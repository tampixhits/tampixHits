import { useEffect, useState } from "react";
import "./video-grid.css";
import { sanityClient } from "@/sanityClient";

interface Video {
  _id: string;
  nome: string;
  nomeIngles?: string;
  link: string;
}

const getSystemLanguage = (): 'pt' | 'en' => {
  const language = navigator.language.toLowerCase();
  return language.startsWith('pt') ? 'pt' : 'en';
};

// Extract YouTube video ID from various URL formats
function getYouTubeVideoId(url: string): string | null {
  if (!url) return null;

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

export function VideoGrid() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const language = getSystemLanguage();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const result = await sanityClient.fetch(
          `*[_type == "videos"] | order(_createdAt desc)`
        );
        setVideos(result);
        console.log("Fetched videos:", result);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const getVideoTitle = (video: Video): string => {
    if (language === 'en' && video.nomeIngles) {
      return video.nomeIngles;
    }
    return video.nome;
  };

  if (loading) {
    return <div className="video-grid__loading">Carregando vídeos...</div>;
  }

  if (!videos || videos.length === 0) {
    return <div className="video-grid__empty">Nenhum vídeo disponível</div>;
  }

  return (
    <section id="videos" className="video-grid">
      <div className="video-grid__container">
        {videos.map((video) => {
          const videoId = getYouTubeVideoId(video.link);
          
          if (!videoId) return null;

          return (
            <div key={video._id} className="video-grid__item">
              <div className="video-grid__wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-grid__iframe"
                  title={getVideoTitle(video)}
                />
              </div>
              <h3 className="video-grid__title">{getVideoTitle(video)}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}