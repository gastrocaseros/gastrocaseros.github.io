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

## Ejecución

1. Elegí una familia existente.
2. Ejecutá `npm run ig:new -- ...`.
3. Editá únicamente contenido y modificadores previstos.
4. Prepará caption, hashtags y alt text.
5. Revisá el mockup.
6. Pedí aprobación explícita y detenete.
7. Solo después del OK, exportá y actualizá la documentación.

## Efemérides médicas

Usá siempre el esquema de 3 roles: **hook → datos → CTA**.

- Slide 1: fecha + nombre del día + contexto + “Deslizá…”.
- Slide 2: 3–4 `fact-card` con datos verificables.
- Slide 3: CTA médico suave (especialidad según el tema) + tarjeta `.contact-card` con WhatsApp `11 2457-3240` + footer con dirección y web.

El layout `cta-turno` (promo de agenda) es solo para turnos; en efemérides el número va en la tarjeta de contacto del cierre y también en el caption.

No uses Stitch salvo que el usuario apruebe crear una familia visual nueva mediante el Template Lab descrito en el workflow.
