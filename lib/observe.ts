/**
 * Observadores compartilhados. Em vez de um IntersectionObserver por
 * elemento (dezenas na página), existe um por finalidade — mais barato e
 * sem nenhum estado React: o resultado vira atributo data-* no próprio nó,
 * e o CSS (app/motion.css) faz o resto.
 */

type Unobserve = () => void;

let revealObserver: IntersectionObserver | null = null;
let inViewObserver: IntersectionObserver | null = null;

/** Marca `data-revealed` uma única vez, quando o elemento entra na tela. */
export function observeReveal(el: Element): Unobserve {
  if (typeof IntersectionObserver === "undefined") {
    el.setAttribute("data-revealed", "");
    return () => {};
  }

  revealObserver ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute("data-revealed", "");
        revealObserver?.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
  );

  revealObserver.observe(el);
  return () => revealObserver?.unobserve(el);
}

/**
 * Mantém `data-inview="true|false"` sempre atualizado — usado para pausar
 * animações em loop (ilustrações, linha de pulso) quando saem da tela.
 */
export function observeInView(el: Element): Unobserve {
  if (typeof IntersectionObserver === "undefined") {
    el.setAttribute("data-inview", "true");
    return () => {};
  }

  inViewObserver ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        entry.target.setAttribute("data-inview", String(entry.isIntersecting));
      }
    },
    { rootMargin: "100px 0px" },
  );

  inViewObserver.observe(el);
  return () => inViewObserver?.unobserve(el);
}
