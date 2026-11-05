"use client";

import { MessagesSquare, FileText, Code2, Rocket, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Section } from "@/components/ui/section";

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
    <Section id="processo">
      <SectionHeading
        index="02"
        label="Como funciona"
        title="Do primeiro contato"
        highlight="ao site no ar."
        subtitle="Um processo simples e transparente. Você sabe exatamente em que etapa estamos e o que vem depois."
      />

      <ol className="relative mt-14 grid sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <li
              key={step.number}
              className="group relative border-t border-white/[0.12] pt-8 sm:pr-8 lg:pr-10"
            >
              {/* Traço de acento que percorre a etapa no hover */}
              <span aria-hidden className="accent-tick" />
              <Reveal delay={i * 0.08}>
                <div className="flex items-center justify-between">
                  <span className="mono text-xs text-sky-300">Etapa {step.number}</span>
                  <Icon
                    className="h-[18px] w-[18px] text-3 transition-colors duration-300 group-hover:text-1"
                    strokeWidth={1.75}
                  />
                </div>

                <h3 className="mt-10 font-display text-xl font-semibold tracking-[-0.02em] text-1">
                  {step.title}
                </h3>
                <p className="mt-3 pb-10 text-[0.9375rem] leading-relaxed text-2 lg:pb-0">
                  {step.description}
                </p>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
