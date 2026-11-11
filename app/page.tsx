import { Navbar1 } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Portfolio } from "@/components/portfolio";
import { TechStack } from "@/components/tech-stack";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { CvAnchorFix } from "@/components/cv-anchor-fix";

export default function Home() {
  return (
    <main id="top" className="bg-background min-h-screen">
      <Navbar1 />
      <ScrollToTop />
      <CvAnchorFix />

      {/* Promessa e chamada principal */}
      <Hero />

      {/* Prova rápida antes de pedir atenção */}
      <Stats />

      {/* O que eu faço */}
      <Services />

      {/* Como o projeto acontece — tira o medo de contratar */}
      <Process />

      {/* Prova de verdade: projetos no ar */}
      <Portfolio />

      {/* Competência técnica */}
      <TechStack />

      {/* Só aparece quando houver depoimentos reais */}
      <Testimonials />

      {/* Objeções que travam o fechamento */}
      <Faq />

      {/* Conversão */}
      <Contact />

      <Footer />
    </main>
  );
}
