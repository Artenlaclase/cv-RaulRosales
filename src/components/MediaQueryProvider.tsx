"use client";

import { ReactNode } from "react";
import { useMediaQuery } from "@mui/material";
import { createContext, useContext } from "react";

// Cambia el tipo de contexto para manejar más queries
const MediaQueryContext = createContext<{
  isMobile: boolean;
  isTablet: boolean;
}>({
  isMobile: false,
  isTablet: false,
});

export default function MediaQueryProvider({ children }: { children: ReactNode }) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");

  return (
    <MediaQueryContext.Provider value={{ isMobile, isTablet }}>
      {children}
    </MediaQueryContext.Provider>
  );
}

export function useMediaQueryContext() {
  const context = useContext(MediaQueryContext);
  if (context === null) {
    throw new Error('useMediaQueryContext must be used within a MediaQueryProvider');
  }
  return context;
}