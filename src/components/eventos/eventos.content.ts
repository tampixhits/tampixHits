export type Language = 'pt' | 'en';

interface EventosContent {
  sectionTitle: string;
  casamento: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    buttonText: string;
    whatsappMessage: string;
    imageAlt: string;
  };
  corporativo: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    buttonText: string;
    whatsappMessage: string;
    imageAlt: string;
  };
  particular: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    buttonText: string;
    whatsappMessage: string;
    imageAlt: string;
  };
}

export const eventosContent: Record<Language, EventosContent> = {
  pt: {
    sectionTitle: 'Música para Eventos',
    casamento: {
      title: 'Casamentos',
      paragraph1:
        'A Tampix Hits oferece excelência na execução de canções para Cerimônia, Recepção e Festa de Casamento. Personalizamos a formação musical e o repertório. Prestamos assessoria para escolha da formação musical e o repertório de acordo com o gosto dos noivos.',
      paragraph2:
        'Além da formação musical e repertório, os noivos podem escolher a voz com nosso casting de cantores e cantoras. Conheça mais de perto o nosso trabalho e marque uma reunião on-line de segunda a sexta, das 8h até às 21hs.',
      buttonText: 'Marcar reunião agora',
      whatsappMessage: 'Olá, gostaria de saber mais sobre os serviços de música para casamentos.',
      imageAlt: 'Casamento',
    },
    corporativo: {
      title: 'Corporativo',
      paragraph1:
        'Pode ser o aniversário da empresa, a confraternização de final de ano, uma ação promocional, congresso ou feira. Nós estamos prontos para atender qualquer tipo de demanda musical, com repertório específico para cada situação.',
      paragraph2:
        'Já atuamos com empresas como: Yara Brasil, Agrofel, Hotel Deville, Unisinos, Tornak, Shopping Prais de Belas, Viva Open Mall, Famurs, Grupo RBS Hotel Embaixador, Veleiros do Sul, Colégio Rosário, Associação dos Procurados do Estado do RS, Sicredi, Fundmed, Credita, Verdes Vales e etc.',
      buttonText: 'Solicitar orçamento',
      whatsappMessage: 'Olá, gostaria de saber mais sobre os serviços de música para eventos corporativos.',
      imageAlt: 'Corporativo',
    },
    particular: {
      title: 'Particular',
      paragraph1: 'Vai comemorar seu aniversário em casa com os amigos ou fazer aquela festa no condomínio?',
      paragraph2: 'Temos formações musicais perfeitas para este tipo de ocasião com sonorização e iluminação inclusa.',
      buttonText: 'Peça um orçamento',
      whatsappMessage: 'Olá, gostaria de saber mais sobre os serviços de música para eventos particulares.',
      imageAlt: 'Particular',
    },
  },
  en: {
    sectionTitle: 'Music for Events',
    casamento: {
      title: 'Weddings',
      paragraph1:
        'Tampix Hits offers excellence in performing songs for Wedding Ceremonies, Receptions, and Celebrations. We customize the musical formation and repertoire. We provide guidance on choosing the musical formation and repertoire according to the couples preferences.',
      paragraph2:
        'In addition to the musical formation and repertoire, couples can choose the vocalist from our roster of singers. Learn more about our work and schedule an online meeting Monday through Friday, from 8am to 9pm.',
      buttonText: 'Schedule a meeting now',
      whatsappMessage: 'Hello, I would like to know more about music services for weddings.',
      imageAlt: 'Wedding',
    },
    corporativo: {
      title: 'Corporate',
      paragraph1:
        'Whether it is a company anniversary, year-end party, promotional action, congress, or trade show. We are ready to meet any type of musical demand, with a repertoire specific to each situation.',
      paragraph2:
        'We have worked with companies such as: Yara Brasil, Agrofel, Hotel Deville, Unisinos, Tornak, Shopping Prais de Belas, Viva Open Mall, Famurs, Grupo RBS Hotel Embaixador, Veleiros do Sul, Colégio Rosário, Association of Attorneys of the State of RS, Sicredi, Fundmed, Credita, Verdes Vales, and others.',
      buttonText: 'Request a budget',
      whatsappMessage: 'Hello, I would like to know more about music services for corporate events.',
      imageAlt: 'Corporate',
    },
    particular: {
      title: 'Private Events',
      paragraph1: 'Celebrating your birthday at home with friends or throwing a party at the condominium?',
      paragraph2: 'We have the perfect musical formations for this type of occasion with sound and lighting included.',
      buttonText: 'Request a budget',
      whatsappMessage: 'Hello, I would like to know more about music services for private events.',
      imageAlt: 'Private Event',
    },
  },
};
