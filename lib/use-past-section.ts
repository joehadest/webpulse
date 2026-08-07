"use client";

import { useEffect, useState } from "react";

/**
 * true assim que a seção com esse id sai completamente da viewport.
 * Usada para só revelar navbar / botão "voltar ao topo" depois que o
 * hero (que pode ter uma altura de scroll bem maior que 100vh) termina.
 */
export function usePastSection(id: string) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const target = document.getElementById(id);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPast(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [id]);

  return past;
}
