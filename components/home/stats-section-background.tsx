type StatsSectionBackgroundProps = {
  className?: string;
};

/** Decorative elliptical rings behind the home stats carousel. */
export function StatsSectionBackground({
  className,
}: StatsSectionBackgroundProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2000 1500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <ellipse
          id="msa-stats-bg-ellipse"
          fill="none"
          strokeWidth="1.2"
          strokeOpacity="0.36"
          rx="600"
          ry="450"
        />
      </defs>
      <g style={{ transformOrigin: "center" }}>
        <g transform="rotate(180 0 0)" style={{ transformOrigin: "center" }}>
          <g transform="rotate(-160 0 0)" style={{ transformOrigin: "center" }}>
            <g transform="translate(1000 750)">
              <use
                stroke="#27002B"
                href="#msa-stats-bg-ellipse"
                transform="rotate(-60 0 0) scale(0.4)"
              />
              <use
                stroke="#300729"
                href="#msa-stats-bg-ellipse"
                transform="rotate(-50 0 0) scale(0.5)"
              />
              <use
                stroke="#3a0e28"
                href="#msa-stats-bg-ellipse"
                transform="rotate(-40 0 0) scale(0.6)"
              />
              <use
                stroke="#431626"
                href="#msa-stats-bg-ellipse"
                transform="rotate(-30 0 0) scale(0.7)"
              />
              <use
                stroke="#4c1d24"
                href="#msa-stats-bg-ellipse"
                transform="rotate(-20 0 0) scale(0.8)"
              />
              <use
                stroke="#562423"
                href="#msa-stats-bg-ellipse"
                transform="rotate(-10 0 0) scale(0.9)"
              />
              <use stroke="#5f2b21" href="#msa-stats-bg-ellipse" />
              <use
                stroke="#683220"
                href="#msa-stats-bg-ellipse"
                transform="rotate(10 0 0) scale(1.1)"
              />
              <use
                stroke="#72391e"
                href="#msa-stats-bg-ellipse"
                transform="rotate(20 0 0) scale(1.2)"
              />
              <use
                stroke="#7b411c"
                href="#msa-stats-bg-ellipse"
                transform="rotate(30 0 0) scale(1.3)"
              />
              <use
                stroke="#84481b"
                href="#msa-stats-bg-ellipse"
                transform="rotate(40 0 0) scale(1.4)"
              />
              <use
                stroke="#8e4f19"
                href="#msa-stats-bg-ellipse"
                transform="rotate(50 0 0) scale(1.5)"
              />
              <use
                stroke="#975617"
                href="#msa-stats-bg-ellipse"
                transform="rotate(60 0 0) scale(1.6)"
              />
              <use
                stroke="#a05d16"
                href="#msa-stats-bg-ellipse"
                transform="rotate(70 0 0) scale(1.7)"
              />
              <use
                stroke="#a96514"
                href="#msa-stats-bg-ellipse"
                transform="rotate(80 0 0) scale(1.8)"
              />
              <use
                stroke="#b36c12"
                href="#msa-stats-bg-ellipse"
                transform="rotate(90 0 0) scale(1.9)"
              />
              <use
                stroke="#bc7311"
                href="#msa-stats-bg-ellipse"
                transform="rotate(100 0 0) scale(2)"
              />
              <use
                stroke="#c57a0f"
                href="#msa-stats-bg-ellipse"
                transform="rotate(110 0 0) scale(2.1)"
              />
              <use
                stroke="#cf810e"
                href="#msa-stats-bg-ellipse"
                transform="rotate(120 0 0) scale(2.2)"
              />
              <use
                stroke="#d8880c"
                href="#msa-stats-bg-ellipse"
                transform="rotate(130 0 0) scale(2.3)"
              />
              <use
                stroke="#e1900a"
                href="#msa-stats-bg-ellipse"
                transform="rotate(140 0 0) scale(2.4)"
              />
              <use
                stroke="#eb9709"
                href="#msa-stats-bg-ellipse"
                transform="rotate(150 0 0) scale(2.5)"
              />
              <use
                stroke="#F49E07"
                href="#msa-stats-bg-ellipse"
                transform="rotate(160 0 0) scale(2.6)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
