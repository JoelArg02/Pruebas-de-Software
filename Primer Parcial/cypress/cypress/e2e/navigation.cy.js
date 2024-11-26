describe('Navigation Tests', () => {
    it('Should navigate to the About page and display correct title', () => {
        cy.visit('/');
        cy.contains('Sobre Nosotros').click();
        cy.url().should('include', '/about');
        cy.title().should('eq', 'Grupo 3 - Acerca de Nosotros');
    });

    it('Should navigate to the Contact page and display correct title', () => {
        cy.visit('/');
        cy.contains('Contactanos').click();
        cy.url().should('include', '/contact');
        cy.title().should('eq', 'Grupo 3 - Contacto');
    });

    it('Should return to Home from Contact', () => {
        cy.visit('/contact');
        cy.contains('Inicio').click();
        cy.url().should('eq', Cypress.config().baseUrl + '/');
        cy.title().should('eq', 'Grupo 3 - Inicio');
    });
});
