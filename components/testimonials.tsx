"use client";

import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { siteConfig } from "@/lib/site-config";

/**
 * Só aparece quando existirem depoimentos reais em `siteConfig.testimonials`.
 * Seção vazia é melhor que depoimento inventado.
 */
export function Testimonials() {
  const { testimonials } = siteConfig;

  if (testimonials.length === 0) return null;

  return (
    <section
      id="depoimentos"
      className="relative w-full bg-background py-24 md:py-32 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-400/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          label="Depoimentos"
          title="O que os clientes"
          highlight="dizem"
          subtitle="Quem já trabalhou comigo conta como foi."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {testimonials.map((item, i) => (
            <Reveal key={item.author} delay={(i % 3) * 0.1}>
              <SpotlightCard className="h-full p-7">
                <div className="flex h-full flex-col">
                  <Quote className="mb-5 h-7 w-7 text-sky-400/30" />

                  <p className="flex-1 text-sm leading-relaxed text-white/65">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="mt-6 border-t border-white/[0.07] pt-5">
                    <p className="font-display font-semibold text-white">
                      {item.author}
                    </p>
                    <p className="mt-0.5 text-xs text-white/40">{item.role}</p>
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
      </div>
    </section>
  );
}
