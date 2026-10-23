export interface Project {
  kind: string;
  /** Quebrado em linhas para o título grande respirar. */
  title: string[];
  description: string;
  tags: string[];
  url: string;
  accent: string;
}

/** Projetos publicados, conferidos no GitHub e nos domínios de produção. */
export const projects: Project[] = [
  {
    kind: "Landing de eventos",
    title: ["Camarote", "PMD"],
    description:
      "Venda de ingressos com line-up, galeria e animações de rolagem. Feita para converter no celular, onde acontece a maior parte do acesso.",
    tags: ["React", "Vite", "Framer Motion"],
    url: "https://camarotepmd.webpulseservicos.com/",
    accent: "#a78bfa",
  },
  {
    kind: "Site institucional",
    title: ["Baracho", "Industrial"],
    description:
      "Engenharia pesada: alpinismo industrial, solda e manutenção. Estrutura pensada para transmitir autoridade técnica e gerar contato comercial direto.",
    tags: ["React", "Tailwind CSS", "SEO"],
    url: "https://barachosolucoes.com/",
    accent: "#94a3b8",
  },
  {
    kind: "App de delivery",
    title: ["Rei dos", "Salgados"],
    description:
      "Cardápio, carrinho, acompanhamento de pedido e painel para a cozinha receber tudo em tempo real, sem depender de telefone.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    url: "https://reidossalgados.webpulseservicos.com/",
    accent: "#fbbf24",
  },
  {
    kind: "E-commerce completo",
    title: ["Seu", "Manto"],
    description:
      "Loja de camisetas de ponta a ponta: vitrine, carrinho, checkout com pagamento online, painel administrativo e pedidos atualizando em tempo real.",
    tags: ["Next.js", "Supabase", "Mercado Pago"],
    url: "https://seumanto.webpulseservicos.com/",
    accent: "#818cf8",
  },
  {
    kind: "Site + painel administrativo",
    title: ["Shellton", "Auto Mecânica"],
    description:
      "Oficina com agendamento online, fila pública atualizando ao vivo e dashboard para a equipe gerenciar os atendimentos do dia.",
    tags: ["Next.js", "TypeScript", "Supabase Realtime"],
    url: "https://shelltonautomecanica.webpulseservicos.com/",
    accent: "#2dd4bf",
  },
  {
    kind: "Gestão de restaurante",
    title: ["Boteco", "Kabanas Beer"],
    description:
      "Cardápio digital, pedidos por mesa e PDV integrados ao controle de caixa e estoque. Painel de cozinha em tempo real e impressão de pedidos para acompanhar a operação do boteco.",
    tags: ["Next.js", "Supabase", "Tempo real"],
    url: "https://kabanasbeer.webpulseservicos.com/cardapio/kabanas",
    accent: "#d4af37",
  },
  {
    kind: "Plataforma de campanhas",
    title: ["Jeiel", "Tattoo"],
    description:
      "Campanhas com seleção de números, área do participante e resultados públicos. Painel administrativo para gerenciar reservas, conferir pagamentos e personalizar a identidade visual do site.",
    tags: ["React", "TypeScript", "Supabase"],
    url: "https://jeieltattoo.webpulseservicos.com/",
    accent: "#e4bd76",
  },
  {
    kind: "Site institucional industrial",
    title: ["DRM", "Serviços"],
    description:
      "Apresentação de serviços de montagem e manutenção industrial, com galeria de obras, vídeos e portfólio de especialidades. Contato comercial direto para transformar visitas em oportunidades de negócio.",
    tags: ["React", "Vite", "TypeScript"],
    url: "https://drmm.webpulseservicos.com/",
    accent: "#fb923c",
  },
  {
    kind: "Cardápio digital e pedidos",
    title: ["Do’Cheff", "RN"],
    description:
      "Cardápio digital para consultar os produtos do restaurante, montar o pedido e acompanhar seu andamento. Uma experiência de delivery pensada para facilitar a compra pelo celular.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    url: "https://www.do-cheff-rn.com.br/",
    accent: "#f87171",
  },
];
