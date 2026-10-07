"use client";

import { useEffect, useRef, type PointerEvent } from "react";
import { useLanguage } from "../LanguageProvider";

const portraits = [
  "/hero/welding.jpg",
  "/hero/electrical.jpg",
  "/hero/plumbing.jpg",
  "/sections/skill-wood.jpg",
  "/sections/skill-auto.jpg",
  "/sections/skill-hvac.jpg",
  "/sections/crew.jpg",
  "/sections/employer.jpg",
  "/sections/trainer.jpg",
  "/sections/story-work.jpg",
  "/hero/evidence.jpg",
  "/sections/review-electric.jpg",
];

type Review = {
  quote: string;
  tag: "Professional" | "Employer" | "Training Provider" | "Assessor";
  role: string;
  skill: string;
};

const professionals: Review[] = [
  { quote: "Skills deserve proof.", tag: "Professional", role: "Welder", skill: "Welding" },
  { quote: "Show the work.", tag: "Professional", role: "Electrician", skill: "Electrical" },
  { quote: "Proof beyond the CV.", tag: "Professional", role: "Plumber", skill: "Plumbing" },
  { quote: "Show what you can do.", tag: "Professional", role: "Carpenter", skill: "Carpentry" },
  { quote: "Skills made visible.", tag: "Professional", role: "Technician", skill: "Automotive" },
  { quote: "Your skill, verified.", tag: "Professional", role: "Fabricator", skill: "Fabrication" },
  { quote: "From practice to proof.", tag: "Professional", role: "HVAC technician", skill: "HVAC" },
  { quote: "Real skills. Clear proof.", tag: "Professional", role: "Joiner", skill: "Joinery" },
  { quote: "Let the work speak.", tag: "Professional", role: "Installer", skill: "Electrical" },
  { quote: "Practical ability, verified.", tag: "Professional", role: "Pipefitter", skill: "Plumbing" },
];

const employers: Review[] = [
  { quote: "Evidence builds trust.", tag: "Employer", role: "Hiring lead", skill: "Welding" },
  { quote: "Competence you can see.", tag: "Employer", role: "Site supervisor", skill: "Electrical" },
  { quote: "Evidence over assumptions.", tag: "Employer", role: "Workforce manager", skill: "Plumbing" },
  { quote: "Trust what you can verify.", tag: "Employer", role: "Workshop manager", skill: "Automotive" },
  { quote: "Work speaks louder.", tag: "Employer", role: "Facilities lead", skill: "HVAC" },
  { quote: "Proof for every skill.", tag: "Employer", role: "Hiring team", skill: "Carpentry" },
  { quote: "Competence without guesswork.", tag: "Employer", role: "Operations lead", skill: "Fabrication" },
  { quote: "Skills that can be seen.", tag: "Employer", role: "Recruitment lead", skill: "Electrical" },
  { quote: "Real work. Real recognition.", tag: "Employer", role: "People manager", skill: "Verification" },
  { quote: "Experience made credible.", tag: "Employer", role: "Site lead", skill: "Welding" },
];

const providers: Review[] = [
  { quote: "Show what you can do.", tag: "Training Provider", role: "Programme lead", skill: "Welding" },
  { quote: "Capability made visible.", tag: "Training Provider", role: "Trainer", skill: "Electrical" },
  { quote: "Assessment with evidence.", tag: "Training Provider", role: "Workshop instructor", skill: "Plumbing" },
  { quote: "Skills worth recognising.", tag: "Training Provider", role: "Training lead", skill: "Carpentry" },
  { quote: "Visible skills. Greater opportunity.", tag: "Training Provider", role: "Instructor", skill: "Automotive" },
  { quote: "From practice to proof.", tag: "Training Provider", role: "Centre lead", skill: "HVAC" },
  { quote: "Real technique. Real confidence.", tag: "Training Provider", role: "Trainer", skill: "Joinery" },
  { quote: "Show. Assess. Verify.", tag: "Training Provider", role: "Programme lead", skill: "Fabrication" },
  { quote: "Recognition built on evidence.", tag: "Training Provider", role: "Instructor", skill: "Electrical" },
  { quote: "Evidence that travels.", tag: "Training Provider", role: "Training lead", skill: "Assessment" },
];

