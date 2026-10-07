import type { Locale } from "./dictionaries";

export type PainPoint = {
  id: string;
  label: string;
  title: string;
  problem: string;
  solution: string;
};

const PAIN_IMAGES = [
  "/hero/welding.jpg",
  "/hero/electrical.jpg",
  "/hero/plumbing.jpg",
  "/hero/workshop.jpg",
  "/hero/evidence.jpg",
  "/hero/credential.jpg",
  "/hero/hero-skills.jpg",
  "/sections/trainer.jpg",
  "/sections/employer.jpg",
  "/sections/crew.jpg",
  "/sections/skill-auto.jpg",
  "/sections/skill-hvac.jpg",
  "/sections/skill-wood.jpg",
  "/sections/story-work.jpg",
  "/sections/cta-workforce.jpg",
  "/sections/review-electric.jpg",
  "/sections/assessment-phone.jpg",
] as const;

export const painPointIds = [
  "prove",
  "observe",
  "scattered",
  "inconsistent",
  "wrong-evidence",
  "quality",
  "remote",
  "multisite",
  "visibility",
  "disconnected",
  "manual-cert",
  "authenticity",
  "audit",
  "approval",
  "refresher",
  "contractor",
  "customer",
  "scale",
  "cost",
  "gaps",
  "roi",
  "history",
  "pending",
  "safety",
  "format",
] as const;

export type PainPointId = (typeof painPointIds)[number];

export function getPainPointImage(id: string, index = 0) {
  const byId = painPointIds.indexOf(id as PainPointId);
  const i = byId >= 0 ? byId : index;
  return PAIN_IMAGES[i % PAIN_IMAGES.length];
}

