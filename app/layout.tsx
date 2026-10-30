import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat, Open_Sans, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { MotionRoot } from "@/components/MotionRoot";
import { council } from "@/lib/content";
import "./globals.css";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const ui = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ui",
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
  themeColor: "#f6f3eb",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${ui.variable}`}>
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
