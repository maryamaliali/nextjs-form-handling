import { SectionReveal } from "@/components/section-reveal";
import { PackageCheckIcon } from "@/components/packages/package-check-icon";

export type ComparisonRow = {
  feature: string;
  starter: string;
  testReady: string;
  intensive: string;
};

export type PackagesComparisonProps = {
  title: string;
  subtitle: string;
  columnFeature: string;
  columns: { starter: string; testReady: string; intensive: string };
  rows: readonly ComparisonRow[];
  includedLabel: string;
  notIncludedLabel: string;
};

function CellValue({
  value,
  includedLabel,
  notIncludedLabel,
}: {
  value: string;
  includedLabel: string;
  notIncludedLabel: string;
}) {
  if (value === "yes") {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
        <PackageCheckIcon />
        <span className="sr-only">{includedLabel}</span>
      </span>
    );
  }
  if (value === "no") {
    return (
      <span className="text-sm font-semibold text-muted-foreground/50">
        —
        <span className="sr-only">{notIncludedLabel}</span>
      </span>
    );
  }
  return (
    <span className="text-sm font-semibold text-muted-foreground">
      {value}
    </span>
  );
}

export function PackagesComparison({
  title,
  subtitle,
  columnFeature,
  columns,
  rows,
  includedLabel,
  notIncludedLabel,
}: PackagesComparisonProps) {
  const headers = [
    columns.starter,
    columns.testReady,
    columns.intensive,
  ] as const;

  return (
    <section className="mt-16 border-t border-border/60 pt-12 md:mt-20 md:pt-14">
      <SectionReveal className="mx-auto max-w-3xl text-center" variant="fade">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      </SectionReveal>

      <SectionReveal className="mt-8 overflow-hidden" variant="up">
        <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-gradient-to-b from-primary/15 to-card">
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-bold text-foreground sm:px-5"
                >
                  {columnFeature}
                </th>
                {headers.map((label) => (
                  <th
                    key={label}
                    scope="col"
                    className="px-4 py-4 text-center text-sm font-bold text-foreground sm:px-5"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                const values = [row.starter, row.testReady, row.intensive] as const;
                return (
                  <tr
                    key={row.feature}
                    className={
                      index % 2 === 0
                        ? "bg-card"
                        : "bg-muted/30 dark:bg-muted/20"
                    }
                  >
                    <th
                      scope="row"
                      className="px-4 py-3.5 text-xs font-bold text-foreground sm:px-5 sm:text-sm"
                    >
                      {row.feature}
                    </th>
                    {values.map((value, colIndex) => (
                      <td
                        key={`${row.feature}-${colIndex}`}
                        className="px-4 py-3.5 text-center sm:px-5"
                      >
                        <CellValue
                          value={value}
                          includedLabel={includedLabel}
                          notIncludedLabel={notIncludedLabel}
                        />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </SectionReveal>
    </section>
  );
}
