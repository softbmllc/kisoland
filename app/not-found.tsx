// app/not-found.tsx
import Link from "next/link";
export default function NotFound() {
    return (
      <main className="theme mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Página no encontrada</h1>
        <p className="mt-3 opacity-80">La ruta solicitada no existe o fue movida.</p>
        <Link href="/" className="mt-6 inline-flex rounded-md px-4 py-2 text-sm font-medium ring-1 ring-[var(--border)] hover:bg-background/70">
          Volver al inicio
        </Link>
      </main>
    );
  }