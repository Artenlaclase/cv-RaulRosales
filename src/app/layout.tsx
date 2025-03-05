import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import ThemeRegistry from "@/components/ThemeRegistry";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raúl Rosales | Desarrollador Full Stack",
  description: "Portafolio personal y CV...",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeRegistry> {/* ¡Aquí usamos el nuevo componente! */}
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}