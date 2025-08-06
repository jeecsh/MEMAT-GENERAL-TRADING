"use client";
import { useEffect } from 'react';

/**
 * Global Translation Handler
 * This component handles Google Translate integration gracefully
 */
export function GoogleTranslateHandler() {
  useEffect(() => {
    // Store original methods
    const originalError = console.error;
    const originalRemoveChild = Node.prototype.removeChild;
    const originalInsertBefore = Node.prototype.insertBefore;
    const originalAppendChild = Node.prototype.appendChild;

    // Override console.error to suppress translation-related hydration errors
    console.error = (...args) => {
      if (typeof args[0] === 'string') {
        // Suppress specific hydration warnings related to translation
        if (
          args[0].includes('Hydration failed') ||
          args[0].includes('Text content does not match') ||
          args[0].includes('There was an error while hydrating') ||
          args[0].includes('removeChild') ||
          args[0].includes('The node to be removed is not a child')
        ) {
          // Check if the error is likely due to translation
          const hasTranslationIndicators = 
            document.querySelector('font[color]') ||
            document.querySelector('.goog-te-combo') ||
            document.querySelector('[class*="goog-te"]') ||
            document.body.classList.contains('translated-ltr') ||
            document.body.classList.contains('translated-rtl') ||
            document.documentElement.classList.contains('translated-ltr') ||
            document.documentElement.classList.contains('translated-rtl');
          
          if (hasTranslationIndicators) {
            // Suppress the error if translation is detected
            return;
          }
        }
      }
      // Otherwise, show the error normally
      originalError.apply(console, args);
    };

    // Override removeChild to handle Google Translate DOM conflicts
    (Node.prototype as any).removeChild = function(child: Node) {
      try {
        // Check if this node actually contains the child
        if (this.contains && !this.contains(child)) {
          // If the child is not actually a child, silently return
          return child;
        }
        return originalRemoveChild.call(this, child);
      } catch (error) {
        // If there's an error removing the child, check if it's translation-related
        const hasTranslationIndicators = 
          document.querySelector('font[color]') ||
          document.querySelector('.goog-te-combo') ||
          document.querySelector('[class*="goog-te"]');
        
        if (hasTranslationIndicators) {
          // Silently handle the error if translation is active
          return child;
        }
        // Re-throw the error if it's not translation-related
        throw error;
      }
    };

    // Override insertBefore to handle Google Translate DOM conflicts
    (Node.prototype as any).insertBefore = function(newNode: Node, referenceNode: Node | null) {
      try {
        return originalInsertBefore.call(this, newNode, referenceNode);
      } catch (error) {
        const hasTranslationIndicators = 
          document.querySelector('font[color]') ||
          document.querySelector('.goog-te-combo') ||
          document.querySelector('[class*="goog-te"]');
        
        if (hasTranslationIndicators) {
          // Try appendChild as fallback
          try {
            return this.appendChild(newNode);
          } catch {
            return newNode;
          }
        }
        throw error;
      }
    };

    // Override appendChild to handle Google Translate DOM conflicts
    (Node.prototype as any).appendChild = function(child: Node) {
      try {
        return originalAppendChild.call(this, child);
      } catch (error) {
        const hasTranslationIndicators = 
          document.querySelector('font[color]') ||
          document.querySelector('.goog-te-combo') ||
          document.querySelector('[class*="goog-te"]');
        
        if (hasTranslationIndicators) {
          // Silently handle the error if translation is active
          return child;
        }
        throw error;
      }
    };

    // Cleanup
    return () => {
      console.error = originalError;
      (Node.prototype as any).removeChild = originalRemoveChild;
      (Node.prototype as any).insertBefore = originalInsertBefore;
      (Node.prototype as any).appendChild = originalAppendChild;
    };
  }, []);

  return null;
}
