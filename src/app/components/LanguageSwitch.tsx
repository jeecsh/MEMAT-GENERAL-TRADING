"use client";
import { useTranslation } from '../hooks/useTranslation';

export function LanguageSwitch() {
  const { language, setLanguage } = useTranslation();
  
  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-black/50 focus:outline-none transition-all duration-300"
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <span className="text-sm font-medium">
        {language === 'en' ? 'عربي' : 'English'}
      </span>
    </button>
  );
}
