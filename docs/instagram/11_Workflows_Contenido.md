# 11. Workflow de Contenido Instagram

Fuente única de verdad para crear posts, carruseles, historias, reels y efemérides de GastroCaseros desde Cursor, Antigravity u otro agente.

## Inicio rápido

```text
Iniciemos el Workflow de POST.
Tema:
Texto base:
Objetivo: educar / generar turnos / institucional
Formato: imagen única / carrusel de N slides
Familia: opcional
```

Para historias, reemplazar `POST` por `HISTORIA` e indicar la interacción: ninguna, ubicación, enlace o preguntas.

## Familias disponibles

| Tipo | Familia | Usar para |
|---|---|---|
| Feed | `hook` | Apertura de carrusel o mensaje corto |
| Feed | `edu` | Explicación, lista o dato médico |
| Feed | `cta-turno` | Turnos y promoción de estudios |
| Story | `story-info` | Información breve |
| Story | `story-cta` | Turnos o enlace a WhatsApp |
| Story | `story-sticker` | Ubicación, preguntas o enlace nativo |
| Efeméride | `ef-medica` | Concientización y educación |
| Efeméride | `ef-patriotica` | Saludo sobrio e institucional |

No crear una familia nueva si una existente puede resolver la pieza cambiando solamente el contenido.

## Fase 1: borrador y validación

1. Leer el pedido y, solo si hace falta, consultar:
   - Voz y marca: [01_Estrategia_y_Marca.md](01_Estrategia_y_Marca.md)
   - Estado: [07_Status_Publicaciones.md](07_Status_Publicaciones.md)
   - Captions previos: [08_Archivo_de_Captions.md](08_Archivo_de_Captions.md)
2. Elegir la familia más cercana.
3. Crear el scaffold:

```bash
npm run ig:new -- --type feed --family edu --name post_tema_s1
npm run ig:new -- --type story --family story-cta --name story_tema
npm run ig:new -- --type efemeride --family ef-medica --date 08_17 --slides 3
```

4. Reemplazar los placeholders del HTML. No reescribir sidebar, logo, footer ni estilos compartidos.
5. Redactar caption, 5–8 hashtags (incluido `#Caseros`) y alt text.
6. Revisar `ig_posts/mockup.html`.
7. Detenerse y preguntar: **“¿Aprobás este borrador para pasar a la exportación final?”**

No exportar ni archivar el caption antes de la aprobación.

## Fase 2: refinamiento

Aplicar únicamente los ajustes solicitados. Priorizar cambios de copy o una familia existente. No rediseñar la pieza durante esta fase.

## Fase 3: exportación y cierre

Después del OK:

1. Feed/efeméride: `npm run ig:export`.
2. Historia/reel: `npm run ig:video`.
3. Actualizar [08_Archivo_de_Captions.md](08_Archivo_de_Captions.md) con caption, hashtags y alt text.
4. Actualizar [07_Status_Publicaciones.md](07_Status_Publicaciones.md).
5. Para efemérides, actualizar también [10_Captions_Efemerides.md](10_Captions_Efemerides.md) y [09_Calendario_Efemerides.md](09_Calendario_Efemerides.md).
6. Informar los archivos generados en `ig_posts/exports/` o `ig_posts/exports_video/`.

## Reglas de diseño

- Usar `styles.css` para feed y `stories.css` para historias.
- Paleta: Navy `#112233`, Verde `#4a7d4a`, Verde suave `#a8c8a0`, Crema `#f4f1eb`.
- Tipografías: Playfair Display para títulos y Outfit para cuerpo.
- Mantener logo, footer, márgenes y dimensiones de la plantilla.
- Máximo recomendado: cinco palabras por línea.
- Si un patrón visual se repite en dos piezas, promoverlo a CSS compartido.
- Contenido médico: usar fuentes confiables y requerir revisión final de la Dra. Erika Pest.

## Efemérides

- Usar 2–3 slides.
- Archivos: `efemeride_MM_DD_sN.html`.
- Patrias: tono sobrio, sin vínculo médico forzado, con `escarapela-mini`.
- Médicas: seguir el esquema de 3 roles abajo.
- No generar imágenes con IA por defecto. Si aportarían valor, dejar `<!-- SUGERENCIA DE IMAGEN: ... -->` y registrarlo en el caption.

### Esquema efeméride médica (3 slides)

`ig:new --family ef-medica` genera automáticamente estos roles:

| Slide | Rol | Plantilla | Contenido |
|---|---|---|---|
| 1 | Hook | `efemeride-medica-hook.html` | Fecha + nombre del día (palabra clave en verde) + pregunta/contexto + `highlight-box` + footer “Deslizá…” |
| 2 | Datos | `efemeride-medica-facts.html` | 3–4 `fact-card` con datos verificables + footer “Deslizá…” |
| 3 | CTA | `efemeride-medica-cta.html` | Mensaje de acción + CTA médico suave + tarjeta “¿Dudas? Escribinos” + footer de marca |

### Cómo mostrar el CTA de GastroCaseros

**En la imagen (slide de cierre):**

1. CTA médico suave con la especialidad correcta al tema (ej. hepatólogo/a en hepatitis; gastroenterólogo/a en digestivo general).
2. Tarjeta de contacto grande: “¿Dudas? Escribinos por WhatsApp” + número `11 2457-3240` (clase `.contact-card`).
3. Footer de marca (obligatorio en el cierre):
   - `📍 Justo José de Urquiza 4530, Caseros`
   - `🌐 gastrocaseros.com.ar`

**En el caption (además de la imagen):**

```text
👉 Turnos y consultas: Link en nuestra biografía.
📲 WhatsApp: 11 2457-3240
📍 Justo José de Urquiza 4530, Caseros
🌐 gastrocaseros.com.ar
```

No usar el layout `cta-turno` (badge de día + número como promo de agenda) en efemérides: ese formato es solo para promos de turnos.

## Stitch: Template Lab

Stitch **no forma parte del flujo diario**. Usarlo únicamente cuando:

1. ninguna familia existente resuelve una necesidad real, o
2. se quiere explorar variantes para consolidar una nueva familia reutilizable.

En ese caso:

1. Enviar a Stitch la paleta, dimensiones y un HTML de referencia.
2. Explorar variantes, sin incorporar directamente el HTML generado.
3. Destilar la opción aprobada a clases de `styles.css`/`stories.css` y una plantilla.
4. Congelar la familia y volver al flujo `ig:new`.

No usar Stitch para cambiar colores, tipografías o reinventar una pieza que ya corresponde a una familia.

## Checklist previo al cierre

- [ ] No quedan placeholders `{{...}}`.
- [ ] No hay overflow ni texto ilegible.
- [ ] Logo, footer y CTA están presentes.
- [ ] Archivo registrado por `ig:new` en mockup y exportadores.
- [ ] Caption, hashtags y alt text listos.
- [ ] Aprobación explícita obtenida.
