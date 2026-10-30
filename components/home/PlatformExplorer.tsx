"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

type FeatureKey =
  | "programmes"
  | "candidates"
  | "sessions"
  | "video"
  | "assessment"
  | "certificate"
  | "verify"
  | "records";

const LIVE_APP = "http://127.0.0.1:5001/";

function FeaturePreview({ feature }: { feature: FeatureKey }) {
  switch (feature) {
    case "programmes":
      return (
        <div className="px-app">
          <div className="px-app-bar">
            <img src="/platform/gsac-logo.png" alt="" className="px-app-logo" />
            <strong>Programmes & Batches</strong>
            <em>Live GSAC app</em>
          </div>
          <div className="px-app-body">
            <div className="px-stat-row">
              <div><small>Active programmes</small><b>6</b></div>
              <div><small>Pathway weeks</small><b>4</b></div>
              <div><small>Pass mark</small><b>70%</b></div>
            </div>
            <table className="px-table">
              <thead>
                <tr>
                  <th>Programme</th>
                  <th>Batch</th>
                  <th>Setup</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic Plumbing Foundation</td>
                  <td>PL-2026-A</td>
                  <td>1 month · 4 weeks</td>
                  <td><span className="px-bar"><i style={{ width: "72%" }} /></span></td>
                </tr>
                <tr>
                  <td>Carbon Trading & Reporting</td>
                  <td>CT-2026-B</td>
                  <td>Practitioner</td>
                  <td><span className="px-bar"><i style={{ width: "48%" }} /></span></td>
                </tr>
                <tr>
                  <td>ESG Management Development</td>
                  <td>ESG-2026-C</td>
                  <td>Training programme</td>
                  <td><span className="px-bar"><i style={{ width: "31%" }} /></span></td>
                </tr>
              </tbody>
            </table>
            <div className="px-cal">
              {[
                { d: "W1", t: "Tools" },
                { d: "W2", t: "Pipe fitting" },
                { d: "W3", t: "Sanitary" },
                { d: "W4", t: "Testing" },
                { d: "FA", t: "Assessment" },
              ].map((item) => (
                <div key={item.d} className="px-cal-day">
                  <span>{item.d}</span>
                  <strong>{item.t}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case "candidates":
      return (
        <div className="px-app">
          <div className="px-app-bar">
            <span>Candidates</span>
            <strong>Directory</strong>
            <em>Institute records</em>
          </div>
          <div className="px-app-body px-candidate-grid">
            {[
              { n: "A. Rahman", c: "Plumbing Foundation", s: "Active" },
              { n: "M. Okonkwo", c: "Carbon Trading", s: "Active" },
              { n: "S. Patel", c: "ESG Management", s: "Pending" },
              { n: "L. Berg", c: "Plumbing Foundation", s: "Active" },
              { n: "J. Costa", c: "Carbon Trading", s: "Complete" },
              { n: "N. Ali", c: "ESG Management", s: "Active" },
            ].map((row) => (
              <article key={row.n} className="px-candidate">
                <div className="px-avatar" aria-hidden="true">
                  {row.n.slice(0, 1)}
                </div>
                <div>
                  <strong>{row.n}</strong>
                  <p>{row.c}</p>
                </div>
                <span className={`px-pill px-pill-${row.s.toLowerCase()}`}>{row.s}</span>
              </article>
            ))}
          </div>
        </div>
      );
    case "sessions":
      return (
        <div className="px-app">
          <div className="px-app-bar">
            <span>Training pathway</span>
            <strong>Basic Plumbing Foundation</strong>
            <em>4 weeks + assessment</em>
          </div>
          <div className="px-app-body">
            <div className="px-week">
              {[
                { day: "Week 1", title: "Plumbing Basics and Tools", who: "60–120 sec video", status: "Done" },
                { day: "Week 2", title: "Pipe Fitting and Water Supply", who: "60–120 sec video", status: "Done" },
                { day: "Week 3", title: "Sanitary and Drainage Systems", who: "60–120 sec video", status: "Live" },
                { day: "Week 4", title: "Final Practical and Testing", who: "60–120 sec video", status: "Scheduled" },
                { day: "Final", title: "Final Practical Assessment", who: "90–150 sec video", status: "Scheduled" },
              ].map((s) => (
                <div key={s.day} className={`px-session ${s.status === "Live" ? "is-live" : ""}`}>
                  <small>{s.day}</small>
                  <strong>{s.title}</strong>
                  <p>{s.who}</p>
                  <span>{s.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case "video":
      return (
        <div className="px-app">
          <div className="px-app-bar">
            <span>Evidence Library</span>
            <strong>Training videos</strong>
            <em>Trainer review</em>
          </div>
          <div className="px-app-body px-video-grid">
            {[
              { t: "Week 1 — Tools & PPE", d: "Pathway · 2 min max", p: 100, img: "/platform/week1.jpg" },
              { t: "Week 2 — Pipe fitting", d: "Pathway · reviewed", p: 100, img: "/platform/hero-plumbing.jpg" },
              { t: "Final assessment", d: "Uploading…", p: 68, img: "/platform/assessment-desk.jpg" },
              { t: "Certificate unlock", d: "After trainer review", p: 100, img: "/platform/certificate-still.jpg" },
            ].map((v) => (
              <article key={v.t} className="px-video-card">
                <div className="px-thumb" style={{ backgroundImage: `url(${v.img})` }}>
                  <span className="px-play" aria-hidden="true" />
                </div>
                <strong>{v.t}</strong>
                <p>{v.d}</p>
                <span className="px-bar"><i style={{ width: `${v.p}%` }} /></span>
              </article>
            ))}
          </div>
        </div>
      );
    case "assessment":
      return (
        <div className="px-app">
          <div className="px-app-bar">
            <span>Assessments</span>
            <strong>Marks & outcomes</strong>
            <em>Batch EL-2026-A</em>
          </div>
          <div className="px-app-body">
            <div className="px-chart">
              {[62, 78, 84, 71, 91, 88].map((h, i) => (
                <div key={i} className="px-chart-col">
                  <i style={{ height: `${h}%` }} />
                  <span>W{i + 1}</span>
                </div>
              ))}
            </div>
            <table className="px-table">
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>Practical</th>
                  <th>Theory</th>
                  <th>Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>A. Rahman</td><td>88</td><td>82</td><td><span className="px-pill px-pill-active">Pass</span></td></tr>
                <tr><td>M. Okonkwo</td><td>76</td><td>79</td><td><span className="px-pill px-pill-active">Pass</span></td></tr>
                <tr><td>S. Patel</td><td>64</td><td>71</td><td><span className="px-pill px-pill-pending">Review</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    case "certificate":
      return (
        <div className="px-app px-cert-wrap">
          <div className="px-cert px-cert-photo">
            <img src="/platform/certificate-still.jpg" alt="GSAC certificate preview" />
            <div className="px-cert-overlay">
              <p className="px-cert-kicker">Global Skill Assessment Council</p>
              <h3>Certificate of Completion</h3>
              <p className="px-cert-name">Amina Rahman</p>
              <p className="px-cert-course">Basic Plumbing Foundation Course</p>
              <div className="px-cert-meta">
                <span>QR-verified credential</span>
                <span>Pass mark 70%</span>
              </div>
            </div>
          </div>
        </div>
      );
    case "verify":
      return (
        <div className="px-app">
          <div className="px-app-bar">
            <span>Verification Portal</span>
            <strong>Public check</strong>
            <em>Live</em>
          </div>
          <div className="px-app-body px-verify">
            <div className="px-verify-search">
              <label>Certificate number</label>
              <div className="px-verify-field">
                <span>GSAC-EL3-2026-004821</span>
                <button type="button" tabIndex={-1}>Verify</button>
              </div>
            </div>
            <div className="px-verify-result">
              <div className="px-qr px-qr-lg" aria-hidden="true" />
              <div>
                <strong>Valid certificate</strong>
                <p>Amina Rahman · Electrical L3</p>
                <p>Issued by partner institute · Records held in GSAC</p>
                <span className="px-pill px-pill-active">Authenticated</span>
              </div>
            </div>
          </div>
        </div>
      );
    case "records":
      return (
        <div className="px-app">
          <div className="px-app-bar">
            <span>Central Records</span>
            <strong>Institute sync</strong>
            <em>Connected</em>
          </div>
          <div className="px-app-body px-records">
            {[
              { l: "Training programmes", v: "12", s: "Synced" },
              { l: "Candidate profiles", v: "248", s: "Synced" },
              { l: "Session evidence", v: "1,024", s: "Synced" },
              { l: "Assessment records", v: "896", s: "Synced" },
              { l: "Certificates issued", v: "192", s: "Synced" },
              { l: "Verification checks", v: "1,540", s: "Live" },
            ].map((r) => (
              <div key={r.l} className="px-record">
                <div>
                  <strong>{r.l}</strong>
                  <p>{r.s}</p>
                </div>
                <b>{r.v}</b>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function PlatformExplorer() {
  const { t } = useLanguage();
  const features = t.platformExplorer.features;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchRef = useRef(false);

  const select = useCallback((index: number) => {
    setActive((index + features.length) % features.length);
    setPaused(true);
    touchRef.current = true;
  }, [features.length]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % features.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [paused, features.length]);

  const feature = features[active];

  return (
    <section className="platform-explorer" id="platform" data-reveal>
      <div className="wrap">
        <header className="px-head">
          <p className="px-kicker">{t.platformExplorer.kicker}</p>
          <h2>{t.platformExplorer.title}</h2>
          <p className="px-lede">{t.platformExplorer.lede}</p>
        </header>

        <div className="px-layout">
          <nav className="px-nav" aria-label={t.platformExplorer.navLabel}>
            <ol>
              {features.map((item, index) => {
                const selected = index === active;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={selected ? "is-active" : undefined}
                      aria-current={selected ? "true" : undefined}
                      onClick={() => select(index)}
                      onFocus={() => setPaused(true)}
                    >
                      <span className="px-num">{String(index + 1).padStart(2, "0")}</span>
                      <span className="px-nav-copy">
                        <strong>{item.title}</strong>
                        <em>{item.short}</em>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="px-stage">
            <div className="px-stage-top">
              <span className="px-progress">
                {String(active + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
              </span>
              <div className="px-controls">
                <button type="button" onClick={() => select(active - 1)} aria-label={t.platformExplorer.prev}>
                  ←
                </button>
                <button type="button" onClick={() => select(active + 1)} aria-label={t.platformExplorer.next}>
                  →
                </button>
              </div>
            </div>

            <div className="px-preview" key={feature.id}>
              <FeaturePreview feature={feature.id as FeatureKey} />
            </div>

            <div className="px-caption">
              <h3>{feature.title}</h3>
              <p>{feature.detail}</p>
            </div>
          </div>
        </div>

        <div className="px-cta-row">
          <Link href="/framework" className="px-cta">
            {t.platformExplorer.cta}
          </Link>
          <a href={LIVE_APP} className="px-cta-ghost" target="_blank" rel="noopener noreferrer">
            Open live platform →
          </a>
        </div>
      </div>
    </section>
  );
}
