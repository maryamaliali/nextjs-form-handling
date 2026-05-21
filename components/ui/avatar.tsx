/** Initials avatar — no external images. */
export function Avatar({
  initials,
  className = "",
  size = "md",
}: {
  initials: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-9 w-9 text-[10px]",
    md: "h-11 w-11 text-xs",
    lg: "h-14 w-14 text-sm",
  } as const;

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 font-bold uppercase tracking-wide text-primary-foreground shadow-sm ring-2 ring-background ${sizes[size]} ${className}`}
      aria-hidden
    >
      {initials.slice(0, 3)}
    </span>
  );
}
