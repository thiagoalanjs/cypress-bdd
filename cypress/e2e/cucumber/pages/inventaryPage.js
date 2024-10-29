class inventaryPage{
    static addProductCart(){
        cy.contains('Sauce Labs Backpack').click()
        cy.getById('add-to-cart').click()
        cy.getByDataTest('shopping-cart-link').click()
    }

    static finishOrder(){
        cy.getById('checkout').click()
        cy.getById('first-name').type("Andrezza")
        cy.getById('last-name').type("Fronza")
        cy.getById('postal-code').type("05877-230")
        cy.getById('continue').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Total: $32.39').should('be.visible')
        cy.getById('finish').click()
        cy.contains('Thank you for your order!').should('be.visible')
        cy.contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!').should('be.visible')
        cy.getById('back-to-products').should('be.visible')
    }
}

export default inventaryPage