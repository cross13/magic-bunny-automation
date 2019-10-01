/// <reference types="Cypress" />

describe('Magic Act', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.login('admin', '123456');
    });

    it('should have a hat', () => {
        cy.get('.Magic-hat').should('be.visible');
    });

    it('will do magic and pop up bunnies', () => {
        cy.get('.Login-logo')
            .click()
            .click()
            .click();
        cy.get('[data-cy=bunny-house]').children().each((bunny) => {
            debugger;
            cy.log(bunny);
        });
    })

});
