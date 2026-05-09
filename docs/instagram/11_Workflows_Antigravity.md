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
