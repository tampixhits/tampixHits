export type Language = 'pt' | 'en';

interface FooterContent {
  name: string;
  email: string;
  whatsappMessage: string;
  phoneNumber: string;
  socialMediaLabel: string;
  developerLabel: string;
  developerEmail: string;
  toastMessage: string;
}

export const footerContent: Record<Language, FooterContent> = {
  pt: {
    name: 'Guilherme Andreatta',
    email: 'guilhermeandreatta@hotmail.com',
    whatsappMessage: 'Olá, gostaria de saber mais sobre os serviços da tampix hits.',
    phoneNumber: '+55 41 99290-9011',
    socialMediaLabel: 'Redes Sociais',
    developerLabel: 'Desenvolvido por Bernardo Giraldi Andreatta',
    developerEmail: 'bernardo.giraldi.andreatta@gmail.com',
    toastMessage: 'Copiado para área de transferência',
  },
  en: {
    name: 'Guilherme Andreatta',
    email: 'guilhermeandreatta@hotmail.com',
    whatsappMessage: 'Hello, I would like to know more about Tampix Hits services.',
    phoneNumber: '+55 41 99290-9011',
    socialMediaLabel: 'Social Media',
    developerLabel: 'Developed by Bernardo Giraldi Andreatta',
    developerEmail: 'bernardo.giraldi.andreatta@gmail.com',
    toastMessage: 'Copied to clipboard',
  },
};
