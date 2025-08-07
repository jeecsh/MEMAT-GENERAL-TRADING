"use client";
import { generateOrganizationSchema, generateWebsiteSchema } from '../utils/structured-data';
import { generateArabicLocalBusinessSchema } from '../utils/arabic-seo-strategy';

export function StructuredDataScripts() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  const arabicLocalBusinessSchema = generateArabicLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(arabicLocalBusinessSchema),
        }}
      />
    </>
  );
}
