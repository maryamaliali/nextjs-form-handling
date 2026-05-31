import type { MetadataRoute } from "next";
import { business, siteUrl } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.name,
    short_name: "MSA Driving",
    description:
      "DVSA-approved driving lessons in Peterborough. Manual and automatic tuition, intensive courses, and test preparation.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#c9a227",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.jpg",
        sizes: "640x640",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
    id: siteUrl,
    lang: "en-GB",
  };
}
