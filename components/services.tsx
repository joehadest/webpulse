"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Database,
  Code2,
  Layout,
  Rocket,
} from "lucide-react";
import { Feature197 } from "@/components/ui/accordion-feature-section";
import type { FeatureItem } from "@/components/ui/accordion-feature-section";

const iconClass = "w-24 h-24 text-sky-400/80";

const servicesFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Sites",
    description: "Sites responsivos, bonitos e fáceis de usar.",
    icon: <Globe className={iconClass} />,
  },
  {
    id: 2,
    title: "Apps",
    description: "Aplicativos para celular e web.",
    icon: <Smartphone className={iconClass} />,
  },
  {
    id: 3,
    title: "Sistemas",
    description: "Sistemas para gestão e controle do seu negócio.",
    icon: <Database className={iconClass} />,
  },
  {
    id: 4,
    title: "Integrações",
    description: "Conecto sistemas e automatizo processos.",
    icon: <Code2 className={iconClass} />,
  },
  {
    id: 5,
    title: "Design",
    description: "Layout limpo e fácil de navegar.",
    icon: <Layout className={iconClass} />,
  },
  {
    id: 6,
    title: "Manutenção",
    description: "Ajustes e melhorias no que já existe.",
    icon: <Rocket className={iconClass} />,
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="relative w-full bg-background text-white overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-sky-400/[0.06] rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-white/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="section-label">Serviços</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold mb-4 text-gradient"
          >
            O que faço
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/45 max-w-2xl mx-auto text-base md:text-lg"
          >
            Sites, sistemas e manutenção. Uso as tecnologias certas para cada
            projeto.
          </motion.p>
        </div>
      </div>

      <div className="relative z-10">
        <Feature197 features={servicesFeatures} />
      </div>
    </section>
  );
}
