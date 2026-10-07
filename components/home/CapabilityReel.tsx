"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Arrow } from "../Arrow";

const items = [
  {
    name: "Standards",
    title: "Publish the standard first",
    summary: "Competencies are written down, versioned, and public before a candidate sits.",
    greatFor: "Boards · Educators · Employers",
    href: "/framework",
  },
  {
    name: "Examinations",
    title: "Test the published text",
    summary: "Questions are drawn from the standard, so the paper follows the standard rather than a single course.",
    greatFor: "Candidates · Assessment Panel",
    href: "/framework",
  },
  {
    name: "Performance",
    title: "Watch the work",
    summary: "An assessor observes a task. Attendance is not the evidence.",
    greatFor: "Assessors · Employers",
    href: "/assessments",
  },
  {
    name: "Portfolios",
    title: "Bring real work",
    summary: "Authenticated pieces of practice, mapped to competencies, with a clear account of who did what.",
    greatFor: "Practitioners · Supervisors",
    href: "/framework",
  },
  {
    name: "Dialogue",
    title: "Examine the judgment",
    summary: "Advanced and Expert candidates talk through decisions the standard cannot script in advance.",
    greatFor: "Senior practitioners",
    href: "/framework",
  },
  {
    name: "Registry",
    title: "Leave a record that travels",
    summary: "Every credential carries a domain, a level, a standard version, and an ID anyone can check.",
    greatFor: "Employers · Public bodies",
    href: "/recognition",
  },
];

export function CapabilityReel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function go(next: number) {
    const bounded = (next + items.length) % items.length;
    setIndex(bounded);
    const reel = scroller.current;
    const card = reel?.children[bounded] as HTMLElement | undefined;
    if (!reel || !card) return;
    const pad = Number.parseFloat(getComputedStyle(reel).paddingLeft) || 0;
    reel.scrollTo({ left: Math.max(0, card.offsetLeft - pad), behavior: "smooth" });
  }

  function onScroll() {
    const reel = scroller.current;
    if (!reel) return;
    const cards = Array.from(reel.children) as HTMLElement[];
    const pad = Number.parseFloat(getComputedStyle(reel).paddingLeft) || 0;
    const origin = reel.scrollLeft + pad;
    let best = 0;
    cards.forEach((card, cardIndex) => {
      if (Math.abs(card.offsetLeft - origin) < Math.abs(cards[best].offsetLeft - origin)) best = cardIndex;
    });
    setIndex(best);
  }

  return (
    <section className="section reel-section" data-reveal>
      <div className="wrap reel-head">
        <div>
          <p className="kicker">One path</p>
          <h2>Everything a credential needs.</h2>
          <p className="lede">From a public standard to a record that can be checked.</p>
        </div>
        <div className="round-row">
          <button type="button" className="round" aria-label="Previous" onClick={() => go(index - 1)}>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
          <button type="button" className="round" aria-label="Next" onClick={() => go(index + 1)}>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="pills wrap" role="tablist" aria-label="Credential pieces">
        {items.map((item, itemIndex) => (
          <button
            key={item.name}
            type="button"
            className="pill"
            role="tab"
            aria-selected={itemIndex === index}
            onClick={() => go(itemIndex)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="reel" ref={scroller} onScroll={onScroll}>
        {items.map((item) => (
          <article key={item.name} className="reel-card">
            <p className="kicker">{item.name}</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <p className="great-for">Great for: {item.greatFor}</p>
            <Link href={item.href}>
              Open <Arrow />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
