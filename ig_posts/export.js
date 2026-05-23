const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('🚀 Iniciando exportación de posts...');
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
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
    { name: 'efemeride_05_05_s1', type: 'feed' }, { name: 'efemeride_05_05_s2', type: 'feed' }, { name: 'efemeride_05_05_s3', type: 'feed' },
    { name: 'efemeride_05_19_s1', type: 'feed' }, { name: 'efemeride_05_19_s2', type: 'feed' }, { name: 'efemeride_05_19_s3', type: 'feed' }, { name: 'efemeride_05_19_s4', type: 'feed' }, { name: 'efemeride_05_19_s5', type: 'feed' }, { name: 'efemeride_05_19_s6', type: 'feed' },
    { name: 'efemeride_05_25_s1', type: 'feed' }, { name: 'efemeride_05_25_s2', type: 'feed' }, { name: 'efemeride_05_25_s3', type: 'feed' }, { name: 'efemeride_05_25_s4', type: 'feed' }, { name: 'efemeride_05_25_s5', type: 'feed' }
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
