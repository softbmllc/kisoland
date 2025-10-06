// app/privacidad/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — KISOLAND",
  description: "Cómo tratamos datos personales, cookies y formularios de contacto.",
  openGraph: {
    title: "Política de Privacidad — KISOLAND",
    description: "Cómo tratamos datos personales, cookies y formularios de contacto.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630, alt: "KISOLAND — Universo Kiso" }],
  },
};

export default function Page() {
  return (
    <main className="theme mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Política de Privacidad</h1>
      <p className="mt-2 text-sm opacity-70">Última actualización: {new Date().toISOString().slice(0,10)}</p>

      <section className="mt-8 space-y-6">
        <div>
          <h2 className="text-lg font-semibold">1. Datos que podemos recopilar</h2>
          <p className="mt-2 opacity-80 text-sm">
            Nombre, email y mensajes enviados por formularios o contacto directo. No vendemos datos.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">2. Uso de la información</h2>
          <p className="mt-2 opacity-80 text-sm">
            Responder consultas, coordinar revisiones internas y mejorar el contenido del sitio.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">3. Cookies y analítica</h2>
          <p className="mt-2 opacity-80 text-sm">
            Podríamos usar analítica básica para entender uso de secciones. Podés bloquear cookies en tu navegador.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">4. Contacto</h2>
          <p className="mt-2 opacity-80 text-sm">
            Para ejercer derechos o solicitar baja: <a className="underline underline-offset-4" href="mailto:contacto@kisoland.com">contacto@kisoland.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}