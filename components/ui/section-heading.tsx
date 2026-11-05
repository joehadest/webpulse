"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  /** Número da seção mostrado em mono na sobrelinha (ex: "02"). */
  index?: string;
  /**
   * split  — título à esquerda, subtítulo à direita (padrão editorial)
   * left   — tudo empilhado à esquerda (para colunas estreitas)
   * center — empilhado e centralizado
   */
  align?: "split" | "left" | "center";
  className?: string;
}

/**
 * Cabeçalho de seção. O destaque deixou de ser uma palavra em degradê azul:
 * a segunda parte do título aparece em tom mais baixo, o que dá hierarquia
 * sem competir com a cor da marca.
 */
export function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  index,
  align = "split",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  const split = align === "split";

  const eyebrow = (
    <Reveal>
      <p className="eyebrow">
        {index && <span className="eyebrow-index">{index}</span>}
        {index && <span aria-hidden className="eyebrow-rule" />}
        <span>{label}</span>
      </p>
    </Reveal>
  );

  const heading = (
    <Reveal delay={0.06}>
      <h2 className="display-xl mt-5 text-1">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-3">{highlight}</span>
          </>
        )}
      </h2>
    </Reveal>
  );

  const sub = subtitle ? (
    <Reveal delay={0.12}>
      <p className={cn("lead max-w-[46ch]", centered && "mx-auto")}>{subtitle}</p>
    </Reveal>
  ) : null;

  if (split) {
    return (
      <div
        className={cn(
          "grid gap-6 md:grid-cols-12 md:items-end md:gap-10",
          className,
        )}
      >
        <div className="md:col-span-7">
          {eyebrow}
          {heading}
        </div>
        {sub && <div className="md:col-span-5 md:pb-2">{sub}</div>}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "max-w-3xl",
        centered ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow}
      {heading}
      {sub && <div className="mt-5">{sub}</div>}
    </div>
  );
}
