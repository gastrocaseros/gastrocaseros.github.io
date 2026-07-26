#!/usr/bin/env node
/**
 * Regenera QRs estilizados desde config.json → assets/qr-*.png
 * Incremental: solo regenera si config/logo son más nuevos que el PNG.
 * También sincroniza textos visibles de wifi.html con config.json.
 *
 * Uso: node print/recepcion/generate-qrs.js
 *      node print/recepcion/generate-qrs.js --force
 */
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

let QR;
try {
  QR = require('qrcode');
} catch {
  console.error('Falta el paquete "qrcode". Corré: npm install --legacy-peer-deps');
  process.exit(1);
}

const root = __dirname;
const force = process.argv.includes('--force');
const cfg = JSON.parse(fs.readFileSync(path.join(root, 'config.json'), 'utf8'));
const assets = path.join(root, 'assets');
const configPath = path.join(root, 'config.json');
const logoPath = path.join(assets, 'logo.png');
const logoDataUrl = `data:image/png;base64,${fs.readFileSync(logoPath).toString('base64')}`;

function mtime(p) {
  return fs.existsSync(p) ? fs.statSync(p).mtimeMs : 0;
}

function isUpToDate(dest, sources) {
  if (force || !fs.existsSync(dest)) return false;
  const destM = mtime(dest);
  return sources.every((s) => destM > mtime(s));
}

function reviewUrl() {
  const pid = cfg.googleReview.placeId;
  if (pid && /^ChIJ/.test(pid)) {
    return `https://search.google.com/local/writereview?placeid=${pid}`;
  }
  if (cfg.googleReview.url) return cfg.googleReview.url;
  throw new Error('Falta googleReview.placeId (ChIJ...) o googleReview.url en config.json');
}

function whatsappUrl() {
  const base = cfg.whatsapp.url.replace(/\?.*$/, '');
  const text = cfg.whatsapp.prefillMessage || 'Hola, quiero consultar por un turno';
  return `${base}?text=${encodeURIComponent(text)}`;
}

function wifiPayload() {
  const w = cfg.wifi;
  return `WIFI:T:${w.security};S:${w.ssid};P:${w.password};;`;
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function buildStyledSvg(data, style) {
  const {
    size = 900,
    marginModules = 2,
    gradient = null,
    color = '#000000',
    bg = '#ffffff',
    logo = false,
    logoPad = 0.14,
    cornerColor = null,
  } = style;

  const qr = QR.create(data, { errorCorrectionLevel: 'H' });
  const modules = qr.modules;
  const n = modules.size;
  const cell = size / (n + marginModules * 2);
  const offset = marginModules * cell;
  const r = cell * 0.35;

  const isFinder = (x, y) => {
    const inTL = x < 7 && y < 7;
    const inTR = x >= n - 7 && y < 7;
    const inBL = x < 7 && y >= n - 7;
    return inTL || inTR || inBL;
  };

  const logoModules = logo ? Math.ceil(n * logoPad) : 0;
  const mid = (n - 1) / 2;
  const inLogoZone = (x, y) => {
    if (!logo) return false;
    return Math.abs(x - mid) <= logoModules / 2 && Math.abs(y - mid) <= logoModules / 2;
  };

  let dots = '';
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (!modules.get(x, y)) continue;
      if (inLogoZone(x, y)) continue;
      if (isFinder(x, y)) continue;
      const px = offset + x * cell;
      const py = offset + y * cell;
      dots += `<rect x="${px.toFixed(2)}" y="${py.toFixed(2)}" width="${cell.toFixed(2)}" height="${cell.toFixed(2)}" rx="${r.toFixed(2)}" ry="${r.toFixed(2)}" fill="url(#fg)"/>`;
    }
  }

  const eyeColor = cornerColor || (gradient ? 'url(#fg)' : color);
  function drawEyeFilled(ox, oy) {
    const x0 = offset + ox * cell;
    const y0 = offset + oy * cell;
    const s7 = 7 * cell;
    const s3 = 3 * cell;
    const pad = 2 * cell;
    const ro = cell * 1.35;
    const ri = cell * 0.85;
    const hole = cell * 1.05;
    const holeSize = s7 - hole * 2;
    return `
      <rect x="${x0.toFixed(2)}" y="${y0.toFixed(2)}" width="${s7.toFixed(2)}" height="${s7.toFixed(2)}" rx="${ro.toFixed(2)}" ry="${ro.toFixed(2)}" fill="${eyeColor}"/>
      <rect x="${(x0 + hole).toFixed(2)}" y="${(y0 + hole).toFixed(2)}" width="${holeSize.toFixed(2)}" height="${holeSize.toFixed(2)}" rx="${(ro * 0.65).toFixed(2)}" ry="${(ro * 0.65).toFixed(2)}" fill="${bg}"/>
      <rect x="${(x0 + pad).toFixed(2)}" y="${(y0 + pad).toFixed(2)}" width="${s3.toFixed(2)}" height="${s3.toFixed(2)}" rx="${ri.toFixed(2)}" ry="${ri.toFixed(2)}" fill="${eyeColor}"/>
    `;
  }

  let gradientDef = '';
  if (gradient && gradient.length) {
    const stops = gradient
      .map((s) => `<stop offset="${s.offset}" stop-color="${esc(s.color)}"/>`)
      .join('');
    gradientDef = `<linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%">${stops}</linearGradient>`;
  } else {
    gradientDef = `<linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${esc(color)}"/><stop offset="100%" stop-color="${esc(color)}"/></linearGradient>`;
  }

  const logoSize = size * 0.22;
  const logoX = (size - logoSize) / 2;
  const logoY = (size - logoSize) / 2;
  const logoSvg = logo
    ? `<rect x="${logoX - 8}" y="${logoY - 8}" width="${logoSize + 16}" height="${logoSize + 16}" rx="18" ry="18" fill="${bg}"/>
       <image href="${logoDataUrl}" x="${logoX}" y="${logoY}" width="${logoSize}" height="${logoSize}" preserveAspectRatio="xMidYMid meet"/>`
    : '';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>${gradientDef}</defs>
  <rect width="${size}" height="${size}" fill="${bg}"/>
  ${drawEyeFilled(0, 0)}
  ${drawEyeFilled(n - 7, 0)}
  ${drawEyeFilled(0, n - 7)}
  ${dots}
  ${logoSvg}
