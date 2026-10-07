import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { audiences, governance } from "@/lib/content";

export const metadata: Metadata = {
  title: "About the council",
  description:
    "GSAC is an independent standards body for skills. It writes standards, assesses performance, and recognises competence.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero page="about" />
      <section className="section" data-reveal>
        <div className="wrap split">
          <div className="prose">
            <p className="kicker">Purpose</p>
            <h2>What the council is for.</h2>
            <p>
              Work moves. Job titles do not travel well, and course names travel even
              less well. GSAC publishes competency standards for fields where people
              need a shared description of what good work looks like.
            </p>
            <p>
              The council then assesses candidates against those standards and records
              the result. The credential is a statement of demonstrated competence at
              a named level. It is valid because the standard, the evidence, and the
              judgment can be examined.
            </p>
          </div>
          <div className="prose aside-panel">
            <p className="kicker">Independence</p>
            <h2>Separate from training.</h2>
            <p>
              GSAC does not sell courses and does not belong to an employer. Preparation
              can come from a college, a workplace, or private study. The assessment
              is the same.
            </p>
            <p>
              Standards are versioned. When a field changes, the board revises the
              text and says which version an assessment used.
            </p>
          </div>
        </div>
      </section>
      <section className="section section-muted" data-reveal>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">How the council is organised</p>
            <h2>Three bodies, three jobs.</h2>
          </div>
          <div className="charter">
            {governance.map((body) => (
              <article key={body.name}>
                <h3>{body.name}</h3>
                <p>{body.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" data-reveal>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Who it serves</p>
            <h2>Built for the people who have to trust a claim of skill.</h2>
          </div>
          <div className="charter">
            {audiences.map((group) => (
              <article key={group.name}>
                <h3>{group.name}</h3>
                <p>{group.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
