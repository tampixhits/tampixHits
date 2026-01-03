export type Language = "pt" | "en";

interface HeaderContent {
  menuLabel: string;
  navLinks: {
    aboutUs: string;
    musicForEvents: string;
    videos: string;
    specialShows: string;
    soundLightDj: string;
  };
  budget: string;
}

export const headerContent: Record<Language, HeaderContent> = {
  pt: {
    menuLabel: "Abrir menu",
    navLinks: {
      aboutUs: "Quem Somos",
      musicForEvents: "Música Para Eventos",
      videos: "Vídeos",
      specialShows: "Shows Especiais",
      soundLightDj: "Som, Luz e DJ",
    },
    budget: "Faça um orçamento",
  },
  en: {
    menuLabel: "Open menu",
    navLinks: {
      aboutUs: "About Us",
      musicForEvents: "Music For Events",
      videos: "Videos",
      specialShows: "Special Shows",
      soundLightDj: "Sound, Light and DJ",
    },
    budget: "Request a Quote",
  },
};
