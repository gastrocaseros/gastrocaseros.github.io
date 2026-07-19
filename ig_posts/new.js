const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const TEMPLATES = path.join(ROOT, 'templates');
const MOCKUP = path.join(ROOT, 'mockup.html');
const EXPORT_JS = path.join(ROOT, 'export.js');
const VIDEO_JS = path.join(ROOT, 'export_video.js');

const FAMILY_MAP = {
  feed: {
    hook: 'feed-hook.html',
    edu: 'feed-edu.html',
    'cta-turno': 'feed-cta.html',
  },
  story: {
    info: 'story-info.html',
    'story-info': 'story-info.html',
    cta: 'story-cta.html',
    'story-cta': 'story-cta.html',
    sticker: 'story-sticker.html',
    'story-sticker': 'story-sticker.html',
  },
  efemeride: {
    medica: 'efemeride-medica.html',
    'ef-medica': 'efemeride-medica.html',
    patriotica: 'efemeride-patriotica.html',
    'ef-patriotica': 'efemeride-patriotica.html',
  },
};

const EF_MEDICA_ROLES = {
  1: 'efemeride-medica-hook.html',
  2: 'efemeride-medica-facts.html',
  3: 'efemeride-medica-cta.html',
};

function usage(exitCode = 0) {
  console.log(`
Crear una pieza de Instagram desde una familia reutilizable.

Uso:
  npm run ig:new -- --type feed --family edu --name post_tema_s1
  npm run ig:new -- --type story --family story-cta --name story_tema
  npm run ig:new -- --type efemeride --family ef-medica --date 08_17 --slides 3

Opciones:
  --title "Título interno"    Título del documento y del mockup
  --label "Etiqueta"          Etiqueta breve para la navegación
  --dry-run                   Valida e informa sin escribir archivos
  --help                      Muestra esta ayuda

Familias:
  feed: hook, edu, cta-turno
  story: story-info, story-cta, story-sticker
  efemeride: ef-medica, ef-patriotica
`);
  process.exit(exitCode);
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith('--')) {
      throw new Error(`Argumento inesperado: ${token}`);
    }
    const key = token.slice(2);
    if (key === 'dry-run' || key === 'help') {
      args[key] = true;
      continue;
    }
    const value = argv[i + 1];
    if (!value || value.startsWith('--')) {
      throw new Error(`Falta el valor de --${key}`);
    }
    args[key] = value;
    i += 1;
  }
  return args;
}

function assertMarker(content, marker, file) {
  if (!content.includes(marker)) {
    throw new Error(`No se encontró ${marker} en ${file}`);
  }
}

