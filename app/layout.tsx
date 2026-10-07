import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Anton, Instrument_Sans, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { MotionRoot } from "@/components/MotionRoot";
import { council } from "@/lib/content";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${council.name} · GSAC`,
    template: "%s · GSAC",
  },
  description: council.statement,
};

export const viewport = {
  themeColor: "#0c0c0c",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${display.variable}`}>
      <body>
        <LanguageProvider>
          <a className="skip" href="#content">
            Skip to content
          </a>
          <MotionRoot />
          <Header />
          <main id="content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
