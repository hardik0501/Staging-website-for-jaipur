import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  schema?: Record<string, unknown>;
}

export const SEO = ({ title, description, canonical, schema }: SEOProps) => {
  const defaultTitle = "Jaipur Hospital – Trusted Multispeciality Hospital in Jaipur";
  const defaultDescription = "Jaipur Hospital is a premium multispeciality hospital in Jaipur with 50+ specialist doctors, advanced ICU, 24/7 emergency care, and cashless treatment.";
  const baseUrl = "https://jaipurhospital.co.in";
  
  const currentUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Jaipur Hospital",
    "image": `${baseUrl}/Gallery/4.jpg`,
    "url": baseUrl,
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bhawani Singh Marg, Near Nehru Sahkar Bhawan, Lal Kothi",
      "addressLocality": "Jaipur",
      "postalCode": "302015",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8923,
      "longitude": 75.7952
    }
  };

  return (
    <Helmet>
      <title>{title ? `${title} | Jaipur Hospital` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title ? `${title} | Jaipur Hospital` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={currentUrl} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title ? `${title} | Jaipur Hospital` : defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};
