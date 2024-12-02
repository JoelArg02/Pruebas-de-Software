describe('API Screen Tests', () => {
    beforeEach(() => {
        cy.visit('/api');
    });

    it('Debe mostrar el título "Datos de la API"', () => {
        cy.contains('h1', 'Datos de la API').should('exist');
    });

    it('Debe mostrar un spinner mientras se cargan los datos', () => {
        cy.get('.spinner-border').should('exist');
    });

    it('Debe cargar y mostrar los datos de la API en la tabla', () => {
        cy.get('table tbody tr', { timeout: 10000 }).should('have.length', 10);
    });

    it('Debe mostrar los títulos correctos en la tabla', () => {
        cy.get('table tbody tr').each((row, index) => {
            cy.wrap(row).find('td:nth-child(1)').should('contain', index + 1);
        });
    });
});
