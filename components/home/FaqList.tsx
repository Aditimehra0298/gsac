"use client";

import { FaqAccordion } from "@/components/FaqAccordion";
import { useLanguage } from "@/components/LanguageProvider";
import { getHomeFaqs } from "@/lib/i18n/faq";

export function FaqList() {
  const { locale, t } = useLanguage();
  return (
    <section className="faq-band" aria-label={t.faq.title}>
      <FaqAccordion items={getHomeFaqs(locale)} moreHref="/help" moreLabel={t.faq.more} />
    </section>
  );
}
