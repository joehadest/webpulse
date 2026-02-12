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

const servicesFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Sites",
    description: "Sites responsivos, bonitos e fáceis de usar.",
    icon: <Globe className="w-24 h-24 text-indigo-400/80" />,
  },
  {
    id: 2,
    title: "Apps",
    description: "Aplicativos para celular e web.",
    icon: <Smartphone className="w-24 h-24 text-rose-400/80" />,
  },
  {
    id: 3,
    title: "Sistemas",
    description: "Sistemas para gestão e controle do seu negócio.",
    icon: <Database className="w-24 h-24 text-violet-400/80" />,
  },
  {
    id: 4,
    title: "Integrações",
    description: "Conecto sistemas e automatizo processos.",
    icon: <Code2 className="w-24 h-24 text-amber-400/80" />,
  },
  {
    id: 5,
    title: "Design",
    description: "Layout limpo e fácil de navegar.",
    icon: <Layout className="w-24 h-24 text-cyan-400/80" />,
  },
  {
    id: 6,
    title: "Manutenção",
    description: "Ajustes e melhorias no que já existe.",
    icon: <Rocket className="w-24 h-24 text-emerald-400/80" />,
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="relative w-full bg-[#030303] text-white overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-rose-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
          >
            O que faço
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Sites, sistemas e manutenção. Uso as tecnologias certas para cada
            projeto.
          </p>
        </div>
      </div>

      <div className="relative z-10">
        <Feature197 features={servicesFeatures} />
      </div>
    </section>
  );
}
