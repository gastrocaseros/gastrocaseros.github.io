# Referencia operativa — IG GastroCaseros

Notas cortas del carrusel `post_pylori_prevencion` (nov 2026) y patrones reutilizables.

## Preview de una slide (sin export final)

```js
// Desde la raíz del repo; solo actualiza previews/
const puppeteer = require('puppeteer');
const path = require('path');
(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    executablePath: '/usr/bin/google-chrome'
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });
  const dir = path.resolve('ig_posts');
  for (const name of ['post_pylori_prevencion_s1']) {
    await page.goto('file://' + path.join(dir, name + '.html'), { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(dir, 'previews', name + '.png'), fullPage: false });
  }
  await browser.close();
})();
```

## Assets útiles (personajes / pylori)

| Archivo | Uso |
|---|---|
| `estomago_medico.png` | Estomaguito con ambo |
| `estomago_sin_ropa.png` | Sin ropa, con extremidades |
| `estomago_sin_extremidades.png` | Solo cuerpo + cara (CTA nov) |
| `helicobacter_cutie.png` / `helicobacter_villano.png` | Personaje bacteria |
| `cancer_gastrico_hpylori_lupa.png` | Diagrama S1 (labels PIL) |
| `cancer_gastrico_hpylori_base.png` / assets clean | Base sin tipografía |
| `oms_logo.png` | Emblema chico para cita OMS |
| `hpylori_icon_clean.png` | Icono bacteria para cards |

## Carrusel pylori / cáncer gástrico (nov) — estructura final

| Slide | Rol |
|---|---|
| s1 | Hook Noviembre + diagrama adenocarcinoma / H. pylori |
| s2 | Síntomas de alarma → endoscopía |
| s3 | ~80% + OMS carcinógeno tipo I |
| s4 | Test UBT (~15 min) |
| s5 | Control de erradicación |
| s6 | CTA WhatsApp + estomaguito |

Landing: `test-aire-espirado-helicobacter-pylori.html`  
WA: `11 2457-3240`

## Overlay Adenocarcinoma (coords actuales)

Rebuild desde base limpia + PIL. Tip de la flecha sobre la lesión (no sobre la lupa/bacteria):

- `lesion_x ≈ 300`, `lesion_y ≈ 275`
- label transparente (sin pill blanca)
- `y_start = ay + th + 2 + 10` (aire bajo la palabra)

Si solo se pide mover la flecha: no regenerar el dibujo ni la card de H. pylori.

## Checklist al cerrar un carrusel

- [ ] `export.js` + `mockup.html` al día
- [ ] Caption + hashtags + alt en `08`
- [ ] Status en `07`
- [ ] Export en `ig_posts/exports/`
- [ ] Commit en branch `instagram` si el usuario lo pide
