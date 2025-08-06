import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | منتجاتنا - MEMAT General Trading | ميمات للتجارة العامة",
  description: "Explore our comprehensive range of premium products across solar energy, construction materials, raw materials, and traffic safety solutions. Serving UAE, Gulf States, Asia & Africa. | استكشف مجموعتنا الشاملة من المنتجات المتميزة في الطاقة الشمسية ومواد البناء والمواد الخام وحلول سلامة الطرق",
  keywords: "solar energy products UAE, construction materials catalog, raw materials supplier, traffic safety equipment, solar panels Dubai, ceramic tiles, silica sand, gabbro stone, road safety products, منتجات الطاقة الشمسية الإمارات, كتالوج مواد البناء, مورد المواد الخام, معدات سلامة الطرق, الألواح الشمسية دبي, بلاط سيراميك, رمل السيليكا, حجر الجابرو, منتجات سلامة الطرق",
  openGraph: {
    title: "Our Products | منتجاتنا - MEMAT General Trading",
    description: "Premium products across solar energy, construction materials, raw materials, and traffic safety solutions. | منتجات متميزة في الطاقة الشمسية ومواد البناء والمواد الخام وحلول سلامة الطرق",
    url: "https://www.memattrading.com/products",
    siteName: "MEMAT General Trading | ميمات للتجارة العامة",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products | منتجاتنا - MEMAT General Trading",
    description: "Premium products across solar energy, construction materials, raw materials, and traffic safety solutions.",
  },
  alternates: {
    languages: {
      'en': '/products',
      'ar': '/products?lang=ar'
    }
  }
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Hidden Arabic content for SEO indexing */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
        <h1>منتجاتنا - شركة ميمات للتجارة العامة</h1>
        <p>منتجات الطاقة الشمسية: ألواح شمسية، محولات ذكية، بطاريات تخزين الطاقة</p>
        <p>مواد البناء: دهانات متميزة، بلاط سيراميك، إضاءة وثريات، مواد متوهجة في الظلام</p>
        <p>المواد الخام: مدخلات صناعية، رمل السيليكا الأبيض، حجر الجابرو</p>
        <p>سلامة الطرق: دهانات علامات الطرق، إشارات المرور، معدات السلامة، حلول عاكسة</p>
        <p>شركة تجارية إماراتية في دبي تخدم دول الخليج وآسيا وأفريقيا</p>
        <p>جودة عالية، أسعار تنافسية، توريد بالجملة، خدمة ممتازة</p>
      </div>
      {children}
    </>
  );
}
