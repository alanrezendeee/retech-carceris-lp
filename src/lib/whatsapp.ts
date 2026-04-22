export type WhatsAppSource =
  | "navbar"
  | "hero"
  | "cta_primary"
  | "cta_specialist";

const messages: Record<WhatsAppSource, string> = {
  navbar:
    "Olá! Vi o CARCERIS pelo menu de navegação e gostaria de solicitar uma apresentação para a SEAP-PB.",
  hero:
    "Olá! Conheci o CARCERIS pela apresentação inicial da plataforma e tenho interesse em implementação para o sistema prisional da Paraíba.",
  cta_primary:
    "Olá! Quero solicitar uma apresentação formal do CARCERIS para a SEAP-PB.",
  cta_specialist:
    "Olá! Gostaria de falar com um especialista sobre o CARCERIS para o sistema prisional da Paraíba.",
};

export function getWhatsAppLink(source: WhatsAppSource): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5583999999999";
  const text = encodeURIComponent(messages[source]);
  return `https://wa.me/${number}?text=${text}`;
}
