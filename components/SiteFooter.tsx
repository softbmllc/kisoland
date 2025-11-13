// components/SiteFooter.tsx - limpio y coherente con el header
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/kisolab", label: "Kisolab" },
  { href: "/focus-penalty", label: "Focus Penalty" },
  { href: "/indumentaria", label: "Indumentaria" },
  { href: "/mundo-kiso", label: "Mundo Kiso" },
  { href: "/coleccion-del-orbe-sagrado", label: "Orbe Sagrado" },
  { href: "/quienes-somos", label: "Quiénes somos" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-background/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          {/* Marca */}
          <div className="flex items-center gap-3">
            {/* Light bg (day) */}
            <Image src="/brand/mark-dark.svg" alt="" width={24} height={24} priority className="inline dark:hidden shrink-0" />
            {/* Dark bg (night) */}
            <Image src="/brand/mark-light.svg" alt="" width={24} height={24} priority className="hidden dark:inline shrink-0" />
            <span className="text-sm text-[var(--foreground)]/80">© {year} KISOLAND · Universo Kiso</span>
          </div>

          {/* Navegación */}
          <nav aria-label="Enlaces del sitio" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[var(--foreground)]/80 underline-offset-4 hover:text-[var(--foreground)] hover:underline"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Línea legal secundaria (placeholders) */}
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--foreground)]/60">
          <Link href="/privacidad" className="hover:underline underline-offset-4">Privacidad</Link>
          <span aria-hidden>·</span>
          <Link href="/terminos" className="hover:underline underline-offset-4">Términos</Link>
        </div>

        {/* Firma final */}
        <div className="mt-6 pt-3 border-t border-[var(--border)] text-center text-xs text-[var(--foreground)]/60">
          Hecho con Next.js · <a href="https://www.devrodri.com" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">by Rodrigo Opalo</a>
        </div>
      </div>
    </footer>
  );
}