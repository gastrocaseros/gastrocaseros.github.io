const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('🎥 Iniciando exportación de historias animadas en MP4...');
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  const stories = [
    'story1', 'story2', 'story3', 'story4',
    'story5_1', 'story5_2',
    'story6_1', 'story6_2', 'story6_3',
    'story7_1', 'story7_2', 'story7_3', 'story7_4'
  ];

  const exportDir = path.join(__dirname, 'exports_video');
  if (!fs.existsSync(exportDir)) fs.mkdirSync(exportDir);

  for (const name of stories) {
    const sourcePath = path.join(__dirname, name + '.html');
    const destPath = path.join(exportDir, `${name}.mp4`);

    // Verificación de fecha para exportación incremental
    if (fs.existsSync(destPath)) {
        const sourceStat = fs.statSync(sourcePath);
        const destStat = fs.statSync(destPath);
        
        if (destStat.mtime > sourceStat.mtime) {
            console.log(`⏩ Saltando ${name}.mp4 (ya existe y está actualizado).`);
            continue;
        }
    }

    console.log(`⏳ Grabando ${name}.mp4... (esto demora un poquito)`);
    await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 2 });
    const filePath = `file://${sourcePath}`;
    
    try {
        await page.goto(filePath, { waitUntil: 'networkidle0' });
        
        // 1. Bloqueamos las animaciones inyectando una clase en el body
        await page.addStyleTag({ content: 'body.no-anim * { animation: none !important; }' });
        await page.evaluate(() => document.body.classList.add('no-anim'));
        
        const Config = {
          fps: 30,
          videoFrame: { width: 1080, height: 1920 },
          aspectRatio: '9:16',
        };
        
        const recorder = new PuppeteerScreenRecorder(page, Config);
        
        await recorder.start(destPath);
        
        // 2. Le damos medio segundo al grabador para estabilizarse
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // 3. ¡Liberamos las animaciones y forzamos el repintado!
        // En modo headless, Chrome congela el video si solo hay animaciones CSS. 
        // Modificando el DOM a 60fps forzamos a que grabe todos los cuadros.
        await page.evaluate(() => {
            document.body.classList.remove('no-anim');
            
            const ticker = document.createElement('div');
            ticker.style.position = 'absolute';
            ticker.style.opacity = '0.01';
            document.body.appendChild(ticker);
            let frame = 0;
            setInterval(() => { ticker.innerText = frame++; }, 16);
        });
        
        // Grabamos exactamente 6 segundos
        await new Promise(resolve => setTimeout(resolve, 6000));
        
        await recorder.stop();
        console.log(`✅ ${name}.mp4 generado con éxito.`);
    } catch (err) {
        console.error(`❌ Error en ${name}:`, err.message);
    }
  }

  await browser.close();
  console.log('✨ Grabación finalizada. Podés ver los videos en ig_posts/exports_video/');
})();
