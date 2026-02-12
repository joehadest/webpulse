"use client";

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const imageClass =
  "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border border-white/10";

const projectsData = [
  {
    title: "Camarote PMD",
    content: (
      <div>
        <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
          Landing de eventos para venda de ingressos, com line-up e galeria.
          React, Vite e animações.
        </p>
        <div className="grid grid-cols-2 gap-4">
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
    content: (
      <div>
        <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
          Site institucional para engenharia: alpinismo industrial, solda e
          manutenção. React e Tailwind.
        </p>
        <div className="grid grid-cols-2 gap-4">
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
    content: (
      <div>
        <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
          App de delivery: carrinho, pedidos e painel para cozinha. Next.js e
          MongoDB.
        </p>
        <div className="grid grid-cols-2 gap-4">
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
