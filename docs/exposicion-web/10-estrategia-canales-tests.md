# Estrategia de canales — priorizar Tests (nov 2026)

Objetivo de negocio: **más pacientes de tests** que de consulta.  
Dentro de tests: **H. pylori = ticket/plata**; **SIBO/IMO = demanda orgánica (SEO)**.  
La consulta se comunica, pero no pelea el Héroe.

Frase canónica (web / GBP / bio):

`Test de aire espirado de hidrógeno y metano (SIBO / IMO) en Caseros, Tres de Febrero | GastroCaseros`

## 1. Qué dicen los datos (no la sensación)

| Canal | Evidencia | Rol real hoy |
|-------|-----------|--------------|
| **Google orgánico (sitio)** | GSC: clics en home + landing SIBO; query top `test de sibo zona oeste`. GA4 28d: 108 users, **72 `whatsapp_click`** (~54% de users) | **Adquisición #1** de intención de test |
| **Google AI / asistentes** | GSC Gen AI ~729 impresiones/3m; GA4 ~12 users “AI Assistant” | Descubrimiento temprano; aún poco citado vs AeroTest/CEPEM |
| **GBP / Maps** | Ficha + servicios H₂/CH₄ + reseñas; Local Pack | **Confianza + “cerca mío”**; cierra quien ya busca |
| **Instagram** | Sin tráfico IG→sitio relevante en GA4; cadencia baja | **Canal de soporte** (confianza); **no** trae tests hoy |

**Conclusión:** el embudo que ya convierte es **búsqueda → landing → WhatsApp**. Instagram no es el cuello de botella de agenda de tests.

## 2. Decisión de foco (marketing)

**Duplicar lo que convierte. No “salvar” el canal flojo con más esfuerzo.**

| Prioridad | Canal | Inversión de tiempo | Para qué |
|-----------|-------|---------------------|----------|
| **P0** | Sitio + GSC (Héroe Tests) | Alta | Captar `SIBO/IMO + geo`, mejorar CTR `imo caseros` |
| **P0** | GBP | Media | Fotos, reseñas, NAP, horario = web; queries “cerca” |
| **P1** | Instagram | Baja | Autoridad + prueba social; ≤2 piezas Tests / mes |
| **P2** | Directorios gratis (Doctoralia etc.) | Baja | Solo si aporta “gastroenterólogo Caseros” sin diluir Tests |
| **No** | Meta Ads / subir cadencia IG por vanidad | — | Hasta agotar orgánico Tests |

Consulta: visible en GBP + una línea en web/bio. **No** pelear el Héroe con series de “vení a consulta”.

## 3. Instagram como canal de clientes (no de producción)

En este árbol (`exposicion-web`) Instagram se trata como **canal de adquisición/confianza**.  
Armado de posts, exports y workflows: rama / docs de `instagram` (fuera de acá).

| Qué sí | Qué no |
|--------|--------|
| Reforzar Tests (SIBO/IMO + H. pylori) y CTA a sitio/WA | Cadencia por likes o efemérides patrias |
| ≤2 piezas/mes alineadas a queries GSC | Pelear el Héroe SEO del sitio desde el feed |
| Highlights: Turnos → H. pylori → SIBO/IMO → Ubicación → … | Hacer de la consulta el centro del perfil |

**Medición:** checklist [`11-checklist-insights-ig.md`](11-checklist-insights-ig.md) (una vez / 90d).

## 4. Atribución barata (recomendado)

En recepción / primer WA: **“¿Cómo nos conoció?”**  
Opciones: Google / Maps / Instagram / Recomendación / Otro.  
Con 20–30 respuestas tenés el canal preferido de **pacientes reales**, no de likes.

Opcional: link de bio IG con UTM (`?utm_source=instagram&utm_medium=bio`) para verlo en GA4.

## 5. Ampliación del plan original

Además del backlog en [`04-informe-y-backlog.md`](04-informe-y-backlog.md):

| Nuevo | Por qué |
|-------|---------|
| Atribución “cómo nos conoció” | Cierra debate sensación vs realidad |
| IG como soporte ≤2 piezas Tests/mes | Evita invertir en el canal flojo |
| Orden highlights Héroe-first | Perfil = vitrina de tests |
| Marcar `whatsapp_click` como key event en GA4 | Un número semanal de conversión |
| Diferir crecimiento IG “por engagement” | Hasta saturar Tests orgánicos + GBP |

## 6. Qué no ampliar (aún)

- Ads pagos  
- Nueva landing prep SIBO (ítem 15 del backlog) sin volumen GSC claro  
- Automatización / más volumen de efemérides patrias  
- Competir copy genérico “mejor gastroenterólogo”
