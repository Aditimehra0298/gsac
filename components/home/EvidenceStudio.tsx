"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Arrow } from "../Arrow";

const tabs = [
  "Industries",
  "Video Assessment",
  "Credentialing",
  "Verification",
  "Training Providers",
  "Employers",
  "Mobility",
] as const;

const clips = {
  electrical: [
    { src: "/hero/electrical.jpg", time: "02:14" },
    { src: "/hero/plumbing.jpg", time: "03:36" },
    { src: "/hero/welding.jpg", time: "02:28" },
  ],
  welding: [
    { src: "/hero/welding.jpg", time: "01:48" },
    { src: "/sections/skill-hvac.jpg", time: "02:05" },
    { src: "/hero/electrical.jpg", time: "03:12" },
  ],
  trades: [
    { src: "/sections/skill-wood.jpg", time: "02:41" },
    { src: "/sections/skill-auto.jpg", time: "01:56" },
    { src: "/sections/skill-hvac.jpg", time: "03:04" },
  ],
};

const statusChecks = [
  { name: "Video uploaded", icon: "video" as const },
  { name: "AI checked", icon: "chip" as const },
  { name: "Assessor reviewed", icon: "user" as const },
  { name: "Credential ready", icon: "badge" as const },
];

const reviewChecks = [
  { name: "Tool handling", icon: "video" as const },
  { name: "Sequence", icon: "chip" as const },
  { name: "Safety", icon: "user" as const },
  { name: "Accuracy", icon: "badge" as const },
  { name: "Workmanship", icon: "badge" as const },
];

const panels = {
  Industries: {
    leftTitle: "Built around the work",
    leftBody: "Welding, electrical, plumbing, carpentry, automotive, and HVAC share one way of showing skill.",
    heading: "Every trade, judged from the work itself.",
    support: "Six practical fields. The same levels, the same evidence, the same credential.",
    image: "/sections/crew.jpg",
    cardLabel: "Industries",
    assessment: "Practical skills you can demonstrate",
    meta: "Level 1–4 · Six trades · Video evidence",
    status: "Open",
    task: "Welding, electrical, plumbing, carpentry, automotive, HVAC",
    clips: clips.trades,
    checks: reviewChecks,
    rightTitle: "One standard",
    rightBody: "Levels mean the same thing from a workshop in one country to a site in another.",
    credential: "GSAC-ENG-L3-2024-004821",
    trade: "Engineering & built environment",
    issued: "Issued Mar 12, 2024",
  },
  "Video Assessment": {
    leftTitle: "Empower Training Providers",
    leftBody: "Turn practical learning into verifiable skills with video evidence.",
    heading: "Assess practical skills through real video evidence",
    support: "Capture, review, and validate real-world skills through AI-assisted and expert-led assessment.",
    image: "/sections/review-electric.jpg",
    cardLabel: "Skills Assessment",
    assessment: "Electrical Installation Assessment",
    meta: "Level 3 · Building & Construction · 4 tasks",
    status: "In Review",
    task: "Task 2 of 4 · Install and terminate circuit wiring",
    clips: clips.electrical,
    checks: statusChecks,
    rightTitle: "Verification for Employers",
    rightBody: "Hire with confidence using trusted, video-verified credentials.",
    credential: "GSAC-2024-7819923",
    trade: "Electrical Technician (L3)",
    issued: "Issued Mar 12, 2024",
  },
  Credentialing: {
    leftTitle: "A record of the work",
    leftBody: "The credential names the skill, the level, and the evidence behind it.",
    heading: "Issue a credential that shows what was demonstrated",
    support: "It names the person, the trade, the level, and the videos the decision was made from.",
    image: "/sections/story-work.jpg",
    cardLabel: "Credential",
    assessment: "Welding & Fabrication Assessment",
    meta: "Level 3 · Metalwork · 4 tasks",
    status: "Credential ready",
    task: "Task 4 of 4 · Finish and inspect the weld",
    clips: clips.welding,
    checks: statusChecks,
    rightTitle: "Ready to share",
    rightBody: "A registry ID an employer can check without calling the training provider.",
    credential: "GSAC-2024-220184",
    trade: "Welding & Fabrication (L3)",
    issued: "Issued Jun 2, 2024",
  },
  Verification: {
    leftTitle: "Check before you hire",
    leftBody: "Confirm the person, the level, and the date the evidence was reviewed.",
    heading: "Verification that stays tied to the original evidence",
    support: "The ID, the trade, the level, and a path back to the videos.",
    image: "/hero/plumbing.jpg",
    cardLabel: "Verification",
    assessment: "Plumbing & Pipefitting Assessment",
    meta: "Level 2 · Pipework · 3 tasks",
    status: "Valid",
    task: "Task 3 of 3 · Pressure test the finished run",
    clips: clips.electrical,
    checks: statusChecks,
    rightTitle: "For employers",
    rightBody: "A valid credential, the trade, the level, and a path back to the videos.",
    credential: "GSAC-2024-118440",
    trade: "Plumbing & Pipefitting (L2)",
    issued: "Issued Jan 19, 2024",
  },
  "Training Providers": {
    leftTitle: "Empower Training Providers",
    leftBody: "Upload skill video. MP4 or MOV, up to 5GB. Map each clip to a task.",
    heading: "From a lesson to evidence that counts",
    support: "Training prepares the candidate. The assessment decides the credential.",
    image: "/sections/skill-wood.jpg",
    cardLabel: "Evidence upload",
    assessment: "Carpentry & Joinery Assessment",
    meta: "Level 2 · Joinery · 4 tasks",
    status: "Uploading",
    task: "Task 1 of 4 · Mark, cut, and fit the joint",
    clips: clips.trades,
    checks: statusChecks,
    rightTitle: "Still independent",
    rightBody: "Training prepares the candidate. The assessment decides the credential.",
    credential: "GSAC-2024-330772",
    trade: "Carpentry & Joinery (L2)",
    issued: "Awaiting assessor review",
  },
  Employers: {
    leftTitle: "See the work",
    leftBody: "Watch the task, not only the certificate name.",
    heading: "Hire from evidence, not from a course title",
    support: "Tool handling, sequence, safety, accuracy, and workmanship, watched on the video.",
    image: "/sections/skill-auto.jpg",
    cardLabel: "For employers",
    assessment: "Automotive Repair Assessment",
    meta: "Level 3 · Vehicle systems · 4 tasks",
    status: "In Review",
    task: "Task 2 of 4 · Diagnose and repair the fault",
    clips: clips.trades,
    checks: reviewChecks,
    rightTitle: "Verification for Employers",
    rightBody: "Hire with confidence using trusted, video-verified credentials.",
    credential: "GSAC-2024-551903",
    trade: "Automotive Repair (L3)",
    issued: "Issued Aug 8, 2024",
  },
  Mobility: {
    leftTitle: "The skill travels",
    leftBody: "A GSAC record can be read when the workplace or the country changes.",
    heading: "Recognition that moves with the person",
    support: "Same levels. Same evidence. A credential an employer in another country can inspect.",
    image: "/sections/skill-hvac.jpg",
    cardLabel: "Mobility",
    assessment: "HVAC & Refrigeration Assessment",
    meta: "Level 3 · Climate systems · 4 tasks",
    status: "Valid",
    task: "Task 3 of 4 · Charge, test, and record the system",
    clips: clips.welding,
    checks: reviewChecks,
    rightTitle: "Across borders",
    rightBody: "Same levels. Same evidence types. A credential an employer can inspect.",
    credential: "GSAC-2024-670215",
    trade: "HVAC & Refrigeration (L3)",
    issued: "Issued Nov 4, 2024",
  },
};

