"use client";

import { useMemo, useState, type FormEvent } from "react";
import { findCertificate, type CertificateRecord } from "@/lib/certificates";
import { useLanguage } from "./LanguageProvider";

function ResultCard({
  record,
  labels,
}: {
  record: CertificateRecord;
  labels: {
    profile: string;
    institute: string;
    score: string;
    scoreNote: string;
    timeline: string;
    watch: string;
  };
}) {
  return (
    <article className="verify-result" data-reveal>
      <header>
        <p className="kicker">{labels.profile}</p>
        <h2>{record.holder}</h2>
        <p>
          <strong>{labels.institute}:</strong> {record.institute}
        </p>
        <p className="verify-trade">{record.trade}</p>
      </header>
      <div className="verify-score">
        <span>{labels.score}</span>
        <strong>
          {record.score}
          <small>/100</small>
        </strong>
        <em>{labels.scoreNote}</em>
      </div>
      <div className="verify-timeline">
        <h3>{labels.timeline}</h3>
        <ol>
          {record.modules.map((module) => (
            <li key={`${module.week}-${module.label}`}>
              <div>
                <span>
                  Week {module.week}: {module.label}
                </span>
                <strong>{module.score}/100</strong>
              </div>
              <button type="button" className="button button-line" disabled>
                {labels.watch}
              </button>
            </li>
          ))}
        </ol>
      </div>
      <footer className="credential-id">{record.id}</footer>
    </article>
  );
}

export function VerifyPortal({ initialId = "" }: { initialId?: string }) {
  const { t } = useLanguage();
  const [query, setQuery] = useState(initialId);
  const [searched, setSearched] = useState(initialId.trim().toUpperCase());

  const match = useMemo(
    () => (searched ? findCertificate(searched) : undefined),
    [searched],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearched(query.trim().toUpperCase());
  }

  return (
    <div className="verify-portal">
      <form className="lookup-form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="certificate-id">{t.verifyPage.label}</label>
          <input
            id="certificate-id"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.verifyPage.placeholder}
            spellCheck={false}
            autoCapitalize="characters"
          />
        </div>
        <button type="submit" className="button button-ink">
          {t.verifyPage.submit}
        </button>
      </form>

      {searched && match ? (
        <ResultCard
          record={match}
          labels={{
            profile: t.verifyPage.profile,
            institute: t.verifyPage.institute,
            score: t.verifyPage.score,
            scoreNote: t.verifyPage.scoreNote,
            timeline: t.verifyPage.timeline,
            watch: t.verifyPage.watch,
          }}
        />
      ) : null}

      {searched && !match ? <p className="empty">{t.verifyPage.empty}</p> : null}

      {!searched ? (
        <ul className="verify-samples">
          {["GSAC-2026-WELD-8841", "GSAC-2026-PLUMB-3310", "GSAC-2026-FORK-1204"].map((id) => (
            <li key={id}>
              <button
                type="button"
                className="chip"
                onClick={() => {
                  setQuery(id);
                  setSearched(id);
                }}
              >
                {id}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
