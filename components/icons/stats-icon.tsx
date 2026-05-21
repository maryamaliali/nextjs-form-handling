import type { HomeStatHighlightKey } from "@/lib/constants";

export type StatsIconName = HomeStatHighlightKey | "totalPassed";

type StatsIconProps = {
  name: StatsIconName;
  /** Unique prefix for SVG gradient IDs (avoid clashes when multiple icons render). */
  idPrefix: string;
  className?: string;
};

function GradientDefs({ idPrefix }: { idPrefix: string }) {
  const main = `${idPrefix}-main`;
  const accent = `${idPrefix}-accent`;
  const glow = `${idPrefix}-glow`;

  return (
    <defs>
      <linearGradient id={main} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--primary)" stopOpacity="1" />
        <stop offset="100%" stopColor="color-mix(in oklch, var(--primary) 55%, white)" stopOpacity="1" />
      </linearGradient>
      <linearGradient id={accent} x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="color-mix(in oklch, var(--primary) 80%, oklch(0.75 0.14 85))" />
        <stop offset="100%" stopColor="var(--primary)" />
      </linearGradient>
      <radialGradient id={glow} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

export function StatsIcon({ name, idPrefix, className = "h-10 w-10" }: StatsIconProps) {
  const main = `url(#${idPrefix}-main)`;
  const accent = `url(#${idPrefix}-accent)`;

  switch (name) {
    case "totalPassed":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
          <GradientDefs idPrefix={idPrefix} />
          <circle cx="24" cy="24" r="20" fill={`url(#${idPrefix}-glow)`} className="msa-icon-pulse" />
          <path
            d="M24 8l3.2 6.5 7.2 1-5.2 5.1 1.2 7.2L24 24.8 17.6 27.8l1.2-7.2-5.2-5.1 7.2-1L24 8z"
            fill={main}
            className="msa-icon-draw"
          />
          <path
            d="M14 32c2.5 3.5 6.2 5.5 10 5.5s7.5-2 10-5.5"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            className="msa-icon-draw-delay"
          />
          <circle cx="18" cy="34" r="2.5" fill={main} />
          <circle cx="24" cy="36" r="2.5" fill={main} />
          <circle cx="30" cy="34" r="2.5" fill={main} />
        </svg>
      );
    case "pass":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
          <GradientDefs idPrefix={idPrefix} />
          <rect x="10" y="8" width="28" height="32" rx="4" fill={`url(#${idPrefix}-glow)`} />
          <rect x="10" y="8" width="28" height="32" rx="4" stroke={main} strokeWidth="2" fill="none" />
          <path
            d="M18 24l4 4 8-9"
            stroke={accent}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="msa-icon-check-draw"
          />
          <path d="M16 16h16" stroke={main} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    case "years":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
          <GradientDefs idPrefix={idPrefix} />
          <circle cx="24" cy="26" r="14" fill={`url(#${idPrefix}-glow)`} />
          <circle cx="24" cy="26" r="14" stroke={main} strokeWidth="2" fill="none" />
          <path
            d="M24 18v8l5 3"
            stroke={accent}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="msa-icon-spin-slow"
            style={{ transformOrigin: "24px 26px" }}
          />
          <path
            d="M24 10V8M24 42v-2M10 26H8M40 26h-2"
            stroke={main}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.45"
          />
          <circle cx="34" cy="14" r="3" fill={accent} className="msa-icon-sparkle" />
        </svg>
      );
    case "rating":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
          <GradientDefs idPrefix={idPrefix} />
          <circle cx="24" cy="24" r="18" fill={`url(#${idPrefix}-glow)`} className="msa-icon-pulse" />
          <path
            d="M24 10l3.4 7 7.8 1.1-5.6 5.5 1.3 7.7L24 27.2l-6.9 3.6 1.3-7.7-5.6-5.5 7.8-1.1L24 10z"
            fill={main}
            className="msa-icon-draw"
          />
          <path
            d="M24 32l1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9-3.6 1.9-0.7-4 2.9-2.8-4-0.6L24 32z"
            fill={accent}
            className="msa-icon-sparkle"
            style={{ transformOrigin: "24px 36px" }}
          />
        </svg>
      );
    default:
      return null;
  }
}
