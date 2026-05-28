/** Fixed page backdrop — gradient + decorative SVG for the contact route. */
export function ContactPageBackdrop() {
  return (
    <div className="msa-contact-page__backdrop" aria-hidden>
      <div className="msa-contact-page__backdrop-gradient" />
      <svg
        className="msa-contact-page__backdrop-svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="msa-contact-glow-a" cx="18%" cy="22%" r="42%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="msa-contact-glow-b" cx="85%" cy="72%" r="48%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
          <pattern
            id="msa-contact-dots"
            width="36"
            height="36"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.1" fill="var(--foreground)" fillOpacity="0.07" />
          </pattern>
        </defs>

        <rect width="1600" height="900" fill="url(#msa-contact-dots)" />
        <rect width="1600" height="900" fill="url(#msa-contact-glow-a)" />
        <rect width="1600" height="900" fill="url(#msa-contact-glow-b)" />

        <g className="msa-contact-backdrop-rings" style={{ transformOrigin: "800px 420px" }}>
          <ellipse
            cx="800"
            cy="420"
            rx="320"
            ry="200"
            fill="none"
            stroke="var(--primary)"
            strokeOpacity="0.1"
            strokeWidth="1"
          />
          <ellipse
            cx="800"
            cy="420"
            rx="440"
            ry="280"
            fill="none"
            stroke="var(--primary)"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        </g>

        <path
          d="M 120 520 C 280 460 420 560 580 500 S 920 440 1080 500 S 1320 560 1480 500"
          fill="none"
          stroke="var(--primary)"
          strokeOpacity="0.14"
          strokeWidth="1.5"
          strokeDasharray="10 16"
          className="msa-about-dash-flow"
        />
        <path
          d="M 200 180 L 360 180 L 420 260 L 260 260 Z"
          fill="var(--primary)"
          fillOpacity="0.05"
          stroke="var(--primary)"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
        <path
          d="M 1180 620 L 1340 620 L 1390 700 L 1230 700 Z"
          fill="var(--primary)"
          fillOpacity="0.04"
          stroke="var(--primary)"
          strokeOpacity="0.1"
          strokeWidth="1"
        />

        <g className="msa-float">
          <circle cx="160" cy="720" r="12" fill="var(--primary)" fillOpacity="0.22" />
        </g>
        <g className="msa-float-slow">
          <circle cx="1420" cy="180" r="16" fill="var(--primary)" fillOpacity="0.18" />
        </g>
      </svg>
    </div>
  );
}
