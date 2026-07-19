# 07. Status de Publicaciones — GastroCaseros

## 📍 Estado Actual del Proyecto (Mayo 2026)
Se ha consolidado el sistema de diseño y la numeración de archivos está 100% sincronizada con el orden cronológico de publicación.

### 1. Publicaciones Realizadas (Feed)
- **Post 1:** Apertura y Bienvenida. ✅
- **Post 2:** Presentación de la Dra. Erika Pest. ✅
- **Post 3:** Información de Turnos / WhatsApp. ✅

### 2. Próximas Publicaciones (Sincronizadas por Número)
- **Post 4:** Ubicación y Referencias. Carrusel maquetado en `post4_1.html`, `post4_2.html` y `post4_3.html`. ✅
- **Post 5:** SIBO (Definición Biológica). Maquetado en `post5.html`. ✅
- **Post 6:** IMO (Arqueas y Metano). Maquetado en `post6.html`. ✅
- **Post 7:** H. Pylori (Test de Urea). Maquetado en `post7.html`. ✅
- **Post 8:** Mitos y Verdades (Yogur). Maquetado en `post8.html`. ✅
- **Post 9:** Tecnología y Precisión. Maquetado en `post9.html`. ✅
- **Post 10:** ¿Lactosa o SIBO?. Maquetado en `post10.html`. ✅
- **Post 11:** Preguntas Frecuentes. Maquetado en `post11.html`. ✅
- **Carrusel IMO (M. smithii):** Carrusel de 5 slides. Maquetado en `post_smithii_s1.html` a `post_smithii_s5.html`. ✅
- **Carrusel H. Pylori (Test de Aire Espirado):** Carrusel de 6 slides. Maquetado en `post_hpylori_s1.html` a `post_hpylori_s6.html`. ✅

### 3. Historias e Infraestructura Técnica
La numeración de historias ahora sigue el orden de publicación y los highlights:

- **Historias 1 y 2:** Institucionales (Bienvenida). ✅
- **Historia 3:** Ubicación (Mapa y cómo llegar). Maquetado en `story3.html`. ✅
- **Historia 4:** FAQ Transporte. Maquetado en `story4.html`. ✅
- **Historia 5:** Serie SIBO. Videos MP4 en `story5_1.html` y `story5_2.html`. ✅
- **Historia 6:** Serie IMO. Videos MP4 en `story6_1.html`, `story6_2.html` y `story6_3.html`. ✅
- **Historia 7:** Serie Helicobacter Pylori. Videos MP4 en `story7_1.html`, `story7_2.html`, `story7_3.html` y `story7_4.html`. ✅
- **Efeméride 05-05:** Día Internacional de la Celiaquía. Carrusel de 3 slides. ✅
- **Efeméride 05-19:** Día Mundial de la EII. Carrusel de 6 slides. ✅
- **Efeméride 05-25:** Día de la Patria. Carrusel. ✅
- **Efeméride 05-29:** Día Mundial de la Salud Digestiva. Carrusel. ✅
- **Efeméride 06-11:** Día Mundial del Hígado Graso. Carrusel. ✅
- **Efeméride 06-20:** Día de la Bandera. ✅
- **Efeméride 07-09:** Día de la Independencia. ✅
- **Efeméride 07-28:** Día Mundial contra la Hepatitis. Carrusel de 3 slides. Maquetado y exportado (`efemeride_07_28_s1`–`s3`). ✅ Listo para publicar (revisión médica de la Dra. recomendada).

---

## 🚀 Próximos Pasos Inmediatos
1. **Publicar efeméride 07-28:** Subir `efemeride_07_28_s1.png` a `s3.png` desde PC (o Meta Business Suite) con caption de `08_Archivo_de_Captions.md`.
2. **Seguimiento:** Continuar con la Serie Diagnóstica y los pendientes de SIBO/IMO.
3. **Infra:** el workflow de creación quedó unificado en `11_Workflows_Contenido.md` + `npm run ig:new`.

---

## 📋 Pendientes: Ampliación de SIBO e IMO

### 🦠 SIBO — Contenido Pendiente de Desarrollo

La cobertura actual de SIBO se limita a posts breves (`post5.html` definición, `post10.html` Lactosa vs SIBO). Se necesita una **serie educativa profunda** equivalente a la que se hizo para IMO (M. smithii) y H. Pylori.

**Carrusel SIBO Profundo (5–6 slides):** `post_sibo_s1.html` a `post_sibo_s5.html`
- **S1 — Hook/Portada:** "¿Qué está pasando realmente en tu intestino delgado?" — Gancho fuerte con imagen del personaje con síntomas (hinchazón, gases, dolor).
- **S2 — ¿Qué es el SIBO?:** Definición clínica: migración bacteriana al intestino delgado, fermentación patológica de carbohidratos. Diferencia con microbiota normal del colon.
- **S3 — Síntomas y confusión diagnóstica:** Hinchazón post-prandial, gases, diarrea o constipación, fatiga. Por qué se confunde con SII (Síndrome de Intestino Irritable) y cómo diferenciarlo.
- **S4 — El Test de Aire Espirado para SIBO:** Explicación del procedimiento: ayuno previo, ingesta de sustrato (lactulosa o glucosa), medición seriada de H₂ y CH₄ durante 2–3 horas. Por qué importa medir ambos gases.
- **S5 — Tratamiento y abordaje:** Rol de los antibióticos específicos (Rifaximina), dieta de eliminación (low-FODMAP) como complemento, importancia del seguimiento post-tratamiento.
- **S6 — CTA:** "¿Reconocés estos síntomas? Consultá con tu gastroenterólogo/a." + Datos del consultorio.

**Historias SIBO (ampliación):** Completar la serie de historias con slides adicionales para el Highlight de SIBO.

---

### 💨 IMO — Contenido Pendiente de Desarrollo

Ya existe el carrusel de M. smithii (`post_smithii_s1` a `s5`). Se necesita profundizar con contenido complementario.

**Carrusel IMO: Diagnóstico y Tratamiento (5–6 slides):** `post_imo_dx_s1.html` a `post_imo_dx_s5.html`
- **S1 — Hook/Portada:** "¿Por qué tu constipación no mejora con nada?" — Foco en el paciente que ya probó laxantes sin resultado.
- **S2 — El metano como neuro-transmisor:** Profundizar el mecanismo: el CH₄ actúa sobre receptores del plexo entérico, reduce las contracciones propulsivas del intestino (efecto de "freno"). Dato: incremento de 1 ppm de metano enlentece el tránsito hasta un 59%.
- **S3 — El Test específico para IMO:** Por qué un test que solo mide H₂ puede dar falsamente negativo en IMO. La importancia de medir CH₄ simultáneamente. Cómo interpretar los valores (criterio Roma: ≥10 ppm de CH₄ en cualquier punto de la prueba).
- **S4 — ¿Quién puede tener IMO?:** Perfil del paciente: constipación crónica (< 3 evacuaciones/semana), distensión abdominal, flatulencias de olor característico, respuesta pobre a laxantes convencionales.
- **S5 — Tratamiento del IMO:** Diferencias respecto al SIBO de H₂ (requiere combinación de antibióticos, ej: Rifaximina + Neomicina o Metronidazol). Rol de la dieta en la reducción de sustratos para las arqueas.
- **S6 — CTA:** "El diagnóstico correcto cambia el tratamiento. Consultá." + Datos del consultorio.

**Reel / Historia IMO Adicional:** Animación explicando la reacción química 4H₂ + CO₂ → CH₄ + 2H₂O de forma visual y didáctica.
