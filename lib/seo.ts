import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    siteName: "MSA Driving School Nottingham",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "MSA Driving School Nottingham" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};
