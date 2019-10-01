/// <reference types="Cypress" />

describe('Network', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearLocalStorage().then((ls) => {
            expect(ls.getItem('myUser')).to.be.null
        });
    });

    it('should authenticate with the api', () => {
        cy.fixture('login').then((user) => {
            cy.request('POST', Cypress.env('API_URL') + '/login', user)
            .then((xhr) => {
                expect(xhr.body).not.empty;
                expect(xhr.body.token).not.empty;
                localStorage.setItem('myUser', xhr.body);
                cy.visit('/magic');
            })
        });
    });
})