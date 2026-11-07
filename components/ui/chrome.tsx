"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useBusinessStatus } from "@/lib/business-hours";

interface ChromeBarProps {
  /** Título em mono, como o nome de um arquivo ou de uma conversa. */
  title: string;
  /** Conteúdo alinhado à direita (status, contador...). */
  right?: ReactNode;
  className?: string;
}

/**
 * Barra de janela usada nos painéis "de produto" (FAQ, prévia do contato).
 * Repete a moldura das ilustrações e das prévias do portfólio, para que
 * tudo pareça parte do mesmo sistema.
 */
export function ChromeBar({ title, right, className }: ChromeBarProps) {
  return (
    <div className={cn("chrome-bar", className)}>
      <span aria-hidden className="chrome-dots">
        <span />
        <span />
        <span />
      </span>
      <span className="mono min-w-0 flex-1 truncate text-[11px] text-3">{title}</span>
      {right}
    </div>
  );
}

/** Ponto verde pulsando (ou cinza, parado) + rótulo. */
export function LiveStatus({
  children,
  online = true,
}: {
  children: ReactNode;
  online?: boolean;
}) {
  return (
    <span className="mono inline-flex items-center gap-2 text-[11px] text-2">
      <span aria-hidden className={cn("live-dot", !online && "is-off")} />
      {children}
    </span>
  );
}

/**
 * Status do atendimento ligado ao relógio de Brasília: "online" só dentro
 * do horário configurado em siteConfig.hours.
 */
export function ChatPresence() {
  const status = useBusinessStatus();
  const online = status?.online ?? true;
  return (
    <LiveStatus online={online}>{online ? "online" : "fora do horário"}</LiveStatus>
  );
}

/** Três pontos de "digitando…". */
export function TypingDots({ className }: { className?: string }) {
  return (
    <span className={cn("typing", className)} aria-label="digitando">
      <span />
      <span />
      <span />
    </span>
  );
}
