// app/coleccion-del-orbe-sagrado/page.tsx
import OrbeCollage from "@/components/OrbeCollage";

export const metadata = {
  title: "Colección del Orbe Sagrado — Kisoland",
  description:
    "Selección de obras, relatos y piezas que componen la Colección del Orbe Sagrado dentro del universo Kiso.",
};

export default function Page() {
  return (
    <main className="theme theme-orbe-sagrado bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hero / Intro block */}
        <section className="rounded-3xl ring-1 ring-[var(--border)] overflow-hidden">
          <OrbeCollage />

          {/* Body */}
          <div className="bg-background/70 backdrop-blur p-6 md:p-8">
            {/* Header copy */}
            <header className="mb-6">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--accent)]">
                ORBE SAGRADO
              </p>
              <h1 className="mt-2 ty-h1">Colección del Orbe Sagrado</h1>
              <p className="mt-3 max-w-2xl ty-lead">
                Serie curada de piezas del universo Kiso. Aquí agrupamos las obras,
                personajes, arte y relatos asociados al Orbe Sagrado.
              </p>
            </header>
            {/* Destacados */}
            <section className="grid gap-5 md:grid-cols-3">
              {["Pieza / Capítulo 1", "Pieza / Capítulo 2", "Pieza / Capítulo 3"].map(
                (title) => (
                  <article
                    key={title}
                    className="rounded-2xl p-6 ring-1 ring-[var(--border)] bg-card/95 text-card-foreground shadow transition hover:-translate-y-1 hover:ring-2 hover:ring-[var(--accent)]/30"
                  >
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-sm opacity-80">
                      Descripción en preparación. Este bloque se reemplazará con
                      contenido e imágenes oficiales.
                    </p>
                  </article>
                )
              )}
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