</svg>`;
}

async function svgToPng(browser, svg, outPath, size = 900) {
  const page = await browser.newPage();
  await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
  const html = `<!DOCTYPE html><html><body style="margin:0;background:#fff">${svg.replace(/^<\?xml[^>]*>/, '')}</body></html>`;
  await page.setContent(html, { waitUntil: 'load' });
  const el = await page.$('svg');
  await el.screenshot({ path: outPath, omitBackground: false });
  await page.close();
}

/** Mantiene wifi.html alineado con config.json (evita QR vs texto distintos). */
function syncWifiHtml() {
  const wifiPath = path.join(root, 'wifi.html');
  let html = fs.readFileSync(wifiPath, 'utf8');
  const banner = cfg.wifi.placeholder
    ? '<div class="placeholder-banner">Clave placeholder</div>'
    : '';

  html = html.replace(
    /<div class="placeholder-banner">[\s\S]*?<\/div>\s*/,
    banner ? `${banner}\n    ` : ''
  );
  if (cfg.wifi.placeholder && !html.includes('placeholder-banner')) {
    html = html.replace(
      '<article class="card" data-card="wifi">',
      `<article class="card" data-card="wifi">\n    ${banner}`
    );
  }
  if (!cfg.wifi.placeholder) {
    html = html.replace(/<div class="placeholder-banner">[\s\S]*?<\/div>\s*/g, '');
  }

  html = html.replace(
    /(<div class="label">Red<\/div>\s*<div class="value">)[^<]*(<\/div>)/,
    `$1${cfg.wifi.ssid}$2`
  );
  html = html.replace(
    /(<div class="label">Contraseña<\/div>\s*<div class="value">)[^<]*(<\/div>)/,
    `$1${cfg.wifi.password}$2`
  );

  const prev = fs.readFileSync(wifiPath, 'utf8');
  // Re-read after transforms started from same file — compare final
  if (html !== prev) {
    fs.writeFileSync(wifiPath, html);
    console.log('✓ wifi.html sincronizado con config.json');
  }
}

const IG_GRADIENT = [
  { offset: '0%', color: '#FEDA75' },
  { offset: '25%', color: '#FA7E1E' },
  { offset: '50%', color: '#D62976' },
  { offset: '75%', color: '#962FBF' },
  { offset: '100%', color: '#4F5BD5' },
];

(async () => {
  if (!fs.existsSync(assets)) fs.mkdirSync(assets, { recursive: true });
  syncWifiHtml();

  const jobs = [
    {
      file: 'qr-instagram.png',
      data: cfg.instagram.url,
      style: { gradient: IG_GRADIENT, logo: true, logoPad: 0.16 },
    },
    {
      file: 'qr-google.png',
      data: reviewUrl(),
      style: { color: '#1a73e8', logo: true, logoPad: 0.16 },
    },
    {
      file: 'qr-whatsapp.png',
      data: whatsappUrl(),
      style: { color: '#25D366', logo: true, logoPad: 0.16 },
    },
    {
      file: 'qr-wifi.png',
      data: wifiPayload(),
      style: { color: '#112233', logo: false },
    },
  ];

  const sources = [configPath, logoPath];
  const pending = jobs.filter((job) => {
    const out = path.join(assets, job.file);
    if (isUpToDate(out, sources)) {
      console.log(`⏩ Saltando ${job.file} (ya existe y está actualizado).`);
      return false;
    }
    return true;
  });

  if (pending.length === 0) {
    console.log('QRs al día. Nada que regenerar.');
    return;
  }

  const systemChrome = ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser']
    .find((c) => fs.existsSync(c));
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    ...(systemChrome ? { executablePath: systemChrome } : {}),
  });

  for (const job of pending) {
    const svg = buildStyledSvg(job.data, job.style);
    const svgPath = path.join(assets, job.file.replace(/\.png$/, '.svg'));
    fs.writeFileSync(svgPath, svg);
    await svgToPng(browser, svg, path.join(assets, job.file));
    console.log('✓', job.file, '←', job.data.slice(0, 70) + (job.data.length > 70 ? '…' : ''));
  }

  await browser.close();

  const resolved = {
    googleReviewUrl: reviewUrl(),
    whatsappUrl: whatsappUrl(),
    googleNeedsPlaceId: !(cfg.googleReview.placeId && /^ChIJ/.test(cfg.googleReview.placeId)),
  };
  fs.writeFileSync(path.join(root, 'resolved-urls.json'), JSON.stringify(resolved, null, 2));

  console.log('QRs regenerados.');
  if (resolved.googleNeedsPlaceId) {
    console.log('⚠ Google: todavía falta placeId real en config.json (ver README).');
  }
  if (cfg.wifi.placeholder) {
    console.log('⚠ WiFi sigue con placeholder.');
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
