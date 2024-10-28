class loginPage{
    static openUrl(){
        cy.log(`Testes rodando no ambiente: ${Cypress.env('environment')}`)
        cy.visit(Cypress.env('urlSite'))
    }

    static typeValidCredential(){
        cy.getById("user-name").type("standard_user")
        cy.getById("password").type("secret_sauce")
        cy.getById("login-button").click()
    }

    static typeInvalidCredential(){
        cy.getById("user-name").type("wrong_user")
        cy.getById("password").type("wrong_pass")
        cy.getById("login-button").click()
    }
    
    static typeOnlyUsername(){
        cy.getById("user-name").type("standard_user")
        cy.getById("login-button").click()
    }

    static typeOnlyPassword(){
        cy.getById("password").type("secret_sauce")
        cy.getById("login-button").click()
    }

    static checkInformationText(text){
        cy.contains(`${text}`).should('be.visible')
    }
}

export default loginPage