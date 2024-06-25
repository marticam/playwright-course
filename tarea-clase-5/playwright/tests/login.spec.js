const { test, expect } = require('@playwright/test');
const { USER_NAME, PASSWORD } = process.env;
const LoginPage = require('../pageObjects/login.page.js')

test.describe('Login', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test('Positive Login', async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.login(USER_NAME, PASSWORD)
        await expect(loginPage.btnLogOut).toBeVisible()
        await expect(loginPage.lblClasesList).toBeVisible()
        await expect(loginPage.lblTitle).toBeVisible()
    })

    test('Negative Login', async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.login('asdasdas', 'asadasda')
        await expect(loginPage.alertError).toBeVisible()
        await expect(loginPage.alertError).toContainText('Usuario o contraseña invalido!')
    })

    test('Positive Logout', async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.login(USER_NAME, PASSWORD)
        await loginPage.logOut()
        await expect(loginPage.btnLogin).toBeVisible()
    })
})