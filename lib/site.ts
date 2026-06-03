/** Used for canonical URLs, sitemap, and Open Graph. Override in production via env. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://msadrivingschoolnotts.com";

export const business = {
  name: "MSA Driving School Peterborough",
  phoneDisplay: "07448 684 253",
  phoneTel: "+447448684253",
  email: "Sohail4kash@gmail.com",
  addressLocality: "Peterborough",
  addressCountry: "GB",
  /** WhatsApp click-to-chat uses international digits only */
  whatsappDigits: "447448684253",
} as const;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${business.whatsappDigits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Override individual links via `.env`; defaults are the school's public profiles. */
export const socialLinks = {
  facebook:
    process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ??
    "https://www.facebook.com/share/17rxddrz4E/",
  instagram:
    process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ??
    "https://www.instagram.com/msadrivingschool?igsh=ZWRvOWJ5dzRocXRr",
  tiktok:
    process.env.NEXT_PUBLIC_SOCIAL_TIKTOK ??
    "https://www.tiktok.com/@msadrivingschool1",
  youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE,
  x: process.env.NEXT_PUBLIC_SOCIAL_X,
} as const;

export type SocialNetwork = keyof typeof socialLinks;

export function hasConfiguredSocialLinks(): boolean {
  return Object.values(socialLinks).some((u) => Boolean(u?.trim()));
}

/** Google Maps embed (no API key) — Peterborough city centre; adjust query if needed. */
export const mapEmbedSrc =
  "https://maps.google.com/maps?q=Peterborough%2C%20UK&z=12&ie=UTF8&iwloc=&output=embed";
