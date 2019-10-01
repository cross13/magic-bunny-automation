/// <reference types="Cypress" />

describe('Simple test', () => {

    it('Should load the test runner', () => {

        cy.visit('/');
        // Command
        cy.get('div').should('be.visible');

        // Expect
        expect(1 + 2).to.eq(3);

        // Async vs Sync
    });

    it('should check for the correct login title', () => {
        cy.visit('/');

        cy.get('.Login-Title')
            .should('contain', 'Magic App')
            .and('be.visible');
    });


    it('should allow me to complete the inputs', () => {
        cy.visit('/');

        cy.get('.Login-username')
            .type('admin')
            .then((inputUsername) => {
                expect(inputUsername.val()).to.be.eq('admin');
            });

        cy.get('.Login-password')
            .type('password')
            .then((inputPassword) => {
                expect(inputPassword.val()).to.be.eq('password');
            });
    });


})

