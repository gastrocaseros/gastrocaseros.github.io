---
name: ig-content
description: Crea posts, carruseles, historias, reels y efemérides de Instagram para GastroCaseros usando familias HTML reutilizables, aprobación visual y exportación documentada. Usar ante cualquier pedido de contenido para Instagram.
---

# Contenido Instagram de GastroCaseros

## Fuente única

Leé y seguí `docs/instagram/11_Workflows_Contenido.md`. No reconstruyas el proceso leyendo todos los documentos.

Consultá archivos adicionales solo cuando el workflow lo indique:

- marca/voz: `docs/instagram/01_Estrategia_y_Marca.md`
- captions: `docs/instagram/08_Archivo_de_Captions.md`
- calendario: `docs/instagram/09_Calendario_Efemerides.md`
- lecciones operativas de este skill: `reference.md` (mismo directorio)

## Ejecución

1. Elegí una familia existente.
2. Ejecutá `npm run ig:new -- ...`.
3. Editá únicamente contenido y modificadores previstos.
4. Prepará caption, hashtags y alt text.
5. Revisá con preview (no export final).
6. Pedí aprobación explícita y detenete.
7. Solo después del OK, exportá y actualizá la documentación.

## Efemérides médicas

Usá siempre el esquema de 3 roles: **hook → datos → CTA**.

- Slide 1: fecha + nombre del día + contexto + “Deslizá…”.
- Slide 2: 3–4 `fact-card` con datos verificables.
- Slide 3: CTA médico suave (especialidad según el tema) + tarjeta `.contact-card` con WhatsApp `11 2457-3240` + footer con dirección y web.

El layout `cta-turno` (promo de agenda) es solo para turnos; en efemérides el número va en la tarjeta de contacto del cierre y también en el caption.

No uses Stitch salvo que el usuario apruebe crear una familia visual nueva mediante el Template Lab descrito en el workflow.

## Lecciones duras (no repetir)

### Preview vs export

- Durante el refinamiento: regenerá **solo previews** de las slides tocadas (Puppeteer → `ig_posts/previews/`).
- `npm run ig:export` solo tras OK explícito. Escribe `exports/` + `previews/` y puede recorrer todo el catálogo.
- `exports/*.png` y `previews/*.png` están en `.gitignore`.

### Instrumentos y marcas médicas

- No inventes con IA un endoscopio, equipo o logo de marca (Olympus, OMS, etc.) “de memoria”.
- Si el usuario pide un instrumento concreto: buscá foto real de referencia o pedile el archivo. Si no hay foto usable, preferí **sin imagen** antes que un render falso.
- Emblemas institucionales (OMS): solo como cita chica de atribución; no sugerir endorsement.

### Diagramas con labels (PIL)

- Preferí base limpia sin texto + overlay PIL (coords fijas) frente a regenerar el dibujo entero.
- Si pedís “solo mové X”: no regeneres el resto. Guardá coords tip/label en el script o comentario.
- Recuadro blanco de labels: solo si el usuario lo pide; a menudo mejor texto transparente.

### Personajes

- Nunca sobrescribas una variante. Guardá versiones (`estomago_medico.png`, `estomago_sin_ropa.png`, `estomago_sin_extremidades.png`) y cambiá solo el `src` en el HTML.

### Reordenar / sacar slides

1. Actualizá HTML y numeración.
2. Actualizá `ig_posts/export.js` y `ig_posts/mockup.html`.
3. Piezas descartadas → `ig_posts/_archivados/` (no borrar si pueden servir).
4. Renumerá sin huecos cuando el usuario lo pida (ej. s7 → s6).

### Hook de marca (feed)

Tamaños habituales del chip/título/bajada (no achicar “por compactar” sin pedido):

- `.hook-tag` ~22px
- título Playfair ~48px
- bajada ~28px

### Git

- Contenido IG: branch `instagram`.
- Commit/push solo si el usuario lo pide.
- No subas refs temporales ni renders descartados salvo que lo pida.
