# 2025-11-08 — Setup inicial Oráculo KISO WEB

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