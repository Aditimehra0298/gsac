import { domains } from "@/lib/content";

export function Marquee() {
  const loop = [...domains, ...domains];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((domain, index) => (
          <span key={`${domain.code}-${index}`}>{domain.name}</span>
        ))}
      </div>
    </div>
  );
}
