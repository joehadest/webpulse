"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { observeInView } from "@/lib/observe";

/*
 * Ilustrações vetoriais animadas dos serviços.
 *
 * Vocabulário de classes (estilos em app/motion.css → "ILUSTRAÇÕES SVG"):
 *   ln / ac      traço neutro / traço de acento
 *   fl / sf / af preenchimento sutil / suave / de acento
 *   draw         traço que se desenha na entrada (precisa de pathLength=1)
 *   pop          surge com mola na entrada
 *   comet        trecho de luz percorrendo o caminho (pathLength=1)
 *   bar, ping, bump, blink, ants, float, ...  loops pequenos
 *
 * --d controla o atraso de cada peça; --dur a duração do cometa.
 */

const t = (d: number, dur?: number) =>
  ({ "--d": `${d}s`, ...(dur ? { "--dur": `${dur}s` } : {}) }) as CSSProperties;

function ArtFrame({ label, children }: { label: string; children: ReactNode }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observeInView(el);
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 240 140"
      className="art h-full w-full"
      role="img"
      aria-label={label}
    >
      {children}
    </svg>
  );
}

/** Moldura arredondada que se desenha (usada em quase todas as cenas). */
function Window({ x = 8, y = 8, w = 224, h = 124, d = 0 }) {
  const r = 6;
  const path = `M${x + r} ${y}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1-${r} ${r}H${x + r}a${r} ${r} 0 0 1-${r}-${r}V${y + r}a${r} ${r} 0 0 1 ${r}-${r}z`;
  return (
    <>
      <rect x={x} y={y} width={w} height={h} rx={r} className="fl" />
      <path d={path} pathLength={1} className="ln draw" style={t(d)} />
    </>
  );
}

const Cursor = ({ x, y, className }: { x: number; y: number; className: string }) => (
  <g className={className}>
    <path
      transform={`translate(${x} ${y})`}
      d="M0 0v13l3.6-3.2 2.6 5.6 2.2-1-2.6-5.5H10.6z"
      fill="#fff"
      stroke="#050506"
      strokeWidth={0.8}
      strokeLinejoin="round"
    />
  </g>
);

/* ------------------------------------------------------------------ */

export function SiteArt() {
  return (
    <ArtFrame label="Ilustração de um site institucional sendo navegado">
      <Window />
      <path d="M8 24h224" pathLength={1} className="ln draw" style={t(0.2)} />
      {[18, 26, 34].map((cx) => (
        <circle key={cx} cx={cx} cy={16} r={2} className="sf" />
      ))}
      <rect x={70} y={12} width={100} height={8} rx={4} className="sf" />

      {/* Texto do hero */}
      <rect x={20} y={36} width={92} height={8} rx={2} className="sf pop" style={t(0.4)} />
      <rect x={20} y={50} width={72} height={4} rx={2} className="sf pop" style={t(0.5)} />
      <rect x={20} y={58} width={82} height={4} rx={2} className="sf pop" style={t(0.55)} />
      <g className="pop" style={t(0.65)}>
        <rect x={20} y={70} width={42} height={12} rx={6} className="af press" />
      </g>

      {/* Imagem */}
      <rect x={128} y={34} width={92} height={52} rx={4} className="fl" />
      <rect x={128} y={34} width={92} height={52} rx={4} className="ln" />
      <path d="M134 80l22-24 14 14 10-9 34 19" pathLength={1} className="ac draw" style={t(0.7)} />
      <circle cx={202} cy={46} r={5} className="af pop float" style={t(0.9)} />

      {/* Cards */}
      {[20, 90, 160].map((x, i) => (
        <g key={x} className="pop" style={t(0.8 + i * 0.08)}>
          <rect x={x} y={96} width={60} height={26} rx={3} className="fl" />
          <rect x={x} y={96} width={60} height={26} rx={3} className="ln" />
          <rect x={x + 6} y={103} width={28} height={3} rx={1.5} className="sf" />
          <rect x={x + 6} y={110} width={40} height={3} rx={1.5} className="sf" />
        </g>
      ))}

      <Cursor x={190} y={110} className="cursor-site" />
    </ArtFrame>
  );
}

