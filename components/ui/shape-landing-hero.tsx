"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { WebPulseLogo } from "@/components/ui/webpulse-logo";
import { siteConfig } from "@/lib/site-config";

function HeroGeometric({
  title1 = "Sites e sistemas",
  title2 = "sob medida para o seu negócio",
  description = "Desenvolvo do zero: sites institucionais, e-commerces e sistemas de gestão.",
}: {
  title1?: string;
  title2?: string;
  description?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // 0 no topo → 1 quando o hero termina de sair da tela
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Cada camada anda numa velocidade diferente: o que está "longe" se move
  // pouco, o que está "perto" se move muito. É isso que cria a profundidade.
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.8], [0.7, 0]);

  const orbsY = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);

  const bannerY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bannerScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const bannerOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // O conteúdo sobe mais rápido que o fundo e se dissolve
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  // A seta some assim que a pessoa entende o recado e começa a rolar
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // Quem pediu menos animação recebe uma página estática, sem parallax
  const layer = (style: Record<string, unknown>) =>
    prefersReducedMotion ? undefined : style;

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.35 + i * 0.15,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-28 pb-20 md:pt-32"
    >
      {/* Camada 1 — grid técnico, o mais "longe": move devagar */}
      <motion.div
        aria-hidden
        style={layer({ y: gridY, opacity: gridOpacity })}
        className="absolute inset-0 grid-pattern mask-radial-fade opacity-70 will-change-transform"
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.16),transparent)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-sky-500/[0.05] blur-3xl" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Camada 2 — orbes de luz */}
      <motion.div
        aria-hidden
        style={layer({ y: orbsY })}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-500/[0.07] rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-400/[0.05] rounded-full blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
      </motion.div>

      {/* Camada 3 — ilustração: afunda e cresce enquanto some */}
      <motion.div
        style={layer({
          y: bannerY,
          scale: bannerScale,
          opacity: bannerOpacity,
        })}
        className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="w-full flex items-center justify-center"
        >
          <Image
            src="/hero/hero-banner.svg"
            alt=""
            width={1200}
            height={700}
            priority
            className="w-full max-w-6xl h-auto object-contain opacity-50 md:opacity-70 translate-y-8 md:translate-y-4"
            aria-hidden
          />
        </motion.div>
      </motion.div>

      {/* Camada 4 — conteúdo, o mais "perto": sobe rápido e desfoca ao sair */}
      <motion.div
        style={layer({
          y: contentY,
          opacity: contentOpacity,
          scale: contentScale,
        })}
        className="relative z-10 container mx-auto px-4 md:px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-sky-400/20 blur-3xl rounded-full scale-150" />
                <WebPulseLogo
                  size={88}
                  className="relative drop-shadow-[0_0_30px_rgba(56,189,248,0.4)]"
                />
              </div>
            </motion.div>

            <div className="flex justify-center mb-7">
              <span className="section-label">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
                </span>
                Disponível para novos projetos
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight leading-[1.05]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                {title1}
              </span>
              <br />
              <span className="text-gradient-accent">{title2}</span>
            </h1>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/55 mb-9 leading-relaxed font-normal max-w-2xl mx-auto px-4">
              {description}
            </p>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contato");
              }}
              className="btn-primary group w-full sm:w-auto"
            >
              Solicitar orçamento
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#portfolio");
              }}
              className="btn-ghost w-full sm:w-auto"
            >
              <Sparkles className="w-4 h-4" />
              Ver projetos
            </a>
          </motion.div>

          {/* Selos de confiança — a primeira objeção do cliente morre aqui */}
          <motion.ul
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 px-4"
          >
            {siteConfig.trustBadges.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 text-xs sm:text-sm text-white/40"
              >
                <Check className="w-3.5 h-3.5 text-sky-400/80 shrink-0" />
                {badge}
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* Convite para rolar — some no primeiro gesto.
          A opacidade do scroll fica no wrapper e a de entrada no link:
          se as duas dividissem o mesmo elemento, o MotionValue do `style`
          tomaria posse da propriedade e a entrada nunca apareceria. */}
      <motion.div
        style={layer({ opacity: hintOpacity })}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.a
          href="#servicos"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#servicos");
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="group flex flex-col items-center gap-2.5"
          aria-label="Rolar para os serviços"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30 transition-colors group-hover:text-white/55">
            Role para ver
          </span>
          <span className="flex h-9 w-[22px] items-start justify-center rounded-full border border-white/15 p-1.5 transition-colors group-hover:border-sky-400/40">
            <motion.span
              className="h-1.5 w-1 rounded-full bg-sky-400/70"
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, 10, 0], opacity: [1, 0.2, 1] }
              }
              transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.a>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
