import TradingCompanyHero from "./components/hero";
import Navbar from "./components/navbar";
import AboutUsSection from "./components/about";
import  ProductsSection from "./components/products";
import LegalCertificationsSection from "./components/certfed";
import ContactUs from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
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
