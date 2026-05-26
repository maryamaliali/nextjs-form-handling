"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type CopyButtonProps = {
  value: string;
  /** Accessible label shown to screen readers and as the default tooltip. */
  label: string;
  /** Tooltip / aria-live text shown briefly after a successful copy. */
  successLabel: string;
  /** Tooltip / aria-live text shown briefly after a failed copy. */
  errorLabel: string;
  className?: string;
  /** How long the success/error feedback stays visible. */
  resetMs?: number;
};

type Status = "idle" | "copied" | "error";

/**
 * Small icon button that copies `value` to the user's clipboard.
 *
 * Tries `navigator.clipboard.writeText` first and falls back to a hidden
 * `<textarea>` + `document.execCommand("copy")` for older browsers / non-secure
 * contexts. The visible icon swaps to a checkmark for `resetMs` milliseconds
 * after a successful copy, and an aria-live region announces the result.
 */
export function CopyButton({
  value,
  label,
  successLabel,
  errorLabel,
  className,
  resetMs = 1800,
}: CopyButtonProps) {
  const [status, setStatus] = useState<Status>("idle");
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const scheduleReset = useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setStatus("idle");
      timerRef.current = null;
    }, resetMs);
  }, [resetMs]);

  const handleCopy = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();

      const writeWithFallback = async () => {
        if (
          typeof navigator !== "undefined" &&
          navigator.clipboard &&
          window.isSecureContext
        ) {
          await navigator.clipboard.writeText(value);
          return;
        }
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.top = "0";
        ta.style.left = "0";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        if (!ok) throw new Error("execCommand copy failed");
      };

      try {
        await writeWithFallback();
        setStatus("copied");
      } catch {
        setStatus("error");
      }
      scheduleReset();
    },
    [value, scheduleReset],
  );

  const tooltip =
    status === "copied"
      ? successLabel
      : status === "error"
        ? errorLabel
        : label;

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={tooltip}
      title={tooltip}
      data-status={status}
      className={
        "group/copy inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground/80 transition hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 data-[status=copied]:text-primary data-[status=error]:text-destructive" +
        (className ? ` ${className}` : "")
      }
    >
      <span aria-hidden className="relative block h-4 w-4">
        <CopyIcon
          className={
            "absolute inset-0 h-4 w-4 transition-all duration-200 " +
            (status === "copied"
              ? "scale-75 opacity-0"
              : "scale-100 opacity-100")
          }
        />
        <CheckIcon
          className={
            "absolute inset-0 h-4 w-4 transition-all duration-200 " +
            (status === "copied"
              ? "scale-100 opacity-100"
              : "scale-75 opacity-0")
          }
        />
      </span>
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {status === "copied"
          ? successLabel
          : status === "error"
            ? errorLabel
            : ""}
      </span>
    </button>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="9" y="9" width="11" height="11" rx="2.2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}
