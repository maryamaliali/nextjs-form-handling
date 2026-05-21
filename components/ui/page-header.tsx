import { SectionReveal } from "@/components/section-reveal";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  /** Optional extra line (e.g. pricing disclaimer). */
  note?: string;
  className?: string;
};

export function PageHeader({ title, subtitle, note, className }: PageHeaderProps) {
  return (
    <SectionReveal
      eager
      variant="up"
      className={`msa-hero-top-spacing mx-auto max-w-2xl text-center ${className ?? ""}`}
    >
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">{subtitle}</p>
        {note ? (
          <p className="mt-2 text-xs text-muted-foreground">{note}</p>
        ) : null}
      </header>
    </SectionReveal>
  );
}
