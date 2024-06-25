const { test, expect } = require('@playwright/test');
const { USER_NAME, PASSWORD } = process.env;
const LoginPage = require('../pageObjects/login.page.js')
const UploadHomework = require('../pageObjects/uploadHomework.page.js')

test.describe('Login', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test.only('Homework Class 4 upload', async ({ page }) => {
        const loginPage = new LoginPage(page)
        const uploadHomeworkPage = new UploadHomework(page)
        await loginPage.login(USER_NAME, PASSWORD)
        await expect(loginPage.btnLogOut).toBeVisible()
        await uploadHomeworkPage.openClass('Curso de Playwright - Clase #4 - Framework de Playwright set up inicial')
        await uploadHomeworkPage.fillHomework('')
        await uploadHomeworkPage.fillHomework('www.google.com')
        await uploadHomeworkPage.uploadHomework()
        await expect(uploadHomeworkPage.alertUploaded).toContainText('Tarea subida con exito!')
    })
})