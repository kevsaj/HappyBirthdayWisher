'use strict';
require('dotenv').config({
    path: './.env'
})
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50, // slow down by 250ms
        defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto('https://www.facebook.com', {
        waitUntil: 'networkidle2'
    });
    // await page.screenshot({ path: 'example.png' });

    await page.type('#email', process.env.USER);
    await page.type('#pass', process.env.PASS);
    await page.keyboard.press('Enter');

    await page.waitForNavigation({
        waitUntil: 'networkidle0'
    });
    await page.waitForTimeout(1000);

    // await page.keyboard.press('/');
    // await page.type('input[type="search"]', 'birthdays');
    // await page.keyboard.press('Enter');

    await page.goto('https://www.facebook.com/events/birthdays', {
        waitUntil: 'networkidle2'
    });

    // await page.waitForNavigation({ waitUntil: 'networkidle0' });
    await page.waitForTimeout(500);

    await page.keyboard.press('Enter');

    // const element = await select(page).getElement(`span:contains(Today's birthdays)`);
    // await element.click();

    await page.mouse.click(363, 59);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // const name = await page.keyboard.down('Control'['C']);

    const elementHandles = await page.$$('a');
    const propertyJsHandles = await Promise.all(
        elementHandles.map(handle => handle.getProperty('href'))
    );
    const hrefs2 = await Promise.all(
        propertyJsHandles.map(handle => handle.jsonValue())
    );

    console.log(hrefs2[51]);

    console.log(hrefs2[54]);


    // await page.keyboard.press('Tab');
    // await page.keyboard.type('Happy Birthday!!');
    // await page.keyboard.press('Enter');


    // await page.waitForNavigation({ waitUntil: 'networkidle0' });
    // await page.waitForTimeout(5000);

    await browser.waitForTarget(() => false);
    await browser.close();
})();