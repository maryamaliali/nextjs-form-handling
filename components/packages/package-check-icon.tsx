export function PackageCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      height={16}
      width={16}
      className={className ?? "shrink-0 text-primary"}
      aria-hidden
    >
      <rect fill="currentColor" rx={8} height={16} width={16} />
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth={1.5}
        stroke="var(--primary-foreground)"
        d="M5 8.5L7.5 10.5L11 6"
      />
    </svg>
  );
}
