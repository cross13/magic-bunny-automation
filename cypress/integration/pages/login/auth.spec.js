/// <reference types="Cypress" />

context('Login Page', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('should have the correct title', () => {
        cy.get('.Login-Title').should('have.text', 'Magic App').should('be.visible');
    });

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

    it('should show the error msg on a failed login with the correct style', () => {
        cy.get('.Login-username').type('fail-user');
        cy.get('.Login-password').type('fail-password');
        cy.get('.Login-submit').click();
        cy.get('.Login-error').contains('Wrong Crendentials');
        cy.get('.Login-error').should('have.css', 'background-color').and('eq', 'rgb(181, 67, 36)');
        cy.get('.Login-error').should('have.css', 'color').and('eq', 'rgb(255, 255, 255)');
    });

    it('should login', () => {
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

    it('should authenticate with the api', () => {
        cy.fixture('login').then((user) => {
            cy.request('POST', Cypress.env('API_URL') + '/login', user)
            .then((xhr) => {
                expect(xhr.body).not.empty;
                expect(xhr.body.token).not.empty;
                localStorage.setItem('myUser', xhr.body);
                
            })
        });
    });

});