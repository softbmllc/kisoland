// components/HomeHero.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section aria-label="Hero — El universo de Kiso" className="mx-auto px-4 md:px-0 md:max-w-6xl py-16 md:py-28">
      {/* Contenedor del hero: superficie unificada + ring + sombra */}
      <div className="relative isolate overflow-hidden rounded-3xl ring-1 ring-[var(--border)] shadow-sm bg-[var(--surface)]">
        {/* Media: 4:3 en mobile, 16:9 en desktop. La imagen es el LCP */}
        <div className="relative w-full aspect-[3/2] md:aspect-auto md:min-h-[640px]">
          <Image
            src="/hero/home.jpg" // 2400×1600 sRGB, sin texto
            alt="Paisaje costero de Kyūshū con bruma y patio ancestral de juego de pelota; luz cálida al horizonte"
            fill
            priority
            fetchPriority="high"
            sizes="(min-width: 1280px) 1152px, 100vw"
            quality={82}
            decoding="async"
            className="object-cover object-[40%_50%] select-none"
          />
          {/* Light veil to ensure AA in light mode */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 dark:hidden"
            style={{
              background: "rgba(0,0,0,0.18)",
              mixBlendMode: "multiply",
            }}
          />
          {/* Gradiente SOLO en la franja del hero (más denso en mobile/light) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.44) 32%, rgba(0,0,0,0.24) 60%, rgba(0,0,0,0.08) 80%, rgba(0,0,0,0.00) 92%)",
              mixBlendMode: "multiply",
            }}
          />
          {/* Dark: stronger mobile gradient for AA */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden dark:block md:hidden"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.48) 32%, rgba(0,0,0,0.26) 60%, rgba(0,0,0,0.10) 80%, rgba(0,0,0,0.00) 92%)",
              mixBlendMode: "multiply",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none hidden md:block absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.56) 0%, rgba(0,0,0,0.40) 28%, rgba(0,0,0,0.20) 52%, rgba(0,0,0,0.08) 70%, rgba(0,0,0,0.00) 86%)",
              mixBlendMode: "multiply",
            }}
          />
          {/* Dark: stronger desktop gradient for AA */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden dark:block md:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.46) 28%, rgba(0,0,0,0.22) 52%, rgba(0,0,0,0.10) 70%, rgba(0,0,0,0.00) 86%)",
              mixBlendMode: "multiply",
            }}
          />
          {/* Scrim focal para mejorar lectura del copy (sólo lado izquierdo) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-[56%]"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.34) 40%, rgba(0,0,0,0.12) 66%, rgba(0,0,0,0.00) 86%)",
              mixBlendMode: "multiply",
            }}
          />
          {/* Dark: stronger left scrim */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-[56%] hidden dark:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.38) 40%, rgba(0,0,0,0.12) 66%, rgba(0,0,0,0.00) 86%)",
              mixBlendMode: "multiply",
            }}
          />
        </div>

        {/* Capa de contenido: 40–44% de ancho para copy a la izquierda */}
        <div className="z-10 block md:absolute md:inset-0 md:flex">
          <div className="flex w-full md:w-[46%] min-w-[280px] max-w-[640px] flex-col justify-center gap-5 p-6 sm:p-8 md:p-12 pt-6 pb-14 md:pt-0 md:pb-20">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--surface-foreground)]/70 md:text-white/85">KISOLAND</p>
            <h1 className="ty-h1 leading-tight text-[var(--surface-foreground)] md:text-white whitespace-nowrap">El universo de Kiso</h1>
            <p className="ty-lead text-[var(--surface-foreground)]/85 md:text-white/90 md:max-w-[45ch] md:leading-[1.6] md:tracking-[0.005em]">
              Kiso explora la memoria del fútbol desde Kyūshū: investigación, artefactos y juego como lenguaje.
              Este sitio reúne capítulos, piezas y relatos para navegar la obra con claridad. Kisolab abre procesos y
              prototipos; el Orbe Sagrado resguarda objetos con valor simbólico; Focus Penalty propone encuentros que
              expanden la experiencia más allá del marcador.
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              <Link
                href="/mundo-kiso"
                className="inline-flex w-full md:w-auto justify-center items-center gap-2 rounded-full min-h-[44px] px-5 py-2 text-sm font-semibold text-[var(--btn-fg)] bg-[var(--btn-bg)] ring-1 ring-[var(--btn-border)] shadow-[var(--btn-shadow)] hover:shadow-[var(--btn-shadow-hover)] active:translate-y-[1px] dark:bg-white md:bg-white md:ring-white/20 md:shadow-none md:hover:bg-white/90"
                aria-label="Ir a Mundo Kiso"
              >
                Entrar a Mundo Kiso
              </Link>
              <Link
                href="/kisolab"
                className="inline-flex w-full md:w-auto justify-center items-center gap-2 rounded-full min-h-[44px] px-5 py-2 text-sm font-medium text-[var(--surface-foreground)] ring-1 ring-[var(--border)] hover:bg-white/6 md:text-white md:ring-1 md:ring-inset md:ring-white/50 md:hover:bg-white/10"
                aria-label="Ir a Kisolab"
              >
                Ver Kisolab
              </Link>
            </div>

            {/* Atajos semánticos, mantienen AA gracias al overlay */}
            <nav aria-label="Atajos del sitio" className="mt-3 flex items-center gap-2 md:gap-1 flex-nowrap overflow-x-auto md:overflow-visible no-scrollbar pl-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] md:px-0">
              {[
                ["Kisolab", "/kisolab"],
                ["Focus Penalty", "/focus-penalty"],
                ["Mundo Kiso", "/mundo-kiso"],
                ["Origen", "/mundo-kiso#origen"],
                ["Orbe Sagrado", "/coleccion-del-orbe-sagrado"],
              ].map(([label, href]) => (
                <Link
                  key={href as string}
                  href={href as string}
                  className="whitespace-nowrap rounded-full px-3 md:px-2.5 py-1 md:py-1 text-xs md:text-[11px] text-[var(--chip-fg)] md:text-white ring-1 ring-inset ring-[var(--chip-border)] md:ring-white/35 bg-[var(--chip-bg)] md:bg-white/10 backdrop-blur-[2px] hover:bg-white/12"
                  aria-label={`Ir a ${label as string}`}
                >
                  {label as string}
                </Link>
              ))}
            </nav>
            <div className="h-2 md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
