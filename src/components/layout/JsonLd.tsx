import React from "react";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Satya InfoTech Networks",
    "legalName": "Satya InfoTech Networks",
    "alternateName": ["Satya Infotech Networks", "Satyainfotech Networks"],
    "url": "https://satyainfotechnetworks.com/",
    "logo": "https://rewardverse.in/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@satyainfotechnetworks.com",
      "contactType": "customer support"
    },
    "sameAs": [
      "https://twitter.com/rewardverse",
      "https://t.me/rewardverse"
    ],
    "description": "Satya InfoTech Networks is a digital platform development company focused on innovative mobile rewards and engagement experiences like RewardVerse."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RewardVerse",
    "url": "https://rewardverse.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://rewardverse.in/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RewardVerse",
    "operatingSystem": "ANDROID",
    "applicationCategory": "FinanceApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "50000"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
    </>
  );
}
