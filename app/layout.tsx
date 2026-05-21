import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { ThemeScript } from "@/components/theme-script";
import { LocalBusinessJsonLd } from "@/components/local-business-json-ld";
import { defaultLocale } from "@/lib/i18n/config";
import { defaultMetadata } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const locale = h.get("x-next-locale") ?? defaultLocale;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <ThemeScript />
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    default: "MSA Driving School Nottingham",
    template: "%s | MSA Driving School Nottingham",
  },
  description:
    "DVSA-approved driving lessons in Nottingham. Manual and automatic, intensive courses, test preparation, Pass Plus.",
};
