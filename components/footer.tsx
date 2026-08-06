"use client";

import { MessageCircle, Instagram, Github } from "lucide-react";
import { ModemAnimatedFooter } from "@/components/ui/modem-animated-footer";
import { WebPulseLogo } from "@/components/ui/webpulse-logo";
import {
  siteConfig,
  whatsappLink,
  instagramLink,
  githubLink,
} from "@/lib/site-config";

export function Footer() {
  const socialLinks = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      href: whatsappLink("Olá! Vim pelo site da WebPulse."),
      label: "WhatsApp",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: instagramLink,
      label: `Instagram @${siteConfig.instagram}`,
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: githubLink,
      label: `GitHub @${siteConfig.github}`,
    },
  ];

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Como funciona", href: "#processo" },
    { label: "Projetos", href: "#portfolio" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <ModemAnimatedFooter
      brandName={siteConfig.name}
      brandDescription="Sites e sistemas sob medida para quem quer ser levado a sério na internet."
      ctaLabel="Falar no WhatsApp"
      ctaHref={whatsappLink("Olá! Vim pelo site da WebPulse e quero um orçamento.")}
      ctaIcon={<MessageCircle className="w-5 h-5" />}
      socialLinks={socialLinks}
      navLinks={navLinks}
      brandIcon={<WebPulseLogo size={72} />}
    />
  );
}
