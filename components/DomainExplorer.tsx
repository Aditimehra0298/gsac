"use client";

import { useMemo, useState } from "react";
import type { Domain } from "@/lib/content";

export function DomainExplorer({ domains }: { domains: Domain[] }) {
  const [query, setQuery] = useState("");
  const [code, setCode] = useState("all");

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return domains.filter((domain) => {
      if (code !== "all" && domain.code !== code) return false;
      if (!needle) return true;
      const haystack = [domain.name, domain.code, domain.summary, domain.sampleStandard, ...domain.focus]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [code, domains, query]);

  return (
    <div className="explorer">
      <div className="explorer-tools">
        <div className="field">
          <label htmlFor="domain-search">Search domains</label>
          <input
            id="domain-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try data, care, language, audit…"
            type="search"
          />
        </div>
        <div className="chips" role="group" aria-label="Filter by domain">
          <button
            type="button"
            className="chip"
            aria-pressed={code === "all"}
            onClick={() => setCode("all")}
          >
            All domains
          </button>
          {domains.map((domain) => (
            <button
              key={domain.code}
              type="button"
              className="chip"
              aria-pressed={code === domain.code}
              onClick={() => setCode(domain.code)}
            >
              {domain.name}
            </button>
          ))}
        </div>
      </div>
      <p className="result-count">
        {results.length} {results.length === 1 ? "domain" : "domains"}
      </p>
      {results.length === 0 ? (
        <p className="empty">No domain matches that search. Try a skill, such as audit, care, or software.</p>
      ) : (
        <div className="card-grid">
          {results.map((domain) => (
            <article key={domain.code} id={domain.code} className="domain-card">
              <p className="code">{domain.code}</p>
              <h2>{domain.name}</h2>
              <p>{domain.summary}</p>
              <h3>Competencies</h3>
              <ul className="ticks">
                {domain.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <blockquote>{domain.sampleStandard}</blockquote>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
