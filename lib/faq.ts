export type Faq = { q: string; a: string };

export const faqGroups: { title: string; items: Faq[] }[] = [
  {
    title: "The assessment",
    items: [
      {
        q: "What is GSAC?",
        a: "GSAC is a skills assessment and credential verification platform designed to help professionals demonstrate practical competence through real evidence, including video-based task performance.",
      },
      {
        q: "What types of skills can be assessed?",
        a: "GSAC is suited to practical and observable skills such as welding, electrical installation, plumbing, carpentry, automotive repair, HVAC, construction trades, culinary skills, beauty services, agriculture, and other hands-on occupations.",
      },
      {
        q: "How does video-based assessment work?",
        a: "Candidates record themselves performing a defined practical task, upload the video and supporting evidence, and submit it for review against assessment criteria.",
      },
      {
        q: "What should be visible in the assessment video?",
        a: "The video should clearly show the candidate, task, tools, working technique, sequence of operations, safety practices, key measurements, and final result.",
      },
      {
        q: "Can I upload more than one video?",
        a: "Yes. Some assessments may require multiple videos to demonstrate different tasks or stages of competence.",
      },
      {
        q: "What file types can be uploaded?",
        a: "The platform can be configured to accept common video and document formats. The exact requirements should be shown before submission.",
      },
      {
        q: "Can I upload certificates and training records with my video?",
        a: "Yes. Supporting evidence can include training certificates, qualifications, work records, photographs, documents, or other relevant evidence.",
      },
    ],
  },
  {
    title: "Review",
    items: [
      {
        q: "What does the AI review?",
        a: "AI-assisted tools can support evidence review by checking completeness, consistency, visible task elements, unusual patterns, and potential issues that may require assessor attention.",
      },
      {
        q: "Does AI decide whether someone is competent?",
        a: "No. AI should support evidence analysis, while competency decisions remain within the defined assessment and human review process.",
      },
      {
        q: "Who reviews the assessment?",
        a: "Submitted evidence is reviewed by qualified or authorised assessors based on the requirements of the relevant assessment.",
      },
      {
        q: "What does the assessor look for?",
        a: "Assessors may review tool handling, work sequence, safety behaviour, technique, measurement accuracy, workmanship, task completion, and final output.",
      },
      {
        q: "How long does an assessment take?",
        a: "Assessment time depends on the skill, amount of evidence submitted, and review requirements. Candidates should be able to see their current assessment status in the platform.",
      },
      {
        q: "Can I track my assessment progress?",
        a: "Yes. Candidates can view stages such as evidence submitted, AI review, assessor review, competency decision, and credential status.",
      },
      {
        q: "What happens if my evidence is incomplete?",
        a: "You may be asked to submit additional evidence, re-record part of the task, or provide clarification before the assessment can be completed.",
      },
      {
        q: "Can an assessment be rejected?",
        a: "Yes. If the submitted evidence does not sufficiently demonstrate the required competence, the assessment may require additional evidence or result in an unsuccessful outcome.",
      },
      {
        q: "Can I resubmit evidence?",
        a: "Where permitted by the assessment rules, candidates can submit additional or replacement evidence.",
      },
    ],
  },
  {
    title: "Credentials",
    items: [
      {
        q: "What happens after I successfully complete an assessment?",
        a: "Successful candidates can receive a digital credential showing the assessed skill, status, credential ID, and verification details.",
      },
      {
        q: "What is a GSAC digital credential?",
        a: "A GSAC digital credential is a digital record linked to an assessment outcome and designed to allow the credential status to be checked through the verification system.",
      },
      {
        q: "Does the credential include a QR code?",
        a: "It can. A QR code can link employers or authorised users directly to the credential verification page.",
      },
      {
        q: "How can someone verify my credential?",
        a: "They can enter the credential ID or scan the QR code to view the verification status and permitted credential information.",
      },
      {
        q: "Can credentials expire?",
        a: "Some credentials may have an expiry or renewal requirement depending on the skill, assessment scheme, or industry requirement.",
      },
      {
        q: "Can a credential be revoked or suspended?",
        a: "Where applicable, credential status can be updated if there is a valid reason under the relevant credential policy.",
      },
      {
        q: "Can credentials be shared digitally?",
        a: "Yes. Candidates can share credential links or verification details with employers, clients, training providers, or other authorised parties.",
      },
      {
        q: "Can organisations issue their own branded credentials through GSAC?",
        a: "Co-branded or organisation-specific credential programmes may be supported depending on the assessment and governance model.",
      },
    ],
  },
  {
    title: "Employers",
    items: [
      {
        q: "Can employers use GSAC?",
        a: "Yes. Employers can use GSAC to review verified skills, check credentials, and support workforce or recruitment decisions.",
      },
      {
        q: "Can employers see the full assessment video?",
        a: "Access should depend on candidate consent, organisation permissions, and platform privacy settings. Verification does not automatically mean full evidence access.",
      },
      {
        q: "How does GSAC help employers?",
        a: "GSAC gives employers additional evidence of practical competence instead of relying only on CVs, job titles, or uploaded certificates.",
      },
      {
        q: "Can organisations assess existing employees?",
        a: "Yes. Organisations can use the platform to support internal skills assessment, workforce development, technical competency review, or training outcomes.",
      },
      {
        q: "Can companies manage multiple candidates?",
        a: "Yes. Organisation accounts can be designed to manage candidates, assessment progress, credentials, evidence status, and reporting from one dashboard.",
      },
      {
        q: "Can GSAC integrate with company systems?",
        a: "Integration with HR, LMS, training, or recruitment systems can be offered depending on the organisation’s technical requirements.",
      },
    ],
  },
  {
    title: "Training providers",
    items: [
      {
        q: "Can training providers use GSAC?",
        a: "Yes. Training providers can use GSAC to help learners demonstrate practical outcomes and build verifiable evidence of competence.",
      },
      {
        q: "Can training providers upload evidence for learners?",
        a: "This can be supported depending on account permissions and the assessment process.",
      },
      {
        q: "Can training providers monitor learner progress?",
        a: "Yes. Provider dashboards can show assessment status, pending evidence, completed assessments, and issued credentials.",
      },
      {
        q: "Can GSAC be used after a training course is completed?",
        a: "Yes. A learner can submit practical evidence after training to demonstrate what they are able to perform.",
      },
    ],
  },
  {
    title: "What GSAC does not replace",
    items: [
      {
        q: "Can GSAC replace a training course?",
        a: "No. GSAC should be positioned as an assessment and verification platform, not as a replacement for required training, licensing, or regulated qualifications.",
      },
      {
        q: "Can GSAC replace an occupational licence?",
        a: "No. Where a profession requires a legal licence, registration, supervised assessment, or statutory approval, those requirements still apply.",
      },
      {
        q: "Is video assessment suitable for every profession?",
        a: "No. It works best for observable practical tasks. Some regulated, high-risk, clinical, or legally controlled activities may require additional supervised or on-site assessment.",
      },
      {
        q: "Can GSAC assess soft skills?",
        a: "Some observable skills can be supported by video evidence, but the strongest use case is practical and task-based competence.",
      },
      {
        q: "Does a GSAC credential automatically guarantee employment?",
        a: "No. A credential can provide verified evidence of assessed competence, but hiring decisions remain with employers.",
      },
    ],
  },
  {
    title: "Recording and authenticity",
    items: [
      {
        q: "Can candidates use a smartphone to record evidence?",
        a: "Yes, provided the video quality, framing, sound, and task visibility meet the assessment requirements.",
      },
      {
        q: "Does the video need professional production?",
        a: "No. The priority is clear evidence, not cinematic quality.",
      },
      {
        q: "Can edited videos be submitted?",
        a: "Assessment rules should define whether editing is allowed. For authenticity, continuous or minimally edited task evidence may be required for some assessments.",
      },
      {
        q: "How does GSAC check whether a video is genuine?",
        a: "The platform can use evidence checks, metadata review, AI-assisted anomaly detection, assessor review, and supporting documentation depending on the assessment process.",
      },
      {
        q: "What happens if suspicious evidence is detected?",
        a: "The evidence can be flagged for additional human review or further verification before an assessment decision is made.",
      },
    ],
  },
  {
    title: "Privacy and access",
    items: [
      {
        q: "Is candidate data secure?",
        a: "Candidate evidence should be managed through controlled access, secure storage, role-based permissions, and defined privacy procedures.",
      },
      {
        q: "Who can access submitted videos?",
        a: "Only authorised users involved in the relevant assessment or approved organisation workflow should be able to access candidate evidence.",
      },
      {
        q: "Can I delete my account or personal data?",
        a: "Requests should be handled according to the platform privacy policy, applicable data protection requirements, and any mandatory evidence-retention rules.",
      },
      {
        q: "Is GSAC available in English and Dutch?",
        a: "Yes. The website and user experience can support both English and Dutch, with additional languages added as the platform expands.",
      },
      {
        q: "Can GSAC be used internationally?",
        a: "Yes. The platform can support users across countries, subject to the specific recognition, legal, regulatory, and assessment requirements applicable to each use case.",
      },
    ],
  },
  {
    title: "Getting started",
    items: [
      {
        q: "What if I need help during an assessment?",
        a: "Candidates should have access to guidance, assessment instructions, technical support, and help-centre resources.",
      },
      {
        q: "How do I start an assessment?",
        a: "Create an account, choose the relevant skill assessment, review the evidence requirements, record your task, and submit the required evidence.",
      },
      {
        q: "How do I verify a credential?",
        a: "Open the verification page, enter the credential ID or scan its QR code, and review the current credential status.",
      },
    ],
  },
];

const homeQuestions = [
  "What is GSAC?",
  "What types of skills can be assessed?",
  "How does video-based assessment work?",
  "Who reviews the assessment?",
  "What does the AI review?",
  "What happens after I successfully complete an assessment?",
  "How can someone verify my credential?",
  "Can employers see the full assessment video?",
  "Is candidate data secure?",
  "Can GSAC replace an occupational licence?",
];

const allFaqs = faqGroups.flatMap((group) => group.items);

export const homeFaqs = homeQuestions.map((question) => {
  const item = allFaqs.find((faq) => faq.q === question);
  if (!item) throw new Error(`Missing homepage FAQ: ${question}`);
  return item;
});
