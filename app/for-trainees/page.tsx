import type { Metadata } from "next";
import { AudiencePage } from "@/components/AudiencePage";

export const metadata: Metadata = {
  title: "For Trainees",
  description:
    "Enroll at an accredited GSAC member centre and graduate with a QR Skill Passport employers can trust.",
};

export default function ForTraineesPage() {
  return <AudiencePage kind="trainees" />;
}
