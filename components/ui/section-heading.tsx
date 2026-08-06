"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        centered ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <Reveal>
        <span className="section-label">{label}</span>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mt-5 mb-4 text-gradient leading-[1.1]">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-gradient-accent">{highlight}</span>
            </>
          )}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "text-white/45 text-base md:text-lg leading-relaxed",
              centered && "mx-auto max-w-2xl",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
