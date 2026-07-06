"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { WebPulseLogo } from "@/components/ui/webpulse-logo";

function HeroGeometric({
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
  description = "Crafting exceptional digital experiences through innovative design and cutting-edge technology.",
}: {
  title1?: string;
  title2?: string;
  description?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
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
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-24 md:pt-28">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.12),transparent)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-sky-500/[0.04] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <Image
          src="/hero/hero-banner.svg"
          alt=""
          width={1200}
          height={700}
          priority
          className="w-full max-w-6xl h-auto object-contain opacity-70 md:opacity-90 translate-y-8 md:translate-y-4"
          aria-hidden
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
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
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-sky-400/20 blur-3xl rounded-full scale-150" />
                <WebPulseLogo size={88} className="relative drop-shadow-[0_0_30px_rgba(56,189,248,0.4)]" />
              </div>
            </motion.div>
            <div className="flex justify-center mb-6">
              <span className="section-label">
                <Sparkles className="w-3 h-3" />
                Desenvolvimento sob medida
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-[1.05]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                {title1}
              </span>
              <br />
              <span className="text-gradient-accent">
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/50 mb-10 leading-relaxed font-normal tracking-wide max-w-xl mx-auto px-4">
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
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-sky-50 transition-all duration-300 shadow-[0_0_30px_rgba(56,189,248,0.2)] hover:shadow-[0_0_40px_rgba(56,189,248,0.35)]"
            >
              Iniciar Projeto
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#portfolio");
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white/80 glass rounded-full hover:bg-white/[0.08] hover:text-white transition-all duration-300"
            >
              Ver Projetos
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
