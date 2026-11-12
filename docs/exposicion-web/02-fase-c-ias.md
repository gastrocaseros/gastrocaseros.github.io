# Fase C — Sondeo IAs conversacionales

Fecha: 2026-11-12

## Métodos

| Canal | Método | Estado |
|-------|--------|--------|
| Duck.ai (Luna / con búsqueda) | Live en browser | **Hecho** — prompt A |
| Claude / ChatGPT / Gemini | Matriz razonada + grounding web (subagente) | Hecho (simulación; validar manual) |
| ChatGPT / Claude / Gemini UI real | Login usuario | **Pendiente** (plantilla abajo) |

## Evidencia live: Duck.ai

**Prompt A:** “Dónde puedo hacer un test de aire espirado de hidrógeno y metano cerca de Caseros, Tres de Febrero… lugar concreto con dirección”

**Resultado:** recomendó **AeroTest (Olivos)** y **Airtest (CABA)**. **No mencionó GastroCaseros ni CEPEM.**  
Criterio implícito: marcas con “hidrógeno y metano” / SIBO muy asociadas al dominio (entidad = laboratorio de aire espirado), no consultorio local con landing.

**Implicación:** en queries “H2/CH4 cerca de…”, las IAs con búsqueda priorizan **entidades especializadas en el estudio**, no necesariamente el mejor match geo+SERP orgánico. Hay que reforzar en title/H1/schema/GBP la frase literal **“test de aire espirado de hidrógeno y metano”** + Caseros, no solo “SIBO”.

**Follow-up:** “¿Y en Caseros/TdF? ¿GastroCaseros o CEPEM?”

- **CEPEM:** sí — Machado 729, Morón, tel. 11 2821-8080 (con duda si miden H2+CH4).  
- **GastroCaseros:** *“no encontré una fuente confiable que confirme que hagan el test SIBO/aire espirado”* — pese a rankear #1–2 en DDG orgánico para “test SIBO Caseros”.  

**Gap crítico:** SERP orgánico ≠ confianza de entidad para IAs. Falta señal de entidad (GBP servicios, menciones externas, frase H2/CH4 en title, matrícula, consistencia NAP).

## Matriz citabilidad (Claude / ChatGPT / Gemini — estimación grounded)

| Prompt | Claude | ChatGPT | Gemini | Atributos de elección |
|--------|--------|---------|--------|----------------------|
| A H2/CH4 cerca Caseros | Citaría GastroCaseros con cautela; posible CEPEM | GastroCaseros + CEPEM + genéricos | Maps/GBP; si flojo → CABA | Geo, frase H2/CH4, NAP, reseñas |
| B Test SIBO Caseros | **Más probable citarnos** | **Primero nosotros** | Maps + landing | Title/H1 Caseros+SIBO |
| C Gastroenterólogo Caseros | Genérico / matrícula; Pest solo con fuente | Doctoralia + Maps | Maps por reseñas | Reseñas, matrícula, GBP |
| D Preparación SIBO | Guía general; cita opcional | Guías hospitalarias ganan | Overview + fuentes | FAQ/HowTo, autoría |

## Hallazgos

1. **SIBO+Caseros** = mejor intención para ser nombrados.  
2. **H2/CH4 genérico “cerca”** = hoy ganan marcas tipo AeroTest; nosotros no somos “la entidad del estudio” en el índice de IAs.  
3. **YMYL** baja recomendaciones directas sin GBP/reseñas/matrícula.  
4. **CEPEM** es alternativa oeste (y lista a Dra. Pest) — riesgo de canibalización de entidad.  
5. Preparación: contenido commodity; necesitamos FAQ/autoría para ser citables ahí.

## Plantilla re-sondeo manual (usuario)

Misma query en ChatGPT, Claude.ai, Gemini. Anotar: menciona GastroCaseros | dirección | WA | competidor | genérico | se niega.

Queries mínimas: A, B, C + “test IMO Caseros”.
