/// <reference types ="Cypress"/>
describe('login', () => {
    

    it('To add all items to the card ', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        let myArray = cy.get('div#inventory_container').find('.btn')

        for(let i = 0 ; i<myArray.length() ; i++){
            myArray[i].click()
        }
        });
});