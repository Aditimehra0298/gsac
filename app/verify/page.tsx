"use client";

import { PageHero } from "@/components/PageHero";
import { VerifyPortal } from "@/components/VerifyPortal";
import { useLanguage } from "@/components/LanguageProvider";

export default function VerifyPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero page="verify" kicker={t.verifyPage.kicker} title={t.verifyPage.title} lede={t.verifyPage.lede} />
      <section className="section section-muted" data-reveal>
        <div className="wrap narrow">
          <VerifyPortal />
        </div>
      </section>
    </>
  );
}
