// app/focus-penalty/page.tsx
import type { NextPage } from "next";
import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Focus Penalty - Ciencia del penal | KISOLAND",
  description:
    "Preguntas que abren un diálogo global en torno al penalti. Herramienta de conexión y antesala del Mundial de Penaltis.",
  alternates: { canonical: "/focus-penalty" },
  openGraph: {
    title: "Focus Penalty - Ciencia del penal | KISOLAND",
    description:
      "Preguntas que abren un diálogo global en torno al penalti. Herramienta de conexión y antesala del Mundial de Penaltis.",
    images: [
      {
        url: "/og/focus-penalty.jpg",
        width: 1200,
        height: 630,
        alt: "Focus Penalty - Ciencia del penal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Penalty - Ciencia del penal | KISOLAND",
    description:
      "Preguntas que abren un diálogo global en torno al penalti. Herramienta de conexión y antesala del Mundial de Penaltis.",
    images: ["/og/focus-penalty.jpg"],
  },
};

const Page: NextPage = () => {
  return (
    <main className="theme theme-focus-penalty bg-[var(--background)] text-[var(--foreground)]">
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
            <div className="relative mb-6 h-64 md:h-96 w-full">
              <Image
                src="/focus-penalty/hero.jpg"
                alt="Disparo a portería, enfoque en el balón"
                fill
                priority
                sizes="(min-width: 768px) 960px, 100vw"
                className="rounded-xl object-cover object-[center_35%] ring-1 ring-[color:var(--border)] shadow-md"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-xl backdrop-saturate-90 backdrop-brightness-90"
                aria-hidden
                style={{ opacity: 0.9 }}
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
              <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--foreground)]/90">FOCUS PENALTY</p>
              <h1 className="mt-3 ty-h1">Focus Penalty</h1>
              <p className="mt-3 max-w-2xl ty-lead tracking-[0.01em] leading-[1.65]">
                Focus Penalty es una herramienta de conexión y reflexión que, a partir de preguntas esenciales,
                abre un diálogo global. Buscamos que cualquiera se reconozca en la universalidad del fútbol y
                en la emoción de un instante decisivo: el penalti. Es la antesala del Mundial de Penaltis:
                convertir la pregunta en juego, el juego en encuentro y el encuentro en memoria compartida.
              </p>
              <nav className="mt-5 flex gap-2 overflow-x-auto">
                {[
                  ["Estructura", "#estructura"],
                  ["Ejercicios", "#drills"],
                ].map(([label, href], idx) => (
                  <span key={href as string} className="flex items-center gap-2">
                    <Chip as="a" href={href as string} size="sm" className="hover:bg-[color:var(--accent)]/15">
                      {label as string}
                    </Chip>
                    {idx < 1 ? <span aria-hidden className="opacity-40">·</span> : null}
                  </span>
                ))}
              </nav>
            </div>
            <div
              className="pointer-events-none absolute inset-0 -z-0"
              aria-hidden
              style={{
                maskImage: "radial-gradient(80% 60% at 20% 10%, black 50%, transparent 100%)",
              }}
            />
          </div>
        </header>

        {/* Estructura del entrenamiento */}
        <section id="estructura" role="region" aria-labelledby="estructura-h" className="mt-12 md:mt-16">
          <h2 id="estructura-h" className="ty-h2 tracking-normal leading-tight mb-3 text-[clamp(1.4rem,2vw,1.75rem)]">Estructura del entrenamiento</h2>
          <div className="mt-3 grid gap-10 md:grid-cols-2">
            {[
              {
                t: "Calentamiento (5–8 min)",
                v: "Activación general y específica, movilidad articular y coordinación.",
              },
              {
                t: "Bloque técnico (10–15 min)",
                v: "Tareas focalizadas en golpeo, orientación corporal y control.",
              },
              {
                t: "Foco / decisiones (10–12 min)",
                v: "Juegos reducidos con estímulos auditivos/visuales y condicionantes.",
              },
              {
                t: "Enfriamiento y registro (5 min)",
                v: "Respiración, feedback rápido y registro de métricas básicas.",
              },
            ].map((it) => (
              <Card key={it.t} title={it.t} accent={false} className="transition-transform duration-150 hover:scale-[1.01] hover:shadow-[var(--shadow-lg)]">
                <p className="text-[15px] md:text-sm leading-snug max-w-[58ch]">{it.v}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Ejercicios de práctica */}
        <section id="drills" role="region" aria-labelledby="drills-h" className="mt-16">
          <h2 id="drills-h" className="ty-h2 tracking-normal leading-tight mb-3 text-[clamp(1.4rem,2vw,1.75rem)]">Ejercicios de práctica</h2>
          <div className="mt-3 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Objetivo del penal",
                objetivo: "Enfocar respiración, rutina corta y alineación.",
                duracion: "8 min",
                materiales: "4 conos, 1 balón, arco con 2 targets",
              },
              {
                name: "Ritmo 1‑2‑disparo",
                objetivo: "Pase de apoyo, control orientado y remate a primer o segundo palo.",
                duracion: "10 min",
                materiales: "6 conos, 1 balón por jugador",
              },
              {
                name: "Lectura de estímulo",
                objetivo: "Disparo según señal auditiva/visual para variar lado o altura.",
                duracion: "10 min",
                materiales: "4 conos, tarjetas R/L/↑/↓",
              },
              {
                name: "Foco + fatiga",
                objetivo: "Carrera corta + decisión de esquina en menos de 2s; series de 5 repeticiones.",
                duracion: "12 min",
                materiales: "cronómetro, 6 conos, 2 targets",
              },
              {
                name: "Secuencia 1‑2‑finta‑disparo",
                objetivo: "Doble pared, finta (paso, amague o recorte) y remate.",
                duracion: "12 min",
                materiales: "8 conos, 2 maniquíes opcionales",
              },
              {
                name: "Rondas cronometradas con dianas",
                objetivo: "Serie de 6 penales con scoring por zonas; registrar puntaje.",
                duracion: "12 min",
                materiales: "dianas o cintas de zonas, planilla",
              },
            ].map((drill) => (
              <Card
                key={drill.name}
                title={drill.name}
                accent={false}
                className="transition-transform duration-150 hover:scale-[1.01] hover:shadow-[var(--shadow-lg)]"
              >
                <div className="max-w-[52ch]">
                  <ul className="space-y-1.5 leading-snug">
                    <li><span className="font-semibold">Objetivo:</span> {drill.objetivo}</li>
                    <li><span className="font-semibold">Duración:</span> {drill.duracion}</li>
                    <li><span className="font-semibold">Materiales:</span> {drill.materiales}</li>
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>
        <div className="mt-20 border-t border-[color:var(--border)]/60" />

        {/* CTA final */}
        <section className="mt-0 pt-12">
          <Card title="¿Listos para practicar?" accent={false} className="rounded-lg ring-[var(--border)]/18 shadow-[0_6px_16px_rgba(0,0,0,0.06),0_-1px_0_rgba(255,255,255,0.05),0_-24px_32px_rgba(0,0,0,0.4)]">
            <p className="max-w-[56ch] leading-[1.55]">
              Podemos compartirte la guía completa en PDF o coordinar una demo.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#"
                aria-disabled
                className="inline-flex items-center justify-center cursor-not-allowed select-none rounded-md px-4 py-2 text-sm font-medium text-[color:var(--fg-muted)] bg-[color:var(--surface-alt)]/60 ring-1 ring-[color:var(--border)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                Descargar guía (pronto)
              </a>
              <a
                href="/quienes-somos"
                className="inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold text-[color:var(--primary-contrast)] bg-[color:var(--accent)] ring-1 ring-[color:var(--accent)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_2px_0_rgba(0,0,0,0.2)] hover:brightness-[1.02] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[color:var(--accent)] transition"
              >
                Contacto
              </a>
            </div>
          </Card>
        </section>

        <footer className="mt-12 border-t border-[color:var(--border)]/40 pt-6">
          <p className="text-sm text-[color:var(--fg-muted)]">
            ¿Quieren que preparemos una guía descargable? Pasen bullets y la
            maquetamos en PDF y web.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Page;