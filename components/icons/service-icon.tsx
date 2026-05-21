export type ServiceSlug =
  | "beginner"
  | "intensive"
  | "refresher"
  | "testPrep"
  | "passPlus"
  | "flexible";

const box = "h-9 w-9 shrink-0 text-primary";

export function ServiceIcon({ slug }: { slug: ServiceSlug }) {
  switch (slug) {
    case "beginner":
      return (
        <svg className={box} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 14c1.5 2 6.5 2 8 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
        </svg>
      );
    case "intensive":
      return (
        <svg className={box} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 18 12 5l7 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 14h7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "refresher":
      return (
        <svg className={box} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 12a7 7 0 0 1 12.5-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M19 12a7 7 0 0 1-12.5 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M5 12h3M16 12h3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "testPrep":
      return (
        <svg className={box} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="5"
            y="4"
            width="14"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 9h8M8 13h5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
        </svg>
      );
    case "passPlus":
      return (
        <svg className={box} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 14 8 10l4 4 8-8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 6h4v4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "flexible":
      return (
        <svg className={box} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 7v5l3 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
