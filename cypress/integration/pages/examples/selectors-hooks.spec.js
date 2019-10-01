/// <reference types="Cypress" />

describe('Selectors & Hooks', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    // before, beforeEach, after afterEach

    it('be able to select the login title by tag', () => {
        cy.get('h3').then((loginTitle) => {
            debugger;
            expect(loginTitle.text()).to.be.eq('Magic App')
        });
    });

    // with class

    // With id

    // With data-cy


});