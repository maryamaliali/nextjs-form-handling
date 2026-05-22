import type { ReactElement } from "react";

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Subtle road curves for hero backdrop (no grid) */
export function HeroBackgroundPattern({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="msa-hero-fade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M-40 520 Q200 380 400 420 T840 360"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M120 600 Q320 460 520 500 T900 440"
        stroke="url(#msa-hero-fade)"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M600 80 L640 40 M640 40 L680 80 M640 40 L640 120"
        stroke="currentColor"
        strokeOpacity="0.08"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/** Thick tilted accent from upper-right to lower-left */
export function HeroDiagonalLine({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient
          id="msa-hero-diagonal-grad"
          x1="100%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
          <stop offset="35%" stopColor="var(--primary)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <line
        className="msa-hero-diagonal-stroke"
        x1="92"
        y1="4"
        x2="8"
        y2="96"
        stroke="url(#msa-hero-diagonal-grad)"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeroCarIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 14h16l-1.5-5H5.5L4 14Zm0 0v3h2.5M19.5 17H22v-3"
        {...stroke}
      />
      <circle cx="8" cy="17" r="1.5" fill="currentColor" />
      <circle cx="16" cy="17" r="1.5" fill="currentColor" />
      <path d="M9 9h6" {...stroke} />
    </svg>
  );
}

export function HeroSteeringIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" {...stroke} />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3" {...stroke} />
    </svg>
  );
}

export function HeroShieldIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"
        {...stroke}
      />
      <path d="m9 12 2 2 4-4" {...stroke} />
    </svg>
  );
}

export function HeroMapIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
        {...stroke}
      />
      <circle cx="12" cy="10" r="2.5" {...stroke} />
    </svg>
  );
}

export function HeroGearIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="3" {...stroke} />
      <path
        d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4"
        {...stroke}
      />
    </svg>
  );
}

const heroCardShell =
  "msa-hero-feature-card rounded-2xl border border-border/70 bg-card/80 p-4 shadow-lg shadow-foreground/5 backdrop-blur-md";

