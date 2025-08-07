"use client";
import React from 'react';

/**
 * Simple wrapper for translated text that prevents hydration errors
 * without affecting SEO. Use this only for dynamic text content.
 */
export function TranslatedText({ 
  children, 
  className = "",
  element = 'span'
}: {
  children: React.ReactNode;
  className?: string;
  element?: keyof React.JSX.IntrinsicElements;
}) {
  const Element = element as any;
  
  return (
    <Element 
      className={className}
      suppressHydrationWarning={true}
    >
      {children}
    </Element>
  );
}