export const painPointsEn: PainPoint[] = [
  {
    id: "prove",
    label: "Hard to Prove",
    title: "Practical training is difficult to prove",
    problem:
      "Many companies can show attendance sheets, training records, or certificates, but they often cannot show whether the worker actually performed the practical task correctly. This becomes a problem during customer audits, internal reviews, contractor qualification, or competence checks.",
    solution:
      "The app captures short practical training videos linked to the learner, task, week, and training program, creating visible evidence of actual performance.",
  },
  {
    id: "observe",
    label: "Can't Observe All",
    title: "Supervisors cannot observe every trainee",
    problem:
      "In large batches or busy industrial environments, one trainer or supervisor cannot continuously watch every worker perform each practical activity. Important gaps can easily go unnoticed.",
    solution:
      "Learners or trainers can upload short task-based videos. AI assists with first-level review, while the trainer provides final approval.",
  },
  {
    id: "scattered",
    label: "Scattered Records",
    title: "Training records are scattered across multiple systems",
    problem:
      "Practical videos may sit in WhatsApp, employee phones, email, cloud folders, local drives, or paper files. When evidence is needed later, teams spend time searching and matching records manually.",
    solution:
      "All learner, training, video, assessment, and certificate data stays connected in one structured digital record.",
  },
  {
    id: "inconsistent",
    label: "Inconsistent Assess",
    title: "Different trainers assess differently",
    problem:
      "One trainer may accept a task while another may reject the same performance. Without standardized evidence and review criteria, assessment quality can vary between locations and trainers.",
    solution:
      "Each practical activity can follow defined task criteria, supported by AI-assisted analysis and recorded trainer approval for more consistent review.",
  },
  {
    id: "wrong-evidence",
    label: "Wrong Evidence",
    title: "Wrong or incomplete evidence gets submitted",
    problem:
      "Learners may upload a video that shows only the final result, misses important steps, or does not actually match the assigned practical task. This creates uncertainty during assessment.",
    solution:
      "The system can analyze whether the uploaded video relates to the assigned task and flag missing, unclear, or insufficient evidence for review.",
  },
  {
    id: "quality",
    label: "Poor Video",
    title: "Poor video quality makes assessment difficult",
    problem:
      "Dark footage, blocked camera angles, unclear actions, or very short recordings can make it impossible to judge whether the task was carried out correctly.",
    solution:
      "AI-assisted checks can identify low-quality or incomplete evidence and prompt the trainer to request a clearer re-upload.",
  },
  {
    id: "remote",
    label: "Remote Workers",
    title: "Remote workers are difficult to assess",
    problem:
      "Workers may be located at project sites, factories, customer premises, workshops, or remote locations where assessors cannot visit frequently.",
    solution:
      "Practical evidence can be recorded and uploaded remotely, allowing trainers to review submissions without being physically present at every location.",
  },
  {
    id: "multisite",
    label: "Multi-Site Gaps",
    title: "Multi-site training lacks consistency",
    problem:
      "Companies with several plants, branches, workshops, or franchise locations may struggle to maintain the same training and assessment approach everywhere.",
    solution:
      "The app provides one structured process for training creation, weekly activities, video evidence, review, and certification across all locations.",
  },
  {
    id: "visibility",
    label: "Low Visibility",
    title: "Management has little visibility into real competence",
    problem:
      "Management may know how many people attended training but may not know who has actually demonstrated the required practical skill.",
    solution:
      "The platform shows progress at learner, batch, and training level, helping management see who is pending, uploaded, under review, verified, or completed.",
  },
  {
    id: "disconnected",
    label: "Certs Disconnected",
    title: "Certificates are often disconnected from evidence",
    problem:
      "A certificate may confirm course completion, but there may be no direct connection between that certificate and the practical evidence that supported it.",
    solution:
      "Video evidence, trainer approval, training completion, and certificate records can all be linked within the same learner journey.",
  },
  {
    id: "manual-cert",
    label: "Manual Certs",
    title: "Manual certificate creation takes too much time",
    problem:
      "Creating certificates one by one can involve spreadsheets, manual name entry, formatting, checking dates, and repeated corrections. This becomes difficult when batches are large.",
    solution:
      "Certificates can be generated using the company’s approved template or a certificate design created by GSAC, reducing repetitive administrative work.",
  },
  {
    id: "authenticity",
    label: "Cert Trust",
    title: "Certificate authenticity is difficult to confirm",
    problem:
      "Customers, employers, auditors, or other stakeholders may receive a certificate but have no quick way to confirm whether it is genuine or still valid.",
    solution:
      "Certificates can be linked to an online verification page or QR code so authenticity can be checked instantly.",
  },
  {
    id: "audit",
    label: "Audit Stress",
    title: "Audit preparation becomes stressful",
    problem:
      "During audits, organizations often have to collect training records, approvals, attendance sheets, videos, and certificates from different teams at the last minute.",
    solution:
      "The platform keeps evidence, approvals, dates, and certificates organized continuously, making records easier to retrieve when needed.",
  },
  {
    id: "approval",
    label: "No Approval Trail",
    title: "There is no clear approval trail",
    problem:
      "Companies may not have a reliable record showing who reviewed the evidence, when it was approved, and whether a re-upload was requested before acceptance.",
    solution:
      "The platform maintains a structured approval history for each learner and practical task.",
  },
  {
    id: "refresher",
    label: "Hard Refreshers",
    title: "Retraining and refresher training are hard to track",
    problem:
      "A worker may have completed training in the past, but the company may not know whether the person has completed the latest version of the task or refresher requirement.",
    solution:
      "Historical training records help companies compare past and current training activity and identify which learners still need updated evidence.",
  },
  {
    id: "contractor",
    label: "Contractors",
    title: "Contractor competence is difficult to verify",
    problem:
      "Companies often rely on contractors and third-party workers but may have limited visibility into whether those workers have actually demonstrated required practical skills.",
    solution:
      "Contractors can be enrolled, assigned practical activities, and assessed using the same video-based evidence process as internal employees.",
  },
  {
    id: "customer",
    label: "Customer Skills",
    title: "Customer-specific skill requirements are hard to demonstrate",
    problem:
      "Some customers require proof that personnel working on their project are competent for specific tasks, tools, or processes. General training certificates may not be enough.",
    solution:
      "Companies can maintain task-specific video evidence and corresponding verification records for the personnel assigned to that customer.",
  },
  {
    id: "scale",
    label: "Hard to Scale",
    title: "Training administration becomes difficult at scale",
    problem:
      "A process that works for 20 learners becomes difficult when the company has hundreds of workers, several batches, and multiple training programs.",
    solution:
      "The platform structures training, learner records, practical evidence, review status, and certificates so the process can scale more efficiently.",
  },
  {
    id: "cost",
    label: "Costly Visits",
    title: "Physical assessment is costly",
    problem:
      "Sending assessors or senior trainers to every site for every practical activity can increase travel, accommodation, downtime, and operational cost.",
    solution:
      "Remote video-based evidence can reduce unnecessary physical visits while retaining trainer review for final decisions.",
  },
  {
    id: "gaps",
    label: "Late Skill Gaps",
    title: "Skill gaps are difficult to identify early",
    problem:
      "Without structured evidence, companies may only discover skill gaps after a worker makes an error on the job or fails during a later assessment.",
    solution:
      "Week-by-week video evidence and review help identify incomplete or weak practical performance earlier in the training process.",
  },
  {
    id: "roi",
    label: "Unclear ROI",
    title: "Training ROI is difficult to demonstrate",
    problem:
      "Companies spend money on training but may struggle to show whether that investment resulted in demonstrated practical competence.",
    solution:
      "The platform creates a clearer evidence trail from training activity to reviewed practical performance and certification.",
  },
  {
    id: "history",
    label: "Lost History",
    title: "Employee skill history is difficult to maintain",
    problem:
      "When workers move between departments, projects, or locations, their training history may remain with individual supervisors or local records.",
    solution:
      "Each learner has a digital profile containing training, practical evidence, approvals, progress, and certificates.",
  },
  {
    id: "pending",
    label: "Pending Delays",
    title: "Pending assessments can delay deployment",
    problem:
      "A worker may complete training but remain unable to start a job because practical assessment or certificate issuance is still pending.",
    solution:
      "Status tracking helps trainers quickly identify submissions waiting for review, re-upload, approval, or certificate generation.",
  },
  {
    id: "safety",
    label: "Safety Missed",
    title: "Safety-critical steps can be missed",
    problem:
      "In technical work, a learner may complete the task but skip important safety practices such as PPE, isolation, guarding, or safe tool handling.",
    solution:
      "AI-assisted video review can help identify visible safety-related evidence and bring missing elements to the trainer’s attention.",
  },
  {
    id: "format",
    label: "No Standard",
    title: "Training evidence has no standard format",
    problem:
      "Some teams use photos, some use videos, some use paper checklists, and others depend on verbal confirmation. This makes evidence difficult to compare.",
    solution:
      "The app creates a standardized structure: assigned activity, short video evidence, AI analysis, trainer review, and recorded status.",
  },
];

