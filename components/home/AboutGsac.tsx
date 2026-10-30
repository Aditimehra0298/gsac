"use client";

import Link from "next/link";
import { Arrow } from "../Arrow";
import { useLanguage } from "../LanguageProvider";

const pillarIcons = [
  <svg key="shield" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3.5 19 6.5v5.2c0 4.4-2.9 7.4-7 8.8-4.1-1.4-7-4.4-7-8.8V6.5L12 3.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="m9.2 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="people" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4.5 18c.6-2.6 2.5-4 4.5-4s3.9 1.4 4.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M14 14.2c1.3-.4 2.7-.2 3.8 1.1.7.8 1.1 1.8 1.2 2.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  <svg key="doc" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 4.5h10a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 9h6M9 12.5h6M9 16h3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  <svg key="globe" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4.5 12h15M12 4c2.4 2.6 3.6 5.4 3.6 8s-1.2 5.4-3.6 8c-2.4-2.6-3.6-5.4-3.6-8s1.2-5.4 3.6-8z" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
];

export function AboutGsac() {
  const { t } = useLanguage();
  const a = t.aboutGsac;

  return (
    <section className="about-gsac" aria-labelledby="about-gsac-title">
      <div className="wrap about-gsac-grid">
        <div className="about-gsac-copy">
          <p className="about-gsac-kicker">{a.kicker}</p>
          <h2 id="about-gsac-title">{a.title}</h2>
          {a.paragraphs.map((p) => (
            <p key={p} className="about-gsac-text">
              {p}
            </p>
          ))}
          <aside className="about-gsac-purpose">
            <span className="about-gsac-purpose-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <strong>{a.purposeTitle}</strong>
              <span>{a.purposeText}</span>
            </div>
          </aside>
          <Link className="button button-ink about-gsac-cta" href="/about">
            {a.cta} <Arrow />
          </Link>
        </div>

        <div className="about-gsac-visual">
          <img
            src="/sections/about-gsac-right.png?v=5"
            alt="GSAC dashboard, training sessions, video evidence, assessments and digital certificates"
          />
        </div>
      </div>

      <div className="wrap">
        <ul className="about-gsac-pillars">
          {a.pillars.map((item, index) => (
            <li key={item.title}>
              <span className="about-gsac-pillar-icon">{pillarIcons[index]}</span>
              <div>
                <strong>{item.title}</strong>
                <span>{item.line}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
