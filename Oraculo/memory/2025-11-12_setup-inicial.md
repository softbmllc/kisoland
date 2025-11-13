# 2025-11-08 - Setup inicial Oráculo KISO WEB

## Resumen técnico
KISO WEB consolidado en estructura y diseño modular.  
Focus Penalty en fase de refinamiento visual.  
Sistema de theming confirmado (`brand.css`), SEO/OG correcto, estructura `/app` estable.

## Decisiones tomadas
1. Paletas por lámina (`.theme-*`) respetan “Tipografías y Color”.
2. Card.tsx estandarizado con superficie crema y sombra suave.
3. Gradientes solo en héroes (no en cuerpo).
4. Jerarquía tipográfica ajustada (AA).
5. Footer coherente entre secciones.

## Lecciones aprendidas
- El error más frecuente: inconsistencias visuales entre secciones.
- Solución: tokens centralizados y documentación `/docs/`.

## Estado actual
✅ Estructura y estilo base listos.  
⚠️ Pendientes: cronologías, mapa ilustrado, OG de Indumentaria y Competidor Integral.  
🕓 Próxima fase: refinamiento visual global y documentación UI mínima.

## Próximos pasos
1. Crear /Oraculo/  
2. Sincronizar memoria en GPT Maestro.  
3. Generar prompt inicial del nuevo hilo.

---

## Actualización complementaria (2025-11-08 – tarde)
- Se agregó regla permanente en el Instructivo-V3.txt:
  > “Antes de realizar cualquier acción, analizá el archivo .zip del proyecto y confirmá que entendés la estructura, el contexto funcional y las reglas de diseño descritas.  
  > Si algo no queda completamente claro, formulá las preguntas necesarias antes de avanzar.”

- Propósito: evitar interpretaciones erróneas y asegurar comprensión total del entorno antes de ejecutar acciones técnicas.

- Instructivo-V3.txt subido al GPT Maestro y confirmado como activo.

---

## Actualización complementaria 2 (2025-11-08 – noche)
- Se actualizó el rol operativo del GPT Maestro (Oráculo) para evitar instrucciones de edición directa.
- Nueva directiva permanente:
  > "A partir de ahora, en todos los prompts iniciales que generes, no incluyas instrucciones explícitas del tipo 'abrí este archivo y pegá este código'.  
  > En cambio, proporcioná una guía estratégica con: contexto, estado actual del proyecto, principios visuales y técnicos, reglas de tokens, accesibilidad, naming, estructura, criterios de done y el camino a seguir.  
  > El nuevo hilo técnico es quien debe decidir qué archivos tocar y cómo implementar los cambios, luego de analizar el ZIP.  
  > Conservá el formato extendido actual (contexto, decisiones, estado, objetivos, criterios de done y checklist UI/PR), pero sin pasos 'abrí → pegá → guardá'."

- Propósito: mantener el Oráculo como guía estratégica y asegurar que los hilos técnicos trabajen con autonomía, aplicando las reglas y contexto provistos sin instrucciones de edición explícitas.


---

## 2025-11-10 - Cierre Sprint v1.0.0 (Mundo Kiso + refinamiento UI)

### Resumen técnico
- **Mundo Kiso**: estructura y look & feel estabilizados (hero en terracota con `bg-[var(--surface)]` + `ring-1` + sombras consistentes). Jerarquías tipográficas alineadas al sistema (`ty-h1/ty-lead`, h3 internos, subtítulos en versales discretos). Coherencia AA en light/dark.
- **Theming**: normalizados tokens en `app/brand.css` para light/dark: `--surface`, `--surface-alt`, `--foreground`, `--ink`, `--border` (y `--surface-foreground`). Eliminado toggle manual; el modo oscuro/ligero depende de `prefers-color-scheme` (para demos se puede forzar desde DevTools → Rendering → "Emulate CSS media feature: prefers-color-scheme").
- **Cronología** (`components/Timeline.tsx`):
  - Gutter incrementado (`ps-14`) y separación vertical (`space-y-8/10`).
  - Marcadores white en dark mode (`dark:bg-white` + `outline` y `ring`), más despegados (`-start-[18px]`).
  - Línea vertical con `border-[var(--border)]/70`.
  - Fila de título: `text-[15px]`, `font-medium`, año en `font-semibold`, separador `–` (no bullet) con `text-foreground/40`, título en `font-semibold` + `tracking-tight`.
  - Resumen acotado a `max-w-[66ch]`, `text-foreground/95`.
