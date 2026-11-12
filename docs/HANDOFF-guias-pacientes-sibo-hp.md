# Handoff — Guías pacientes SIBO / Hp (A4 → PDF)

## Tema / alcance
Guías imprimibles A4 (HTML→PDF) para preparación de test H₂/CH₄ (SIBO/IMO) y Helicobacter pylori (UBT), más criterio de publicación sin mezclar rama `instagram` con el sitio público.

## Estado
**Hecho** (contenido + export + push de guías). Publicación web de PDFs **en curso / no implementada**.  
Branch: `instagram` (remoto actualizado). Commits de este hilo (entre otros): `57c60fe`, `61cdfda`. **No** hay PR citado en este chat.

## Decisiones
- Fuente editable = HTML en `print/guias-pacientes/`; PDF vía Puppeteer (`npm run print:guias`).
- SIBO: quitar apartado IMO; cronograma con **2 horas antes** (cepillado + no fumar); fumar en **negrita**; unificar a **2 páginas** sin perder detalles clínicos listados.
- Antibióticos a 4 semanas: no decir “Suspender antibióticos”; decir que el tratamiento **debe haber terminado** si corresponde, y que deben haber pasado 4 semanas desde colonoscopia/colon por enema si aplica.
- GLP-1 en SIBO: solo Ozempic® / Mounjaro® (sacar Saxenda/Trulicity; no venta AR).
- Export PDF: path absoluto en log + nombres con guiones bajos (`Guia_SIBO-IMO_Caseros.pdf`, `Guia_Hp_Caseros.pdf`).
- `exports/` sigue gitignored; no publicar taller IG/print en `main`.
- Compartir con pacientes: preferir **URL fija en gastrocaseros.com.ar** (no Drive como canal principal); WhatsApp Business = link, no PDF embebido.
- Publicar PDFs: copiar solo artefactos a `main` (p.ej. `guias/*.pdf`), **no** mergear `instagram` → `main`.

## Cambios clave
- `print/guias-pacientes/h2-metano.html` — 2 págs.; timeline; dieta; día del estudio; sin “Sin radiación”; alcohol en gel; disclaimer.
- `print/guias-pacientes/helicobacter.html` — copy erradicación simple; no fumar; disclaimer final; cepillado alineado.
- `print/guias-pacientes/styles.css` — densidades A4 (`.dense`, footer clearance, labels timeline).
- `print/guias-pacientes/export.js` — nombres `_` + log path absoluto.
- `print/guias-pacientes/README.md`, `index.html` — refs a nombres PDF / 2 páginas SIBO.
- Asset: `print/guias-pacientes/assets/procedimiento-hpylori.png` (commiteado en `57c60fe`).
- Push: `origin/instagram` hasta `61cdfda`.

## Pendiente de código
- [ ] Script tipo `print:guias:publish` (export → copiar PDF a worktree/`main` en `guias/sibo.pdf` + `guias/helicobacter.pdf` → push `main`).
- [ ] Carpeta pública en `main` (`guias/`) + opcional landing corta `guia-sibo` / `guia-helicobacter`.
- [ ] Incluir esos PDF en `build-local.sh` → `dist/` (o path que Pages ya despliegue).
- [ ] Acciones rápidas WhatsApp Business con las URLs fijas (configuración fuera del repo; N/A código).
- [ ] Commit del handoff: **no** (pedido explícito).

## Validación humana (Oscar)
1. `git checkout instagram && git pull`
2. `npm run print:guias:preview` → abrir `h2-metano.html` y `helicobacter.html` (2 págs. SIBO; pie no tapa texto).
3. `npm run print:guias -- --force` → consola con path clickeable a `print/guias-pacientes/exports/Guia_SIBO-IMO_Caseros.pdf` y `Guia_Hp_Caseros.pdf`.
4. Revisar PDF SIBO: 4 semanas (texto antibióticos/colonoscopia), 2 h dientes, **ni fumar** / **No fumes** / **NO fumes**, alcohol en gel, sin “Sin radiación”.
5. Revisar PDF Hp: frase post-tratamiento simple; no fumar; disclaimer al final.
6. Confirmar que **no** están en producción web hasta publicar a `main` (hoy solo rama `instagram`).

## Riesgos / no hacer
- No mergear `instagram` → `main` (expondría `ig_posts/`, docs IG, print de recepción, etc.).
- No subir PDF con fecha en el nombre si la URL de WhatsApp debe ser estable.
- No usar Drive como link principal a pacientes (permisos / links rotos / difícil de encontrar).
- No commitear este handoff (pedido del usuario).
- Repo público: la rama `instagram` puede verse en GitHub aunque no esté en el sitio (mencionado en el chat).

## Contratos
- Sheets / OAuth / sibling sync / PHI: **N/A** (no se habló).
- WhatsApp: número de pie de guía `11 2457-3240`; entrega de informe “PDF por WhatsApp”; acciones rápidas = URL (no PDF embebido).
- Branches: `main` = sitio Pages; `instagram` = taller; deploy solo push a `main` (`.github/workflows/deploy.yml`).

---

## Resumen (copiar a otro Project)
Guías A4 SIBO (2 págs.) + Hp en `print/guias-pacientes/` sobre branch `instagram` (pusheado `61cdfda`). Export PDF con nombres `_` y path absoluto en log. Falta publicar solo PDF a `main`/`guias/` con URL fija para WhatsApp; no mergear taller IG. Drive descartado como canal paciente. Practicas-TAE / Sheets / PHI: N/A en este chat.
