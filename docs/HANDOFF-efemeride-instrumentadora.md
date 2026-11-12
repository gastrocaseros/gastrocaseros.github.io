# Handoff — efeméride Instrumentadora Quirúrgica (IG)

## Tema / alcance
Carrusel/post Instagram GastroCaseros por el Día de la Instrumentadora Quirúrgica (19 de septiembre); `gastrocaseros-practicas-tae` = N/A (no se habló en este chat).

## Estado
En curso (borrador visual listo; **sin aprobación explícita final ni `ig:export`**). Branch: `instagram` (tracking `origin/instagram`). PR: N/A.

## Decisiones
- Familia `ef-medica` vía `npm run ig:new` (fecha `09_19`), no Stitch ni familia nueva.
- Fecha: 19 de septiembre (AADI / Bosch Arana); tono de reconocimiento, no diagnóstico.
- Personaje: `intestino_contento.png` con clase `.character-corner`; sin ilustración nueva ni IA (no vestir al personaje de instrumentadora).
- Evolución de formato: 3 slides → 2 slides → **1 sola imagen** de “¡Feliz día!” **sin CTA** (sin WhatsApp en imagen, sin “Deslizá”).
- Tipografía: no achicar fuentes; menos copy / menos slides.
- Export y docs de captions/status: solo después de OK explícito (aún pendiente).
- Preview: `npm run ig:preview` debe correr **fuera del sandbox** de Cursor; si no, `ERR_CONNECTION_REFUSED` en `:3000`.

## Cambios clave
- `ig_posts/efemeride_09_19_s1.html` (única pieza; saludo + personaje)
- `ig_posts/mockup.html` (nav/post `ef_09_19_s1`; s2/s3 desregistrados)
- `ig_posts/export.js` (solo `efemeride_09_19_s1`)
- Eliminados en este chat: `efemeride_09_19_s2.html`, `efemeride_09_19_s3.html`
- Preview local de revisión: `ig_posts/previews/efemeride_09_19_s1.png` (no export final)
- Captions/status/calendario (`08`/`07`/`10`/`09`): **no actualizados**

## Pendiente de código
- [ ] Confirmación de Oscar del borrador de 1 imagen
- [ ] `npm run ig:export` tras OK
- [ ] Actualizar `docs/instagram/10_Captions_Efemerides.md`, `07_Status_Publicaciones.md`, `09_Calendario_Efemerides.md` (y caption en mockup)
- [ ] Revisión editorial médica Dra. Erika Pest (contenido institucional)
- [ ] Commit / push / PR: N/A (no pedido en este chat)

## Validación humana (Oscar)
1. En repo `gastrocaseros.github.io`, branch `instagram`.
2. `npm run ig:preview` (host real, no sandbox) → abrir `http://localhost:3000/mockup.html` → ítem `09 19`.
3. Alternativa: abrir `ig_posts/efemeride_09_19_s1.html` / preview `ig_posts/previews/efemeride_09_19_s1.png`.
4. Verificar: saludo “¡Feliz día!”, personaje, **sin** CTA WhatsApp ni “Deslizá”.
5. Si OK: decir aprobación explícita → agente corre `npm run ig:export` y documenta caption.

## Riesgos / no hacer
- No exportar ni archivar caption sin OK.
- No generar imagen IA del personaje “vestido” de instrumentadora por defecto.
- No reintroducir s2/s3 ni layout `cta-turno` en esta efeméride.
- No commitear/pushear salvo pedido explícito.
- `gastrocaseros-practicas-tae`: no mergear / cutover / Sheets — N/A en este chat.

## Contratos
- Sheets / OAuth / sibling sync / PHI: **N/A** (este chat fue solo contenido IG en `ig_posts/`).
- Asumido: WhatsApp de marca `11 2457-3240` en plantillas de CTA (removido de la pieza final de 1 imagen).
- Asumido: mockup/export se registran con `ig:new`; s2/s3 se limpiaron a mano al simplificar.

---

## Resumen (copiar a otro Project)
1. Chat = post IG Día Instrumentadora Quirúrgica (19/09), no practicas-tae.
2. Quedó 1 slide: `ig_posts/efemeride_09_19_s1.html` + personaje `intestino_contento.png`, sin CTA.
3. Branch `instagram`; mockup/export actualizados; s2/s3 borrados.
4. Falta: OK Oscar → `npm run ig:export` + docs captions/status/calendario.
5. Preview: `npm run ig:preview` fuera de sandbox → `localhost:3000/mockup.html`.
