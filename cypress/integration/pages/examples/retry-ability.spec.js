/// <reference types="Cypress" />

describe('Retry Ability', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('should find the correct element before the timeout', () => {
        cy.get('.Login-submit').click();
        cy.get('.Login-error', {
            timeout: 2000
        }).should('contain', 'Wrong Crendentials');
    })

});