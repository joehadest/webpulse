"use client";

import { ArrowUp } from "lucide-react";
import { usePastSection } from "@/lib/use-past-section";

/**
 * Entrada/saída com @starting-style e anel de progresso de leitura ligado ao
 * scroll (app/motion.css → .to-top). O React só diz se está visível.
 */
export function ScrollToTop() {
  // Mesmo sinal usado pela navbar: só faz sentido oferecer "voltar ao topo"
  // depois que o hero (com sua própria altura de scroll) ficou pra trás.
  const visible = usePastSection("hero");

  return (
    <button
      type="button"
      data-visible={visible}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="to-top glass fixed bottom-8 right-6 z-40 items-center justify-center rounded-full p-3 text-white shadow-lg hover:bg-sky-400/10 hover:text-sky-300 md:bottom-10 md:right-8"
      aria-label="Rolar para o início"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
