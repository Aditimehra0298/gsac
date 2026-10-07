"use client";

import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { useLanguage } from "@/components/LanguageProvider";

export function AudienceSplit() {
  const { t } = useLanguage();
  const a = t.audiences;

  return (
    <section className="how-work" data-reveal aria-label={a.howKicker}>
      <div className="audiences">
        <Link href="/#client-intake" className="audience audience-link">
          <img className="audience-pic" src="/sections/how-work-clients.jpg" alt="" />
          <span className="audience-shade" aria-hidden="true" />
          <span>{a.clients}</span>
          <h2>{a.clientsTitle}</h2>
          <em>
            {a.clientsCta} <Arrow />
          </em>
        </Link>

        <Link href="/companies" className="audience audience-link">
          <img className="audience-pic" src="/sections/how-work-gsac.jpg" alt="" />
          <span className="audience-shade" aria-hidden="true" />
          <span>{a.gsac}</span>
          <h2>{a.gsacTitle}</h2>
          <em>
            {a.gsacCta} <Arrow />
          </em>
        </Link>
      </div>
    </section>
  );
}
