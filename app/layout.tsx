// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Libre_Baskerville, Comic_Neue } from "next/font/google";

// Carga tipografías como variables CSS para uso en brand.css
const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-libre" });
const comic = Comic_Neue({ subsets: ["latin"], weight: ["700"], variable: "--font-comic" });

export const metadata: Metadata = { title: "Kisoland", description: "Universo Kiso" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${libre.variable} ${comic.variable} min-h-screen bg-background text-foreground`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}