"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, type PointerEvent, type WheelEvent } from "react";
import { Arrow } from "../Arrow";
import { useLanguage } from "../LanguageProvider";

const skills = [
  { index: "01", name: "Welding & Fabrication", src: "/hero/welding.jpg", href: "/assessments#GSAC-ENG" },
  { index: "02", name: "Electrical Installation", src: "/hero/electrical.jpg", href: "/assessments#GSAC-ENG" },
  { index: "03", name: "Plumbing Foundation", src: "/hero/plumbing.jpg", href: "/assessments#GSAC-ENG" },
  { index: "04", name: "Carpentry & Joinery", src: "/sections/skill-wood.jpg", href: "/assessments#GSAC-ENG" },
  { index: "05", name: "Automotive Repair", src: "/sections/skill-auto.jpg", href: "/assessments#GSAC-ENG" },
  { index: "06", name: "HVAC & Refrigeration", src: "/sections/skill-hvac.jpg", href: "/assessments#GSAC-ENG" },
  { index: "07", name: "Workplace Safety", src: "/hero/workshop.jpg", href: "/assessments#GSAC-ENG" },
  { index: "08", name: "Industrial Maintenance", src: "/sections/crew.jpg", href: "/assessments#GSAC-ENG" },
  { index: "09", name: "Information Security", src: "/hero/evidence.jpg", href: "/assessments#GSAC-ENG" },
  { index: "10", name: "Environmental Management", src: "/sections/story-work.jpg", href: "/assessments#GSAC-ENG" },
  { index: "11", name: "Carbon Trading & Reporting", src: "/hero/credential.jpg", href: "/assessments#GSAC-ENG" },
  { index: "12", name: "ESG Management", src: "/sections/employer.jpg", href: "/assessments#GSAC-ENG" },
  { index: "13", name: "Trainer-Led Programmes", src: "/sections/trainer.jpg", href: "/assessments#GSAC-ENG" },
  { index: "14", name: "Practical Assessment", src: "/sections/review-electric.jpg", href: "/assessments#GSAC-ENG" },
  { index: "15", name: "Verified Credentials", src: "/hero/hero-skills.jpg", href: "/assessments#GSAC-ENG" },
  { index: "16", name: "Workforce Upskilling", src: "/sections/cta-workforce.jpg", href: "/assessments#GSAC-ENG" },
];

export function SkillsGallery() {
  const { t, locale } = useLanguage();
  const scroller = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, x: 0, left: 0, moved: false, id: -1 });

  const scrollByCard = useCallback((dir: -1 | 1) => {
    const rail = scroller.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>(".proof-card");
    const amount = (card?.offsetWidth ?? 320) + 16;
    rail.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    const rail = scroller.current;
    if (!rail || event.button !== 0) return;
    drag.current = {
      active: true,
      x: event.clientX,
      left: rail.scrollLeft,
      moved: false,
      id: event.pointerId,
    };
    rail.classList.add("is-dragging");
    try {
      rail.setPointerCapture(event.pointerId);
    } catch {
      /* ignore */
    }
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const rail = scroller.current;
    if (!rail || !drag.current.active) return;
    const delta = event.clientX - drag.current.x;
    if (Math.abs(delta) > 4) drag.current.moved = true;
    rail.scrollLeft = drag.current.left - delta;
  }

  function endDrag(event?: PointerEvent<HTMLDivElement>) {
    const rail = scroller.current;
    if (!rail) return;
    if (event && drag.current.id === event.pointerId) {
      try {
        rail.releasePointerCapture(event.pointerId);
      } catch {
        /* ignore */
      }
    }
    drag.current.active = false;
    rail.classList.remove("is-dragging");
  }

  function onWheel(event: WheelEvent<HTMLDivElement>) {
    const rail = scroller.current;
    if (!rail) return;
    const mostlyVertical = Math.abs(event.deltaY) > Math.abs(event.deltaX);
    const delta = mostlyVertical ? event.deltaY : event.deltaX;
    if (delta === 0) return;
    const max = rail.scrollWidth - rail.clientWidth;
    if (max <= 0) return;
    const next = Math.min(max, Math.max(0, rail.scrollLeft + delta));
    if (next !== rail.scrollLeft) {
      event.preventDefault();
      rail.scrollLeft = next;
    }
  }

  useEffect(() => {
    const rail = scroller.current;
    if (!rail) return;
    const onWheelNative = (event: globalThis.WheelEvent) => {
      const mostlyVertical = Math.abs(event.deltaY) > Math.abs(event.deltaX);
      const delta = mostlyVertical ? event.deltaY : event.deltaX;
      if (delta === 0) return;
      const max = rail.scrollWidth - rail.clientWidth;
      if (max <= 0) return;
      const atStart = rail.scrollLeft <= 0 && delta < 0;
      const atEnd = rail.scrollLeft >= max - 1 && delta > 0;
      if (atStart || atEnd) return;
      event.preventDefault();
      rail.scrollLeft += delta;
    };
    rail.addEventListener("wheel", onWheelNative, { passive: false });
    return () => rail.removeEventListener("wheel", onWheelNative);
  }, []);

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
        <div className="proof-nav">
          <button type="button" aria-label="Previous skills" onClick={() => scrollByCard(-1)}>
            ←
          </button>
          <button type="button" aria-label="Next skills" onClick={() => scrollByCard(1)}>
            →
          </button>
        </div>
      </div>
      <div
        className="proof-rail"
        ref={scroller}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onWheel={onWheel}
      >
        {skills.map((skill) => (
          <Link
            key={skill.index}
            href={skill.href}
            className="proof-card"
            draggable={false}
            onDragStart={(event) => event.preventDefault()}
            onClick={(event) => {
              if (drag.current.moved) {
                event.preventDefault();
                drag.current.moved = false;
              }
            }}
          >
            <img src={skill.src} alt="" draggable={false} />
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
