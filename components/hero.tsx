import type { CSSProperties } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SplitWords } from "@/components/ui/reveal";
import { ChatPresence } from "@/components/ui/chrome";
import { whatsappLink } from "@/lib/site-config";

/*
 * HERO — "O pulso"
 *
 * Ato 1 (ao carregar): uma linha de ECG atravessa a tela e desenha o "W"
 * da marca — que é, literalmente, um batimento. Depois ele passa a pulsar.
 *
 * Ato 2 (ao rolar, tela fixa): o W se achata de volta numa linha, a linha
 * vira a borda de uma janela e um site se constrói em 4 etapas: briefing,
 * design, código e no ar.
 *
 * Todo o movimento está em app/hero.css (CSS puro: keyframes no ato 1,
 * scroll-driven animations no ato 2). Sem suporte ou com movimento
 * reduzido, o hero vira uma tela única e estática — completa.
 */

/** O "W" da logo, como traço (borda superior do símbolo oficial). */
const W_PATH = "M0 42H30L54 93L79 42H109L133 93L174 10H207";

const steps = ["Briefing", "Design", "Código", "No ar"];

/* ------------------------------------------------------------------ */

function PulseMark() {
  return (
    <div className="ecg" aria-hidden>
      <span className="ecg-line ecg-line-l">
        <span className="ecg-streak" />
      </span>

      <div className="ecg-w">
        <svg viewBox="-6 -6 219 142" className="ecg-w-svg" overflow="visible">
          <defs>
            <linearGradient id="hw-pulse" x1="0" y1="42" x2="207" y2="130" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7dd3fc" />
              <stop offset=".52" stopColor="#38bdf8" />
              <stop offset="1" stopColor="#0ea5e9" />
            </linearGradient>
            <linearGradient id="hw-fold" x1="92" y1="42" x2="50" y2="130" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a5edff" />
              <stop offset="1" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="hw-rise" x1="193" y1="10" x2="124" y2="130" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0ea5e9" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>

          {/* Onda que se espalha a cada batida */}
          <ellipse cx="103" cy="66" rx="118" ry="70" className="ecg-ripple" />

          {/* Símbolo oficial preenchido */}
          <g className="ecg-w-fill">
            <path
              fill="url(#hw-pulse)"
              d="M0 42H30L54 93L79 42H109L133 93L174 10H207L154 121Q149 130 140 130H127Q118 130 113 121L94 82L75 121Q70 130 61 130H48Q39 130 34 121Z"
            />
            <path fill="url(#hw-fold)" d="M34 121L79 42H109L75 121Q70 130 61 130H48Q39 130 34 121Z" />
            <path fill="url(#hw-rise)" d="M113 121L174 10H207L154 121Q149 130 140 130H127Q118 130 113 121Z" />
          </g>

          {/* Traço que desenha o W e o cometa que percorre cada batida */}
          <path d={W_PATH} pathLength={1} className="ecg-w-stroke" />
          <path d={W_PATH} pathLength={1} className="ecg-w-comet" />
        </svg>
      </div>

      <span className="ecg-line ecg-line-r">
        <span className="ecg-streak" />
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */

/**
 * Site fictício que se constrói dentro da janela. O mesmo layout é
 * desenhado duas vezes: "wire" (wireframe) e "design" (versão final), e o
 * CSS "pinta" uma sobre a outra.
 */
function MockSite({ variant }: { variant: "wire" | "design" }) {
  const design = variant === "design";
  return (
    <div className={`mock mock-${variant}`}>
      <div className="mock-nav">
        <span className="mock-brand">
          <span className="mock-dot" />
          {design ? "Sua Empresa" : <span className="mock-bar w-[9cqw]" />}
        </span>
        <span className="mock-links">
          {["Início", "Serviços", "Contato"].map((l) => (
            <span key={l}>{design ? l : <span className="mock-bar w-[5cqw]" />}</span>
          ))}
        </span>
        <span className="mock-btn mock-btn-sm">{design ? "Orçamento" : null}</span>
      </div>

      <div className="mock-hero">
        <div className="mock-copy">
          <span className="mock-eyebrow">{design ? "Desde 2014 · atendimento local" : <span className="mock-bar w-[14cqw]" />}</span>
          <span className="mock-title">
            {design ? (
              <>
                Seu negócio com
                <br />
                presença de verdade.
              </>
            ) : (
              <>
                <span className="mock-bar mock-bar-lg w-[30cqw]" />
                <span className="mock-bar mock-bar-lg w-[24cqw]" />
              </>
            )}
          </span>
          <span className="mock-text">
            {design ? (
              "Atendimento rápido, orçamento claro e resultado que aparece no Google."
            ) : (
              <>
                <span className="mock-bar w-[28cqw]" />
                <span className="mock-bar w-[22cqw]" />
              </>
            )}
          </span>
          <span className="mock-btn">{design ? "Fale com a gente" : null}</span>
        </div>
        <div className="mock-media">
          {design ? (
            <>
              <span className="mock-orb mock-orb-a" />
              <span className="mock-orb mock-orb-b" />
              <span className="mock-media-card">
                <span className="mock-media-k">+38%</span>
                <span className="mock-media-l">contatos no mês</span>
              </span>
            </>
          ) : (
            <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="mock-x">
              <path d="M0 0L100 60M100 0L0 60" />
            </svg>
          )}
        </div>
      </div>

      <div className="mock-cards">
        {["Rápido", "Seguro", "No Google"].map((c) => (
          <span key={c} className="mock-card">
            <span className="mock-card-icon" />
            {design ? (
              <span className="mock-card-t">{c}</span>
            ) : (
              <span className="mock-bar w-[10cqw]" />
            )}
            <span className="mock-bar mock-bar-sm w-[14cqw]" />
          </span>
        ))}
      </div>
    </div>
  );
}

const codeLines: { n: number; html: string }[] = [
  { n: 1, html: '<i class="k">export default function</i> <b>Home</b>() {' },
  { n: 2, html: '  <i class="k">return</i> (' },
  { n: 3, html: '    &lt;<b>Hero</b>' },
  { n: 4, html: '      <u>title</u>=<s>"Seu negócio com presença"</s>' },
  { n: 5, html: '      <u>cta</u>=<s>"Fale com a gente"</s>' },
  { n: 6, html: "    /&gt;" },
  { n: 7, html: "  );" },
  { n: 8, html: "}" },
];

function CodePanel() {
  return (
    <div className="code-panel">
      <div className="code-tab">
        <span>page.tsx</span>
        <span className="code-tab-muted">hero.tsx</span>
      </div>
      <div className="code-body">
        {codeLines.map((line) => (
          <div key={line.n} className="code-line" style={{ "--i": line.n } as CSSProperties}>
            <span className="code-n">{line.n}</span>
            <span dangerouslySetInnerHTML={{ __html: line.html }} />
          </div>
        ))}
      </div>
      <div className="code-status">
        <span className="code-ok">✓</span> build 1.4s · lighthouse 100
      </div>
    </div>
  );
}

/** Ato 2 — a linha vira janela e o site se constrói. Decorativo. */
function BuildStage() {
  return (
    <div className="hero-build" aria-hidden>
      <div className="build-head">
        <p className="eyebrow">
          <span className="eyebrow-index">↳</span>
          <span className="eyebrow-rule" />
          Do briefing ao deploy
        </p>
        <p className="mono text-[11px] text-3">~3 semanas · tudo por escrito</p>
      </div>

      <span className="build-edge" />

      <div className="build-window">
        <div className="build-chrome">
          <span className="chrome-dots">
            <span />
            <span />
            <span />
          </span>
          <span className="build-url">
            <span className="build-status">
              <span className="build-dot build-dot-dev" />
              <span className="build-dot build-dot-live" />
            </span>
            <span className="build-url-text">
              <span className="build-url-dev">localhost:3000</span>
              <span className="build-url-live">suaempresa.com.br</span>
            </span>
          </span>
          <span className="build-live-tag">No ar</span>
        </div>

        <div className="build-viewport">
          <MockSite variant="wire" />
          <MockSite variant="design" />
          <CodePanel />
        </div>
      </div>

      {/* Etiquetas que aparecem em cada etapa */}
      <span className="build-chip build-chip-1">
        <span className="build-chip-dot" /> Design exclusivo
      </span>
      <span className="build-chip build-chip-2">
        <span className="build-chip-dot" /> Next.js + TypeScript
      </span>
      <span className="build-chip build-chip-3">
        <span className="build-chip-dot" /> Lighthouse 100
      </span>
      <span className="build-chip build-chip-4">
        <span className="build-chip-dot" /> Domínio próprio
      </span>

      <ol className="build-steps">
        {steps.map((label, i) => (
          <li key={label} className={`build-step build-step-${i + 1}`}>
            <span className="build-step-bar">
              <span />
            </span>
            <span className="build-step-label">
              <span className="build-step-n">{String(i + 1).padStart(2, "0")}</span>
              {label}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <div id="hero" className="hero-track">
      <section className="hero-stage" aria-label="Apresentação">
        <div aria-hidden className="hero-bg" />
        <span aria-hidden className="hero-rail hero-rail-l" />
        <span aria-hidden className="hero-rail hero-rail-r" />

        {/* Barra própria do hero (a navbar só aparece depois dele) */}
        {/* Barra própria do hero (a navbar só aparece depois dele).
            Sem logo aqui: o W e o nome já estão no centro da tela. */}
        <header className="hero-top shell">
          <span className="hero-in hidden sm:inline-flex" style={{ "--d": "0.2s" } as CSSProperties}>
            <ChatPresence />
          </span>
          <a
            href="#contato"
            className="hero-in btn-ghost ml-auto h-9 px-4 text-[13px]"
            style={{ "--d": "0.2s" } as CSSProperties}
          >
            Orçamento
          </a>
        </header>

        <PulseMark />

        <div className="hero-intro shell">
          {/* O nome é o título; a linha de baixo diz o que a empresa faz */}
          <h1 className="hero-title">
            <span className="hero-name">
              <SplitWords text="WebPulse" />
            </span>
            <span className="sr-only"> — </span>
            <span className="hero-tagline hero-in" style={{ "--d": "1.45s" } as CSSProperties}>
              Sites e sistemas sob medida
            </span>
          </h1>

          <div
            className="hero-in hero-ctas flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
            style={{ "--d": "1.65s" } as CSSProperties}
          >
            <a
              href={whatsappLink("Olá! Vi o site da WebPulse e quero conversar sobre um projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary h-12 px-6"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
            <a href="#portfolio" className="btn-ghost group h-12 px-6">
              Ver projetos
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Indicador de rolagem: só a linha, sem texto */}
        <div aria-hidden className="hero-hint">
          <span className="hero-hint-line" />
        </div>

        <BuildStage />
      </section>
    </div>
  );
}
