import { Roboto, Roboto_Condensed, Roboto_Mono } from "next/font/google";
import { HomeBContent } from "@/components/home-b-content";

const roboto = Roboto({
  variable: "--font-c-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

const robotoCond = Roboto_Condensed({
  variable: "--font-c-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-c-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export default function HomeBPage() {
  return (
    <div className={`${roboto.variable} ${robotoCond.variable} ${robotoMono.variable}`}>
      <HomeBContent />
    </div>
  );
}