export const painPointsNl: PainPoint[] = [
  {
    id: "prove",
    label: "Moeilijk te Bewijzen",
    title: "Praktijktraining is moeilijk te bewijzen",
    problem:
      "Veel bedrijven kunnen presentielijsten, trainingsdossiers of certificaten tonen, maar niet of de medewerker de praktische taak echt correct heeft uitgevoerd. Dat wordt een probleem bij klantaudits, interne reviews, aannemerskwalificatie of competentiechecks.",
    solution:
      "De app legt korte praktijkvideo’s vast, gekoppeld aan leerling, taak, week en trainingsprogramma — zichtbaar bewijs van echte uitvoering.",
  },
  {
    id: "observe",
    label: "Niet Iedereen Zien",
    title: "Supervisors kunnen niet elke trainee volgen",
    problem:
      "In grote groepen of drukke industriële omgevingen kan één trainer of supervisor niet iedereen continu volgen. Belangrijke hiaten blijven makkelijk onopgemerkt.",
    solution:
      "Leerlingen of trainers uploaden korte taakvideo’s. AI ondersteunt de eerste review; de trainer geeft de eindgoedkeuring.",
  },
  {
    id: "scattered",
    label: "Verspreide Dossiers",
    title: "Trainingsdossiers staan verspreid over systemen",
    problem:
      "Praktijkvideo’s staan vaak in WhatsApp, telefoons, e-mail, cloudmappen, lokale schijven of op papier. Als bewijs later nodig is, zoeken teams handmatig alles bij elkaar.",
    solution:
      "Alle leerling-, trainings-, video-, assessment- en certificaatgegevens blijven gekoppeld in één gestructureerd digitaal dossier.",
  },
  {
    id: "inconsistent",
    label: "Inconsistente Assess",
    title: "Trainers beoordelen verschillend",
    problem:
      "De ene trainer keurt een taak goed terwijl een andere dezelfde uitvoering afwijst. Zonder gestandaardiseerd bewijs en criteria wisselt de kwaliteit per locatie.",
    solution:
      "Elke praktische activiteit volgt vaste taakcriteria, ondersteund door AI-analyse en vastgelegde trainergoedkeuring voor consistentere review.",
  },
  {
    id: "wrong-evidence",
    label: "Verkeerd Bewijs",
    title: "Verkeerd of onvolledig bewijs wordt ingediend",
    problem:
      "Leerlingen uploaden soms een video die alleen het eindresultaat toont, stappen mist, of niet bij de toegewezen taak past — wat onzekerheid geeft bij assessment.",
    solution:
      "Het systeem kan analyseren of de video bij de taak past en ontbrekend, onduidelijk of onvoldoende bewijs markeren voor review.",
  },
  {
    id: "quality",
    label: "Slechte Video",
    title: "Slechte videokwaliteit maakt assessment lastig",
    problem:
      "Donkere beelden, geblokkeerde camerahoeken, onduidelijke acties of te korte opnames maken het onmogelijk om te beoordelen of de taak correct is uitgevoerd.",
    solution:
      "AI-checks kunnen lage kwaliteit of onvolledig bewijs herkennen en de trainer vragen om een duidelijkere herupload.",
  },
  {
    id: "remote",
    label: "Remote Werknemers",
    title: "Remote medewerkers zijn moeilijk te beoordelen",
    problem:
      "Medewerkers werken op projectlocaties, in fabrieken, bij klanten, in werkplaatsen of op afstand waar assessoren niet vaak kunnen komen.",
    solution:
      "Praktijkbewijs kan remote worden opgenomen en geüpload, zodat trainers inzendingen kunnen beoordelen zonder overal fysiek aanwezig te zijn.",
  },
  {
    id: "multisite",
    label: "Multi-Site Hiaten",
    title: "Multi-site training mist consistentie",
    problem:
      "Bedrijven met meerdere vestigingen, werkplaatsen of franchiselocaties worstelen om overal dezelfde trainings- en assessmentaanpak te houden.",
    solution:
      "De app biedt één gestructureerd proces voor trainingsopzet, wekelijkse activiteiten, videobewijs, review en certificering op alle locaties.",
  },
  {
    id: "visibility",
    label: "Weinig Zicht",
    title: "Management heeft weinig zicht op echte competentie",
    problem:
      "Management weet vaak hoeveel mensen training volgden, maar niet wie de vereiste praktische skill echt heeft aangetoond.",
    solution:
      "Het platform toont voortgang op leerling-, batch- en trainingsniveau: openstaand, geüpload, in review, geverifieerd of afgerond.",
  },
  {
    id: "disconnected",
    label: "Cert Losgekoppeld",
    title: "Certificaten zijn vaak losgekoppeld van bewijs",
    problem:
      "Een certificaat kan cursusvoltooiing bevestigen, maar er is soms geen directe koppeling met het praktijkbewijs dat eraan ten grondslag lag.",
    solution:
      "Videobewijs, trainergoedkeuring, trainingsvoltooiing en certificaatrecords kunnen binnen dezelfde leerlingreis worden gekoppeld.",
  },
  {
    id: "manual-cert",
    label: "Handmatige Certs",
    title: "Handmatige certificaataanmaak kost te veel tijd",
    problem:
      "Certificaten één voor één maken met spreadsheets, handmatige namen, opmaak en datumchecks wordt lastig bij grote batches.",
    solution:
      "Certificaten kunnen worden gegenereerd vanuit een goedgekeurd bedrijfssjabloon of een GSAC-ontwerp, met minder administratief werk.",
  },
  {
    id: "authenticity",
    label: "Cert Vertrouwen",
    title: "Authenticiteit van certificaten is lastig te bevestigen",
    problem:
      "Klanten, werkgevers, auditors of andere partijen ontvangen een certificaat zonder snelle manier om te checken of het echt of nog geldig is.",
    solution:
      "Certificaten kunnen koppelen aan een online verificatiepagina of QR-code zodat authenticiteit direct te controleren is.",
  },
  {
    id: "audit",
    label: "Auditstress",
    title: "Auditvoorbereiding wordt stressvol",
    problem:
      "Bij audits moeten organisaties vaak last-minute trainingsdossiers, goedkeuringen, presentielijsten, video’s en certificaten uit verschillende teams verzamelen.",
    solution:
      "Het platform houdt bewijs, goedkeuringen, data en certificaten doorlopend georganiseerd, zodat dossiers sneller terug te vinden zijn.",
  },
  {
    id: "approval",
    label: "Geen Goedkeuringspad",
    title: "Er is geen duidelijk goedkeuringsspoor",
    problem:
      "Bedrijven hebben vaak geen betrouwbaar record van wie het bewijs beoordeelde, wanneer het is goedgekeurd, en of er eerst een herupload is gevraagd.",
    solution:
      "Het platform houdt een gestructureerde goedkeuringsgeschiedenis bij voor elke leerling en praktische taak.",
  },
  {
    id: "refresher",
    label: "Moeilijke Refreshers",
    title: "Herscholing en refreshers zijn moeilijk te volgen",
    problem:
      "Een medewerker kan eerder training hebben afgerond, maar het bedrijf weet niet of de nieuwste versie van de taak of refresher is voltooid.",
    solution:
      "Historische trainingsdossiers helpen vergelijken wat vroeger en nu is gedaan, en wie nog bijgewerkt bewijs nodig heeft.",
  },
  {
    id: "contractor",
    label: "Aannemers",
    title: "Competentie van aannemers is moeilijk te verifiëren",
    problem:
      "Bedrijven leunen vaak op aannemers en externe krachten, maar hebben beperkte zichtbaarheid of die mensen de vereiste praktische skills echt hebben aangetoond.",
    solution:
      "Aannemers kunnen worden ingeschreven, praktische activiteiten toegewezen krijgen en via hetzelfde videobewijsproces worden beoordeeld als interne medewerkers.",
  },
  {
    id: "customer",
    label: "Klant-Skills",
    title: "Klantspecifieke skilleisen zijn moeilijk aan te tonen",
    problem:
      "Sommige klanten eisen bewijs dat personeel op hun project competent is voor specifieke taken, tools of processen. Algemene trainingscertificaten volstaan niet.",
    solution:
      "Bedrijven kunnen taakspecifiek videobewijs en bijbehorende verificatierecords bijhouden voor het personeel op die klant.",
  },
  {
    id: "scale",
    label: "Moeilijk Schalen",
    title: "Trainingsadministratie wordt lastig op schaal",
    problem:
      "Een proces dat werkt voor 20 leerlingen wordt moeilijk wanneer het bedrijf honderden medewerkers, meerdere batches en programma’s heeft.",
    solution:
      "Het platform structureert training, leerlingdossiers, praktijkbewijs, reviewstatus en certificaten zodat het proces efficiënter kan schalen.",
  },
  {
    id: "cost",
    label: "Dure Bezoeken",
    title: "Fysieke assessment is kostbaar",
    problem:
      "Assessors of senior trainers naar elke locatie sturen voor elke praktische activiteit verhoogt reis-, verblijf-, stilstand- en operationele kosten.",
    solution:
      "Remote videobewijs kan onnodige fysieke bezoeken verminderen, terwijl de trainer de eindbeslissing blijft nemen.",
  },
  {
    id: "gaps",
    label: "Late Skill Gaps",
    title: "Skill gaps zijn moeilijk vroeg te herkennen",
    problem:
      "Zonder gestructureerd bewijs ontdekken bedrijven skill gaps vaak pas na een fout op de werkvloer of een mislukte latere assessment.",
    solution:
      "Week-voor-week videobewijs en review helpen incomplete of zwakke praktijkprestaties eerder in het trainingsproces te zien.",
  },
  {
    id: "roi",
    label: "Onzekere ROI",
    title: "Trainings-ROI is moeilijk aan te tonen",
    problem:
      "Bedrijven investeren in training maar kunnen moeilijk laten zien of die investering tot aangetoonde praktische competentie heeft geleid.",
    solution:
      "Het platform maakt een duidelijker bewijsspoor van trainingsactiviteit naar beoordeelde praktijkprestatie en certificering.",
  },
  {
    id: "history",
    label: "Verloren Historie",
    title: "Skillgeschiedenis van medewerkers is moeilijk bij te houden",
    problem:
      "Als medewerkers tussen afdelingen, projecten of locaties wisselen, blijft hun trainingsgeschiedenis vaak bij individuele supervisors of lokale dossiers hangen.",
    solution:
      "Elke leerling heeft een digitaal profiel met training, praktijkbewijs, goedkeuringen, voortgang en certificaten.",
  },
  {
    id: "pending",
    label: "Openstaande Delays",
    title: "Openstaande assessments kunnen inzet vertragen",
    problem:
      "Een medewerker kan training afronden maar nog niet starten met werk omdat praktische assessment of certificaatuitgifte nog openstaat.",
    solution:
      "Statusoverzicht helpt trainers snel inzendingen te vinden die wachten op review, herupload, goedkeuring of certificaatgeneratie.",
  },
  {
    id: "safety",
    label: "Veiligheid Gemist",
    title: "Veiligheidskritische stappen kunnen worden overgeslagen",
    problem:
      "Bij technisch werk kan een leerling de taak afronden maar belangrijke veiligheidspraktijken missen, zoals PBM, isolatie, afscherming of veilig gereedschapsgebruik.",
    solution:
      "AI-ondersteunde videoreview helpt zichtbaar veiligheidsbewijs te herkennen en ontbrekende elementen onder de aandacht van de trainer te brengen.",
  },
  {
    id: "format",
    label: "Geen Standaard",
    title: "Trainingsbewijs heeft geen standaardformaat",
    problem:
      "Sommige teams gebruiken foto’s, anderen video’s, papieren checklists of verbale bevestiging. Daardoor is bewijs moeilijk te vergelijken.",
    solution:
      "De app maakt een gestandaardiseerde structuur: toegewezen activiteit, kort videobewijs, AI-analyse, trainerreview en vastgelegde status.",
  },
];

export function getPainPoints(locale: Locale): PainPoint[] {
  return locale === "nl" ? painPointsNl : painPointsEn;
}

export function getPainPoint(locale: Locale, id: string): PainPoint | undefined {
  return getPainPoints(locale).find((point) => point.id === id);
}