- **Relato de origen**: migrado a `<Card>` crema (`bg-[var(--surface)]`, `ring-1`, `shadow`), chip "Relato canónico", h3 “El origen” + subtítulo “Japón · Era Genpei”, regla corta, *drop cap* sutil; coherente en dark (overlay de luz, `--surface-foreground`).
- **Juegos de Pelota**: cards unificadas a `bg-[var(--surface)]` + `ring-1` + sombra; subtítulo editorial + CTA "Ver todos los juegos"; chips de contexto normalizados; layout vertical (3/3/…); alta legibilidad en dark; creada página **`/mundo-kiso/juegos`** con catálogo ampliado (incluye: Ōllamaliztli, Harpastum, Calcio, Sepak). 70–100 palabras por card como estándar.
- **Galería**: reemplazada grilla estática por **carrusel accesible** (AR IA roles, `scroll-smooth`, bullets con `:target`, flechas visibles en dark). Preparados slots `/public/mundo-kiso/mapa/capa-*.jpg` y `/public/mundo-kiso/mapa/*.jpg` + `/public/mundo-kiso/galeria/01-04.jpg` para arte canónico ("El espíritu de la montaña", *Planet Ball*, *Kiso y los 11 Inmortales*).
- **Símbolos**: sección restilizada a `bg-[var(--surface)]` con overlay de luz; **desactivada por defecto** (`SHOW_SYMBOLS=false`) hasta contar con SVGs y texturas aprobadas. Mantener coherencia de tokens; no usar `bg-[color:var(--...)]` (no soportado por Tailwind), usar `bg-[var(--token)]`/`text-[var(--token)]`.

### Decisiones
1. **Sin toggle manual** (se elimina `components/ThemeToggle.tsx` y cualquier import). Se usa `prefers-color-scheme`; para demos, forzar Light/Dark desde DevTools.
2. **Tokens como fuente de verdad**: `--surface`, `--surface-alt`, `--foreground`, `--ink`, `--border`, `--surface-foreground`. Prohibido `bg-[color:var(--foo)]`; usar `bg-[var(--foo)]`.
3. **Cards**: superficie crema con `ring-1` + `shadow` homogéneos; nada de `bg-card`/`text-card-foreground` en componentes base.
4. **Cronología**: marcadores blancos en dark, mayor separación a la izquierda (ps), año/título con jerarquía clara, resumen acotado a 60–66ch, línea vertical en `--border`.
5. **Símbolos**: se publican como cards editoriales (no UI) cuando llegue arte oficial; mientras tanto, desactivado.
6. **Galpón visual**: Galería como carrusel accesible; subtítulos en `figcaption`, bullets con `:target`, flechas discretas.
7. **Contenido**: Arcos en columna (3 fichas por sección, 70–100 palabras), CTA "Ver cronología →" desde Relato.

### Lecciones
- El problema más frecuente de dark mode fue el uso de `bg-[color:var(--…)]` (no válido en Tailwind). Solución: `bg-[var(--…)]` y `--surface-foreground` explícito en dark.
- Evitar colocar **Cronología + Símbolos** en paralelo: compiten visualmente. Apilar secciones para claridad.
- Para demostraciones, es más estable forzar light/dark via DevTools que introducir toggles en tiempo de entrega.
- Mantener al Oráculo como guía estratégica: no incluir pasos "abrí→pegá→guardá" en prompts de siguiente sprint.

### Estado actual
- ✅ Mundo Kiso: hero, Relato, Cronología, Galería, Arcos listos y coherentes (light/dark).
- ✅ Tokens de diseño consolidados en `brand.css` (light/dark) y `Card/Chip` normalizados.
- ✅ Página secundaria `/mundo-kiso/juegos` creada con catálogo ampliado.
- ⚠️ *Pendiente*: integrar assets canónicos (mapa ilustrado, personajes), generar OG definitivos para **Indumentaria** y **Competidor Integral**.
- ⚠️ *Pendiente*: documentar UI en `/docs/ui` (capturas, tokens, pautas de uso), y pasar **Lighthouse** a ≥95.

### Próximos pasos sugeridos (inicio Sprint v1.1.0)
1. Integrar imágenes canónicas en `public/mundo-kiso/mapa/` y `public/mundo-kiso/galeria/` (ver listado en hilo 2025-11-10).  
2. Escribir sinopsis (70–100 palabras) para cada arco y completar CTA “Ver cronología →”.  
3. Generar OG finales para `indumentaria` y `competidor-integral` (1200×630, tokens y emblema).  
4. Añadir `scrollspy` al dock de secciones (solo en desktop), foco visible y ARIA perfeccionados.  
5. Crear `/docs/ui/` con capturas y pautas (tokens, cards, subtítulos, carrusel accesible, dark mode).  
6. Cerrar QA: contrastes AA, performance (LCP), sin warnings de hidratación ni ESLint.