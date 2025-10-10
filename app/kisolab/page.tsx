// app/kisolab/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kisolab — Investigación y prototipos | KISOLAND",
  description:
    "Laboratorio creativo que transforma patrimonio futbolero en exposiciones, museos y proyectos itinerantes. 8.000+ piezas. Fútbol, diseño y memoria.",
  alternates: { canonical: "/kisolab" },
  openGraph: {
    title: "Kisolab — Investigación y prototipos | KISOLAND",
    description:
      "Laboratorio creativo que transforma patrimonio futbolero en exposiciones, museos y proyectos itinerantes. 8.000+ piezas. Fútbol, diseño y memoria.",
    images: [
      { url: "/og/kisolab.jpg", width: 1200, height: 630, alt: "Kisolab — Investigación y prototipos" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisolab — Investigación y prototipos | KISOLAND",
    description:
      "Laboratorio creativo que transforma patrimonio futbolero en exposiciones, museos y proyectos itinerantes. 8.000+ piezas. Fútbol, diseño y memoria.",
    images: ["/og/kisolab.jpg"],
  },
};

export default function Page() {
  return (
    <main className="theme theme-kisolab bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hero / Intro */}
        <section className="rounded-3xl ring-1 ring-[var(--border)] overflow-hidden">
          <div
            className="relative p-8 md:p-12"
            style={{
              background:
                "radial-gradient(120% 120% at 10% 0%, var(--hero-accent) 0%, transparent 60%), radial-gradient(140% 140% at 90% 100%, var(--hero-primary) 0%, transparent 60%)",
            }}
          >
            <div className="absolute inset-0 bg-background/25 [mask-image:linear-gradient(to-bottom,black,transparent_70%)]" />
            <div className="relative">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--foreground)]/90">KISOLAB</p>
              <h1 className="mt-3 ty-h1 text-[var(--foreground)] tracking-[-0.015em] md:whitespace-nowrap whitespace-normal" style={{ textWrap: "balance" }}>
                Laboratorio de investigación y prototipos
              </h1>
              <p className="mt-3 max-w-2xl ty-lead text-[var(--foreground)]">
                Kisolab es un laboratorio creativo y cultural que conecta la pasión por el fútbol con diseño,
                memoria e innovación. Transformamos el patrimonio futbolero en experiencias vivas que inspiran,
                educan y conectan a audiencias globales. Con una colección de más de 8.000 piezas, diseñamos
                exposiciones, museos y proyectos itinerantes que celebran la historia del deporte y generan
                diálogo cultural.
              </p>
              <nav className="mt-5 flex gap-2 overflow-x-auto">
                {[
                  ["Investigación", "#investigacion"],
                  ["Narrativa", "#narrativa"],
                  ["Producto", "#producto"],
                ].map(([label, href], idx) => (
                  <span key={href as string} className="flex items-center gap-2">
                    <a
                      href={href as string}
                      className="text-xs rounded-full px-3 py-1 border border-[var(--border)] bg-background/70 backdrop-blur hover:bg-background/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                    >
                      {label}
                    </a>
                  </span>
                ))}
              </nav>
              <div className="mt-5">
                <a
                  href="/quienes-somos#contacto"
                  className="inline-flex items-center rounded-md h-10 px-5 text-sm font-medium bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                >
                  Contactar laboratorio
                </a>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="mt-8 bg-background/80 p-6 md:p-8">
            {/* Bloques principales */}
            <section className="grid gap-5 md:grid-cols-3">
              <article
                id="investigacion"
                className="group relative rounded-2xl p-6 min-h-[12rem] border border-[var(--border)] bg-gradient-to-b from-background/70 to-background/40 text-card-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-[2px] hover:border-[var(--accent)]/40"
              >
                <a
                  href="#investigacion"
                  aria-label="Investigación visual — ver más"
                  className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                />
                <h3 className="font-semibold tracking-tight text-[var(--foreground)]">Investigación visual</h3>
                <p className="mt-2 text-sm text-[var(--foreground)]/80">Estudios de forma, color, textura y símbolos.</p>
                <div className="mt-4 flex justify-end pointer-events-none">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground)]/70 underline underline-offset-4">
                    Ver más <span aria-hidden>→</span>
                  </span>
                </div>
              </article>
              <article
                id="narrativa"
                className="group relative rounded-2xl p-6 min-h-[12rem] border border-[var(--border)] bg-gradient-to-b from-background/70 to-background/40 text-card-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-[2px] hover:border-[var(--accent)]/40"
              >
                <a
                  href="#narrativa"
                  aria-label="Narrativa — ver más"
                  className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                />
                <h3 className="font-semibold tracking-tight text-[var(--foreground)]">Narrativa</h3>
                <p className="mt-2 text-sm text-[var(--foreground)]/80">Worldbuilding, timeline y cohesión entre capítulos.</p>
                <div className="mt-4 flex justify-end pointer-events-none">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground)]/70 underline underline-offset-4">
                    Ver más <span aria-hidden>→</span>
                  </span>
                </div>
              </article>
              <article
                id="producto"
                className="group relative rounded-2xl p-6 min-h-[12rem] border border-[var(--border)] bg-gradient-to-b from-background/70 to-background/40 text-card-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-[2px] hover:border-[var(--accent)]/40"
              >
                <a
                  href="#producto"
                  aria-label="Producto — ver más"
                  className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                />
                <h3 className="font-semibold tracking-tight text-[var(--foreground)]">Producto</h3>
                <p className="mt-2 text-sm text-[var(--foreground)]/80">Prototipos de libros, indumentaria y objetos.</p>
                <div className="mt-4 flex justify-end pointer-events-none">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground)]/70 underline underline-offset-4">
                    Ver más <span aria-hidden>→</span>
                  </span>
                </div>
              </article>
            </section>

            {/* Proyectos + Método */}
            <section className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="ty-h2 text-[var(--foreground)]">Proyectos en curso</h2>
                <ul className="list-disc pl-5 space-y-1.5 text-[var(--foreground)]/90">
                  <li>
                    <Link prefetch href="/focos-penalty" className="underline underline-offset-4">Focos Penalty</Link> — línea de entrenamiento y foco
                  </li>
                  <li>
                    <Link prefetch href="/coleccion-del-orbe-sagrado" className="underline underline-offset-4">Colección del Orbe Sagrado</Link> — piezas y relatos
                  </li>
                  <li>
                    <Link prefetch href="/indumentaria" className="underline underline-offset-4">Indumentaria Kiso</Link> — drops y edición limitada
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="ty-h2 text-[var(--foreground)]">Método</h2>
                <ul className="list-disc pl-5 space-y-1.5 text-[var(--foreground)]/90">
                  <li>Exploración → prototipo → iteración</li>
                  <li>Documentación breve por bloque</li>
                  <li>Revisión con criterios visuales y de uso</li>
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
        </section>
      </div>
    </main>
  );
}