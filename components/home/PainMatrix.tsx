"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function PainMatrix() {
  const { t } = useLanguage();

  return (
    <section className="section section-muted" data-reveal>
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">{t.painMatrix.kicker}</p>
          <h2>{t.painMatrix.title}</h2>
        </div>
        <div className="charter pain-matrix">
          {t.painMatrix.items.map((item) => (
            <article key={item.trade}>
              <h3>{item.trade}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
