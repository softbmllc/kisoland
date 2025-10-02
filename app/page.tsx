// app/page.tsx — Home (usa componentes externos)
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "KISOLAND — Universo Kiso",
  description:
    "Universo Kiso: Kisolab, Orbe Sagrado y Focos Penalty. Memoria del fútbol convertida en experiencias vivas: exposiciones, piezas y relatos.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "KISOLAND — Universo Kiso",
    description:
      "Universo Kiso: Kisolab, Orbe Sagrado y Focos Penalty. Memoria del fútbol convertida en experiencias vivas: exposiciones, piezas y relatos.",
    images: [
      { url: "/og/home.jpg", width: 1200, height: 630, alt: "KISOLAND — Universo Kiso" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KISOLAND — Universo Kiso",
    description:
      "Universo Kiso: Kisolab, Orbe Sagrado y Focos Penalty. Memoria del fútbol convertida en experiencias vivas: exposiciones, piezas y relatos.",
    images: ["/og/home.jpg"],
  },
};

import Link from "next/link";
import Image from "next/image";

import HomeHero from "@/components/HomeHero";
import HomeModules from "@/components/HomeModules";
import HomeHighlights from "@/components/HomeHighlights";
import HomeCta from "@/components/HomeCta";

export default function Home() {
  return (
    <main className="theme bg-[var(--background)] text-[var(--foreground)]">
      <HomeHero />
      <HomeModules />
      <HomeHighlights />
      {/* Mundo Kiso — 4 thumbnails */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-4 flex items-center justify-between">
          <h2 className="ty-h2">Mundo Kiso</h2>
          <Link
            href="/mundo-kiso"
            className="text-sm underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--foreground)]/60"
          >
            Ver todo
          </Link>
        </header>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { src: "/gallery/mundo-kiso/01.jpg", alt: "Paisaje del universo Kiso 1" },
            { src: "/gallery/mundo-kiso/02.jpg", alt: "Paisaje del universo Kiso 2" },
            { src: "/gallery/mundo-kiso/03.jpg", alt: "Paisaje del universo Kiso 3" },
            { src: "/gallery/mundo-kiso/04.jpg", alt: "Paisaje del universo Kiso 4" },
          ].map((it) => (
            <Link key={it.src} href="/mundo-kiso" aria-label="Abrir Mundo Kiso" className="group">
              <figure className="relative overflow-hidden rounded-xl ring-1 ring-[var(--border)] transition group-hover:ring-2 group-hover:ring-[var(--accent)]/30 group-hover:shadow-md">
                <Image
                  src={it.src}
                  alt={it.alt}
                  width={800}
                  height={600}
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="h-32 w-full object-cover md:h-56 transition-transform group-hover:scale-[1.02]"
                />
                <figcaption className="pointer-events-none absolute inset-x-2 bottom-2 translate-y-2 rounded px-2 py-1 text-xs text-[var(--background)] bg-[var(--foreground)]/80 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  Explorar →
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </section>
      <HomeCta />
    </main>
  );
}