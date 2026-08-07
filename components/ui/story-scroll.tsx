"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export interface FlowSectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  "aria-label"?: string;
}

export const FlowSection: React.FC<FlowSectionProps> = ({
  className,
  style = {},
  children,
  "aria-label": ariaLabel,
}) => (
  <section
    data-flow-section
    aria-label={ariaLabel}
    // `sticky` no lugar do `pin: true` do ScrollTrigger: o pin envolve o
    // elemento num <div class="pin-spacer"> criado FORA do React. Quando
    // qualquer componente irmão re-renderiza, o React tenta reconciliar
    // filhos que o GSAP já moveu e estoura "insertBefore/removeChild não é
    // filho deste nó" — foi exatamente o que quebrou o hero antes. O sticky
    // empilha igual, em CSS puro, sem tocar na árvore do DOM.
    className={cn("sticky top-0 min-h-screen w-full overflow-hidden", className)}
  >
    <div
      data-flow-inner
      className="flow-art-container relative flex min-h-screen w-full flex-col justify-between gap-[2vw] px-[6vw] pt-[clamp(1.75rem,6vw,4rem)] pb-[clamp(1.75rem,4vw,3rem)] will-change-transform"
      style={{ transformOrigin: "bottom left", ...style }}
    >
      {children}
    </div>
  </section>
);

export interface FlowArtProps {
  children: React.ReactNode;
  className?: string;
  /** Ângulo de entrada de cada contêiner, em graus. */
  rotation?: number;
  "aria-label"?: string;
  id?: string;
}

const FlowArt: React.FC<FlowArtProps> = ({
  children,
  className,
  rotation = 30,
  id,
  "aria-label": ariaLabel = "Projetos",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const sections = Array.from(
        root.querySelectorAll<HTMLElement>("[data-flow-section]"),
      );
      if (sections.length === 0) return;

      // Empilhamento: cada contêiner cobre o anterior.
      sections.forEach((section, i) => gsap.set(section, { zIndex: i + 1 }));

      // gsap.matchMedia lê a preferência de movimento sem virar state do
      // React. Um useState aqui re-renderizaria logo após a montagem, que é
      // justamente a janela em que a reconciliação briga com o GSAP.
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        sections.forEach((section, i) => {
          if (i === 0) return;

          const inner = section.querySelector<HTMLElement>(".flow-art-container");
          if (!inner) return;

          // A rotação termina antes de o contêiner grudar no topo, então o
          // ScrollTrigger sempre mede a posição natural dele em fluxo.
          gsap.fromTo(
            inner,
            { rotation },
            {
              rotation: 0,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top 25%",
                scrub: true,
              },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [rotation] },
  );

  return (
    <div
      id={id}
      ref={containerRef}
      aria-label={ariaLabel}
      // Sem `overflow-x-hidden` aqui de propósito: overflow-x calcula
      // overflow-y para `auto`, o que cria um contêiner de rolagem e
      // quebra o `position: sticky` dos filhos — o efeito inteiro morre.
      className={cn("relative w-full", className)}
    >
      {children}
    </div>
  );
};

export default FlowArt;
