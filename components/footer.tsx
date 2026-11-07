"use client";

import { useRef, type MouseEvent } from "react";
import { ArrowRight, ArrowUp, ArrowUpRight, MessageCircle } from "lucide-react";
import { Reveal, SplitWords, wordCount } from "@/components/ui/reveal";
import { LiveStatus } from "@/components/ui/chrome";
import { PulseLine } from "@/components/ui/service-art";
import { WebPulseLogo } from "@/components/ui/webpulse-logo";
import { useBusinessStatus } from "@/lib/business-hours";
import {
  siteConfig,
  whatsappLink,
  instagramLink,
  githubLink,
} from "@/lib/site-config";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#processo" },
  { label: "Projetos", href: "#portfolio" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const serviceLinks = [
  "Sites institucionais",
  "Lojas e e-commerce",
  "Sistemas de gestão",
  "Integrações e automação",
  "Design de interface",
  "Manutenção e evolução",
];

const contactLinks = [
  {
    label: "WhatsApp",
    value: "Resposta em até 24h",
    href: whatsappLink("Olá! Vim pelo site da WebPulse."),
  },
  { label: "Instagram", value: `@${siteConfig.instagram}`, href: instagramLink },
  { label: "GitHub", value: `@${siteConfig.github}`, href: githubLink },
];

const CTA_TITLE = "Seu próximo projeto";
const CTA_HIGHLIGHT = "começa numa conversa.";

function ColumnTitle({ children }: { children: string }) {
  return (
    <p className="eyebrow mb-5">
      <span aria-hidden className="eyebrow-rule" />
      {children}
    </p>
  );
}

/** Horário de atendimento com relógio de Brasília ao vivo. */
function Availability() {
  const status = useBusinessStatus();
  const online = status?.online ?? true;
  const { open, close } = siteConfig.hours;

  return (
    <div className="space-y-2">
      <LiveStatus online={online}>
        {online ? "Online agora" : `Fora do horário · volto às ${open}h`}
      </LiveStatus>
      <p className="mono text-[11px] text-3">
        Seg.–sáb., {open}h–{close}h ·{" "}
        <span className="tabular text-2">{status?.time ?? "--:--"}</span> em Brasília
      </p>
    </div>
  );
}

/**
 * Marca gigante no fim da página. O preenchimento azul acompanha o scroll
 * (view-timeline em app/motion.css) e um brilho segue o cursor sobre o
 * contorno — posição passada por CSS vars, sem re-render.
 */
function GiantMark() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div ref={ref} onMouseMove={handleMove} aria-hidden className="footer-mark">
      <div className="footer-mark-inner">
        <span className="footer-mark-outline">WebPulse</span>
        <span className="footer-mark-fill">WebPulse</span>
        <span className="footer-mark-glow">WebPulse</span>
      </div>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="rails relative overflow-hidden bg-background">
      <span aria-hidden className="cross cross-l" />
      <span aria-hidden className="cross cross-r" />

      {/* O batimento da marca corre sobre a linha que abre o rodapé */}
      <PulseLine className="pointer-events-none absolute inset-x-0 top-0 -translate-y-1/2 opacity-90" />

      <div className="shell relative">
        {/* Fecho — última chamada antes de sair da página */}
        <div className="grid gap-10 border-b border-white/[0.07] py-20 md:grid-cols-12 md:items-end md:py-28">
          <div className="md:col-span-8">
            <Reveal>
              <p className="eyebrow">
                <span className="eyebrow-index">→</span>
                <span aria-hidden className="eyebrow-rule" />
                Próximo passo
              </p>
            </Reveal>
            <Reveal variant="split" delay={0.05}>
              <h2 className="display-xl mt-5 max-w-[16ch] text-1">
                <SplitWords text={CTA_TITLE} />{" "}
                <SplitWords
                  text={CTA_HIGHLIGHT}
                  start={wordCount(CTA_TITLE)}
                  className="text-3"
                />
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="md:col-span-4">
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end lg:flex-row lg:justify-end">
              <a
                href={whatsappLink(
                  "Olá! Vim pelo site da WebPulse e quero um orçamento.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
              <a href="#contato" className="btn-ghost group">
                Pedir orçamento
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Colunas */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-8">
          <Reveal className="col-span-2 lg:col-span-4">
            <a href="#top" aria-label="WebPulse — voltar ao início" className="inline-block">
              <WebPulseLogo showWordmark size={56} className="w-44" />
            </a>
            <p className="mt-5 max-w-[34ch] text-[0.9375rem] leading-relaxed text-2">
              Sites e sistemas sob medida para quem quer ser levado a sério na
              internet.
            </p>
            <div className="mt-8">
              <Availability />
            </div>
          </Reveal>

          <Reveal delay={0.06} as="nav" className="lg:col-span-2">
            <ColumnTitle>Navegação</ColumnTitle>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-u text-sm text-2 hover:text-1">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-3">
            <ColumnTitle>Serviços</ColumnTitle>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#servicos" className="link-u text-sm text-2 hover:text-1">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.18} className="col-span-2 lg:col-span-3">
            <ColumnTitle>Fale comigo</ColumnTitle>
            <ul className="border-t border-white/[0.07]">
              {contactLinks.map((link) => (
                <li key={link.label} className="border-b border-white/[0.07]">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-3.5"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-1">
                        {link.label}
                      </span>
                      <span className="mono block truncate text-[11px] text-3">
                        {link.value}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Linha final */}
        <div className="mono flex flex-col gap-4 border-t border-white/[0.07] py-6 text-[11px] text-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} WebPulse. Todos os direitos reservados.</p>
          <p className="hidden md:block">Feito sob medida · Next.js + CSS moderno</p>
          <a href="#top" className="group inline-flex items-center gap-2 text-2 hover:text-1">
            Voltar ao topo
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      <GiantMark />
    </footer>
  );
}
