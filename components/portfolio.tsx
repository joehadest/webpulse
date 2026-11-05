"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { LiveSitePreview } from "@/components/ui/live-site-preview";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { whatsappLink } from "@/lib/site-config";
import { projects } from "@/lib/projects";

const ruleClass = "border-0 border-t border-white/[0.08]";

export function Portfolio() {
  return (
    <FlowArt id="portfolio" aria-label="Projetos entregues">
      <Section aria-label="Projetos" className="!pb-0">
        <SectionHeading
          index="03"
          label="Projetos"
          title="Trabalho no ar."
          highlight="Abra, navegue, confira."
          subtitle="Nada de mockup: cada prévia abaixo é o site real rodando agora. Clique e interaja como um visitante faria."
        />
      </Section>

      {projects.map((project, i) => (
        <FlowSection
          key={project.url}
          aria-label={project.title.join(" ")}
          style={{ background: "var(--background)", color: "var(--text-1)" }}
        >
          <Reveal delay={(i % 2) * 0.06}>
            <div className="flex items-baseline justify-between gap-4">
              <p className="eyebrow">
                <span className="eyebrow-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="eyebrow-rule" />
                {project.kind}
              </p>
              <p className="mono hidden items-center gap-2 text-[11px] uppercase tracking-[0.08em] text-3 sm:inline-flex">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: project.accent }}
                />
                No ar
              </p>
            </div>
          </Reveal>

          <hr className={ruleClass} />

          <div className="grid items-center gap-8 py-2 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-4">
            <Reveal delay={0.08}>
              <div>
                <h3 className="font-display text-[clamp(2.25rem,8vw,4.75rem)] font-bold uppercase leading-[0.9] tracking-tight">
                  {project.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                <p className="lead mt-6 max-w-[46ch]">
                  {project.description}
                </p>
              </div>
            </Reveal>

            {project.url ? (
              <Reveal delay={0.14}>
                <LiveSitePreview
                  url={project.url}
                  title={project.title.join(" ")}
                  accent={project.accent}
                />
              </Reveal>
            ) : null}
          </div>

          <hr className={ruleClass} />

          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="mono rounded-md border border-white/[0.1] bg-white/[0.02] px-2.5 py-1 text-[11px] uppercase tracking-[0.04em] text-2"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost group"
                >
                  Visitar site
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </Reveal>
        </FlowSection>
      ))}

      <FlowSection
        aria-label="Seu projeto aqui"
        style={{ background: "var(--background)", color: "var(--text-1)" }}
      >
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-index">
              {String(projects.length + 1).padStart(2, "0")}
            </span>
            <span aria-hidden className="eyebrow-rule" />O próximo
          </p>
        </Reveal>

        <hr className={ruleClass} />

        <Reveal delay={0.08}>
          <div className="flex flex-col justify-center py-6 md:py-10">
            <h3 className="font-display text-[clamp(2.75rem,8vw,6rem)] font-bold uppercase leading-[0.9] tracking-tight">
              <span className="block">Seu</span>
              <span className="block text-3">projeto</span>
              <span className="block">aqui<span className="text-sky-400">.</span></span>
            </h3>

            <p className="lead mt-6 max-w-[46ch]">
              Me conte sua ideia e eu volto com escopo, prazo e valor por escrito.
              A primeira conversa não custa nada.
            </p>
          </div>
        </Reveal>

        <hr className={ruleClass} />

        <Reveal delay={0.12}>
          <a
            href={whatsappLink(
              "Olá! Vi seu portfólio no site da WebPulse e quero conversar sobre um projeto.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group w-fit"
          >
            Começar meu projeto
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </FlowSection>
    </FlowArt>
  );
}
