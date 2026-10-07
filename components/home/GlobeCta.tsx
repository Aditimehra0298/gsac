"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useLanguage } from "../LanguageProvider";

type Dot = { x: number; y: number; z: number; phase: number; shell: number };

function sphere(count: number, shell: number): Dot[] {
  return Array.from({ length: count }, (_, index) => {
    const y = 1 - (index / (count - 1)) * 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = Math.PI * (3 - Math.sqrt(5)) * index;
    return {
      x: Math.cos(theta) * radius,
      y,
      z: Math.sin(theta) * radius,
      phase: index * 0.41,
      shell,
    };
  });
}

const dots: Dot[] = [
  ...sphere(1400, 1),
  ...sphere(520, 1.16),
  ...Array.from({ length: 220 }, (_, index) => {
    const theta = (index / 220) * Math.PI * 2;
    return { x: Math.cos(theta), y: 0, z: Math.sin(theta), phase: index * 0.25, shell: 1.34 };
  }),
];

export function GlobeCta() {
  const { t, locale } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let running = true;
    const spin = { x: 0, y: 0 };

    function draw(time: number) {
      if (!running || !canvas || !context) return;
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.floor(rect.width * ratio));
      const height = Math.max(1, Math.floor(rect.height * ratio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      spin.y += (pointer.current.x * 0.9 - spin.y) * 0.06;
      spin.x += (pointer.current.y * 0.6 - spin.x) * 0.06;
      const turn = reduce ? 0.5 : time * 0.00032 + spin.y;
      const tilt = reduce ? 0.2 : 0.18 + spin.x;
      const breathe = reduce ? 1 : 1 + Math.sin(time * 0.0011) * 0.035;
      const sweep = reduce ? 0.2 : Math.sin(time * 0.0008);
      const radius = Math.min(width, height) * 0.42 * breathe;
      context.clearRect(0, 0, width, height);

      const glow = context.createRadialGradient(width / 2, height / 2, radius * 0.05, width / 2, height / 2, radius * 1.15);
      glow.addColorStop(0, "rgba(255,229,0,0.18)");
      glow.addColorStop(0.42, "rgba(255,229,0,0.06)");
      glow.addColorStop(1, "rgba(255,229,0,0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      const painted: { z: number; x: number; y: number; size: number; alpha: number }[] = [];
      for (const point of dots) {
        const speed = point.shell > 1.25 ? -turn * 1.8 : point.shell > 1.05 ? -turn * 0.65 : turn;
        const x1 = point.x * Math.cos(speed) - point.z * Math.sin(speed);
        const z1 = point.x * Math.sin(speed) + point.z * Math.cos(speed);
        const y2 = point.y * Math.cos(tilt) - z1 * Math.sin(tilt);
        const z2 = point.y * Math.sin(tilt) + z1 * Math.cos(tilt);
        const depth = (z2 + 1.2) / 2.2;
        const twinkle = reduce ? 1 : 0.62 + Math.sin(time * 0.004 + point.phase) * 0.38;
        const flash = Math.max(0, 1 - Math.abs(x1 - sweep) * 2.4);
        painted.push({
          z: z2,
          x: width / 2 + x1 * radius * point.shell,
          y: height / 2 + y2 * radius * point.shell,
          size: (0.55 + depth * 1.7 + flash * 1.4) * ratio,
          alpha: Math.min(1, (0.16 + depth * 0.7) * twinkle + flash * 0.45),
        });
      }
      painted.sort((a, b) => a.z - b.z);
      for (const dot of painted) {
        context.fillStyle = `rgba(255,229,0,${dot.alpha})`;
        context.beginPath();
        context.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        context.fill();
      }
      frame = window.requestAnimationFrame(draw);
    }

    frame = window.requestAnimationFrame(draw);
    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      className="globe-cta"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointer.current = {
          x: (event.clientX - bounds.left) / bounds.width - 0.5,
          y: (event.clientY - bounds.top) / bounds.height - 0.5,
        };
      }}
      onPointerLeave={() => {
        pointer.current = { x: 0, y: 0 };
      }}
    >
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="globe-copy">
        <h2>{t.globe.title}</h2>
        <p>
          {locale === "nl"
            ? "Een record van echte skill, overal te controleren."
            : "A record of real skill, ready to be checked anywhere."}
        </p>
        <Link href="/assessments">{t.globe.cta}</Link>
      </div>
    </section>
  );
}
