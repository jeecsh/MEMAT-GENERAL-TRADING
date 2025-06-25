"use client";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

type TranslationPath = keyof typeof translations.en;

export function useTranslation() {
  const { language, setLanguage } = useLanguage();

  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = translations[language];
    
    for (const key of keys) {
      if (result === undefined) return path;
      result = result[key];
    }
    
    return result || path;
  };

  return {
    t,
    language,
    setLanguage,
   
  };
}
