"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { whatsappLink } from "@/lib/site-config";
import { Section } from "@/components/ui/section";
import { CheckCheck, MessageCircle } from "lucide-react";
import { ChatPresence, ChromeBar, TypingDots } from "@/components/ui/chrome";
import { WebPulseLogo } from "@/components/ui/webpulse-logo";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Quanto custa um site ou sistema?",
    answer:
      "Depende do tamanho do projeto — um site institucional e um sistema de gestão são trabalhos bem diferentes. Por isso eu não trabalho com tabela fixa: converso com você, entendo o escopo e mando um orçamento fechado. O valor combinado é o valor final, sem custo escondido no meio do caminho.",
  },
  {
    question: "Qual é o prazo de entrega?",
    answer:
      "Uma landing page costuma levar de 1 a 2 semanas. Um site institucional completo, de 2 a 4 semanas. Sistemas com painel administrativo variam mais, geralmente entre 4 e 8 semanas. O prazo exato entra na proposta, por escrito, antes de começarmos.",
  },
  {
    question: "Eu consigo editar o conteúdo depois?",
    answer:
      "Sim, quando faz sentido para o projeto eu entrego um painel administrativo para você trocar textos, fotos, produtos e preços sozinho. Na entrega eu faço um treinamento mostrando como usar cada parte.",
  },
  {
    question: "O site fica no meu nome?",
    answer:
      "Fica. O domínio é registrado no seu nome, as contas de hospedagem são suas e o código-fonte é entregue para você. Nada fica preso comigo — se um dia quiser trocar de desenvolvedor, você leva tudo.",
  },
  {
    question: "Tem suporte depois da entrega?",
    answer:
      "Tem. O período de suporte combinado já vem incluso no projeto, cobrindo correções e ajustes. Depois disso, dá para contratar manutenção mensal para novas funcionalidades e atualizações contínuas.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Normalmente dividido: uma entrada para iniciar o projeto e o restante na entrega. Para projetos maiores dá para parcelar por etapas. Combinamos o que funciona melhor para você antes de começar.",
  },
  {
    question: "Você atende fora da minha cidade?",
    answer:
      "Atendo o Brasil inteiro. Todo o processo é remoto — reuniões por vídeo ou WhatsApp, previews por link e entrega online. A distância não muda nada no resultado.",
  },
  {
    question: "Meu site vai aparecer no Google?",
    answer:
      "Todos os projetos saem com a base técnica de SEO pronta: carregamento rápido, estrutura correta, versão mobile e dados para o Google entender suas páginas. Isso é o alicerce — posicionamento também depende de conteúdo e tempo, e eu oriento você sobre isso.",
  },
];

/**
 * Atalho para quem não achou a resposta: uma mini conversa com a pergunta
 * do visitante e a WebPulse "digitando" — o convite já parece uma resposta.
 */
function AskCard({ className }: { className?: string }) {
  return (
    <div className={cn("surface beam-border overflow-hidden", className)}>
      <ChromeBar title="whatsapp · webpulse" right={<ChatPresence />} />

      <div className="chat-stage space-y-3 px-5 py-6">
        <div className="bubble bubble-out">
          E se a minha dúvida não estiver aqui?
          <span className="bubble-meta mono">
            agora <CheckCheck className="h-3 w-3 text-sky-300" aria-hidden />
          </span>
        </div>

        <div className="flex items-end gap-2.5">
          <span className="icon-tile h-8 w-8 shrink-0 rounded-full p-1.5">
            <WebPulseLogo size={20} className="h-full w-full" />
          </span>
          <div className="bubble bubble-in py-3">
            <TypingDots />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-white/[0.07] p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-2">
          Respondo pessoalmente, <span className="text-1">sem robô</span> e sem compromisso.
        </p>
        <a
          href={whatsappLink("Olá! Estou no site da WebPulse e fiquei com uma dúvida.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary h-10 shrink-0 px-5"
        >
          <MessageCircle className="h-4 w-4" />
          Perguntar
        </a>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Coluna fixa: título + saída para quem não achou a resposta */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              index="04"
              align="left"
              label="Dúvidas"
              title="Perguntas"
              highlight="frequentes."
              subtitle="As dúvidas que mais aparecem antes de fechar um projeto."
            />

            <Reveal delay={0.15} variant="scale">
              <AskCard className="mt-10 hidden lg:block" />
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal variant="scale">
            <div className="surface overflow-hidden">
              <ChromeBar
                title="perguntas-frequentes.md"
                right={
                  <span className="mono text-[11px] text-3">
                    {String(faqs.length).padStart(2, "0")} itens
                  </span>
                }
              />

              <Accordion type="single" collapsible className="faq-list w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={faq.question}
                    value={`faq-${i}`}
                    className="faq-item border-b border-white/[0.07] px-5 last:border-b-0 md:px-7"
                  >
                    <AccordionTrigger className="group gap-4 py-5 text-left md:gap-6 md:py-6">
                      <span className="flex items-baseline gap-3 md:gap-5">
                        <span className="mono w-6 shrink-0 text-xs text-3 transition-colors group-hover:text-sky-300 group-data-[state=open]:text-sky-300">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-base font-medium tracking-[-0.01em] text-white/85 transition-colors group-hover:text-white group-data-[state=open]:text-white md:text-lg">
                          {faq.question}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pt-0 md:pb-7">
                      <p className="faq-answer max-w-[60ch] pl-9 pr-2 text-[0.9375rem] leading-relaxed text-2 md:pl-11 md:pr-8">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>

          {/* No mobile o atalho de contato vem depois das perguntas */}
          <Reveal delay={0.1} variant="scale">
            <AskCard className="mt-8 lg:hidden" />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
