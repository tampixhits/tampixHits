export type Language = 'pt' | 'en';

interface AboutUsContent {
  title: string;
  imageAlt: string;
    description: string;
}

export const aboutUsContent: Record<Language, AboutUsContent> = {
  pt: {
    title: 'Quem Somos',
    imageAlt: 'Sobre Nós',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  en: {
    title: 'About Us',
    imageAlt: 'About Us',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};
