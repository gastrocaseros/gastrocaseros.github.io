# Carteles QR — recepción (4″ × 6″ / 10 × 15 cm)

Materiales de escritorio / sala de espera. Branch **`instagram`** (no mergear a `main`).

## Qué se versiona vs qué se genera

| Versionar (fuente) | Generado (gitignore) |
|--------------------|----------------------|
| `*.html`, `styles.css`, `config.json` | `exports/*.png` |
| `assets/logo.png`, `assets/icon-*.svg` | `assets/qr-*.png`, `assets/qr-*.svg` |
| `generate-qrs.js`, `export.js`, docs | `resolved-urls.json` |

Igual que `ig_posts/exports/`: los PNG se regeneran en local, no viven en el repo.

## Piezas

| Archivo | Uso |
|---------|-----|
| `instagram.html` | Seguir en Instagram (QR degradé + logo) |
| `google-resena.html` | Reseña Google (Place ID del negocio) |
| `whatsapp.html` | Turnos WA (logo + mensaje prefijado) |
| `wifi.html` | WiFi (textos sync desde `config.json`) |

En todos: `gastrocaseros.com.ar` en texto, sin QR a la web.

## Comandos

```bash
npm run print:qrs       # QRs (+ sync wifi.html). Incremental; --force para forzar
npm run print:export    # QRs si hacen falta + PNG 4×6. Incremental; --force para forzar
npm run print:preview   # sirve esta carpeta
npm run print:all       # export + preview
```

`print:export` solo regenera un cartel si cambió su HTML, `styles.css`, `config.json`, logo o el QR correspondiente (misma idea que `ig:export`).

## Config

Editar [`config.json`](config.json):

- Google Place ID negocio: `ChIJRYXM4Qy5vJUR8iwNYIjcRM0`
- WhatsApp: `prefillMessage`
- WiFi: `ssid` / `password` / `placeholder: false` cuando sea real

Luego `npm run print:export`.

## Impresión

Tamaño real **4″ × 6″**, sin “ajustar a la página”. Salida: `exports/{instagram,google-resena,whatsapp,wifi}.png`.

## Prioridad (2 marcos)

1. Instagram + Reseña Google  
2. WhatsApp / WiFi después (WiFi mejor en sala de espera)
