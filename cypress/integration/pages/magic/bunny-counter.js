/// <reference types="Cypress" />

export const bunnyCounter = (selector) => {
    return cy.get(selector).children().then((bunnies) => {
        return new Cypress.Promise((resolve) => {
            resolve(bunnies.length);
        })
    });
}

export default bunnyCounter;