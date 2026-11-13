# Informe exposición web GastroCaseros + backlog 0-costo

Fecha: 2026-11-12  
Branches: sitio = `main`; IG = `instagram`.  
GSC / GBP / GA4: **acceso OK + datos cargados** (ver `05`–`08`).

## 1. Scorecard (hoy)

| Canal | Score (1–5) | Lectura |
|-------|-------------|---------|
| Orgánico estudio+geo (SIBO/H.pylori + Caseros) | **4** | Landings y home fuertes en DDG |
| Orgánico “gastroenterólogo Caseros” | **1–2** | Doctoralia / directorios; nosotros casi invisibles |
| Local Pack / Maps | **3** | Ficha existe + website; horario inconsistente; reseñas/servicios TBD |
| Google Generative AI (GSC) | **3–4** | **729 impresiones / 3 meses**; home 413 + SIBO 355 ([`07`](07-gsc-generative-ai.md)) |
| IAs (Duck.ai live) | **1** | Prefiere AeroTest/Airtest; luego CEPEM; **niega evidencia de GastroCaseros** |
| Instagram (docs `instagram`) | **4** | Bio H₂/CH₄ OK; frase canónica va en carrusel SIBO profundo (17–21/11), no en post SEO suelto |

## 2. Mapa competitivo (zona oeste + amenaza citabilidad)

- **CEPEM Morón:** H2/CH4 + SIBO/IMO en copy; **Dra. Pest** en agenda martes; Duck.ai lo cita.  
- **Doctoralia Caseros:** gana query especialidad.  
- **AeroTest / Airtest:** ganan query “H2/CH4 cerca” en IA.  
- **Sanatorio Modelo / listados:** gastro clínica local sin landings SIBO fuertes.

## 3. Pirámide (resumen)

- **Héroe:** aire espirado H₂+CH₄ (SIBO/IMO) en Caseros / Tres de Febrero / zona oeste.  
- **Soporte:** H. pylori UBT, consulta.  
- **No amplificar:** claims genéricos, horario “accesible”, competir con CEPEM sin aclarar sede.

Frase canónica:

`Test de aire espirado de hidrógeno y metano (SIBO / IMO) en Caseros, Tres de Febrero | GastroCaseros`

## 4. Playbook citabilidad

| Superficie | Acción |
|------------|--------|
| Home title/H1 | Priorizar H2/CH4 + geo; H. pylori en segundo plano |
| Landing SIBO | FAQ + FAQPage; pregunta “dónde cerca de Caseros…”; title con “hidrógeno y metano” |
| Schema | `availableService` = nombre canónico; Physician con matrícula/`alumniOf` |
| GBP | Servicios idénticos; horario = web; fotos; link sitio; reseñas |
| IG (`instagram`) | Bio + posts series con frase canónica; highlights SIBO/IMO |
| Externos | Asegurar que Crontu/Maps digan el mismo NAP; valorar ficha Doctoralia gratis |

## 5. Backlog 0-costo

### Esta semana
1. Unificar horario jueves web ↔ Maps (09–12 vs 09–13).  
2. Entrar GSC/GBP/GA4; completar tabla de cuentas; export 90d.  
3. GBP: agregar servicios “Test aire espirado hidrógeno y metano (SIBO/IMO)” y UBT.  
4. Pedir 3–5 reseñas reales a pacientes recientes (QR recepción).  
5. IG: frase canónica **no** como post suelto — va en **Carrusel SIBO profundo** (S4/S6 + caption), ventana **17–21 nov**. Bio H₂/CH₄ ya actualizada.

### Este mes (sitio `main`)
6. ~~Title/meta/H1 home → Héroe H2/CH4~~ (hecho).  
7. ~~FAQ + FAQPage en landings~~ (hecho).  
8. ~~Sitemap sin privacidad; `availableService` home como array (SIBO/IMO + H. pylori + consulta)~~ (hecho).  
9. ~~Schema `hasMap` + enlace visible a Google Maps~~ (hecho).  
10. **E-E-A-T (bio, matrícula, hospitales): diferido** — acordar con la Dra. Pest antes de publicar.  
11. ~~Alinear rama `instagram` (merge `main` → `instagram` + bio/frase canónica)~~ (hecho).

### Trimestre
12. Re-sondeo Duck.ai / ChatGPT / Claude / Gemini / Google AI con mismas queries.  
13. Doctoralia u otro directorio gratis si aporta Local Pack (sin ads).  
14. Contenido IG mensual alineado a queries GSC reales.  
15. Evaluar 1 landing “preparación test SIBO” solo si GSC muestra volumen.

## 6. Cómo medir

| KPI | Fuente | Meta 90 días |
|-----|--------|--------------|
| Impresiones queries Héroe | GSC | ↑ vs baseline export |
| Clics landings SIBO/pylori | GSC/GA4 | ↑ |
| Eventos `whatsapp_click` | GA4 | ↑ |
| Reseñas GBP | GBP | +N orgánicas |
| Re-sondeo IA prompt A/B | Manual | GastroCaseros citado sin prompt forzado |

## 7. Acceso Google (recordatorio)

| Herramienta | URL | Probar con |
|-------------|-----|------------|
| GSC | https://search.google.com/search-console | `gastrocaseros@gmail.com` / `info@gastrocaseros.com.ar` |
| GBP | https://business.google.com | Propietario ficha Caseros |
| GA4 | https://analytics.google.com | Propiedad `G-HDGFHLL04L` |

## 8. Update GSC (2026-11-12)

Ver detalle en [`05-gsc-performance.md`](05-gsc-performance.md).

- Tráfico real confirma Héroe **SIBO/IMO + zona oeste** (top clics: `test de sibo zona oeste`).  
- **`imo caseros`**: 115 impresiones, 0 clics → oportunidad #1 de snippet/title.  
- Home 152 clics; landing SIBO 64; pylori 13 (pos ~12).  
- Mobile ~80% de clics.  
- 3 no indexadas: canonical alternate + discovered/crawled not indexed (faltan URLs exactas en UI).

## 9. Update GBP + indexación (2026-11-12)

Ver [`06-gbp-e-indexacion.md`](06-gbp-e-indexacion.md).

- Indexación “3 no indexadas” = `index.html`, `privacidad.html` (noindex), `http://` home — **sin bloquear landings**.  
- GBP: servicios **ya incluyen H₂/CH₄**; horario **jueves 8:00–12:30**; 5★/7 reseñas sin responder.  
- Posible inconsistencia resultados: reseña “24 hs” vs web “48–72 hs”.

## 10. Update GA4 (2026-11-12)

Ver [`08-ga4-engagement.md`](08-ga4-engagement.md).

- 28d: 108 users; 177 page views; **72 `whatsapp_click`** (58 users).  
- Landings SIBO/pylori con más engagement time que home.  
- GSC linkeado; Queries en GA4 puede tardar en poblarse.

## 11. Limitaciones restantes

- ChatGPT / Claude UI no sondeados a fondo (Duck.ai + GSC Gen AI sí).  
- No se implementaron cambios de sitio aún.

## Archivos de esta carpeta

- `00`–`08` fases e updates  
- `gsc-exports/` + `gsc-exports/genai/`
