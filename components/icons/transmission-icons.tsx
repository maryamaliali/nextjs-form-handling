const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Gear stick / H-pattern — manual transmission. */
export function ManualTransmissionIcon({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 4v16M16 4v16M8 12h8" {...stroke} />
      <circle cx="8" cy="4" r="1.75" fill="currentColor" stroke="none" />
      <circle cx="8" cy="12" r="1.75" fill="currentColor" stroke="none" />
      <circle cx="8" cy="20" r="1.75" fill="currentColor" stroke="none" />
      <circle cx="16" cy="4" r="1.75" fill="currentColor" stroke="none" />
      <circle cx="16" cy="12" r="1.75" fill="currentColor" stroke="none" />
      <circle cx="16" cy="20" r="1.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Drive selector with "A" — automatic transmission. */
export function AutomaticTransmissionIcon({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="7" y="3" width="10" height="18" rx="2" {...stroke} />
      <path d="M10 7h4M10 11h4M10 15h4" {...stroke} strokeOpacity="0.35" />
      <path
        d="M12 16.5c1.25 0 2.25-.85 2.25-1.9 0-1.05-1-1.9-2.25-1.9s-2.25.85-2.25 1.9 1 1.9 2.25 1.9Z"
        {...stroke}
      />
      <path d="M12 14.75V13" {...stroke} />
    </svg>
  );
}
