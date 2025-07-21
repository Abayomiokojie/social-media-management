// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="theme"
      themes={["light", "dark"]}
      forcedTheme={undefined}
      enableColorScheme={false}
    >
      {children}
    </ThemeProvider>
  );
}
