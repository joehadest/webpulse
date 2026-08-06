"use client";

import { Reveal } from "@/components/ui/reveal";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "MongoDB",
  "PostgreSQL",
  "Vite",
  "Framer Motion",
  "Vercel",
  "Mercado Pago",
  "Git",
  "Figma",
];

export function TechStack() {
  return (
    <section className="relative w-full bg-background py-16 md:py-20 border-t border-white/[0.06] overflow-hidden">
      <div className="container mx-auto px-4">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-white/30 mb-10">
            Tecnologias que eu uso no dia a dia
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="relative flex overflow-hidden mask-edges-x">
          {/* Duas cópias idênticas: a animação translada -50%, então o loop é invisível */}
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-4 pr-4 animate-marquee"
            >
              {technologies.map((tech) => (
                <span
                  key={`${copy}-${tech}`}
                  className="whitespace-nowrap rounded-full border border-white/[0.07] bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-white/45 transition-colors duration-300 hover:border-sky-400/25 hover:text-sky-300/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
