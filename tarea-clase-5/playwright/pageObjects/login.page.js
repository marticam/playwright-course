class LoginPage {
    constructor(page) {
        this.page = page; 
    }
    get inputUser() {
        return this.page.locator('#email')
    }

    get inputPassword() {
        return this.page.locator('#password')
    } 

    get btnLogin() {
        return this.page.getByRole('button', { name: 'Ingresar' })
    }

    get lblTitle() {
       return  this.page.getByRole('link', { name: 'Curso Playwright' })
    }

    get lblClasesList() {
       return  this.page.getByRole('link', { name: 'Lista de Clases' })
    }

    get btnLogOut() {
       return  this.page.getByText('Cerrar sesión')
    }

    get alertError(){
        return  this.page.getByText('Usuario o contraseña invalido!')
    }
    
    async login(user, password) {
        await this.inputUser.fill(user)
        await this.inputPassword.fill(password)
        await this.btnLogin.click()
    }

    async logOut() {
        await this.btnLogOut.click()
    }
}

module.exports = LoginPage; 