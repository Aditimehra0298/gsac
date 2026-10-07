import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { evidence, levels, principles, process } from "@/lib/content";

export const metadata: Metadata = {
  title: "Assessment framework",
  description:
    "How GSAC levels, evidence, moderation, and review work across every skill domain.",
};

export default function FrameworkPage() {
  return (
    <>
      <PageHero page="framework" />
      <section className="section" data-reveal>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Levels</p>
            <h2>What each level is allowed to claim.</h2>
          </div>
          <ol className="level-grid">
            {levels.map((level) => (
              <li key={level.code}>
                <span>{level.code}</span>
                <h3>{level.name}</h3>
                <p>{level.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section section-muted" data-reveal>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Evidence</p>
            <h2>Four ways a candidate shows the skill.</h2>
          </div>
          <div className="card-grid">
            {evidence.map((item) => (
              <article key={item.name} className="plain-card">
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" data-reveal>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">From standard to credential</p>
            <h2>How an assessment runs.</h2>
          </div>
          <ol className="process">
            {process.map((item) => (
              <li key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section section-muted" data-reveal>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Rules of the assessment</p>
            <h2>Principles the panel does not trade away.</h2>
          </div>
          <div className="card-grid">
            {principles.map((item) => (
              <article key={item.name} className="plain-card">
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
