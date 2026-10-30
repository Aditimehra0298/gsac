"use client";

import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";

export default function MethodologyPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero page="methodology" />
      <section className="section" data-reveal>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">{t.methodology.kicker}</p>
            <h2>{t.methodology.title}</h2>
            <p className="lede">{t.methodology.lede}</p>
          </div>
          <div className="charter">
            {t.methodology.pillars.map((pillar) => (
              <article key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
