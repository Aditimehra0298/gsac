export function Seal({ size = 48 }: { size?: number }) {
  return (
    <svg
      className="seal"
      width={size}
      height={size}
      viewBox="0 0 80 80"
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="36.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <path
        d="M40 13.2l1.35 3.05 3.25.28-2.48 2.1.75 3.15L40 20.4l-2.87 1.38.75-3.15-2.48-2.1 3.25-.28z"
        fill="currentColor"
      />
      <text
        x="40"
        y="48"
        textAnchor="middle"
        fill="currentColor"
        fontSize="15"
        fontFamily="var(--font-serif), Palatino, serif"
        fontWeight="600"
      >
        GSAC
      </text>
    </svg>
  );
}
