export type Language = 'pt' | 'en';

interface OverviewContent {
  title: string;
  description: string;
  buttonText: string;
  whatsappMessage: string;
  imageAlt: string;
}

export const overviewContent: Record<Language, OverviewContent> = {
  pt: {
    title: 'Levamos Música ao Vivo para o seu evento social ou corporativo',
    description:
      'Voz e Violão, Banda, Quarteto de Cordas, Violino, Saxofone, Sax Live, Quarteto Vocal, Som, Luz, DJ e muito mais!',
    buttonText: 'Peça um orçamento',
    whatsappMessage: 'Olá, gostaria de saber mais sobre os serviços de música ao vivo.',
    imageAlt: 'Guitarra clássica, acústica e elétrica',
  },
  en: {
    title: 'We Bring Live Music to Your Social or Corporate Event',
    description:
      'Voice and Guitar, Band, String Quartet, Violin, Saxophone, Sax Live, Vocal Quartet, Sound, Light, DJ and much more!',
    buttonText: 'Request a Quote',
    whatsappMessage: 'Hello, I would like to know more about live music services.',
    imageAlt: 'Classical, acoustic and electric guitar',
  },
};
