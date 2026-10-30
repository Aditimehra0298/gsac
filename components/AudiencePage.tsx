"use client";

import Link from "next/link";
import { Arrow } from "./Arrow";
import { PageHero } from "./PageHero";
import { useLanguage } from "./LanguageProvider";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type AudienceKey = "institutes" | "employers" | "trainees";

export function AudiencePage({ kind }: { kind: AudienceKey }) {
  const { t } = useLanguage();
  const pageKey = (
    {
      institutes: "forInstitutes",
      employers: "forEmployers",
      trainees: "forTrainees",
    } as const
  )[kind];
  const copy = t[kind];

  const pillars =
    "pillars" in copy
      ? copy.pillars
      : "steps" in copy
        ? copy.steps.map((step) => ({ title: step.title, text: step.text }))
        : [];

  const secondaryHref =
    kind === "institutes"
      ? "/contact"
      : kind === "employers"
        ? "/contact"
        : "/methodology";
  const primaryHref = kind === "employers" ? "/verify" : kind === "trainees" ? "/for-institutes" : "/contact";

  return (
    <>
      <PageHero page={pageKey as keyof Dictionary["pages"]} />
      <section className="section" data-reveal>
        <div className="wrap">
          <div className="section-head narrow">
            <p className="kicker">{copy.kicker}</p>
            <h2>{copy.title}</h2>
            <p className="lede">{copy.lede}</p>
            <div className="actions">
              <Link className="button" href={primaryHref}>
                {copy.primary} <Arrow />
              </Link>
              <Link className="button button-line" href={secondaryHref}>
                {copy.secondary}
              </Link>
            </div>
          </div>
          {"pillarsTitle" in copy ? (
            <p className="kicker" style={{ marginTop: 48 }}>
              {copy.pillarsTitle}
            </p>
          ) : null}
          {"workflowTitle" in copy ? (
            <p className="kicker" style={{ marginTop: 48 }}>
              {copy.workflowTitle}
            </p>
          ) : null}
          <div className="charter" style={{ marginTop: 16 }}>
            {pillars.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
