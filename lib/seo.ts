import type { Metadata } from "next";
import { business, siteUrl } from "@/lib/site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: business.name,
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: business.name,
    images: [
      { url: "/og.svg", width: 1200, height: 630, alt: business.name },
      { url: "/logo.jpg", width: 640, height: 640, alt: business.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};
