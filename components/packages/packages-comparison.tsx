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

const FEATURED_COL_INDEX = 1;

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
      <span className="inline-flex items-center justify-center">
        <PackageCheckIcon />
        <span className="sr-only">{includedLabel}</span>
      </span>
    );
  }
  if (value === "no") {
    return (
      <span className="text-sm font-medium text-muted-foreground/45">
        —
        <span className="sr-only">{notIncludedLabel}</span>
      </span>
    );
  }
  return (
    <span className="text-sm font-semibold text-muted-foreground">{value}</span>
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

  const planKeys = ["starter", "testReady", "intensive"] as const;

  return (
    <section className="mt-16 min-w-0 border-t border-border/60 pt-12 md:mt-20 md:pt-14">
      <SectionReveal className="mx-auto max-w-3xl text-center" variant="fade">
        <h2 className="msa-section-title">{title}</h2>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      </SectionReveal>

      <SectionReveal className="mt-8 min-w-0" variant="up">
        <ul className="flex flex-col gap-3 md:hidden">
          {rows.map((row) => {
            const values = [row.starter, row.testReady, row.intensive] as const;
            return (
              <li
                key={row.feature}
                className="rounded-2xl border border-border bg-card p-4 shadow-sm"
              >
                <h3 className="text-sm font-bold text-foreground">{row.feature}</h3>
                <dl className="mt-3 space-y-2.5">
                  {planKeys.map((planKey, colIndex) => (
                    <div
                      key={planKey}
                      className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 ${
                        colIndex === FEATURED_COL_INDEX ? "bg-primary/8" : "bg-muted/30"
                      }`}
                    >
                      <dt className="min-w-0 text-xs font-semibold text-muted-foreground">
                        {headers[colIndex]}
                      </dt>
                      <dd className="shrink-0 text-right">
                        <CellValue
                          value={values[colIndex]}
                          includedLabel={includedLabel}
                          notIncludedLabel={notIncludedLabel}
                        />
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            );
          })}
        </ul>

        <div className="hidden min-w-0 max-w-full overflow-x-auto rounded-2xl border border-border bg-card shadow-sm md:block">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th
                  scope="col"
                  className="px-4 py-4 text-left text-sm font-bold text-foreground sm:px-5"
                >
                  {columnFeature}
                </th>
                {headers.map((label, colIndex) => (
                  <th
                    key={label}
                    scope="col"
                    className={`px-4 py-4 text-center text-sm font-bold text-foreground sm:px-5 ${
                      colIndex === FEATURED_COL_INDEX ? "bg-primary/8" : ""
                    }`}
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
                    className={index % 2 === 0 ? "bg-card" : "bg-muted/25"}
                  >
                    <th
                      scope="row"
                      className="px-4 py-3.5 text-left text-xs font-bold text-foreground sm:px-5 sm:text-sm"
                    >
                      {row.feature}
                    </th>
                    {values.map((value, colIndex) => (
                      <td
                        key={`${row.feature}-${colIndex}`}
                        className={`px-4 py-3.5 text-center sm:px-5 ${
                          colIndex === FEATURED_COL_INDEX ? "bg-primary/8" : ""
                        }`}
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
