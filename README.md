# KISOLAND - MVP Web

Sitio oficial del **universo Kiso** (Next.js App Router + TS + Tailwind v3).

> Este README está pensado para cualquiera que se sume al proyecto y necesite contexto claro, estado actual y próximos pasos.

---

## Stack
- **Next.js 15 (App Router)** + **TypeScript**
- **Tailwind CSS v3** (no v4) + PostCSS/Autoprefixer
- Utilidades: **clsx**, **lucide-react**

## Scripts útiles
```bash
npm i
npm run dev     # http://localhost:3000
```
> Si los estilos no aplican: `rm -rf node_modules package-lock.json .next && npm i`.

**Trim de PNG de personajes** (recorta transparencia y deja 6px de aire):
```bash
npm i -D sharp fast-glob
node scripts/trim-personajes.mjs
```

## Estructura relevante
```
app/
  ├─ page.tsx                       # Home (hero, módulos, 4 thumbs MK)
  ├─ galeria/page.tsx               # Masonry + lightbox; soporta ImageKit
  ├─ mundo-kiso/page.tsx            # Hero + mapa (lightbox) + relato + arcos + personajes + juegos + CTA galería
  ├─ coleccion-del-orbe-sagrado/page.tsx  # Collage hero + destacados + copy
  ├─ focos-penalty/page.tsx         # Hero visual + chips + copy verificado
  ├─ indumentaria/page.tsx          # Landing (gradiente + CTA)
  ├─ kisolab/page.tsx               # Hero + chips + cards + CTA
  ├─ quienes-somos/page.tsx         # Misión/Método + equipo + cronología placeholder
  ├─ carlos-alberto-plata/page.tsx  # Bio
  ├─ competidor-integral/page.tsx   # Marco conceptual + FAQ + niveles
  ├─ robots.ts                      # `noindex` si `NEXT_PUBLIC_ENV=preview`
  ├─ sitemap.ts                     # Sitemap básico (locales ES/EN si aplica)
  ├─ brand.css                      # tokens + temas por sección
  └─ globals.css                    # Tailwind v3
components/
  ├─ SiteHeader.tsx | SiteFooter.tsx
  ├─ OrbeCollage.tsx
  └─ (varios de Home)
public/
  ├─ brand/mark-dark.svg | mark-light.svg
  ├─ mundo-kiso/mapa-ilustrado.jpg     # placeholder (lightbox)
  ├─ gallery/mundo-kiso/*.jpg          # 12 claves (fallback local)
  └─ personajes/<slug>/<slug>.png      # PNG recortado (sin fondo)
```

## Theming
- Tokens base (`--background`, `--foreground`, `--primary`, etc.).
- Temas por sección (ej. `.theme-mundo-kiso`).
- Usamos superficies **tintadas** con gradiente sutil + sombra limpia para look premium coherente.

---

## Estado actual (2025‑10‑05)
### Mundo Kiso
- **Hero** con intro y subnavegación (chips horizontales en mobile).
- **Mapa ilustrado** con lightbox (placeholder hasta arte final).
- **Relato de origen** con superficie tintada.
- **Arcos**: 3 cards placeholder (70–100 palabras c/u cuando lleguen títulos).
- **Personajes**: grid completa con **modal accesible** (flechas, close, foco visible). 
  - **Mobile**: muestra 5 y **“Ver más/menos”** sin JS (checkbox + CSS).
  - PNGs recortados y sombra de **contacto**.
- **Juegos de pelota**: cards coherentes (Cuju, Kemari, Episkyros, La soule, Juego de los dioses) con copy validado.
- **Galería**: se reemplazó la grilla por **una card** que abre `/galeria` (collage 2×2 + CTA).

### Galería (/galeria)
- Masonry + lightbox sin JS. 
- Soporta CDN **ImageKit** con `NEXT_PUBLIC_IK_BASE` (si no está, usa `/public`).

### SEO / Infra
- **Metadata por página** (title/description + OG). 
- **robots.ts**: `noindex` en *preview*.
- **sitemap.ts** básico.
- **Favicons** (`public/favicon.svg` + `public/favicon-512.png`).

---

## Contenido cargado
- **Personajes** (principales, inmortales y deidades) con **roles + bios** desde el doc del cliente.
- **Textos verificados** para *Kisolab*, *Orbe Sagrado* y *Focos Penalty*.

## Pendientes (cliente)
1) **Mapa ilustrado** final (JPG 2400×1600 sRGB, sin texto/logos, \~30% aire arriba).
2) **Cronología**: 6–10 hitos (Año • Título • 1–2 líneas • opcional imagen/arco).
3) **Símbolos**: emblema (significado/uso), paleta (HEX + usos), motivos/patrones.
4) **OG** faltantes definitivos: `competidor-integral.jpg`, `indumentaria.jpg`.
5) **Galería**: curado inicial 24–36; resto a ImageKit (`/gallery/mundo-kiso/`).

## Próximas tareas (sprint sugerido)
- **/galeria**: paginación “Cargar más” (24 por página), opción de filtros (Key Visuals / Bocetos / Piezas), preload ligero.
- **Mapa ilustrado**: integrar arte final + leyenda (regiones/fortalezas/rutas).
- **Cronología**: rendering con timeline por arco.
- **Símbolos**: sección con emblema/paleta/motivos (cards + ejemplos).
- **Accesibilidad**: repaso de foco visible en todos los CTAs y enlaces.
- **metadataBase**: añadir en `app/layout.tsx`:
  ```ts
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')
  ```

## Glosario rápido
- **Arco (narrativo)**: capítulo grande del universo (título + sinopsis + periodo).
- **PNG personaje**: `public/personajes/<slug>/<slug>.png` (recortado, sin fondo). 
- **ImageKit**: define `NEXT_PUBLIC_IK_BASE` (ej. `https://ik.imagekit.io/<cuenta>`), sube a `/gallery/mundo-kiso/`.

## Forma de trabajo
- **Ediciones directas**: “abrí archivo → pegá código”. Sin parches ni `any`.
- **Mobile‑first**, estética sobria (Apple/Notion‑like).
- **Tailwind v3** fijo (no v4). 
- Mensajes breves, una tarea por vez.

---
Autor: Equipo KISOLAND - 2025
