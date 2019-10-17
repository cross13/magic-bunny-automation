/// <reference types="Cypress" />

describe('Selectors & Hooks', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('debugg the title', () => {
        cy.get('h3').then((loginTitle) => {
            console.log(loginTitle);
            cy.log(loginTitle);
            debugger;
            expect(loginTitle.text()).to.be.eq('Magic App')
        });
    });

});