function Mark() {
  return (
    <svg className="gsac-mark" width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      <rect width="22" height="22" rx="5" fill="#c9922e" />
      <circle cx="11" cy="11" r="6.2" fill="none" stroke="#002448" strokeWidth="1.3" />
      <path d="M11 4.8c1.6 1.4 2.5 3.5 2.5 6.2s-.9 4.8-2.5 6.2c-1.6-1.4-2.5-3.5-2.5-6.2s.9-4.8 2.5-6.2zM4.8 11h12.4" fill="none" stroke="#002448" strokeWidth="1.1" />
    </svg>
  );
}

function CheckIcon({ icon }: { icon: "video" | "chip" | "user" | "badge" }) {
  if (icon === "video") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="6" width="13" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16 10.5 21 8v8l-5-2.5z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (icon === "chip") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (icon === "user") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="9" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6.5 19.2c1.2-2.6 3.1-3.8 5.5-3.8s4.3 1.2 5.5 3.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="m8.8 12.2 2.1 2.1 4.3-4.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

const tradeCards = [
  { key: "weld", tab: "Credentialing" as const, index: "01", name: "Welding & Fabrication", src: "/hero/welding.jpg", line: "Level 3 · Finish and inspect the weld" },
  { key: "plumb", tab: "Verification" as const, index: "03", name: "Plumbing & Pipefitting", src: "/hero/plumbing.jpg", line: "Level 2 · Pressure test the finished run" },
  { key: "wood", tab: "Training Providers" as const, index: "04", name: "Carpentry & Joinery", src: "/sections/skill-wood.jpg", line: "Level 2 · Mark, cut, and fit the joint" },
  { key: "auto", tab: "Employers" as const, index: "05", name: "Automotive Repair", src: "/sections/skill-auto.jpg", line: "Level 3 · Diagnose and repair the fault" },
  { key: "hvac", tab: "Mobility" as const, index: "06", name: "HVAC & Refrigeration", src: "/sections/skill-hvac.jpg", line: "Level 3 · Charge, test, and record the system" },
];

const tabCard = {
  Industries: "weld",
  "Video Assessment": "electrical",
  Credentialing: "weld",
  Verification: "verify",
  "Training Providers": "upload",
  Employers: "auto",
  Mobility: "hvac",
} as const;

export function EvidenceStudio() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Video Assessment");
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, x: 0, left: 0 });
  const video = panels["Video Assessment"];

  function moveTo(key: string, smooth = true) {
    const rail = track.current;
    const card = rail?.querySelector<HTMLElement>(`[data-card="${key}"]`);
    if (!rail || !card) return;
    const left = card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2;
    rail.scrollTo({ left: Math.max(0, left), behavior: smooth ? "smooth" : "auto" });
  }

  useEffect(() => {
    moveTo("electrical", false);
  }, []);

  function choose(next: (typeof tabs)[number]) {
    setTab(next);
    moveTo(tabCard[next]);
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    const rail = track.current;
    if (!rail) return;
    drag.current = { active: true, x: event.clientX, left: rail.scrollLeft };
    rail.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const rail = track.current;
    if (!rail || !drag.current.active) return;
    rail.scrollLeft = drag.current.left - (event.clientX - drag.current.x);
  }

  function onPointerUp() {
    drag.current.active = false;
  }

  return (
    <section className="studio">
      <p className="studio-line">Everything you need to assess real skills.</p>
      <div className="studio-tabs" role="tablist" aria-label="Platform areas">
        {tabs.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={tab === item}
            className={tab === item ? "is-on" : ""}
            onClick={() => choose(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="studio-viewport">
        <div
          className="studio-stage"
          ref={track}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <aside className="studio-side" data-card="upload" style={{ backgroundImage: "url(/sections/trainer.jpg)" }}>
            <div>
              <h3>{panels["Training Providers"].leftTitle}</h3>
              <p>{panels["Training Providers"].leftBody}</p>
            </div>
            <div className="upload-card">
              <header>
                <Mark />
                <strong>GSAC</strong>
              </header>
              <span>Evidence Upload</span>
              <div className="drop">
                <b aria-hidden="true">↑</b>
                <small>Upload skill video</small>
                <small>MP4, MOV up to 5GB</small>
              </div>
            </div>
          </aside>

          {tradeCards.slice(0, 1).map((card) => (
            <article key={card.key} className="trade-shot" data-card={card.key} style={{ backgroundImage: `url(${card.src})` }}>
              <small>{card.index}</small>
              <h3>{card.name}</h3>
              <p>{card.line}</p>
              <a href="/assessments#GSAC-ENG">View skill →</a>
            </article>
          ))}

          <div className="studio-main" data-card="electrical">
            <img src={video.image} alt="An electrician assessed on a live installation" />
            <div className="studio-copy">
              <h2>{video.heading}</h2>
              <p>{video.support}</p>
            </div>
            <div className="studio-lower">
              <article className="assess-card">
                <header>
                  <strong>
                    <Mark /> GSAC
                  </strong>
                  <span>{video.cardLabel}</span>
                </header>
                <div className="assess-title">
                  <div>
                    <h3>{video.assessment}</h3>
                    <p>{video.meta}</p>
                  </div>
                  <em className="in-review">{video.status}</em>
                </div>
                <div className="clip-row">
                  {video.clips.map((clip) => (
                    <figure key={clip.src + clip.time}>
                      <img src={clip.src} alt="" />
                      <i />
                      <figcaption>{clip.time}</figcaption>
                    </figure>
                  ))}
                </div>
                <footer>
                  <span>{video.task}</span>
                  <a className="button" href="/framework">
                    Review Evidence <Arrow />
                  </a>
                </footer>
              </article>
              <ul className="check-list">
                {video.checks.map((item) => (
                  <li key={item.name}>
                    <CheckIcon icon={item.icon} />
                    <span>{item.name}</span>
                    <b>✓</b>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {tradeCards.slice(1).map((card) => (
            <article key={card.key} className="trade-shot" data-card={card.key} style={{ backgroundImage: `url(${card.src})` }}>
              <small>{card.index}</small>
              <h3>{card.name}</h3>
              <p>{card.line}</p>
              <a href="/assessments#GSAC-ENG">View skill →</a>
            </article>
          ))}

          <aside className="studio-side studio-side-right" data-card="verify" style={{ backgroundImage: "url(/sections/employer.jpg)" }}>
            <div>
              <h3>{panels.Verification.rightTitle}</h3>
              <p>{panels.Verification.rightBody}</p>
            </div>
            <div className="verify-card">
              <header>
                <Mark />
                <strong>GSAC</strong>
              </header>
              <span>Verify a Credential</span>
              <div className="verify-row">
                <code>{panels["Video Assessment"].credential}</code>
                <a className="verify-go" href="/recognition">
                  Verify
                </a>
              </div>
              <p className="valid">Valid Credential</p>
              <p className="trade">{panels["Video Assessment"].trade}</p>
              <small>{panels["Video Assessment"].issued}</small>
              <a href="/recognition">View skills and evidence →</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
