"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WebPulseLogo } from "@/components/ui/webpulse-logo";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [heroThreshold, setHeroThreshold] = useState(600);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const thresh = window.innerHeight * 0.9;
    setHeroThreshold(thresh);

    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setIsVisible(y > thresh);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#top" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contato" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false);
  };

  const justPastHero = isVisible && scrollY < heroThreshold + 120;
  const slideInOffset = justPastHero
    ? -Math.min((scrollY - heroThreshold) * 0.4, 30)
    : 0;

  return (
    <motion.div
      className="flex justify-center w-full py-6 px-4 fixed top-0 left-0 right-0 z-50"
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? slideInOffset : -100,
      }}
      transition={{
        duration: 0.45,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <div className="flex items-center justify-between px-6 py-3 glass rounded-full w-full max-w-3xl relative z-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="flex items-center">
          <motion.a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            className="flex items-center w-14 h-14 mr-2 relative shrink-0"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 10 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.2 }}
          >
            <WebPulseLogo size={56} />
          </motion.a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm text-white/70 hover:text-sky-300 transition-colors font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <motion.a
          href="#contato"
          onClick={(e) => handleNavClick(e, "#contato")}
          className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm text-black bg-white rounded-full hover:bg-sky-50 transition-all font-semibold shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Iniciar Projeto
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          aria-label="Abrir menu"
        >
          <Menu className="h-6 w-6 text-white" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-xl border-l border-white/[0.08] z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              aria-label="Fechar menu"
            >
              <X className="h-6 w-6 text-white" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base text-white font-medium block"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contato"
                onClick={(e) => handleNavClick(e, "#contato")}
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-black bg-white rounded-full hover:bg-white/90 transition-colors font-medium pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                whileTap={{ scale: 0.97 }}
              >
                Iniciar Projeto
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export { Navbar1 };
