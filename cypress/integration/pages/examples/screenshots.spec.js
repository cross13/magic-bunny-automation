/// <reference types="Cypress" />

describe('Simple test', () => {

    it('should check for the correct login title', () => {
        cy.visit('/');
        cy.screenshot('login-page');
        cy.get('.Login-Title')
            .should('contain', 'Magic App')
            .and('be.visible').screenshot('login-title');
        
    });

})