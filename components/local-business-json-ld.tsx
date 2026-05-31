import { business, siteUrl } from "@/lib/site";

/** JSON-LD for rich results (DrivingSchool / LocalBusiness). */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["DrivingSchool", "LocalBusiness"],
    "@id": `${siteUrl}/#business`,
    name: business.name,
    url: siteUrl,
    telephone: business.phoneTel,
    email: business.email,
    image: [`${siteUrl}/logo.jpg`, `${siteUrl}/og.svg`],
    logo: `${siteUrl}/logo.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.addressLocality,
      addressCountry: business.addressCountry,
    },
    areaServed: {
      "@type": "City",
      name: "Peterborough",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "21:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
