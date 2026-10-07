import type { Metadata } from "next";
import { CompaniesBoard } from "@/components/home/CompaniesBoard";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Company data",
  description: "GSAC control view for all client companies, learners, evidence, and certificates.",
};

export default function CompaniesPage() {
  return (
    <>
      <PageHero
        kicker="GSAC"
        title="Company data"
        lede="One place to handle every client company's training records, evidence, reviews, and credentials."
      />
      <CompaniesBoard />
    </>
  );
}
