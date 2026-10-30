"use client";

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent, type PointerEvent } from "react";
import { Arrow } from "../Arrow";
import { useLanguage } from "../LanguageProvider";

type Device = "phone" | "laptop";

type Frame = {
  src: string;
  alt: string;
  device?: Device;
};

/**
 * Each item is its own device frame.
 * Replace images in /public/sections/phone-frames
 */
const frames: Frame[] = [
  { src: "/sections/phone-frames/06-custom.png?v=5", alt: "SFT app" },
  { src: "/sections/phone-frames/01-login.png?v=2", alt: "Institute login" },
  { src: "/sections/phone-frames/03b-login-demo.jpg?v=2", alt: "Demo login" },
  { src: "/sections/phone-frames/04b-home.png?v=2", alt: "Home" },
  { src: "/sections/phone-frames/05b-course.png?v=2", alt: "Course" },
  { src: "/sections/phone-frames/05c-course-active.png", alt: "Course · Active" },
  { src: "/sections/phone-frames/05d-course-not-active.png", alt: "Course · Not active" },
  { src: "/sections/phone-frames/05e-course-draft.png", alt: "Course · Draft" },
  { src: "/sections/phone-frames/05f-approved.png", alt: "Approved" },
  { src: "/sections/phone-frames/06b-student.png?v=2", alt: "Student" },
  { src: "/sections/phone-frames/07b-training.png?v=2", alt: "Training details" },
  { src: "/sections/phone-frames/08b-pathway.png?v=2", alt: "Weekly pathway" },
  { src: "/sections/phone-frames/08c-certificate.png", alt: "Certificate" },
  { src: "/sections/phone-frames/08d-students-list.png", alt: "Students" },
  { src: "/sections/phone-frames/09b-profile.jpg?v=2", alt: "Institute profile" },
  { src: "/sections/phone-frames/10b-videos.png?v=3", alt: "Upload videos" },
  {
    src: "/sections/phone-frames/11b-companies.jpg?v=3",
    alt: "Company management",
    device: "laptop",
  },
];

const ASSESSMENT_URL = "https://assessment.sftlms.com/";
const GAP = 16;

function deviceOf(frame: Frame): Device {
  return frame.device ?? "phone";
}

export function StoryPhone() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [railW, setRailW] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const startActive = useRef(0);
  const moved = useRef(false);

  const phoneW = railW > 0 ? Math.max(240, Math.floor((railW - GAP * 2) / 2.55)) : 300;
  const laptopW = railW > 0 ? Math.max(680, Math.floor(railW + 40)) : 760;

  function sizeOf(frame: Frame) {
    return deviceOf(frame) === "laptop" ? laptopW : phoneW;
  }

  function strideOf(frame: Frame) {
    return sizeOf(frame) + GAP;
  }

  function offsetAt(index: number) {
    let x = 0;
    for (let i = 0; i < index; i++) x += strideOf(frames[i]);
    return x;
  }

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const update = () => setRailW(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  function nearestIndex(from: number, delta: number) {
    const target = offsetAt(from) - delta;
    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i < frames.length; i++) {
      const dist = Math.abs(offsetAt(i) - target);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    }
    return Math.max(0, Math.min(frames.length - 1, best));
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    startX.current = event.clientX;
    startActive.current = active;
    moved.current = false;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    const delta = event.clientX - startX.current;
    if (Math.abs(delta) > 6) moved.current = true;
    setDragX(delta);
  }

  function onPointerUp() {
    if (!dragging) return;
    setActive(nearestIndex(startActive.current, dragX));
    setDragX(0);
    setDragging(false);
  }

  function onOpen(event: MouseEvent<HTMLAnchorElement>) {
    if (moved.current) {
      event.preventDefault();
      moved.current = false;
    }
  }

  // Left-align active frame so three phones fill the rail with no empty left gap.
  const offset = -offsetAt(active) + dragX;

  return (
    <div
      className="story-phones"
      style={
        {
          "--phone-w": `${phoneW}px`,
          "--laptop-w": `${laptopW}px`,
          "--phone-gap": `${GAP}px`,
        } as CSSProperties
      }
    >
      <div
        ref={railRef}
        className={dragging ? "phone-rail is-dragging" : "phone-rail"}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="phone-track"
          style={{
            transform: `translate3d(${offset}px, 0, 0)`,
            transition: dragging ? "none" : "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {frames.map((frame, index) => {
            const device = deviceOf(frame);
            const activeClass = index === active ? " is-active" : "";
            return (
              <a
                key={frame.src}
                className={`phone-unit is-${device}${activeClass}`}
                href={ASSESSMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onOpen}
                draggable={false}
              >
                <span className="phone-unit-shell">
                  <span className="phone-unit-screen">
                    <img
                      className="phone-frame-shot"
                      src={frame.src}
                      alt={frame.alt}
                      draggable={false}
                    />
                  </span>
                </span>
                {device === "laptop" ? <span className="laptop-base" aria-hidden /> : null}
                <span className="phone-unit-label">{frame.alt}</span>
              </a>
            );
          })}
        </div>
      </div>
      <div className="phone-dots" role="tablist" aria-label="Product frames">
        {frames.map((frame, index) => (
          <button
            key={frame.src}
            type="button"
            role="tab"
            aria-label={frame.alt}
            aria-selected={index === active}
            className={index === active ? "is-active" : undefined}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
      <p className="phone-hint">{t.story.swipe}</p>
      <a className="phone-open" href={ASSESSMENT_URL} target="_blank" rel="noopener noreferrer">
        {t.story.open} <Arrow />
      </a>
    </div>
  );
}
