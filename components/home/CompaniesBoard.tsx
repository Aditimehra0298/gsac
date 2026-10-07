"use client";

import { useLanguage } from "@/components/LanguageProvider";

const companies = [
  { name: "Northline Fabrication", sites: 4, learners: 186, pending: 12, status: "Active", image: "/hero/welding.jpg" },
  { name: "Delta Electrical Group", sites: 7, learners: 312, pending: 28, status: "Active", image: "/hero/electrical.jpg" },
  { name: "Harbour HVAC Partners", sites: 3, learners: 94, pending: 5, status: "Review", image: "/sections/skill-hvac.jpg" },
  { name: "Summit Welding Academy", sites: 2, learners: 141, pending: 9, status: "Active", image: "/hero/workshop.jpg" },
  { name: "CityWorks Plumbing Co.", sites: 5, learners: 203, pending: 17, status: "Active", image: "/hero/plumbing.jpg" },
  { name: "Axis Automotive Training", sites: 1, learners: 67, pending: 3, status: "Onboarding", image: "/sections/skill-auto.jpg" },
];

export function CompaniesBoard() {
  const { t } = useLanguage();
  const copy = t.companies;

  return (
    <section className="section companies-board" data-reveal>
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">{copy.kicker}</p>
          <h2>{copy.title}</h2>
          <p className="lede">{copy.lede}</p>
        </div>

        <div className="companies-stats">
          <article>
            <strong>{companies.length}</strong>
            <span>{copy.stats.companies}</span>
          </article>
          <article>
            <strong>{companies.reduce((sum, item) => sum + item.sites, 0)}</strong>
            <span>{copy.stats.sites}</span>
          </article>
          <article>
            <strong>{companies.reduce((sum, item) => sum + item.learners, 0)}</strong>
            <span>{copy.stats.learners}</span>
          </article>
          <article>
            <strong>{companies.reduce((sum, item) => sum + item.pending, 0)}</strong>
            <span>{copy.stats.pending}</span>
          </article>
        </div>

        <div className="companies-table-wrap">
          <table className="companies-table">
            <thead>
              <tr>
                <th>{copy.columns.company}</th>
                <th>{copy.columns.sites}</th>
                <th>{copy.columns.learners}</th>
                <th>{copy.columns.pending}</th>
                <th>{copy.columns.status}</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company) => (
                <tr key={company.name}>
                  <td>
                    <span className="companies-name">
                      <img src={company.image} alt="" />
                      {company.name}
                    </span>
                  </td>
                  <td>{company.sites}</td>
                  <td>{company.learners}</td>
                  <td>{company.pending}</td>
                  <td>
                    <em>{company.status}</em>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
