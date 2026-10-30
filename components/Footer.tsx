"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

function FooterNavLink({ link }: { link: FooterLink }) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer">
        {link.label}
      </a>
    );
  }
  return <Link href={link.href}>{link.label}</Link>;
}

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />

      <div className="wrap footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              className="footer-logo"
              src="/brand/gsac-logo-footer.png?v=3"
              alt="GSAC"
              width={380}
              height={156}
              decoding="async"
            />
            <p className="footer-org">{t.footer.orgName}</p>
            <h2 className="footer-headline">{t.footer.headline}</h2>
            <p className="footer-statement">{t.footer.statement}</p>
            <div className="footer-cta">
              <Link href="/for-institutes" className="footer-cta-primary">
                {t.footer.accessLinks[0].label}
              </Link>
              <Link href="/verify" className="footer-cta-ghost">
                {t.footer.quickLinks.find((l) => l.href === "/verify")?.label ?? "Verify"}
              </Link>
            </div>
          </div>

          <nav className="footer-col" aria-label={t.footer.quickLinksTitle}>
            <h3>{t.footer.quickLinksTitle}</h3>
            <ul>
              {t.footer.quickLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <FooterNavLink link={link} />
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label={t.footer.accessTitle}>
            <h3>{t.footer.accessTitle}</h3>
            <ul>
              {t.footer.accessLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <FooterNavLink link={link} />
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label={t.footer.policiesTitle}>
            <h3>{t.footer.policiesTitle}</h3>
            <ul>
              {t.footer.policyLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <FooterNavLink link={link} />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-base">
          <p>
            © {year} GSAC. {t.footer.rights}
          </p>
          <p className="footer-base-note">{t.footer.orgName}</p>
        </div>
      </div>
    </footer>
  );
}
