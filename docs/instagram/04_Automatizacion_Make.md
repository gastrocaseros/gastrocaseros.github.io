# 04. Automatización con Make — GastroCaseros

## 1. Arquitectura del Sistema
Utilizamos **Make.com** (plan gratuito, 1.000 operaciones/mes) para automatizar el flujo desde un panel de control en **Google Sheets**.

### Componentes:
1. **Google Sheets:** "Panel Instagram GastroCaseros".
2. **Google Drive:** Almacenamiento de imágenes exportadas.
3. **Instagram Graph API:** Conexión para publicación automática.

---

## 2. Los 3 Escenarios de Make
| Escenario | Trigger | Acción |
| :--- | :--- | :--- |
| **Revisión Semanal** | Lunes 09:00 hs | Lee Sheets y manda email de resumen con lo "Listo" para la semana. |
| **Publicación Feed** | Mar/Mie 17:50 hs | Descarga imagen de Drive y publica en IG. Cambia estado a "Publicado". |
| **Story de Turnos** | Miércoles 18:00 hs | Publica historia pre-diseñada recordando los turnos del jueves. |

---

## 3. Estructura del Panel (Google Sheets)
Columnas sugeridas para la hoja "Posts":
- **Semana / Fecha:** Programación temporal.
- **Categoría / Tema:** Organización temática.
- **Caption / Hashtags:** Contenido textual.
- **ImagenDriveID:** ID del archivo en Drive (fundamental para Make).
- **Estado:** `Borrador` -> `En Revisión` -> `Listo` -> `Publicado`.

---

## 4. Requisitos Técnicos (Meta Graph API)
Para que el sistema funcione, la cuenta de Instagram debe ser **Profesional** y estar vinculada a una **Página de Facebook**.

### Obtención del Token:
1. Ir a [developers.facebook.com](https://developers.facebook.com).
2. Crear App tipo "Business" con producto "Instagram Graph API".
3. Generar token con permisos: `instagram_basic`, `instagram_content_publish`, `pages_read_engagement`.
4. **Renovación:** El token expira cada 60 días. Se recomienda renovar cada 55 días (poner alarma en Google Calendar).

---

## 5. Alternativa Manual
Si la automatización técnica resulta compleja, se recomienda el uso de **Meta Business Suite** (nativo), que permite programar posts e historias de forma gratuita y sencilla desde el navegador o la app móvil.
