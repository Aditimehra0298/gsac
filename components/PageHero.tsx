"use client";

import { useLanguage } from "./LanguageProvider";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type PageKey = keyof Dictionary["pages"];

export function PageHero({
  page,
  kicker,
  title,
  lede,
}: {
  page?: PageKey;
  kicker?: string;
  title?: string;
  lede?: string;
}) {
  const { t } = useLanguage();
  const copy = page ? t.pages[page] : null;

  return (
    <section className="page-hero" data-reveal>
      <div className="wrap">
        <div className="narrow">
          <p className="kicker">{kicker ?? copy?.title ?? ""}</p>
          <h1>{title ?? copy?.title ?? ""}</h1>
          <p className="lede">{lede ?? copy?.lede ?? ""}</p>
        </div>
      </div>
    </section>
  );
}
