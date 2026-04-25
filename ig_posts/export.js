const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('🚀 Iniciando exportación de posts...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const files = [
    { name: 'post1', type: 'feed' }, { name: 'post2', type: 'feed' },
    { name: 'post3', type: 'feed' }, { name: 'post4', type: 'feed' },
    { name: 'post5', type: 'feed' }, { name: 'post6', type: 'feed' },
    { name: 'post7', type: 'feed' }, { name: 'post8', type: 'feed' },
    { name: 'post9', type: 'feed' }, { name: 'post10', type: 'feed' },
    { name: 'story1', type: 'story' }, { name: 'story2', type: 'story' },
    { name: 'story3_1', type: 'story' }, { name: 'story3_2', type: 'story' },
    { name: 'story4_1', type: 'story' }, { name: 'story4_2', type: 'story' }, { name: 'story4_3', type: 'story' }
  ];

  const exportDir = path.join(__dirname, 'exports');
  const previewDir = path.join(__dirname, 'previews');
  if (!fs.existsSync(exportDir)) fs.mkdirSync(exportDir);
  if (!fs.existsSync(previewDir)) fs.mkdirSync(previewDir);

  for (const file of files) {
    const isStory = file.type === 'story';
    
    // Configuración de resolución (2x para calidad 4K/Retina)
    await page.setViewport({
      width: 1080,
      height: isStory ? 1920 : 1080,
      deviceScaleFactor: 2 
    });

    const filePath = `file://${path.join(__dirname, file.name + '.html')}`;
    try {
        await page.goto(filePath, { waitUntil: 'networkidle0' });
        
        // Guardar versión de alta calidad
        await page.screenshot({
          path: path.join(exportDir, `${file.name}.png`),
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
