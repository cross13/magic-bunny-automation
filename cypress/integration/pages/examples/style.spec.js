/// <reference types="Cypress" />

context('Style', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('should render the correct style on the inputs', () => {
        // Check Font Size
        // Check Type
        // Check colors
    })

    it('should show the error msg on a failed login with the correct style', () => {
        cy.get('.Login-username').type('fail-user');
        cy.get('.Login-password').type('fail-password');
        cy.get('.Login-submit').click();
        cy.get('.Login-error').contains('Wrong Crendentials');
        cy.get('.Login-error').should('have.css', 'background-color')
            .and('eq', 'rgb(181, 67, 36)');
        cy.get('.Login-error').should('have.css', 'color')
            .and('eq', 'rgb(255, 255, 255)');
    });

});

