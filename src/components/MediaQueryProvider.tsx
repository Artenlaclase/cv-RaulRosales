"use client"; // Asegura que el componente se renderice en el cliente

import { ReactNode } from "react";
import { useMediaQuery } from "@mui/material";
import { createContext, useContext } from "react";

const MediaQueryContext = createContext<boolean | null>(null);

export default function MediaQueryProvider({ children }: { children: ReactNode }) {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <MediaQueryContext.Provider value={isMobile}>
      {children}
    </MediaQueryContext.Provider>
  );
}

export function useMediaQueryContext() {
  return useContext(MediaQueryContext);
}