const assessors: Review[] = [
  { quote: "Evidence builds trust.", tag: "Assessor", role: "Assessor", skill: "Welding" },
  { quote: "See the work.", tag: "Assessor", role: "Review panel", skill: "Electrical" },
  { quote: "Real technique. Real confidence.", tag: "Assessor", role: "Assessor", skill: "Plumbing" },
  { quote: "Assessment with evidence.", tag: "Assessor", role: "Lead assessor", skill: "Assessment" },
  { quote: "Proof for every skill.", tag: "Assessor", role: "Assessor", skill: "Carpentry" },
  { quote: "Competence you can see.", tag: "Assessor", role: "Reviewer", skill: "Automotive" },
  { quote: "Recognition starts with proof.", tag: "Assessor", role: "Assessor", skill: "HVAC" },
  { quote: "Work speaks louder.", tag: "Assessor", role: "Verification desk", skill: "Verification" },
  { quote: "Skills made visible.", tag: "Assessor", role: "Lead assessor", skill: "Fabrication" },
  { quote: "Trust what you can verify.", tag: "Assessor", role: "Assessor", skill: "Workmanship" },
];

const shorts: Review[] = [
  { quote: "Skills deserve proof.", tag: "Professional", role: "Welder", skill: "Welding" },
  { quote: "Show the work.", tag: "Employer", role: "Hiring lead", skill: "Electrical" },
  { quote: "Evidence builds trust.", tag: "Assessor", role: "Assessor", skill: "Assessment" },
  { quote: "Real work. Real recognition.", tag: "Professional", role: "Technician", skill: "Automotive" },
  { quote: "Competence you can see.", tag: "Employer", role: "Site supervisor", skill: "Plumbing" },
  { quote: "Proof beyond the CV.", tag: "Professional", role: "Electrician", skill: "Electrical" },
  { quote: "Show what you can do.", tag: "Training Provider", role: "Trainer", skill: "Training" },
  { quote: "Practical ability, verified.", tag: "Assessor", role: "Review panel", skill: "Verification" },
  { quote: "Let the work speak.", tag: "Employer", role: "Workforce manager", skill: "Fabrication" },
  { quote: "Your skill, verified.", tag: "Professional", role: "Fabricator", skill: "Welding" },
];

const faces: Record<Review["tag"], string[]> = {
  Professional: [
    "/reviews/reviewer-welder.jpg",
    "/reviews/reviewer-electrician.jpg",
    "/reviews/reviewer-plumber.jpg",
    "/reviews/reviewer-carpenter.jpg",
    "/reviews/reviewer-tech.jpg",
  ],
  Employer: ["/reviews/reviewer-employer.jpg", "/reviews/reviewer-trainer.jpg"],
  "Training Provider": ["/reviews/reviewer-trainer.jpg", "/reviews/reviewer-welder.jpg"],
  Assessor: ["/reviews/reviewer-assessor.jpg", "/reviews/reviewer-employer.jpg"],
};

const reviews = Array.from({ length: 10 }, (_, index) =>
  [professionals, employers, providers, assessors, shorts].map((list) => list[index]),
).flat();

const rings = [-4, -2, 0, 2, 4];
const perRing = 10;

const cards = rings.flatMap((ring, band) =>
  Array.from({ length: perRing }, (_, column) => {
    const review = reviews[(band * perRing + column) % reviews.length];
    const look = (band + column) % 5 === 0 ? "yellow" : (band + column) % 3 === 0 ? "photo" : "cream";
    const pool = faces[review.tag];
    return {
      ...review,
      src: portraits[(band * perRing + column) % portraits.length],
      face: pool[(band + column) % pool.length],
      look,
      key: `${band}-${column}`,
      theta: (column / perRing) * Math.PI * 2 + (band % 2) * (Math.PI / perRing),
      ring,
    };
  }),
);