function HeroCardMeterSvg() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="msa-meter-arc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--primary)" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="62" r="42" stroke="currentColor" strokeOpacity="0.12" strokeWidth="6" />
      <path
        d="M24 72 A42 42 0 0 1 96 72"
        stroke="url(#msa-meter-arc)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="60" cy="62" r="4" fill="var(--primary)" />
      <path
        d="M60 62 L78 48"
        stroke="var(--primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <text
        x="60"
        y="88"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.45"
        fontSize="9"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
      >
        MPH
      </text>
      {[0, 1, 2, 3, 4].map((i) => {
        const a = Math.PI + (i / 4) * Math.PI;
        const x1 = 60 + Math.cos(a) * 34;
        const y1 = 62 + Math.sin(a) * 34;
        const x2 = 60 + Math.cos(a) * 40;
        const y2 = 62 + Math.sin(a) * 40;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function HeroCardDrivingSvg() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-full w-full" aria-hidden>
      <path
        d="M8 88h104"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 88h12M40 88h8M60 88h14M88 88h10"
        stroke="var(--primary)"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M28 72c8-14 28-18 44-12 10 4 18 14 20 28H32c-2-10-2-12-4-16Z"
        fill="var(--primary)"
        fillOpacity="0.2"
        stroke="var(--primary)"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M32 72h52l-6-16H38l-6 16Z"
        stroke="var(--primary)"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="42" cy="72" r="7" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
      <circle cx="74" cy="72" r="7" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
      <circle cx="42" cy="72" r="2.5" fill="var(--primary)" />
      <circle cx="74" cy="72" r="2.5" fill="var(--primary)" />
      <path
        d="M8 52h20M92 48h16"
        stroke="var(--primary)"
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M96 40l8 8-8 8"
        stroke="var(--primary)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroCardLicenseSvg() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-full w-full" aria-hidden>
      <rect
        x="18"
        y="28"
        width="84"
        height="64"
        rx="10"
        fill="var(--primary)"
        fillOpacity="0.08"
        stroke="var(--primary)"
        strokeWidth="1.75"
      />
      <rect
        x="26"
        y="38"
        width="28"
        height="34"
        rx="6"
        fill="currentColor"
        fillOpacity="0.06"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.25"
      />
      <circle cx="40" cy="52" r="8" stroke="var(--primary)" strokeWidth="1.5" />
      <path
        d="M34 62c3 4 9 4 12 0"
        stroke="var(--primary)"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M62 44h34M62 54h28M62 64h22"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect
        x="62"
        y="72"
        width="22"
        height="14"
        rx="3"
        fill="var(--primary)"
        fillOpacity="0.25"
      />
      <path
        d="M66 79h14M66 83h10"
        stroke="var(--primary)"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="88" cy="36" r="10" fill="var(--primary)" fillOpacity="0.15" />
      <path
        d="M84 36l3 3 6-7"
        stroke="var(--primary)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroCardTestSvg() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-full w-full" aria-hidden>
      <rect
        x="28"
        y="24"
        width="64"
        height="76"
        rx="10"
        fill="var(--primary)"
        fillOpacity="0.08"
        stroke="var(--primary)"
        strokeWidth="1.75"
      />
      <path
        d="M40 40h40M40 52h32M40 64h36"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {[72, 84].map((y, i) => (
        <g key={y}>
          <rect
            x="40"
            y={y}
            width="14"
            height="14"
            rx="4"
            fill="var(--primary)"
            fillOpacity={i === 0 ? 0.35 : 0.15}
            stroke="var(--primary)"
            strokeWidth="1.25"
          />
          {i === 0 ? (
            <path
              d="M44 81l3 3 6-7"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : null}
        </g>
      ))}
      <circle cx="88" cy="36" r="14" fill="var(--primary)" fillOpacity="0.2" />
      <path
        d="M88 30v12M82 36h12"
        stroke="var(--primary)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeroCardScheduleSvg() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-full w-full" aria-hidden>
      <rect
        x="26"
        y="30"
        width="68"
        height="62"
        rx="10"
        fill="var(--primary)"
        fillOpacity="0.08"
        stroke="var(--primary)"
        strokeWidth="1.75"
      />
      <path d="M26 46h68" stroke="var(--primary)" strokeWidth="1.75" />
      <path
        d="M44 30v12M76 30v12"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {[
        [44, 58],
        [60, 58],
        [76, 58],
        [44, 74],
        [60, 74],
      ].map(([cx, cy], i) => (
        <rect
          key={`${cx}-${cy}`}
          x={cx - 6}
          y={cy - 6}
          width="12"
          height="12"
          rx="3"
          fill={i === 2 ? "var(--primary)" : "currentColor"}
          fillOpacity={i === 2 ? 0.45 : 0.1}
        />
      ))}
      <circle cx="88" cy="78" r="16" fill="var(--primary)" fillOpacity="0.15" />
      <path
        d="M88 72v10M83 77h10"
        stroke="var(--primary)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeroCardInstructorSvg() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-full w-full" aria-hidden>
      <circle
        cx="60"
        cy="44"
        r="18"
        fill="var(--primary)"
        fillOpacity="0.12"
        stroke="var(--primary)"
        strokeWidth="1.75"
      />
      <circle cx="60" cy="40" r="7" stroke="var(--primary)" strokeWidth="1.5" />
      <path
        d="M48 58c4-8 20-8 24 0"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M36 88c6-14 48-14 48 0"
        stroke="var(--primary)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M78 32l10 6-10 6"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 52 34 58 24 64Z"
        fill="var(--primary)"
        fillOpacity="0.25"
        stroke="var(--primary)"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={84 + i * 5}
          y={78}
          width={4}
          height={4}
          rx={1}
          fill="var(--primary)"
          fillOpacity={0.4 + i * 0.12}
        />
      ))}
    </svg>
  );
}

/** Stagger via width + alignment so cards never overflow the carousel on the right. */
export const HERO_FEATURE_CARD_STAGGER = [
  "lg:max-w-[calc(100%-2rem)] lg:mr-auto lg:ml-0",
  "lg:max-w-[calc(100%-2rem)] lg:ml-auto lg:mr-0",
  "lg:max-w-[calc(100%-1.25rem)] lg:mx-auto",
] as const;

export const HERO_FEATURE_CARD_KEYS = [
  "meter",
  "driving",
  "license",
  "test",
  "schedule",
  "instructor",
] as const;

export type HeroFeatureCardKey = (typeof HERO_FEATURE_CARD_KEYS)[number];

export type HeroFeatureCardLabels = Record<HeroFeatureCardKey, string>;

const heroFeatureCardSvgs: Record<HeroFeatureCardKey, () => ReactElement> = {
  meter: HeroCardMeterSvg,
  driving: HeroCardDrivingSvg,
  license: HeroCardLicenseSvg,
  test: HeroCardTestSvg,
  schedule: HeroCardScheduleSvg,
  instructor: HeroCardInstructorSvg,
};

export function HeroFeatureCard({
  label,
  Svg,
  staggerClass,
}: {
  label: string;
  Svg: () => ReactElement;
  staggerClass: string;
}) {
  return (
    <div
      className={`${heroCardShell} box-border h-[8.75rem] w-full shrink-0 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 ${staggerClass}`}
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          {label}
        </span>
        <span className="h-1.5 w-8 rounded-full bg-primary/40" />
      </div>
      <div className="h-[5.5rem] w-full text-primary">
        <Svg />
      </div>
    </div>
  );
}

export function buildHeroFeatureCards(labels: HeroFeatureCardLabels) {
  return HERO_FEATURE_CARD_KEYS.map((key) => ({
    key,
    label: labels[key],
    Svg: heroFeatureCardSvgs[key],
  }));
}
