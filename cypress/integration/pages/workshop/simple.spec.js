/// <reference types="Cypress" />

describe('My First Simple Test', () => {

    it('should type inside the login form', () => {

        cy.visit('/');
        cy.get('.Login-username')
            .should('have.length', 1)
            .should('be.visible')
            .type('admin')
            .then((inputUsername) => {
                expect(inputUsername.val()).to.be.eq('admin');
            });

        // Encontrar el elemento input username
        // corroborar que sea visible
        // Tipear dentro del elemento el nombre de usuario
        // corroborar que el texto ingresado sea el correcto

    });

});