"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /**
   * card — superfície solta com borda e sombra própria
   * cell — célula de .spec-grid (sem borda; a grade desenha as linhas)
   */
  variant?: "card" | "cell";
}

/**
 * Brilho que segue o cursor. A posição vai direto para CSS vars no
 * elemento — nenhum setState por movimento do mouse, nenhum re-render.
 */
export function SpotlightCard({
  children,
  className,
  variant = "card",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "spotlight group overflow-hidden",
        variant === "card" ? "card-surface" : "spec-cell",
        className,
      )}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
