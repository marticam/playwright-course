const {chromium} = require('playwright')
require('dotenv').config()

const arrayOfName = ['Backlog', 'QA', 'Quality', 'Cypress', 'Hot']

async function runTest() {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(process.env.URL)
    await page.locator('#username').fill(process.env.USER_NAME)
    await page.locator('#password').fill(process.env.PASSWORD)
    await page.getByLabel('Sign in', { exact: true }).click()
    await getContentPage(page);
    await browser.close();
}

async function getContentPage(page) {
    await page.waitForSelector('#fie-impression-container');

    // Extract contexts of all elements with the specified id
    const elementsContext = await page.$$eval('#fie-impression-container', elements => {
    return elements.map(element => element.innerText);  // or other property you need
    });

    console.log('this is the total of post ===>', elementsContext.length)

    for (let i = 0; i < elementsContext.length; i++) {
        for (let j = 0; j < arrayOfName.length; j++) {
            if (elementsContext[i].includes(arrayOfName[j])){
                console.log(elementsContext);
            }
        }
    }
}

runTest();