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
    <section
      aria-label="Tecnologias"
      className="rails relative w-full overflow-hidden bg-background py-14 md:py-16"
    >
      <span aria-hidden className="cross cross-l" />
      <span aria-hidden className="cross cross-r" />

      {/* Altura real pequena: estimativa própria para não "pular" a rolagem */}
      <div className="cv-auto" style={{ containIntrinsicSize: "auto 180px" }}>
        <div className="shell">
          <Reveal>
            <p className="eyebrow mb-8 md:mb-10">
              <span aria-hidden className="eyebrow-rule" />
              Stack do dia a dia
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="marquee relative flex overflow-hidden mask-edges-x">
            {/* Duas cópias idênticas: a animação translada -50%, então o loop é invisível */}
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center animate-marquee-slow"
              >
                {technologies.map((tech) => (
                  <li
                    key={`${copy}-${tech}`}
                    className="flex items-center whitespace-nowrap font-display text-xl font-semibold tracking-[-0.02em] text-white/35 transition-colors duration-300 hover:text-white md:text-2xl"
                  >
                    {tech}
                    <span aria-hidden className="mono mx-8 text-sm font-normal text-white/15 md:mx-10">
                      /
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
