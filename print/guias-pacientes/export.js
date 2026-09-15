#!/usr/bin/env node
/**
 * Exporta guías A4 a PDF en exports/
 * Incremental: regenera si HTML/CSS/logo son más nuevos que el PDF.
 *
 * Uso: node print/guias-pacientes/export.js
 *      node print/guias-pacientes/export.js --force
 */
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const exportDir = path.join(root, 'exports');
const force = process.argv.includes('--force');

const guides = [
  {
    name: 'Guia_SIBO-IMO_Caseros',
    html: 'h2-metano.html',
    sources: ['h2-metano.html', 'styles.css', 'assets/logo.png'],
  },
  {
    name: 'Guia_Hp_Caseros',
    html: 'helicobacter.html',
    sources: ['helicobacter.html', 'styles.css', 'assets/logo.png', 'assets/procedimiento-hpylori.png'],
  },
];

function mtime(p) {
  return fs.existsSync(p) ? fs.statSync(p).mtimeMs : 0;
}

function needsExport(guide, destPath) {
  if (force || !fs.existsSync(destPath)) return true;
  const destM = mtime(destPath);
  return guide.sources.some((rel) => mtime(path.join(root, rel)) >= destM);
}

async function exportGuide(browser, guide) {
  const destPath = path.resolve(exportDir, `${guide.name}.pdf`);
  if (!needsExport(guide, destPath)) {
    console.log(`skip  ${destPath} (up to date)`);
    return;
  }

  const fileUrl = 'file://' + path.join(root, guide.html);
  const page = await browser.newPage();
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  // Ocultar barra de preview en el PDF
  await page.addStyleTag({
    content: '.preview-bar { display: none !important; } body.preview { padding: 0 !important; gap: 0 !important; background: white !important; }',
  });

  await page.pdf({
    path: destPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await page.close();
  console.log(`ok    ${destPath}`);
}

async function main() {
  if (!fs.existsSync(exportDir)) fs.mkdirSync(exportDir, { recursive: true });

  const executablePath =
    process.env.PUPPETEER_EXECUTABLE_PATH ||
    ['/usr/bin/google-chrome-stable', '/usr/bin/google-chrome'].find((p) =>
      fs.existsSync(p)
    );

  const browser = await puppeteer.launch({
    headless: true,
    ...(executablePath ? { executablePath } : {}),
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

  try {
    for (const guide of guides) {
      await exportGuide(browser, guide);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
