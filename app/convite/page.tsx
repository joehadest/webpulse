import type { Metadata } from "next";
import { ConvitePaiProgramador } from "@/components/convite-pai-programador";

export const metadata: Metadata = {
  title: "Convite — Pai do Ano Programador",
  description:
    "Você está convidado! 17 de agosto às 15h · Rua Rubi, 372. Tema: Pai do Ano Programador.",
  openGraph: {
    title: "Convite — Pai do Ano Programador",
    description: "17 de agosto às 15h · Rua Rubi, 372",
    images: ["/images/convite-hero.png"],
  },
};

export default function ConvitePage() {
  return <ConvitePaiProgramador />;
}
