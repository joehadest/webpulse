"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface FlowSectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  "aria-label"?: string;
}

/** Bloco de projeto em fluxo normal — sem sticky/rotação (eles se sobrepunham). */
export const FlowSection: React.FC<FlowSectionProps> = ({
  className,
  style = {},
  children,
  "aria-label": ariaLabel,
}) => (
  <section
    data-flow-section
    aria-label={ariaLabel}
    className={cn(
      "relative w-full overflow-hidden border-b border-white/10 last:border-b-0",
      className,
    )}
    style={style}
  >
    <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-between gap-8 px-5 py-14 md:gap-10 md:px-8 md:py-20 lg:px-10 lg:py-24">
      {children}
    </div>
  </section>
);

export interface FlowArtProps {
  children: React.ReactNode;
  className?: string;
  /** Mantido por compatibilidade; a rotação foi removida. */
  rotation?: number;
  "aria-label"?: string;
  id?: string;
}

const FlowArt: React.FC<FlowArtProps> = ({
  children,
  className,
  id,
  "aria-label": ariaLabel = "Projetos",
}) => (
  <div
    id={id}
    aria-label={ariaLabel}
    className={cn("relative w-full scroll-mt-24", className)}
  >
    {children}
  </div>
);

export default FlowArt;
