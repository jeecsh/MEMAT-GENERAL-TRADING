"use client";
import { useTranslation } from '../hooks/useTranslation';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function LanguageAwareHtml({ children }: { children: React.ReactNode }) {
  const { language} = useTranslation();
  
  return (
    <html lang={language} >
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${
          language === "ar" ? "font-arabic" : ""
        }`}
      >
        {children}
      </body>
    </html>
  );
}
