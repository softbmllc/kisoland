// app/mundo-kiso/page.tsx
import Image from "next/image";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "El mundo de Kiso — Kisoland",
  description:
    "Geografía, cronología, personajes y símbolos que estructuran el universo Kiso.",
  alternates: { canonical: "/mundo-kiso" },
  openGraph: {
    title: "El mundo de Kiso — Kisoland",
    description:
      "Geografía, cronología, personajes y símbolos que estructuran el universo Kiso.",
    images: ["/og/mundo-kiso.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "El mundo de Kiso — Kisoland",
    description:
      "Geografía, cronología, personajes y símbolos que estructuran el universo Kiso.",
    images: ["/og/mundo-kiso.jpg"],
  },
};

const mkItems = [
  { src: "/gallery/mundo-kiso/01.jpg", alt: "Paisaje del universo Kiso 1" },
  { src: "/gallery/mundo-kiso/02.jpg", alt: "Paisaje del universo Kiso 2" },
  { src: "/gallery/mundo-kiso/03.jpg", alt: "Paisaje del universo Kiso 3" },
  { src: "/gallery/mundo-kiso/04.jpg", alt: "Paisaje del universo Kiso 4" },
  { src: "/gallery/mundo-kiso/05.jpg", alt: "Paisaje del universo Kiso 5" },
  { src: "/gallery/mundo-kiso/06.jpg", alt: "Paisaje del universo Kiso 6" },
  { src: "/gallery/mundo-kiso/07.jpg", alt: "Paisaje del universo Kiso 7" },
  { src: "/gallery/mundo-kiso/08.jpg", alt: "Paisaje del universo Kiso 8" },
  { src: "/gallery/mundo-kiso/09.jpg", alt: "Paisaje del universo Kiso 9" },
  { src: "/gallery/mundo-kiso/10.jpg", alt: "Paisaje del universo Kiso 10" },
  { src: "/gallery/mundo-kiso/11.jpg", alt: "Paisaje del universo Kiso 11" },
  { src: "/gallery/mundo-kiso/12.jpg", alt: "Paisaje del universo Kiso 12" },
];

export default function Page() {
  return (
    <main className="theme theme-mundo-kiso">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hero / Intro */}
        <section className="rounded-3xl ring-1 ring-[var(--border)] overflow-hidden">
          <div
            className="p-8 md:p-12"
            style={{
              background:
                "radial-gradient(120% 120% at 10% 0%, var(--hero-accent) 0%, transparent 60%), radial-gradient(140% 140% at 90% 100%, var(--hero-primary) 0%, transparent 60%)",
            }}
          >
            <p className="text-xs font-semibold tracking-widest opacity-80">
              MUNDO KISO
            </p>
            <h1 className="mt-3 ty-h1">
              El mundo de Kiso
            </h1>
            <p className="mt-4 max-w-2xl ty-lead">
              Mapa, cronología y conceptos que sostienen el universo Kiso. Esta
              sección organiza la información para que la lectura sea clara y
              progresiva.
            </p>

            {/* Subnavegación */}
            <nav className="mt-6 flex flex-wrap gap-2">
              {[
                ["Mapa", "#mapa"],
                ["Capítulos", "#capitulos"],
                ["Personajes", "#personajes"],
                ["Cronología", "#cronologia"],
                ["Símbolos", "#simbolos"],
                ["Galería", "#galeria"],
              ].map(([label, href]) => (
                <a
                  key={href as string}
                  href={href as string}
                  className="rounded-full bg-background/70 text-foreground ring-1 ring-[var(--border)] px-3 py-1 text-xs backdrop-blur hover:bg-background/90 transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Body */}
          <div className="bg-background/70 backdrop-blur p-6 md:p-8">
            {/* Mapa ilustrado */}
            <section id="mapa">
              <h2 className="ty-h2">Mapa ilustrado</h2>
              <figure className="mt-4 overflow-hidden rounded-xl ring-1 ring-[var(--border)]">
                <Image
                  src="/mundo-kiso/mapa-ilustrado.jpg"
                  alt="Mapa ilustrado del universo Kiso"
                  width={1600}
                  height={900}
                  priority
                  sizes="(min-width: 768px) 1024px, 100vw"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="mt-2 text-xs opacity-60 px-3 pb-2">
                  Placeholder del mapa ilustrado. Reemplazar por imagen final.
                </figcaption>
              </figure>
            </section>

            {/* Bloques intro */}
            <section className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                ["Geografía", "Regiones, enclaves y laboratorios clave."],
                ["Cronología", "Hitos y líneas temporales por arco narrativo."],
                ["Símbolos", "Iconografía, colores y significados en el universo."],
              ].map(([k, v]) => (
                <article
                  key={k}
                  className="rounded-xl p-6 min-h-[9rem] ring-1 ring-[var(--border)] bg-card/90 text-card-foreground"
                >
                  <h3 className="font-semibold">{k}</h3>
                  <p className="mt-2 text-sm opacity-80">{v}</p>
                </article>
              ))}
            </section>

            {/* Arcos / personajes */}
            <section id="capitulos" className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="ty-h2">Capítulos / Arcos</h2>
                <ul className="list-disc pl-5 space-y-1.5 opacity-80">
                  <li>Arco 1 — título en preparación</li>
                  <li>Arco 2 — título en preparación</li>
                  <li>Arco 3 — título en preparación</li>
                </ul>
                <p className="text-sm opacity-70">
                  *Envíen títulos y una sinopsis breve (70–100 palabras) por arco y
                  lo maquetamos aquí.
                </p>
              </div>
              <div id="personajes" className="space-y-4">
                <h2 className="ty-h2">Personajes principales</h2>
                <ul className="list-disc pl-5 space-y-1.5 opacity-80">
                  <li>Personaje A — rol/resumen breve</li>
                  <li>Personaje B — rol/resumen breve</li>
                  <li>Personaje C — rol/resumen breve</li>
                </ul>
                <p className="text-sm opacity-70">
                  *Si nos pasan 1 foto/ilustración por personaje, armamos cards.
                </p>
              </div>
            </section>

            {/* Cronología y símbolos */}
            <section className="mt-10 grid gap-8 md:grid-cols-2">
              <div id="cronologia" className="space-y-4">
                <h2 className="ty-h2">Cronología</h2>
                <ol className="list-decimal pl-5 space-y-1.5 opacity-80">
                  <li>Acontecimiento clave 1 (año)</li>
                  <li>Acontecimiento clave 2 (año)</li>
                  <li>Acontecimiento clave 3 (año)</li>
                </ol>
              </div>
              <div id="simbolos" className="space-y-4">
                <h2 className="ty-h2">Símbolos</h2>
                <ul className="list-disc pl-5 space-y-1.5 opacity-80">
                  <li>Emblema Kiso — significado</li>
                  <li>Colores — uso y lectura</li>
                  <li>Motivos visuales — patrones y textura</li>
                </ul>
              </div>
            </section>

            {/* Galería */}
            <section id="galeria" className="mt-12">
              <h2 className="ty-h2">Galería</h2>
              <div className="mt-4">
                <Gallery items={mkItems} cols={{ base: 2, sm: 3, md: 4 }} />
              </div>
            </section>

            <footer className="mt-12 border-t border-[var(--border)] pt-6 text-sm opacity-80">
              ¿Quieren que incorporemos un mapa ilustrado y una línea de tiempo
              navegable? Envíen referencias y lo agregamos en esta página.
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}