export type Language = "pt" | "en";

interface HeaderContent {
  menuLabel: string;
  navLinks: {
    quemSomos: string;
    musica: string;
    videos: string;
    shows: string;
    som: string;
  };
  budget: string;
}

export const headerContent: Record<Language, HeaderContent> = {
  pt: {
    menuLabel: "Abrir menu",
    navLinks: {
      quemSomos: "Quem Somos",
      musica: "Música Para Eventos",
      videos: "Vídeos",
      shows: "Shows Especiais",
      som: "Som, Luz e DJ",
    },
    budget: "Faça um orçamento",
  },
  en: {
    menuLabel: "Open menu",
    navLinks: {
      quemSomos: "About Us",
      musica: "Music For Events",
      videos: "Videos",
      shows: "Special Shows",
      som: "Sound, Light and DJ",
    },
    budget: "Request a Quote",
  },
};
