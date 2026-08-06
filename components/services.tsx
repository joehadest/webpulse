"use client";

import {
  Globe,
  ShoppingCart,
  Database,
  Workflow,
  Palette,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
}

const services: Service[] = [
  {
    title: "Sites institucionais",
    description:
      "A cara da sua empresa na internet: rápido, responsivo e pronto para aparecer no Google.",
    icon: Globe,
    points: ["Design exclusivo", "SEO técnico", "Domínio configurado"],
  },
  {
    title: "Lojas e e-commerce",
    description:
      "Catálogo, carrinho e checkout com pagamento online. Do produto à confirmação do pedido.",
    icon: ShoppingCart,
    points: ["Mercado Pago", "Painel de pedidos", "Controle de estoque"],
  },
  {
    title: "Sistemas de gestão",
    description:
      "Painéis sob medida para organizar o que hoje vive em planilha ou no papel.",
    icon: Database,
    points: ["Dashboard admin", "Multiusuário", "Dados em tempo real"],
  },
  {
    title: "Integrações e automação",
    description:
      "Conecto seus sistemas e elimino trabalho manual repetitivo do dia a dia.",
    icon: Workflow,
    points: ["APIs externas", "WhatsApp", "Relatórios automáticos"],
  },
  {
    title: "Design de interface",
    description:
      "Layout limpo e navegação óbvia. Bonito importa, mas fácil de usar importa mais.",
    icon: Palette,
    points: ["Mobile first", "Identidade visual", "Acessibilidade"],
  },
  {
    title: "Manutenção e evolução",
    description:
      "Já tem site ou sistema? Corrijo, atualizo e adiciono o que faltou.",
    icon: LifeBuoy,
    points: ["Correção de bugs", "Novas features", "Melhoria de performance"],
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="relative w-full bg-background text-white overflow-hidden py-24 md:py-32"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-72 h-72 bg-sky-400/[0.06] rounded-full blur-[110px] animate-pulse-glow" />
        <div className="absolute bottom-[15%] right-[8%] w-72 h-72 bg-white/[0.035] rounded-full blur-[110px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          label="Serviços"
          title="O que eu"
          highlight="construo"
          subtitle="Do site simples ao sistema completo. Cada projeto é feito do zero, com a tecnologia certa para o que você precisa."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.1}>
                <SpotlightCard className="h-full p-7">
                  <div className="flex flex-col h-full">
                    <div className="mb-5 inline-flex w-fit items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.08] p-3 transition-all duration-500 group-hover:border-sky-400/40 group-hover:bg-sky-400/[0.14] group-hover:scale-105">
                      <Icon className="w-6 h-6 text-sky-300" />
                    </div>

                    <h3 className="font-display text-xl font-semibold text-white mb-2.5">
                      {service.title}
                    </h3>

                    <p className="text-sm text-white/50 leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>

                    <ul className="flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/45 transition-colors duration-500 group-hover:border-white/[0.12] group-hover:text-white/60"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
