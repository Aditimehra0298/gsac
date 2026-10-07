import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { council } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to the Global Skills Assessment Council secretariat.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero page="contact" />
      <section className="section" data-reveal>
        <div className="wrap split">
          <ContactForm />
          <aside className="aside-panel">
            <p className="kicker">What to include</p>
            <ul className="ticks">
              <li>The domain and level, if you know them.</li>
              <li>Whether you are a candidate, an employer, or a public body.</li>
              <li>For an appeal or a check, the registry ID.</li>
            </ul>
            <p>
              Secretariat address: <a href={`mailto:${council.email}`}>{council.email}</a>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
