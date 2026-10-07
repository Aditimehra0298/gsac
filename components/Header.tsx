"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Arrow } from "./Arrow";
import { useLanguage } from "./LanguageProvider";
import type { Locale } from "@/lib/i18n/dictionaries";

export function Header() {
  const pathname = usePathname();
  const { t, locale, setLocale } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/framework", label: t.nav.howItWorks },
    { href: "/recognition", label: t.nav.forEmployers },
    { href: "/assessments", label: t.nav.resources },
  ];

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function switchLocale(next: Locale) {
    setLocale(next);
  }

  return (
    <header className={`site-header${scrolled || mobileOpen ? " is-solid" : ""}`}>
      <div className="wrap header-inner">
        <Link href="/" className="brand-lockup">
          <Globe />
          <span>
            <strong>{t.brand.short}</strong>
            <small>{t.brand.full}</small>
          </span>
        </Link>
        <nav className="desk-nav" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-tools">
          <div className="lang-switch" role="group" aria-label={t.lang.label}>
            <button
              type="button"
              className={locale === "en" ? "is-on" : undefined}
              onClick={() => switchLocale("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={locale === "nl" ? "is-on" : undefined}
              onClick={() => switchLocale("nl")}
            >
              NL
            </button>
          </div>
          <Link href="/assessments" className="button button-line verify">
            {t.nav.getVerified} <Arrow />
          </Link>
          <button
            type="button"
            className={mobileOpen ? "menu-toggle is-open" : "menu-toggle"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span />
            <span />
            <span className="sr-only">{mobileOpen ? t.nav.closeMenu : t.nav.openMenu}</span>
          </button>
        </div>
      </div>
      {mobileOpen ? (
        <div id="mobile-nav" className="mobile-panel">
          <nav>
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <div className="lang-switch lang-switch-mobile" role="group" aria-label={t.lang.label}>
              <button
                type="button"
                className={locale === "en" ? "is-on" : undefined}
                onClick={() => switchLocale("en")}
              >
                English
              </button>
              <button
                type="button"
                className={locale === "nl" ? "is-on" : undefined}
                onClick={() => switchLocale("nl")}
              >
                Nederlands
              </button>
            </div>
            <Link href="/assessments" className="button button-ink">
              {t.nav.getVerified} <Arrow />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function Globe() {
  return (
    <svg className="globe" width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
      <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="18" cy="18" rx="7" ry="16" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M2 18h32M18 2c4.2 3.6 6.4 9 6.4 16S22.2 30.4 18 34C13.8 30.4 11.6 25 11.6 18S13.8 5.6 18 2z" fill="none" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}
