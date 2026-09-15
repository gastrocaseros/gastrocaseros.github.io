# Guías para pacientes (A4)

Instructivos imprimibles / PDF. Branch **`instagram`** (mismo criterio que `print/recepcion`).

## Piezas

| Archivo | Contenido | Páginas |
|---------|-----------|---------|
| `h2-metano.html` | Test aire espirado H₂ / CH₄ (SIBO, IMO, intolerancias) | 3 → `Guia_SIBO-IMO_Caseros.pdf` |
| `helicobacter.html` | Test Helicobacter pylori (UBT) | 2 → `Guia_Hp_Caseros.pdf` |
| `styles.css` | Plantilla compartida A4 + marca GastroCaseros | — |

Fuente clínica H₂/CH₄: flyer PDF de la Dra. Erika Pest (adaptado a marca GastroCaseros).  
Fuente pylori: protocolo UBT de la landing del sitio.

## Editar

1. Abrí el HTML en el navegador (`npm run print:guias:preview`).
2. Cambiá textos / secciones en el HTML.
3. Ajustes de layout en `styles.css` (clases reutilizables: `.card`, `.timeline`, `.diet-grid`, etc.).
4. Exportá PDF cuando esté OK.

## Comandos

```bash
npm run print:guias:preview   # sirve esta carpeta
npm run print:guias           # exporta PDFs a exports/
npm run print:guias -- --force
```

También podés usar **Imprimir → Guardar como PDF** desde el navegador (la barra de preview no se imprime).

## Qué se versiona

| Versionar | Generado (gitignore) |
|-----------|----------------------|
| `*.html`, `styles.css`, `export.js`, `assets/logo.png`, `assets/procedimiento-hpylori.png`, README | `exports/*.pdf` |
