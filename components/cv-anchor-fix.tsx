"use client";

import { useEffect } from "react";

/**
 * As seções usam content-visibility: auto (.cv-auto) e ainda não montadas
 * têm altura estimada. Num salto por âncora (#contato, #portfolio...) o
 * destino seria calculado com essas estimativas e a rolagem pararia no
 * lugar errado. Aqui, no clique, tudo é montado uma vez (classe .cv-off),
 * a rolagem acontece com as alturas reais, e depois volta ao normal —
 * com as alturas já memorizadas pelo navegador.
 */
export function CvAnchorFix() {
  useEffect(() => {
    const root = document.documentElement;
    let timer = 0;

    const done = () => {
      window.clearTimeout(timer);
      root.classList.remove("cv-off");
    };

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="#"]');
      if (!link) return;
      root.classList.add("cv-off");
      void root.offsetHeight; // força o layout com tudo montado, antes da rolagem
      window.addEventListener("scrollend", done, { once: true });
      timer = window.setTimeout(done, 2500); // navegadores sem "scrollend"
    };

    // Captura: roda antes dos handlers dos links e da navegação padrão
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      done();
    };
  }, []);

  return null;
}
