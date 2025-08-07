/**
 * Comprehensive Arabic SEO Strategy for ميمات للتجاره العامة
 * This file contains additional SEO optimization recommendations
 */

// Additional meta tags for better Arabic indexing
export const arabicMetaTags = {
  'content-language': 'ar,en',
  'geo.region': 'AE-DU',
  'geo.placename': 'Dubai, UAE',
  'ICBM': '25.2532, 55.3372',
  'DC.language': 'ar',
  'DC.title': 'ميمات للتجاره العامة - MEMAT General Trading',
  'article:publisher': 'https://www.memattrading.com',
  'og:locale:alternate': 'ar_AE',
};

// Recommended Google My Business optimization
export const gmb_recommendations = {
  business_name: 'MEMAT General Trading | ميمات للتجاره العامة',
  category: 'Trading Company',
  description_ar: 'شركة تجارية رائدة في دولة الإمارات متخصصة في الطاقة الشمسية ومواد البناء والمواد الخام ومعدات سلامة الطرق. ميمات للتجاره العامة تقدم أكثر من 500 منتج عالي الجودة لعملائها في دول الخليج وآسيا وأفريقيا.',
  keywords_ar: [
    'ميمات للتجاره العامة',
    'شركة تجارية دبي',
    'الطاقة الشمسية الإمارات',
    'مواد البناء دبي',
    'التجارة العامة',
    'شركة إماراتية'
  ]
};

// Schema markup for Arabic local business
export function generateArabicLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ميمات للتجاره العامة - MEMAT General Trading",
    "image": "https://www.memattrading.com/logo-01.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "مكتب 43-44، مجمع الفهيدي التجاري",
      "addressLocality": "بر دبي",
      "addressRegion": "دبي",
      "postalCode": "",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2532,
      "longitude": 55.3372
    },
    "telephone": "+971526325959",
    "email": "info@Memat-trading.com",
    "url": "https://www.memattrading.com",
    "description": "شركة ميمات للتجاره العامة هي شركة تجارية رائدة في دولة الإمارات العربية المتحدة، متخصصة في توريد الطاقة الشمسية، مواد البناء، المواد الخام، ومعدات سلامة الطرق لدول الخليج وآسيا وأفريقيا",
    "priceRange": "$$",
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-15:00"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country", 
        "name": "Saudi Arabia"
      },
      {
        "@type": "Country",
        "name": "Kuwait"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 25.2532,
        "longitude": 55.3372
      },
      "geoRadius": "500000"
    }
  };
}

// Content optimization recommendations
export const contentOptimization = {
  title_variations: [
    'ميمات للتجاره العامة - شركة تجارية رائدة في دبي',
    'MEMAT General Trading - ميمات للتجاره العامة',
    'شركة ميمات للتجاره والطاقة الشمسية في الإمارات',
    'ميمات تريدنج - حلول الطاقة الشمسية ومواد البناء'
  ],
  
  h1_recommendations: [
    'شركة ميمات للتجاره العامة - MEMAT General Trading',
    'ميمات للتجاره العامة | الطاقة الشمسية ومواد البناء',
    'MEMAT - ميمات للتجاره العامة في دولة الإمارات'
  ],
  
  internal_linking_anchor_texts: [
    'منتجات ميمات للتجاره',
    'خدمات شركة ميمات',
    'الطاقة الشمسية من ميمات',
    'مواد البناء عالية الجودة',
    'اتصل بشركة ميمات'
  ]
};

// URL structure recommendations
export const urlStructure = {
  homepage: '/',
  arabic_homepage: '/ar/',
  products_ar: '/ar/products',
  about_ar: '/ar/about', 
  contact_ar: '/ar/contact',
  solar_ar: '/ar/solar-energy',
  construction_ar: '/ar/construction-materials'
};

export default {
  arabicMetaTags,
  gmb_recommendations,
  generateArabicLocalBusinessSchema,
  contentOptimization,
  urlStructure
};
