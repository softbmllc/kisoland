// app/kisolab/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";

export const metadata: Metadata = {
  title: "Kisolab - Investigación y prototipos | KISOLAND",
  description:
    "Laboratorio creativo y cultural que conecta la pasión por el fútbol con diseño, memoria e innovación. 8.000+ piezas, exposiciones, museos y proyectos itinerantes.",
  alternates: { canonical: "/kisolab" },
  openGraph: {
    title: "Kisolab - Investigación y prototipos | KISOLAND",
    description:
      "Laboratorio creativo y cultural que conecta la pasión por el fútbol con diseño, memoria e innovación. 8.000+ piezas, exposiciones, museos y proyectos itinerantes.",
    images: [
      { url: "/og/kisolab.jpg", width: 1200, height: 630, alt: "Kisolab - Investigación y prototipos" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisolab - Investigación y prototipos | KISOLAND",
    description:
      "Laboratorio creativo y cultural que conecta la pasión por el fútbol con diseño, memoria e innovación. 8.000+ piezas, exposiciones, museos y proyectos itinerantes.",
    images: ["/og/kisolab.jpg"],
  },
};

export default function Page() {
  return (
    <main className="theme theme-kisolab bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hero / Intro */}
        <section className="rounded-3xl overflow-hidden">
          <div
            className="relative p-8 md:p-12"
            style={{
              background:
                "radial-gradient(140% 140% at 0% 0%, var(--hero-accent) 0%, transparent 55%), radial-gradient(160% 160% at 100% 100%, var(--hero-primary) 0%, transparent 65%), linear-gradient(to bottom, rgba(0,0,0,0.18), transparent 35%, rgba(0,0,0,0.28))",
            }}
          >
            <div className="relative">
              <p className="text-[12px] md:text-[13px] font-semibold tracking-[0.22em] text-white/70">
                KISOLAB
              </p>
              <h1
                className="mt-3 ty-h1 text-white tracking-[-0.015em] md:whitespace-nowrap whitespace-normal"
                style={{ textWrap: "balance" }}
              >
                Laboratorio de investigación y prototipos
              </h1>
              <p className="mt-3 max-w-2xl ty-lead text-white/80">
                Kisolab es el espacio donde el universo Kiso se estudia, se ordena y se pone a prueba.
                Aquí conviven archivo, experimentación y procesos inspirados en la neurociencia: desde la concentración en el penal hasta la lectura visual de objetos, semillas y relatos.
                El laboratorio trabaja para transformar ideas dispersas en piezas claras (colecciones, prototipos y narrativas) que hacen visible la relación entre mente, pelota y cultura.
              </p>
              <nav
                className="mt-5 flex gap-2 overflow-x-auto"
                aria-label="Enfoques del laboratorio Kisolab"
              >
                {[
                  ["Investigación", "#investigacion"],
                  ["Narrativa", "#narrativa"],
                  ["Producto", "#producto"],
                ].map(([label, href]) => (
                  <Chip
                    key={href}
                    as="a"
                    href={href}
                    size="sm"
                    className="whitespace-nowrap rounded-full bg-white/10 text-white/90 border border-white/25 hover:bg-white/16 backdrop-blur-sm"
                  >
                    {label}
                  </Chip>
                ))}
              </nav>
              <div className="mt-5">
                <a
                  href="/quienes-somos#contacto"
                  className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium bg-[color:var(--ink)] text-white shadow-sm hover:bg-[color:var(--ink)]/90 dark:bg-white dark:text-[color:var(--background)] dark:hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                >
                  Contactar laboratorio
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <div className="mt-8 bg-background/80 p-6 md:p-8">
            {/* Bloques principales */}
            <section className="grid gap-5 md:grid-cols-3">
              <div id="investigacion">
                <Card
                  className="group relative rounded-2xl p-7 md:p-8 min-h-[16rem] border border-[var(--border)] bg-[color:var(--background)]/92 text-[color:var(--ink)] shadow-sm transition hover:-translate-y-[3px] hover:shadow-md hover:border-[var(--accent)]/60 flex flex-col h-full"
                >
                <a
                  href="#investigacion"
                  aria-label="Investigación visual - ver más"
                  className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                />
                <h3 className="ty-card-title">Investigación visual</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]/85">
                Estudio de camisetas, fotos, objetos y materiales con foco en forma, color y símbolos.
                Lectura comparativa del archivo para identificar patrones culturales y decisiones estéticas.
                </p>
                <div className="mt-8 flex justify-end pointer-events-none">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--ink)] hover:underline underline-offset-4">
                    Ver proyectos <span aria-hidden>→</span>
                  </span>
                </div>
                </Card>
              </div>
              <div id="narrativa">
                <Card
                  className="group relative rounded-2xl p-7 md:p-8 min-h-[16rem] border border-[var(--border)] bg-[color:var(--background)]/92 text-[color:var(--ink)] shadow-sm transition hover:-translate-y-[3px] hover:shadow-md hover:border-[var(--accent)]/60 flex flex-col h-full"
                >
                <a
                  href="#narrativa"
                  aria-label="Narrativa - ver más"
                  className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                />
                <h3 className="ty-card-title">Narrativa</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]/85">
                Organización de relatos, secuencias y conexiones entre piezas, culturas y personajes del universo.
                Estructuras coherentes que nacen de ideas dispersas y se traducen en capítulos y colecciones.
                </p>
                <div className="mt-8 flex justify-end pointer-events-none">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--ink)] hover:underline underline-offset-4">
                    Ver proyectos <span aria-hidden>→</span>
                  </span>
                </div>
                </Card>
              </div>
              <div id="producto">
                <Card
                  className="group relative rounded-2xl p-7 md:p-8 min-h-[16rem] border border-[var(--border)] bg-[color:var(--background)]/92 text-[color:var(--ink)] shadow-sm transition hover:-translate-y-[3px] hover:shadow-md hover:border-[var(--accent)]/60 flex flex-col h-full"
                >
                <a
                  href="#producto"
                  aria-label="Producto - ver más"
                  className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                />
                <h3 className="ty-card-title">Producto</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]/85">
                  Prototipos de libros, objetos, indumentaria y piezas experimentales.
                  Ensayos que permiten convertir intuiciones en formatos concretos listos para exposición o circulación.
                </p>
                <div className="mt-8 flex justify-end pointer-events-none">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--ink)] hover:underline underline-offset-4">
                    Ver proyectos <span aria-hidden>→</span>
                  </span>
                </div>
                </Card>
              </div>
            </section>

            {/* Proyectos + Método */}
            <section className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="ty-h2 text-[var(--foreground)]">Proyectos en curso</h2>
                <ul className="list-disc pl-5 space-y-1.5 text-[var(--foreground)]/90">
                  <li>
                    <Link prefetch href="/focus-penalty" className="underline underline-offset-4">Focus Penalty</Link> - línea de entrenamiento y foco
                  </li>
                  <li>
                    <Link prefetch href="/coleccion-del-orbe-sagrado" className="underline underline-offset-4">Colección del Orbe Sagrado</Link> - piezas y relatos
                  </li>
                  <li>
                    <Link prefetch href="/indumentaria" className="underline underline-offset-4">Indumentaria Kiso</Link> - drops y edición limitada
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="ty-h2 text-[var(--foreground)]">Método</h2>
                <ul className="list-disc pl-5 space-y-1.5 text-[var(--foreground)]/90">
                  <li>Exploración del archivo físico y digital.</li>
                  <li>Síntesis de ideas dispersas en estructuras claras.</li>
                  <li>Prototipado rápido (visual, narrativo o material).</li>
                  <li>Iteración guiada por criterios de claridad, foco y uso.</li>
                  <li>Documentación breve para revisión interna.</li>
                </ul>
              </div>
            </section>


            <div className="mt-12 border-t border-[var(--border)] pt-6 text-sm opacity-80">
              ¿Publicamos avances y procesos aquí? Pueden enviarnos imágenes y notas
              (formato breve) y lo dejamos maquetado con galería.
              <nav className="mt-4 flex flex-wrap gap-3">
                <Link prefetch href="/mundo-kiso" className="underline underline-offset-4">
                  Mundo Kiso
                </Link>
                <span aria-hidden className="opacity-40">·</span>
                <Link prefetch href="/competidor-integral" className="underline underline-offset-4">
                  Competidor Integral
                </Link>
                <span aria-hidden className="opacity-40">·</span>
                <Link
                  prefetch
                  href="/coleccion-del-orbe-sagrado"
                  className="underline underline-offset-4"
                >
                  Colección del Orbe Sagrado
                </Link>
                <span aria-hidden className="opacity-40">·</span>
                <Link prefetch href="/indumentaria" className="underline underline-offset-4">
                  Indumentaria
                </Link>
              </nav>
            </div>
          </div>
      </div>
    </main>
  );
}