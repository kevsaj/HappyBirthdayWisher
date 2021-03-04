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

    // const name = await page.keyboard.down('Control'['C']);

    // The Secret Sauce:

    const elementHandles = await page.$$('a');
    const propertyJsHandles = await Promise.all(
        elementHandles.map(handle => handle.getProperty('href'))
    );
    const hrefs2 = await Promise.all(
        propertyJsHandles.map(handle => handle.jsonValue())
    );

    console.log(hrefs2[51]);

    let a = hrefs2[51];
    let b = a.split('.')[2];
    let c = b.split('/')[1];
    const d = c.charAt(0).toUpperCase() + c.slice(1)

    console.log(d);

    await page.mouse.click(363, 59);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.type(`Happy Birthday ${d}!!`);
    // await page.keyboard.press('Enter');

    console.log(hrefs2[54]);

    let e = hrefs2[54];
    let f = e.split('.')[2];
    let g = f.split('/')[1];
    const h = g.charAt(0).toUpperCase() + g.slice(1)

    console.log(h);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.type(`Happy Birthday ${h}!!`);
    // await page.keyboard.press('Enter');

    console.log(hrefs2[57]);

    let i = hrefs2[57];
    let j = i.split('.')[2];
    let k = j.split('/')[1];
    const l = k.charAt(0).toUpperCase() + k.slice(1)

    console.log(l);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.type(`Happy Birthday ${l}!!`);
    // await page.keyboard.press('Enter');

    console.log(hrefs2[60]);

    let m = hrefs2[60];
    let n = m.split('.')[2];
    let o = n.split('/')[1];
    const p = o.charAt(0).toUpperCase() + o.slice(1)

    console.log(p);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.type(`Happy Birthday ${p}!!`);
    // await page.keyboard.press('Enter');


    // await page.waitForNavigation({ waitUntil: 'networkidle0' });
    // await page.waitForTimeout(5000);

    await browser.waitForTarget(() => false);
    await browser.close();
})();