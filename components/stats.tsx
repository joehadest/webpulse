"use client";

import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

/**
 * Faixa de credibilidade como "ficha técnica": células coladas por linhas
 * finas, rótulo em mono e número tabular — informação, não decoração.
 */
export function Stats() {
  return (
    <section aria-label="Números" className="rails relative w-full bg-background">
      <span aria-hidden className="cross cross-l" />
      <span aria-hidden className="cross cross-r" />

      <div className="shell">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {siteConfig.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.06}
              className="flex flex-col-reverse justify-between gap-6 border-white/[0.07] px-5 py-8 md:px-8 md:py-10 [&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
            >
              {/* flex-col-reverse: o número aparece em cima, mas o DOM mantém
                  dt → dd, então leitores de tela leem "rótulo: valor". */}
              <dt className="mono flex items-start gap-2 text-[11px] uppercase leading-[1.5] tracking-[0.08em] text-3">
                <span className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-sky-400" aria-hidden />
                {stat.label}
              </dt>
              <dd className="font-display tabular text-[clamp(2rem,1.4rem+2.4vw,3.25rem)] font-bold leading-none tracking-[-0.04em] text-1">
                {stat.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
