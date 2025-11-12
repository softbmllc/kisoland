// app/page.tsx — Home (usa componentes externos)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kisoland — Universo Kiso",
  description:
    "Explorá Kisolab, Focus Penalty, Mundo Kiso y la Colección del Orbe Sagrado.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kisoland — Universo Kiso",
    description:
      "Explorá Kisolab, Focus Penalty, Mundo Kiso y la Colección del Orbe Sagrado.",
    images: [
      { url: "/og/home.jpg", width: 1200, height: 630, alt: "KISOLAND — Universo Kiso" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisoland — Universo Kiso",
    description:
      "Explorá Kisolab, Focus Penalty, Mundo Kiso y la Colección del Orbe Sagrado.",
    images: ["/og/home.jpg"],
  },
};

import HomeHero from "@/components/HomeHero";
import HomeChapters from "@/components/Home/HomeChapters";
import HomeHighlights from "@/components/Home/HomeHighlights";
import HomeEditorial from "@/components/Home/HomeEditorial";
import HomeCTA from "@/components/Home/HomeCTA";

export default function Home() {
  return (
    <main className="theme theme-home bg-[var(--background)] text-[var(--foreground)]">
      <HomeHero />
      <HomeChapters />
      <HomeHighlights />
      <HomeEditorial />
      <HomeCTA />
    </main>
  );
}