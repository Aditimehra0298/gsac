"use client";

import { AppFlowSection } from "@/components/home/AppFlowSection";
import { AudienceSplit } from "@/components/home/AudienceSplit";
import { CompanyLeadForm } from "@/components/home/CompanyLeadForm";
import { EvidenceStudio } from "@/components/home/EvidenceStudio";
import { FaqList } from "@/components/home/FaqList";
import { GlobeCta } from "@/components/home/GlobeCta";
import { HeroStage } from "@/components/home/HeroStage";
import { PainPointCalendar } from "@/components/home/PainPointCalendar";
import { ReviewField } from "@/components/home/ReviewField";
import { SkillsGallery } from "@/components/home/SkillsGallery";
import { StoryPhone } from "@/components/home/StoryPhone";
import { useLanguage } from "@/components/LanguageProvider";

export function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <HeroStage />
      <EvidenceStudio />
      <SkillsGallery />

      <section className="story story-with-phone" data-reveal>
        <img className="story-bg" src="/sections/story-work.jpg" alt="" />
        <div className="story-shade" />
        <div className="wrap story-split">
          <div className="story-copy">
            <p className="kicker">{t.story.kicker}</p>
            <h2>{t.story.title}</h2>
            <a
              className="button"
              href="https://assessment.sftlms.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.story.cta}
            </a>
          </div>
          <StoryPhone />
        </div>
      </section>

      <AppFlowSection />

      <AudienceSplit />

      <div id="challenges">
        <PainPointCalendar />
      </div>

      <section className="opportunity" data-reveal>
        <img src="/sections/crew.jpg" alt="" />
        <div className="story-shade" />
        <div className="wrap opportunity-split" id="client-intake">
          <div className="story-copy">
            <h2>{t.opportunity.title}</h2>
            <p>{t.opportunity.text}</p>
          </div>
          <CompanyLeadForm />
        </div>
      </section>

      <ReviewField />
      <FaqList />
      <GlobeCta />
    </>
  );
}
