/// <reference types="Cypress" />

describe('Complete Test', () => {

    beforeEach(() => {
        cy.visit('/');
    });


    it('should be enable to login', () => {
        // Server 
        cy.server().route('POST', '/login').as('postLogin');

        cy.clearLocalStorage().then((ls) => {
            expect(ls.getItem('myUser')).to.be.null
        });

        cy.get('.Login-username').type('admin');
        cy.get('.Login-password').type('123456');
        cy.get('.Login-submit').click();
        cy.wait('@postLogin').its('status').should('be', 200);
        cy.url().should('include', '/magic').then(() => {
            expect(localStorage.getItem('myUser')).not.empty;
            cy.log(localStorage.getItem('myUser'));
        });
            
    });

})
