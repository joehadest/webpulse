"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { LiveSitePreview } from "@/components/ui/live-site-preview";
import { Reveal } from "@/components/ui/reveal";
import { whatsappLink } from "@/lib/site-config";

interface Project {
  index: string;
  kind: string;
  /** Quebrado em linhas para o título grande respirar. */
  title: string[];
  description: string;
  tags: string[];
  url?: string;
  accent: string;
}

const projects: Project[] = [
  {
    index: "01",
    kind: "Landing de eventos",
    title: ["Camarote", "PMD"],
    description:
      "Venda de ingressos com line-up, galeria e animações de rolagem. Feita para converter no celular, onde acontece a maior parte do acesso.",
    tags: ["React", "Vite", "Framer Motion"],
    url: "https://camarotepmd.com.br/",
    accent: "#a78bfa",
  },
  {
    index: "02",
    kind: "Site institucional",
    title: ["Baracho", "Industrial"],
    description:
      "Engenharia pesada: alpinismo industrial, solda e manutenção. Estrutura pensada para transmitir autoridade técnica e gerar contato comercial direto.",
    tags: ["React", "Tailwind CSS", "SEO"],
    url: "https://barachosolucoes.com/",
    accent: "#94a3b8",
  },
  {
    index: "03",
    kind: "App de delivery",
    title: ["Rei dos", "Salgados"],
    description:
      "Cardápio, carrinho, acompanhamento de pedido e painel para a cozinha receber tudo em tempo real, sem depender de telefone.",
    tags: ["Next.js", "MongoDB", "Tempo real"],
    url: "https://reidossalgados.webpulseservicos.com/",
    accent: "#fbbf24",
  },
  {
    index: "04",
    kind: "E-commerce completo",
    title: ["Seu", "Manto"],
    description:
      "Loja de camisetas de ponta a ponta: vitrine, carrinho, checkout com pagamento online, painel administrativo e pedidos atualizando em tempo real.",
    tags: ["Next.js", "Supabase", "Mercado Pago"],
    url: "https://seumanto.webpulseservicos.com/",
    accent: "#818cf8",
  },
  {
    index: "05",
    kind: "Site + painel administrativo",
    title: ["Shellton", "Auto Mecânica"],
    description:
      "Oficina com agendamento online, fila pública atualizando ao vivo e dashboard para a equipe gerenciar os atendimentos do dia.",
    tags: ["Next.js", "TypeScript", "Supabase Realtime"],
    url: "https://shelltonautomecanica.webpulseservicos.com/",
    accent: "#2dd4bf",
  },
];

const ruleClass = "border-none border-t border-white/15";

export function Portfolio() {
  return (
    <FlowArt id="portfolio" aria-label="Projetos entregues">
      {projects.map((project, i) => (
        <FlowSection
          key={project.index}
          aria-label={project.title.join(" ")}
          style={{ background: "#030303", color: "#fff" }}
        >
          <Reveal delay={(i % 2) * 0.06}>
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                Projeto {project.index} — {project.kind}
              </p>
              <p
                className="font-display text-[11px] font-bold uppercase tracking-[0.2em]"
                style={{ color: project.accent }}
              >
                WebPulse
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

                <p className="mt-5 max-w-[46ch] text-[clamp(0.95rem,1.5vw,1.15rem)] leading-relaxed text-white/65">
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
                    className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium text-white/60"
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
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition-colors duration-300 hover:bg-white hover:text-black"
                  style={{ color: project.accent }}
                >
                  <span className="transition-colors duration-300 group-hover:text-black">
                    Visitar site
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
                </a>
              )}
            </div>
          </Reveal>
        </FlowSection>
      ))}

      <FlowSection
        aria-label="Seu projeto aqui"
        style={{ background: "#030303", color: "#fff" }}
      >
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
            Projeto 06 — O próximo
          </p>
        </Reveal>

        <hr className={ruleClass} />

        <Reveal delay={0.08}>
          <div className="flex flex-col justify-center py-6 md:py-10">
            <h3 className="font-display text-[clamp(2.75rem,8vw,6rem)] font-bold uppercase leading-[0.9] tracking-tight">
              <span className="block">Seu</span>
              <span className="block text-sky-300">projeto</span>
              <span className="block">aqui</span>
            </h3>

            <p className="mt-6 max-w-[46ch] text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-white/65">
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
