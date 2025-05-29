// src/components/ThemeHydrationFix.tsx

"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/home/theme-provider";

export default function ThemeHydrationFix({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render nothing or minimal markup on server to avoid mismatch
    return null;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
