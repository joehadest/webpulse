"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { LiveSitePreview } from "@/components/ui/live-site-preview";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { whatsappLink } from "@/lib/site-config";
import { projects, type Project } from "@/lib/projects";

const ruleClass = "border-0 border-t border-white/[0.08]";
const sectionStyle = { background: "var(--background)", color: "var(--text-1)" };

/* O destaque é escolhido em lib/projects.ts (featured: true). */
const featured = projects.find((p) => p.featured) ?? projects[0];
const others = projects.filter((p) => p !== featured);

const pad = (n: number) => String(n).padStart(2, "0");

/* ------------------------------------------------------------------ */

/** Único projeto com prévia ao vivo — a "experiência" do portfólio. */
function FeaturedProject({ project }: { project: Project }) {
  return (
    <FlowSection aria-label={project.title.join(" ")} style={sectionStyle}>
      <Reveal>
        <div className="flex items-baseline justify-between gap-4">
          <p className="eyebrow">
            <span className="eyebrow-index">★</span>
            <span aria-hidden className="eyebrow-rule" />
            Em destaque · {project.kind}
          </p>
          <p className="mono hidden items-center gap-2 text-[11px] uppercase tracking-[0.08em] text-3 sm:inline-flex">
            <span aria-hidden className="live-dot" />
            Ao vivo — navegue pela prévia
          </p>
        </div>
      </Reveal>

      <hr className={ruleClass} />

      <div className="grid items-center gap-8 py-2 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-4">
        <Reveal delay={0.08}>
          <div>
            <h3 className="drift font-display text-[clamp(2.25rem,8vw,4.75rem)] font-bold uppercase leading-[0.9] tracking-tight">
              {project.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>

            <p className="lead mt-6 max-w-[46ch]">{project.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Visitar site
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
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
            </div>
          </div>
        </Reveal>

        <div className="frame-rise">
          <LiveSitePreview
            url={project.url}
            title={project.title.join(" ")}
            accent={project.accent}
          />
        </div>
      </div>
    </FlowSection>
  );
}

/* ------------------------------------------------------------------ */

/**
 * Os demais projetos: lista leve (sem iframe), recolhida por padrão.
 * Abre com grid-template-rows 0fr → 1fr (anima a altura real, sem
 * medir nada em JS) e fica `inert` enquanto fechada — o teclado não
 * entra em links escondidos.
 */
function MoreProjects({ items }: { items: Project[] }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (open) el.removeAttribute("inert");
    else el.setAttribute("inert", "");
  }, [open]);

  return (
    <FlowSection
      aria-label="Outros projetos"
      style={sectionStyle}
      innerClassName="gap-0 py-10 md:gap-0 md:py-12 lg:py-14"
    >
      <Reveal>
        <div className="projects-bar">
          <div className="min-w-0">
            <p className="eyebrow">
              <span className="eyebrow-index">+{pad(items.length)}</span>
              <span aria-hidden className="eyebrow-rule" />
              Outros projetos no ar
            </p>
            {/* Amostra de cor de cada projeto — uma prévia sem peso */}
            <ul aria-hidden className="projects-swatches">
              {items.map((p) => (
                <li key={p.url} style={{ "--c": p.accent } as CSSProperties} />
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="btn-ghost group shrink-0"
            aria-expanded={open}
            aria-controls={listId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Recolher lista" : "Ver todos os projetos"}
            <Plus
              className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-aria-expanded:rotate-45"
              aria-hidden
            />
          </button>
        </div>
      </Reveal>

      <div ref={panelRef} id={listId} className="projects-panel" data-open={open}>
        <div className="min-h-0 overflow-hidden">
          <ol className="projects-list">
            {items.map((project, i) => (
              <li key={project.url} style={{ "--i": i, "--c": project.accent } as CSSProperties}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-row group"
                >
                  <span className="mono text-xs text-3">{pad(i + 1)}</span>

                  <span className="min-w-0">
                    <span className="project-row-title">
                      <span aria-hidden className="project-row-dot" />
                      {project.title.join(" ")}
                    </span>
                    <span className="project-row-kind">{project.kind}</span>
                  </span>

                  <span className="project-row-desc">{project.description}</span>

                  <span className="project-row-tags mono">{project.tags.join(" · ")}</span>

                  <span className="project-row-go">
                    <span className="sr-only">Visitar site de {project.title.join(" ")}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </FlowSection>
  );
}

/* ------------------------------------------------------------------ */

export function Portfolio() {
  return (
    <FlowArt id="portfolio" aria-label="Projetos entregues">
      <Section aria-label="Projetos" className="!pb-0">
        <SectionHeading
          index="03"
          label="Projetos"
          title="Trabalho no ar."
          highlight="Abra, navegue, confira."
          subtitle="Nada de mockup: a prévia abaixo é o site real rodando agora. Clique e interaja como um visitante faria."
        />
      </Section>

      <FeaturedProject project={featured} />
      <MoreProjects items={others} />

      <FlowSection aria-label="Seu projeto aqui" style={sectionStyle}>
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-index">→</span>
            <span aria-hidden className="eyebrow-rule" />O próximo
          </p>
        </Reveal>

        <hr className={ruleClass} />

        <Reveal delay={0.08}>
          <div className="flex flex-col justify-center py-6 md:py-10">
            <h3 className="font-display text-[clamp(2.75rem,8vw,6rem)] font-bold uppercase leading-[0.9] tracking-tight">
              <span className="block">Seu</span>
              <span className="block text-3">projeto</span>
              <span className="block">
                aqui<span className="text-sky-400">.</span>
              </span>
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
