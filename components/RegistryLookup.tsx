"use client";

import { useState, type FormEvent } from "react";
import { specimens } from "@/lib/content";
import { CredentialCard } from "./CredentialCard";

export function RegistryLookup({ initialId = "" }: { initialId?: string }) {
  const [query, setQuery] = useState(initialId);
  const [searched, setSearched] = useState(initialId.trim().toUpperCase());

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearched(query.trim().toUpperCase());
  }

  const match = specimens.find((record) => record.id === searched);

  return (
    <div className="lookup">
      <form className="lookup-form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="registry-id">Registry ID</label>
          <input
            id="registry-id"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="GSAC-DIG-L3-2026-004821"
            spellCheck={false}
            autoCapitalize="characters"
          />
        </div>
        <button type="submit" className="button button-ink">
          Look up
        </button>
      </form>
      {searched && match ? <CredentialCard record={match} /> : null}
      {searched && !match ? (
        <p className="empty">No specimen record uses {searched}. Try one of the IDs in the table.</p>
      ) : null}
    </div>
  );
}
