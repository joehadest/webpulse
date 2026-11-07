"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { observeReveal } from "@/lib/observe";

export type RevealVariant = "up" | "fade" | "scale" | "split";

interface RevealProps {
  children: ReactNode;
  /** Atraso em segundos (para escalonar itens vizinhos). */
  delay?: number;
  /** Distância da subida em px (variante "up"/"scale"). */
  y?: number;
  variant?: RevealVariant;
  as?: ElementType;
  className?: string;
}

/**
 * Entrada padrão de scroll. O componente só marca `data-revealed` quando o
 * elemento aparece; a animação em si é CSS (app/motion.css), então não há
 * re-render, nem JS por frame, e o movimento respeita prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  variant = "up",
  as: Tag = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observeReveal(el);
  }, []);

  const style = {
    "--reveal-delay": `${delay}s`,
    "--reveal-y": `${y}px`,
  } as CSSProperties;

  return (
    <Tag ref={ref} data-reveal={variant} className={className} style={style}>
      {children}
    </Tag>
  );
}

interface SplitWordsProps {
  text: string;
  /** Índice inicial — para continuar a sequência de outro trecho. */
  start?: number;
  className?: string;
}

/**
 * Quebra um texto em palavras mascaradas para a entrada "split".
 * Use dentro de <Reveal variant="split">.
 */
export function SplitWords({ text, start = 0, className }: SplitWordsProps) {
  const words = text.split(" ").filter(Boolean);

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="split-word">
            <span style={{ "--i": start + i } as CSSProperties}>{word}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}

/** Quantas palavras um texto tem — para encadear dois SplitWords. */
export const wordCount = (text?: string) =>
  text ? text.split(" ").filter(Boolean).length : 0;
