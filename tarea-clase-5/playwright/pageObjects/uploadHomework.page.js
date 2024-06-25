class LoginPage {
    constructor(page) {
        this.page = page; 
    }
    get anchorClass4() {
        return this.page.locator('li').filter({ hasText: 'Curso de Playwright - Clase #4 - Framework de Playwright set up inicial' })
    }

    get btnUploadHomework(){
        return this.page.getByRole('button', { name: 'Subir Tarea' })
    }

    get alertUploaded(){
        return this.page.getByText('Tarea subida con exito!')
    }
    
    get inputHomework(){
        return this.page.locator('#homeworkLink')
    }
    
    async openClass4() {
        await this.anchorClass4.click()
    }
    async uploadHomework() {
        await this.btnUploadHomework.click()
    }

    async fillHomework(link) {
        await this.inputHomework.fill(link)
    }
}

module.exports = LoginPage; 