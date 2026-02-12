import { Navbar1 } from "@/components/navbar";
import { DemoHeroGeometric } from "@/components/demo";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <main id="top" className="bg-[#030303] min-h-screen">
      <Navbar1 />
      <ScrollToTop />
      {/* Hero Section */}
      <DemoHeroGeometric />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
