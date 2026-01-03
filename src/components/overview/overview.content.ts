export type Language = 'pt' | 'en';

interface OverviewContent {
  title: string;
  buttonText: string;
  whatsappMessage: string;
  imageAlt: string;
}

export const overviewContent: Record<Language, OverviewContent> = {
  pt: {
    title: 'Levamos Música ao Vivo para o seu evento social ou corporativo',
    buttonText: 'PEÇA UM ORÇAMENTO',
    whatsappMessage: 'Olá, gostaria de saber mais sobre os serviços de música ao vivo.',
    imageAlt: 'Guitarra clássica, acústica e elétrica',
  },
  en: {
    title: 'We Bring Live Music to Your Social or Corporate Event',
    buttonText: 'REQUEST A QUOTE',
    whatsappMessage: 'Hello, I would like to know more about live music services.',
    imageAlt: 'Classical, acoustic and electric guitar',
  },
};
