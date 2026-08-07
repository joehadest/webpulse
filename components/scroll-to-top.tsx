"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { usePastSection } from "@/lib/use-past-section";

export function ScrollToTop() {
  // Mesmo sinal usado pela navbar: só faz sentido oferecer "voltar ao topo"
  // depois que o hero (com sua própria altura de scroll) ficou pra trás.
  const visible = usePastSection("hero");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 md:bottom-10 md:right-8 z-40 p-3 rounded-full glass text-white hover:bg-sky-400/10 hover:border-sky-400/30 hover:text-sky-300 transition-all duration-300 shadow-lg"
          aria-label="Rolar para o início"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
