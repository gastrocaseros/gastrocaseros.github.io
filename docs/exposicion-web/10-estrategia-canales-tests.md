# Estrategia de canales — priorizar Tests (nov 2026)

Objetivo de negocio: **más pacientes de tests** que de consulta.  
Dentro de tests: **H. pylori = ticket/plata**; **SIBO/IMO = demanda orgánica (SEO)**.  
La consulta se comunica, pero no pelea el Héroe.

## 1. Qué dicen los datos (no la sensación)

| Canal | Evidencia | Rol real hoy |
|-------|-----------|--------------|
| **Google orgánico (sitio)** | GSC: clics en home + landing SIBO; query top `test de sibo zona oeste`. GA4 28d: 108 users, **72 `whatsapp_click`** (~54% de users) | **Adquisición #1** de intención de test |
| **Google AI / asistentes** | GSC Gen AI ~729 impresiones/3m; GA4 ~12 users “AI Assistant” | Descubrimiento temprano; aún poco citado vs AeroTest/CEPEM |
| **GBP / Maps** | Ficha + servicios H₂/CH₄ + reseñas; Local Pack | **Confianza + “cerca mío”**; cierra quien ya busca |
| **Instagram** | GSC IG sin datos; sitio no muestra tráfico IG relevante en GA4; cadencia baja | **No es el canal que trae tests hoy** |

**Conclusión:** la sensación de “IG poco engagement” es **probable realidad** para un consultorio local YMYL con poco posteo. No es el problema principal de agenda de tests. El embudo que ya convierte es **búsqueda → landing → WhatsApp**.

## 2. Decisión de foco (marketing)

**Duplicar lo que convierte. No “salvar” el canal flojo con más esfuerzo.**

| Prioridad | Canal | Inversión de tiempo | Para qué |
|-----------|-------|---------------------|----------|
| **P0** | Sitio + GSC (Héroe Tests) | Alta | Captar `SIBO/IMO + geo`, mejorar CTR `imo caseros` |
| **P0** | GBP | Media | Fotos, reseñas, NAP, horario = web; queries “cerca” |
| **P1** | IG | Baja–media | Autoridad + prueba social; 1 pieza Héroe Tests / 2 semanas |
| **P2** | Directorios gratis (Doctoralia etc.) | Baja | Solo si aporta “gastroenterólogo Caseros” sin diluir Tests |
| **No** | Meta Ads / subir cadencia IG por vanidad | — | Hasta agotar orgánico Tests |

Consulta: visible en GBP + highlight “Servicios/Nosotros” + una línea en bio/web. **No** series largas de “vení a consulta”.

## 3. Instagram: qué mejorar (sin obsesión de frecuencia)

Problema actual: **mucho maquetado, poca publicación**; el feed no refuerza el Héroe de forma recurrente.

### Highlights (orden sugerido en perfil)
1. Turnos  
2. **H. pylori** (ticket)  
3. **SIBO / IMO** (SEO / demanda)  
4. Ubicación  
5. Nosotros  
6. FAQ  
7. Servicios (consulta = una tarjeta, no el centro)

### Contenido
- **Sí (plata):** carrusel pylori **control/prep → turno** — ver [`../instagram/12_Plan_Carrusel_Pylori_Conversion.md`](../instagram/12_Plan_Carrusel_Pylori_Conversion.md).  
- **Sí (SEO):** carrusel SIBO profundo cuando no choque con pylori/efeméride 28/11.  
- **Sí:** 28/11 efeméride Cáncer gástrico → CTA test pylori.  
- **No:** repetir el carrusel educativo `post_hpylori_s*` si ya está publicado.  
- **No:** meta de postear “seguido” sin pieza de conversión lista.

### Cómo saber si IG “anda”
Checklist: [`11-checklist-insights-ig.md`](11-checklist-insights-ig.md).

## 4. Atribución barata (recomendado)

En recepción / primer WA: **“¿Cómo nos conoció?”**  
Opciones: Google / Maps / Instagram / Recomendación / Otro.  
Con 20–30 respuestas tenés el canal preferido de **pacientes reales**, no de likes.

Opcional: link de bio IG con UTM (`?utm_source=instagram&utm_medium=bio`) para verlo en GA4.

## 5. Ampliación del plan original

Además del backlog en `04-informe-y-backlog.md`:

| Nuevo | Por qué |
|-------|---------|
| Atribución “cómo nos conoció” | Cierra debate sensación vs realidad |
| Cadencia IG fija Tests (≤2/mes) | Evita backlog eterno de HTML sin publicar |
| Orden highlights Héroe-first | Perfil = vitrina de tests |
| Marcar `whatsapp_click` como key event en GA4 | Un número semanal de conversión |
| Diferir crecimiento IG “por engagement” | Hasta que Tests orgánicos + GBP estén saturados |

## 6. Qué no ampliar (aún)

- Ads pagos  
- Nueva landing prep SIBO (ítem 15) sin volumen GSC claro  
- Automatización Make / más volumen de efemérides patrias  
- Competir copy genérico “mejor gastroenterólogo”
