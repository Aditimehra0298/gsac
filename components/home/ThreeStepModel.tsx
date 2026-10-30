"use client";

import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { useLanguage } from "@/components/LanguageProvider";

export function ThreeStepModel() {
  const { t } = useLanguage();

  return (
    <section className="section" data-reveal>
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">{t.model.kicker}</p>
          <h2>{t.model.title}</h2>
        </div>
        <ol className="model-steps">
          {t.model.steps.map((step) => (
            <li key={step.num}>
              <span>{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="actions">
          <Link className="button" href="/for-institutes">
            {t.hero.primary} <Arrow />
          </Link>
          <Link className="button button-line" href="/methodology">
            {t.nav.methodology}
          </Link>
        </div>
      </div>
    </section>
  );
}
