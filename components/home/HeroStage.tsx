"use client";

import Link from "next/link";
import { Arrow } from "../Arrow";
import { useLanguage } from "../LanguageProvider";

const featureIcons = [
  <svg key="courses" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3.5 9.5 12 4.5l8.5 5v2.2H3.5V9.5z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
    <path d="M6 12.2v4.2c1.8 1.2 3.5 1.8 6 1.8s4.2-.6 6-1.8v-4.2" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    <path d="M19.2 10.8v5.6" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
  </svg>,
  <svg key="video" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.55" />
    <path d="M10.2 9.2v5.6L15.4 12 10.2 9.2z" fill="currentColor" />
  </svg>,
  <svg key="assess" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 19V10.5M10 19V6M15 19v-7.5M20 19V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>,
  <svg key="cert" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="10" r="5.2" stroke="currentColor" strokeWidth="1.55" />
    <path d="M9.6 14.2 8.2 20l3.8-1.5L15.8 20l-1.4-5.8" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
  </svg>,
];

const processIcons = [
  <svg key="reg" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 20V9.5L12 4l8 5.5V20H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M10 20v-6h4v6" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="train" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4.5 18c.6-2.6 2.5-4 4.5-4s3.9 1.4 4.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M14 14.2c1.3-.4 2.7-.2 3.8 1.1.7.8 1.1 1.8 1.2 2.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  <svg key="upload" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 16V8m0 0-3 3m3-3 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 16.5v1A2.5 2.5 0 0 0 8.5 20h7a2.5 2.5 0 0 0 2.5-2.5v-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  <svg key="assess2" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 4.5h10a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.6" />
    <path d="m8.5 12 2.2 2.2L15.5 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="issue" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="10" r="5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9.8 14.2 8.5 20l3.5-1.4L15.5 20l-1.3-5.8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>,
  <svg key="verify" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3.5 19 6.5v5.2c0 4.4-2.9 7.4-7 8.8-4.1-1.4-7-4.4-7-8.8V6.5L12 3.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="m9.2 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export function HeroStage() {
  const { t } = useLanguage();

  return (
    <section className="hero-lite">
      <div className="wrap hero-lite-grid">
        <div className="hero-lite-copy">
          <p className="hero-lite-kicker">{t.hero.kicker}</p>
          <h1>
            {t.hero.title1} {t.hero.title2}
          </h1>
          <p className="hero-lite-lede">{t.hero.lede}</p>
          <p className="hero-lite-support">{t.hero.support}</p>
          <ul className="hero-lite-points">
            {t.hero.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="hero-lite-actions">
            <Link className="button" href="/for-institutes">
              {t.hero.start} <Arrow />
            </Link>
            <Link className="button button-line" href="/verify">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.7" />
                <rect x="13" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.7" />
                <rect x="4" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.7" />
                <path d="M13 16.5h7M16.5 13v7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              {t.hero.verify}
            </Link>
          </div>
          <ul className="hero-lite-stats">
            {t.hero.stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
          <ul className="hero-lite-features">
            {t.hero.features.map((item, index) => (
              <li key={item}>
                <span className="hero-lite-feature-icon">{featureIcons[index]}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="hero-lite-trust">{t.hero.trust}</p>
        </div>
        <div className="hero-visual" aria-label="GSAC platform preview">
          {/* Layered collage — add more pics into these slots */}
          <article className="hero-float hero-float-candidates">
            <strong>248</strong>
            <span>{t.hero.floatCandidates}</span>
            <em>+12%</em>
            <i className="hero-mini-bars" />
          </article>

          <article className="hero-float hero-float-video">
            <img src="/hero/hero-video-tight.png" alt="" />
          </article>

          <article className="hero-float hero-float-certificate">
            <img src="/hero/hero-cert-tight.png" alt="" />
          </article>

          <img
            className="hero-laptop-img"
            src="/hero/hero-laptop.png?v=4"
            alt="GSAC institute dashboard on laptop"
          />

          <img
            className="hero-phone-img"
            src="/hero/hero-phone.png?v=2"
            alt="GSAC training sessions on mobile"
          />

          <article className="hero-float hero-float-verify">
            <label>{t.hero.floatVerify}</label>
            <div>
              <span className="hero-verify-field">{t.hero.floatPlaceholder}</span>
              <span className="hero-verify-btn">{t.hero.floatCheck} →</span>
            </div>
          </article>

          <article className="hero-float hero-float-certs">
            <strong>192</strong>
            <span>{t.hero.floatCerts}</span>
            <em>+18%</em>
            <i className="hero-mini-bars alt" />
          </article>
        </div>
      </div>

      <div className="wrap">
        <ol className="hero-process">
          {t.hero.process.map((step, index) => (
            <li key={step.title}>
              <span className="hero-process-icon">{processIcons[index]}</span>
              <div>
                <strong>{step.title}</strong>
                <span>{step.line}</span>
              </div>
              {index < t.hero.process.length - 1 ? <em aria-hidden="true">›</em> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
