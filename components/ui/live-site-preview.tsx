"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Viewport lógico do site embutido — renderiza em resolução real e escala visualmente. */
const FRAME_WIDTH = 1280;
const FRAME_HEIGHT = 800;

/**
 * Só embute o site de verdade em telas grandes com mouse. No celular, um
 * iframe de 1280×800 escalado vira uma textura de ~3500×2200 px rodando o
 * site inteiro (animações, vídeo, scripts) — a GPU do aparelho não aguenta,
 * a página trava e pisca. Lá mostramos a imagem estática + link.
 */
const EMBED_QUERY = "(min-width: 1024px) and (hover: hover) and (pointer: fine)";

interface LiveSitePreviewProps {
  url: string;
  title: string;
  /** Captura estática do site (leve). Base em todos os dispositivos. */
  poster?: string;
  className?: string;
  accent?: string;
}

function hostnameOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/** Economia de dados ligada no aparelho → nunca embute. */
function prefersSaveData() {
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
  return Boolean(nav.connection?.saveData);
}

export function LiveSitePreview({
  url,
  title,
  poster,
  className,
  accent = "#94a3b8",
}: LiveSitePreviewProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  // null = ainda não sabemos (servidor / primeiro render): mostra o pôster.
  const [canEmbed, setCanEmbed] = useState<boolean | null>(null);
  const [scale, setScale] = useState(0.35);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // Decide pelo dispositivo, e reavalia se a janela mudar (ex.: girar tablet)
  useEffect(() => {
    const mq = window.matchMedia(EMBED_QUERY);
    const sync = () => setCanEmbed(mq.matches && !prefersSaveData());
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Carrega o iframe só quando a janela chega perto da viewport.
  useEffect(() => {
    if (!canEmbed) return;
    const el = shellRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.05 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [canEmbed]);

  // Escala o iframe de 1280px para caber no container sem perder nitidez.
  useEffect(() => {
    if (!canEmbed) return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    const update = () => {
      const w = viewport.clientWidth;
      if (w > 0) setScale(w / FRAME_WIDTH);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(viewport);
    return () => ro.disconnect();
  }, [canEmbed]);

  // Timeout de fallback se o site bloquear embed ou demorar demais.
  useEffect(() => {
    if (!shouldLoad || loaded || failed) return;
    const t = window.setTimeout(() => setFailed(true), 12_000);
    return () => window.clearTimeout(t);
  }, [shouldLoad, loaded, failed]);

  const host = hostnameOf(url);
  const embedding = canEmbed === true && shouldLoad && !failed;

  return (
    <div
      ref={shellRef}
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-white/[0.12] bg-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.5),0_40px_80px_-32px_rgba(0,0,0,0.9)] ring-1 ring-black/60",
        className,
      )}
    >
      {/* Chrome da janela */}
      <div className="flex shrink-0 items-center gap-3 border-b border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.02] px-3.5 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.14]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.14]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.14]" />
        </div>
        <div className="mono min-w-0 flex-1 truncate rounded-md border border-white/[0.08] bg-black/40 px-3 py-1 text-center text-[11px] text-white/55 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
          {host}
        </div>
        <span className="mono hidden shrink-0 items-center gap-1.5 text-[10px] uppercase tracking-[0.1em] text-white/55 sm:inline-flex">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
          {canEmbed ? "Ao vivo" : "No ar"}
        </span>
      </div>

      {/* Viewport: proporção fixa 16:10 (sem pulo de layout) */}
      <div
        ref={viewportRef}
        className="relative aspect-[16/10] w-full overflow-hidden bg-[#090b0f]"
      >
        {/* Pôster: aparece já no primeiro render e enquanto o iframe carrega */}
        {poster && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt={`Página inicial do site ${title}`}
            width={1600}
            height={1000}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        )}

        {embedding && (
          <iframe
            title={`Prévia ao vivo — ${title}`}
            src={url}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            // Sem allow-top-navigation para o site não “roubar” a aba do portfólio.
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            onLoad={() => setLoaded(true)}
            className={cn(
              "absolute left-0 top-0 origin-top-left border-0 bg-white transition-opacity duration-500",
              loaded ? "opacity-100" : "opacity-0",
            )}
            style={{
              width: FRAME_WIDTH,
              height: FRAME_HEIGHT,
              transform: `scale(${scale})`,
            }}
          />
        )}

        {/* Celular / tablet / sem embed: abre o site real em outra aba */}
        {canEmbed === false || failed ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute inset-0 z-10 flex items-end justify-center bg-gradient-to-t from-black/70 via-black/10 to-transparent pb-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/80 px-4 py-2.5 text-xs font-semibold text-white transition-colors group-hover:bg-white group-hover:text-black">
              Abrir site ao vivo
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          </a>
        ) : null}

        {embedding && !loaded && !poster && (
          <div className="absolute inset-0 z-[5] flex items-center justify-center">
            <div
              className="h-8 w-8 animate-spin rounded-full border-2 border-white/15"
              style={{ borderTopColor: accent }}
              aria-hidden
            />
            <span className="sr-only">Carregando prévia do site</span>
          </div>
        )}
      </div>
    </div>
  );
}
