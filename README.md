This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# KISOLAND — MVP Web

Sitio oficial del **universo Kiso** (Next.js App Router + TS + Tailwind v3).  
Estado actual: páginas base creadas y temas por sección listos.

## Stack
- **Next.js 15 (App Router)** + **TypeScript**
- **Tailwind CSS v3** (no v4) + PostCSS/Autoprefixer
- **clsx**, **lucide-react**

## Instalación & Dev
```bash
npm i
npm run dev
# abre http://localhost:3000
```
> Si los estilos no aplican: `rm -rf node_modules package-lock.json .next && npm i`.

## Estructura relevante
```
app/
  ├─ page.tsx                     # Home (tema base)
  ├─ globals.css                  # @tailwind v3 + import de brand.css
  ├─ brand.css                    # tokens + temas por sección
  ├─ kisolab/page.tsx             # .theme-kisolab
  ├─ focos-penalty/page.tsx       # .theme-focos-penalty
  ├─ indumentaria/page.tsx        # tema base
  ├─ mundo-kiso/page.tsx          # .theme-mundo-kiso
  ├─ coleccion-del-orbe-sagrado/page.tsx # .theme-orbe-sagrado
  ├─ quienes-somos/page.tsx
  ├─ carlos-alberto-plata/page.tsx
  └─ competidor-integral/page.tsx
components/
  └─ SiteHeader.tsx
tailwind.config.ts  # v3, content apunta a app/components/pages
postcss.config.mjs  # v3: tailwindcss + autoprefixer
```

## Theming (brand.css)
- Tokens base (`--background`, `--foreground`, `--primary`, etc.).
- Temas por sección:
  - `.theme-kisolab`  
  - `.theme-focos-penalty`  
  - `.theme-mundo-kiso`  
  - `.theme-orbe-sagrado`
- Uso: envolver el contenido con `className="theme theme-XYZ"`.

## Dominio
- GoDaddy (kisoland.com):  
  - **A @ → 76.76.21.21**  
  - **CNAME www → cname.vercel-dns.com**  
- Cuando haya deploy en Vercel, añadir dominio y redirección `www → raíz`.

## Contenido pendiente (cliente)
- Bio de **Carlos** (300–600 palabras) + sinopsis de libros.
- 10–20 ilustraciones/fotos en alta + fotos de producto.
- Políticas (privacidad/términos/devoluciones/envíos) + **disclaimer de salud**.
- Logística: retiro/envío, costos/tiempos, transportista.
- Pasarela en CO (MP/Wompi/PayU/ePayco) y si precios **incluyen IVA**.

## Roadmap
**Fase A (WEB):**
- Hero Home + contenidos reales por página.
- Galería y fichas simples (Obras/Capítulos/Personajes).
- Contacto (WhatsApp + email) y SEO básico.

**Fase B (SHOP + ADMIN):**
- Panel admin (productos/variantes/stock/categorías).
- Catálogo navegable + “Comprar por WhatsApp”.
- Luego: checkout (MP/Wompi) + envíos (tabla de tarifas) + órdenes en Firebase.

## Forma de trabajo (acuerdos)
- **Ediciones directas**: “abrí _archivo_ → pegá _código_”. Sin parches ni `any`.
- **Mobile‑first**, estética sobria (Apple/Notion‑like).
- **Tailwind v3** fijo (no v4).  
- Mensajes breves, pasos numerados; una tarea por vez.

## Assets/Docs
- Guardar referencias en `docs/brand/` (ej.: `TIPOGRAFIAS_Y_COLOR.pdf`).

---
Autor: Rodrigo Opalo — 2025