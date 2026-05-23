# ⚙️ Fase 2: Estrategia Editorial y Automatización
## Gestión Eficiente de Contenidos para el Largo Plazo

Este documento establece el sistema para que la cuenta de Instagram funcione de forma casi autónoma, manteniendo la calidad médica y la estética de la marca.

---

## 1. Principios Editoriales (Reglas de Oro)

1.  **Educar, no vender:** El 80% del contenido debe ser informativo. El paciente busca entender su malestar.
2.  **Simplicidad Médica:** Traducir términos complejos (ej. "disbiosis") a conceptos cotidianos.
3.  **Validación:** Ningún post médico se publica sin revisión de la especialista.
4.  **Llamada a la Acción (CTA):** Cada publicación termina invitando a pedir turno por WhatsApp.

---

## 2. Categorías de Contenido (Rotación Semanal)

Para mantener el feed dinámico, rotar entre estas categorías:

- **Cat. A — Educación:** SIBO, Lactosa, Celiaquía, Reflujo.
- **Cat. B — Estudios:** Cómo es el día del test, preparaciones.
- **Cat. C — Prevención:** Alimentación, hidratación, manejo de estrés.
- **Cat. D — Mitos:** "El bicarbonato cura la acidez" (Mito), etc.
- **Cat. E — Institucional:** Horarios, prepagas (reintegros), la Dra.
- **Cat. F — Fechas:** Día del Cáncer de Colon, Día de la Celiaquía.

---

## 3. El Sistema de Automatización (Make + Sheets)

Para ahorrar 4 horas semanales de gestión manual, implementaremos este flujo con el plan gratuito de **Make.com**.

### 3.1 Estructura del Google Sheet
Crear una hoja llamada `Panel Instagram GastroCaseros` con:
- `Semana`: Identificador (ej: S12).
- `Fecha`: Día de publicación (preferentemente Martes o Miércoles).
- `Categoría`: (A/B/C/D/E/F).
- `Caption`: El texto completo del post.
- `ImagenID`: ID del archivo en Google Drive (PNG exportado de Canva).
- `Estado`: (Borrador / En Revisión / Listo / Publicado).

### 3.2 Escenario en Make.com
El escenario debe:
1.  **Trigger:** Revisar la planilla cada Martes a las 17:00 hs.
2.  **Filtro:** Solo buscar filas donde `Estado = "Listo"` y `Fecha = Hoy`.
3.  **Acción:** Publicar automáticamente en Instagram Business API.
4.  **Update:** Cambiar el estado en la planilla a `"Publicado"`.

---

## 4. Gestión de la Comunidad (DMs y Comentarios)

### 4.1 La "Triangulación" de WhatsApp
Instagram no es un canal para diagnósticos. Seguir este flujo:
- **Consulta médica por DM:** Responder con: *"Hola! Para casos específicos te recomendamos una consulta. Escribinos para agendar un turno: [Link a WhatsApp]"*.
- **Consulta de precios/prepagas:** *"Hola! Atendemos de forma particular con factura para reintegro. Consultanos coberturas vigentes por WhatsApp: [Link]"*.

---

## 5. Fuentes de Información Confiables

Para la creación de contenidos, usar solo estas fuentes para no errar en lo médico:
- **SAGE** (Sociedad Argentina de Gastroenterología).
- **ENDIBA** (Diagnóstico Digestivo de Argentina).
- **Experiencia de la Dra. Pest:** Historias reales de pacientes (anonimizadas).

---
*Este sistema asegura que GastroCaseros mantenga una presencia premium con el mínimo esfuerzo operativo posible.*
