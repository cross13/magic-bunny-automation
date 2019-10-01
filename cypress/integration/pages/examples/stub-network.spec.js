/// <reference types="Cypress" />

// By not stubbing your responses, you are writing true end-to-end tests.
// This means you are driving your application the same way a real user would.

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTU2OTg4ODA0NiwiZXhwIjoxNTcwMDE3NjQ2fQ.8PGuI-m0l7y0GvgtEFHTPoINGUJBCw4cLHIEf2wCzzU not to be empty

describe('Stub Network Response', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearLocalStorage().then((ls) => {
            expect(ls.getItem('myUser')).to.be.null
        });
    });

    it('will stub the network login response', () => {
        cy.fixture('stub-token.json').as('userTokenJSON')
        cy.server({delay: 2000});
        cy.route('POST', Cypress.env('API_URL') + '/login', '@userTokenJSON')
            .as('postLogin');
        cy.get('.Login-username').type('admin');
        cy.get('.Login-password').type('123456');
        cy.get('.Login-submit').click();
        cy.wait('@postLogin', {timeout: 5000}).its('status').should('be', 200);
        cy.url().should('include', '/magic').then(() => {
            expect(localStorage.getItem('myUser')).not.empty;
            cy.log(localStorage.getItem('myUser'));
        });
    });

});