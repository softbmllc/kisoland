// app/quienes-somos/page.tsx
export const metadata = {
  title: "Quiénes somos — Kisoland",
  description:
    "Visión, valores y equipo detrás del universo Kiso. Arte, entrenamiento y producto con intención.",
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
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Quiénes somos
          </h1>
          <p className="mt-3 max-w-2xl opacity-90">
            Kisoland es un proyecto creativo que une arte, entrenamiento y
            producto. Nuestro enfoque: claridad visual, narrativa coherente y
            utilidad real para la comunidad.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl p-6 min-h-[9rem] ring-1 ring-white/10 bg-card text-card-foreground">
            <h2 className="text-lg font-semibold">Propósito</h2>
            <p className="mt-2 text-sm opacity-80">
              Crear y compartir un universo que inspire disciplina, curiosidad y
              enfoque, con piezas que trascienden lo decorativo.
            </p>
          </article>
          <article className="rounded-xl p-6 min-h-[9rem] ring-1 ring-white/10 bg-card text-card-foreground">
            <h2 className="text-lg font-semibold">Valores</h2>
            <ul className="mt-2 list-disc pl-5 text-sm opacity-80 space-y-1.5">
              <li>Rigor y honestidad en la forma y el fondo</li>
              <li>Iteración consciente: explorar → prototipar → depurar</li>
              <li>Respeto por el proceso y por quien entrena/crea</li>
            </ul>
          </article>
          <article className="rounded-xl p-6 min-h-[9rem] ring-1 ring-white/10 bg-card text-card-foreground">
            <h2 className="text-lg font-semibold">Manifiesto</h2>
            <p className="mt-2 text-sm opacity-80">
              Diseñar con intención; comunicar sin ruido; priorizar lo que se
              usa, se lee y se entrena.
            </p>
          </article>
        </section>

        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Equipo</h2>
            <ul className="list-disc pl-5 text-sm opacity-80 space-y-1.5">
              <li>
                <a href="/carlos-alberto-plata" className="underline underline-offset-4">
                  Carlos Alberto Plata
                </a>{" "}
                — Creador del universo Kiso
              </li>
              <li>Colaboradores — a confirmar</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Prensa y contacto</h2>
            <p className="opacity-90">
              Para notas, muestras o alianzas, escribinos. Podemos compartir
              dossier, imágenes en alta y línea editorial.
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
          ¿Quieren que sumemos fotos del equipo y una línea de tiempo de hitos?
          Pásenlas y lo agregamos.
        </footer>
      </div>
    </main>
  );
}