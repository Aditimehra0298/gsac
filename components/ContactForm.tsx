"use client";

import { useState, type FormEvent } from "react";
import { council } from "@/lib/content";

type Field = "name" | "email" | "interest" | "message";
type Errors = Partial<Record<Field, string>>;

const interests = [
  "Taking an assessment",
  "Using GSAC standards",
  "Employing credential holders",
  "Delivering assessments",
  "An appeal or registry question",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [enquiry, setEnquiry] = useState("");
  const [copied, setCopied] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Enter the name the secretariat should use.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter an email address where we can reply.";
    }
    if (!interest) next.interest = "Choose what the enquiry is about.";
    if (message.trim().length < 20) {
      next.message = "Write at least a few sentences so the right body can answer.";
    }
    return next;
  }

  function compose() {
    const lines = [
      `To: ${council.email}`,
      `From: ${name.trim()} <${email.trim()}>`,
      organization.trim() ? `Organisation: ${organization.trim()}` : "",
      `Subject: ${interest}`,
      "",
      message.trim(),
    ];
    return lines.filter((line, index) => line !== "" || index > 3).join("\n");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    setCopied(false);
    if (Object.keys(next).length > 0) return;
    setEnquiry(compose());
  }

  async function copyEnquiry() {
    try {
      await navigator.clipboard.writeText(enquiry);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (enquiry) {
    return (
      <div className="notice">
        <p className="kicker">Enquiry composed</p>
        <h2>Ready for the secretariat.</h2>
        <p>
          This copy is addressed to {council.email}. Connect that mailbox when the council
          is ready to receive post. Until then, copy the enquiry and keep it.
        </p>
        <pre>{enquiry}</pre>
        <div className="actions">
          <button type="button" className="button button-ink" onClick={copyEnquiry}>
            {copied ? "Copied" : "Copy enquiry"}
          </button>
          <button
            type="button"
            className="button button-line"
            onClick={() => {
              setEnquiry("");
              setCopied(false);
            }}
          >
            Edit message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name ? <p className="field-error">{errors.name}</p> : null}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email ? <p className="field-error">{errors.email}</p> : null}
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="organization">Organisation</label>
          <input
            id="organization"
            name="organization"
            autoComplete="organization"
            value={organization}
            onChange={(event) => setOrganization(event.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="interest">Enquiry</label>
          <select
            id="interest"
            name="interest"
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
          >
            <option value="">Select a subject</option>
            {interests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.interest ? <p className="field-error">{errors.interest}</p> : null}
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        {errors.message ? <p className="field-error">{errors.message}</p> : null}
      </div>
      <button type="submit" className="button button-ink">
        Compose enquiry
      </button>
    </form>
  );
}
