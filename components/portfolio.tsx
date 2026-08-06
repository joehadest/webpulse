"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Timeline, type TimelineEntry } from "@/components/ui/timeline";
import { whatsappLink } from "@/lib/site-config";

const imageClass =
  "rounded-xl object-cover h-28 md:h-44 lg:h-60 w-full border border-white/10 shadow-lg transition-all duration-500 group-hover:border-sky-400/30 group-hover:shadow-[0_8px_30px_rgba(56,189,248,0.12)] group-hover:scale-[1.02]";

const descriptionClass =
  "text-white/60 text-xs md:text-sm font-normal mb-8 leading-relaxed max-w-2xl";

const projectsData: TimelineEntry[] = [
  {
    title: "Camarote PMD",
    url: "https://camarotepmd.com.br/",
    tags: ["React", "Vite", "Framer Motion"],
    content: (
      <div>
        <p className={descriptionClass}>
          Landing de eventos para venda de ingressos, com line-up, galeria e
          animações de rolagem. Feita para converter no celular, onde acontece a
          maior parte do acesso.
        </p>
        <div className="grid grid-cols-2 gap-4 group">
          <Image
            src="/projetos/pmd.png"
            alt="Camarote PMD — página inicial"
            width={500}
            height={500}
            className={imageClass}
          />
          <Image
            src="/projetos/pmd%202.png"
            alt="Camarote PMD — seção de line-up"
            width={500}
            height={500}
            className={imageClass}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Baracho Industrial",
    url: "https://barachosolucoes.com/",
    tags: ["React", "Tailwind CSS", "SEO"],
    content: (
      <div>
        <p className={descriptionClass}>
          Site institucional para engenharia: alpinismo industrial, solda e
          manutenção. Estrutura pensada para transmitir autoridade técnica e
          gerar contato comercial direto.
        </p>
        <div className="grid grid-cols-2 gap-4 group">
          <Image
            src="/projetos/baracho.png"
            alt="Baracho Industrial — página inicial"
            width={500}
            height={500}
            className={imageClass}
          />
          <Image
            src="/projetos/barachos%202.png"
            alt="Baracho Industrial — página de serviços"
            width={500}
            height={500}
            className={imageClass}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Rei dos Salgados",
    url: "https://reidossalgados.webpulseservicos.com/",
    tags: ["Next.js", "MongoDB", "Tempo real"],
    content: (
      <div>
        <p className={descriptionClass}>
          App de delivery completo: cardápio, carrinho, acompanhamento de pedido
          e painel para a cozinha receber os pedidos em tempo real.
        </p>
        <div className="grid grid-cols-2 gap-4 group">
          <Image
            src="/projetos/rei%20dos%20salgados.png"
            alt="Rei dos Salgados — cardápio do cliente"
            width={500}
            height={500}
            className={imageClass}
          />
          <Image
            src="/projetos/rei%20dos%20salgados%20admin.png"
            alt="Rei dos Salgados — painel da cozinha"
            width={500}
            height={500}
            className={imageClass}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Seu Manto",
    url: "https://seumanto.webpulseservicos.com/",
    tags: ["Next.js", "Supabase", "Mercado Pago"],
    content: (
      <div>
        <p className={descriptionClass}>
          E-commerce full-stack de camisetas: loja, carrinho, checkout com
          pagamento online, painel administrativo e atualização de pedidos em
          tempo real via Supabase.
        </p>
        <div className="grid grid-cols-2 gap-4 group">
          <Image
            src="/projetos/seumanto.png"
            alt="Seu Manto — vitrine da loja"
            width={500}
            height={500}
            className={imageClass}
          />
          <Image
            src="/projetos/seumanto%202.png"
            alt="Seu Manto — painel administrativo"
            width={500}
            height={500}
            className={imageClass}
          />
        </div>
      </div>
    ),
  },
  {
    title: "DRM Serviços",
    url: "https://www.wwsdrmmontgem.com.br/",
    tags: ["Next.js", "Conteúdo editável", "SEO"],
    content: (
      <div>
        <p className={descriptionClass}>
          Site institucional para serviços industriais, com seções editáveis de
          serviços, projetos em destaque e canais de contato comercial.
        </p>
        <div className="grid grid-cols-2 gap-4 group">
          <Image
            src="/projetos/DRM%20.png"
            alt="DRM Serviços — página inicial"
            width={500}
            height={500}
            className={imageClass}
          />
          <Image
            src="/projetos/DRM%202.png"
            alt="DRM Serviços — serviços em destaque"
            width={500}
            height={500}
            className={imageClass}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Shellton Auto Mecânica",
    url: "https://shelltonautomecanica.webpulseservicos.com/",
    tags: ["Next.js", "TypeScript", "Supabase Realtime"],
    content: (
      <div>
        <p className={descriptionClass}>
          Site e painel administrativo para oficina mecânica: portfólio de
          serviços, agendamento online, fila pública em tempo real e dashboard
          para a equipe gerenciar os atendimentos do dia.
        </p>
        <div className="grid grid-cols-2 gap-4 group">
          <Image
            src="/projetos/shelltonautomecanica.png"
            alt="Shellton Auto Mecânica — site público"
            width={500}
            height={500}
            className={imageClass}
          />
          <Image
            src="/projetos/shelltonautomecanica2.png"
            alt="Shellton Auto Mecânica — painel administrativo"
            width={500}
            height={500}
            className={imageClass}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Seu projeto aqui",
    content: (
      <div className="rounded-2xl border border-dashed border-sky-400/20 bg-sky-400/[0.03] p-8 max-w-2xl">
        <p className="font-display text-lg font-semibold text-white">
          O próximo case pode ser o seu.
        </p>
        <p className="mt-2 text-sm text-white/45 leading-relaxed">
          Me conte sua ideia e eu volto com escopo, prazo e valor. A primeira
          conversa não custa nada.
        </p>
        <a
          href={whatsappLink(
            "Olá! Vi seu portfólio no site da WebPulse e quero conversar sobre um projeto.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary group mt-6"
        >
          Começar meu projeto
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    ),
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full">
      <Timeline
        data={projectsData}
        title="Projetos"
        highlight="entregues"
        subtitle="Sites e sistemas reais, no ar, rodando para clientes de verdade. Clique para visitar."
      />
    </section>
  );
}
