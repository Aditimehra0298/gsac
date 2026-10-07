"use client";

import Link from "next/link";
import { domains } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="wordmark">GSAC</p>
          <p>{t.footer.statement}</p>
        </div>
        <div>
          <h2>{t.footer.council}</h2>
          <ul>
            <li><Link href="/about">{t.footer.about}</Link></li>
            <li><Link href="/framework">{t.footer.framework}</Link></li>
            <li><Link href="/recognition">{t.footer.recognition}</Link></li>
            <li><Link href="/help">{t.footer.help}</Link></li>
            <li><Link href="/contact">{t.footer.secretariat}</Link></li>
          </ul>
        </div>
        <div>
          <h2>{t.footer.assessments}</h2>
          <ul>
            {domains.slice(0, 4).map((domain) => (
              <li key={domain.code}>
                <Link href={`/assessments#${domain.code}`}>{domain.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{t.footer.moreDomains}</h2>
          <ul>
            {domains.slice(4).map((domain) => (
              <li key={domain.code}>
                <Link href={`/assessments#${domain.code}`}>{domain.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footer-word" aria-hidden="true">GSAC</p>
      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} {t.brand.full}</p>
        <p>{t.footer.tagline}</p>
      </div>
    </footer>
  );
}
