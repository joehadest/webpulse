"use client";

import Image from "next/image";
import { MessageCircle, Instagram, Github } from "lucide-react";
import { ModemAnimatedFooter } from "@/components/ui/modem-animated-footer";

const WHATSAPP_NUMBER = "5584998699449";
const INSTAGRAM_USER = "webpulse";
const GITHUB_USER = "joehadest";

export function Footer() {
  const socialLinks = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      label: "WhatsApp",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: `https://instagram.com/${INSTAGRAM_USER}`,
      label: "Instagram @webpulse",
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: `https://github.com/${GITHUB_USER}`,
      label: "GitHub joehadest",
    },
  ];

  const navLinks = [
    { label: "Privacidade", href: "#" },
    { label: "Termos", href: "#" },
  ];

  return (
    <ModemAnimatedFooter
      brandName="WebPulse"
      brandDescription="Tem uma ideia? Me chama que a gente desenrola."
      ctaLabel="Chamar no WhatsApp"
      ctaHref={`https://wa.me/${WHATSAPP_NUMBER}`}
      ctaIcon={<MessageCircle className="w-5 h-5" />}
      socialLinks={socialLinks}
      navLinks={navLinks}
      brandIcon={
        <Image
          src="/logo/logo%20webpulse.png"
          alt="WebPulse"
          width={80}
          height={80}
          className="w-full h-full object-contain p-1"
        />
      }
    />
  );
}
