import { Roboto, Roboto_Mono } from "next/font/google";

const roboto = Roboto({
  variable: "--font-c-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-c-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export default function DLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${roboto.variable} ${robotoMono.variable} fixed inset-0 overflow-hidden`}>
      {children}
    </div>
  );
}