export function ReviewField() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const rigRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLElement | null>>([]);
  const metrics = useRef({ unit: 0, radius: 0 });
  const pointer = useRef({ x: 0, y: 0 });
  const drag = useRef(0);
  const hover = useRef(-1);
  const dragging = useRef(false);
  const lastX = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let last = performance.now();
    let angle = 0.35;
    const eased = { x: 0, y: 0 };

    function paint(index: number, scale: number) {
      const node = cardsRef.current[index];
      const card = cards[index];
      const { unit, radius } = metrics.current;
      if (!node || !card || !radius) return;
      const deg = (card.theta * 180) / Math.PI;
      node.style.transform = `translateY(${card.ring * unit}px) rotateY(${deg}deg) translateZ(${-radius}px) scale(${scale})`;
    }

    function layout() {
      if (!section) return;
      const height = section.clientHeight || 800;
      const width = section.clientWidth || 1200;
      const fov = ((width < 800 ? 80 : 65) * Math.PI) / 180;
      const perspective = height / 2 / Math.tan(fov / 2);
      section.style.perspective = `${perspective}px`;
      const unit = perspective / 3;
      const radius = unit * 3;
      const cardW = unit * 1.38;
      const cardH = unit * 1.22;
      metrics.current = { unit, radius };
      cards.forEach((_, index) => {
        const node = cardsRef.current[index];
        if (!node) return;
        node.style.width = `${cardW}px`;
        node.style.height = `${cardH}px`;
        node.style.marginLeft = `${-cardW / 2}px`;
        node.style.marginTop = `${-cardH / 2}px`;
        paint(index, hover.current === index ? 1.15 : 1);
      });
    }

    layout();
    const observer = new ResizeObserver(layout);
    observer.observe(section);

    function tick(now: number) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!reduce && !dragging.current) angle += dt * 0.11;
      eased.x += (pointer.current.x - eased.x) * 0.08;
      eased.y += (pointer.current.y - eased.y) * 0.08;
      const yaw = (reduce ? 0.4 : angle) + drag.current + eased.x * 0.32;
      const pitch = reduce ? 0 : eased.y * -0.16;
      if (rigRef.current) rigRef.current.style.transform = `rotateX(${pitch}rad) rotateY(${yaw}rad)`;
      cards.forEach((card, index) => {
        const node = cardsRef.current[index];
        if (!node) return;
        const facing = Math.cos(yaw + card.theta);
        const near = facing < -0.12;
        node.style.visibility = near ? "hidden" : "visible";
        node.style.opacity = near ? "0" : "1";
      });
      frame = window.requestAnimationFrame(tick);
    }

    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  function onMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointer.current.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    pointer.current.y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
    if (!dragging.current) return;
    const dx = event.clientX - lastX.current;
    lastX.current = event.clientX;
    drag.current += (-dx / bounds.width) * 2.4;
  }

  function onDown(event: PointerEvent<HTMLElement>) {
    dragging.current = true;
    lastX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onUp() {
    dragging.current = false;
  }

  function onEnter(index: number) {
    hover.current = index;
    const node = cardsRef.current[index];
    const card = cards[index];
    const { unit, radius } = metrics.current;
    if (!node || !radius) return;
    const deg = (card.theta * 180) / Math.PI;
    node.style.transform = `translateY(${card.ring * unit}px) rotateY(${deg}deg) translateZ(${-radius}px) scale(1.15)`;
  }

  function onLeave(index: number) {
    if (hover.current === index) hover.current = -1;
    const node = cardsRef.current[index];
    const card = cards[index];
    const { unit, radius } = metrics.current;
    if (!node || !radius) return;
    const deg = (card.theta * 180) / Math.PI;
    node.style.transform = `translateY(${card.ring * unit}px) rotateY(${deg}deg) translateZ(${-radius}px) scale(1)`;
  }

  const faces = [
    "/reviews/reviewer-welder.jpg",
    "/reviews/reviewer-electrician.jpg",
    "/reviews/reviewer-employer.jpg",
    "/reviews/reviewer-trainer.jpg",
    "/reviews/reviewer-assessor.jpg",
  ];

  return (
    <>
    <section className="review-trust" aria-label="Reviews">
      <div className="review-faces">
        {faces.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </div>
      <h2>{t.reviews.trusted}</h2>
    </section>
    <section
      className="review-field"
      ref={sectionRef}
      onPointerMove={onMove}
      onPointerDown={onDown}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onPointerLeave={() => {
        pointer.current.x = 0;
        pointer.current.y = 0;
        dragging.current = false;
      }}
    >
      <div className="review-rig" ref={rigRef}>
        {cards.map((card, index) => (
          <article
            key={card.key}
            className={`review-card ${card.look}`}
            ref={(node) => {
              cardsRef.current[index] = node;
            }}
            onPointerEnter={() => onEnter(index)}
            onPointerLeave={() => onLeave(index)}
          >
            {card.look === "photo" ? (
              <>
                <img className="review-cover" src={card.src} alt="" />
                <img className="review-face" src={card.face} alt="" />
                <div className="review-cover-copy">
                  <span>{card.tag}</span>
                  <p>{card.quote}</p>
                  <small>
                    {card.skill} · {card.role}
                  </small>
                </div>
              </>
            ) : (
              <>
                <header>
                  <img className="review-face" src={card.face} alt="" />
                  <strong>{card.skill}</strong>
                  <span>{card.tag}</span>
                </header>
                <img className="review-shot" src={card.src} alt="" />
                <p>{card.quote}</p>
                <small>{card.role}</small>
              </>
            )}
          </article>
        ))}
      </div>
      <div className="review-fade review-fade-top" />
      <div className="review-fade review-fade-bottom" />
    </section>
    </>
  );
}
