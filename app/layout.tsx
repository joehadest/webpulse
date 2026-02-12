import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebPulse",
  description: "Tem uma ideia? Desenvolvimento de sites e sistemas sob medida.",
  icons: {
    icon: [
      { url: "/favicon/favicon_io/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
