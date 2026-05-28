/** Fixed page backdrop — soft gradient + booking-themed SVG. */
export function BookingPageBackdrop() {
  return (
    <div className="msa-booking-page__backdrop" aria-hidden>
      <div className="msa-booking-page__backdrop-gradient" />
      <svg
        className="msa-booking-page__backdrop-svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="msa-booking-sky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
          <pattern
            id="msa-booking-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="var(--foreground)"
              strokeOpacity="0.04"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>

        <rect width="1600" height="900" fill="url(#msa-booking-sky)" />
        <rect width="1600" height="900" fill="url(#msa-booking-grid)" />

        <g opacity="0.55">
          <rect
            x="140"
            y="120"
            width="200"
            height="160"
            rx="20"
            fill="var(--primary)"
            fillOpacity="0.04"
            stroke="var(--primary)"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          <path
            d="M 180 170 h 120 M 180 210 h 80 M 180 250 h 100"
            stroke="var(--primary)"
            strokeOpacity="0.2"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="300" cy="150" r="14" fill="var(--primary)" fillOpacity="0.15" />
        </g>

        <g opacity="0.45" className="msa-booking-backdrop-float">
          <rect
            x="1180"
            y="520"
            width="240"
            height="180"
            rx="24"
            fill="var(--primary)"
            fillOpacity="0.05"
            stroke="var(--primary)"
            strokeOpacity="0.1"
            strokeWidth="1"
          />
          <path
            d="M 1220 580 h 160 M 1220 620 h 120 M 1220 660 h 140"
            stroke="var(--primary)"
            strokeOpacity="0.16"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        <path
          d="M 0 680 C 320 620 480 740 800 700 S 1280 640 1600 700"
          fill="none"
          stroke="var(--primary)"
          strokeOpacity="0.1"
          strokeWidth="2"
        />
        <path
          d="M 0 720 C 280 660 520 780 820 740 S 1320 700 1600 760"
          fill="none"
          stroke="var(--primary)"
          strokeOpacity="0.07"
          strokeWidth="1.5"
          strokeDasharray="6 12"
          className="msa-about-dash-flow"
        />

        <g className="msa-float">
          <circle cx="220" cy="760" r="8" fill="var(--primary)" fillOpacity="0.2" />
        </g>
        <g className="msa-float-slow">
          <circle cx="1380" cy="200" r="10" fill="var(--primary)" fillOpacity="0.16" />
        </g>
      </svg>
    </div>
  );
}
