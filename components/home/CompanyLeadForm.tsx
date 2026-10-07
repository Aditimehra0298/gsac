"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { council } from "@/lib/content";

type Errors = Partial<Record<"name" | "company" | "phone", string>>;

export function CompanyLeadForm({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();
  const copy = t.audiences.form;
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = copy.errors.name;
    if (company.trim().length < 2) next.company = copy.errors.company;
    if (!/^[\d\s+()-]{7,}$/.test(phone.trim())) next.phone = copy.errors.phone;
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(copy.mailSubject);
    const body = encodeURIComponent(
      [
        `${copy.name}: ${name.trim()}`,
        `${copy.company}: ${company.trim()}`,
        `${copy.phone}: ${phone.trim()}`,
        "",
        copy.mailBody,
      ].join("\n"),
    );
    window.location.href = `mailto:${council.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className={compact ? "company-lead is-compact is-done" : "company-lead is-done"}>
        <p className="kicker">{copy.kicker}</p>
        <h3>{copy.successTitle}</h3>
        <p>{copy.successText}</p>
      </div>
    );
  }

  return (
    <form
      className={compact ? "company-lead is-compact" : "company-lead"}
      onSubmit={onSubmit}
      noValidate
    >
      <p className="kicker">{copy.kicker}</p>
      <h3>{copy.title}</h3>
      {!compact ? <p className="company-lead-lede">{copy.lede}</p> : null}

      <label>
        <span>{copy.name}</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={copy.namePlaceholder}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? <em>{errors.name}</em> : null}
      </label>

      <label>
        <span>{copy.company}</span>
        <input
          type="text"
          name="company"
          autoComplete="organization"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          placeholder={copy.companyPlaceholder}
          aria-invalid={Boolean(errors.company)}
        />
        {errors.company ? <em>{errors.company}</em> : null}
      </label>

      <label>
        <span>{copy.phone}</span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder={copy.phonePlaceholder}
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone ? <em>{errors.phone}</em> : null}
      </label>

      <button type="submit" className="button">
        {copy.submit}
      </button>
    </form>
  );
}
