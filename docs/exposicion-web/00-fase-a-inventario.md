# Fase A — Inventario y mapa de intención

Fecha: 2026-11-12  
Branches: workspace en **`main`** (sitio deploy). Docs IG leídos vía `git show instagram:...` (no están en checkout de `main`).

## Checklist acceso Google

| Herramienta | URL | ¿Acceso OK? | Notas (capturas 2026-11-12) |
|-------------|-----|-------------|------------------------------|
| GSC web | `sc-domain:gastrocaseros.com.ar` | **OK** | ~232 clics (~3 meses); **3 indexadas / 3 no indexadas**. Falta export Queries/Pages. |
| GSC Instagram | `@gastrocaseros` (creator) | OK acceso, **sin datos** | “Check back within 48 hours”. Ignorar por ahora. |
| GBP | Ficha Consultorio… GastroCaseros | **OK** | 533 interacciones; **5.0 / 7 reseñas** (2 nuevas); NAP OK; panel dice abre **8 AM Thu** (otro horario a unificar). |
| GA4 | propiedad `gastrocaseros.com.ar` | **OK** | 18 usuarios activos / 7d; **GSC no linkeado** a GA4 (“Link Account”). |

**Siguiente:** exports GSC Performance (Queries + Pages) + Indexing “Not indexed”; GBP servicios/horarios/reseñas; GA4 páginas + eventos WA.

## Inventario on-site (`main`)

| URL | Rol | Señales SEO/AEO |
|-----|-----|-----------------|
| https://gastrocaseros.com.ar/ | Hub | Title geo + SIBO/IMO/H.pylori; FAQ+FAQPage; schema Clinic+Physician; NAP; horario jueves 09–12 |
| …/test-sibo-intolerancias.html | Landing Héroe candidata | H2/CH4 en body; title SIBO/IMO Caseros; MedicalWebPage; sin FAQPage |
| …/test-aire-espirado-helicobacter-pylori.html | Landing soporte | UBT; geo; MedicalWebPage; sin FAQPage |
| privacidad.html | noindex | En sitemap (inconsistencia) |

**Analytics:** GA4 `G-HDGFHLL04L` + `trackWA` en páginas indexables.  
**sameAs:** solo Instagram `@gastrocaseros`.  
**IG (branch `instagram`):** bio ya apunta SIBO · H. Pylori · Test de Aire; misión “referente local en diagnósticos no invasivos”.

## NAP y horario (inconsistencia a validar)

| Fuente | Horario jueves |
|--------|----------------|
| Web / schema | 09:00–12:00 |
| Índices Maps/Exa (público) | 09:00–13:00 |

Dirección: Justo José de Urquiza 4530, Caseros (algunos listados dicen “Avenida General Urquiza 4530” — unificar).

## Mapa de ~30 queries (español AR, zona oeste)

### A. Local marca / especialidad
1. gastroenterólogo Caseros  
2. gastroenterología Caseros  
3. gastroenterólogo Tres de Febrero  
4. gastroenterólogo zona oeste GBA  
5. consultorio gastroenterológico Caseros  
6. Dra Erika Pest gastroenteróloga  
7. GastroCaseros  

### B. Estudio H2/CH4 (prioridad Héroe)
8. test SIBO Caseros  
9. test SIBO Tres de Febrero  
10. test SIBO zona oeste  
11. test aire espirado SIBO Caseros  
12. test aire espirado hidrógeno metano Caseros  
13. test IMO Caseros  
14. test sobrecrecimiento bacteriano Caseros  
15. dónde hacer test SIBO cerca de Caseros  
16. test SIBO San Martín / Morón / Hurlingham / Ituzaingó (variantes)

### C. Helicobacter / otros
17. test helicobacter pylori aire espirado Caseros  
18. test urea aliento Caseros  
19. Helicobacter pylori Caseros gastroenterólogo  

### D. Síntoma → servicio / tipo IA
20. hinchazón gases test aire espirado Caseros  
21. distensión abdominal SIBO cerca de mí Tres de Febrero  
22. preparación test SIBO  
23. preparación test helicobacter aire espirado  
24. test intolerancia lactosa Caseros  
25. test intolerancia fructosa Caseros  
26. gastroenterólogo particular Caseros  
27. test aire espirado sin endoscopia Caseros  
28. dónde medir hidrógeno y metano aire espirado zona oeste  
29. consulta gastroenterología WhatsApp Caseros  
30. SIBO o IMO qué test hacer Caseros  

## Hallazgos externos preliminares (sin GSC)

- En búsquedas **“test SIBO + Caseros”** dominan centros de **CABA / otros** (Caballito, Otamendi, CIG, Cibic, San Isidro). **GastroCaseros no aparece en el top orgánico** de esos resultados vía WebSearch.
- En **“gastroenterólogo Caseros”** la entidad aparece en índices de lugares (Maps/Exa) con website; Doctoralia lista especialistas “cerca” (Hurlingham, CABA) — **Dra. Pest / GastroCaseros no figura en el listado Doctoralia muestreado**.
- Marca aparece en Crontu (Erika Pest, gastroenterología, Urquiza 4530).
- Sitio **live** responde bien (contenido H2/CH4, FAQ, NAP).

## Borrador ventajas comparativas (a validar B–D + clínica)

| Candidato | ¿Citable? | ¿Diferencial local probable? |
|-----------|-----------|------------------------------|
| Test aire espirado H2 + CH4 (SIBO/IMO) en Caseros | Sí | Alto — pocos locales con landings propias |
| Zona oeste sin ir a CABA | Sí | Alto para intención local |
| Consultorio enfocado gastro + estudios no invasivos | Sí | Medio-alto vs policlínicas |
| Preparación clara en web/PDF | Sí | Medio |
| Turnos WhatsApp | Sí | Bajo (común) |
| UBA / +20 años (bio IG) | Parcial en web | Medio — falta matrícula visible |
| Horario amplio | No | Bajo — 1 día/semana; no empujar como “accesibilidad horaria” |

## Prioridad sondeo Fase B

Subset (~18): queries 1, 2, 3, 7, 8, 9, 11, 12, 13, 15, 17, 20, 22, 24, 27, 28 + “gastroenterólogo Caseros” Maps.
