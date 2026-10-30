import type { Metadata } from "next";
import { AudiencePage } from "@/components/AudiencePage";

export const metadata: Metadata = {
  title: "For Institutes",
  description:
    "Join GSAC as a member training institute. Digital assessment infrastructure, AI evaluation, and QR-verifiable skill credentials.",
};

export default function ForInstitutesPage() {
  return <AudiencePage kind="institutes" />;
}
