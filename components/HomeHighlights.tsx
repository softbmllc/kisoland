// components/HomeHighlights.tsx
import Link from "next/link";

export default function HomeHighlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Competidor Integral */}
        <Link
          href="/competidor-integral"
          aria-label="Competidor Integral: Ética y entrenamiento para formar carácter y desempeño."
          className="group relative flex flex-col justify-between rounded-3xl ring-1 ring-[var(--border)] bg-[var(--surface)] shadow-md p-6 transition hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(0,0,0,.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] duration-200 after:absolute after:inset-0 after:rounded-3xl after:ring-1 after:ring-white/6"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
              background:
                "radial-gradient(120% 80% at 10% 0%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(140% 100% at 90% 100%, rgba(255,255,255,0.06) 0%, transparent 60%)",
              mixBlendMode: "overlay",
            }}
          />
          <span className="relative mb-3 inline-flex w-max items-center rounded-full px-2.5 py-[6px] text-[11px] tracking-[0.01em] leading-none text-[var(--surface-foreground)]/80 ring-1 ring-inset ring-[var(--border)]/60 bg-white/6 backdrop-blur-[2px]">
            <span className="absolute inset-0 rounded-full" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)" }} aria-hidden />
            <span className="relative">Desarrollo</span>
          </span>
          <div className="relative">
            <h3 className="font-semibold text-[var(--surface-foreground)] text-[20px] md:text-[22px] leading-[1.15] tracking-[-0.005em]">
              Competidor Integral
            </h3>
            <p className="mt-1 text-[15px] leading-[1.6] text-[var(--surface-foreground)]/85">
              Ética y entrenamiento para formar carácter y desempeño.
            </p>
            <div className="mt-3 flex items-center gap-3 text-[13px] tracking-[0.01em] text-[var(--surface-foreground)]/75">
              <span className="inline-flex items-center gap-1"><span aria-hidden>&middot;</span> Lectura 2–3 min</span>
              <span className="inline-flex items-center gap-1"><span aria-hidden>&middot;</span> 1 ensayo</span>
            </div>
            <span
              className="mt-4 inline-flex w-fit items-center justify-center gap-1.5 rounded-full min-h-[40px] px-3.5 py-2 text-sm font-semibold text-[var(--btn-fg)] bg-[var(--btn-bg)] ring-1 ring-[var(--btn-border)] shadow-[var(--btn-shadow)] hover:shadow-[var(--btn-shadow-hover)] active:shadow-[var(--btn-shadow-active)] active:translate-y-[1px] transition-transform duration-150"
            >
              Ver más <span aria-hidden>→</span>
            </span>
          </div>
          <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 rounded-b-3xl bg-gradient-to-t from-black/24 to-transparent" />
        </Link>

        {/* Carlos Alberto Plata */}
        <Link
          href="/carlos-alberto-plata"
          aria-label="Carlos Alberto Plata: Creador del universo Kiso. Biografía y obra."
          className="group relative flex flex-col justify-between rounded-3xl ring-1 ring-[var(--border)] bg-[var(--surface)] shadow-md p-6 transition hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(0,0,0,.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] duration-200 after:absolute after:inset-0 after:rounded-3xl after:ring-1 after:ring-white/6"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
              background:
                "radial-gradient(120% 80% at 10% 0%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(140% 100% at 90% 100%, rgba(255,255,255,0.06) 0%, transparent 60%)",
              mixBlendMode: "overlay",
            }}
          />
          <span className="relative mb-3 inline-flex w-max items-center rounded-full px-2.5 py-[6px] text-[11px] tracking-[0.01em] leading-none text-[var(--surface-foreground)]/80 ring-1 ring-inset ring-[var(--border)]/60 bg-white/6 backdrop-blur-[2px]">
            <span className="absolute inset-0 rounded-full" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)" }} aria-hidden />
            <span className="relative">Autor</span>
          </span>
          <div className="relative">
            <h3 className="font-semibold text-[var(--surface-foreground)] text-[20px] md:text-[22px] leading-[1.15] tracking-[-0.005em]">
              Carlos Alberto Plata
            </h3>
            <p className="mt-1 text-[15px] leading-[1.6] text-[var(--surface-foreground)]/85">
              Creador del universo Kiso. Biografía y obra.
            </p>
            <div className="mt-3 flex items-center gap-3 text-[13px] tracking-[0.01em] text-[var(--surface-foreground)]/75">
              <span className="inline-flex items-center gap-1"><span aria-hidden>&middot;</span> Lectura 2–3 min</span>
              <span className="inline-flex items-center gap-1"><span aria-hidden>&middot;</span> 1 biografía</span>
            </div>
            <span
              className="mt-4 inline-flex w-fit items-center justify-center gap-1.5 rounded-full min-h-[40px] px-3.5 py-2 text-sm font-semibold text-[var(--btn-fg)] bg-[var(--btn-bg)] ring-1 ring-[var(--btn-border)] shadow-[var(--btn-shadow)] hover:shadow-[var(--btn-shadow-hover)] active:shadow-[var(--btn-shadow-active)] active:translate-y-[1px] transition-transform duration-150"
            >
              Leer bio <span aria-hidden>→</span>
            </span>
          </div>
          <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 rounded-b-3xl bg-gradient-to-t from-black/24 to-transparent" />
        </Link>
      </div>
    </section>
  );
}