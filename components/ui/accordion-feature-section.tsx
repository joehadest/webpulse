"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface Feature197Props {
  features: FeatureItem[];
}

const Feature197 = ({ features }: Feature197Props) => {
  const [value, setValue] = useState<string>(`item-${features[0]?.id ?? 1}`);
  const activeTabId = value ? parseInt(value.replace("item-", ""), 10) : features[0]?.id;
  const activeFeature = features.find((f) => f.id === activeTabId) ?? features[0];

  if (!features.length) return null;

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex w-full items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Accordion
              type="single"
              className="w-full"
              value={value}
              onValueChange={setValue}
            >
              {features.map((tab) => {
                const isOpen = value === `item-${tab.id}`;
                return (
                  <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                    <AccordionTrigger
                      onClick={() => setValue(`item-${tab.id}`)}
                      className="cursor-pointer py-5 text-left !no-underline transition hover:no-underline"
                    >
                      <h6
                        className={`text-xl font-semibold transition-colors ${isOpen ? "text-white" : "text-white/50"}`}
                      >
                        {tab.title}
                      </h6>
                    </AccordionTrigger>
                    <AccordionContent>
                      <motion.div
                        key={`content-${tab.id}-${isOpen}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                      >
                        <p className="mt-3 text-white/60">{tab.description}</p>
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          {activeFeature?.icon && (
            <div className="hidden md:flex m-auto w-1/2 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] min-h-[280px] p-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTabId}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
                className="[&>svg]:w-24 [&>svg]:h-24 [&>svg]:max-w-full [&>svg]:max-h-full"
              >
                {activeFeature.icon}
              </motion.div>
            </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Feature197 };
