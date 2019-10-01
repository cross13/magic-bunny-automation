// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
  cy.server().route('POST', '/login').as('postLogin');

  cy.clearLocalStorage().then((ls) => {
  	expect(ls.getItem('myUser')).to.be.null
  });
  
  cy.get('.Login-username').type(username);
  cy.get('.Login-password').type(password);
  cy.get('.Login-submit').click();
  
  cy.wait('@postLogin').its('status').should('be', 200);
  
  cy.url().should('include', '/magic').then(() => {
    expect(localStorage.getItem('myUser')).not.empty;
    cy.log(localStorage.getItem('myUser'));
  });
  
})