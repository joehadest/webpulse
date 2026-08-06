"use client";

import { useState, type FormEvent } from "react";
import {
  MessageCircle,
  Instagram,
  Github,
  Send,
  Clock,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  siteConfig,
  whatsappLink,
  instagramLink,
  githubLink,
} from "@/lib/site-config";

const projectTypes = [
  "Site institucional",
  "Landing page",
  "Loja / e-commerce",
  "Sistema de gestão",
  "Manutenção de projeto existente",
  "Ainda não sei / quero conversar",
];

const budgets = [
  "Prefiro conversar antes",
  "Até R$ 1.500",
  "R$ 1.500 a R$ 3.000",
  "R$ 3.000 a R$ 6.000",
  "Acima de R$ 6.000",
];

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Resposta em até 24h",
    href: whatsappLink("Olá! Vim pelo site da WebPulse e quero um orçamento."),
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: `@${siteConfig.instagram}`,
    href: instagramLink,
  },
  {
    icon: Github,
    label: "GitHub",
    value: `@${siteConfig.github}`,
    href: githubLink,
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [budget, setBudget] = useState(budgets[0]);
  const [message, setMessage] = useState("");

  /**
   * Não envia nada para servidor nenhum: monta o texto e abre o WhatsApp
   * com a mensagem pronta. Quem aperta "enviar" é o próprio visitante.
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = [
      `Olá! Meu nome é ${name || "(não informado)"}.`,
      "",
      `Tipo de projeto: ${projectType}`,
      `Orçamento: ${budget}`,
      "",
      message ? `Detalhes: ${message}` : "Gostaria de conversar sobre o projeto.",
      "",
      "— Enviado pelo site da WebPulse",
    ].join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/25 transition-colors duration-300 focus:border-sky-400/40 focus:bg-white/[0.05] focus:outline-none";

  const labelClass = "mb-2 block text-xs font-medium text-white/50";

  return (
    <section
      id="contato"
      className="relative w-full bg-background py-24 md:py-32 border-t border-white/[0.06] overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 grid-pattern opacity-40 mask-radial-fade pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-400/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          label="Contato"
          title="Vamos tirar seu projeto"
          highlight="do papel"
          subtitle="Conte o que você precisa. Eu respondo com uma proposta clara de escopo, prazo e valor — sem compromisso."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-5">
          {/* Formulário */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 md:p-8 backdrop-blur-sm"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Seu nome
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como posso te chamar?"
                    className={fieldClass}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-type" className={labelClass}>
                      Tipo de projeto
                    </label>
                    <select
                      id="contact-type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className={`${fieldClass} cursor-pointer`}
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-surface">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-budget" className={labelClass}>
                      Orçamento estimado
                    </label>
                    <select
                      id="contact-budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className={`${fieldClass} cursor-pointer`}
                    >
                      {budgets.map((item) => (
                        <option key={item} value={item} className="bg-surface">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Sobre o projeto{" "}
                    <span className="text-white/25">(opcional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Me conte um pouco do seu negócio e do que você precisa."
                    className={`${fieldClass} resize-none`}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary group mt-7 w-full">
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                Enviar pelo WhatsApp
              </button>

              <p className="mt-4 text-center text-xs text-white/30">
                Abre o WhatsApp com a mensagem pronta. Você revisa antes de enviar.
              </p>
            </form>
          </Reveal>

          {/* Canais diretos */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {channels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <Reveal key={channel.label} delay={0.1 + i * 0.08}>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-surface group flex items-center gap-4 p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.08] transition-all duration-500 group-hover:border-sky-400/40 group-hover:bg-sky-400/[0.14]">
                      <Icon className="h-5 w-5 text-sky-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-sm font-semibold text-white">
                        {channel.label}
                      </p>
                      <p className="truncate text-xs text-white/40">
                        {channel.value}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-white/25 transition-all duration-300 group-hover:text-sky-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Reveal>
              );
            })}

            <Reveal delay={0.34}>
              <div className="card-surface p-5 space-y-3.5">
                <div className="flex items-center gap-3 text-xs text-white/40">
                  <Clock className="h-4 w-4 shrink-0 text-sky-400/60" />
                  Seg. a sáb., das 8h às 20h
                </div>
                <div className="flex items-center gap-3 text-xs text-white/40">
                  <MapPin className="h-4 w-4 shrink-0 text-sky-400/60" />
                  Atendimento remoto para todo o Brasil
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