function insertBeforeMarker(content, marker, line) {
  const markerIndex = content.indexOf(marker);
  const lineStart = content.lastIndexOf('\n', markerIndex) + 1;
  const indentation = content.slice(lineStart, markerIndex);
  if (markerIndex === -1 || !/^\s*$/.test(indentation)) {
    throw new Error(`El marcador ${marker} debe estar solo en su línea.`);
  }
  return `${content.slice(0, lineStart)}${line}\n${indentation}${content.slice(markerIndex)}`;
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function humanize(value) {
  return value
    .replace(/^(post|story)_/, '')
    .replace(/^efemeride_/, '')
    .replace(/_s\d+$/, '')
    .replaceAll('_', ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function renderTemplate(template, values) {
  return template.replace(/\{\{([A-Z_]+)\}\}/g, (_, key) => values[key] ?? `{{${key}}}`);
}

function validateName(type, name) {
  const prefix = type === 'feed' ? 'post_' : 'story_';
  const pattern = type === 'feed'
    ? /^post_[a-z0-9]+(?:_[a-z0-9]+)*(?:_s\d+)?$/
    : /^story_[a-z0-9]+(?:_[a-z0-9]+)*$/;

  if (!name || !pattern.test(name)) {
    throw new Error(`--name debe usar el formato ${prefix}tema, solo con minúsculas, números y guiones bajos.`);
  }
}

function buildPieces(args) {
  const type = args.type;
  if (!FAMILY_MAP[type]) {
    throw new Error('--type debe ser feed, story o efemeride.');
  }

  const family = args.family || (type === 'feed' ? 'edu' : type === 'story' ? 'story-info' : 'ef-medica');
  const templateFile = FAMILY_MAP[type][family];
  if (!templateFile) {
    throw new Error(`Familia "${family}" inválida para ${type}. Ejecutá --help para ver las disponibles.`);
  }

  const isMedica = type === 'efemeride' && (family === 'medica' || family === 'ef-medica');

  if (type === 'efemeride') {
    if (!/^\d{2}_\d{2}$/.test(args.date || '')) {
      throw new Error('--date debe tener formato MM_DD.');
    }
    const slides = Number(args.slides || (isMedica ? 3 : 2));
    if (!Number.isInteger(slides) || slides < 1 || slides > 3) {
      throw new Error('--slides debe ser un entero entre 1 y 3.');
    }
    return Array.from({ length: slides }, (_, index) => {
      const slide = index + 1;
      const name = `efemeride_${args.date}_s${slide}`;
      const label = args.label || humanize(`efemeride_${args.date}`);
      const roleFile = isMedica
        ? (EF_MEDICA_ROLES[slide] || (slide === slides ? EF_MEDICA_ROLES[3] : templateFile))
        : templateFile;
      const template = fs.readFileSync(path.join(TEMPLATES, roleFile), 'utf8');
      return {
        type,
        name,
        key: `ef_${args.date}_s${slide}`,
        label: `${label} S${slide}`,
        html: renderTemplate(template, {
          TITLE: escapeHtml(args.title || `${label} — Slide ${slide}`),
          SUBTITLE: escapeHtml(label),
          HEADLINE: 'Título del slide',
          LEAD: 'Una pregunta o dato que invite a deslizar',
          BODY: 'Contenido breve y verificable.',
          FACT_1: 'Dato clave 1',
          FACT_2: 'Dato clave 2',
          FACT_3: 'Dato clave 3',
          CTA_SOFT: 'Consultá con tu especialista. El diagnóstico a tiempo marca la diferencia. 🩺',
          SLIDE_NUMBER: String(slide),
          SLIDE_TOTAL: String(slides),
        }),
      };
    });
  }

  const template = fs.readFileSync(path.join(TEMPLATES, templateFile), 'utf8');

  validateName(type, args.name);
  const label = args.label || humanize(args.name);
  const isCarousel = type === 'feed' && /_s\d+$/.test(args.name);
  return [{
    type,
    name: args.name,
    key: args.name.replace(/^(post|story)_/, ''),
    label,
    html: renderTemplate(template, {
      TITLE: escapeHtml(args.title || label),
      SUBTITLE: type === 'story' ? 'GastroCaseros' : 'Salud digestiva',
      HEADLINE: 'Título principal',
      BODY: 'Contenido breve, claro y cálido.',
      FOOTER: isCarousel ? 'Deslizá para saber más 👉' : '🌐 gastrocaseros.com.ar',
      BADGE: 'Información',
      CTA_EYEBROW: 'Turnos disponibles',
      CTA_TITLE: 'Test de Aire Espirado',
    }),
  }];
}

function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
    if (args.help) usage();

    const pieces = buildPieces(args);
    const targets = pieces.map((piece) => path.join(ROOT, `${piece.name}.html`));
    const existing = targets.filter((target) => fs.existsSync(target));
    if (existing.length) {
      throw new Error(`Ya existen: ${existing.map((file) => path.basename(file)).join(', ')}`);
    }

    let exportJs = fs.readFileSync(EXPORT_JS, 'utf8');
    let videoJs = fs.readFileSync(VIDEO_JS, 'utf8');
    let mockup = fs.readFileSync(MOCKUP, 'utf8');

    assertMarker(exportJs, '// IG_NEW_EXPORT', 'ig_posts/export.js');
    assertMarker(videoJs, '// IG_NEW_VIDEO', 'ig_posts/export_video.js');
    assertMarker(mockup, '<!-- IG_NEW_FEED_NAV -->', 'ig_posts/mockup.html');
    assertMarker(mockup, '<!-- IG_NEW_STORY_NAV -->', 'ig_posts/mockup.html');
    assertMarker(mockup, '<!-- IG_NEW_EFEMERIDE_NAV -->', 'ig_posts/mockup.html');
    assertMarker(mockup, '// IG_NEW_POST_DATA', 'ig_posts/mockup.html');
    assertMarker(mockup, '// IG_NEW_STORY_DATA', 'ig_posts/mockup.html');

    for (const piece of pieces) {
      if (exportJs.includes(`name: '${piece.name}'`) || mockup.includes(`"${piece.key}":`)) {
        throw new Error(`${piece.name} ya está registrado.`);
      }

      const exportType = piece.type === 'story' ? 'story' : 'feed';
      exportJs = insertBeforeMarker(
        exportJs,
        '// IG_NEW_EXPORT',
        `    { name: '${piece.name}', type: '${exportType}' },`
      );

      if (piece.type === 'story') {
        videoJs = insertBeforeMarker(videoJs, '// IG_NEW_VIDEO', `    '${piece.name}',`);
        mockup = insertBeforeMarker(
          mockup,
          '<!-- IG_NEW_STORY_NAV -->',
          `            <div class="nav-item" onclick="showStory('${piece.key}')">${escapeHtml(piece.label)} <span>Story</span></div>`
        );
        mockup = insertBeforeMarker(
          mockup,
          '// IG_NEW_STORY_DATA',
          `            "${piece.key}": { src: "${piece.name}.html" },`
        );
      } else {
        const navMarker = piece.type === 'efemeride'
          ? '<!-- IG_NEW_EFEMERIDE_NAV -->'
          : '<!-- IG_NEW_FEED_NAV -->';
        const navType = piece.type === 'efemeride' ? 'Carrusel' : 'Feed';
        mockup = insertBeforeMarker(
          mockup,
          navMarker,
          `            <div class="nav-item" onclick="showPost('${piece.key}')">${escapeHtml(piece.label)} <span>${navType}</span></div>`
        );
        mockup = insertBeforeMarker(
          mockup,
          '// IG_NEW_POST_DATA',
          `        "${piece.key}": { img: "${piece.name}.html", isLive: true, likes: 0, caption: "Caption pendiente de aprobación" },`
        );
      }
    }

    console.log(`Piezas a crear: ${pieces.map((piece) => piece.name).join(', ')}`);
    if (args['dry-run']) {
      console.log('Dry run correcto: no se escribieron archivos.');
      return;
    }

    pieces.forEach((piece, index) => fs.writeFileSync(targets[index], piece.html));
    fs.writeFileSync(EXPORT_JS, exportJs);
    fs.writeFileSync(VIDEO_JS, videoJs);
    fs.writeFileSync(MOCKUP, mockup);
    console.log('Listo: HTML, exportadores y mockup quedaron registrados.');
    console.log('Siguiente paso: completar el contenido y revisar ig_posts/mockup.html.');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();
