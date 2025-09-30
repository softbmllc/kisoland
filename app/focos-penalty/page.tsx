// app/focos-penalty/page.tsx
export const metadata = {
  title: "Focos Penalty — Ciencia del penal | Kisoland",
  description:
    "Lecturas y experimentos sobre la física, ética y entrenamiento del penal.",
  alternates: { canonical: "/focos-penalty" },
  openGraph: {
    title: "Focos Penalty — Ciencia del penal | Kisoland",
    description:
      "Lecturas y experimentos sobre la física, ética y entrenamiento del penal.",
    images: ["/og/focos-penalty.jpg"], // subir en public/og/
  },
  twitter: {
    card: "summary_large_image",
    title: "Focos Penalty — Ciencia del penal | Kisoland",
    description:
      "Lecturas y experimentos sobre la física, ética y entrenamiento del penal.",
    images: ["/og/focos-penalty.jpg"],
  },
};

export default function Page() {
  return (
    <main className="theme theme-focos-penalty bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-8 md:mb-10">
          <div
            className="relative isolate overflow-hidden rounded-3xl p-8 md:p-12 ring-1 ring-[var(--border)]"
            style={{
              background:
                "radial-gradient(120% 120% at 10% 0%, var(--accent) 0%, transparent 60%), radial-gradient(140% 140% at 90% 100%, var(--primary) 0%, transparent 60%)",
            }}
          >
            {/* media hero */}
            <div className="relative mb-6">
              <img
                src="/focos-penalty/hero.jpg"
                alt="Disparo a portería, enfoque en el balón"
                className="h-64 w-full rounded-xl object-cover object-[center_35%] ring-1 ring-[var(--border)] shadow-md md:h-96"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-xl mix-blend-multiply"
                style={{
                  opacity: 0.18,
                  background:
                    "radial-gradient(120% 120% at 10% 0%, var(--accent) 0%, transparent 60%), radial-gradient(140% 140% at 90% 100%, var(--primary) 0%, transparent 60%)",
                }}
              />
            </div>
            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-semibold tracking-widest opacity-70">FOCOS PENALTY</p>
              <h1 className="mt-3 ty-h1">Focos Penalty</h1>
              <p className="mt-3 max-w-2xl ty-lead">
                Entrenamiento orientado a foco, precisión y toma de decisiones bajo
                presión. Listado de contenidos, piezas y material práctico.
              </p>
              <nav className="mt-5 flex gap-2 overflow-x-auto">
                {[
                  ["Resumen", "#resumen"],
                  ["Estructura", "#estructura"],
                  ["Drills", "#drills"],
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
            </div>
            <div
              className="pointer-events-none absolute inset-0 -z-0"
              aria-hidden
              style={{
                maskImage:
                  "radial-gradient(80% 60% at 20% 10%, black 50%, transparent 100%)",
              }}
            />
          </div>
        </header>

        <section id="resumen" className="grid gap-4 md:grid-cols-3">
          {[
            [
              "Objetivo",
              "Desarrollar foco, timing y ejecución en escenarios de presión.",
            ],
            ["Método", "Sesiones breves, métricas claras y progresión semanal."],
            [
              "Materiales",
              "Conos/estacas, cronómetro, planillas y cámara opcional.",
            ],
          ].map(([k, v]) => (
            <article
              key={k as string}
              className="rounded-2xl p-6 min-h-[9rem] ring-1 ring-[var(--border)] bg-card/95 text-card-foreground shadow transition hover:-translate-y-1 hover:ring-2 hover:ring-[var(--accent)]/30"
            >
              <h3 className="font-semibold">{k}</h3>
              <p className="mt-2 text-sm opacity-80">{v as string}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 id="estructura" className="ty-h2">Estructura sugerida</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-[var(--foreground)]/90">
              <li>Calentamiento (5–8 min)</li>
              <li>Bloque técnico (10–15 min)</li>
              <li>Bloque de foco/decisiones (10–12 min)</li>
              <li>Enfriamiento y registro (5 min)</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 id="drills" className="ty-h2">Ejemplos de “drills”</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-[var(--foreground)]/90">
              <li>Penalty con estímulo auditivo/visual</li>
              <li>Secuencia 1‑2‑finta‑disparo</li>
              <li>Rondas cronometradas con targets</li>
            </ul>
          </div>
        </section>

        <footer className="mt-12 border-t border-[var(--border)] pt-6">
          <p className="text-sm opacity-80">
            ¿Quieren que preparemos una guía descargable? Pasen bullets y la
            maquetamos en PDF y web.
          </p>
        </footer>
      </div>
    </main>
  );
}