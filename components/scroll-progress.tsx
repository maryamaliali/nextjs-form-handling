"use client";

import { useEffect, useRef, useState } from "react";

type ScrollProgressProps = {
  /** Visual height of the progress bar. */
  height?: number;
  /** Stick to viewport top (default) or render in-place. */
  sticky?: boolean;
  className?: string;
};

/**
 * Thin gradient bar that tracks the page's vertical scroll progress.
 * Uses `requestAnimationFrame` to coalesce scroll events; respects
 * `prefers-reduced-motion` by snapping without transition.
 */
export function ScrollProgress({
  height = 3,
  sticky = true,
  className,
}: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      rafRef.current = null;
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const max = (doc.scrollHeight || 0) - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
      setProgress(p);
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={[
        "msa-scroll-progress",
        sticky ? "msa-scroll-progress--sticky" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ height }}
    >
      <span
        className="msa-scroll-progress-fill"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
