"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type Axis = "y" | "x";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /**
   * Movement strength in CSS pixels. Positive values push the layer in the
   * scroll direction; negative values push against it. Defaults to -40.
   */
  strength?: number;
  /** Axis to translate along. Defaults to `y`. */
  axis?: Axis;
  /** Adds a subtle scale-in as the element enters the viewport. */
  scaleIn?: boolean;
  /** Adds a subtle rotation tied to scroll progress (deg). */
  rotate?: number;
  /**
   * Disable the effect entirely. Useful for content that should
   * never move (e.g. when wrapped conditionally).
   */
  disabled?: boolean;
} & Pick<HTMLAttributes<HTMLDivElement>, "aria-hidden">;

/**
 * Wraps children in a layer that translates based on the element's
 * position in the viewport. The effect is throttled to one update per
 * frame via `requestAnimationFrame`, observes visibility with
 * `IntersectionObserver`, and respects `prefers-reduced-motion`.
 */
export function Parallax({
  children,
  className,
  strength = -40,
  axis = "y",
  scaleIn = false,
  rotate = 0,
  disabled = false,
  ...rest
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [offset, setOffset] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (disabled) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [disabled]);

  useEffect(() => {
    if (!enabled) {
      setOffset(0);
      setProgress(0);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let inView = false;

    const compute = () => {
      rafRef.current = null;
      if (!inView) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // `t` ranges from 0 when the element's center is at the bottom edge of
      // the viewport, to 1 when it's at the top edge. Centered = 0.5.
      const center = rect.top + rect.height / 2;
      const t = 1 - (center + rect.height / 2) / (vh + rect.height);
      const clamped = Math.min(1, Math.max(0, t));
      setProgress(clamped);
      // Centered around 0 (so an element in the middle of the viewport has
      // no offset and won't shift away from its intended layout position).
      setOffset((clamped - 0.5) * 2 * strength);
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(compute);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = !!entry?.isIntersecting;
        if (inView) compute();
      },
      { rootMargin: "10% 0px 10% 0px", threshold: 0 },
    );
    observer.observe(el);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    compute();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled, strength]);

  const translate =
    axis === "y" ? `translate3d(0, ${offset}px, 0)` : `translate3d(${offset}px, 0, 0)`;
  const rot = rotate ? ` rotate(${(progress - 0.5) * 2 * rotate}deg)` : "";
  const scale = scaleIn ? ` scale(${0.96 + progress * 0.04})` : "";

  const style: CSSProperties | undefined = enabled
    ? { transform: `${translate}${rot}${scale}`, willChange: "transform" }
    : undefined;

  return (
    <div ref={ref} className={className} style={style} {...rest}>
      {children}
    </div>
  );
}
