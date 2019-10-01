/// <reference types="Cypress" />

context('UI', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Should render the correct login page', () => {
        cy.get('.Login-Title').should('have.text', 'Magic App').should('be.visible');
        cy.get('.Login-username').should('have.attr', 'placeholder', 'Username');
        cy.get('.Login-password').should('have.attr', 'placeholder', 'Password');
        cy.get('.Login-submit').should('contain', 'Login');
    });

    it('should allow to type inside the inputs', () => {
        cy.get('.Login-username').type('myuser');
        cy.get('.Login-username').invoke('val').should((text) => {
            expect(text).to.eq('myuser');
        });
        cy.get('.Login-password').type('mypassword');
        cy.get('.Login-password').invoke('val').should((text) => {
            expect(text).to.eq('mypassword');
        });
    });
});