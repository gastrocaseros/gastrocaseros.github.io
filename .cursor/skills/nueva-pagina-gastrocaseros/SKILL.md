---
name: nueva-pagina-gastrocaseros
description: >-
  Crear o ampliar landing pages y subpáginas de estudios en gastrocaseros.com.ar
  (HTML estático). Usar al agregar una página de test/servicio, clonar pylori/SIBO,
  actualizar home/sitemap/build, SEO local Caseros, cross-links y WhatsApp trackWA.
---

# Nueva landing page — GastroCaseros

Sitio estático: HTML en la raíz, estilos en `css/style.css`, deploy vía `npm run build` → `dist/` (GitHub Pages). Dominio canónico: **https://gastrocaseros.com.ar**.

## Plantillas existentes

| Tipo | Archivo | Cuándo usar |
|------|---------|-------------|
| Estudio único (UBT) | `test-aire-espirado-helicobacter-pylori.html` | Un procedimiento, preparación específica |
| Multi-condición + pasos | `test-sibo-intolerancias.html` | Varios diagnósticos, grid de pasos, más secciones |
| Hub | `index.html` | Solo enlaces; no clonar como landing |

**Workflow:** copiar la plantilla más parecida → renombrar → adaptar contenido → integrar (abajo).

## A. Antes de escribir

1. **Slug:** `test-<tema>.html` en kebab-case, en la raíz del repo.
2. **Anclas de nav** propias (ej. `#como-se-realiza`, `#preparacion`) y reflejarlas en `.nav-links`.
3. **Contenido clínico** acordado (preparación, duración, contraindicaciones).

## B. `<head>` obligatorio

- `lang="es"`, viewport, charset.
- **Title:** `{Servicio} en Caseros, Tres de Febrero | … | GastroCaseros`
- **meta description** y **keywords:** término médico + geo (Caseros, Tres de Febrero, zona oeste GBA).
- **Open Graph:** `og:url` = `https://gastrocaseros.com.ar/<archivo>`, título/descripción alineados al title; **`og:image`** = `https://gastrocaseros.com.ar/og-image.jpg` (URL absoluta); incluir `og:locale` (`es_AR`) y `og:site_name` (`GastroCaseros`).
- **`link rel="canonical"`** con la URL canónica de la página (ver [reference.md](reference.md)).
- **JSON-LD** `@graph`:
  - `MedicalWebPage` con `@id` y `url` de esta página (`…#webpage`).
  - `Physician` (`#physician`) y `MedicalClinic` (`#clinic`) con los **mismos `@id`** que en `index.html`.
  - **NAP y datos locales solo en `MedicalClinic`:** dirección, geo, teléfono, `openingHoursSpecification`, `areaServed`, `availableService` (ajustar al estudio en landings).
  - **`Physician` reducido:** name, url, image, `medicalSpecialty`, `sameAs`, `employee` (`Person` `#doctor`), `worksFor` → `#clinic` — sin duplicar NAP ni horarios.
  - `Person` doctor: `#doctor` donde corresponda.
  - `sameAs`: solo Instagram `https://www.instagram.com/gastrocaseros/` (no Facebook/TikTok).
  - Ajustar `MedicalWebPage.name` / `description` y `availableService.name` al estudio.
- **CSS:** `link rel="stylesheet" href="css/style.css?v=YYYYMMDD"`.
- **Analytics:** gtag `G-HDGFHLL04L` + función `trackWA(label)` (copiar de subpágina existente).
- Favicon: `favicon-32.png`; apple-touch: `apple-touch-icon.png`.

Detalle de entidades y URLs: ver [reference.md](reference.md).

## C. `<body>` — shell de subpágina

Incluir en este orden (patrón de pylori/SIBO):

1. `.scroll-progress#scroll-bar`
2. `.floating-wa` → WhatsApp con mensaje del estudio + `trackWA('flotante_<slug_corto>')`
3. `nav.top-nav`: brand → `index.html`; links a `index.html#autodiagnostico`, `index.html#servicios` + anclas locales; CTA nav con `trackWA('nav_<slug>')`; hamburger `toggleMenu()`
4. **Hero:** badge tipo “Zona Oeste GBA”, H1 con geo, CTAs (WhatsApp + ancla procedimiento)
5. Secciones de contenido: qué es → qué detecta / indicaciones → procedimiento (`.service-card.reveal`) → preparación (`.prep-card`, `.prep-help` con duda prep)
6. **Estudio relacionado:** tarjeta con enlace a **cada** otra landing de test existente
7. Bloque navy **Modalidad de Turnos** + CTA WhatsApp
8. **Footer:** institucional, solo enlace Instagram
9. Scripts inline: `toggleMenu`, `closeMenu`, scroll progress, `IntersectionObserver` para `.reveal` — **no** extraer a bundle (el build no minifica JS inline).

Estilos puntuales: preferir clases en `css/style.css`; si hace falta, `<style>` mínimo en la página (como `.sibo-steps` en SIBO).

## D. Integración en `index.html`

Buscar y actualizar según relevancia del servicio:

- `#servicios`: tarjeta con “Más Info →” a la nueva URL y “Turnos WA →” con mensaje específico + `trackWA('servicio_<slug>')`.
- Bloques destacados de estudios / preparación: `service-link` o `prep-help` hacia la nueva página.
- `title` / `description` / `keywords` del home **solo** si el servicio es central (como SIBO/IMO).

## E. Cross-links entre landings

- En **cada** subpágina hermana, sección “Estudio relacionado” con `aria-label` descriptivo.
- Mantener enlaces **bidireccionales** entre todas las landings de tests.

## F. Indexación y build

1. **`sitemap.xml`:** nueva `<url>` con `https://gastrocaseros.com.ar/<archivo>`, `<lastmod>` fecha actual (YYYY-MM-DD), `priority` 0.8, `changefreq` monthly.
2. **`build-local.sh`:** minifica **todos** los `*.html` de la raíz; no hace falta editar el script por página nueva.
3. Ejecutar `npm run build` y confirmar `dist/<archivo>.html` y `style.min.css?v=…` en ese HTML.
4. Revisar responsive: menú hamburguesa, márgenes en micro pantallas (`css/style.css` ~215–240).

## G. Copy y tono

- Voz **institucional** (consultorio / GastroCaseros), no primera persona de la médica como marca.
- Geo: Caseros, Tres de Febrero, zona oeste del GBA en hero/SEO cuando aplique.
- **SIBO e IMO** siempre mencionados juntos cuando el tema sea sobrecrecimiento / aire espirado digestivo.
- CTAs suaves (“Agendar”, “Consultar”, “Más Info”); redacción médica revisada (ayuno, “sin endoscopía”, erradicación, etc.).
- WhatsApp: número `5491124573240`, textos **URL-encoded** en `wa.me`.
- `trackWA`: labels únicos por página y ubicación; convención `{contexto}_{slug}` — ver [reference.md](reference.md).

## Checklist final (no cerrar tarea sin esto)

- [ ] Nuevo `*.html` en raíz, contenido y SEO local
- [ ] Enlaces en `index.html` (servicios / prep según corresponda)
- [ ] Cross-links en otras landings de test
- [ ] Entrada en `sitemap.xml`
- [ ] `npm run build` OK; los HTML de raíz existen en `dist/`
- [ ] Labels `trackWA` nuevos documentados en mente o en reference si se repiten patrones
