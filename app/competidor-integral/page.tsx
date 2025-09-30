// app/competidor-integral/page.tsx
export const metadata = {
  title: "¿Qué es el Competidor Integral? — Kisoland",
  description:
    "Marco conceptual de Kiso para desarrollo físico, mental y técnico a largo plazo.",
};

export default function Page() {
  return (
    <main className="theme mx-auto max-w-6xl px-4 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          ¿Qué es el Competidor Integral?
        </h1>
        <p className="mt-3 max-w-2xl opacity-80">
          Es el marco de Kiso para entrenar y vivir con intención: equilibrio entre cuerpo,
          mente, técnica y entorno, con hábitos sostenibles y métricas claras.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border p-5 bg-card text-card-foreground">
          <h2 className="text-lg font-semibold">1) Cuerpo</h2>
          <p className="mt-2 text-sm opacity-80">
            Fuerza, movilidad, resistencia y prevención de lesiones. Planes por bloques y
            progresión medible.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm opacity-80 space-y-1">
            <li>Fuerza + Potencia</li>
            <li>Movilidad + Estabilidad</li>
            <li>Condición aeróbica/anaeróbica</li>
          </ul>
        </article>

        <article className="rounded-lg border p-5 bg-card text-card-foreground">
          <h2 className="text-lg font-semibold">2) Mente</h2>
          <p className="mt-2 text-sm opacity-80">
            Enfoque, gestión del estrés, visualización y toma de decisiones bajo presión.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm opacity-80 space-y-1">
            <li>Rutinas de foco (respiración, journaling)</li>
            <li>Protocolos pre‑competencia</li>
            <li>Higiene del sueño</li>
          </ul>
        </article>

        <article className="rounded-lg border p-5 bg-card text-card-foreground">
          <h2 className="text-lg font-semibold">3) Técnica &amp; Hábito</h2>
          <p className="mt-2 text-sm opacity-80">
            Mecánica del movimiento, patrones correctos y diseño de hábitos para consistencia.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm opacity-80 space-y-1">
            <li>Patrones fundamentales (empuje, tracción, bisagra, sentadilla, rotación)</li>
            <li>Descomposición técnica y repetición deliberada</li>
            <li>Sistemas de hábitos: disparador → acción → recompensa</li>
          </ul>
        </article>

        <article className="rounded-lg border p-5 bg-card text-card-foreground">
          <h2 className="text-lg font-semibold">4) Entorno &amp; Recuperación</h2>
          <p className="mt-2 text-sm opacity-80">
            Nutrición, hidratación, suplementación responsable y entorno social que acompaña.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm opacity-80 space-y-1">
            <li>Recuperación activa y del tejido</li>
            <li>Electrolitos, proteína y micronutrientes</li>
            <li>Rituales post‑sesión y control de carga</li>
          </ul>
        </article>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Métricas clave</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            ["Carga semanal", "volumen × intensidad"],
            ["Sueño", "horas efectivas y regularidad"],
            ["Hábitos", "consistencia 80/20"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border p-4 text-sm">
              <div className="font-semibold">{k}</div>
              <div className="opacity-80 mt-1">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-12 border-t pt-6 text-sm opacity-80">
        ¿Sumamos una guía descargable? Pueden enviarnos el texto base (o bullets) y lo
        maquetamos en esta página con opción a PDF.
      </footer>
    </main>
  );
}