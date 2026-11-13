# Plan — Carrusel H. pylori orientado a turnos (plata)

## Contexto

- **Plata:** el test de H. pylori (UBT) deja más margen / ticket que SIBO-IMO.  
- **SEO:** SIBO/IMO + geo sigue siendo el Héroe de búsqueda (`imo caseros`, `test sibo zona oeste`).  
- **IG ya tiene** carrusel educativo 6 slides (`post_hpylori_s1`–`s6`): qué es, cómo funciona el UBT, quién debería testearse, prep IBP/ATB.  
- **No repetir** ese carrusel con otro diseño. Si nunca se publicó → **publicarlo primero** y medir.

## Dos productos de comunicación

| Producto | Canal principal | Pieza IG |
|----------|-----------------|----------|
| Demanda orgánica SIBO/IMO | Sitio + GSC | Carrusel SIBO profundo (cuando toque) |
| **Conversión / ticket pylori** | IG + landing pylori + efeméride 28/11 | **Carrusel nuevo: “control / prep / pedí turno”** |

Highlights sugeridos: Turnos → **H. pylori** → SIBO/IMO → Ubicación → …

## Ángulo recomendado (nuevo carrusel)

**Nombre de trabajo:** `post_pylori_control`  
**Promesa:** “Terminaste el tratamiento: ¿cómo sabés que se fue?”  
**Por qué convierte:** el control de erradicación es recurrente, médico-indicado, y empuja UBT 4–6 semanas post-ATB — no es “info general”.

### Estructura (5 slides)

| Slide | Familia | Contenido |
|------:|---------|-----------|
| 1 | `hook` | Hook: “El tratamiento terminó. El H. pylori… ¿también?” |
| 2 | `edu` | Por qué la serología **no** sirve para control; hace falta test de infección **activa** |
| 3 | `edu` | UBT: ~30 min, soplar, sin endoscopía; **4–6 semanas** después del antibiótico |
| 4 | `edu` | Prep que invalida el resultado: IBP ≥14 días off; ATB/bismuto ≥4 semanas |
| 5 | `cta-turno` | CTA: “Pedí tu test de control en Caseros” + WA + web pylori |

Fuente clínica a citar en caption (revisión Dra. Pest): Maastricht VI / práctica habitual de control de erradicación.

### Alternativa B (si preferís prep pura)

“3 errores que invalidan tu test de H. pylori” — mismo CTA, menos narrativa de post-tratamiento. Útil si la agenda está llena de primeros diagnósticos y no de controles.

### Alternativa C (calendario)

**28/11** Día Internacional del Cáncer Gástrico → efeméride `ef-medica` (hook → datos → CTA test/erradicación).  
El carrusel de control puede salir **antes** (semana 17–21 o 24–27) y la efeméride **refuerza** el mismo producto.

## Orden de ejecución sugerido

1. Confirmar si `post_hpylori_s1`–`s6` ya está en el feed.  
   - Si **no**: publicar ese + caption de `08` (educativo).  
   - Si **sí**: ir directo al carrusel **control**.  
2. Crear con `npm run ig:new` (hook + edu×3 + cta-turno).  
3. Caption corto + link landing: `test-aire-espirado-helicobacter-pylori.html`.  
4. Aprobación Dra. → export → highlight H. pylori.  
5. Sitio (paralelo, no bloquea IG): reforzar title/H1 landing pylori (GSC pos ~12) en otro PR de `main`.

## Qué no hacer

- Mezclar SIBO y pylori en el mismo carrusel (diluye CTA de plata).  
- Prometer “prevención total de cáncer” (YMYL).  
- Postear solo teoría sin slide de turno.
