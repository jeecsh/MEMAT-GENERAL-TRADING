/**
 * SEO-Safe Hydration Utilities
 * These utilities help handle hydration mismatches caused by external translation services
 * while maintaining perfect SEO and content accessibility.
 */

"use client";
import { useEffect, useState } from 'react';

/**
 * Hook to detect if the page is being translated by external services
 * This helps us handle hydration gracefully without affecting SEO
 */
export function useTranslationDetection() {
  const [isTranslated, setIsTranslated] = useState(false);

  useEffect(() => {
    // Check for common translation service indicators
    const checkTranslation = () => {
      // Google Translate indicators - more comprehensive detection
      const hasGoogleTranslate = 
        document.querySelector('.goog-te-combo') ||
        document.querySelector('#google_translate_element') ||
        document.body.classList.contains('translated-ltr') ||
        document.body.classList.contains('translated-rtl') ||
        document.querySelector('font[style*="vertical-align"]') ||
        document.querySelector('.skiptranslate') ||
        document.querySelector('[class*="goog-te"]') ||
        document.documentElement.classList.contains('translated-ltr') ||
        document.documentElement.classList.contains('translated-rtl') ||
        // Check if any elements have been wrapped by Google Translate
        document.querySelector('font[color]') ||
        // Check for Google Translate iframe
        document.querySelector('iframe[src*="translate.googleapis.com"]');

      // Microsoft Translator indicators
      const hasMicrosoftTranslator = 
        document.querySelector('[class*="translator"]') ||
        document.querySelector('[id*="MicrosoftTranslator"]');
      
      // Other translation service indicators
      const hasOtherTranslators = 
        document.querySelector('[data-translate]') ||
        document.querySelector('[translate="yes"]') ||
        // Check for browser's built-in translation
        document.querySelector('[class*="translate"]');

      const translationDetected = !!(hasGoogleTranslate || hasMicrosoftTranslator || hasOtherTranslators);
      
      if (translationDetected !== isTranslated) {
        setIsTranslated(translationDetected);
      }
    };

    // Check immediately
    checkTranslation();

    // Check periodically in case translation is added dynamically
    const interval = setInterval(checkTranslation, 2000);

    // Also check on DOM changes
    const observer = new MutationObserver(checkTranslation);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'translate']
    });

    // Cleanup
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [isTranslated]);

  return isTranslated;
}
