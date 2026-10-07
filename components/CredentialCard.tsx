import type { Specimen } from "@/lib/content";
import { Seal } from "./Seal";

export function CredentialCard({ record }: { record: Specimen }) {
  return (
    <article className="credential">
      <header className="credential-head">
        <Seal size={46} />
        <div>
          <p className="kicker">Specimen credential</p>
          <h2>GSAC Competency Credential</h2>
        </div>
      </header>
      <p className="credential-statement">{record.statement}</p>
      <dl className="credential-facts">
        <div>
          <dt>Holder</dt>
          <dd>{record.holder}</dd>
        </div>
        <div>
          <dt>Domain</dt>
          <dd>{record.domain}</dd>
        </div>
        <div>
          <dt>Level</dt>
          <dd>{record.level}</dd>
        </div>
        <div>
          <dt>Standard</dt>
          <dd>{record.standard}</dd>
        </div>
        <div>
          <dt>Issued</dt>
          <dd>{record.issued}</dd>
        </div>
        <div>
          <dt>Review</dt>
          <dd>{record.review}</dd>
        </div>
      </dl>
      <footer className="credential-id">{record.id}</footer>
    </article>
  );
}
