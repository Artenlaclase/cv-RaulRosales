import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MediaQueryProvider from "@/components/MediaQueryProvider"; // Importar el nuevo proveedor

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raúl Rosales | Desarrollador Full Stack",
  description:
    "Portafolio personal y CV de Raúl Rosales, Desarrollador Full Stack especializado en React, Next.js y Node.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MediaQueryProvider>
              <Navbar />
              {children}
              <Footer />
            </MediaQueryProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}