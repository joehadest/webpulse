import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

/**
 * Mono só para índices, rótulos e números — o "sotaque" técnico da marca.
 *
 * Vem do pacote @fontsource (arquivo versionado no npm), não do Google Fonts:
 * no build da Vercel o Google devolveu uma URL sem extensão para a JetBrains
 * Mono e o next/font 14.2 quebrou ao processá-la. Local = build determinístico.
 */
const mono = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "Consolas", "monospace"],
});

const title = "WebPulse — Sites e sistemas sob medida";
const description =
  "Desenvolvimento de sites institucionais, e-commerces e sistemas de gestão sob medida. Design exclusivo, código próprio e prazo fechado antes de começar.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s | WebPulse",
  },
  description,
  keywords: [
    "criação de sites",
    "desenvolvimento web",
    "desenvolvedor full-stack",
    "sistema de gestão",
    "e-commerce",
    "landing page",
    "Next.js",
    "site profissional",
    "WebPulse",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    title: "WebPulse",
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  colorScheme: "dark",
};

/** Ajuda o Google a mostrar o negócio como prestador de serviço nos resultados. */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description,
  url: siteConfig.url,
  telephone: `+${siteConfig.whatsapp}`,
  areaServed: { "@type": "Country", name: "Brasil" },
  serviceType: [
    "Desenvolvimento de sites",
    "Desenvolvimento de sistemas web",
    "E-commerce",
    "Manutenção de sites",
  ],
  sameAs: [
    `https://instagram.com/${siteConfig.instagram}`,
    `https://github.com/${siteConfig.github}`,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${syne.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-background min-h-screen">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
