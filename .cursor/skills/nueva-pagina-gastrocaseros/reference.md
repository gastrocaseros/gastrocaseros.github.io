# Referencia — URLs, schema y trackWA

## URLs canónicas (sitemap)

| Página | URL |
|--------|-----|
| Home | https://gastrocaseros.com.ar/ |
| H. pylori (UBT) | https://gastrocaseros.com.ar/test-aire-espirado-helicobacter-pylori.html |
| SIBO / IMO / intolerancias | https://gastrocaseros.com.ar/test-sibo-intolerancias.html |

## IDs JSON-LD compartidos (no cambiar entre páginas)

| @id | Tipo |
|-----|------|
| `https://gastrocaseros.com.ar/#physician` | Physician |
| `https://gastrocaseros.com.ar/#clinic` | MedicalClinic |
| `https://gastrocaseros.com.ar/#doctor` | Person (Dra. Erika Pest) |

Cada subpágina agrega `MedicalWebPage` con `@id` = `{url-página}#webpage`.

## Datos fijos del consultorio (schema / footer)

- Dirección: Justo José de Urquiza 4530, Caseros, Buenos Aires 1678, AR
- Tel: +54 9 11 2457-3240
- Horario: Jueves 09:00–12:00 (`openingHours`: `Th 09:00-12:00`)
- Geo: -34.6089, -58.5671
- areaServed: Caseros, Tres de Febrero, San Martín, Morón, Hurlingham, Ituzaingó
- Instagram: https://www.instagram.com/gastrocaseros/

## trackWA — convención para páginas nuevas

Prefijo sugerido para una landing `test-foo-bar.html`: slug corto `foobar` o `foo`.

| Ubicación | Label ejemplo |
|-----------|----------------|
| Botón flotante | `flotante_<slug>` |
| Nav CTA | `nav_<slug>` |
| Hero | `hero_<slug>` |
| Duda preparación | `duda_prep_<slug>` |
| Bloque turnos final | `solicitar_turno_<slug>` |
| Home → servicio | `servicio_<slug>` |
| Home → prep | `prep_<slug>` |

### Labels existentes (no reutilizar)

**index.html:** `flotante`, `nav`, `hero`, `mini_test`, `servicio_consulta`, `servicio_sibo`, `servicio_pylori`, `prep_sibo`, `prep_pylori`, `cobertura`, `ubicacion`

**test-aire-espirado-helicobacter-pylori.html:** `flotante_pylori`, `nav_pylori`, `hero_pylori`, `duda_prep_pylori`, `solicitar_turno_pylori`

**test-sibo-intolerancias.html:** `flotante_sibo`, `nav_sibo`, `hero_sibo`, `duda_prep_sibo`, `solicitar_turno_sibo`

## Build

- Fuente: archivos en raíz del repo.
- Producción: `dist/` generado por `npm run build` (`build-local.sh`).
- El script minifica todos `*.html` de la raíz y reemplaza `css/style.css?v=*` por `css/style.min.css?v=<hash>` en `dist/*.html`.
- No usar `--minify-js` en HTML (scripts inline: menú, reveal, quiz en home).
