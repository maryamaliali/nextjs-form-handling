/** Decorative SVG layers — each variant uses a unique visual language. */

export function OwnerHexBackdrop() {
  return (
    <svg
      className="msa-about-backdrop"
      viewBox="0 0 1200 420"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="msa-owner-hex-fill" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.02" />
        </linearGradient>
        <pattern
          id="msa-owner-hex-grid"
          width="56"
          height="48"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1) rotate(0)"
        >
          <path
            d="M28 4 L52 18 L52 42 L28 56 L4 42 L4 18 Z"
            fill="none"
            stroke="var(--primary)"
            strokeOpacity="0.09"
            strokeWidth="0.75"
            transform="translate(0 -4)"
          />
          <path
            d="M28 4 L52 18 L52 42 L28 56 L4 42 L4 18 Z"
            fill="none"
            stroke="var(--primary)"
            strokeOpacity="0.06"
            strokeWidth="0.75"
            transform="translate(28 20)"
          />
        </pattern>
        <radialGradient id="msa-owner-blob-a" cx="12%" cy="85%" r="35%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="msa-owner-blob-b" cx="92%" cy="15%" r="40%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1200" height="420" fill="url(#msa-owner-hex-fill)" />
      <rect width="1200" height="420" fill="url(#msa-owner-hex-grid)" />
      <rect width="1200" height="420" fill="url(#msa-owner-blob-a)" />
      <rect width="1200" height="420" fill="url(#msa-owner-blob-b)" />

      <g className="msa-owner-hex-drift" opacity="0.5">
        <path
          d="M 80 60 L 200 60 L 260 160 L 140 160 Z"
          fill="var(--primary)"
          fillOpacity="0.06"
          stroke="var(--primary)"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
        <path
          d="M 1000 280 L 1120 280 L 1160 380 L 1040 380 Z"
          fill="var(--primary)"
          fillOpacity="0.05"
          stroke="var(--primary)"
          strokeOpacity="0.1"
          strokeWidth="1"
        />
      </g>

      <path
        d="M 0 380 C 200 340 400 400 600 370 S 1000 320 1200 360"
        fill="none"
        stroke="var(--primary)"
        strokeOpacity="0.18"
        strokeWidth="2"
        strokeDasharray="8 14"
        className="msa-about-dash-flow"
      />
      <path
        d="M 0 60 L 1200 60"
        stroke="var(--foreground)"
        strokeOpacity="0.04"
        strokeWidth="1"
      />
      <path
        d="M 0 360 L 1200 360"
        stroke="var(--foreground)"
        strokeOpacity="0.04"
        strokeWidth="1"
      />
    </svg>
  );
}

export function MilestonesBackdrop() {
  return (
    <svg
      className="msa-about-backdrop"
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="msa-milestones-sweep" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1200" height="500" fill="url(#msa-milestones-sweep)" />

      <line
        x1="80"
        y1="250"
        x2="1120"
        y2="250"
        stroke="var(--primary)"
        strokeOpacity="0.15"
        strokeWidth="1"
        strokeDasharray="4 10"
      />

      {[200, 400, 600, 800, 1000].map((x) => (
        <g key={x}>
          <line
            x1={x}
            y1="230"
            x2={x}
            y2="270"
            stroke="var(--primary)"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
          <circle cx={x} cy="250" r="4" fill="var(--primary)" fillOpacity="0.35" />
        </g>
      ))}

      <g className="msa-milestones-corner-accent" stroke="var(--primary)" strokeOpacity="0.25" fill="none">
        <path d="M 40 40 L 40 120 L 120 120" strokeWidth="1.5" />
        <path d="M 1160 460 L 1160 380 L 1080 380" strokeWidth="1.5" />
      </g>

      <g className="msa-float-slow" opacity="0.4">
        <rect
          x="100"
          y="80"
          width="48"
          height="48"
          rx="8"
          fill="var(--primary)"
          fillOpacity="0.08"
          stroke="var(--primary)"
          strokeOpacity="0.15"
        />
      </g>
      <g className="msa-orb-drift" opacity="0.35">
        <rect
          x="1040"
          y="360"
          width="56"
          height="56"
          rx="10"
          fill="var(--primary)"
          fillOpacity="0.06"
          stroke="var(--primary)"
          strokeOpacity="0.12"
        />
      </g>
    </svg>
  );
}

export function SuccessStoryBackdrop() {
  return (
    <svg
      className="msa-about-backdrop"
      viewBox="0 0 900 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="msa-success-spot" cx="20%" cy="0%" r="65%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="900" height="400" fill="url(#msa-success-spot)" />

      <text
        x="48"
        y="200"
        fontSize="220"
        fontFamily="Georgia, serif"
        fill="var(--primary)"
        fillOpacity="0.08"
        className="msa-success-quote-mark"
      >
        “
      </text>

      <path
        d="M 720 320 Q 820 260 900 300"
        stroke="var(--primary)"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 60 340 Q 200 300 360 340 T 680 320"
        stroke="var(--primary)"
        strokeOpacity="0.12"
        strokeWidth="1"
        fill="none"
      />

      <g className="msa-float">
        <circle cx="820" cy="72" r="6" fill="var(--primary)" fillOpacity="0.4" />
      </g>
    </svg>
  );
}

export function IntroBackdrop() {
  return (
    <svg
      className="msa-about-backdrop"
      viewBox="0 0 1200 280"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id="msa-intro-lines" width="24" height="24" patternUnits="userSpaceOnUse">
          <line
            x1="0"
            y1="24"
            x2="24"
            y2="0"
            stroke="var(--foreground)"
            strokeOpacity="0.04"
            strokeWidth="0.5"
          />
        </pattern>
        <linearGradient id="msa-intro-top-fade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="1200" height="280" fill="url(#msa-intro-lines)" />
      <rect x="0" y="0" width="1200" height="80" fill="url(#msa-intro-top-fade)" />
      <g stroke="var(--primary)" strokeOpacity="0.15" fill="none">
        <circle cx="1100" cy="60" r="40" />
        <circle cx="1100" cy="60" r="58" strokeOpacity="0.08" />
      </g>
    </svg>
  );
}

export function ValuesBackdrop() {
  return (
    <svg
      className="msa-about-backdrop"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="msa-values-fade" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="1200" height="600" fill="url(#msa-values-fade)" />
      <g className="msa-values-grid-lines" stroke="var(--foreground)" strokeOpacity="0.05">
        {Array.from({ length: 12 }, (_, i) => (
          <line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="600" />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} />
        ))}
      </g>
      <path
        d="M 0 500 L 400 420 L 800 480 L 1200 440"
        stroke="var(--primary)"
        strokeOpacity="0.14"
        strokeWidth="1.5"
        fill="none"
        className="msa-about-dash-flow"
      />
    </svg>
  );
}
