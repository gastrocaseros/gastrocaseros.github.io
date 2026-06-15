# 11. Workflows de Antigravity (SOP)

Este documento define el Procedimiento Operativo Estándar (SOP) que Antigravity debe seguir cada vez que se le solicite crear una nueva pieza de contenido (Post o Historia) para GastroCaseros.

---

## 1. Prompts de Inicio Rápido (Para el Usuario)
Para iniciar el proceso de forma eficiente, podés copiar y pegar el siguiente cuestionario en el chat, completando los corchetes. Esto le dará a Antigravity todo el contexto necesario para trabajar.

### ▶️ Prompt para crear un POST
```markdown
@Antigravity, iniciemos el Workflow de POST.
* Tema principal: [Ej: Día del Celíaco / Qué es el SIBO]
* Texto base o Guía: [Ej: La celiaquía es una enfermedad autoinmune... Hay que hablar de los síntomas y cómo diagnosticarlos.]
* Objetivo: [Ej: Informativo / Educar / Generar turnos de test de aire]
* Formato: [Ej: Imagen única / Carrusel de 3 slides]
```

### ▶️ Prompt para crear una HISTORIA
```markdown
@Antigravity, iniciemos el Workflow de HISTORIA.
* Tema principal: [Ej: Aviso de vacaciones / Transporte / Pregunta de la semana]
* Texto base o Guía: [Ej: El lunes es feriado, no hay consultorio pero respondemos WP.]
* Interacción en IG: [Ej: Ninguna / Etiqueta de Ubicación / Sticker de Enlace a Turnos / Sticker de Preguntas]
```

---

## 2. Fases de Ejecución del Workflow (Instrucciones para Antigravity)

Una vez que Antigravity recibe el "Prompt Inicial", debe seguir estrictamente estas 3 fases:

### Fase 1: Análisis y Draft (Validación)
1. **Análisis:** Comprender el tema y revisar el estilo de los últimos posts en la documentación si es necesario.
2. **Redacción de Copy:** Escribir el borrador del texto para la imagen/video y el texto largo para el pie de foto (Caption), siguiendo la voz de la marca (inspiración SAGE, profesional y cálido).
3. **Maquetación HTML:** Crear el nuevo archivo `postX.html` o `storyX.html` dentro de la carpeta `ig_posts/`. 
   - *Regla de CSS:* Usar los estilos preexistentes de `styles.css` (para posts) o `stories.css` (para historias). No inventar colores fuera de la paleta.
4. **Validación con el Usuario:** Presentar en el chat la propuesta de Caption y pedirle al usuario que abra `ig_posts/mockup.html` en su computadora (o utilizar las herramientas de captura de Antigravity) para verificar que el diseño está correcto.
5. **STOP:** Antigravity **debe detenerse aquí** y preguntar: *"¿Aprobás este borrador para pasar a la exportación final?"*

### Fase 2: Refinamiento (Iterativo)
- Si el usuario pide ajustes (ej: "Achicá el texto", "Cambiá esta palabra"), Antigravity realiza los cambios en el HTML o el texto y vuelve a pedir aprobación.

### Fase 3: Ejecución Total y Documentación
Una vez que el usuario da el **"OK"**, Antigravity debe ejecutar de forma autónoma:
1. **Exportación Automatizada:** Ejecutar en terminal `npm run ig:export` para PNGs (Posts) o `npm run ig:video` para MP4s (Historias).
2. **Archivar Caption:** Actualizar el archivo `docs/instagram/08_Archivo_de_Captions.md` agregando el texto final, hashtags y el Alt Text de accesibilidad para este nuevo post.
3. **Actualizar Status:** Modificar `docs/instagram/07_Status_Publicaciones.md` registrando la nueva pieza como "Maquetado" y "Exportado".
4. **Cierre:** Informar al usuario que el proceso ha finalizado y que los archivos están listos en `ig_posts/exports/` para ser subidos a Instagram (recordando subir los MP4 desde el celular y los Posts preferentemente desde la PC).

---

## 3. Workflow Específico: Efemérides

Las efemérides siguen las mismas 3 fases del workflow general, con las siguientes particularidades:

### Reglas de diseño
- **2 a 3 slides por efeméride** como máximo. No es necesario hacer un carrusel extenso.
- Nomenclatura de archivos: `efemeride_MM_DD_sN.html` (Ej: `efemeride_06_11_s1.html`).
- Usar `isLive: true` en el mockup para que se renderice desde el HTML fuente (no desde un PNG de preview).
- Para efemérides **patrias** (25 Mayo, 20 Junio, etc.): tono sobrio e institucional, sin vinculación médica forzada. Incluir `<div class="escarapela-mini">` en el HTML.
- Para efemérides **médicas**: tono educativo, con datos concretos y llamada a consulta.

### Regla de imágenes
- **No generar imágenes de IA por defecto.** Si una imagen agregaría valor, dejar una nota en comentario HTML (`<!-- SUGERENCIA DE IMAGEN: ... -->`) y registrarlo en `10_Captions_Efemerides.md` con el prefijo `📸 Sugerencia de imagen:`.

### ⚠️ Regla obligatoria: actualizar el mockup
**Siempre que se creen slides nuevas** (efemérides o cualquier otro post), Antigravity debe actualizar `ig_posts/mockup.html` en dos lugares:

1. **Sidebar de navegación** — agregar un `<div class="nav-item">` en el grupo correspondiente:
```html
<div class="nav-item" onclick="showPost('ef_MM_DD_sN')">Nombre Slide N <span>Carrusel</span></div>
```

2. **Objeto `posts` en el script** — agregar la entrada con `isLive: true`:
```js
"ef_MM_DD_s1": {
    img: "efemeride_MM_DD_s1.html", isLive: true, likes: 50,
    caption: `Caption completo del primer slide...`
},
"ef_MM_DD_s2": { img: "efemeride_MM_DD_s2.html", isLive: true, likes: 50, caption: "Descripción breve del slide 2" },
```

### Checklist de cierre para efemérides
- [ ] HTMLs creados en `ig_posts/` con nomenclatura correcta
- [ ] `mockup.html` actualizado (nav + objeto posts)
- [ ] Caption y hashtags registrados en `10_Captions_Efemerides.md`
- [ ] Notas de imágenes sugeridas documentadas (si aplica)
- [ ] Efeméride registrada en `09_Calendario_Efemerides.md` (si es nueva)
