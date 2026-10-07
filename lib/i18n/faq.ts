import type { Faq } from "@/lib/faq";
import { homeFaqs } from "@/lib/faq";
import type { Locale } from "@/lib/i18n/dictionaries";

const homeFaqsNl: Faq[] = [
  {
    q: "Wat is GSAC?",
    a: "GSAC is een platform voor skill-assessment en credentialverificatie, bedoeld om professionals praktische competentie te laten tonen via echt bewijs, inclusief videogebaseerde taakuitvoering.",
  },
  {
    q: "Welke soorten skills kunnen worden beoordeeld?",
    a: "GSAC past bij praktische en waarneembare skills zoals lassen, elektrische installatie, loodgieterij, timmerwerk, automotive, HVAC, bouw, culinaire skills, schoonheidszorg, landbouw en andere hands-on beroepen.",
  },
  {
    q: "Hoe werkt video-assessment?",
    a: "Kandidaten filmen zichzelf bij een vastgelegde praktische taak, uploaden de video en ondersteunend bewijs, en dienen dit in voor review tegen assessmentcriteria.",
  },
  {
    q: "Wie beoordeelt het assessment?",
    a: "Ingediend bewijs wordt beoordeeld door gekwalificeerde of geautoriseerde assessoren op basis van de eisen van het betreffende assessment.",
  },
  {
    q: "Wat doet de AI-review?",
    a: "AI-tools kunnen de bewijsreview ondersteunen door volledigheid, consistentie, zichtbare taakelementen, afwijkende patronen en mogelijke aandachtspunten voor de assessor te checken.",
  },
  {
    q: "Wat gebeurt er na een geslaagd assessment?",
    a: "Na een succesvol assessment kan een digitaal credential worden uitgegeven dat de aangetoonde skill, het niveau en het onderliggende bewijs vastlegt.",
  },
  {
    q: "Hoe kan iemand mijn credential verifiëren?",
    a: "Open de verificatiepagina, voer het credential-ID in of scan de QR-code, en bekijk de actuele status van het credential.",
  },
  {
    q: "Kunnen werkgevers de volledige assessmentvideo zien?",
    a: "Toegang tot videobewijs volgt het privacy- en toegangsbeleid van het platform. Werkgevers zien in de regel de geverifieerde uitkomst, met gecontroleerde toegang tot bewijs waar dat is toegestaan.",
  },
  {
    q: "Is kandidaatdata veilig?",
    a: "Kandidaatgegevens en bewijs moeten worden beschermd met passende technische en organisatorische maatregelen, inclusief gecontroleerde toegang en veilige opslag.",
  },
  {
    q: "Kan GSAC een beroepsliscentie vervangen?",
    a: "Nee. GSAC-credentials tonen aangetoonde competentie; ze vervangen geen wettelijke licenties of gereguleerde toelatingseisen, tenzij dat expliciet is erkend.",
  },
];

export function getHomeFaqs(locale: Locale): Faq[] {
  return locale === "nl" ? homeFaqsNl : homeFaqs;
}
