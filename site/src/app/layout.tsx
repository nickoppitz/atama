import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollbarWidthProvider } from "@/components/scrollbar-width-provider";
import { PageTransition } from "@/components/page-transition";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Atama Filmes — Produtora Audiovisual em Porto Alegre",
    template: "%s — Atama Filmes",
  },
  description:
    "Produtora audiovisual gaúcha. Do documentário ao longa de ficção, do Amazon Prime ao Nick Jr. 14 anos revelando histórias do Brasil para o mundo.",
  metadataBase: new URL("https://atamafilmes.com.br"),
  openGraph: {
    type: "website",
    siteName: "Atama Filmes",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ScrollbarWidthProvider />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
