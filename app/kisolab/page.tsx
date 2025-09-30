// app/kisolab/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Kisolab — Investigación y prototipos | Kisoland",
  description:
    "Laboratorio de investigación, prototipos y pruebas del universo Kiso.",
  alternates: { canonical: "/kisolab" },
  openGraph: {
    title: "Kisolab — Investigación y prototipos | Kisoland",
    description:
      "Laboratorio de investigación, prototipos y pruebas del universo Kiso.",
    images: ["/og/kisolab.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisolab — Investigación y prototipos | Kisoland",
    description:
      "Laboratorio de investigación, prototipos y pruebas del universo Kiso.",
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
            className="p-8 md:p-12"
            style={{
              background:
                "radial-gradient(120% 120% at 10% 0%, var(--hero-accent) 0%, transparent 60%), radial-gradient(140% 140% at 90% 100%, var(--hero-primary) 0%, transparent 60%)",
            }}
          >
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--accent)]">
              KISOLAB
            </p>
            <h1 className="mt-3 ty-h1 text-[var(--foreground)] tracking-[-0.015em] md:whitespace-nowrap whitespace-normal" style={{ textWrap: "balance" }}>
              Laboratorio de investigación y prototipos
            </h1>
            <p className="mt-3 max-w-2xl ty-lead text-[var(--foreground)]">
              Laboratorio de ideas de Kiso. Investigación visual y narrativa,
              pruebas de concepto y desarrollo de piezas que alimentan el universo.
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
                    className="text-sm underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--foreground)]/60"
                  >
                    {label}
                  </a>
                  {idx < 2 ? <span aria-hidden className="opacity-40">·</span> : null}
                </span>
              ))}
            </nav>
            <div className="mt-5">
              <a
                href="/quienes-somos"
                className="inline-flex rounded-md px-4 py-2 text-sm font-medium shadow-sm bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 active:opacity-80"
              >
                Contactar laboratorio
              </a>
            </div>
          </div>

          {/* Body */}
          <div className="mt-8 bg-background/70 backdrop-blur p-6 md:p-8">
            {/* Bloques principales */}
            <section className="grid gap-5 md:grid-cols-3">
              {[
                ["investigacion", "Investigación visual", "Estudios de forma, color, textura y símbolos."],
                ["narrativa", "Narrativa", "Worldbuilding, timeline y cohesión entre capítulos."],
                ["producto", "Producto", "Prototipos de libros, indumentaria y objetos."],
              ].map(([id, k, v]) => (
                <article
                  id={id as string}
                  key={id as string}
                  className="group rounded-2xl p-6 min-h-[9rem] ring-1 ring-[var(--border)] bg-gradient-to-b from-background/70 to-background/40 backdrop-blur-sm text-card-foreground shadow transition hover:-translate-y-1 hover:ring-2 hover:ring-[var(--accent)]/30 hover:shadow-md border-t-2 border-[var(--accent)]/40"
                >
                  <h3 className="font-semibold tracking-tight text-[var(--foreground)]">{k as string}</h3>
                  <p className="mt-2 text-sm text-[var(--foreground)]/80">{v as string}</p>
                  <div className="mt-4 flex justify-end">
                    <a href={`#${id as string}`} className="text-sm text-[var(--accent)] hover:underline">
                      Ver más →
                    </a>
                  </div>
                </article>
              ))}
            </section>

            {/* Proyectos + Método */}
            <section className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="ty-h2 text-[var(--foreground)]">Proyectos en curso</h2>
                <ul className="list-disc pl-5 space-y-1.5 text-[var(--foreground)]/90">
                  <li>Focos Penalty — línea de entrenamiento y foco</li>
                  <li>Colección del Orbe Sagrado — piezas y relatos</li>
                  <li>Indumentaria Kiso — drops y edición limitada</li>
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
                <Link href="/mundo-kiso" className="underline underline-offset-4">
                  Mundo Kiso
                </Link>
                <span aria-hidden className="opacity-40">·</span>
                <Link href="/competidor-integral" className="underline underline-offset-4">
                  Competidor Integral
                </Link>
                <span aria-hidden className="opacity-40">·</span>
                <Link
                  href="/coleccion-del-orbe-sagrado"
                  className="underline underline-offset-4"
                >
                  Colección del Orbe Sagrado
                </Link>
                <span aria-hidden className="opacity-40">·</span>
                <Link href="/indumentaria" className="underline underline-offset-4">
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