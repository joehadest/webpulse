"use client";

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const imageClass =
  "rounded-xl object-cover h-28 md:h-44 lg:h-60 w-full border border-white/10 shadow-lg transition-all duration-500 group-hover:border-sky-400/30 group-hover:shadow-[0_8px_30px_rgba(56,189,248,0.12)] group-hover:scale-[1.02]";

const projectsData = [
  {
    title: "Camarote PMD",
    url: "https://camarotepmd.com.br/",
    content: (
      <div>
        <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
          Landing de eventos para venda de ingressos, com line-up e galeria.
          React, Vite e animações.
        </p>
        <div className="grid grid-cols-2 gap-4 group">
          <Image
            src="/projetos/pmd.png"
            alt="Camarote PMD"
            width={500}
            height={500}
            className={imageClass}
          />
          <Image
            src="/projetos/pmd%202.png"
            alt="Camarote PMD"
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
    content: (
      <div>
        <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
          Site institucional para engenharia: alpinismo industrial, solda e
          manutenção. React e Tailwind.
        </p>
        <div className="grid grid-cols-2 gap-4 group">
          <Image
            src="/projetos/baracho.png"
            alt="Baracho Industrial"
            width={500}
            height={500}
            className={imageClass}
          />
          <Image
            src="/projetos/barachos%202.png"
            alt="Baracho Industrial"
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
    content: (
      <div>
        <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
          App de delivery: carrinho, pedidos e painel para cozinha. Next.js e
          MongoDB.
        </p>
        <div className="grid grid-cols-2 gap-4 group">
          <Image
            src="/projetos/rei%20dos%20salgados.png"
            alt="Rei dos Salgados"
            width={500}
            height={500}
            className={imageClass}
          />
          <Image
            src="/projetos/rei%20dos%20salgados%20admin.png"
            alt="Rei dos Salgados - Admin"
            width={500}
            height={500}
            className={imageClass}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Seu manto",
    url: "https://seumanto.webpulseservicos.com/",
    content: (
      <div>
        <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
          E-commerce full-stack de camisetas com loja, carrinho, checkout,
          painel admin, Supabase Realtime e integração com Mercado Pago.
        </p>
        <div className="grid grid-cols-2 gap-4 group">
          <Image
            src="/projetos/seumanto.png"
            alt="Seu manto - E-commerce de Camisetas"
            width={500}
            height={500}
            className={imageClass}
          />
          <Image
            src="/projetos/seumanto%202.png"
            alt="Seu manto - Painel Admin"
            width={500}
            height={500}
            className={imageClass}
          />
        </div>
      </div>
    ),
  },
  {
    title: "DRM SERVIÇOS",
    url: "https://www.wwsdrmmontgem.com.br/",
    content: (
      <div>
        <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
          Site institucional para serviços industriais, com seções editáveis de
          serviços, projetos em destaque e contatos comerciais.
        </p>
        <div className="grid grid-cols-2 gap-4 group">
          <Image
            src="/projetos/DRM%20.png"
            alt="DRM SERVIÇOS - Site institucional"
            width={500}
            height={500}
            className={imageClass}
          />
          <Image
            src="/projetos/DRM%202.png"
            alt="DRM SERVIÇOS - Serviços em destaque"
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
    content: (
      <div>
        <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
          Site e painel administrativo para oficina mecânica: portfólio de
          serviços, agendamento online, fila pública em tempo real e dashboard
          admin. Next.js, TypeScript, Tailwind e Supabase Realtime.
        </p>
        <div className="grid grid-cols-2 gap-4 group">
          <Image
            src="/projetos/shelltonautomecanica.png"
            alt="Shellton Auto Mecânica - Site"
            width={500}
            height={500}
            className={imageClass}
          />
          <Image
            src="/projetos/shelltonautomecanica2.png"
            alt="Shellton Auto Mecânica - Painel Admin"
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
      <p className="text-white/50 text-sm md:text-base">
        Quer ser o próximo? Bora conversar.
      </p>
    ),
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full">
      <Timeline
        data={projectsData}
        title="Projetos"
        subtitle="Alguns trabalhos que já fiz."
      />
    </section>
  );
}
