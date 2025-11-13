// app/competidor-integral/page.tsx
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Competidor Integral - Ética y entrenamiento | KISOLAND",
  description:
    "Marco de formación que integra cuerpo, mente y conducta para la excelencia con valores.",
  openGraph: {
    title: "Competidor Integral - Ética y entrenamiento | KISOLAND",
    description:
      "Marco de formación que integra cuerpo, mente y conducta para la excelencia con valores.",
    images: [
      {
        url: "/og/competidor-integral.jpg",
        width: 1200,
        height: 630,
        alt: "Competidor Integral - KISOLAND",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Competidor Integral - Ética y entrenamiento | KISOLAND",
    description:
      "Marco de formación que integra cuerpo, mente y conducta para la excelencia con valores.",
    images: ["/og/competidor-integral.jpg"],
  },
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

      {/* Principios */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Principios</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          <li className="rounded-lg border p-4 text-sm bg-card text-card-foreground">
            <span className="font-medium">Claridad.</span> Técnicas y mensajes simples. Lo complejo se reduce a pasos entrenables.
          </li>
          <li className="rounded-lg border p-4 text-sm bg-card text-card-foreground">
            <span className="font-medium">Consistencia.</span> Pequeñas ganancias diarias. Registro y revisión semanal.
          </li>
          <li className="rounded-lg border p-4 text-sm bg-card text-card-foreground">
            <span className="font-medium">Salud primero.</span> Sin dolor agudo. Progresar sin sacrificar tejido ni sueño.
          </li>
          <li className="rounded-lg border p-4 text-sm bg-card text-card-foreground">
            <span className="font-medium">Transferencia.</span> Lo que se entrena debe servir en juego y vida.
          </li>
        </ul>
      </section>

      {/* Niveles */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Niveles</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <article className="rounded-lg border p-4 text-sm bg-card text-card-foreground">
            <div className="font-semibold">Base</div>
            <ul className="mt-2 list-disc pl-5 opacity-80 space-y-1">
              <li>Dominadas 3–5 · Sentadilla 1×BW</li>
              <li>8k pasos/día · Sueño 7 h</li>
              <li>Técnica fundamental correcta</li>
            </ul>
          </article>
          <article className="rounded-lg border p-4 text-sm bg-card text-card-foreground">
            <div className="font-semibold">Intermedio</div>
            <ul className="mt-2 list-disc pl-5 opacity-80 space-y-1">
              <li>Dominadas 6–10 · Sentadilla 1.5×BW</li>
              <li>Plan semanal 4–5 días</li>
              <li>Hábitos de nutrición consistentes</li>
            </ul>
          </article>
          <article className="rounded-lg border p-4 text-sm bg-card text-card-foreground">
            <div className="font-semibold">Avanzado</div>
            <ul className="mt-2 list-disc pl-5 opacity-80 space-y-1">
              <li>Dominadas 10+ · Potencia medida</li>
              <li>Picos y descargas planificados</li>
              <li>Gestiona carga y microlesiones</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Ciclos y bloques */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Ciclos y bloques</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <article className="rounded-lg border p-4 text-sm bg-card text-card-foreground">
            <div className="font-semibold">Base (Sem 1–3)</div>
            <p className="opacity-80 mt-1">Técnica, movilidad y volumen moderado.</p>
          </article>
          <article className="rounded-lg border p-4 text-sm bg-card text-card-foreground">
            <div className="font-semibold">Fuerza (Sem 4–6)</div>
            <p className="opacity-80 mt-1">Bajas repeticiones. Progresión lineal.</p>
          </article>
          <article className="rounded-lg border p-4 text-sm bg-card text-card-foreground">
            <div className="font-semibold">Potencia (Sem 7–9)</div>
            <p className="opacity-80 mt-1">Velocidad, pliometría y transferencia.</p>
          </article>
          <article className="rounded-lg border p-4 text-sm bg-card text-card-foreground">
            <div className="font-semibold">Descarga (Sem 10–12)</div>
            <p className="opacity-80 mt-1">Reducir carga. Mantener gesto y rango.</p>
          </article>
        </div>
        <p className="mt-3 text-xs opacity-60">Ejemplo de 12 semanas. Ajustar a objetivo y disponibilidad.</p>
      </section>

      {/* Preguntas frecuentes */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Preguntas frecuentes</h2>
        <div className="mt-4 divide-y divide-border rounded-lg border">
          <details className="p-4">
            <summary className="cursor-pointer font-medium">¿Cuántos días por semana?</summary>
            <p className="mt-2 text-sm opacity-80">3–5 según nivel y bloque. Mínimo 2 de fuerza.</p>
          </details>
          <details className="p-4">
            <summary className="cursor-pointer font-medium">¿Cómo medir progreso?</summary>
            <p className="mt-2 text-sm opacity-80">Carga semanal, repeticiones técnicas, RPE y horas de sueño.</p>
          </details>
          <details className="p-4">
            <summary className="cursor-pointer font-medium">¿Puedo combinar con otros deportes?</summary>
            <p className="mt-2 text-sm opacity-80">Sí. Priorizar fuerza y técnica. Ajustar volumen del resto.</p>
          </details>
        </div>
      </section>

      <footer className="mt-12 border-t pt-6 text-sm opacity-80">
        ¿Sumamos una guía descargable? Pueden enviarnos el texto base (o bullets) y lo
        maquetamos en esta página con opción a PDF.
      </footer>
    </main>
  );
}