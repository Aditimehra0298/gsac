export const council = {
  name: "Global Skills Assessment Council",
  short: "GSAC",
  email: "secretariat@gsac.example",
  statement:
    "GSAC writes competency standards, assesses people against them, and issues credentials that name what someone can do.",
};

export type Domain = {
  code: string;
  name: string;
  summary: string;
  focus: string[];
  sampleStandard: string;
};

export const domains: Domain[] = [
  {
    code: "GSAC-DIG",
    name: "Digital & Data",
    summary:
      "Software, data stewardship, secure systems, and the judgment required when automated tools do part of the work.",
    focus: [
      "Build and maintain reliable software",
      "Handle data with a clear purpose and duty of care",
      "Protect accounts, systems, and information",
      "Use automated tools and still own the result",
    ],
    sampleStandard:
      "A practitioner can change a live service, explain the risk, and leave a record another practitioner can follow.",
  },
  {
    code: "GSAC-ENG",
    name: "Engineering & Built Environment",
    summary:
      "Design, make, install, and maintain the physical systems people rely on, from sites and structures to plant and equipment.",
    focus: [
      "Read and produce technical information",
      "Plan work so that people and the public stay safe",
      "Make, install, or inspect to a stated tolerance",
      "Diagnose faults and choose a sound repair",
    ],
    sampleStandard:
      "A practitioner can inspect a completed piece of work, compare it with the specification, and record what must change.",
  },
  {
    code: "GSAC-HLT",
    name: "Health & Care",
    summary:
      "Practical care, clinical support, and the professional conduct expected where another person's safety is the work.",
    focus: [
      "Provide care that matches a person's needs and wishes",
      "Observe, record, and escalate changes in condition",
      "Work within a defined scope and ask for help in time",
      "Protect privacy, dignity, and infection control",
    ],
    sampleStandard:
      "A practitioner can recognise a deterioration, take the immediate safe action, and hand over a clear account.",
  },
  {
    code: "GSAC-EDU",
    name: "Education & Training",
    summary:
      "Teaching, assessment, and learning design for people who help others build skill, in classrooms and in the workplace.",
    focus: [
      "Plan learning from a clear outcome",
      "Explain difficult ideas in more than one way",
      "Judge evidence of learning fairly",
      "Adapt a session when learners are not yet ready",
    ],
    sampleStandard:
      "A practitioner can assess a performance, name the gap against the standard, and give feedback the learner can use.",
  },
  {
    code: "GSAC-BFA",
    name: "Business, Finance & Administration",
    summary:
      "The work of running organisations: money, records, decisions, service, and the controls that keep them trustworthy.",
    focus: [
      "Keep records that another person can audit",
      "Prepare information that supports a decision",
      "Apply a financial or administrative control",
      "Deal with customers, suppliers, and colleagues plainly",
    ],
    sampleStandard:
      "A practitioner can reconcile a set of records, explain every difference, and escalate the ones that are material.",
  },
  {
    code: "GSAC-GRN",
    name: "Green Skills & Sustainability",
    summary:
      "Work that reduces harm to climate, resources, and living systems, and that can show the difference it claims to make.",
    focus: [
      "Measure resource use and waste with a stated method",
      "Apply a practical change that reduces impact",
      "Read environmental rules that govern the work",
      "Report results without overstating the benefit",
    ],
    sampleStandard:
      "A practitioner can complete a resource audit, propose a change, and estimate the effect with the assumptions visible.",
  },
  {
    code: "GSAC-LAN",
    name: "Languages & Intercultural Communication",
    summary:
      "Using languages at work, across cultures, where misunderstanding has a cost and accuracy matters more than fluency theatre.",
    focus: [
      "Understand and produce workplace language at the claimed level",
      "Interpret meaning, tone, and context",
      "Mediate between people who do not share a language",
      "Handle sensitive subjects with care and precision",
    ],
    sampleStandard:
      "A practitioner can convey a technical instruction from one language to another without adding or dropping a material point.",
  },
  {
    code: "GSAC-PUB",
    name: "Public Service & Governance",
    summary:
      "Service, administration, and decisions made with public authority, where process, fairness, and record-keeping are the skill.",
    focus: [
      "Apply a rule consistently and explain it",
      "Keep a decision record that can be reviewed",
      "Handle personal information with a lawful purpose",
      "Serve people who disagree with the outcome",
    ],
    sampleStandard:
      "A practitioner can make a routine decision against published criteria and write reasons a reviewer can follow.",
  },
];

export const levels = [
  {
    code: "L1",
    name: "Foundation",
    summary:
      "Performs familiar tasks with guidance and uses the language of the domain correctly.",
  },
  {
    code: "L2",
    name: "Practitioner",
    summary:
      "Works independently to the published standard and corrects their own routine work.",
  },
  {
    code: "L3",
    name: "Advanced",
    summary:
      "Handles situations the standard does not spell out, and supports other practitioners.",
  },
  {
    code: "L4",
    name: "Expert",
    summary:
      "Judges hard cases, improves how the work is done, and can help revise the standard.",
  },
];

