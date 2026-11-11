import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Classe do contêiner interno (.shell). */
  innerClassName?: string;
  /** Fundo levemente elevado — alterna o ritmo entre seções vizinhas. */
  tone?: "base" | "raised";
  /** Linha de topo + trilhos verticais + marcas de cruz. */
  rails?: boolean;
  "aria-label"?: string;
}

/**
 * Casca padrão de seção. Centraliza largura, respiro vertical e a "planta
 * baixa" (trilhos e cruzes) para que toda seção pertença à mesma grade.
 */
export function Section({
  id,
  children,
  className,
  innerClassName,
  tone = "base",
  rails = true,
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "relative w-full section-pad scroll-mt-24",
        rails && "rails",
        tone === "raised" ? "bg-surface" : "bg-background",
        className,
      )}
    >
      {rails && (
        <>
          <span aria-hidden className="cross cross-l" />
          <span aria-hidden className="cross cross-r" />
          <span aria-hidden className="rail-beam rail-beam-l" />
          <span aria-hidden className="rail-beam rail-beam-r" />
        </>
      )}
      <div className={cn("shell cv-auto relative z-10", innerClassName)}>{children}</div>
    </section>
  );
}
