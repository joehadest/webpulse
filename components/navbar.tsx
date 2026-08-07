"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { WebPulseLogo } from "@/components/ui/webpulse-logo";
import { usePastSection } from "@/lib/use-past-section";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#processo" },
  { label: "Projetos", href: "#portfolio" },
  { label: "Dúvidas", href: "#faq" },
];

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  // O hero cinematográfico prende o scroll por milhares de pixels antes de
  // liberar o resto da página — um limiar fixo de scrollY não dá conta disso.
  // Em vez de medir distância, observamos quando a própria seção #hero sai
  // da viewport, o que funciona independente da altura de scroll dela.
  const isVisible = usePastSection("hero");
  const [activeSection, setActiveSection] = useState<string>("");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  // Destaca no menu a seção que está sendo lida
  useEffect(() => {
    const sections = [...navItems, { href: "#contato" }]
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Trava o scroll do fundo enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Barra de progresso de leitura */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 z-[60]"
        style={{ scaleX: progress, opacity: isVisible ? 1 : 0 }}
        transition={{ opacity: { duration: 0.3 } }}
      />

      <motion.div
        className="flex justify-center w-full py-6 px-4 fixed top-0 left-0 right-0 z-50"
        style={{ pointerEvents: isVisible ? "auto" : "none" }}
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -100,
        }}
        transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="flex items-center justify-between px-4 md:px-6 py-3 glass rounded-full w-full max-w-4xl relative z-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <motion.a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            className="flex items-center w-12 h-12 md:w-14 md:h-14 relative shrink-0"
            whileHover={{ rotate: 10 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.2 }}
            aria-label="Voltar ao topo"
          >
            <WebPulseLogo size={56} className="w-full h-full" />
          </motion.a>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                    isActive
                      ? "text-sky-300"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-sky-400/10 border border-sky-400/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA desktop */}
          <motion.a
            href="#contato"
            onClick={(e) => handleNavClick(e, "#contato")}
            className="hidden md:inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-sm text-black bg-white rounded-full hover:bg-sky-50 transition-all font-semibold shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Orçamento
          </motion.a>

          {/* Botão do menu mobile */}
          <motion.button
            className="md:hidden flex items-center p-2 -mr-1"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            aria-label="Abrir menu"
            aria-expanded={isOpen}
          >
            <Menu className="h-6 w-6 text-white" />
          </motion.button>
        </div>
      </motion.div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background/97 backdrop-blur-xl z-[70] pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-7 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              aria-label="Fechar menu"
            >
              <X className="h-6 w-6 text-white" />
            </motion.button>

            <div className="flex flex-col">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="border-b border-white/[0.07] py-5 font-display text-2xl font-semibold text-white/85 active:text-sky-300"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                  exit={{ opacity: 0, x: 24 }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contato"
                onClick={(e) => handleNavClick(e, "#contato")}
                className="btn-primary mt-10 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <MessageCircle className="w-4 h-4" />
                Solicitar orçamento
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { Navbar1 };