export function StoreArt() {
  const cards = [10, 66, 122];
  return (
    <ArtFrame label="Ilustração de produto indo para o carrinho">
      {cards.map((x, i) => (
        <g key={x} className="pop" style={t(0.1 + i * 0.1)}>
          <rect x={x} y={12} width={48} height={74} rx={4} className="fl" />
          <rect x={x} y={12} width={48} height={74} rx={4} className="ln" />
          <rect x={x + 5} y={17} width={38} height={30} rx={2} className="sf" />
          <rect x={x + 5} y={54} width={30} height={3} rx={1.5} className="sf" />
          <rect x={x + 5} y={62} width={18} height={4} rx={2} className="af" opacity={0.8} />
          <rect x={x + 5} y={72} width={38} height={8} rx={4} className={i === 1 ? "ac" : "ln"} />
        </g>
      ))}

      {/* Caminho do produto até o carrinho */}
      <path
        d="M90 84C112 124 172 116 206 70"
        className="ln"
        strokeDasharray="2 4"
      />
      <path
        d="M90 84C112 124 172 116 206 70"
        pathLength={1}
        className="comet"
        style={t(0, 3)}
      />

      {/* Carrinho */}
      <path
        d="M188 46h7l7 24h21l5-16h-30"
        pathLength={1}
        className="ac draw"
        style={t(0.4)}
      />
      <circle cx={205} cy={77} r={2.6} className="ln" />
      <circle cx={220} cy={77} r={2.6} className="ln" />
      <g className="bump" style={t(0.9)}>
        <circle cx={228} cy={44} r={7} className="af" />
        <text
          x={228}
          y={46.6}
          textAnchor="middle"
          fontSize={7.5}
          fontWeight={700}
          fill="#050506"
          fontFamily="var(--font-mono), monospace"
        >
          3
        </text>
      </g>

      {/* Rodapé de checkout */}
      <path d="M10 104h220" pathLength={1} className="ln draw" style={t(0.6)} />
      <rect x={10} y={114} width={70} height={14} rx={7} className="fl" />
      <rect x={10} y={114} width={70} height={14} rx={7} className="ln" />
      <rect x={20} y={119.5} width={36} height={3} rx={1.5} className="sf" />
      <rect x={190} y={118} width={40} height={6} rx={3} className="af pop" style={t(0.8)} />
    </ArtFrame>
  );
}

export function DashboardArt() {
  const bars = [30, 44, 26, 52, 38, 58, 46, 62];
  return (
    <ArtFrame label="Ilustração de painel administrativo com gráficos">
      <Window />
      <path d="M48 8v124" pathLength={1} className="ln draw" style={t(0.2)} />
      {[20, 32, 44, 56, 68].map((y, i) => (
        <rect
          key={y}
          x={16}
          y={y}
          width={i === 0 ? 24 : 20}
          height={4}
          rx={2}
          className={i === 0 ? "af" : "sf"}
          opacity={i === 0 ? 0.85 : 1}
        />
      ))}

      {/* KPIs */}
      {[58, 116, 174].map((x, i) => (
        <g key={x} className="pop" style={t(0.3 + i * 0.08)}>
          <rect x={x} y={16} width={52} height={28} rx={3} className="fl" />
          <rect x={x} y={16} width={52} height={28} rx={3} className="ln" />
          <rect x={x + 6} y={22} width={20} height={3} rx={1.5} className="sf" />
          <rect
            x={x + 6}
            y={30}
            width={i === 0 ? 32 : 26}
            height={7}
            rx={2}
            className={i === 0 ? "af" : "sf"}
          />
        </g>
      ))}

      {/* Barras */}
      <path d="M58 122h92" className="ln" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={62 + i * 11}
          y={122 - h}
          width={7}
          height={h}
          rx={1.5}
          className="bar"
          fill={i % 3 === 2 ? "rgba(56,189,248,0.75)" : "rgba(255,255,255,0.12)"}
          style={t(i * 0.18)}
        />
      ))}

      {/* Linha */}
      <rect x={158} y={54} width={66} height={68} rx={3} className="fl" />
      <rect x={158} y={54} width={66} height={68} rx={3} className="ln" />
      <path
        d="M164 110l11-12 11 5 12-20 12 5 9-15"
        pathLength={1}
        className="ac draw"
        style={t(0.6)}
      />
      <circle cx={219} cy={73} r={2.4} className="af" />
      <circle cx={219} cy={73} r={2.4} className="ac ping" style={t(1.2)} />
    </ArtFrame>
  );
}

