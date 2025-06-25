import type { Metadata } from "next";
import { LanguageProvider } from "./context/LanguageContext";
import { LanguageAwareHtml } from "./components/LanguageAwareHtml";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memat General Trading",
  description: "Premium Solar Energy, Construction Materials, Raw Materials & Traffic Safety Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <LanguageAwareHtml>{children}</LanguageAwareHtml>
    </LanguageProvider>
  );
}
