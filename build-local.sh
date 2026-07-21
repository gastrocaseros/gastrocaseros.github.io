#!/bin/bash
# build.sh — Script canónico de build usado tanto en LOCAL como en CI/CD (GitHub Actions)
# LOCAL: nvm use && npm ci && npm run build
# CI:    npm ci && npm run build (via deploy.yml)

set -e  # Para inmediatamente si cualquier comando falla

HTML_MIN="./node_modules/.bin/html-minifier-terser"
CSS_MIN="./node_modules/.bin/cleancss"

HTML_MIN_FLAGS=(
  --collapse-whitespace
  --remove-comments
  --remove-optional-tags
  --remove-redundant-attributes
  --remove-script-type-attributes
  --remove-tag-whitespace
  --use-short-doctype
)

echo ""
echo "============================================"
echo "  GastroCaseros — Build $(date '+%Y-%m-%d %H:%M')"
echo "============================================"
echo ""

# 1. Crear carpeta dist/ limpia
echo "📁 [1/4] Preparando carpeta dist/..."
rm -rf dist
mkdir -p dist/css dist/img

cp -r img/* dist/img/ 2>/dev/null   || echo "  ↳ /img vacía o inexistente (ok)"
cp logo.png    dist/              2>/dev/null   || echo "  ↳ logo.png no encontrado (ok)"
cp robots.txt  dist/              2>/dev/null   || echo "  ↳ robots.txt no encontrado (ok)"
cp sitemap.xml dist/              2>/dev/null   || echo "  ↳ sitemap.xml no encontrado (ok)"
# SVGs en raíz (si existen)
for svg in *.svg; do [ -f "$svg" ] && cp "$svg" dist/; done 2>/dev/null || true

echo "  ✅ Archivos estáticos copiados"

# 2. Minificar HTML (SIN minify-js para proteger funciones inline como toggleMenu)
echo ""
echo "🗜️  [2/4] Minificando HTML..."
HTML_SOURCES=()
for src in *.html; do
  [ -f "$src" ] || continue
  HTML_SOURCES+=("$src")
  $HTML_MIN "$src" "${HTML_MIN_FLAGS[@]}" --output "dist/$src"
  echo "  ✅ dist/$src"
done

if [ ${#HTML_SOURCES[@]} -eq 0 ]; then
  echo "  ❌ ERROR: No hay archivos *.html en la raíz del proyecto."
  exit 1
fi

ORIGINAL_HTML=$(wc -c < index.html)
MIN_HTML=$(wc -c < dist/index.html)
PERCENT_HTML=$(( (ORIGINAL_HTML - MIN_HTML) * 100 / ORIGINAL_HTML ))
echo "  ✅ index.html: ${ORIGINAL_HTML} bytes → ${MIN_HTML} bytes (−${PERCENT_HTML}% comprimido)"
echo "  📄 Preview (primeros 120 chars del HTML minificado):"
cut -c1-120 dist/index.html | cat

# 3. Minificar CSS e inyectar hash de cache-busting
echo ""
echo "🎨 [3/4] Minificando CSS..."
HASH=$(date +%Y%m%d%H%M)
$CSS_MIN -o dist/css/style.min.css css/style.css

ORIGINAL_CSS=$(wc -c < css/style.css)
MIN_CSS=$(wc -c < dist/css/style.min.css)
PERCENT_CSS=$(( (ORIGINAL_CSS - MIN_CSS) * 100 / ORIGINAL_CSS ))
echo "  ✅ CSS: ${ORIGINAL_CSS} bytes → ${MIN_CSS} bytes (−${PERCENT_CSS}% comprimido)"
echo "  📄 Preview (primeros 120 chars del CSS minificado):"
cut -c1-120 dist/css/style.min.css | cat

# Reemplaza la referencia al CSS en todo el HTML minificado
sed -i "s|css/style.css?v=[0-9]*|css/style.min.css?v=${HASH}|g" dist/*.html
echo "  ✅ Cache-busting hash: ${HASH}"

# 4. Verificar integridad del output
echo ""
echo "🔍 [4/4] Verificando integridad..."

VERIFY_OK=true
for src in "${HTML_SOURCES[@]}"; do
  if [ ! -f "dist/$src" ]; then
    echo "  ❌ ERROR: Falta dist/$src"
    VERIFY_OK=false
    continue
  fi
  if grep -q "style.min.css?v=${HASH}" "dist/$src"; then
    echo "  ✅ Link CSS correcto en dist/$src"
  else
    echo "  ❌ ERROR: El link del CSS no fue actualizado en dist/$src"
    echo "     Revisá que $src tenga el patrón: css/style.css?v=XXXXXXXX"
    VERIFY_OK=false
  fi
  if grep -qE 'rel="canonical" href="https://gastrocaseros.com.ar|rel="canonical"href="https://gastrocaseros.com.ar' "dist/$src"; then
    echo "  ✅ Canonical presente en dist/$src"
  else
    echo "  ❌ ERROR: Falta link rel=canonical con URL absoluta en dist/$src"
    VERIFY_OK=false
  fi
  if grep -qE 'property="og:image" content="https://gastrocaseros.com.ar/logo.png"|property="og:image"content="https://gastrocaseros.com.ar/logo.png"' "dist/$src"; then
    echo "  ✅ og:image absoluto en dist/$src"
  else
    echo "  ❌ ERROR: og:image debe ser https://gastrocaseros.com.ar/logo.png en dist/$src"
    VERIFY_OK=false
  fi
done

if [ ! -f dist/css/style.min.css ]; then
  echo "  ❌ ERROR: Falta dist/css/style.min.css"
  VERIFY_OK=false
fi

if [ "$VERIFY_OK" = false ]; then
  exit 1
fi

echo "  ✅ Archivos de output presentes"

echo ""
echo "============================================"
echo "  ✅ Build exitoso → carpeta dist/"
echo "  Para servir localmente:"
echo "  npx serve dist"
echo "============================================"
echo ""
