type TotalPassedTrophyProps = {
  className?: string;
};

const id = "total-passed-trophy";

export function TotalPassedTrophy({ className = "" }: TotalPassedTrophyProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={200}
      height={200}
      className={`msa-total-passed-trophy pointer-events-none ${className}`}
      aria-hidden
    >
      <defs>
        <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id={`${id}-gradiente`}>
          <stop stopColor="var(--trophy-base-deeper)" offset="20%" />
          <stop stopColor="var(--trophy-base-mid)" offset="60%" />
        </linearGradient>
        <linearGradient y2="100%" x2="0%" y1="-17%" x1="10%" id={`${id}-gradiente2`}>
          <stop stopColor="var(--trophy-primary-faint)" offset="20%" />
          <stop
            stopColor="var(--trophy-primary-shine)"
            offset="100%"
            className="msa-trophy-animated-stop"
          />
        </linearGradient>
        <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id={`${id}-gradiente3`}>
          <stop stopColor="var(--trophy-primary-faint)" offset="20%" />
          <stop
            stopColor="var(--trophy-primary-shine)"
            offset="100%"
            className="msa-trophy-animated-stop"
          />
        </linearGradient>
      </defs>
      <g style={{ order: -1 }}>
        <polygon
          transform="rotate(45 100 100)"
          strokeWidth={1}
          stroke="var(--trophy-primary)"
          fill="none"
          points="70,70 148,50 130,130 50,150"
          className="msa-trophy-bounce-ring"
        />
        <polygon
          transform="rotate(45 100 100)"
          strokeWidth={1}
          stroke="var(--trophy-primary)"
          fill="none"
          points="70,70 148,50 130,130 50,150"
          className="msa-trophy-bounce-ring-2"
        />
        <polygon
          transform="rotate(45 100 100)"
          strokeWidth={2}
          stroke="none"
          fill="var(--trophy-base-mid)"
          points="70,70 150,50 130,130 50,150"
        />
        <polygon
          strokeWidth={2}
          stroke="none"
          fill={`url(#${id}-gradiente)`}
          points="100,70 150,100 100,130 50,100"
        />
        <polygon
          transform="translate(20, 31)"
          strokeWidth={2}
          stroke="none"
          fill="var(--trophy-primary-dark)"
          points="80,50 80,75 80,99 40,75"
        />
        <polygon
          transform="translate(20, 31)"
          strokeWidth={2}
          stroke="none"
          fill={`url(#${id}-gradiente2)`}
          points="40,-40 80,-40 80,99 40,75"
        />
        <polygon
          transform="rotate(180 100 100) translate(20, 20)"
          strokeWidth={2}
          stroke="none"
          fill="var(--trophy-primary)"
          points="80,50 80,75 80,99 40,75"
        />
        <polygon
          transform="rotate(0 100 100) translate(60, 20)"
          strokeWidth={2}
          stroke="none"
          fill={`url(#${id}-gradiente3)`}
          points="40,-40 80,-40 80,85 40,110.2"
        />
        <polygon
          transform="rotate(45 100 100) translate(80, 95)"
          strokeWidth={2}
          stroke="none"
          fill="var(--trophy-primary-light)"
          points="5,0 5,5 0,5 0,0"
          className="msa-trophy-particle"
        />
        <polygon
          transform="rotate(45 100 100) translate(80, 55)"
          strokeWidth={2}
          stroke="none"
          fill="var(--trophy-primary-soft)"
          points="6,0 6,6 0,6 0,0"
          className="msa-trophy-particle"
        />
        <polygon
          transform="rotate(45 100 100) translate(70, 80)"
          strokeWidth={2}
          stroke="none"
          fill="var(--primary-foreground)"
          points="2,0 2,2 0,2 0,0"
          className="msa-trophy-particle"
        />
        <polygon
          strokeWidth={2}
          stroke="none"
          fill="var(--trophy-base-dark)"
          points="29.5,99.8 100,142 100,172 29.5,130"
        />
        <polygon
          transform="translate(50, 92)"
          strokeWidth={2}
          stroke="none"
          fill="var(--trophy-base-deeper)"
          points="50,50 120.5,8 120.5,35 50,80"
        />
      </g>
    </svg>
  );
}
