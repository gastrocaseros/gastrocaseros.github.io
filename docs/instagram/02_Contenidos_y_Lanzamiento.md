# 02. Contenidos y Lanzamiento — GastroCaseros

## 1. Categorías de Contenido (Rotación Semanal)
Para mantener el feed dinámico y educativo, rotar entre estas 6 categorías:

| Cat. | Nombre | Descripción | Ejemplos |
| :--- | :--- | :--- | :--- |
| **A** | **Educación Digestiva** | Explicar condiciones en lenguaje simple. | ¿Qué es el SIBO?, Colon irritable. |
| **B** | **Estudios del Consultorio** | Educativo sobre los tests que realizamos. | Test de aire espirado, Preparación UBT. |
| **C** | **Prevención y Hábitos** | Consejos prácticos de salud. | 5 señales de alerta, Hidratación. |
| **D** | **Mitos y Verdades** | Desmitificar creencias populares. | "El yogur cura todo", "Ibuprofeno en ayunas". |
| **E** | **Institucional** | El consultorio, la Dra., turnos. | ¿Cómo pedir turno?, Especialista UBA. |
| **F** | **Fechas Especiales** | Efemérides de salud relevantes. | Día del Cáncer de Colon, Día de la Salud. |

---

## 2. Régimen de Publicación
| Formato | Frecuencia | Día preferido | Horario |
| :--- | :--- | :--- | :--- |
| **Post (feed)** | 1 por semana | Martes o Miércoles | 18:00–20:00 hs |
| **Story informativa** | 2–3 por semana | Lun, Mie, Vie | 10:00–12:00 hs |
| **Story turno** | 1 por semana | Miércoles (víspera de consulta) | 18:00 hs |
| **Reel** | 1 por mes | Libre | 18:00–20:00 hs |

---

## 3. Serie de Lanzamiento (Estructura de Bloques)

### 🟢 Bloque 1: Bases Institucionales
1. **Post 1:** Apertura y Bienvenida. (`post1.html`)
2. **Post 2:** Presentación de la Dra. Erika Pest. (`post2.html`)
3. **Post 3:** Información y agendamiento de Turnos. (`post3.html`)
4. **Post 4:** Ubicación y Referencias. (`post4.html`)

### 🔬 Bloque 2: Serie Diagnóstica
Estos posts utilizan "Cajas de Evidencia" y citas científicas para reforzar la autoridad.

5. **Post 5:** Definición Clínica del SIBO. (`post5.html`)
6. **Post 6:** IMO (Sobrecrecimiento Metanogénico). (`post6.html`)
7. **Post 7:** Helicobacter Pylori (Urea). (`post7.html`)
8. **Post 8:** Mitos y Verdades (Yogur). (`post8.html`)
9. **Post 9:** Tecnología y Precisión. (`post9.html`)
10. **Post 10:** ¿Lactosa o SIBO?. (`post10.html`)
11. **Post 11:** Preguntas Frecuentes. (`post11.html`)



---

## 4. Diseño de Carruseles (Estructura Estándar)
Cada carrusel educativo debe tener entre 5 y 7 slides:
- **Slide 1:** Portada Navy con gancho potente.
- **Slides 2-5:** Desarrollo del concepto (alternar Crema/Navy). Máximo 5 palabras por línea.
- **Slide 6:** Síntesis/Resumen en Crema.
- **Slide 7:** CTA en Verde Marca (#4a7d4a) con "Pedí tu turno por WhatsApp".

---

## 5. Fuentes de Información y Validación
**Fuentes Primarias:** SAGE (sage.org.ar), ENDIBA (endiba.org.ar), AGA (gastro.org).
**Regla de Oro:** Ningún post médico (Cat. A o B) se publica sin la revisión final de la Dra. Erika Pest.

---

## 6. Banco de Ideas (Próximos 3 Meses)
- **Mes 1:** SIBO, Lactosa, Mito del Yogur, Preparación para estudios.
- **Mes 2:** H. Pylori, Señales de alerta, ¿Qué es una endoscopía?, Día de la Salud.
- **Mes 3:** IMO, Intolerancia a la fructosa, Reflujo, 3 meses en Instagram.

---

## 7. Maquetación y Renderizado Técnico
A diferencia de otras cuentas, GastroCaseros utiliza un sistema de **Diseño como Código**:
- **Maquetación:** Archivos HTML/CSS en `ig_posts/` (ej: `post4.html`, `story5.html`).
- **Renderizado:** Scripts de Node.js + Puppeteer (`export.js` para PNG y `export_video.js` para MP4).
- **Consistencia:** Los estilos base viven en `ig_posts/styles.css`, asegurando que cada post respete la paleta y tipografía oficial sin errores manuales.

