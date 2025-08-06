"use client";
import React from 'react';
import { useTranslationDetection } from '../utils/seo-safe-hydration';

/**
 * Component wrapper that handles hydration gracefully for SEO
 * This maintains perfect SEO while preventing hydration errors
 * AND allows Google Translate to work properly
 */
export function SEOSafeText({ 
  children, 
  suppressHydration = false,
  className = "",
  allowTranslation = true
}: {
  children: React.ReactNode;
  suppressHydration?: boolean;
  className?: string;
  allowTranslation?: boolean;
}) {
  const isTranslated = useTranslationDetection();
  
  // Add translate class to help Google Translate identify content
  const combinedClassName = allowTranslation 
    ? `${className} translate-content`.trim()
    : `${className} notranslate`.trim();
  
  // If external translation is detected, suppress hydration warnings
  // but still render the content for SEO
  return (
    <span 
      suppressHydrationWarning={isTranslated || suppressHydration}
      className={combinedClassName}
    >
      {children}
    </span>
  );
}
