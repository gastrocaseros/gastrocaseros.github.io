# 03. Guías Operativas — GastroCaseros

Este documento detalla el procedimiento exacto para mantener la calidad y consistencia del contenido en Instagram.

---

## 1. Procedimiento de Publicación de Posts (Feed - PC)
Se recomienda publicar desde la computadora para mayor comodidad con los textos largos y archivos PNG.

### Paso a Paso:
1. **Preparación:** Asegurate de haber corrido `npm run ig:export`. Los archivos finales están en `ig_posts/exports/`.
2. **Acceso:** Entrá a [instagram.com](https://instagram.com) e iniciá sesión.
3. **Crear:** Clic en **+ Crear** -> **Publicación**.
4. **Carga:** Seleccioná el archivo (ej: `post4_1.png`). 
   - *Si es un carrusel:* Seleccioná los 3 archivos en orden (`post4_1`, `post4_2`, `post4_3`).
5. **Formato:** Verificá que esté en **1:1 (Cuadrado)**. Clic en **Siguiente**.
6. **Filtros:** **NO aplicar filtros**. La paleta de colores ya está calibrada en el código. Clic en **Siguiente**.
7. **Detalles Finales:**
   - **Caption:** Copiá el texto desde el [Archivo de Captions](08_Archivo_de_Captions.md).
   - **Ubicación:** Buscá y seleccioná "Caseros, Buenos Aires".
   - **Accesibilidad:** En "Configuración avanzada" o "Accesibilidad", pegá el **Alt Text** (Texto Alternativo) sugerido en la documentación.
8. **Compartir:** Clic en **Compartir**.

---

## 2. Publicación de Historias (Historias - Celular)
Las historias animadas (MP4) deben subirse desde el móvil para usar stickers interactivos.

### Paso a Paso:
1. **Transferencia:** Subí el video de `ig_posts/exports/` (o `exports_video/`) a Google Drive o WhatsApp Web y descargalo en tu celular.
2. **Subida:** Abrí Instagram -> Tu Historia -> Seleccioná el video.
3. **Elementos Interactivos (Crucial):**
   - **Alineación:** Los videos incluyen botones de guía (ej: "Colocar Sticker"). Debés colocar el sticker nativo de Instagram **justo encima** de estos botones para que la animación y el diseño coincidan.
   - **Sticker de Ubicación:** Agregá "Consultorio Gastroenterológico Caseros" o simplemente "Caseros".
   - **Sticker de Enlace:** Para transporte/turnos, usá el link correspondiente y personalizá el texto para que tape la guía del video.
4. **Música:** Podés agregar una pista instrumental suave (Lofi/Ambient) a volumen bajo (10-15%).
5. **Publicar:** Compartir en tu historia.

> [!TIP]
> Si el sticker de Instagram es muy grande, podés pellizcarlo para achicarlo hasta que calce perfecto sobre la caja verde diseñada en el video.

---

## 3. Flujo de Trabajo "Design-as-Code"
Para crear contenido nuevo, seguimos este ciclo:

> [!TIP]
> **¿Querés automatizar esto?** Revisá el [SOP de Workflows de Antigravity](11_Workflows_Antigravity.md) para iniciar la creación de contenido mediante prompts directamente en el chat.

1. **Maquetación:** Se edita el HTML/CSS en la carpeta `ig_posts/`.
2. **Validación:** Se abre `ig_posts/mockup.html` para verificar que el texto sea legible y el diseño sea premium.
3. **Exportación:** 
   - `npm run ig:export`: Genera imágenes fijas (PNG).
   - `npm run ig:video`: Genera videos animados (MP4).
4. **Sincronización:** Se actualiza el `08_Archivo_de_Captions.md` con el texto que acompañará a la imagen.

---

## 4. Reglas de Oro de la Marca
- **Consistencia:** Todos los posts deben llevar la "bajada" estándar: *"Atención personalizada. Estudios de aire espirado y consultorio de gastroenterología."*
- **Colores:** Nunca usar colores que no sean Navy (#112233), Verde (#4a7d4a) o Crema (#f4f1eb).
- **Trato:** Responder comentarios con calidez pero siempre derivando consultas médicas privadas a WhatsApp.
