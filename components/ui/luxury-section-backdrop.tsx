export function LuxurySectionBackdrop() {
  return (
    <svg
      className="msa-luxury-section-backdrop"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="msa-lux-section-glow-1" cx="20%" cy="20%" r="40%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="msa-lux-section-glow-2" cx="80%" cy="80%" r="45%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
        <pattern id="msa-lux-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="var(--foreground)" fillOpacity="0.08" />
        </pattern>
      </defs>

      <rect width="1600" height="900" fill="url(#msa-lux-dots)" />
      <rect width="1600" height="900" fill="url(#msa-lux-section-glow-1)" />
      <rect width="1600" height="900" fill="url(#msa-lux-section-glow-2)" />

      <g className="msa-luxury-section-rings" style={{ transformOrigin: '800px 450px' }}>
        <circle cx="800" cy="450" r="280" fill="none" stroke="var(--primary)" strokeOpacity="0.1" strokeWidth="1" />
        <circle cx="800" cy="450" r="380" fill="none" stroke="var(--primary)" strokeOpacity="0.07" strokeWidth="1" />
        <circle cx="800" cy="450" r="480" fill="none" stroke="var(--primary)" strokeOpacity="0.05" strokeWidth="1" />
      </g>

      <g className="msa-float">
        <circle cx="200" cy="160" r="10" fill="var(--primary)" fillOpacity="0.35" />
      </g>
      <g className="msa-float-slow">
        <circle cx="1380" cy="220" r="14" fill="var(--primary)" fillOpacity="0.25" />
      </g>
      <g className="msa-orb-drift">
        <circle cx="240" cy="720" r="22" fill="var(--primary)" fillOpacity="0.18" />
      </g>
      <g className="msa-orb-drift-reverse">
        <circle cx="1340" cy="700" r="18" fill="var(--primary)" fillOpacity="0.18" />
      </g>
      <g className="msa-float">
        <circle cx="780" cy="120" r="6" fill="var(--primary)" fillOpacity="0.55" />
      </g>
      <g className="msa-float-slow">
        <circle cx="820" cy="780" r="8" fill="var(--primary)" fillOpacity="0.4" />
      </g>

      <path
        d="M 0 760 Q 400 700 800 760 T 1600 760"
        stroke="var(--primary)"
        strokeOpacity="0.15"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 0 800 Q 400 740 800 800 T 1600 800"
        stroke="var(--primary)"
        strokeOpacity="0.1"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
