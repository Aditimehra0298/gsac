"use client";

import { useState } from "react";
import Link from "next/link";
import type { Faq } from "@/lib/faq";

function Chevron() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M6.2 3.4 12 9l-5.8 5.6" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function FaqAccordion({
  items,
  moreHref,
  moreLabel = "Help centre",
}: {
  items: Faq[];
  moreHref?: string;
  moreLabel?: string;
}) {
  const [open, setOpen] = useState(-1);

  return (
    <div className="sq-faq">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className={isOpen ? "sq-row is-open" : "sq-row"}>
            <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : index)}>
              {item.q}
              <Chevron />
            </button>
            <div className="sq-panel">
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
      {moreHref ? (
        <Link className="sq-row sq-more" href={moreHref}>
          {moreLabel}
          <Chevron />
        </Link>
      ) : null}
    </div>
  );
}
