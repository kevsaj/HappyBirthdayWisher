const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://facebook.com');
  // await page.screenshot({ path: 'example.png' });
  await browser.waitForTarget(() => false);
  await browser.close();
})();