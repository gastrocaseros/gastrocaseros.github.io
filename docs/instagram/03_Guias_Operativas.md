# 03. Guías Operativas — GastroCaseros

## 1. Publicación de Historias (Celular)
Las historias animadas (MP4) deben subirse desde el celular para habilitar herramientas interactivas.

### Paso a Paso:
1. **Transferencia:** Subir el video de `ig_posts/exports_video/` a Google Drive y descargarlo en el móvil.
2. **Interactividad:**
   - **Sticker de Link:** Agregar enlace a `wa.me/5491124573240` con el texto "Agendar Turno".
   - **Música:** Agregar track instrumental suave (Lofi/Relajante).
   - **SEO Local:** Agregar Sticker de Ubicación "Caseros". Achicarlo con los dedos y ocultarlo fuera de la pantalla (el algoritmo lo registra igual).
3. **Destacar:** Una vez publicado, tocar el corazón "Destacar" y guardar en la categoría correspondiente (Turnos, SIBO, etc.).

---

## 2. Publicación de Posts (PC)
Uso recomendado para placas fijas (PNG) mediante el navegador.

### Paso a Paso:
1. Entrar a [instagram.com](https://instagram.com) -> **Crear** -> **Publicación**.
2. Seleccionar archivo de `ig_posts/previews/` (proporción 1:1).
3. **Ajustes:**
   - **Ubicación:** "Caseros, Buenos Aires".
   - **Texto Alternativo:** Desplegar "Accesibilidad" y describir brevemente la imagen (ej: "Placa informativa sobre SIBO").
4. **Caption:** Copiar el texto preparado, asegurando el gancho en la primera línea y el CTA al final.

---

## 3. Flujo de Producción (HTML + Puppeteer)
En lugar de herramientas externas como Canva, utilizamos maquetación local para control absoluto del diseño.

1. **Maquetar:** Crear o editar el archivo HTML en `ig_posts/` (ej: `post6.html`).
2. **Previsualizar:** Abrir `ig_posts/mockup.html` en el navegador para ver cómo queda en el marco de Instagram.
3. **Exportar:**
   - Para **Posts (PNG):** Ejecutar `node ig_posts/export.js`. Los archivos quedan en `ig_posts/previews/`.
   - Para **Historias (MP4):** Ejecutar `node ig_posts/export_video.js`. Los archivos quedan en `ig_posts/exports_video/`.
4. **Verificar:** Revisar legibilidad (30px para footer) y colores en las carpetas de exportación.


---

## 4. Gestión de la Comunidad (Community Management)
**Regla Crítica:** Nunca dar diagnósticos ni indicaciones médicas por redes sociales.

### Plantilla de Respuesta por DM:
> "Hola [Nombre], gracias por escribirnos 👋. Para consultas específicas, estudios o turnos, te recomendamos comunicarte directamente por WhatsApp para una atención personalizada: https://wa.me/5491124573240. ¡Saludos!"

### Gestión de Comentarios:
- **Positivos:** Responder con agradecimiento y emoji.
- **Dudas Médicas:** Derivar siempre a WhatsApp o consulta presencial.
- **Spam:** Eliminar y bloquear inmediatamente.
- **Tiempo de Respuesta:** Idealmente menos de 24 hs (especialmente los miércoles).
