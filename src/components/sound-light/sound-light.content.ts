export type Language = "pt" | "en";

interface SoundLightContent {
  title: string;
  description: string;
  buttonText: string;
  whatsappMessage: string;
  imageAlt: string;
}

export const soundLightContent: Record<Language, SoundLightContent> = {
  pt: {
    title: "Som, Luz e DJ",
    description:
      "Temos sonorização e iluminação para eventos com até 250 pessoas. Consulte pacotes especiais com a atração musical + sonorização, iluminação e DJ para o seu evento.",
    buttonText: "Consultar Pacote",
    whatsappMessage: "Olá, gostaria de saber mais sobre os pacotes de som, luz e DJ para eventos.",
    imageAlt: "DJ",
  },
  en: {
    title: "Sound, Light and DJ",
    description:
      "We have sound and lighting systems for events with up to 250 people. Ask about special packages with musical attraction + sound, lighting and DJ for your event.",
    buttonText: "Request Package",
    whatsappMessage: "Hello, I would like to know more about sound, light and DJ packages for events.",
    imageAlt: "DJ",
  },
};
