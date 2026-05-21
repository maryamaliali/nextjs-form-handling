"use client";

import {
  startTransition,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

export type RevealVariant = "up" | "fade" | "scale" | "left" | "right";

const VARIANT_CLASS: Record<RevealVariant, string> = {
  up: "msa-reveal-up",
  fade: "msa-reveal-fade",
  scale: "msa-reveal-scale",
  left: "msa-reveal-left",
  right: "msa-reveal-right",
};

type Props = {
  children: ReactNode;
  className?: string;
  /** Animation style (default: up). */
  variant?: RevealVariant;
  /** Delay in ms before the reveal runs (stagger grids). */
  delay?: number;
  /** Run on mount instead of waiting for scroll (hero, page headers). */
  eager?: boolean;
} & Pick<HTMLAttributes<HTMLDivElement>, "id">;

/**
 * Scroll-in (or eager) reveal; respects `prefers-reduced-motion`.
 */
export function SectionReveal({
  children,
  className,
  id,
  variant = "up",
  delay = 0,
  eager = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      startTransition(() => setShow(true));
      return;
    }

    if (eager) {
      const t = window.setTimeout(
        () => startTransition(() => setShow(true)),
        Math.max(0, delay),
      );
      return () => window.clearTimeout(t);
    }

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          startTransition(() => {
            setShow(true);
            obs.disconnect();
          });
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [eager, delay]);

  const style: CSSProperties | undefined =
    delay > 0 ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={[
        VARIANT_CLASS[variant],
        show ? "msa-reveal-active" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
