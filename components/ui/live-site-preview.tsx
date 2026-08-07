"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Viewport lógico do site embutido — renderiza em resolução real e escala visualmente. */
const FRAME_WIDTH = 1280;
const FRAME_HEIGHT = 800;

interface LiveSitePreviewProps {
  url: string;
  title: string;
  /** Poster enquanto o iframe não carregou (ou se falhar). */
  poster?: { src: string; alt: string };
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

export function LiveSitePreview({
  url,
  title,
  poster,
  className,
  accent = "#94a3b8",
}: LiveSitePreviewProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.35);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [interactive, setInteractive] = useState(false);

  // Carrega o iframe só quando a mini-janela chega perto da viewport.
  useEffect(() => {
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
  }, []);

  // Escala o iframe de 1280px para caber no container sem perder nitidez.
  useEffect(() => {
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
  }, []);

  // Timeout de fallback se o site bloquear embed ou demorar demais.
  useEffect(() => {
    if (!shouldLoad || loaded || failed) return;
    const t = window.setTimeout(() => setFailed(true), 12_000);
    return () => window.clearTimeout(t);
  }, [shouldLoad, loaded, failed]);

  const showPoster = Boolean(poster) && (!loaded || failed);
  const host = hostnameOf(url);

  return (
    <div
      ref={shellRef}
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-xl border border-white/12 bg-[#0c0e12] shadow-[0_24px_60px_-18px_rgba(0,0,0,0.85)]",
        className,
      )}
    >
      {/* Chrome da janela */}
      <div className="flex shrink-0 items-center gap-3 border-b border-white/10 bg-white/[0.04] px-3 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-md border border-white/10 bg-black/35 px-3 py-1 text-center text-[11px] text-white/55">
          {host}
        </div>
        <span
          className="hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] sm:inline"
          style={{ color: accent }}
        >
          Ao vivo
        </span>
      </div>

      {/* Viewport — altura proporcional à escala do frame */}
      <div
        ref={viewportRef}
        className="relative w-full overflow-hidden bg-[#090b0f]"
        style={{ height: FRAME_HEIGHT * scale }}
      >
        {showPoster && poster && (
          <Image
            src={poster.src}
            alt={poster.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
            priority={false}
          />
        )}

        {shouldLoad && !failed && (
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
              // Mobile: scroll da página manda; desktop: interage direto.
              interactive
                ? "pointer-events-auto"
                : "pointer-events-none lg:pointer-events-auto",
            )}
            style={{
              width: FRAME_WIDTH,
              height: FRAME_HEIGHT,
              transform: `scale(${scale})`,
            }}
          />
        )}

        {/* Overlay mobile — evita conflito com o scroll sticky */}
        {!interactive && loaded && !failed && (
          <button
            type="button"
            onClick={() => setInteractive(true)}
            className="absolute inset-0 z-10 flex items-end justify-center bg-gradient-to-t from-black/55 via-transparent to-transparent pb-4 lg:hidden"
          >
            <span className="rounded-full border border-white/25 bg-black/55 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
              Toque para interagir
            </span>
          </button>
        )}

        {failed && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black/50 px-4 text-center backdrop-blur-[2px]">
            <p className="text-sm text-white/70">
              Não foi possível embutir o site aqui.
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-black"
            >
              Abrir em nova aba
            </a>
          </div>
        )}

        {shouldLoad && !loaded && !failed && (
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
