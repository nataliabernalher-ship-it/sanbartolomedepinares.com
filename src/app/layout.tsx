import type { Metadata } from "next";
import {
  Bad_Script,
  DM_Serif_Display,
  Lora,
  Montserrat,
} from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat-src",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lora = Lora({
  variable: "--font-lora-src",
  subsets: ["latin"],
  weight: ["400"],
});

const badScript = Bad_Script({
  variable: "--font-bad-script-src",
  subsets: ["latin"],
  weight: "400",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif-src",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "San Bartolomé de Pinares",
  description:
    "Municipio de Ávila: historia, fiestas, lugares de interés e información útil para vecinos y visitantes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${lora.variable} ${badScript.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navigation />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
