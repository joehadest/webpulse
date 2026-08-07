"use client";

import {
  Globe,
  ShoppingCart,
  Database,
  Workflow,
  Palette,
  LifeBuoy,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { whatsappLink } from "@/lib/site-config";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
  /** Cartões destacados ocupam duas colunas na grade bento. */
  featured?: boolean;
}

const services: Service[] = [
  {
    title: "Sites institucionais",
    description:
      "A cara da sua empresa na internet: rápido, responsivo e pronto para aparecer no Google.",
    icon: Globe,
    points: ["Design exclusivo", "SEO técnico", "Domínio configurado"],
    featured: true,
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
    featured: true,
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="relative w-full bg-background text-white overflow-hidden py-24 md:py-32"
    >
      {/* Fundo — grade técnica + brilhos, no mesmo espírito do hero */}
      <div className="absolute inset-0 grid-pattern mask-radial-fade pointer-events-none" />
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
            const index = String(i + 1).padStart(2, "0");

            return (
              <Reveal
                key={service.title}
                delay={(i % 3) * 0.1}
                className={cn(service.featured && "sm:col-span-2")}
              >
                <SpotlightCard className="h-full p-7">
                  {/* Linha de acento que acende no hover */}
                  <div
                    aria-hidden
                    className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Índice fantasma no canto, como no portfólio */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-3 right-4 font-display text-[5.5rem] font-bold leading-none text-white/[0.045] transition-colors duration-500 group-hover:text-sky-400/[0.09]"
                  >
                    {index}
                  </span>

                  <div className="relative flex flex-col h-full">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="inline-flex w-fit items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.08] p-3 shadow-[0_0_20px_rgba(56,189,248,0)] transition-all duration-500 group-hover:border-sky-400/40 group-hover:bg-sky-400/[0.14] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] group-hover:scale-105">
                        <Icon className="w-6 h-6 text-sky-300" />
                      </div>
                      <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white/25 transition-colors duration-500 group-hover:text-sky-300/60">
                        {index}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-white mb-2.5">
                      {service.title}
                    </h3>

                    <p
                      className={cn(
                        "text-sm text-white/50 leading-relaxed mb-6 flex-1",
                        service.featured && "sm:max-w-md",
                      )}
                    >
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

        {/* Fecho — para quem não se encaixou em nenhum cartão */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left md:px-10">
            <div>
              <p className="font-display text-lg font-semibold text-white">
                Precisa de algo que não está aqui?
              </p>
              <p className="mt-1 text-sm text-white/45">
                Me conta a ideia — se eu não fizer, indico quem faz.
              </p>
            </div>
            <a
              href={whatsappLink(
                "Olá! Vi os serviços no site da WebPulse e queria conversar sobre uma ideia diferente.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost shrink-0"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
