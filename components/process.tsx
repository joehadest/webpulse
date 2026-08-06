"use client";

import { MessagesSquare, FileText, Code2, Rocket, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Conversa",
    description:
      "Você me conta o que precisa. Eu entendo seu negócio, seu público e o objetivo do projeto. Sem compromisso e sem custo.",
    icon: MessagesSquare,
  },
  {
    number: "02",
    title: "Proposta",
    description:
      "Escopo, prazo e valor por escrito. Você aprova tudo antes de eu escrever a primeira linha de código.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Acompanhe o progresso com link de preview a cada etapa. Ajustes durante o caminho, sem surpresa no final.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Projeto no ar, domínio configurado e treinamento de uso. Suporte incluso para o período combinado.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section
      id="processo"
      className="relative w-full bg-background overflow-hidden py-24 md:py-32 border-t border-white/[0.06]"
    >
      <div className="absolute inset-0 grid-pattern opacity-40 mask-radial-fade pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          label="Como funciona"
          title="Do primeiro contato"
          highlight="ao site no ar"
          subtitle="Um processo simples e transparente. Você sabe exatamente em que etapa estamos e o que vem depois."
        />

        <div className="relative mt-16 max-w-6xl mx-auto">
          {/* Linha conectando as etapas no desktop */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[42px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.number} delay={i * 0.12}>
                  <div className="group relative text-center lg:px-2">
                    <div className="relative mx-auto mb-6 flex h-[84px] w-[84px] items-center justify-center">
                      <div className="absolute inset-0 rounded-2xl bg-sky-400/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative flex h-[84px] w-[84px] items-center justify-center rounded-2xl border border-white/[0.08] bg-background transition-all duration-500 group-hover:border-sky-400/30 group-hover:-translate-y-1">
                        <Icon className="h-7 w-7 text-sky-300/80 transition-colors duration-500 group-hover:text-sky-300" />
                        <span className="absolute -top-2.5 -right-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-sky-400/25 bg-background font-display text-[11px] font-bold text-sky-300/90">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-white mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/45 leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
