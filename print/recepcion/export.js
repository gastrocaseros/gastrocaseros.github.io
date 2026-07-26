#!/usr/bin/env node
/**
 * Exporta carteles 4″×6″ a PNG (~300 dpi) en exports/
 * Incremental (como ig_posts/export.js): solo regenera si HTML/CSS/QR/logo
 * son más nuevos que el PNG de destino.
 *
 * Al exportar, embebe el QR (y logo) como data-URI para que Chromium no
 * pueda usar una imagen cacheada distinta a assets/qr-*.png.
 *
 * Uso: node print/recepcion/export.js
 *      node print/recepcion/export.js --force
 */
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const exportDir = path.join(root, 'exports');
const force = process.argv.includes('--force');

const CSS_W = 384;
const CSS_H = 576;
const DPI_SCALE = 300 / 96;

const cards = [
  {
    name: 'instagram',
    qr: 'assets/qr-instagram.png',
    sources: [
      'instagram.html',
      'styles.css',
      'config.json',
      'assets/logo.png',
      'assets/qr-instagram.png',
    ],
  },
  {
    name: 'google-resena',
    qr: 'assets/qr-google.png',
    sources: [
      'google-resena.html',
      'styles.css',
      'config.json',
      'assets/logo.png',
      'assets/qr-google.png',
    ],
  },
  {
    name: 'whatsapp',
    qr: 'assets/qr-whatsapp.png',
    sources: [
      'whatsapp.html',
      'styles.css',
      'config.json',
      'assets/logo.png',
      'assets/qr-whatsapp.png',
      'assets/icon-whatsapp.svg',
    ],
  },
  {
    name: 'wifi',
    qr: 'assets/qr-wifi.png',
    sources: [
      'wifi.html',
      'styles.css',
      'config.json',
      'assets/logo.png',
      'assets/qr-wifi.png',
    ],
  },
];

function mtime(p) {
  return fs.existsSync(p) ? fs.statSync(p).mtimeMs : 0;
}

function needsExport(card, destPath) {
  if (force || !fs.existsSync(destPath)) return true;
  const destM = mtime(destPath);
  return card.sources.some((rel) => mtime(path.join(root, rel)) >= destM);
}

function dataUri(absPath) {
  const ext = path.extname(absPath).toLowerCase();
  const mime =
    ext === '.svg' ? 'image/svg+xml' :
    ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' :
    'image/png';
  const buf = fs.readFileSync(absPath);
  return `data:${mime};base64,${buf.toString('base64')}`;
}

(async () => {
  if (!fs.existsSync(exportDir)) fs.mkdirSync(exportDir, { recursive: true });

  const qrsArgs = [path.join(root, 'generate-qrs.js')];
  if (force) qrsArgs.push('--force');
  require('child_process').execFileSync(process.execPath, qrsArgs, {
    stdio: 'inherit',
  });

  const pending = cards.filter((card) => {
    const destPath = path.join(exportDir, `${card.name}.png`);
    if (!needsExport(card, destPath)) {
      console.log(`⏩ Saltando ${card.name}.png (ya existe y está actualizado).`);
      return false;
    }
    for (const rel of card.sources) {
      const p = path.join(root, rel);
      if (!fs.existsSync(p)) {
        throw new Error(`Falta fuente requerida: ${rel}`);
      }
    }
    return true;
  });

  if (pending.length === 0) {
    console.log('Exports al día. Nada que regenerar.');
    return;
  }

  const systemChrome = ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser']
    .find((candidate) => fs.existsSync(candidate));

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disk-cache-size=1'],
    ...(systemChrome ? { executablePath: systemChrome } : {}),
  });

  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  await page.setViewport({
    width: CSS_W,
    height: CSS_H,
    deviceScaleFactor: DPI_SCALE,
  });

  const logoUri = dataUri(path.join(root, 'assets/logo.png'));

  for (const card of pending) {
    const htmlPath = path.join(root, `${card.name}.html`);
    const destPath = path.join(exportDir, `${card.name}.png`);
    const qrUri = dataUri(path.join(root, card.qr));

    let iconUri = null;
    if (card.name === 'whatsapp') {
      iconUri = dataUri(path.join(root, 'assets/icon-whatsapp.svg'));
    }

    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

    // Inyectar assets embebidos: garantiza el PNG actual de assets/, no un cache viejo
    await page.evaluate(({ qrUri, logoUri, iconUri }) => {
      document.querySelectorAll('img.qr').forEach((img) => {
        img.src = qrUri;
      });
      document.querySelectorAll('.brand img, .ig-badge img').forEach((img) => {
        img.src = logoUri;
      });
      if (iconUri) {
        document.querySelectorAll('.handle-row img').forEach((img) => {
          img.src = iconUri;
        });
      }
    }, { qrUri, logoUri, iconUri });

    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all(
        [...document.images].map((img) => {
          if (img.complete && img.naturalWidth > 0) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );
    });

    const qrInfo = await page.evaluate(() => {
      const qr = document.querySelector('img.qr');
      if (!qr) return null;
      return {
        ok: qr.complete && qr.naturalWidth > 100,
        w: qr.naturalWidth,
        h: qr.naturalHeight,
        srcKind: (qr.getAttribute('src') || '').startsWith('data:image/png') ? 'data-png' : 'other',
      };
    });
    if (!qrInfo || !qrInfo.ok || qrInfo.srcKind !== 'data-png') {
      throw new Error(`QR embed failed in ${card.name}.html: ${JSON.stringify(qrInfo)}`);
    }

    // Escribir a temp y renombrar: evita previews del IDE sobre el path viejo a medias
    const tmpPath = `${destPath}.tmp.png`;
    const el = await page.$('.card');
    if (!el) throw new Error(`No .card in ${card.name}.html`);
    await el.screenshot({ path: tmpPath, type: 'png' });
    fs.renameSync(tmpPath, destPath);

    // Verificación de color en el PNG exportado (muestra zona del QR)
    const colorful = await page.evaluate(async () => {
      const qr = document.querySelector('img.qr');
      const c = document.createElement('canvas');
      c.width = 64; c.height = 64;
      const ctx = c.getContext('2d');
      ctx.drawImage(qr, 0, 0, 64, 64);
      const { data } = ctx.getImageData(0, 0, 64, 64);
      let colorful = 0;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        if (Math.max(r, g, b) - Math.min(r, g, b) > 40) colorful++;
      }
      return colorful / (64 * 64);
    });

    console.log(
      '✓',
      path.relative(process.cwd(), destPath),
      `(qr ${qrInfo.w}x${qrInfo.h}, color ${(colorful * 100).toFixed(0)}%)`
    );

    if (card.name !== 'wifi' && colorful < 0.15) {
      throw new Error(
        `${card.name}.png parece sin color en el QR (ratio=${colorful.toFixed(3)}). Abortando.`
      );
    }
  }

  await browser.close();
  console.log('Listo. Imprimí a tamaño real 4″ × 6″ (10 × 15 cm), sin “ajustar a página”.');
  console.log('Si el IDE muestra el PNG viejo: cerrá el tab y reabrí exports/*.png');
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
