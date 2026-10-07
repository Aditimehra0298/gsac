"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Arrow } from "../Arrow";
import { useLanguage } from "../LanguageProvider";

const clipSrcs = ["/hero/welding.jpg", "/hero/evidence.jpg", "/hero/electrical.jpg"];
const thumbSrcs = ["/hero/evidence.jpg", "/hero/electrical.jpg", "/sections/review-electric.jpg"];
const stepStates = ["done", "done", "progress", "pending"] as const;

export function HeroStage() {
  const { t } = useLanguage();
  const [clip, setClip] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(26 / 156);

  const clips = clipSrcs.map((src, index) => ({ src, label: t.hero.clips[index] }));
  const steps = t.hero.steps.map((label, index) => ({ label, state: stepStates[index] }));
  const thumbs = t.hero.thumbs.map((name, index) => ({
    index: String(index + 1).padStart(2, "0"),
    name,
    src: thumbSrcs[index],
  }));
  const trust = t.hero.trust;
  const capabilities = t.hero.capabilities;

  useEffect(() => {
    if (!playing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 1) {
          setClip((index) => (index + 1) % clips.length);
          return 0;
        }
        return current + 0.01;
      });
    }, 80);
    return () => window.clearInterval(timer);
  }, [playing]);

  const seconds = Math.round(progress * 156);
  const clock = `0:${String(seconds).padStart(2, "0")}`;

  return (
    <section className="stage">
      <img className="stage-bg" src="/hero/hero-skills.jpg" alt="" />
      <div className="stage-dim" />

      <div className="stage-intro">
        <p className="stage-kicker">{t.hero.kicker}</p>
        <h1>
          {t.hero.title1}
          <br />
          {t.hero.title2}
          <br />
          {t.hero.title3}
        </h1>
        <p className="stage-lede">{t.hero.lede}</p>
        <div className="stage-actions">
          <Link className="button" href="/assessments">
            {t.hero.start} <Arrow />
          </Link>
          <Link className="button button-line" href="/recognition">
            {t.hero.verify}
          </Link>
        </div>
        <ul className="stage-trust">
          {trust.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="stage-scene">
        <article className="player tilt-left">
          <header>
            <span>Skill evidence</span>
            <span>Uploaded</span>
          </header>
          <img src={clips[clip].src} alt={clips[clip].label} />
          <button
            type="button"
            className="play"
            aria-label={playing ? "Pause skill evidence" : "Play skill evidence"}
            onClick={() => setPlaying((value) => !value)}
          >
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M4 3h3v10H4zm5 0h3v10H9z" fill="currentColor" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M5 3.5v9l8-4.5-8-4.5z" fill="currentColor" />
              </svg>
            )}
          </button>
          <div className="player-copy">
            <strong>{clips[clip].label}</strong>
            <span>{t.hero.playing}</span>
          </div>
          <footer>
            <i style={{ width: `${Math.max(progress, 0.04) * 100}%` }} />
            <span>
              {clock} / 2:36
            </span>
          </footer>
        </article>

        <div className="board assess-board">
          <div className="board-meta">
            <span>{t.hero.boardTitle}</span>
            <span>Task 3 of 4</span>
          </div>
          <p className="board-candidate">
            {t.hero.candidate} <strong>Arjun Mehta</strong>
          </p>
          <ul className="assess-steps">
            {steps.map((step) => (
              <li key={step.label} data-state={step.state}>
                <span>{step.label}</span>
                <em>
                  {step.state === "done" ? "✓" : step.state === "progress" ? "In Progress" : "Pending"}
                </em>
              </li>
            ))}
          </ul>
          <div className="assess-thumbs">
            {thumbs.map((thumb) => (
              <figure key={thumb.index}>
                <img src={thumb.src} alt="" />
                <figcaption>
                  {thumb.index} {thumb.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <Link className="button assess-continue" href="/assessments">
            Continue Assessment <Arrow />
          </Link>
        </div>

        <Link href="/recognition" className="cred-card tilt-right">
          <img src="/hero/credential.jpg" alt="" />
          <header>
            <span>Verified credential</span>
            <span className="verified">Verified</span>
          </header>
          <div className="cred-copy">
            <p className="cred-kicker">Verified Credential</p>
            <h2>Electrical Installation — Level 3</h2>
            <dl>
              <div>
                <dt>Credential holder</dt>
                <dd>Arjun Mehta</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Verified ✓</dd>
              </div>
              <div>
                <dt>Credential ID</dt>
                <dd>GSAC-EL-2026-004829</dd>
              </div>
            </dl>
            <span className="cred-link">
              Verify Credential <Arrow />
            </span>
          </div>
        </Link>
      </div>

      <ul className="stage-stats">
        {capabilities.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.line}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
