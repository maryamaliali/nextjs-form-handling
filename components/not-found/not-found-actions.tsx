"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { SectionReveal } from "@/components/section-reveal";

type NotFoundActionsProps = {
  backLabel: string;
  homeHref: string;
  homeLabel: string;
};

export function NotFoundActions({
  backLabel,
  homeHref,
  homeLabel,
}: NotFoundActionsProps) {
  const router = useRouter();

  return (
    <SectionReveal eager variant="up" delay={280}>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {backLabel}
        </button>
        <Link
          href={homeHref}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {homeLabel}
        </Link>
      </div>
    </SectionReveal>
  );
}
