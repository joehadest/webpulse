/**
 * Dados do site em um lugar só.
 * Edite aqui — os componentes leem tudo deste arquivo.
 */

export const siteConfig = {
  name: "WebPulse",
  tagline: "Sites e sistemas sob medida",
  url: "https://webpulseservicos.com",

  whatsapp: "5584998699449",
  instagram: "webpulse.oficial",
  github: "joehadest",

  /**
   * Números mostrados na faixa de credibilidade.
   * Mantenha honesto: cliente confere.
   */
  stats: [
    { value: "5+", label: "Projetos entregues" },
    { value: "100%", label: "Código sob medida" },
    { value: "24h", label: "Tempo médio de resposta" },
    { value: "30 dias", label: "Suporte pós-entrega incluso" },
  ],

  /**
   * Selos de confiança abaixo do botão principal do hero.
   * São promessas — só deixe o que você realmente cumpre.
   */
  trustBadges: [
    "Orçamento sem compromisso",
    "Prazo definido por contrato",
    "O código é seu",
  ],

  /**
   * DEPOIMENTOS REAIS APENAS.
   *
   * A seção fica invisível enquanto esta lista estiver vazia — de propósito.
   * Depoimento inventado é o jeito mais rápido de perder um cliente que
   * resolve conferir. Peça um texto curto no WhatsApp ao entregar um projeto
   * e cole aqui:
   *
   * { quote: "...", author: "Nome", role: "Cargo, Empresa", project: "Nome do projeto" }
   */
  testimonials: [] as {
    quote: string;
    author: string;
    role: string;
    project?: string;
  }[],
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const instagramLink = `https://instagram.com/${siteConfig.instagram}`;
export const githubLink = `https://github.com/${siteConfig.github}`;
