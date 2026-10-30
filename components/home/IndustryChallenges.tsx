"use client";

import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { useLanguage } from "@/components/LanguageProvider";

const featureIcons = [
  <svg key="cal" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 10h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  <svg key="video" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="6.5" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="m15 10.5 5-2.5v8l-5-2.5v-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>,
  <svg key="data" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M5 6v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6M5 10v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="cert" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 3.5h10a2 2 0 0 1 2 2v9.5l-3.2 1.6L12 15l-3.8 1.6L5 15V5.5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>,
  <svg key="search" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  <svg key="chart" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 19h16M7 16V9M12 16V5M17 16v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
];

const featureImages = [
  "/sections/trainer.jpg",
  "/hero/welding.jpg",
  "/sections/gsac-dashboard.jpg",
  "/hero/credential.jpg",
  "/sections/assessment-phone.jpg",
  "/sections/crew.jpg",
];

export function IndustryChallenges() {
  const { t } = useLanguage();
  const features = t.pain.features;

  return (
    <section
      className="industry-challenges"
      id="challenges"
      data-reveal
      aria-labelledby="industry-challenges-title"
    >
      <div className="wrap ic-layout">
        <div className="ic-copy">
          <p className="ic-kicker">{t.pain.kicker}</p>
          <h2 id="industry-challenges-title">
            <span>{t.pain.titleLine1}</span>
            <em>{t.pain.titleLine2}</em>
          </h2>
          <p className="ic-lede">{t.pain.lede}</p>

          <div className="ic-persona">
            <img
              src="/sections/ic-persona.png?v=2"
              alt=""
              width={297}
              height={226}
            />
          </div>

          <Link className="button button-ink ic-cta" href="/for-institutes">
            {t.pain.cta} <Arrow />
          </Link>
        </div>

        <div className="ic-visual">
          <img
            className="ic-visual-img"
            src="/sections/ic-center-devices.png?v=3"
            alt={t.pain.visualAlt}
            width={450}
            height={476}
          />
        </div>

        <ol className="ic-features">
          {features.map((feature, index) => (
            <li key={feature.title}>
              <article className="ic-feature">
                <span className="ic-feature-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="ic-feature-icon">{featureIcons[index]}</span>
                <div className="ic-feature-body">
                  <strong>{feature.title}</strong>
                  <p>{feature.text}</p>
                </div>
                <img
                  className="ic-feature-thumb"
                  src={featureImages[index]}
                  alt=""
                />
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
