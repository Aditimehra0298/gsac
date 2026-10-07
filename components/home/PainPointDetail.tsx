"use client";

import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { useLanguage } from "@/components/LanguageProvider";
import { getPainPoint, getPainPointImage, getPainPoints } from "@/lib/i18n/pain-points";

export function PainPointDetail({ id }: { id: string }) {
  const { t, locale } = useLanguage();
  const points = getPainPoints(locale);
  const point = getPainPoint(locale, id) ?? points[0];
  const index = Math.max(0, points.findIndex((item) => item.id === id));
  const prev = points[(index - 1 + points.length) % points.length];
  const next = points[(index + 1) % points.length];
  const image = getPainPointImage(id, index);

  return (
    <>
      <section className="pain-detail-hero" style={{ backgroundImage: `url(${image})` }}>
        <div className="pain-detail-shade" />
        <div className="wrap">
          <Link href="/#challenges" className="pain-detail-back">
            ← {t.pain.back}
          </Link>
          <p className="kicker">
            {String(index + 1).padStart(2, "0")} / {String(points.length).padStart(2, "0")}
          </p>
          <h1>{point.title}</h1>
          <p className="lede">{point.label}</p>
        </div>
      </section>

      <section className="section pain-detail-body">
        <div className="wrap pain-detail-grid">
          <article>
            <p className="pain-panel-kicker">{t.pain.problemLabel}</p>
            <p>{point.problem}</p>
          </article>
          <article className="pain-solve-box">
            <p className="pain-panel-kicker solve">{t.pain.solveLabel}</p>
            <p className="pain-solve">{point.solution}</p>
            <a
              className="button"
              href="https://assessment.sftlms.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.pain.detailCta} <Arrow />
            </a>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap pain-detail-nav">
          <Link href={`/challenges/${prev.id}`} className="pain-detail-link">
            <span>← Prev</span>
            <strong>{prev.label}</strong>
          </Link>
          <Link href={`/challenges/${next.id}`} className="pain-detail-link next">
            <span>Next →</span>
            <strong>{next.label}</strong>
          </Link>
        </div>
      </section>
    </>
  );
}
