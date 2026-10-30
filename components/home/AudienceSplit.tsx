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
        <Link href="/#client-intake" className="audience audience-link audience-clients">
          <img className="audience-pic" src="/hero/workshop.jpg" alt="" />
          <span className="audience-shade" aria-hidden="true" />
          <div className="audience-visual">
            <img
              className="audience-feature"
              src="/sections/audience-clients-feature.png?v=9"
              alt=""
            />
          </div>
          <div className="audience-copy">
            <span>{a.clients}</span>
            <h2>{a.clientsTitle}</h2>
            <em>
              {a.clientsCta} <Arrow />
            </em>
          </div>
        </Link>

        <Link href="/companies" className="audience audience-link audience-gsac">
          <img className="audience-pic" src="/sections/employer.jpg" alt="" />
          <span className="audience-shade" aria-hidden="true" />
          <div className="audience-visual">
            <img
              className="audience-feature"
              src="/sections/audience-gsac-feature.png?v=9"
              alt=""
            />
          </div>
          <div className="audience-copy">
            <span>{a.gsac}</span>
            <h2>{a.gsacTitle}</h2>
            <em>
              {a.gsacCta} <Arrow />
            </em>
          </div>
        </Link>
      </div>
    </section>
  );
}
