"use client";

import { useState, type FormEvent } from "react";
import {
  MessageCircle,
  Instagram,
  Github,
  Send,
  ArrowUpRight,
  CheckCheck,
  PenLine,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Section } from "@/components/ui/section";
import { PulseLine } from "@/components/ui/service-art";
import { ChatPresence, ChromeBar, LiveStatus } from "@/components/ui/chrome";
import { WebPulseLogo } from "@/components/ui/webpulse-logo";
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
    value: "resposta em 24h",
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

interface Draft {
  name: string;
  projectType: string;
  budget: string;
  message: string;
}

/** Texto da mensagem — o mesmo na prévia e no que vai para o WhatsApp. */
function composeMessage({ name, projectType, budget, message }: Draft) {
  return [
    `Olá! Meu nome é ${name.trim() || "(não informado)"}.`,
    "",
    `Tipo de projeto: ${projectType}`,
    `Orçamento: ${budget}`,
    "",
    message.trim()
      ? `Detalhes: ${message.trim()}`
      : "Gostaria de conversar sobre o projeto.",
  ].join("\n");
}

/** Na prévia, textos longos são abreviados — a mensagem real vai inteira. */
const abbreviate = (text: string, max: number) =>
  text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;

/**
 * Prévia ao vivo: a conversa do WhatsApp se monta enquanto o visitante
 * preenche o formulário. Nada sai daqui — é só um espelho do rascunho.
 */
function MessagePreview({
  draft,
  touched,
  typing,
}: {
  draft: Draft;
  touched: boolean;
  typing: boolean;
}) {
  return (
    <div className="surface flex h-full flex-col overflow-hidden">
      <ChromeBar title="whatsapp · prévia da mensagem" right={<ChatPresence />} />

      <div className="chat-stage flex flex-1 flex-col gap-3 px-5 py-6" aria-live="polite">
        <p className="mono mx-auto rounded-full border border-white/[0.08] bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.08em] text-3">
          hoje
        </p>

        <div className="flex items-end gap-2.5">
          <span className="icon-tile h-8 w-8 shrink-0 rounded-full p-1.5">
            <WebPulseLogo size={20} className="h-full w-full" />
          </span>
          <div className="bubble bubble-in">
            Oi! Me conta o que você precisa que eu volto com escopo, prazo e
            valor por escrito.
            <span className="bubble-meta mono">webpulse</span>
          </div>
        </div>

        {touched ? (
          <div className="bubble bubble-out bubble-enter">
            <p className="whitespace-pre-line break-words">
              {composeMessage({ ...draft, message: abbreviate(draft.message, 180) })}
              {typing && <span aria-hidden className="caret" />}
            </p>
            <span className="bubble-meta mono">
              <PenLine className="h-3 w-3" aria-hidden /> rascunho
              <CheckCheck className="h-3 w-3 text-white/30" aria-hidden />
            </span>
          </div>
        ) : (
          <div className="bubble ml-auto rounded-[16px_16px_4px_16px] border border-dashed border-white/15 text-sm text-3">
            Sua mensagem aparece aqui enquanto você preenche o formulário.
          </div>
        )}
      </div>

      <p className="mono border-t border-white/[0.07] px-5 py-3 text-[11px] text-3">
        Nada é enviado até você confirmar no WhatsApp.
      </p>
    </div>
  );
}

export function Contact() {
  const [draft, setDraft] = useState<Draft>({
    name: "",
    projectType: projectTypes[0],
    budget: budgets[0],
    message: "",
  });
  const [touched, setTouched] = useState(false);
  const [typing, setTyping] = useState(false);

  const update = (field: keyof Draft) => (value: string) => {
    setDraft((d) => ({ ...d, [field]: value }));
    setTouched(true);
  };

  /**
   * Não envia nada para servidor nenhum: monta o texto e abre o WhatsApp
   * com a mensagem pronta. Quem aperta "enviar" é o próprio visitante.
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `${composeMessage(draft)}\n\n— Enviado pelo site da WebPulse`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <Section id="contato" className="overflow-hidden">
      {/* Luz de palco: closest-side termina na borda do próprio elemento,
          então não existe linha de corte visível */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[640px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(56,189,248,0.09),transparent)]"
      />

      <SectionHeading
        index="05"
        label="Contato"
        title="Vamos tirar seu projeto"
        highlight="do papel."
        subtitle="Conte o que você precisa. Eu respondo com uma proposta clara de escopo, prazo e valor — sem compromisso."
      />

      <div className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-12">
        {/* Formulário */}
        <Reveal className="lg:col-span-7" variant="scale">
          <form
            onSubmit={handleSubmit}
            onFocus={() => setTyping(true)}
            onBlur={() => setTyping(false)}
            className="surface beam-border flex h-full flex-col overflow-hidden"
          >
            <ChromeBar
              title="novo-projeto"
              right={<span className="mono text-[11px] text-3">~2 min</span>}
            />

            <div className="flex flex-1 flex-col p-6 md:p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="field-label">
                    Seu nome
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={draft.name}
                    onChange={(e) => update("name")(e.target.value)}
                    placeholder="Como posso te chamar?"
                    className="field"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-type" className="field-label">
                      Tipo de projeto
                    </label>
                    <select
                      id="contact-type"
                      value={draft.projectType}
                      onChange={(e) => update("projectType")(e.target.value)}
                      className="field"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-surface">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-budget" className="field-label">
                      Orçamento estimado
                    </label>
                    <select
                      id="contact-budget"
                      value={draft.budget}
                      onChange={(e) => update("budget")(e.target.value)}
                      className="field"
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
                  <label htmlFor="contact-message" className="field-label">
                    Sobre o projeto <span className="text-3">(opcional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={draft.message}
                    onChange={(e) => update("message")(e.target.value)}
                    placeholder="Me conte um pouco do seu negócio e do que você precisa."
                    className="field min-h-[9rem] resize-none"
                  />
                </div>
              </div>

              <div className="mt-auto pt-8">
                <button type="submit" className="btn-primary group h-12 w-full">
                  <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  Enviar pelo WhatsApp
                </button>
                <p className="mt-4 text-center text-xs text-3">
                  Abre o WhatsApp com a mensagem pronta. Você revisa antes de enviar.
                </p>
              </div>
            </div>
          </form>
        </Reveal>

        {/* Coluna direita: prévia ao vivo + status + canais */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          <Reveal delay={0.1} variant="scale" className="flex-1">
            <MessagePreview draft={draft} touched={touched} typing={typing} />
          </Reveal>

          <Reveal delay={0.18}>
            <div className="surface flex flex-col gap-3 overflow-hidden px-5 py-4 sm:flex-row sm:items-center sm:gap-5">
              <div className="min-w-0 shrink-0">
                <LiveStatus>Disponível para novos projetos</LiveStatus>
                <p className="mono mt-1.5 text-[11px] text-3">
                  Seg.–sáb., 8h–20h · todo o Brasil
                </p>
              </div>
              <PulseLine variant="compact" className="h-12 w-full min-w-0 sm:h-auto sm:flex-1" />
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <ul className="grid grid-cols-3 gap-3">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${channel.label} — ${channel.value}`}
                      className="card-surface group flex h-full flex-col gap-4 p-4 hover:border-sky-400/30"
                    >
                      <span className="flex items-start justify-between">
                        <span className="icon-tile h-9 w-9 transition-colors duration-300 group-hover:text-sky-300">
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-1" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-sm font-semibold text-1">
                          {channel.label}
                        </span>
                        <span className="mono block truncate text-[10px] text-3">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
