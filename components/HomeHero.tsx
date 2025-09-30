// components/HomeHero.tsx
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <div
        className="relative isolate overflow-hidden rounded-3xl p-8 md:p-12 ring-1 ring-[var(--border)]"
        style={{
          background:
            "radial-gradient(120% 120% at 10% 0%, var(--accent) 0%, transparent 60%), radial-gradient(140% 140% at 90% 100%, var(--primary) 0%, transparent 60%)",
        }}
      >
        <div className="relative z-10 max-w-2xl">
          <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--foreground)]/90" style={{ textShadow: "0 1px 0 rgba(0,0,0,0.12)" }}>
            KISOLAND
          </p>
          <h1 className="mt-3 ty-h1">El universo de Kiso</h1>
          <p className="mt-4 ty-lead">
            Explorá Kisolab, Focos Penalty, Mundo Kiso y la Colección del Orbe Sagrado.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/kisolab"
              className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium shadow-sm bg-[var(--primary)] text-[var(--background)] hover:opacity-90 active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
            >
              Explorar Kisolab
            </Link>
            <Link
              href="/quienes-somos"
              className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium shadow-sm bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
            >
              Quiénes somos
            </Link>
          </div>

          <nav className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            {[
              ["Kisolab", "/kisolab"],
              ["Focos Penalty", "/focos-penalty"],
              ["Mundo Kiso", "/mundo-kiso"],
              ["Orbe Sagrado", "/coleccion-del-orbe-sagrado"],
            ].map(([label, href], idx) => (
              <span key={href as string} className="flex items-center gap-2">
                <Link
                  href={href as string}
                  className="underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--foreground)]/60"
                >
                  {label as string}
                </Link>
                {idx < 3 ? <span aria-hidden className="opacity-40">·</span> : null}
              </span>
            ))}
          </nav>
        </div>

        {/* subtle color overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl mix-blend-multiply"
          style={{
            opacity: 0.12,
            background:
              "radial-gradient(120% 120% at 10% 0%, var(--accent) 0%, transparent 60%), radial-gradient(140% 140% at 90% 100%, var(--primary) 0%, transparent 60%)",
          }}
        />

        {/* decorative mask */}
        <div
          className="pointer-events-none absolute inset-0 -z-0"
          aria-hidden
          style={{
            maskImage:
              "radial-gradient(80% 60% at 20% 10%, black 50%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
