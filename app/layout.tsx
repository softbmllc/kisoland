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

export const metadata: Metadata = {
  title: 'KISOLAND',
  description: 'Universo Kiso.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/web-app-manifest-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/web-app-manifest-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.svg'],
  },
  manifest: '/site.webmanifest',
};

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