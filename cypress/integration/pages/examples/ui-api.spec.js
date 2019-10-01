/// <reference types="Cypress" />

context('UI <-> Api', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('should login', () => {
        cy.get('.Login-username').type('admin');
        cy.get('.Login-password').type('123456');
        cy.get('.Login-submit').click();
    });

});