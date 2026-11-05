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
import { Section } from "@/components/ui/section";
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

  const fieldClass = "field";
  const labelClass = "field-label";

  return (
    <Section id="contato" className="overflow-hidden">
      {/* Uma única luz de palco atrás do formulário — o ponto focal da página */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.10),transparent_65%)]"
      />

      <SectionHeading
        index="05"
        label="Contato"
        title="Vamos tirar seu projeto"
        highlight="do papel."
        subtitle="Conte o que você precisa. Eu respondo com uma proposta clara de escopo, prazo e valor — sem compromisso."
      />

      <div className="mt-14 grid gap-10 md:mt-20 lg:grid-cols-12 lg:gap-12">
        {/* Formulário */}
        <Reveal className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="surface h-full p-6 md:p-9"
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
                    className={fieldClass}
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
                    className={fieldClass}
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
                  <span className="text-3">(opcional)</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Me conte um pouco do seu negócio e do que você precisa."
                  className={`${fieldClass} min-h-[8rem] resize-none`}
                />
              </div>
            </div>

            <button type="submit" className="btn-primary group mt-8 h-12 w-full">
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              Enviar pelo WhatsApp
            </button>

            <p className="mt-4 text-center text-xs text-3">
              Abre o WhatsApp com a mensagem pronta. Você revisa antes de enviar.
            </p>
          </form>
        </Reveal>

        {/* Canais diretos */}
        <div className="flex flex-col lg:col-span-5">
          <Reveal delay={0.1}>
            <p className="eyebrow mb-4">
              <span aria-hidden className="eyebrow-rule" />
              Ou fale direto
            </p>
          </Reveal>

          <ul className="border-t border-white/[0.1]">
            {channels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <li key={channel.label} className="border-b border-white/[0.1]">
                  <Reveal delay={0.14 + i * 0.06}>
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 py-5 transition-colors"
                    >
                      <span className="icon-tile shrink-0 transition-colors duration-300 group-hover:border-sky-400/40 group-hover:text-sky-300">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-base font-semibold tracking-[-0.01em] text-1">
                          {channel.label}
                        </span>
                        <span className="mono block truncate text-xs text-3">
                          {channel.value}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-1" />
                    </a>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <Reveal delay={0.34}>
            <dl className="mono mt-8 grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-xs">
              <dt className="flex items-center gap-2 text-3">
                <Clock className="h-3.5 w-3.5" aria-hidden /> Horário
              </dt>
              <dd className="text-2">Seg. a sáb., 8h–20h</dd>
              <dt className="flex items-center gap-2 text-3">
                <MapPin className="h-3.5 w-3.5" aria-hidden /> Atendimento
              </dt>
              <dd className="text-2">Remoto, todo o Brasil</dd>
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
