import type { Metadata } from "next";
import { AudiencePage } from "@/components/AudiencePage";

export const metadata: Metadata = {
  title: "For Employers",
  description:
    "Verify candidate trade credentials instantly and watch authenticated video performance logs before you hire.",
};

export default function ForEmployersPage() {
  return <AudiencePage kind="employers" />;
}
