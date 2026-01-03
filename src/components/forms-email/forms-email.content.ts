export type Language = 'pt' | 'en';

interface FormsEmailContent {
  title: string;
  description: string;
  // Step 1 fields
  name: string;
  namePlaceholder: string;
  instagram: string;
  instagramPlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  // Step 2 fields
  eventType: string;
  eventTypeOptions: {
    private: string;
    corporate: string;
    wedding: string;
    other: string;
  };
  eventLocation: string;
  eventLocationPlaceholder: string;
  eventDate: string;
  numberOfGuests: string;
  numberOfGuestsPlaceholder: string;
  // Step 3 fields
  observations: string;
  observationsPlaceholder: string;
  // Buttons and messages
  nextButton: string;
  previousButton: string;
  submitButton: string;
  submitting: string;
  fieldRequired: string;
  invalidName: string;
  invalidEmail: string;
  invalidPhone: string;
  successMessage: string;
  errorMessage: string;
}

export const formsEmailContent: Record<Language, FormsEmailContent> = {
  pt: {
    title: 'Orçamento',
    description:
      'Preencha os dados abaixo e vamos lhe enviar um orçamento personalizado.',
    name: 'Nome',
    namePlaceholder: 'Seu nome completo',
    instagram: 'Instagram',
    instagramPlaceholder: '@seu_instagram',
    email: 'Email',
    emailPlaceholder: 'seu@email.com',
    phone: 'Telefone',
    phonePlaceholder: '(46) 9 9290-9011',
    eventType: 'Tipo de evento',
    eventTypeOptions: {
      private: 'Privado',
      corporate: 'Corporativo',
      wedding: 'Casamento',
      other: 'Outro',
    },
    eventLocation: 'Local do Evento',
    eventLocationPlaceholder: 'Digite o local',
    eventDate: 'Data do Evento',
    numberOfGuests: 'Número de convidados',
    numberOfGuestsPlaceholder: 'Ex: 50',
    observations: 'Observações',
    observationsPlaceholder: 'Caso tenha alguma observação, escreva aqui',
    nextButton: 'Próximo',
    previousButton: 'Anterior',
    submitButton: 'ENVIAR',
    submitting: 'Enviando...',
    fieldRequired: 'Este campo é obrigatório',
    invalidName: 'Nome inválido',
    invalidEmail: 'Email inválido',
    invalidPhone: 'Telefone inválido',
    successMessage: 'Orçamento enviado com sucesso! Entraremos em contato em breve.',
    errorMessage: 'Erro ao enviar. Tente novamente mais tarde.',
  },
  en: {
    title: 'Request a Quote',
    description:
      'Fill in the information below and we will send you a personalized quote.',
    name: 'Name',
    namePlaceholder: 'Your full name',
    instagram: 'Instagram',
    instagramPlaceholder: '@your_instagram',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    phone: 'Phone',
    phonePlaceholder: '(46) 9 9290-9011',
    eventType: 'Event Type',
    eventTypeOptions: {
      private: 'Private',
      corporate: 'Corporate',
      wedding: 'Wedding',
      other: 'Other',
    },
    eventLocation: 'Event Location',
    eventLocationPlaceholder: 'Enter the location',
    eventDate: 'Event Date',
    numberOfGuests: 'Number of Guests',
    numberOfGuestsPlaceholder: 'Ex: 50',
    observations: 'Observations',
    observationsPlaceholder: 'If you have any observations, write here',
    nextButton: 'Next',
    previousButton: 'Previous',
    submitButton: 'SEND',
    submitting: 'Sending...',
    fieldRequired: 'This field is required',
    invalidName: 'Invalid name',
    invalidEmail: 'Invalid email',
    invalidPhone: 'Invalid phone',
    successMessage: 'Quote sent successfully! We will contact you soon.',
    errorMessage: 'Error sending. Try again later.',
  },
};
