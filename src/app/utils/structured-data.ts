/**
 * Structured Data for SEO
 * JSON-LD schema markup for better search engine understanding
 */

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MEMAT General Trading Company | ميمات للتجاره العامة",
    "alternateName": [
      "ميمات للتجاره العامة", 
      "ميمات للتجارة العامة",
      "شركة ميمات للتجاره",
      "شركة ميمات للتجارة",
      "MEMAT Trading", 
      "Memat General Trading",
      "ميمات تريدنج",
      "ميمات جنرال تريدنج"
    ],
    "url": "https://www.memattrading.com",
    "logo": "https://www.memattrading.com/logo-01.png",
    "description": [
      "Leading Gulf trading company specializing in premium solar energy solutions, construction materials, raw materials, and traffic safety equipment.",
      "شركة تجارية رائدة في منطقة الخليج متخصصة في حلول الطاقة الشمسية المتميزة، مواد البناء، المواد الخام، ومعدات سلامة الطرق",
      "ميمات للتجاره العامة هي شركة تجارية مرموقة تقدم أكثر من 500 منتج متميز في دولة الإمارات"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office 43-44, Al Fahidi | مكتب 43-44، الفهيدي",
      "addressLocality": "Bur Dubai | بر دبي",
      "addressRegion": "Dubai | دبي",
      "addressCountry": "AE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971526325959",
      "email": "info@Memat-trading.com",
      "contactType": "sales",
      "areaServed": ["AE", "SA", "KW", "QA", "BH", "OM"],
      "availableLanguage": ["en", "ar"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/memat-general-trading"
    ],
    "foundingDate": "2022",
    "numberOfEmployees": "10-50",
    "industry": "Trading | التجارة",
    "keywords": [
      "MEMAT General Trading",
      "ميمات للتجاره العامة",
      "ميمات للتجارة العامة",
      "شركة ميمات للتجاره",
      "solar energy", "الطاقة الشمسية",
      "construction materials", "مواد البناء", 
      "raw materials", "المواد الخام",
      "traffic safety", "سلامة الطرق",
      "gulf trading", "التجارة الخليجية",
      "UAE trading company", "شركة تجارية إماراتية",
      "silica sand", "رمل السيليكا",
      "gabbro stone", "حجر الجابرو",
      "solar panels", "الألواح الشمسية",
      "inverters", "المحولات",
      "شركة تجارية دبي",
      "التجارة العامة الإمارات"
    ]
  };
}

export function generateProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "MEMAT Trading Products | منتجات ميمات للتجارة",
    "description": "Premium products across solar energy, construction materials, raw materials, and traffic safety | منتجات متميزة في الطاقة الشمسية ومواد البناء والمواد الخام وسلامة الطرق",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Solar Energy Solutions | حلول الطاقة الشمسية",
        "description": "High-efficiency solar panels, smart inverters, and energy storage systems | ألواح شمسية عالية الكفاءة، محولات ذكية، وأنظمة تخزين الطاقة",
        "category": "Solar Energy Equipment | معدات الطاقة الشمسية",
        "brand": "MEMAT General Trading | ميمات للتجارة العامة",
        "keywords": ["solar panels", "الألواح الشمسية", "solar inverters", "محولات شمسية", "solar batteries", "بطاريات شمسية"]
      },
      {
        "@type": "Product", 
        "position": 2,
        "name": "Construction Materials | مواد البناء",
        "description": "Premium paints, ceramic tiles, lighting systems, and building materials | دهانات متميزة، بلاط سيراميك، أنظمة إضاءة، ومواد بناء",
        "category": "Construction Materials | مواد البناء",
        "brand": "MEMAT General Trading | ميمات للتجارة العامة",
        "keywords": ["construction paints", "دهانات البناء", "ceramic tiles", "بلاط سيراميك", "lighting", "إضاءة"]
      },
      {
        "@type": "Product",
        "position": 3, 
        "name": "Raw Materials | المواد الخام",
        "description": "Industrial inputs, white silica sand, and gabbro stone | مدخلات صناعية، رمل السيليكا الأبيض، وحجر الجابرو",
        "category": "Raw Materials | المواد الخام",
        "brand": "MEMAT General Trading | ميمات للتجارة العامة",
        "keywords": ["silica sand", "رمل السيليكا", "gabbro stone", "حجر الجابرو", "industrial materials", "مواد صناعية"]
      },
      {
        "@type": "Product",
        "position": 4,
        "name": "Traffic Safety Equipment | معدات سلامة الطرق", 
        "description": "Road marking paints, traffic signs, safety equipment, and reflective solutions | دهانات علامات الطرق، إشارات المرور، معدات السلامة، وحلول عاكسة",
        "category": "Traffic Safety | سلامة الطرق",
        "brand": "MEMAT General Trading | ميمات للتجارة العامة",
        "keywords": ["road safety", "سلامة الطرق", "traffic signs", "إشارات المرور", "road marking", "علامات الطرق"]
      }
    ]
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MEMAT General Trading | ميمات للتجارة العامة",
    "alternateName": ["ميمات للتجارة العامة", "MEMAT Trading", "Memat General Trading"],
    "url": "https://www.memattrading.com",
    "description": [
      "Premium trading solutions in the Gulf region - Solar Energy, Construction Materials, Raw Materials & Traffic Safety",
      "حلول تجارية متميزة في منطقة الخليج - الطاقة الشمسية، مواد البناء، المواد الخام وسلامة الطرق"
    ],
    "inLanguage": ["en", "ar"],
    "publisher": {
      "@type": "Organization",
      "name": "MEMAT General Trading Company | شركة ميمات للتجارة العامة"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.memattrading.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "keywords": [
      "ميمات للتجارة العامة", "الطاقة الشمسية الإمارات", "مواد البناء دبي", "سلامة الطرق", 
      "رمل السيليكا", "حجر الجابرو", "شركة تجارية إماراتية", "التجارة الخليجية",
      "MEMAT General Trading", "solar energy UAE", "construction materials Dubai", "traffic safety"
    ]
  };
}
