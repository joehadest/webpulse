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

export function Faq() {
  return (
    <section
      id="faq"
      className="relative w-full bg-background py-24 md:py-32 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-sky-400/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          label="Dúvidas"
          title="Perguntas"
          highlight="frequentes"
          subtitle="As dúvidas que mais aparecem antes de fechar um projeto."
        />

        <div className="mx-auto mt-16 max-w-3xl">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${i}`}
                  className="border-b border-white/[0.07]"
                >
                  <AccordionTrigger className="py-5 text-left !no-underline hover:no-underline group">
                    <span className="pr-4 font-display text-base md:text-lg font-medium text-white/85 transition-colors group-hover:text-sky-300 [[data-state=open]_&]:text-sky-300">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-0">
                    <p className="text-sm md:text-base leading-relaxed text-white/50 pr-8">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 text-center">
              <p className="font-display text-lg font-semibold text-white">
                Ficou com outra dúvida?
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm text-white/45">
                Me chama no WhatsApp. Respondo pessoalmente e sem compromisso.
              </p>
              <a
                href={whatsappLink(
                  "Olá! Estou no site da WebPulse e fiquei com uma dúvida.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-6"
              >
                Tirar dúvida no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
