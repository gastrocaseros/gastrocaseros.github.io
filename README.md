# Consultorio Gastroenterológico Caseros — GastroCaseros

Sitio web institucional estático, optimizado para SEO y deploy en **https://gastrocaseros.com.ar** (GitHub Pages + dominio propio).

## Estructura del proyecto

| Ruta | Descripción |
|------|-------------|
| `index.html` | Home: servicios, autodiagnóstico, preparación, ubicación |
| `test-aire-espirado-helicobacter-pylori.html` | Landing test H. pylori (UBT) |
| `test-sibo-intolerancias.html` | Landing SIBO, IMO e intolerancias |
| `css/style.css` | Estilos (sistema visual Stitch) |
| `img/` | Iconos SVG e ilustraciones |
| `logo.png` | Logotipo |
| `robots.txt` / `sitemap.xml` | Indexación |
| `build-local.sh` | Build canónico (local y CI) |
| `dist/` | **Salida de producción** (generada; no editar a mano) |

Los cambios se hacen en los archivos fuente de la raíz. Lo que ve el sitio publicado es **`dist/`** después de `npm run build`.

## Build y preview local

```bash
nvm use    # si usás .nvmrc
npm ci
npm run build
npm run serve   # sirve dist/
```

El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) ejecuta el mismo `npm run build` en cada push a `main`. El script valida en `dist/` que cada HTML tenga `rel="canonical"` y `og:image` absoluto.

## Cambios frecuentes

### Textos, horarios, WhatsApp

Editar el HTML correspondiente. WhatsApp: buscar `wa.me/5491124573240` (formato internacional sin `+`).

### Iconos

Reemplazar archivos en `img/` (preferir SVG).

## Nueva página de servicio / test

Proceso completo para el agente y el equipo:

**[`.cursor/skills/nueva-pagina-gastrocaseros/SKILL.md`](.cursor/skills/nueva-pagina-gastrocaseros/SKILL.md)**

Checklist resumido:

1. Definir slug (`test-<tema>.html`) y clonar plantilla (pylori o SIBO).
2. Adaptar `<head>` (title, description, OG, JSON-LD `MedicalWebPage` + entidades compartidas).
3. Completar secciones del body (hero, procedimiento, preparación, turnos).
4. Enlazar desde `index.html` (servicios / preparación).
5. Cross-links con las otras landings de test.
6. Agregar URL en `sitemap.xml` (`lastmod`, priority 0.8).
7. SEO local: Caseros, Tres de Febrero, zona oeste del GBA; tono institucional.
8. `npm run build` y revisar en `npm run serve` (nav móvil, WhatsApp, enlaces).

Referencia de URLs, schema y labels Analytics: [`.cursor/skills/nueva-pagina-gastrocaseros/reference.md`](.cursor/skills/nueva-pagina-gastrocaseros/reference.md).

## SEO y rendimiento

- URL canónica por página: `<link rel="canonical" href="https://gastrocaseros.com.ar/...">`.
- Open Graph: `og:image` con URL absoluta `https://gastrocaseros.com.ar/logo.png`.
- Al editar HTML, actualizar `<lastmod>` de esa URL en `sitemap.xml`.
- Imágenes con `loading="lazy"` donde corresponda.
- HTML minificado en build **sin** minificar JS inline (menú, quiz, animaciones).

---

© 2026 GastroCaseros
