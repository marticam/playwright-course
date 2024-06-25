class UploadHomeworkPage {
    constructor(page) {
        this.page = page; 
    }
    get anchorClass4() {
        return this.page.locator('li')
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
    
    async openClass(text) {
        await this.anchorClass4.filter({hasText:`${text}`}).click()
    }
    async uploadHomework() {
        await this.btnUploadHomework.click()
    }

    async fillHomework(link) {
        await this.inputHomework.fill(link)
    }
}

module.exports = UploadHomeworkPage; 