export function IntegrationArt() {
  const nodes = [
    { x: 10, y: 12 },
    { x: 10, y: 102 },
    { x: 186, y: 12 },
    { x: 186, y: 102 },
  ];
  const links = [
    "M54 25C86 25 88 58 104 64",
    "M54 115C86 115 88 82 104 76",
    "M136 64C152 58 154 25 186 25",
    "M136 76C152 82 154 115 186 115",
  ];

  return (
    <ArtFrame label="Ilustração de sistemas conectados trocando dados">
      {links.map((d, i) => (
        <g key={d}>
          <path d={d} pathLength={1} className="ln draw" style={t(0.2 + i * 0.1)} />
          <path d={d} pathLength={1} className="comet" style={t(i * 0.7, 2.8)} />
        </g>
      ))}

      {nodes.map(({ x, y }, i) => (
        <g key={`${x}-${y}`} className="pop" style={t(0.1 + i * 0.08)}>
          <rect x={x} y={y} width={44} height={26} rx={7} className="fl" />
          <rect x={x} y={y} width={44} height={26} rx={7} className="ln" />
          <circle cx={x + 11} cy={y + 13} r={4.5} className="sf" />
          <rect x={x + 20} y={y + 9} width={16} height={3} rx={1.5} className="sf" />
          <rect x={x + 20} y={y + 15} width={11} height={3} rx={1.5} className="sf" />
        </g>
      ))}

      {/* Núcleo */}
      <circle cx={120} cy={70} r={20} className="fl" />
      <circle cx={120} cy={70} r={20} className="ln" />
      <circle cx={120} cy={70} r={12} className="ac ping" />
      <g className="pop" style={t(0.5)}>
        <circle cx={120} cy={70} r={12} className="af" />
        <path
          d="M111 70h4l2.5-5 4 10 2.5-5h4"
          fill="none"
          stroke="#050506"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </ArtFrame>
  );
}

export function DesignArt() {
  return (
    <ArtFrame label="Ilustração de interface sendo desenhada">
      <Window w={170} />
      <rect x={18} y={18} width={26} height={4} rx={2} className="sf" />
      {[124, 140, 156].map((x) => (
        <rect key={x} x={x} y={18} width={12} height={4} rx={2} className="sf" />
      ))}
      <rect x={18} y={36} width={80} height={8} rx={2} className="sf pop" style={t(0.3)} />
      <rect x={18} y={48} width={62} height={8} rx={2} className="sf pop" style={t(0.38)} />
      <rect x={18} y={62} width={34} height={9} rx={4.5} className="af pop" style={t(0.46)} />

      {[18, 70, 122].map((x, i) => (
        <g key={x} className="pop" style={t(0.5 + i * 0.08)}>
          <rect x={x} y={88} width={46} height={34} rx={3} className="fl" />
          <rect x={x} y={88} width={46} height={34} rx={3} className="ln" />
          <rect x={x + 6} y={95} width={20} height={3} rx={1.5} className="sf" />
          <rect x={x + 6} y={102} width={30} height={3} rx={1.5} className="sf" />
        </g>
      ))}

      {/* Imagem selecionada sendo arrastada */}
      <g className="cursor-design">
        <rect x={112} y={32} width={52} height={40} rx={3} className="sf" />
        <rect x={108} y={28} width={60} height={48} className="ac ants" />
        {[
          [108, 28],
          [168, 28],
          [108, 76],
          [168, 76],
        ].map(([cx, cy]) => (
          <rect
            key={`${cx}-${cy}`}
            x={cx - 2}
            y={cy - 2}
            width={4}
            height={4}
            fill="#050506"
            stroke="var(--accent)"
          />
        ))}
        <Cursor x={160} y={66} className="" />
      </g>

      {/* Painel de propriedades */}
      <rect x={186} y={8} width={46} height={124} rx={6} className="fl" />
      <path
        d="M192 8h34a6 6 0 0 1 6 6v112a6 6 0 0 1-6 6h-34a6 6 0 0 1-6-6V14a6 6 0 0 1 6-6z"
        pathLength={1}
        className="ln draw"
        style={t(0.15)}
      />
      <circle cx={198} cy={24} r={4} className="af" />
      <circle cx={209} cy={24} r={4} fill="rgba(255,255,255,0.7)" />
      <circle cx={220} cy={24} r={4} className="sf" />
      <circle cx={198} cy={24} r={6.5} className="ac" />
      {[46, 60, 74].map((y, i) => (
        <g key={y}>
          <path d={`M194 ${y}h30`} className="ln" />
          <circle cx={[214, 202, 220][i]} cy={y} r={2.6} className="af pop" style={t(0.6 + i * 0.1)} />
        </g>
      ))}
      <text
        x={193}
        y={116}
        fontSize={17}
        fontWeight={700}
        fill="rgba(255,255,255,0.45)"
        fontFamily="var(--font-display), sans-serif"
      >
        Aa
      </text>
    </ArtFrame>
  );
}

