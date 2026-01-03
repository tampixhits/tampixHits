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
    description: 'Tampix Hits - Rock nacional e internacional no mais alto nível! Com um repertório impecável e performance de alto padrão, somos a trilha sonora perfeita para casamentos, eventos corporativos e aniversários. </br> </br> Profissionalismo, carisma e qualidade garantida em cada apresentação. </br> </br> Transforme seu evento em uma noite inesquecível com o Tampix Hits.'
  },
  en: {
    title: 'About Us',
    imageAlt: 'About Us',
    description: 'Tampix Hits - International and national rock at the highest level! With an impeccable repertoire and high-standard performance, we are the perfect soundtrack for weddings, corporate events, and birthdays. </br> </br> Professionalism, charisma, and guaranteed quality in every performance. </br> </br> Make your event an unforgettable night with Tampix Hits.'
  },
};
