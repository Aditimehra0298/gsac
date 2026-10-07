"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

function DigitRoll({ value, play }: { value: string; play: boolean }) {
  return (
    <span className="odometer" aria-label={value}>
      {value.split("").map((digit, index) => (
        <span className="odometer-window" key={`${digit}-${index}`} aria-hidden="true">
          <span
            className="odometer-strip"
            style={{ transform: play ? `translateY(-${digit}em)` : "translateY(0)" }}
          >
            {Array.from({ length: 10 }, (_, number) => (
              <span key={number}>{number}</span>
            ))}
          </span>
        </span>
      ))}
    </span>
  );
}

export function CountStats() {
  const ref = useRef<HTMLElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlay(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setPlay(true);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stat-band" ref={ref} data-reveal>
      <div className="wrap">
        <p className="kicker">In public</p>
        <h2>The shape of the council, counted plainly.</h2>
        <ul className="stat-row">
          {stats.map((item) => (
            <li key={item.label}>
              <DigitRoll value={item.value} play={play} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
