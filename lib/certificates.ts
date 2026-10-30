export type ModuleEvidence = {
  week: number;
  label: string;
  score: number;
};

export type CertificateRecord = {
  id: string;
  holder: string;
  institute: string;
  trade: string;
  score: number;
  issued: string;
  modules: ModuleEvidence[];
};

/** Phase 1 specimen certificates for the public verification portal. */
export const certificates: CertificateRecord[] = [
  {
    id: "GSAC-2026-WELD-8841",
    holder: "Maya Ortiz",
    institute: "North Harbour Trade Academy",
    trade: "Structural Welding",
    score: 94,
    issued: "14 September 2026",
    modules: [
      { week: 3, label: "Fitment", score: 91 },
      { week: 7, label: "TIG Seam Integrity", score: 96 },
      { week: 12, label: "Final High-Pressure Assembly", score: 95 },
    ],
  },
  {
    id: "GSAC-2026-PLUMB-3310",
    holder: "Jonas Vermeer",
    institute: "Lowlands Vocational Institute",
    trade: "Industrial Plumbing",
    score: 88,
    issued: "2 October 2026",
    modules: [
      { week: 2, label: "Pipe Preparation", score: 86 },
      { week: 6, label: "Pressure Testing", score: 90 },
      { week: 10, label: "Safety Isolation Protocol", score: 89 },
    ],
  },
  {
    id: "GSAC-2026-FORK-1204",
    holder: "Amina Diallo",
    institute: "Gulf Skills Centre",
    trade: "Forklift Operations",
    score: 91,
    issued: "28 August 2026",
    modules: [
      { week: 1, label: "Pre-Shift Inspection", score: 93 },
      { week: 4, label: "Load Stability", score: 90 },
      { week: 8, label: "Live Protocol Log", score: 90 },
    ],
  },
];

export function findCertificate(query: string): CertificateRecord | undefined {
  const id = query.trim().toUpperCase();
  return certificates.find((record) => record.id === id);
}
