// app/coleccion-del-orbe-sagrado/page.tsx
import OrbeCollage from "@/components/OrbeCollage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colección del Orbe Sagrado — KISOLAND",
  description:
    "Esencia de nuestra colección: 8.000+ piezas que guardan la memoria del fútbol y su poder simbólico. Un universo vivo que inspira, educa y conecta.",
  openGraph: {
    title: "Colección del Orbe Sagrado — KISOLAND",
    description:
      "Esencia de nuestra colección: 8.000+ piezas que guardan la memoria del fútbol y su poder simbólico. Un universo vivo que inspira, educa y conecta.",
    images: [
      {
        url: "/og/coleccion-del-orbe-sagrado.jpg",
        width: 1200,
        height: 630,
        alt: "Colección del Orbe Sagrado — KISOLAND",
      },
    ],
  },
};

export default function Page() {
  return (
    <main className="theme theme-orbe-sagrado bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hero / Intro block */}
        <section className="rounded-3xl ring-1 ring-[var(--border)] overflow-hidden">
          {/* Header copy */}
          <div className="p-8 md:p-12">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--accent)]">ORBE SAGRADO</p>
            <h1 className="mt-2 ty-h1">Colección del Orbe Sagrado</h1>
            <p className="mt-3 max-w-2xl ty-lead">
              El Orbe Sagrado es la esencia de nuestra colección: más de 8.000 piezas que guardan la
              memoria del fútbol y su poder simbólico. No es solo un archivo; es un universo vivo donde
              cada balón, camiseta o guayo se vuelve relato cultural. Busca inspirar, educar y emocionar,
              mostrando al fútbol como lenguaje universal que conecta a los pueblos y revela la grandeza
              de lo humano.
            </p>
          </div>

          {/* Collage band reducido con desvanecido inferior */}
          <div className="relative h-48 md:h-64 [mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)]">
            <OrbeCollage />
          </div>

          {/* Body */}
          <div className="bg-background/70 backdrop-blur p-6 md:p-8 rounded-b-3xl">
            {/* Destacados */}
            <section id="destacados" className="mt-2">
              <h2 className="ty-h2">Piezas destacadas</h2>
              <div className="mt-4 grid gap-5 md:grid-cols-3">
                {["Pieza / Capítulo 1", "Pieza / Capítulo 2", "Pieza / Capítulo 3"].map((title) => (
                  <div key={title} className="relative">
                    {/* overlay clickable */}
                    <a
                      href="/mundo-kiso#galeria"
                      aria-label={`Ver más sobre ${title}`}
                      className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                    />
                    <article className="relative rounded-2xl p-6 border border-[var(--border)] bg-card/95 text-card-foreground transition hover:border-[var(--accent)]/40">
                      {/* media placeholder 4:3 para futuras imágenes */}
                      <div className="relative w-full aspect-[4/3] rounded-lg ring-1 ring-[var(--border)] bg-background/40" aria-hidden />
                      <h3 className="mt-3 font-semibold">{title}</h3>
                      <p className="mt-2 text-sm opacity-80">
                        Descripción en preparación. Este bloque se reemplazará con contenido e imágenes oficiales.
                      </p>
                    </article>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="/mundo-kiso#galeria"
                  className="inline-flex items-center rounded-md border border-[var(--border)] px-4 py-2 text-sm hover:border-[var(--accent)]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                >
                  Ver colección completa →
                </a>
              </div>
            </section>

            {/* Lore + Formatos */}
            <section className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="ty-h2 text-[var(--foreground)]">Lore / Mitología</h2>
                <p className="text-[var(--foreground)]/90">
                  Texto breve sobre el significado del Orbe Sagrado dentro del
                  universo Kiso: origen, custodios, reglas, conflictos y símbolos.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="ty-h2 text-[var(--foreground)]">Ediciones y formatos</h2>
                <ul className="list-disc pl-5 space-y-1.5 text-[var(--foreground)]/90">
                  <li>Novela gráfica (impreso y eBook)</li>
                  <li>Arte / prints firmados</li>
                  <li>Merch / coleccionables</li>
                </ul>
              </div>
            </section>

            <div className="mt-12 border-t border-[var(--border)] pt-6 text-sm opacity-80">
              ¿Quieren que dejemos una galería y ficha técnica por obra? Me pasan
              títulos, sinopsis corta (70–100 palabras) e imágenes en alta y lo
              añadimos.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}