export function MaintenanceArt() {
  const lines = [
    { x: 30, w: 92 },
    { x: 38, w: 64 },
    { x: 38, w: 118 },
    { x: 46, w: 72 }, // linha corrigida
    { x: 38, w: 96 },
    { x: 30, w: 52 },
    { x: 30, w: 84 },
    { x: 38, w: 44 },
  ];
  const FIX = 3;
  const lineY = (i: number) => 34 + i * 11;

  return (
    <ArtFrame label="Ilustração de código sendo corrigido">
      <Window />
      <path d="M8 24h224" pathLength={1} className="ln draw" style={t(0.2)} />
      <rect x={14} y={12} width={44} height={8} rx={2} className="sf" />
      <rect x={62} y={12} width={36} height={8} rx={2} className="fl" />

      {lines.map((line, i) => (
        <g key={i}>
          <rect x={16} y={lineY(i)} width={6} height={3} rx={1.5} className="sf" opacity={0.6} />
          {i !== FIX && (
            <rect
              x={line.x}
              y={lineY(i) - 0.5}
              width={line.w}
              height={4}
              rx={2}
              className="sf pop"
              style={t(0.25 + i * 0.05)}
            />
          )}
        </g>
      ))}

      {/* Linha com bug → linha corrigida */}
      <g className="swap-out">
        <rect x={8} y={lineY(FIX) - 4} width={224} height={12} fill="rgba(251,191,36,0.08)" />
        <rect x={46} y={lineY(FIX) - 0.5} width={86} height={4} rx={2} fill="rgba(251,191,36,0.55)" />
      </g>
      <g className="swap-in">
        <rect x={8} y={lineY(FIX) - 4} width={224} height={12} fill="rgba(56,189,248,0.08)" />
        <rect x={46} y={lineY(FIX) - 0.5} width={72} height={4} rx={2} className="af" />
        <rect x={121} y={lineY(FIX) - 3} width={1.5} height={9} className="af blink" />
      </g>

      {/* Selo de ok */}
      <circle cx={204} cy={106} r={14} className="fl" />
      <path
        d="M204 92a14 14 0 1 1 0 28a14 14 0 1 1 0-28"
        pathLength={1}
        className="ac draw"
        style={t(0.8)}
      />
      <path d="M198 106l4.5 4.5 8-9" pathLength={1} className="ac draw" style={t(1.4)} />
    </ArtFrame>
  );
}

/* ------------------------------------------------------------------ */

/**
 * Linha de pulso da marca: um batimento atravessa a linha sem parar.
 * Pausa sozinha fora da tela.
 */
export function PulseLine({
  className,
  variant = "wide",
}: {
  className?: string;
  /** wide: faixa larga de seção · compact: monitor pequeno em cards */
  variant?: "wide" | "compact";
}) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observeInView(el);
  }, []);

  const wide = variant === "wide";
  const d = wide
    ? "M0 40H470l12-10 10 10h28l10-34 14 68 12-46 8 12h24l8-6 8 6H1200"
    : "M0 30H92l6-6 6 6h10l7-24 9 48 7-32 5 8h16l5-4 5 4H240";

  return (
    <svg
      ref={ref}
      viewBox={wide ? "0 0 1200 80" : "0 0 240 60"}
      preserveAspectRatio="xMidYMid meet"
      className={`pulse-line block w-full ${className ?? ""}`}
      aria-hidden
    >
      <path d={d} className="base" />
      <path d={d} pathLength={1} className="glow" />
      <path d={d} pathLength={1} className="beat" />
    </svg>
  );
}
