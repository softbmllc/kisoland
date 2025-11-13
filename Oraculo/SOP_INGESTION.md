# SOP Ingestión - Oráculo KISO WEB

## Propósito
Estandarizar cómo se actualizan los resúmenes y aprendizajes de cada hilo técnico para mantener la memoria viva del proyecto.

## Flujo
1️⃣ Cada vez que se cierra un hilo:
   - Crear un `.md` dentro de `/Oraculo/memory/` con nombre `AAAA-MM-DD_<tema>.md`.
   - Incluir las secciones: Resumen técnico · Decisiones tomadas · Lecciones aprendidas · Estado actual · Próximos pasos.

2️⃣ Copiar ese contenido completo y enviarlo al GPT Maestro con el comando:
> “Agregá a tu memoria lo siguiente, proveniente del último hilo de KISO WEB: [texto del resumen]”

3️⃣ Confirmar que el Maestro responde con:
> “Memoria integrada sin conflictos.”

## Correcciones o actualizaciones
Editar el `.md` local y reenviar al Maestro:
> “Actualizá en tu memoria el resumen del [fecha_tema] con los siguientes cambios: [texto]”

## Consultas
> “Mostrame el estado consolidado actual del proyecto KISO WEB.”

---

💡 El Maestro no lee automáticamente los archivos locales; el proceso de sincronización es manual (pegando texto en chat).