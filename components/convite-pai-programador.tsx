"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin, Terminal } from "lucide-react";

const details = [
  {
    icon: Calendar,
    label: "Data",
    value: "17 de agosto",
    code: "date: '17/08'",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "15h",
    code: "time: '15:00'",
  },
  {
    icon: MapPin,
    label: "Local",
    value: "Rua Rubi, 372",
    code: "local: 'Rua Rubi 372'",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function ConvitePaiProgramador() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="convite-root relative min-h-screen overflow-x-hidden text-[var(--convite-ink)]">
      <div className="pointer-events-none absolute inset-0 noise-overlay opacity-[0.04]" />

      {/* Hero */}
      <section className="relative min-h-[100svh] flex flex-col justify-end">
        <div className="absolute inset-0">
          <Image
            src="/images/convite-hero.png"
            alt="Mesa com notebook e troféu dourado"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--convite-bg)] via-[var(--convite-bg)]/75 to-[var(--convite-bg)]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--convite-bg)]/55 via-transparent to-[var(--convite-bg)]/20" />
        </div>

        {!reduceMotion && (
          <motion.div
            aria-hidden
            className="absolute top-[18%] right-[8%] hidden md:block font-mono text-[11px] leading-relaxed text-[var(--convite-mint)]/70 select-none"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <pre className="whitespace-pre">{`const festa = {
  tema: "pai-do-ano",
  status: "confirmado"
};`}</pre>
          </motion.div>
        )}

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-28 sm:px-8 sm:pb-20">
          <motion.p
            className="font-mono text-sm tracking-[0.2em] uppercase text-[var(--convite-mint)] mb-5"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2">
              <Terminal className="h-4 w-4" aria-hidden />
              {"// você está convidado"}
            </span>
          </motion.p>

          <motion.h1
            className="font-display text-[clamp(3.2rem,12vw,7.5rem)] leading-[0.88] tracking-tight text-[var(--convite-paper)]"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Pai do Ano
            <span className="block text-[var(--convite-gold)]">Programador</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-base sm:text-lg text-[var(--convite-paper)]/75 leading-relaxed"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Venha celebrar o aniversário do nosso herói de código e de casa.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <a
              href="/convite/convite-pai-do-ano-programador.pdf"
              download="convite-pai-do-ano-programador.pdf"
              className="inline-flex items-center justify-center bg-[var(--convite-gold)] px-7 py-3.5 text-sm font-semibold tracking-wide text-[var(--convite-bg)] transition-transform duration-300 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--convite-gold)]"
            >
              Baixar PDF
            </a>
            <a
              href="#detalhes"
              className="inline-flex items-center justify-center border border-[var(--convite-paper)]/25 px-7 py-3.5 text-sm font-medium text-[var(--convite-paper)]/90 transition-colors hover:border-[var(--convite-mint)]/50 hover:text-[var(--convite-mint)]"
            >
              Ver detalhes
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Rubi+372"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[var(--convite-paper)]/25 px-7 py-3.5 text-sm font-medium text-[var(--convite-paper)]/90 transition-colors hover:border-[var(--convite-mint)]/50 hover:text-[var(--convite-mint)]"
            >
              Abrir mapa
            </a>
          </motion.div>
        </div>

        {!reduceMotion && (
          <motion.div
            aria-hidden
            className="absolute bottom-6 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-[var(--convite-mint)]/60 to-transparent" />
          </motion.div>
        )}
      </section>

      {/* Detalhes */}
      <section
        id="detalhes"
        className="relative mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28"
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.18em] uppercase text-[var(--convite-mint)] mb-3">
            {"evento.detalhes()"}
          </p>
          <h2 className="font-display text-3xl sm:text-5xl tracking-tight text-[var(--convite-paper)]">
            Quando e onde
          </h2>
          <p className="mt-4 max-w-lg text-[var(--convite-paper)]/65">
            Anote na agenda — o commit mais importante do mês.
          </p>
        </motion.div>

        <ul className="mt-14 grid gap-10 sm:grid-cols-3">
          {details.map((item, index) => (
            <motion.li
              key={item.label}
              className="relative"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <item.icon
                className="mb-4 h-5 w-5 text-[var(--convite-gold)]"
                aria-hidden
              />
              <p className="font-mono text-[11px] tracking-wider uppercase text-[var(--convite-mint)]/80 mb-2">
                {item.code}
              </p>
              <p className="text-sm text-[var(--convite-paper)]/50 mb-1">
                {item.label}
              </p>
              <p className="font-display text-2xl sm:text-3xl text-[var(--convite-paper)]">
                {item.value}
              </p>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Terminal RSVP vibe */}
      <section className="relative px-6 pb-24 sm:px-8 sm:pb-32">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden rounded-sm border border-[var(--convite-mint)]/20 bg-[var(--convite-terminal)] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#e85d4c]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#e8b84c]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#4ce88a]/80" />
              <span className="ml-3 font-mono text-[11px] text-white/35">
                convite.sh
              </span>
            </div>
            <div className="space-y-3 px-5 py-6 font-mono text-sm sm:px-7 sm:py-8 sm:text-[15px] leading-relaxed">
              <p>
                <span className="text-[var(--convite-mint)]">$</span>{" "}
                <span className="text-[var(--convite-paper)]/80">
                  ./confirmar-presenca
                </span>
              </p>
              <p className="text-[var(--convite-paper)]/55">
                Tema: Pai do Ano Programador
              </p>
              <p className="text-[var(--convite-paper)]/55">
                Data: 17/08 · 15h · Rua Rubi, 372
              </p>
              <p className="text-[var(--convite-gold)]">
                → Sua presença é o melhor pull request.
              </p>
              {!reduceMotion && (
                <p className="text-[var(--convite-mint)]">
                  <span className="cursor-blink">█</span>
                </p>
              )}
            </div>
          </div>

          <p className="mt-10 text-center font-display text-xl sm:text-2xl text-[var(--convite-paper)]/90">
            Contamos com você!
          </p>
        </motion.div>
      </section>
    </div>
  );
}
