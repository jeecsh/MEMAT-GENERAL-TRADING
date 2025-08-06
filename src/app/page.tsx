import TradingCompanyHero from "./components/hero";
import Navbar from "./components/navbar";
import AboutUsSection from "./components/about";
import  ProductsSection from "./components/products";
import LegalCertificationsSection from "./components/certfed";
import ContactUs from "./components/contact";
import Footer from "./components/footer";
import { StructuredDataScripts } from "./components/StructuredDataScripts";
import { generateProductSchema } from "./utils/structured-data";

export default function Home() {
  const productSchema = generateProductSchema();

  return (
    <main>
      <StructuredDataScripts />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      
      {/* Hidden Arabic content for SEO indexing */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
        <h1>شركة ميمات للتجارة العامة - MEMAT General Trading Company</h1>
        <p>شركة تجارية رائدة في منطقة الخليج متخصصة في الطاقة الشمسية، مواد البناء، المواد الخام، وسلامة الطرق</p>
        <p>الطاقة الشمسية الإمارات، مواد البناء دبي، المواد الخام الخليج، معدات سلامة الطرق</p>
        <p>ألواح شمسية، محولات، بطاريات، دهانات، بلاط سيراميك، إضاءة، رمل السيليكا، حجر الجابرو</p>
        <p>إشارات المرور، علامات الطرق، معدات السلامة، حلول عاكسة</p>
        <p>مكتب 43-44، الفهيدي، بر دبي، دولة الإمارات العربية المتحدة</p>
        <p>خدمات في دول الخليج، آسيا، أفريقيا - أكثر من 500 منتج متميز</p>
      </div>
      
      <Navbar />
      <div id="hero" className="mt-16">
        <TradingCompanyHero />
      </div>
      <div id="about">
        <AboutUsSection/>
      </div>
      <div id="certfed">
        <LegalCertificationsSection/>
      </div>
      <div id="products">
        <ProductsSection/>
      </div>
      <div id="contact">
        <ContactUs/>
      </div>
      <Footer/>
    </main>
  );
}
