"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

function JourneyVisual({ step }: { step: number }) {
  switch (step) {
    case 0:
      return (
        <div className="gj-panel">
          <div className="gj-form">
            <p className="gj-form-title">Institute Registration</p>
            <label>Institute name<input readOnly value="Horizon Trade Academy" /></label>
            <label>Country<input readOnly value="Netherlands" /></label>
            <label>Primary contact<input readOnly value="ops@horizon.example" /></label>
            <div className="gj-form-actions"><span>Continue</span></div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="gj-panel">
          <div className="gj-pay">
            <p>Membership checkout</p>
            <strong>€1,200 / year</strong>
            <ul>
              <li>Secure payment confirmation</li>
              <li>Invoice stored in GSAC records</li>
              <li>Receipt emailed to institute</li>
            </ul>
            <div className="gj-pay-ok">Payment confirmed</div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="gj-panel">
          <div className="gj-activate">
            <div className="gj-ring" aria-hidden="true" />
            <strong>Account under review</strong>
            <p>GSAC validates institute details and activates access.</p>
            <span className="gj-badge">Pending activation</span>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="gj-panel">
          <div className="gj-mail">
            <p className="gj-mail-from">From: access@gsac.org</p>
            <strong>Your GSAC login is ready</strong>
            <p>Secure activation link · Temporary credentials · App access</p>
            <div className="gj-mail-btn">Open platform</div>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="gj-panel">
          <div className="gj-mini-dash">
            <p>Create programmes</p>
            <div className="gj-chip-row">
              <span>Electrical L3</span>
              <span>Welding L2</span>
              <span>+ New batch</span>
            </div>
            <div className="gj-mini-row"><b>Batch EL-2026-A</b><em>24 candidates</em></div>
            <div className="gj-mini-row"><b>Schedule</b><em>Mon–Fri · 09:00</em></div>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="gj-panel">
          <div className="gj-timeline">
            <div><span>09:00</span><strong>Session start</strong></div>
            <div className="is-active"><span>11:20</span><strong>Video evidence uploaded</strong></div>
            <div><span>13:00</span><strong>Topics logged</strong></div>
            <div className="gj-vid-thumb" aria-hidden="true" />
          </div>
        </div>
      );
    case 6:
      return (
        <div className="gj-panel">
          <div className="gj-assess">
            <table>
              <tbody>
                <tr><td>Practical</td><td>88</td></tr>
                <tr><td>Theory</td><td>82</td></tr>
                <tr><td>Outcome</td><td>Pass</td></tr>
              </tbody>
            </table>
            <div className="gj-mini-cert">Certificate ready to issue</div>
          </div>
        </div>
      );
    case 7:
      return (
        <div className="gj-panel">
          <div className="gj-verify-card">
            <div className="gj-qr" aria-hidden="true" />
            <div>
              <strong>Credential verified</strong>
              <p>GSAC-EL3-2026-004821</p>
              <span>Public verification response</span>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function GsacJourney() {
  const { t } = useLanguage();
  const steps = t.gsacJourney.steps;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const select = useCallback(
    (index: number) => {
      setActive((index + steps.length) % steps.length);
      setPaused(true);
    },
    [steps.length],
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused, steps.length]);

  const step = steps[active];
  const phase = active < 4 ? 1 : 2;

  return (
    <section className="gsac-journey" id="how-it-works" data-reveal>
      <div className="wrap">
        <header className="gj-head">
          <p className="gj-kicker">{t.gsacJourney.kicker}</p>
          <h2>{t.gsacJourney.title}</h2>
          <p className="gj-lede">{t.gsacJourney.lede}</p>
        </header>

        <div className="gj-layout">
          <div className="gj-rail" ref={listRef}>
            <div className={`gj-phase ${phase === 1 ? "is-on" : ""}`}>
              <span>{t.gsacJourney.phase1}</span>
            </div>
            <ol className="gj-steps">
              {steps.map((item, index) => {
                const selected = index === active;
                const done = index < active;
                return (
                  <li key={item.id} className={selected ? "is-active" : done ? "is-done" : undefined}>
                    {index === 4 ? (
                      <div className={`gj-phase gj-phase-inline ${phase === 2 ? "is-on" : ""}`}>
                        <span>{t.gsacJourney.phase2}</span>
                      </div>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => select(index)}
                      onFocus={() => setPaused(true)}
                      aria-current={selected ? "step" : undefined}
                    >
                      <span className="gj-node" aria-hidden="true">
                        <i />
                      </span>
                      <span className="gj-step-copy">
                        <strong>
                          <em>{String(index + 1).padStart(2, "0")}</em> {item.title}
                        </strong>
                        <span>{item.text}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <aside className="gj-stage">
            <div className="gj-stage-meta">
              <span>
                {phase === 1 ? t.gsacJourney.phase1 : t.gsacJourney.phase2}
              </span>
              <strong>
                {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
              </strong>
            </div>
            <div className="gj-visual" key={step.id}>
              <JourneyVisual step={active} />
            </div>
            <div className="gj-caption">
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </div>
            <div className="gj-controls">
              <button type="button" onClick={() => select(active - 1)} aria-label={t.gsacJourney.prev}>
                ← {t.gsacJourney.prev}
              </button>
              <button type="button" onClick={() => select(active + 1)} aria-label={t.gsacJourney.next}>
                {t.gsacJourney.next} →
              </button>
            </div>
          </aside>
        </div>

        <p className="gj-note">{t.gsacJourney.note}</p>

        <div className="gj-cta-row">
          <Link href="/for-institutes" className="gj-cta">
            {t.gsacJourney.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
