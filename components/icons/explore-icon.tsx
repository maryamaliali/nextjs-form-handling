const c = "h-8 w-8 text-primary";

export type ExploreIconName = "car" | "tag" | "quote" | "user" | "map";

export function ExploreIcon({ name }: { name: ExploreIconName }) {
  switch (name) {
    case "car":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 14h16l-1.5-5H5.5L4 14Zm0 0v3h2.5M19.5 17H22v-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="17" r="1.5" fill="currentColor" />
          <circle cx="16" cy="17" r="1.5" fill="currentColor" />
        </svg>
      );
    case "tag":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 12V6a2 2 0 0 1 2-2h4l10 10-6 6L4 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="9" r="1" fill="currentColor" />
        </svg>
      );
    case "quote":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 10H4v5h5v-5l-2-3Zm9 0h-3v5h5v-5l-2-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "user":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M6 19c0-3 2.5-5 6-5s6 2 6 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "map":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9 4 4 6v14l5-2 5 2 5-2 5 2V6l-5-2-5 2-5-2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="m9 4 0 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
