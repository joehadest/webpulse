"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site-config";
import { projects } from "@/lib/projects";
import { WebPulseLogo } from "@/components/ui/webpulse-logo";

if (typeof window !== "undefined") {
  // useGSAP precisa estar registrado como plugin para lidar corretamente com
  // o double-invoke de efeitos do React Strict Mode. Sem isso, o pin do
  // ScrollTrigger (que reestrutura o DOM por fora do React) pode entrar em
  // conflito com a reconciliação do React e quebrar com um erro de
  // "insertBefore" ao remontar em desenvolvimento.
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  /* Environment Overlays */
  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image:
          linear-gradient(to right, color-mix(in srgb, var(--foreground) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 5%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  /* -------------------------------------------------------------------
     PHYSICAL SKEUOMORPHIC MATERIALS
  ---------------------------------------------------------------------- */

  .text-3d-matte {
      color: var(--foreground);
      text-shadow:
          0 10px 30px color-mix(in srgb, var(--foreground) 20%, transparent),
          0 2px 4px color-mix(in srgb, var(--foreground) 10%, transparent);
  }

  .text-silver-matte {
      background: linear-gradient(180deg, var(--foreground) 0%, color-mix(in srgb, var(--foreground) 40%, transparent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      /* background-clip: text pinta o gradiente apenas dentro da caixa do
         elemento. Com letter-spacing negativo (tracking-tighter), a caixa
         encolhe ~0.05em alem da tinta real do ultimo glifo, entao a ponta
         da letra final fica sem gradiente e some. O padding simetrico
         devolve essa folga dos dois lados, mantendo o texto centralizado. */
      padding-inline: 0.08em;
      filter:
          drop-shadow(0px 10px 20px color-mix(in srgb, var(--foreground) 15%, transparent))
          drop-shadow(0px 2px 4px color-mix(in srgb, var(--foreground) 10%, transparent));
  }

  .text-card-silver-matte {
      background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      /* mesma folga do .text-silver-matte — ver comentario la em cima */
      padding-inline: 0.08em;
      filter:
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8))
          drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  /* Card fundo: azul profundo alinhado ao accent sky do site (não indigo genérico) */
  .premium-depth-card {
      background: linear-gradient(145deg, #0e3a6b 0%, #050810 100%);
      box-shadow:
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.2),
          inset 0 -2px 4px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.04);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  /* Hardware realista de iPhone (neutro de propósito, não segue a marca) */
  .iphone-bezel {
      background-color: #111;
      box-shadow:
          inset 0 0 0 2px #52525B,
          inset 0 0 0 7px #000,
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(0,0,0,0.7);
  }

  .hardware-btn {
      background: linear-gradient(90deg, #404040 0%, #171717 100%);
      box-shadow:
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.15),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,255,255,0.05);
  }

  .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
      background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
      box-shadow:
          0 10px 20px rgba(0,0,0,0.3),
          inset 0 1px 1px rgba(255,255,255,0.05),
          inset 0 -1px 1px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.03);
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      box-shadow:
          0 0 0 1px rgba(255, 255, 255, 0.1),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.2),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  /* Botões físicos, cores alinhadas ao branco/escuro já usado no resto do site */
  .btn-modern-light, .btn-modern-dark {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-modern-light {
      background: linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%);
      color: #0F172A;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:active {
      transform: translateY(1px);
      background: linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1), inset 0 3px 6px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.02);
  }
  .btn-modern-dark {
      background: linear-gradient(180deg, #27272A 0%, #18181B 100%);
      color: #FFFFFF;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.6), 0 12px 24px -4px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:hover {
      transform: translateY(-3px);
      background: linear-gradient(180deg, #3F3F46 0%, #27272A 100%);
      box-shadow: 0 0 0 1px rgba(255,255,255,0.15), 0 6px 12px -2px rgba(0,0,0,0.7), 0 20px 32px -6px rgba(0,0,0,1), inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:active {
      transform: translateY(1px);
      background: #18181B;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.05), inset 0 3px 8px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(0,0,0,0.5);
  }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  cardHeading?: string;
  cardDescription?: React.ReactNode;
  metricValue?: number;
  metricSuffix?: string;
  metricLabel?: string;
  ctaHeading?: string;
  ctaDescription?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  /** Distância de scroll (px) que a seção fica "presa" animando. Menor = chega mais rápido no resto do site. */
  scrollDistance?: number;
  scrollDistanceMobile?: number;
}

export function CinematicHero({
  brandName = "WebPulse",
  tagline1 = "Web",
  tagline2 = "Pulse",
  cardHeading = "Do briefing ao deploy.",
  cardDescription = (
    <>
      A <span className="text-white font-semibold">WebPulse</span> cuida de
      cada etapa: design, desenvolvimento e entrega. Código, domínio e painel
      administrativo prontos — tudo sob seu controle.
    </>
  ),
  metricValue = projects.length,
  metricSuffix = "+",
  metricLabel = "Projetos no ar",
  ctaHeading = "Bora tirar seu projeto do papel?",
  ctaDescription = "Sites institucionais, lojas online e sistemas de gestão. Orçamento sem compromisso e resposta em até 24h.",
  primaryCtaLabel = "Falar no WhatsApp",
  primaryCtaHref,
  secondaryCtaLabel = "Ver projetos",
  secondaryCtaHref = "#portfolio",
  scrollDistance = 5200,
  scrollDistanceMobile = 3200,
  className,
  ...props
}: CinematicHeroProps) {
  // wrapperRef é o elemento alto (100vh + pinDistance) que dá espaço de
  // scroll pro efeito; containerRef é o elemento visual (100vh, sticky) que
  // fica "grudado" no topo enquanto se rola por dentro do wrapper.
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  // Mobile e reduced-motion ficam separados: no celular queremos presença
  // visual (mockup + entrada), sem o pin/scrub que causa o “vai e volta”.
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [pinDistance, setPinDistance] = useState(scrollDistance);
  const mobileStageRef = useRef<HTMLDivElement>(null);

  const waHref =
    primaryCtaHref ??
    whatsappLink(
      "Olá! Vi a apresentação do site da WebPulse e quero conversar sobre um projeto.",
    );

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMq = window.matchMedia("(max-width: 767px)");
    const sync = () => {
      setPrefersReducedMotion(reduceMq.matches);
      setIsMobile(mobileMq.matches);
      setPinDistance(mobileMq.matches ? scrollDistanceMobile : scrollDistance);
      setHeroReady(true);
    };
    sync();
    reduceMq.addEventListener("change", sync);
    mobileMq.addEventListener("change", sync);
    return () => {
      reduceMq.removeEventListener("change", sync);
      mobileMq.removeEventListener("change", sync);
    };
  }, [scrollDistance, scrollDistanceMobile]);

  const useCinematicScroll = heroReady && !isMobile && !prefersReducedMotion;

  // 1. Tilt do celular seguindo o mouse — só no hero cinematográfico (desktop)
  useGSAP(() => {
    if (!useCinematicScroll) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;

      cancelAnimationFrame(requestRef.current);

      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;

          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, { scope: containerRef, dependencies: [useCinematicScroll] });

  // 2. Timeline cinematográfica de scroll — só no desktop.
  //
  // Importante: NÃO usamos `pin: true` do ScrollTrigger. Pin reparenta o
  // elemento pinado dentro de um <div class="pin-spacer"> criado por fora do
  // React. O hero tem irmãos que re-renderizam sozinhos (Navbar, botão
  // "voltar ao topo"); assim que qualquer um deles muda, o React tenta
  // reconciliar os filhos de <main> usando referências que o GSAP já moveu,
  // e quebra com "insertBefore"/"removeChild não é filho deste nó". Em vez
  // disso, o "grudar na tela" é feito com `position: sticky` (CSS puro, sem
  // mexer no DOM) no wrapperRef abaixo — o GSAP só anima propriedades de
  // estilo dos elementos, nunca move nós na árvore.
  useGSAP(() => {
    if (!useCinematicScroll) return;
    if (!containerRef.current || !wrapperRef.current) return;

    gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
    gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
    gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
    gsap.set([".card-left-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"], { autoAlpha: 0 });
    gsap.set(".cta-wrapper", { autoAlpha: 0, scale: 0.8, filter: "blur(30px)" });

    const introTl = gsap.timeline({ delay: 0.3 });
    introTl
      .to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
      .to(".text-days", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0");

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: `+=${pinDistance}`,
        scrub: 0.35,
        invalidateOnRefresh: true,
      },
    });

    scrollTl
      .to([".hero-text-wrapper", ".bg-grid-theme"], { scale: 1.15, filter: "blur(20px)", opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0)
      .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
      .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
      .fromTo(".mockup-scroll-wrapper",
        { y: 300, z: -500, rotationX: 50, rotateY: -30, autoAlpha: 0, scale: 0.6 },
        { y: 0, z: 0, rotateX: 0, rotateY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 }, "-=0.8"
      )
      .fromTo(".phone-widget", { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 }, "-=1.5")
      .to(".progress-ring", { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.2")
      .to(".counter-val", { innerHTML: metricValue, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")
      .fromTo(".floating-badge", { y: 100, autoAlpha: 0, scale: 0.7, rotateZ: -10 }, { y: 0, autoAlpha: 1, scale: 1, rotateZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 }, "-=2.0")
      .fromTo(".card-left-text", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
      .to({}, { duration: 2.5 })
      .set(".hero-text-wrapper", { autoAlpha: 0 })
      .set(".cta-wrapper", { autoAlpha: 1 })
      .to({}, { duration: 1.5 })
      .to([".mockup-scroll-wrapper", ".floating-badge", ".card-left-text"], {
        scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05,
      })
      .to(".main-card", {
        width: "85vw",
        height: "85vh",
        borderRadius: "40px",
        ease: "expo.inOut",
        duration: 1.8,
      }, "pullback")
      .to(".cta-wrapper", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback")
      .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });
  }, { scope: containerRef, dependencies: [metricValue, useCinematicScroll, pinDistance] });

  // Entrada do hero mobile — tempo, não scrub. Presença sem travar o dedo.
  useGSAP(
    () => {
      if (!heroReady || !isMobile || prefersReducedMotion) return;
      if (!mobileStageRef.current) return;

      const root = mobileStageRef.current;
      const q = gsap.utils.selector(root);

      gsap.set(q(".m-hero-brand"), { autoAlpha: 0, y: 28 });
      gsap.set(q(".m-hero-copy"), { autoAlpha: 0, y: 20 });
      gsap.set(q(".m-hero-phone"), { autoAlpha: 0, y: 48, scale: 0.92 });
      gsap.set(q(".m-hero-badge"), { autoAlpha: 0, y: 16, scale: 0.9 });
      gsap.set(q(".m-hero-cta"), { autoAlpha: 0, y: 18 });
      gsap.set(q(".m-progress-ring"), { strokeDashoffset: 301 });
      gsap.set(q(".m-counter-val"), { innerHTML: 0 });

      const tl = gsap.timeline({ delay: 0.15 });
      tl.to(q(".m-hero-brand"), { autoAlpha: 1, y: 0, duration: 0.9, ease: "expo.out" })
        .to(q(".m-hero-copy"), { autoAlpha: 1, y: 0, duration: 0.75, ease: "power3.out" }, "-=0.55")
        .to(q(".m-hero-phone"), { autoAlpha: 1, y: 0, scale: 1, duration: 1.1, ease: "expo.out" }, "-=0.45")
        .to(q(".m-hero-badge"), {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "back.out(1.4)",
        }, "-=0.55")
        .to(q(".m-progress-ring"), { strokeDashoffset: 75, duration: 1.4, ease: "power3.inOut" }, "-=0.7")
        .to(q(".m-counter-val"), {
          innerHTML: metricValue,
          snap: { innerHTML: 1 },
          duration: 1.2,
          ease: "expo.out",
        }, "-=1.2")
        .to(q(".m-hero-cta"), { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.9");

      gsap.to(q(".m-hero-phone-float"), {
        y: -10,
        duration: 2.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: mobileStageRef, dependencies: [heroReady, isMobile, prefersReducedMotion, metricValue] },
  );

  // Placeholder mínimo até saber se é mobile — evita flash do pin sticky
  if (!heroReady) {
    return (
      <div
        id="hero"
        className="relative w-full min-h-[100dvh] bg-background"
        aria-hidden
      />
    );
  }

  // Reduced-motion: fluxo estático, sem animações de entrada
  if (prefersReducedMotion) {
    return (
      <div
        id="hero"
        className={cn("relative w-full bg-background text-white", className)}
        {...props}
      >
        <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 text-center">
          <h1 className="font-display text-[clamp(3.5rem,10vw,7rem)] font-black uppercase leading-[0.88] tracking-tight mb-10">
            <span className="text-3d-matte block">{tagline1}</span>
            <span className="text-silver-matte block">{tagline2}</span>
          </h1>

          <div className="premium-depth-card relative mx-auto max-w-3xl rounded-[32px] p-8 md:p-12 text-left">
            <h2
              className="text-card-silver-matte text-4xl font-black uppercase tracking-tighter mb-6 text-center"
              style={{ lineHeight: "normal" }}
            >
              {brandName}
            </h2>
            <h3 className="text-white text-2xl font-bold mb-3">{cardHeading}</h3>
            <p className="text-blue-100/70 text-base leading-relaxed mb-6">{cardDescription}</p>
            <p className="text-white/80 text-sm">
              <span className="font-bold text-2xl">{metricValue}{metricSuffix}</span> {metricLabel}
            </p>
          </div>

          <h2 className="text-silver-matte text-3xl md:text-5xl font-bold mt-16 mb-4 tracking-tight">{ctaHeading}</h2>
          <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">{ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-modern-light flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold">
              <MessageCircle className="w-4 h-4" />
              {primaryCtaLabel}
            </a>
            <a href={secondaryCtaHref} onClick={(e) => handleNavClick(e, secondaryCtaHref)} className="btn-modern-dark flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold">
              {secondaryCtaLabel}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Mobile: mesma linguagem visual do desktop, em fluxo normal (sem pin/scrub)
  if (isMobile) {
    return (
      <div
        id="hero"
        ref={mobileStageRef}
        className={cn(
          "relative w-full min-h-[100dvh] overflow-hidden bg-background text-white font-sans antialiased",
          className,
        )}
        {...props}
      >
        <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
        <div className="film-grain" aria-hidden="true" />
        <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-40" aria-hidden="true" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/[0.12] blur-[90px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-10 right-[-20%] h-64 w-64 rounded-full bg-white/[0.04] blur-[80px]"
        />

        <div className="relative z-10 flex min-h-[100dvh] flex-col px-5 pb-8 pt-28">
          {/* Marca + promessa — um bloco só */}
          <div className="text-center">
            <h1 className="m-hero-brand font-display text-[clamp(3.25rem,14vw,4.75rem)] font-black uppercase leading-[0.88] tracking-tight">
              <span className="text-3d-matte block">{tagline1}</span>
              <span className="text-silver-matte block">{tagline2}</span>
            </h1>
            <div className="m-hero-copy mx-auto mt-5 max-w-[28ch]">
              <p className="text-lg font-semibold tracking-tight text-white">{cardHeading}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Sites, lojas e sistemas sob medida — do briefing ao deploy.
              </p>
            </div>
          </div>

          {/* Visual dominante — mockup */}
          <div className="m-hero-phone relative mx-auto flex min-h-0 flex-1 items-center justify-center py-6">
            <div className="m-hero-phone-float relative">
              <div className="relative w-[220px] scale-[0.92] sm:w-[240px] sm:scale-100">
                <div className="iphone-bezel relative mx-auto aspect-[9/19] w-full rounded-[2.4rem]">
                  <div className="absolute inset-[6px] overflow-hidden rounded-[2rem] bg-[#050914] text-white shadow-[inset_0_0_15px_rgba(0,0,0,1)]">
                    <div className="screen-glare absolute inset-0 z-40 pointer-events-none" aria-hidden="true" />
                    <div className="absolute left-1/2 top-[4px] z-50 flex h-[22px] w-[84px] -translate-x-1/2 items-center justify-end rounded-full bg-black px-2.5 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                    </div>

                    <div className="flex h-full flex-col px-4 pb-6 pt-10">
                      <div className="mb-5 flex items-center justify-between">
                        <div>
                          <span className="mb-0.5 block text-[9px] font-bold uppercase tracking-widest text-neutral-400">
                            Hoje
                          </span>
                          <span className="text-base font-bold tracking-tight text-white">Painel</span>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5">
                          <WebPulseLogo size={18} />
                        </div>
                      </div>

                      <div className="relative mx-auto mb-5 flex h-32 w-32 items-center justify-center drop-shadow-[0_12px_20px_rgba(0,0,0,0.8)]">
                        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 128 128" aria-hidden="true">
                          <circle cx="64" cy="64" r="48" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="10" />
                          <circle
                            className="m-progress-ring"
                            cx="64"
                            cy="64"
                            r="48"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="10"
                            strokeLinecap="round"
                            style={{
                              strokeDasharray: 301,
                              strokeDashoffset: 301,
                              transform: "rotate(-90deg)",
                              transformOrigin: "50% 50%",
                            }}
                          />
                        </svg>
                        <div className="z-10 flex flex-col items-center text-center">
                          <span className="text-3xl font-extrabold tracking-tighter text-white">
                            <span className="m-counter-val">0</span>
                            {metricSuffix}
                          </span>
                          <span className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.12em] text-blue-200/50">
                            {metricLabel}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="widget-depth flex items-center rounded-xl p-2.5">
                          <div className="mr-2.5 flex h-8 w-8 items-center justify-center rounded-lg border border-sky-400/20 bg-gradient-to-br from-sky-400/20 to-sky-500/5">
                            <span className="h-2 w-2 rounded-full bg-sky-400" />
                          </div>
                          <div className="flex-1">
                            <div className="mb-1.5 h-1.5 w-16 rounded-full bg-neutral-300/80" />
                            <div className="h-1 w-10 rounded-full bg-neutral-600" />
                          </div>
                        </div>
                        <div className="widget-depth flex items-center rounded-xl p-2.5">
                          <div className="mr-2.5 flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-400/20 bg-gradient-to-br from-emerald-500/20 to-emerald-600/5">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          </div>
                          <div className="flex-1">
                            <div className="mb-1.5 h-1.5 w-12 rounded-full bg-neutral-300/80" />
                            <div className="h-1 w-20 rounded-full bg-neutral-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-hero-badge floating-ui-badge absolute -left-3 top-10 z-30 flex items-center gap-2.5 rounded-xl p-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-sky-400/30 bg-gradient-to-b from-sky-400/20 to-sky-600/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-tight text-white">Site no ar</p>
                    <p className="text-[9px] font-medium text-blue-200/50">Deploy concluído</p>
                  </div>
                </div>

                <div className="m-hero-badge floating-ui-badge absolute -right-3 bottom-16 z-30 flex items-center gap-2.5 rounded-xl p-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-indigo-400/30 bg-gradient-to-b from-indigo-500/20 to-indigo-900/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-tight text-white">Novo pedido</p>
                    <p className="text-[9px] font-medium text-blue-200/50">Recebido agora</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="m-hero-cta mx-auto flex w-full max-w-sm flex-col gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modern-light flex items-center justify-center gap-2 rounded-[1.15rem] px-6 py-3.5 font-semibold"
            >
              <MessageCircle className="h-5 w-5" />
              {primaryCtaLabel}
            </a>
            <a
              href={secondaryCtaHref}
              onClick={(e) => handleNavClick(e, secondaryCtaHref)}
              className="btn-modern-dark flex items-center justify-center gap-2 rounded-[1.15rem] px-6 py-3.5 font-semibold"
            >
              {secondaryCtaLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
      style={{ height: `calc(100dvh + ${pinDistance}px)` }}
    >
    <div
      id="hero"
      ref={containerRef}
      className={cn("sticky top-0 w-full h-[100dvh] overflow-hidden flex items-center justify-center bg-background text-white font-sans antialiased", className)}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true" />

      {/* CAMADA DE FUNDO: frase de impacto */}
      {/* inset-x-0 em vez de w-screen: 100vw inclui a barra de rolagem, o que
          deixa o bloco mais largo que a area util, empurra o conteudo alguns
          px pra esquerda e cria rolagem horizontal. */}
      <div className="hero-text-wrapper absolute inset-x-0 z-10 flex flex-col items-center justify-center text-center px-4 will-change-transform">
        <h1 className="font-display text-[clamp(4.75rem,11vw,9rem)] font-black uppercase leading-[0.88] tracking-tight">
          <span className="text-track gsap-reveal text-3d-matte block">{tagline1}</span>
          <span className="text-days gsap-reveal text-silver-matte block">{tagline2}</span>
        </h1>
      </div>

      {/* CAMADA DE FUNDO 2: CTA final tátil */}
      <div className="cta-wrapper absolute inset-x-0 z-10 flex flex-col items-center justify-center text-center px-4 gsap-reveal pointer-events-auto will-change-transform">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-silver-matte">
          {ctaHeading}
        </h2>
        <p className="text-white/50 text-lg md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed">
          {ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={primaryCtaLabel}
            className="btn-modern-light flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] group focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-105" aria-hidden="true" />
            <span className="text-xl font-bold leading-none tracking-tight">{primaryCtaLabel}</span>
          </a>
          <a
            href={secondaryCtaHref}
            onClick={(e) => handleNavClick(e, secondaryCtaHref)}
            aria-label={secondaryCtaLabel}
            className="btn-modern-dark flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] group focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-background"
          >
            <span className="text-xl font-bold leading-none tracking-tight">{secondaryCtaLabel}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* CAMADA DA FRENTE: o card físico */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-2 items-center lg:gap-8 z-10 py-6 lg:py-0">
            {/* Mockup do iPhone — sem texto na frente, o card fala por ele */}
            <div className="mockup-scroll-wrapper order-1 lg:order-2 relative w-full h-[380px] lg:h-[600px] flex items-center justify-center z-10" style={{ perspective: "1000px" }}>
              <div className="relative w-full h-full flex items-center justify-center transform scale-[0.65] md:scale-85 lg:scale-100">
                <div
                  ref={mockupRef}
                  className="relative w-[280px] h-[580px] rounded-[3rem] iphone-bezel flex flex-col will-change-transform"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md z-0 scale-x-[-1]" aria-hidden="true" />

                  <div className="absolute inset-[7px] bg-[#050914] rounded-[2.5rem] overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,1)] text-white z-10">
                    <div className="absolute inset-0 screen-glare z-40 pointer-events-none" aria-hidden="true" />

                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
                    </div>

                    <div className="relative w-full h-full pt-12 px-5 pb-8 flex flex-col">
                      <div className="phone-widget flex justify-between items-center mb-8">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold mb-1">Hoje</span>
                          <span className="text-xl font-bold tracking-tight text-white drop-shadow-md">Painel</span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-lg shadow-black/50 overflow-hidden">
                          <WebPulseLogo size={22} />
                        </div>
                      </div>

                      <div className="phone-widget relative w-44 h-44 mx-auto flex items-center justify-center mb-8 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
                        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                          <circle cx="88" cy="88" r="64" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="12" />
                          <circle className="progress-ring" cx="88" cy="88" r="64" fill="none" stroke="#38bdf8" strokeWidth="12" />
                        </svg>
                        <div className="text-center z-10 flex flex-col items-center">
                          <span className="text-4xl font-extrabold tracking-tighter text-white">
                            <span className="counter-val">0</span>
                            {metricSuffix}
                          </span>
                          <span className="text-[8px] text-blue-200/50 uppercase tracking-[0.1em] font-bold mt-0.5">{metricLabel}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="phone-widget widget-depth rounded-2xl p-3 flex items-center">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400/20 to-sky-500/5 flex items-center justify-center mr-3 border border-sky-400/20 shadow-inner">
                            <svg className="w-4 h-4 text-sky-400 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="h-2 w-20 bg-neutral-300 rounded-full mb-2 shadow-inner" />
                            <div className="h-1.5 w-12 bg-neutral-600 rounded-full shadow-inner" />
                          </div>
                        </div>
                        <div className="phone-widget widget-depth rounded-2xl p-3 flex items-center">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 flex items-center justify-center mr-3 border border-emerald-400/20 shadow-inner">
                            <svg className="w-4 h-4 text-emerald-400 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="h-2 w-16 bg-neutral-300 rounded-full mb-2 shadow-inner" />
                            <div className="h-1.5 w-24 bg-neutral-600 rounded-full shadow-inner" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/20 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                    </div>
                  </div>
                </div>

                {/* Selos flutuantes */}
                <div className="floating-badge absolute flex top-6 lg:top-12 left-[-15px] lg:left-[-80px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-sky-400/20 to-sky-600/10 flex items-center justify-center border border-sky-400/30 shadow-inner">
                    <span className="text-base lg:text-xl drop-shadow-lg" aria-hidden="true">🚀</span>
                  </div>
                  <div>
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">Site no ar</p>
                    <p className="text-blue-200/50 text-[10px] lg:text-xs font-medium">Deploy concluído</p>
                  </div>
                </div>

                <div className="floating-badge absolute flex bottom-12 lg:bottom-20 right-[-15px] lg:right-[-80px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-indigo-500/20 to-indigo-900/10 flex items-center justify-center border border-indigo-400/30 shadow-inner">
                    <span className="text-base lg:text-lg drop-shadow-lg" aria-hidden="true">🛒</span>
                  </div>
                  <div>
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">Novo pedido</p>
                    <p className="text-blue-200/50 text-[10px] lg:text-xs font-medium">Recebido agora</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto de posicionamento */}
            <div className="card-left-text gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full lg:max-w-none px-4 lg:px-0">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-0 lg:mb-5 tracking-tight">
                {cardHeading}
              </h3>
              <p className="hidden md:block text-blue-100/70 text-sm md:text-base lg:text-lg font-normal leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-none">
                {cardDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
