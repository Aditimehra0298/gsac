import type { Metadata } from "next";
import { DomainExplorer } from "@/components/DomainExplorer";
import { PageHero } from "@/components/PageHero";
import { domains } from "@/lib/content";

export const metadata: Metadata = {
  title: "Assessments",
  description:
    "GSAC skill domains and the competencies each standard covers, from digital work to public service.",
};

export default function AssessmentsPage() {
  return (
    <>
      <PageHero page="assessments" />
      <section className="section" data-reveal>
        <div className="wrap">
          <DomainExplorer domains={domains} />
        </div>
      </section>
    </>
  );
}
