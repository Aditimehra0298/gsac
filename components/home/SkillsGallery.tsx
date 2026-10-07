"use client";

import Link from "next/link";
import { useRef, type PointerEvent } from "react";
import { Arrow } from "../Arrow";
import { useLanguage } from "../LanguageProvider";

const skills = [
  { index: "01", name: "Welding & Fabrication", src: "/hero/welding.jpg", href: "/assessments#GSAC-ENG" },
  { index: "02", name: "Electrical Installation", src: "/hero/electrical.jpg", href: "/assessments#GSAC-ENG" },
  { index: "03", name: "Plumbing & Pipefitting", src: "/hero/plumbing.jpg", href: "/assessments#GSAC-ENG" },
  { index: "04", name: "Carpentry & Joinery", src: "/sections/skill-wood.jpg", href: "/assessments#GSAC-ENG" },
  { index: "05", name: "Automotive Repair", src: "/sections/skill-auto.jpg", href: "/assessments#GSAC-ENG" },
  { index: "06", name: "HVAC & Refrigeration", src: "/sections/skill-hvac.jpg", href: "/assessments#GSAC-ENG" },
];

export function SkillsGallery() {
  const { t, locale } = useLanguage();
  const scroller = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, x: 0, left: 0, moved: false });

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    const rail = scroller.current;
    if (!rail) return;
    drag.current = { active: true, x: event.clientX, left: rail.scrollLeft, moved: false };
    rail.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const rail = scroller.current;
    if (!rail || !drag.current.active) return;
    const delta = event.clientX - drag.current.x;
    if (Math.abs(delta) > 6) drag.current.moved = true;
    rail.scrollLeft = drag.current.left - delta;
  }

  function onPointerUp() {
    drag.current.active = false;
  }

  return (
    <section className="band-cream proof" data-reveal>
      <div className="proof-head">
        <p className="kicker">{t.skills.kicker}</p>
        <h2>{t.skills.title}</h2>
        <p className="lede">
          {locale === "nl"
            ? "Laat je techniek, proces en vakmanschap zien via echt videobewijs."
            : "Show your technique, process and workmanship through real video evidence."}
        </p>
      </div>
      <div
        className="proof-rail"
        ref={scroller}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {skills.map((skill) => (
          <Link
            key={skill.index}
            href={skill.href}
            className="proof-card"
            onClick={(event) => {
              if (drag.current.moved) {
                event.preventDefault();
                drag.current.moved = false;
              }
            }}
          >
            <img src={skill.src} alt="" />
            <span className="proof-arrow" aria-hidden="true">
              <Arrow />
            </span>
            <span className="proof-meta">
              <small>{skill.index}</small>
              <strong>{skill.name}</strong>
              <em>
                {locale === "nl" ? "Bekijk skill" : "View skill"} <Arrow />
              </em>
            </span>
          </Link>
        ))}
      </div>
      <p className="proof-hint">
        {locale === "nl" ? "Sleep of scroll om te verkennen" : "Drag or scroll to explore"}
      </p>
    </section>
  );
}
