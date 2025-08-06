"use client";
import { useEffect, useState } from 'react';

/**
 * ClientOnly component that only renders content after hydration
 * This completely eliminates hydration mismatches for dynamic content
 */
export function ClientOnly({ 
  children,
  fallback = null 
}: { 
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
