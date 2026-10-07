"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Arrow } from "../Arrow";

export function RegistrySearch() {
  const router = useRouter();
  const [value, setValue] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const id = value.trim();
    router.push(id ? `/recognition?id=${encodeURIComponent(id)}` : "/recognition");
  }

  return (
    <section className="registry-band" data-reveal>
      <div className="wrap">
        <p className="kicker">Registry</p>
        <h2>Find a specimen record.</h2>
        <p className="lede">
          Already have an ID? The specimen register uses the same format the live register will use.
        </p>
        <form className="registry-form" onSubmit={onSubmit}>
          <label className="sr-only" htmlFor="home-registry">
            Registry ID
          </label>
          <input
            id="home-registry"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="GSAC-DIG-L3-2026-004821"
            spellCheck={false}
            autoCapitalize="characters"
          />
          <button type="submit" className="button">
            Look up <Arrow />
          </button>
        </form>
      </div>
    </section>
  );
}
