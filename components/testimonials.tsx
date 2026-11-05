"use client";

import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

/**
 * Só aparece quando existirem depoimentos reais em `siteConfig.testimonials`.
 * Seção vazia é melhor que depoimento inventado.
 */
export function Testimonials() {
  const { testimonials } = siteConfig;

  if (testimonials.length === 0) return null;

  return (
    <Section id="depoimentos">
        <SectionHeading
          label="Depoimentos"
          title="O que os clientes"
          highlight="dizem."
          subtitle="Quem já trabalhou comigo conta como foi."
        />

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.author} delay={(i % 3) * 0.1}>
              <SpotlightCard className="h-full p-7">
                <div className="flex h-full flex-col">
                  <Quote className="mb-6 h-5 w-5 text-sky-400/60" strokeWidth={1.5} />

                  <p className="flex-1 text-[0.9375rem] leading-relaxed text-2">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="mt-6 border-t border-white/[0.07] pt-5">
                    <p className="font-display font-semibold text-white">
                      {item.author}
                    </p>
                    <p className="mono mt-1 text-xs text-3">{item.role}</p>
                    {item.project && (
                      <p className="mt-2 inline-block rounded-full border border-sky-400/15 bg-sky-400/[0.07] px-2.5 py-1 text-[11px] font-medium text-sky-300/80">
                        {item.project}
                      </p>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
    </Section>
  );
}
