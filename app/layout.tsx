import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
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

export const metadata: Metadata = {
  title: "WebPulse",
  description: "Tem uma ideia? Desenvolvimento de sites e sistemas sob medida.",
  appleWebApp: {
    title: "webpulse",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${syne.variable}`}>
      <body className="font-sans antialiased bg-background min-h-screen">{children}</body>
    </html>
  );
}
