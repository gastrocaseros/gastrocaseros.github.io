# 🩺 Consultorio Gastroenterológico Caseros

Este proyecto es el sitio web institucional de la **Dra. Erika Pest**. Es un sitio estático moderno, veloz y optimizado para SEO (buscadores).

## 🚀 Estructura del Proyecto
- `index.html`: Estructura y contenido del sitio.
- `logo.png`: Logotipo principal del consultorio.
- `css/style.css`: Diseño y estilos visuales (Usa el sistema **Stitch**).
- `img/`: Carpeta con iconos SVG e ilustraciones.
- `robots.txt` / `sitemap.xml`: Archivos para que Google indexe correctamente el sitio.

## 🛠️ Cómo hacer cambios comunes

### 1. Cambiar un texto
Abre `index.html` y busca el texto que quieras modificar. Guarda el archivo y refresca el navegador.

### 2. Actualizar el horario de atención
Busca en `index.html` la etiqueta `<h4>Atención Presencial</h4>` y cambia el texto de abajo. No olvides actualizarlo también en el área de `SERVICIOS`.

### 3. Cambiar el número de WhatsApp
Busca el enlace `wa.me/5491124573240` en `index.html` y reemplaza el número (usa el formato internacional sin el +).

### 4. Cambiar un Icono
Simplemente reemplaza el archivo correspondiente en la carpeta `img/`. Usa formato SVG para mayor nitidez.

---

## 📸 Estrategia de Instagram (Design-as-Code)
El contenido de Instagram se genera a partir de plantillas HTML/CSS ubicadas en `/ig_posts`. Esto garantiza que los colores y la marca sean siempre perfectos.

### 🖼️ Cómo generar los posts y las historias
Asegúrate de tener instaladas las dependencias con `npm install`.

1.  **Previsualizar:** Ejecuta `npm run ig:preview` y abre el navegador en el puerto indicado. Podrás ver el simulador (`mockup.html`) con todos los posts y historias.
2.  **Generar Imágenes (PNG):** Ejecuta `npm run ig:export`. Las imágenes para el feed se guardarán en `ig_posts/exports/`.
3.  **Generar Videos (MP4):** Ejecuta `npm run ig:video`. Los videos animados para historias se guardarán en `ig_posts/exports_video/`.

### 📚 Documentación Estratégica
Consulta la carpeta `docs/instagram/` para ver:
- `01_Estrategia_y_Marca.md`: Identidad visual y Highlights.
- `07_Status_Publicaciones.md`: Qué se ha publicado y qué falta.
- `08_Archivo_de_Captions.md`: Los textos y hashtags listos para copiar y pegar.


## 📈 SEO y Rendimiento
El sitio utiliza `loading="lazy"` para que las imágenes carguen solo cuando son visibles, ahorrando datos al paciente.

---
© 2026 GastroCaseros · Mantenimiento por Antigravity