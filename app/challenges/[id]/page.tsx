import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PainPointDetail } from "@/components/home/PainPointDetail";
import { getPainPoint, painPointIds, type PainPointId } from "@/lib/i18n/pain-points";

export function generateStaticParams() {
  return painPointIds.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const point = getPainPoint("en", id);
  return {
    title: point?.title ?? "Training challenge",
    description: point?.problem.slice(0, 140) ?? "GSAC training industry challenge",
  };
}

export default async function ChallengePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!painPointIds.includes(id as PainPointId)) notFound();
  return <PainPointDetail id={id} />;
}
