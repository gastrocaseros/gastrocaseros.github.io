# GastroCaseros — instrucciones para agentes

## Contenido de Instagram

Cuando el usuario pida un post, carrusel, historia, reel o efeméride:

1. Aplicá el skill `ig-content` (incluye `reference.md` con lecciones y assets).
2. Seguí la fuente única: `docs/instagram/11_Workflows_Contenido.md`.
3. Creá la pieza con `npm run ig:new -- ...`; no escribas el boilerplate desde cero.
4. Usá las familias y clases de `ig_posts/styles.css` / `ig_posts/stories.css`.
5. No cambies paleta, tipografías, logo, footer ni dimensiones.
6. En el refinamiento: regenerá solo **previews** de las slides tocadas. No corras `ig:export` todavía.
7. Detenete antes de exportar y pedí aprobación explícita.
8. Después del OK, exportá y sincronizá captions/status según el workflow.
9. Commits/push de IG van al branch `instagram` (solo si el usuario lo pide).

### Efemérides médicas

Esquema fijo: **hook → datos (fact-cards) → CTA**.
En el cierre: CTA médico suave (especialidad según el tema) + tarjeta WhatsApp con `11 2457-3240` + footer con dirección y web.

No uses Stitch en el flujo diario. Solo puede usarse como Template Lab para una familia visual genuinamente nueva y aprobada por el usuario.

### Imágenes médicas e instrumentos

- No inventes con IA equipos o marcas (endoscopio Olympus, etc.). Foto real o pedile el archivo al usuario; si no hay, preferí sin imagen.
- No sobrescribas variantes de personajes: guardá archivos nuevos y cambiá el `src`.
- Al sacar/renumerar slides: actualizá `export.js` + `mockup.html`; archivá en `ig_posts/_archivados/`.

## Seguridad editorial

- Los contenidos médicos requieren fuentes confiables y revisión final de la Dra. Erika Pest.
- No presentes información general como diagnóstico individual.
- No generes imágenes de IA para efemérides por defecto.
- No sobrescribas cambios existentes del usuario.
