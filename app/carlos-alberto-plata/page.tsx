// app/carlos-alberto-plata/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carlos Alberto Plata — KISOLAND",
  description:
    "Biografía sintética del creador del universo Kiso y de la filosofía del Competidor Integral. Obra, enfoque y enlaces relacionados.",
  openGraph: {
    title: "Carlos Alberto Plata — KISOLAND",
    description:
      "Biografía sintética del creador del universo Kiso y de la filosofía del Competidor Integral. Obra, enfoque y enlaces relacionados.",
    images: [
      {
        url: "/og/carlos-alberto-plata.jpg",
        width: 1200,
        height: 630,
        alt: "Carlos Alberto Plata — KISOLAND",
      },
    ],
  },
};

export default function Page() {
  return (
    <main className="theme bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <header>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Carlos Alberto Plata
          </h1>
          <p className="mt-2 text-sm opacity-70">
            Abogado, escritor e inventor colombiano. Creador del universo Kiso y de la filosofía del Competidor Integral.
          </p>
        </header>

        <figure className="mt-6">
          <Image
            src="/images/carlos-alberto-plata.jpg"
            alt="Retrato de Carlos Alberto Plata"
            width={1200}
            height={900}
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="w-full h-auto rounded-xl ring-1 ring-[var(--muted)] object-cover"
          />
          <figcaption className="mt-2 text-xs opacity-60">
            Carlos Alberto Plata · foto de prensa
          </figcaption>
        </figure>

        <h2 className="mt-10 text-xl font-semibold">Biografía</h2>
        <p className="mt-3 leading-relaxed opacity-90">
          Carlos Alberto Plata Gómez articula deporte, educación y cultura con un
          enfoque formativo que trasciende la lógica del resultado. Su trabajo
          combina investigación, escritura y proyectos editoriales que proponen
          una lectura ética de la competencia, con énfasis en el carácter, la
          disciplina y el juego limpio. Desde Kiso, su plataforma conceptual,
          propone una gramática de valores que orienta a deportistas, familias y
          formadores hacia una excelencia sostenible en lo técnico y lo humano.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Filosofía Kiso: el Competidor Integral</h2>
        <p className="mt-3 leading-relaxed opacity-90">
          La noción de <strong>Competidor Integral</strong> resume una ética de
          entrenamiento que integra cuerpo, mente y conducta. El proceso se
          apoya en hábitos verificables: respeto por el rival y las reglas,
          constancia, autocontrol y responsabilidad colectiva. Los hitos de Kiso
          funcionan como un mapa de aprendizaje continuo: aceptar el error como
          insumo, convertir el fracaso en ajuste de método y sostener la
          disciplina como condición de crecimiento. La propuesta es aplicable al
          deporte formativo y profesional, y a contextos educativos y
          comunitarios.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Publicaciones y proyectos</h2>
        <p className="mt-3 leading-relaxed opacity-90">
          La obra de Plata se desarrolla en series y cuadernos de trabajo que
          combinan reflexión, narrativa y didáctica. Entre los títulos más
          difundidos se encuentran <em>Hitos de Kiso</em> y compilaciones que
          acercan principios del método a entrenadores, familias y lectores
          generales. Los textos proponen ejercicios de observación, guías para
          la toma de decisiones bajo presión y materiales para el aula y el
          campo de juego. Algunos capítulos abordan la dimensión científica del
          deporte y la relación entre técnica, táctica y valor educativo.
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-1 opacity-90">
          <li>Serie <em>Hitos de Kiso</em> — valores, hábitos y entrenamiento mental.</li>
          <li>Cuadernos de práctica — dinámicas para clubes, colegios y familias.</li>
          <li>Ensayos breves — ética de la competencia y liderazgo en equipo.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Enlaces y referencias</h2>
        <ul className="mt-3 space-y-2">
          <li className="flex flex-wrap gap-3">
            <Link href="/competidor-integral" className="underline underline-offset-4">
              Competidor Integral
            </Link>
            <span aria-hidden className="opacity-40">·</span>
            <Link href="/mundo-kiso" className="underline underline-offset-4">
              Mundo Kiso
            </Link>
            <span aria-hidden className="opacity-40">·</span>
            <Link href="/coleccion-del-orbe-sagrado" className="underline underline-offset-4">
              Colección del Orbe Sagrado
            </Link>
          </li>
        </ul>

        <aside className="mt-12 rounded-lg border border-[var(--muted)] p-4">
          <h3 className="font-semibold">Ficha</h3>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="opacity-60">Rol</dt>
              <dd className="text-right">Autor y creador de Kiso</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="opacity-60">Proyecto</dt>
              <dd className="text-right">Universo Kiso</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="opacity-60">Contacto</dt>
              <dd className="text-right">
                <Link href="/quienes-somos" className="underline underline-offset-4">
                  Ver Quiénes somos
                </Link>
              </dd>
            </div>
          </dl>
        </aside>
      </section>
    </main>
  );
}