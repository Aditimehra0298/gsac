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
    { href: "/for-institutes", label: t.nav.forEmployers },
    { href: "/verify", label: t.nav.resources },
    { href: "/contact", label: t.nav.contact },
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
        <Link href="/" className="brand-lockup" aria-label={t.brand.short}>
          <img className="brand-logo" src="/brand/gsac-logo.png" alt={t.brand.short} />
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
          <button type="button" className="header-search" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
              <path d="m16.2 16.2 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </button>
          <Link href="https://assessment.sftlms.com/" className="button button-line verify" target="_blank" rel="noopener noreferrer">
            {t.nav.login}
          </Link>
          <Link href="/for-institutes" className="button">
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
            <Link href="https://assessment.sftlms.com/" className="button button-line" target="_blank" rel="noopener noreferrer">
              {t.nav.login}
            </Link>
            <Link href="/for-institutes" className="button button-ink">
              {t.nav.getVerified} <Arrow />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

