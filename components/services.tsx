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
import { Section } from "@/components/ui/section";
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
    <Section id="servicos">
      <SectionHeading
        index="01"
        label="Serviços"
        title="O que eu construo."
        highlight="Do site simples ao sistema completo."
        subtitle="Cada projeto é feito do zero, com a tecnologia certa para o que você precisa — sem template, sem construtor de arrastar e soltar."
      />

      <Reveal delay={0.1}>
        <div className="spec-grid mt-14 sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
          {services.map((service, i) => {
            const Icon = service.icon;
            const index = String(i + 1).padStart(2, "0");

            return (
              <SpotlightCard
                key={service.title}
                variant="cell"
                className={cn(
                  "p-7 md:p-8",
                  service.featured && "sm:col-span-2",
                )}
              >
                <div className="flex h-full flex-col">
                  <div className="mb-10 flex items-start justify-between">
                    <span className="icon-tile">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                    </span>
                    <span className="mono text-xs text-3 transition-colors duration-300 group-hover:text-sky-300">
                      {index}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-1">
                    {service.title}
                  </h3>

                  <p
                    className={cn(
                      "mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-2",
                      service.featured ? "max-w-[52ch]" : "max-w-[40ch]",
                    )}
                  >
                    {service.description}
                  </p>

                  <ul className="mono mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/[0.07] pt-5 text-[11px] uppercase tracking-[0.06em] text-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span aria-hidden className="h-px w-2 bg-white/25" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            );
          })}

          {/* Fecho — ocupa a célula que sobraria vazia na grade */}
          <div className="spec-cell flex flex-col justify-between gap-8 p-7 sm:col-span-2 md:p-8 lg:col-span-1">
            <div>
              <p className="mono text-xs text-sky-300">+</p>
              <p className="mt-10 font-display text-xl font-semibold tracking-[-0.02em] text-1">
                Precisa de algo que não está aqui?
              </p>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-2">
                Me conta a ideia — se eu não fizer, indico quem faz.
              </p>
            </div>
            <a
              href={whatsappLink(
                "Olá! Vi os serviços no site da WebPulse e queria conversar sobre uma ideia diferente.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-fit"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
