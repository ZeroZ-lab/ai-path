const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 980, height: 552 });
  await page.goto('http://localhost:3032/15', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000); // wait for animations
  await page.screenshot({ path: 'slide15.png' });
  await browser.close();
})();
