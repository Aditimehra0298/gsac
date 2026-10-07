import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RegistryLookup } from "@/components/RegistryLookup";
import { specimens } from "@/lib/content";

export const metadata: Metadata = {
  title: "Recognition",
  description:
    "What a GSAC credential contains, and a specimen registry for checking the ID format.",
};

const facts = [
  { name: "Holder", detail: "The person the credential belongs to." },
  { name: "Domain", detail: "The field of work, such as Health & Care or Digital & Data." },
  { name: "Level", detail: "Foundation, Practitioner, Advanced, or Expert." },
  { name: "Standard version", detail: "The exact text the candidate was assessed against." },
  { name: "Registry ID", detail: "A public identifier in the form GSAC-DOMAIN-LEVEL-YEAR-NUMBER." },
  { name: "Review date", detail: "When Advanced and Expert practice must be confirmed again." },
];

export default async function RecognitionPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      <PageHero page="recognition" />
      <section className="section" data-reveal>
        <div className="wrap split">
          <div>
            <p className="kicker">On the credential</p>
            <h2>Six facts, and nothing decorative.</h2>
            <p className="lede">
              A GSAC credential does not list a course. It lists the judgment: who,
              in which domain, at which level, against which version of the standard.
            </p>
          </div>
          <dl className="fact-list">
            {facts.map((fact) => (
              <div key={fact.name}>
                <dt>{fact.name}</dt>
                <dd>{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="section section-muted" data-reveal>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Specimen registry</p>
            <h2>Look up an example record.</h2>
            <p>
              These three records are specimens, printed the way a live credential
              will look. Use an ID from the table.
            </p>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Registry ID</th>
                  <th scope="col">Holder</th>
                  <th scope="col">Domain</th>
                  <th scope="col">Level</th>
                </tr>
              </thead>
              <tbody>
                {specimens.map((record) => (
                  <tr key={record.id}>
                    <td><code>{record.id}</code></td>
                    <td>{record.holder}</td>
                    <td>{record.domain}</td>
                    <td>{record.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <RegistryLookup initialId={params.id ?? ""} />
        </div>
      </section>
    </>
  );
}