export const evidence = [
  {
    name: "Knowledge examination",
    summary:
      "Questions drawn from the published standard, so the test follows the standard rather than a single textbook.",
  },
  {
    name: "Performance task",
    summary:
      "Observed work under assessment conditions. The assessor watches what the candidate does, not only what they say.",
  },
  {
    name: "Work portfolio",
    summary:
      "Authenticated pieces of real work, mapped to competencies, with a declaration of what the candidate did themselves.",
  },
  {
    name: "Professional dialogue",
    summary:
      "For Advanced and Expert only. A structured discussion of judgments the candidate has already had to make.",
  },
];

export const principles = [
  {
    name: "Public before the test",
    summary:
      "The competency standard is published first. Candidates and assessors work from the same text.",
  },
  {
    name: "Independent of training",
    summary:
      "A course may prepare someone. The credential is decided by the assessment alone.",
  },
  {
    name: "Local delivery, one standard",
    summary:
      "Assessors work in the candidate's context. Moderation keeps results comparable from place to place.",
  },
  {
    name: "The credential says the skill",
    summary:
      "Each credential names the person, the domain, the level, and the version of the standard.",
  },
  {
    name: "A published path to review",
    summary:
      "Marking can be checked. Appeals follow a route the candidate can read before they sit.",
  },
];

export const process = [
  {
    step: "01",
    name: "Publish the standard",
    summary: "The domain standard states the competencies and what each level must show.",
  },
  {
    step: "02",
    name: "Open the assessment",
    summary: "The candidate chooses a domain and a level. No particular school is required.",
  },
  {
    step: "03",
    name: "Collect the evidence",
    summary: "Examination and a performance task. Higher levels add a portfolio or a professional dialogue.",
  },
  {
    step: "04",
    name: "Judge and moderate",
    summary: "Assessors mark against the standard. A sample of decisions is moderated.",
  },
  {
    step: "05",
    name: "Issue the credential",
    summary: "A registry ID is created with the level, the domain, and the standard version.",
  },
  {
    step: "06",
    name: "Keep it current",
    summary: "Advanced and Expert credentials confirm continued practice every three years.",
  },
];

export const governance = [
  {
    name: "Standards Board",
    summary:
      "Writes each competency standard, consults on changes, and gives every version a number.",
  },
  {
    name: "Assessment Panel",
    summary:
      "Designs tasks, prepares assessors, and moderates results so the same standard holds in every sitting.",
  },
  {
    name: "Recognition Committee",
    summary:
      "Sets the rules for credentials, the registry, and appeals, and publishes them with the standards.",
  },
];

export const audiences = [
  {
    name: "Practitioners",
    summary: "People who need a record of skill that is not owned by one employer or one college.",
  },
  {
    name: "Employers",
    summary: "Organisations that want a shared meaning for Foundation, Practitioner, Advanced, and Expert.",
  },
  {
    name: "Public bodies and educators",
    summary: "Authorities and schools that need a standard they can adopt without having to own it.",
  },
];

export type Specimen = {
  id: string;
  holder: string;
  domain: string;
  level: string;
  standard: string;
  issued: string;
  review: string;
  statement: string;
};

export const specimens: Specimen[] = [
  {
    id: "GSAC-DIG-L3-2026-004821",
    holder: "A. Hassan",
    domain: "Digital & Data",
    level: "Advanced",
    standard: "GSAC-DIG 1.0",
    issued: "12 March 2026",
    review: "March 2029",
    statement:
      "Can change a live service, account for the risk, and support practitioners working to the same standard.",
  },
  {
    id: "GSAC-GRN-L2-2026-001104",
    holder: "J. Mensah",
    domain: "Green Skills & Sustainability",
    level: "Practitioner",
    standard: "GSAC-GRN 1.0",
    issued: "2 June 2026",
    review: "While standard 1.0 is current",
    statement:
      "Can complete a resource audit and propose a change with the assumptions left visible.",
  },
  {
    id: "GSAC-HLT-L4-2026-000318",
    holder: "E. Varga",
    domain: "Health & Care",
    level: "Expert",
    standard: "GSAC-HLT 1.0",
    issued: "19 January 2026",
    review: "January 2029",
    statement:
      "Can judge difficult care decisions inside scope and contribute evidence when the standard is revised.",
  },
];

export const stats = [
  { value: "8", label: "Skill domains" },
  { value: "4", label: "Proficiency levels" },
  { value: "4", label: "Evidence paths" },
  { value: "3", label: "Council bodies" },
];
