import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { HelpCentre } from "@/components/HelpCentre";

export const metadata: Metadata = {
  title: "Help centre",
  description:
    "Answers on video assessment, AI review, human assessment, credentials, verification, employers, training providers, privacy, and support.",
};

export default function HelpPage() {
  return (
    <>
      <PageHero page="help" />
      <section className="faq-band help-band">
        <HelpCentre />
      </section>
    </>
  );
}
