"use client";

import { FaqAccordion } from "@/components/FaqAccordion";
import { faqGroups } from "@/lib/faq";

export function HelpCentre() {
  return (
    <div className="help-faq">
      {faqGroups.map((group) => (
        <section key={group.title}>
          <h2>{group.title}</h2>
          <FaqAccordion items={group.items} />
        </section>
      ))}
    </div>
  );
}
