const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('🚀 Iniciando exportación de posts...');
  const systemChrome = ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser']
    .find(candidate => fs.existsSync(candidate));
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    ...(systemChrome ? { executablePath: systemChrome } : {})
  });
  const page = await browser.newPage();

  
  const files = [
    { name: 'post1', type: 'feed' }, { name: 'post2', type: 'feed' },
    { name: 'post3', type: 'feed' }, 
    { name: 'post4_1', type: 'feed' }, { name: 'post4_2', type: 'feed' }, { name: 'post4_3', type: 'feed' },
    { name: 'post5', type: 'feed' },
    { name: 'post6', type: 'feed' },
    { name: 'post7', type: 'feed' }, { name: 'post8', type: 'feed' },
    { name: 'post9', type: 'feed' }, { name: 'post10', type: 'feed' },
    { name: 'post11', type: 'feed' },
    { name: 'story1', type: 'story' }, { name: 'story2', type: 'story' },
    { name: 'story3', type: 'story' }, { name: 'story4', type: 'story' }, 
    { name: 'story5_1', type: 'story' }, { name: 'story5_2', type: 'story' },
    { name: 'story6_1', type: 'story' }, { name: 'story6_2', type: 'story' }, { name: 'story6_3', type: 'story' },
    { name: 'story7_1', type: 'story' }, { name: 'story7_2', type: 'story' }, { name: 'story7_3', type: 'story' }, { name: 'story7_4', type: 'story' },
    { name: 'efemeride_05_05_s1', type: 'feed' }, { name: 'efemeride_05_05_s2', type: 'feed' }, { name: 'efemeride_05_05_s3', type: 'feed' },
    { name: 'efemeride_05_19_s1', type: 'feed' }, { name: 'efemeride_05_19_s2', type: 'feed' }, { name: 'efemeride_05_19_s3', type: 'feed' }, { name: 'efemeride_05_19_s4', type: 'feed' }, { name: 'efemeride_05_19_s5', type: 'feed' }, { name: 'efemeride_05_19_s6', type: 'feed' },
    { name: 'efemeride_05_25_s1', type: 'feed' }, { name: 'efemeride_05_25_s2', type: 'feed' }, { name: 'efemeride_05_25_s3', type: 'feed' }, { name: 'efemeride_05_25_s4', type: 'feed' }, { name: 'efemeride_05_25_s5', type: 'feed' },
    { name: 'efemeride_05_29_s1', type: 'feed' }, { name: 'efemeride_05_29_s2', type: 'feed' }, { name: 'efemeride_05_29_s3', type: 'feed' }, { name: 'efemeride_05_29_s4', type: 'feed' }, { name: 'efemeride_05_29_s5', type: 'feed' },
    { name: 'efemeride_06_11_s1', type: 'feed' }, { name: 'efemeride_06_11_s2', type: 'feed' }, { name: 'efemeride_06_11_s3', type: 'feed' },
    { name: 'efemeride_06_20_s1', type: 'feed' }, { name: 'efemeride_06_20_s2', type: 'feed' },
    { name: 'post_smithii_s1', type: 'feed' }, { name: 'post_smithii_s2', type: 'feed' }, { name: 'post_smithii_s3', type: 'feed' }, { name: 'post_smithii_s4', type: 'feed' }, { name: 'post_smithii_s5', type: 'feed' },
    { name: 'post_hpylori_s1', type: 'feed' }, { name: 'post_hpylori_s2', type: 'feed' }, { name: 'post_hpylori_s3', type: 'feed' }, { name: 'post_hpylori_s4', type: 'feed' }, { name: 'post_hpylori_s5', type: 'feed' }, { name: 'post_hpylori_s6', type: 'feed' },
    { name: 'efemeride_07_09_s1', type: 'feed' }, { name: 'efemeride_07_09_s2', type: 'feed' },
    { name: 'post_turno_sabado', type: 'feed' },
    { name: 'story_turno_sabado', type: 'story' },
    // IG_NEW_EXPORT
  ];

  const exportDir = path.join(__dirname, 'exports');
  const previewDir = path.join(__dirname, 'previews');
  if (!fs.existsSync(exportDir)) fs.mkdirSync(exportDir);
  if (!fs.existsSync(previewDir)) fs.mkdirSync(previewDir);

  for (const file of files) {
    const isStory = file.type === 'story';
    const sourcePath = path.join(__dirname, file.name + '.html');
    const destPath = path.join(exportDir, `${file.name}.png`);

    // Verificación de fecha para exportación incremental
    if (fs.existsSync(destPath)) {
        const sourceStat = fs.statSync(sourcePath);
        const destStat = fs.statSync(destPath);
        
        if (destStat.mtime > sourceStat.mtime) {
            console.log(`⏩ Saltando ${file.name}.png (ya existe y está actualizado).`);
            continue;
        }
    }
    
    // Configuración de resolución (2x para calidad 4K/Retina)
    await page.setViewport({
      width: 1080,
      height: isStory ? 1920 : 1080,
      deviceScaleFactor: 2 
    });

    const filePath = `file://${sourcePath}`;
    try {
        await page.goto(filePath, { waitUntil: 'networkidle0' });
        
        // Guardar versión de alta calidad
        await page.screenshot({
          path: destPath,
          fullPage: false
        });

        // Guardar versión para el mockup (si no es story, ya que las stories se ven vía iframe)
        if (!isStory) {
            await page.screenshot({
                path: path.join(previewDir, `${file.name}.png`),
                fullPage: false
            });
        }

        console.log(`✅ ${file.name}.png generado.`);
    } catch (err) {
        console.error(`❌ Error en ${file.name}:`, err.message);
    }
  }

  await browser.close();
  console.log('✨ Proceso finalizado. Revisá la carpeta ig_posts/exports/');
})();
