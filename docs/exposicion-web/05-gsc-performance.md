# GSC Performance — gastrocaseros.com.ar

Fuente: exports 2026-11-12 · filtro **Web · Last 3 months**  
CSV en [`gsc-exports/`](gsc-exports/).

## Totales útiles

| Métrica | Valor |
|---------|-------|
| Clics (overview previo) | ~232 |
| Impresiones AR | 3 626 (país Argentina) |
| Dispositivo | **Mobile 185** clics vs Desktop 47 |
| Páginas con tráfico | Home, SIBO, H. pylori, `#servicios` |

## Páginas (todo el tráfico)

| Página | Clics | Impresiones | CTR | Pos. media |
|--------|------:|------------:|----:|-----------:|
| `/` | 152 | 2 920 | 5.2% | 3.8 |
| `test-sibo-intolerancias.html` | **64** | 839 | **7.6%** | 5.6 |
| `test-aire-espirado-helicobacter-pylori.html` | 13 | 142 | 9.2% | **12.4** |
| `/#servicios` | 6 | 395 | 1.5% | 2.7 |

**Lectura:** el Héroe SIBO ya convierte mejor que el home en CTR. H. pylori tiene pocas impresiones y posición floja (~12).

## Queries con clics (prioridad)

| Query | Clics | Imp. | CTR | Pos. |
|-------|------:|-----:|----:|-----:|
| test de sibo zona oeste | **9** | 70 | 12.9% | 4.0 |
| gastroenterologo | 5 | **299** | 1.7% | 3.5 |
| gastroenterologo caseros | 3 | 14 | 21.4% | **1.6** |
| gastroenterologo ioma | 2 | 36 | 5.6% | 2.1 |
| gastroenterologo ioma zona oeste | 2 | 9 | 22.2% | 4.4 |
| gastroenterólogo particular | 2 | 8 | 25% | 13.3 |
| test sibo zona oeste | 1 | 29 | 3.5% | 4.7 |
| test de aire espirado zona oeste | 1 | 8 | 12.5% | 3.3 |
| test aire espirado helicobacter… | 1 | 5–6 | ~17–20% | **~31** |

## Oportunidades (impresiones altas, 0 clics)

| Query | Imp. | Pos. | Acción |
|-------|-----:|-----:|--------|
| **imo caseros** | **115** | 10.6 | Título/snippet con IMO + Caseros; mejorar CTR |
| **imo caseros turnos** | 10 | 8.2 | FAQ + CTA turnos en landing |
| gastroenterólogo (variantes) | 39+ | ~5 | Genérico: GBP/reseñas más que nueva landing |
| gastroenterólogo en san martín / san martin | 40 | 3–6 | Reforzar `areaServed` + copy “recibimos de San Martín” |
| endoscopia | 30 | 3 | **No empujar** (no es oferta del sitio Caseros) |
| test aire espirado sibo / precio | pos 85–90 | — | Competencia nacional; no priorizar precio |

## Huecos vs hipótesis Héroe

- Casi no hay queries con **“hidrógeno” / “metano”** en GSC → la gente busca **SIBO / IMO / aire espirado + zona**.  
- **“zona oeste”** convierte; **“Caseros”** en SIBO aparece menos que IMO/zona oeste.  
- H. pylori: intención existe pero **posición ~30** → soporte, no héroe.

## Indexación (Coverage export)

| Motivo | Páginas | Notas |
|--------|--------:|-------|
| Alternate page with proper canonical | 1 | Suele ser variante URL (www/http/#) — revisar en UI |
| Discovered - currently not indexed | 1 | Google la vio y no indexó |
| Crawled - currently not indexed | 1 | La rastreó y eligió no indexar |

**Falta en este ZIP:** la lista URL por URL. En GSC → Indexing → Pages → cada motivo → abrir y capturar/exportar las URLs.

## Implicaciones backlog

1. Mantener Héroe = **SIBO/IMO + zona oeste/Caseros** (datos lo confirman).  
2. Priorizar CTR de **imo caseros** (115 imp / 0 clics).  
3. No invertir en “endoscopia” ni keywords IOMA como promesa si no hay convenio claro.  
4. H. pylori: mejorar posición solo con copy/FAQ; volumen bajo.  
5. Mobile-first en cualquier cambio de snippet/title.
