import type { Metadata } from "next";
import { LanguageProvider } from "./context/LanguageContext";
import { LanguageAwareHtml } from "./components/LanguageAwareHtml";
import { GoogleTranslateHandler } from "./components/GoogleTranslateHandler";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEMAT General Trading | Premium Solar Energy & Construction Materials UAE | ميمات للتجارة العامة",
  description: "Leading Gulf trading company specializing in solar energy solutions, construction materials, raw materials & traffic safety equipment. Serving UAE, Gulf States, Asia & Africa with 500+ premium products. | شركة تجارية رائدة في الخليج متخصصة في حلول الطاقة الشمسية، مواد البناء، المواد الخام ومعدات سلامة الطرق",
  keywords: "solar energy UAE, construction materials Dubai, raw materials Gulf, traffic safety equipment, silica sand, gabbro stone, solar panels, inverters, road safety, ميمات للتجارة العامة, الطاقة الشمسية الإمارات, مواد البناء دبي, المواد الخام الخليج, معدات سلامة الطرق, رمل السيليكا, حجر الجابرو, الألواح الشمسية, المحولات, سلامة الطرق",
  authors: [{ name: "MEMAT General Trading | ميمات للتجارة العامة" }],
  openGraph: {
    title: "MEMAT General Trading | Premium Solar Energy & Construction Materials | ميمات للتجارة العامة",
    description: "Leading Gulf trading company with 500+ premium products in solar energy, construction materials, and traffic safety solutions. | شركة تجارية رائدة في الخليج مع أكثر من 500 منتج متميز في الطاقة الشمسية ومواد البناء وحلول سلامة الطرق",
    url: "https://www.memattrading.com",
    siteName: "MEMAT General Trading | ميمات للتجارة العامة",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEMAT General Trading | Premium Trading Solutions | ميمات للتجارة العامة",
    description: "Leading Gulf trading company specializing in solar energy, construction materials & traffic safety equipment. | شركة تجارية رائدة متخصصة في الطاقة الشمسية ومواد البناء ومعدات سلامة الطرق",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    languages: {
      'en': '/en',
      'ar': '/ar'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <LanguageAwareHtml>
        <GoogleTranslateHandler />
        {children}
      </LanguageAwareHtml>
    </LanguageProvider>
  );
}
