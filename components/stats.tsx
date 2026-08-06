"use client";

import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

export function Stats() {
  return (
    <section className="relative w-full bg-background border-y border-white/[0.06]">
      <div className="absolute inset-x-0 top-0 h-px divider-glow" />

      <div className="container mx-auto px-4 py-14 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {siteConfig.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="text-center">
                <p className="font-display text-3xl md:text-5xl font-bold text-gradient-accent tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs md:text-sm text-white/40 leading-snug max-w-[16ch] mx-auto">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px divider-glow" />
    </section>
  );
}
