import { socialLinks, type SocialNetwork } from "@/lib/site";

const iconClass = "h-5 w-5";

function Icon({ network }: { network: SocialNetwork }) {
  switch (network) {
    case "facebook":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M13.5 22v-8h2.7l.4-3.2h-3.1V9.1c0-.9.3-1.5 1.6-1.5H17V4.4c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.7v2.7H7v3.2h2.8V22h3.7Z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-4.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C17.9 5 12 5 12 5s-5.9 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28.3 28.3 0 0 0 2 12a28.3 28.3 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.8.3 7.7.3 7.7.3s5.9 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9c.3-1.6.4-3.2.4-4.8s0-3.2-.4-4.8ZM10 15V9l5 3-5 3Z"
          />
        </svg>
      );
    case "tiktok":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M16.6 5.8c1 1 2.4 1.7 4 1.7V10a6.4 6.4 0 0 1-3.8-1.2v6.8a5.6 5.6 0 1 1-5.6-5.6c.2 0 .4 0 .6.1v2.8a2.8 2.8 0 1 0 2 2.7V2h2.8v3.8Z"
          />
        </svg>
      );
    case "x":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M4 4l7 9.3L4 20h2l6-6.4 4.8 6.4H20l-7.4-9.8L19.6 4h-2.2l-5.5 5.9L8.4 4H4Z"
          />
        </svg>
      );
    default:
      return null;
  }
}

const labels: Record<SocialNetwork, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
  x: "X",
};

function hasUrl(url: string | undefined): url is string {
  return Boolean(url?.trim());
}

export function SocialLinks({ className }: { className?: string }) {
  const entries = (
    Object.entries(socialLinks) as [SocialNetwork, string | undefined][]
  ).filter((e): e is [SocialNetwork, string] => hasUrl(e[1]));

  if (entries.length === 0) return null;

  return (
    <div className={className}>
      <ul className="flex flex-wrap items-center gap-2">
        {entries.map(([network, href]) => (
          <li key={network}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:border-primary/50 hover:text-primary"
              aria-label={labels[network]}
            >
              <Icon network={network} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
