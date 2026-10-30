"use client";

import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { useLanguage } from "@/components/LanguageProvider";

export function HomeClosing() {
  const { t } = useLanguage();

  return (
    <section className="closing" data-reveal>
      <div className="wrap">
        <p className="kicker">{t.brand.punchline}</p>
        <h2>{t.closing.title}</h2>
        <p className="lede">{t.closing.text}</p>
        <div className="actions">
          <Link className="button" href="/for-institutes">
            {t.closing.primary} <Arrow />
          </Link>
          <Link className="button button-line" href="/verify">
            {t.closing.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
