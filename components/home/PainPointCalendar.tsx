"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { useLanguage } from "../LanguageProvider";
import { getPainPointImage, getPainPoints } from "@/lib/i18n/pain-points";

type FlipDir = "next" | "prev" | null;

function FlipPageContent({
  index,
  title,
  label,
  problem,
  problemLabel,
  image,
  showOpen,
  openLabel,
  href,
}: {
  index: number;
  title: string;
  label: string;
  problem: string;
  problemLabel: string;
  image: string;
  showOpen?: boolean;
  openLabel?: string;
  href?: string;
}) {
  return (
    <>
      <div className="pain-flip-photo" style={{ backgroundImage: `url(${image})` }}>
        <span className="pain-cal-shade" />
        <span className="pain-cal-num">{String(index + 1).padStart(2, "0")}</span>
        <span className="pain-cal-label">{label}</span>
      </div>
      <div className="pain-flip-copy">
        <p className="pain-panel-kicker">{problemLabel}</p>
        <strong>{title}</strong>
        <p>{problem}</p>
        {showOpen && href && openLabel ? (
          <Link href={href} className="pain-flip-open">
            {openLabel} →
          </Link>
        ) : null}
      </div>
    </>
  );
}

export function PainPointCalendar() {
  const { t, locale } = useLanguage();
  const points = getPainPoints(locale);
  const count = points.length;
  const [active, setActive] = useState(0);
  const [outgoing, setOutgoing] = useState<number | null>(null);
  const [dir, setDir] = useState<FlipDir>(null);
  const [busy, setBusy] = useState(false);
  const timerRef = useRef(0);
  const touchRef = useRef<{ x: number; y: number; moved: boolean } | null>(null);
  const busyRef = useRef(false);
  const activeRef = useRef(0);

  useEffect(() => {
    setActive(0);
    setOutgoing(null);
    setDir(null);
    setBusy(false);
  }, [locale]);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  useEffect(() => {
    busyRef.current = busy;
  }, [busy]);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  function flipTo(nextIndex: number, direction: Exclude<FlipDir, null>) {
    if (busyRef.current || nextIndex === activeRef.current) return;
    setBusy(true);
    setOutgoing(activeRef.current);
    setDir(direction);
    setActive(nextIndex);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setOutgoing(null);
      setDir(null);
      setBusy(false);
    }, 620);
  }

  function step(stepDir: -1 | 1) {
    const nextIndex = (activeRef.current + stepDir + count) % count;
    flipTo(nextIndex, stepDir === 1 ? "next" : "prev");
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;
    touchRef.current = { x: event.clientX, y: event.clientY, moved: false };
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const start = touchRef.current;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) > 10 || Math.abs(dy) > 10) start.moved = true;
  }

  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const start = touchRef.current;
    touchRef.current = null;
    if (!start || busyRef.current) return;

    const target = event.target as HTMLElement | null;
    if (target?.closest("a, button")) return;

    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;

    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
      step(dx < 0 ? 1 : -1);
      return;
    }

    if (!start.moved) step(1);
  }

  function onPointerCancel() {
    touchRef.current = null;
  }

  const current = points[active] ?? points[0];
  const under = points[(active + 1) % count] ?? points[0];
  const flipping = outgoing !== null && dir !== null;
  const topPoint = flipping ? points[outgoing] : current;
  const topIndex = flipping ? outgoing : active;

  return (
    <section className="pain-cal" data-reveal>
      <div className="wrap">
        <div className="pain-head">
          <p className="kicker">{t.pain.kicker}</p>
          <h2>{t.pain.title}</h2>
          <p className="lede">{t.pain.lede}</p>
          <ul className="pain-chips" aria-label={t.pain.kicker}>
            {t.pain.industryChips.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </div>

        <div className="pain-flip-layout">
          <div className="pain-flip-stage" aria-live="polite">
            <div className="pain-flip-binder" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div
              className="pain-flip-stack"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
              role="button"
              tabIndex={0}
              aria-label={`${topPoint.title}. Touch or swipe to flip.`}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === " ") {
                  event.preventDefault();
                  step(1);
                }
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  step(-1);
                }
              }}
            >
              <div className="pain-flip-page is-under">
                <FlipPageContent
                  index={(active + 1) % count}
                  title={under.title}
                  label={under.label}
                  problem={under.problem}
                  problemLabel={t.pain.problemLabel}
                  image={getPainPointImage(under.id, (active + 1) % count)}
                />
              </div>

              {flipping && (
                <div className="pain-flip-page is-incoming">
                  <FlipPageContent
                    index={active}
                    title={current.title}
                    label={current.label}
                    problem={current.problem}
                    problemLabel={t.pain.problemLabel}
                    image={getPainPointImage(current.id, active)}
                  />
                </div>
              )}

              <div
                className={[
                  "pain-flip-page is-top",
                  flipping ? `is-flipping is-flipping-${dir}` : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <FlipPageContent
                  index={topIndex}
                  title={topPoint.title}
                  label={topPoint.label}
                  problem={topPoint.problem}
                  problemLabel={t.pain.problemLabel}
                  image={getPainPointImage(topPoint.id, topIndex)}
                  showOpen={!flipping}
                  openLabel={t.pain.open}
                  href={`/challenges/${topPoint.id}`}
                />
              </div>
            </div>

            <div className="pain-flip-controls">
              <button type="button" onClick={() => step(-1)} disabled={busy} aria-label="Previous page">
                ← Flip
              </button>
              <span>
                {active + 1} / {count}
              </span>
              <button type="button" onClick={() => step(1)} disabled={busy} aria-label="Next page">
                Flip →
              </button>
            </div>
          </div>

          <aside className="pain-solve-panel" key={current.id}>
            <p className="pain-solve-brand">GSAC</p>
            <p className="pain-panel-kicker solve">{t.pain.solveLabel}</p>
            <h3>{current.title}</h3>
            <p className="pain-solve">{current.solution}</p>
            <Link href={`/challenges/${current.id}`} className="button">
              {t.pain.open}
            </Link>
          </aside>
        </div>

        <div className="pain-cal-grid" role="list" aria-label={t.pain.hubTitle}>
          {points.map((point, index) =>
            index === active ? (
              <Link
                key={point.id}
                href={`/challenges/${point.id}`}
                className="pain-cal-cell is-active"
                role="listitem"
                style={{ backgroundImage: `url(${getPainPointImage(point.id, index)})` }}
                aria-current="true"
                aria-label={`${point.label}. ${t.pain.open}`}
              >
                <span className="pain-cal-shade" aria-hidden="true" />
                <span className="pain-cal-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="pain-cal-label">{point.label}</span>
              </Link>
            ) : (
              <button
                key={point.id}
                type="button"
                className="pain-cal-cell"
                role="listitem"
                style={{ backgroundImage: `url(${getPainPointImage(point.id, index)})` }}
                onClick={() => flipTo(index, index > active ? "next" : "prev")}
                aria-label={point.label}
              >
                <span className="pain-cal-shade" aria-hidden="true" />
                <span className="pain-cal-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="pain-cal-label">{point.label}</span>
              </button>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
