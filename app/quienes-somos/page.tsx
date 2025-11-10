// app/quienes-somos/page.tsx
import type { Metadata } from "next";
import Timeline from "@/components/Timeline";
import { QUIENES_SOMOS_TIMELINE } from "./timeline.data";
export const metadata: Metadata = {
  title: "Quiénes somos — KISOLAND",
  description:
    "Visión, valores y equipo detrás del universo Kiso. Arte, entrenamiento y producto con intención.",
  alternates: { canonical: "/quienes-somos" },
  openGraph: {
    title: "Quiénes somos — KISOLAND",
    description:
      "Visión, valores y equipo detrás del universo Kiso. Arte, entrenamiento y producto con intención.",
    images: [
      { url: "/og/quienes-somos.jpg", width: 1200, height: 630, alt: "Quiénes somos — KISOLAND" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiénes somos — KISOLAND",
    description:
      "Visión, valores y equipo detrás del universo Kiso. Arte, entrenamiento y producto con intención.",
    images: ["/og/quienes-somos.jpg"],
  },
};

export default function Page() {
  // TODO: Reemplazar email y WhatsApp cuando pase el cliente los definitivos
  const EMAIL = "contacto@kisoland.com"; // provisional
  const WHATS = "00000000000"; // provisional en formato E.164 sin signos
  const waText = encodeURIComponent(
    "Hola, vengo desde Kisoland (web) y quiero hacer una consulta."
  );

  return (
    <main className="theme bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <section className="mb-12 rounded-2xl border p-8 md:p-12 bg-[linear-gradient(135deg,hsl(var(--accent))_0%,transparent_60%)]">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Quiénes somos</h1>
          <p className="mt-3 max-w-2xl opacity-80">
            Kisoland es un proyecto creativo que une arte, entrenamiento y producto. 
            Diseñamos con intención, comunicamos sin ruido y priorizamos lo que se usa, 
            se lee y se entrena.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl p-6 min-h-[9rem] border bg-card text-card-foreground">
            <h2 className="text-lg font-semibold">Misión</h2>
            <p className="mt-2 text-sm opacity-80">
              Crear y compartir un universo que inspire disciplina, curiosidad y enfoque.
              Piezas que trascienden lo decorativo y sirven al que entrena y aprende.
            </p>
          </article>
          <article className="rounded-xl p-6 min-h-[9rem] border bg-card text-card-foreground">
            <h2 className="text-lg font-semibold">Método</h2>
            <ul className="mt-2 list-disc pl-5 text-sm opacity-80 space-y-1.5">
              <li>Explorar → prototipar → depurar, con ciclos cortos.</li>
              <li>Rigor en forma y fondo. Claridad visual como regla.</li>
              <li>Medir utilidad: ¿sirve, se entiende, se usa?</li>
            </ul>
          </article>
        </section>

        <section id="contacto" className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Equipo central</h2>
            <ul className="list-disc pl-5 text-sm opacity-80 space-y-1.5">
              <li>
                <a href="/carlos-alberto-plata" className="underline underline-offset-4">Carlos Alberto Plata</a> — Creador del universo Kiso
              </li>
              <li>Colaboradores — a confirmar</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Contacto</h2>
            <p className="opacity-90">
              Para prensa, muestras o alianzas, escribinos. Compartimos dossier, imágenes en alta y línea editorial.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Enviar email"
                className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium shadow-sm bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
              >
                Email
              </a>
              <a
                href={`https://wa.me/${WHATS}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp"
                className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium shadow-sm bg-[var(--primary)] text-[var(--background)] hover:opacity-90 active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
              >
                WhatsApp
              </a>
            </div>
            <p className="text-xs opacity-60">
              *Actualizaremos estos enlaces cuando se confirme el email y el número de WhatsApp finales.
            </p>
          </div>
        </section>

        <footer className="mt-12 border-t pt-6 text-sm opacity-80">
          ¿Quieren sumar fotos del equipo o una cronología de hitos? Pásenlas y lo integramos.
        </footer>
      </div>
    </main>
  );
}